---
title: Background Thread vs UI Thread 🧵
date: "2019-12-19T11:04:52.284Z"
description: "A UI thread creates UI elements and waits and responds to events like mouse clicks and key presses. You can only access the UI elements from the UI thread."
categories: [Android]
comments: true
image:
  feature: https://images.unsplash.com/photo-1440635592348-167b1b30296f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=475&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1250
  credit: thomas shellberg
  creditlink: https://unsplash.com/photos/Ki0dpxd3LGc
---

## Background Thread vs UI Thread?

A UI thread creates UI elements and waits and responds to events like mouse clicks and key presses. You can only access the UI elements from the UI thread.
There are two types of threads: background and foreground. A UI thread is an example of a foreground thread.

Background threads don't stop a process from terminating, but foreground threads do. When the last foreground thread stops, then all the background threads are also stopped and the process ends.

> "When an application is launched, the system creates a thread called "main" for the application. The main thread, also called the UI thread..."

### Main Thread == UI Thread

UI Thread and Main Thread are same only in Android.
The Main thread, that is responsible for handling the UI events like Draw, Listen and receive the UI events.
Ans also it is responsible for interact with running components of the UI toolkit for the corresponding application that belongs to.

When an User event occurs in the application, the Main thread need to add the event in the queue -> intimate about the event to appropriate View -> change the state of the view -> redraw the view according to the state changes -> waiting for the response for the particular event action -> after intimated and event action completed need to delete the event in the queue.

The above every actions are handled by the Main thread Not only the above operation, it is a one of the operation handled by the UI Thread, So if our application fails to respond the event about 5 seconds android will shows the error "not responding".
So only it is widely suggested to do the light processes in the UI thread.
