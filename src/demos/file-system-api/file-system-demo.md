---
layout: doc
title: File System Access API
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

## Demo

<p class="text-center">
  Note: This API is not supported in cross-origin iframes, therefore we cannot show an inline demo
</p>

[Try it Live](https://wiggly-impossible-crayfish.glitch.me/file-handling.html)

<img src="/demos/file-system-api/file-system.gif" alt="File System Access API" loading="lazy">

Handling files has always been a challenge for Web Apps as they have never had the same file handling capability as native apps. For example, you could not simply open a file from the File System, download a file or securely write to a file on the users device. With the File System API, your PWA can now use files with the normal experience users expect from apps.

Your PWA can prompt the user to open a file, open multiple files, open a directory and save files! Your PWA can also prompt the user for write access to an existing file, allowing your pwa to transparently write to a file without any extra downloads needed.

This API opens up the possiblity for types of apps that, before this API ,would have been almost impossible to build as a PWA. For example, it is now possible to build fully featured text editors, code editors, more advanced image editors etc. Almost every app interfaces with files in some way, and this API makes those interactions feel much more familiar to the user.