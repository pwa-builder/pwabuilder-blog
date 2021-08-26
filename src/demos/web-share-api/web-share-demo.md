---
layout: doc
title: Web Share API
excerpt: The File System Access API provides programmatic access to the file system, enabling...
description: The File System Access API provides programmatic access to the file system, enabling you to build PWAs that interact with the users files just like any native application on Windows. This enables a whole new class of powerful applications to be built as PWAs, including advanced photo editors, code editors and more!
date: 2021-08-26
updatedDate: 2021-08-26
trending: true
featured: false
image: docs/windows/windows-store-documentation/StoreLogo.png
isDemo: true
backUrl: '/demos'
author:
  name: PWABuilder Team
tags:
  - demos
  - Windows
  - Microsoft Store
---

<p class="text-center">
  Note: This API is not supported in cross-origin iframes, therefore we cannot show an inline demo
</p>

## Demo
[Try it Live](https://wiggly-impossible-crayfish.glitch.me/web-share.html)

## More Information

[Learn how to use this API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)

Sharing content, and ingesting shared content, has always required custom UI and logic from the developer:

<img src="/demos/web-share-api/custom-share.png" loading="lazy" alt="A screenshot of some custom share UI">

This unfortunately has many issues, such as loading in large amounts of code for each individual platform you can share too which can cause your app to load slowly. There is also accessibility challenges, developer maintnence challenges and more.

But this changes with the Web Share API! Your PWA can easily share content using the native Share UI built into Windows:

A screenshot of the share dialog on Windows
<img src="/demos/web-share-api/native-share.png" loading="lazy" alt="A screenshot of the share dialog on Windows">

This only requires a tiny amount of JavaScript, and all the details are handled automatically by the Windows Share UI.