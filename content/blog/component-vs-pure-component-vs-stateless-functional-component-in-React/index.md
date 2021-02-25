---
title: Component VS Pure Component VS Stateless Functional Component ⚙️
date: "2020-08-01T11:12:52.284Z"
description: "In react there's different between component, pure component, and a stateless functional component."
categories: [JS]
comments: true
image:
  feature: https://images.unsplash.com/photo-1440635592348-167b1b30296f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=475&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1250
  credit: thomas shellberg
  creditlink: https://unsplash.com/photos/Ki0dpxd3LGc
---

## What is Component?

> Typical React app will have many of these. Component is a JS class or function that optionally accepts inputs i.e properties(props) & retuns a React element that describes how a section of the UI should appear.

## Stateless Functional Component

> It is component that are not using any kind of state, refs,or lifecycle methods.
>It is state-less & just a constant function that returns some data
>In simple words, stateless functional components are just functions that return JSX.

## Pure Components

> Usually, when a component get a new prop into it, React will re-render that component. But sometimes, a component get new props that haven't really changed. but React will still trigger a re-render.

> Using Pure Component will help you prevent this wasted re-render

