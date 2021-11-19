---
layout: post
title: Make your PWA more app-like with Protocol Handlers
excerpt: New Project Fugu functionality enables deep links into your app.
description: The what and why of manifest-based Protocol Handlers. New browser support coming this month. How to use Protocol Handlers in your PWA.
date: 2021-11-11
trending: false
featured: false
image: posts/manifest-previewer/name-windows.png
isPost: true
backUrl: '/'
author:
  name: Judah Gabriel Himango
tags:
  - post
  - PWA
  - protocol handlers
  - project fugu
---

> **TL;DR**: Protocol Handlers in your web manifest, a [new web capability](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/URLProtocolHandler/explainer.md), goes live in Chromium browsers this week. It can make your PWA more app-like. With PWABuilder, PWAs in the Microsoft Store can now take advantage of this new capability. See it live in our [Protocol Handler demo](#TODO).

## What is it?

Protocols, also known as schemes, are the foundation of URIs:

| protocol         | Example     | Description |
|--------------|-----------|------------|
| `https` | `https://www.pwabuilder.com`      | Web links, e.g. [PWABuilder](https://www.pwabuilder.com)        |
| `mailto` | `mailto:test@domain.com&subject=hello%20world`      | Launches email client and optionally performs a task, such as composing an email: [Compose a new email](mailto:test@domain.com&subject=hello%20world)        |
| `magnet` | `magnet:?xt=urn:btih:c12fe1c06bba254a9dc9f519b335aa7c1367a88a` | Launches a Bitorrent client and begins downloading the content with the specified hash.
| `ftp` | `ftp://user:password@somedomain.com` | File transfer protocol, e.g. [Sample FTP link](ftp://user:password@somedomain.com) |
| `bitcoin` | `bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W` | Protocol for making Bitcoin payements |
| `microsoft-edge` | `microsoft-edge:https://pwabuilder.com`      | Launches Microsoft Edge and optionally navigates to a URL        |
| 

Protocols give users and other apps a convenient way to launch an app and do some activity.

With HTML5, PWAs have been able to register as protocol handlers via [navigator.registerProtocolHandler()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler). Indeed, web apps like Gmail, Outlook, and Google Calendar use protocol handlers today.

Now, **PWAs get even better support**: add a protocol handler to your manifest, and you'll automatically be registered to handle that protocol when the user installs your PWA.

The flow looks like this:

1. User installs your PWA
2. At installation time, your PWA is registered to handle the protocol
3. When a user or app activates your link (e.g. clicking on `web+music://...` URL), your installed PWA is launched and navigates as you see fit.

## What kind of apps should use this?

## How do I use this?

## How is this different from HTML5 Protocol Handlers?

## When is this available?

## Demo

## Summary
 
What is it? PWA devs can put custom protocol registrations (e.g. "web+hulu://...") in their manifest. When installed, the PWA will automatically be registered to handle that protocol.
 
What does it do? Allows deep links into your app via custom protocol (e.g. "web+hulu://shows/the-bachelorette")
 
Why would a PWA use this? When you want other apps to launch your PWA and navigate to some deep link inside it. Hulu is using this to allow their Windows 11 Universal Media Widget (e.g. "Watch The Bachelorette") to launch the Hulu PWA and deep link right to the show.
 
When is this available? Edge 96, set to go stable November 18th.

The web is becoming more capable, further closing the gap between web apps and native apps. 

[Protocol Handlers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/URLProtocolHandler/explainer.md), a new feature pioneered by Google and Microsoft, is rolling out to stable Chromium-based browsers this week. 