---
title: "Optimumkan Kotlin code dengan Inline Function"
publishedAt: 2021-03-11
image: ''
description: "Dalam Kotlin, inline function memainkan peranan penting dalam mengoptimumkan code performance, terutamanya apabila menggunakan higher order function (lambda)."
language: "Kotlin"
---

## Optimumkan Kotlin code dengan Inline Function

### Pengenalan
Dalam Kotlin, inline function memainkan peranan penting dalam mengoptimumkan code performance, terutamanya apabila menggunakan higher order function (lambda). 

### Memahami Inline Function
Inline function adalah function yang body codenya akan dicopy secara langsung ke tempat ia dipanggil semasa proses compilation oleh compiler. Ini bermakna, bukannya membuat panggilan seperti normal function, code dalam inline function akan diletakkan di tempat function calls tersebut, seolah-olah code itu ditulis di situ dari awal. 

### Bagaimana Inline Function Berfungsi
Apabila kita declare sebuah inline function, compiler akan 'menanam' body function tersebut ke dalam code yang memanggil function itu. Ini menghapuskan keperluan untuk object creation & anonymous class, yang boleh mengurangkan memory  usage & meningkatkan performance.

Contoh Non-Inline Function:
```kotlin
fun sum(operation: (Int, Int) -> Int) {
    operation(5, 10)
}

fun main() {
    sum { x, y ->
x + y
    }
}
```

Contoh Inline Function:
```kotlin
inline fun sum(operation: (Int, Int) -> Int) {
    operation(5, 10)
}

fun main() {
    sum { x, y ->
    x + y
    }
}
```

Dalam contoh di atas function sum akan mengambil sebuah lambda sebagai paramenter. Tanpa inline, lambda akan diwakili sebagai object & memerlukan memory allocation. Dengan inline, tiada object creation; sebaliknya, lambda code akan di copy terus ke tempat function calls.

### Perbezaan Inline & Non Inline Function
| Aspek | Fungsi `Inline` | Fungsi Bukan `Inline` |
|-------|-----------------|-----------------------|
| **Definisi** | Fungsi yang dideklarasikan dengan kata kunci `inline`. Kompiler akan menggantikan panggilan fungsi dengan kod sebenar fungsi tersebut. | Fungsi biasa tanpa kata kunci `inline`. Mekanisme panggilan fungsi biasa digunakan. |
| **Prestasi** | Boleh meningkatkan prestasi dengan menghapuskan overhead panggilan fungsi, terutama untuk fungsi tingkat tinggi. | Mempunyai sedikit overhead kerana mekanisme panggilan fungsi. |
| **Saiz Bytecode** | Boleh meningkatkan saiz bytecode akhir kerana kod fungsi diduplikasi untuk setiap panggilan. | Tidak meningkatkan saiz bytecode. |
| **Kes Penggunaan** | Berguna terutamanya apabila bekerja dengan fungsi tingkat tinggi yang mengambil lambda sebagai parameter. | Digunakan untuk panggilan fungsi biasa di mana pengoptimuman prestasi tidak diperlukan. |
| **Kawalan Aliran** | Membolehkan `return` bukan lokal dari lambda, yang bermakna kita boleh keluar dari fungsi yang mengandungi fungsi `inline`. | `Return` bukan lokal tidak dibenarkan dalam lambda kerana lambda tidak boleh membuat fungsi yang melingkupinya untuk `return`. |

### Kelebihan Inline Function
1. Pengurangan Overhead: Menghapuskan overhead yg berkaitan dengan function calls & object creation
2. Meningkatkan Performance: Dapat meningkatkan performance app, terutamanya dalam loop atau fungsi yg dipanggil berulang kali
3. Kawal Flow: Membolehkan 'return' bukan local dari lambda, yg bermakna kita boleh keluar dari function yang mengandungi inline function.

### Kekurangan Inline Function
1. Peningkatan Saiz Bytecode: Jika digunakan secara berlebihan, boleh menyebabkan peningkatan saiz bytecode kerana code berganda.
2. Pemilihan Use Case: Tidak semua function memerlukan atau mendapat benefits dari inline function.

## Konklusi
Secara keseluruhannya, fungsi inline adalah alat yang bagus membantu mengoptimumkan code. Namun, ia harus digunakan dengan bijak untuk menggelakan peningkatan saiz bytecode yang tidak perlu.