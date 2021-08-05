---
layout: doc
title: Make your PWA feel like a native app on Windows
excerpt: One of the main challenges for web apps on Windows has always been that it is hard for your web app to “feel” like an app to a user.
description: Learn about new advanced capabilities available in Edge and Windows that can raise the quality of your user experience and make your PWA feel native on Windows!
date: 2021-08-05
updatedDate: 2021-08-05
trending: false
featured: false
image: docs/windows/windows-store-documentation/StoreLogo.png
isDocumentation: true
backUrl: "/docs"
author:
  name: PWA Builder documentation
tags:
  - docs
  - Documentation
  - Windows
  - Microsoft Store
  - APIs
---

One of the main challenges for web apps on Windows has always been that it is hard for your web app to “feel” like an app to a user. Because web apps couldn’t tie into things such as the native share sheet, Bluetooth or File Explorer and had to use custom UI and application code for these common UX actions, Web Apps did not provide the experience that users expect from applications. For example, how many times have you not shared something after hitting the share button on a website because it asked you to log in before you could share, you couldn’t just easily grab a link, or it didn’t have the service that you were wanting to share too? Or breaking things down even more, how many times have you not used a web app just because it wasn’t on your task bar or start menu?

These are all very common user experience challenges that Web Apps have always encountered, but with the new Chromium based Edge, Project Fugu and PWABuilder, developers now have the APIs and tools they need to truly make their Progressive Web Apps feel like a native app on Windows.

## App Distribution

With Progressive Web Apps, you have 2 channels that users can use to get your PWA onto their Windows device, the Microsoft Store and Microsoft Edge itself.

### In-Browser Install

With the new Chromium based Edge, users can install your PWA right from the browser. When a user navigates to the URL to your PWA in Edge they will be prompted with an “install” icon in the URL bar as the screenshot below shows. Once this install button is clicked, the following UI is shown to the user:

[image coming soon]()

This UI provides more info to the user about the PWA, and then the user can choose to install your PWA.

**How To**
To ensure your PWA is installable, make sure you meet the requirements listed here, [PWABuilder](https://www.pwabuilder.com) can help you meet these requirements if your PWA does not already.

### The Microsoft Store

PWAs can also be installed from the Microsoft Store just like any other app. In fact, the [new Microsoft Store](https://blogs.windows.com/windowsexperience/2021/06/24/building-a-new-open-microsoft-store-on-windows-11/) and updated policies make it easier than ever to get your PWA into the store, even if you use your own payment systems! For more developer information on how this works, check out [our docs](https://blog.pwabuilder.com/posts/bringing-chromium-edge-pwas-to-the-microsoft-store/).

**How To**
[PWABuilder](https://www.pwabuilder.com) can automatically package and submit Chromium Based Edge PWAs to the store, ensuring that your PWA works the same whether its installed from the Store or Edge itself.

Once your PWA has been installed by the user (either through the Store or Edge) Windows will treat this PWA just like any other app on Windows. Your PWA can be pinned to the Taskbar and Start Menu:

[images coming soon]()

Your PWA will also open in its own Window:

[images coming soon]()

And finally, it will also show up in your App Settings:

[images coming soon]()

## File Handling and Integrating with the File Explorer

Handling files has always been a challenge for Web Apps as they have never had the same file handling capability as native apps. For example, you could not simply open a file from the File System, download a file or securely write to a file on the users device. With the [File System API](https://web.dev/file-system-access/), your PWA can now use files with the normal experience users expect from apps.

Your PWA can prompt the user to open a file:

[images coming soon]()

And you can also easily save a file:

[images coming soon]()

**How To**
Check out [this tutorial](https://web.dev/file-system-access/) to learn how to use the File System Access API and enable this functionality in your PWA.

## Sharing

Sharing content, and ingesting shared content, has always required custom UI and logic from the developer, until today! Your PWA can easily share content using the native Share UI built into Windows:

[image coming soon]()

**How To**
Check out [this tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) to learn how to use the Web Share API and enable this functionality in your PWA

Your PWA can also register as a Share Target, enabling your PWA to have content shared directly to it:

[image coming soon]()

**How To**
Check out [this tutorial](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/webappmanifests#identify-your-app-as-a-share-target) to learn how to use the Share Target API and enable this functionality in your PWA.

Finally, your PWA can use the early File Handlers API to register as a File Handler for certain file types. This enables you to open a file directly into a PWA, just as you can open images directly into the Photos app from the File Explorer:

[image coming soon]()

**How To**
The File Handlers API is very early and still being worked on. Check out the API Explainer and some sample code to learn how to start using this API today.

## Shortcuts

Using the Web Shortcuts API, PWAs can tie into the shortcuts UI in Windows, enabling users to jump to specific pages or actions in your PWA! This can be useful for

- Mail Applications for example, as you can let users jump straight to writing a new email from a right click on your App Icon in the start menu and taskbar!
- Social Media Apps such as Twitter, which enables users to jump straight into creating a tweet, the notifications screen, reading their DMs and more, all from a right click of the Twitter icon.

**How To**
Check out [this tutorial](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/webappmanifests#use-shortcuts-to-provide-quick-access-to-features) to learn how to add shortcuts to your PWA.

## The Clipboard

Want to be able to programmatically copy or paste content to and from your PWA? While this was possible before with an older clipboard API built into browsers, the experience was not great. With the new Async Clipboard API it is much easier to programmatically copy and paste everything from text to files. This also works seamlessly with the Cloud Clipboard in Windows!

**How To**
Check out [this tutorial](https://web.dev/async-clipboard/) to learn how to use the Async Clipboard API and enable this functionality in your PWA.

## Offline

Progressive Web Apps, unlike traditional web apps, can not only work great offline, but with the APIs available in Edge and other Chromium based browsers your app can provide specific tailored experiences for offline use. Service Workers are the key technology that enables this and therefore you will need one before you can use these APIs [link incoming](). Let’s go through a few of these APIs:

- Service Worker Cache API: The Cache API enables you to cache assets such as HTML, CSS, JavaScript, images, fonts and more to storage, ensuring that your app not only loads while the user is offline, but also loads much faster than coming over the network. This improved loading performance is becoming more important with the rise of always connected PC’s that may not always be on the fastest or most stable internet connection.
- Background Sync: The Background Sync API enables PWAs to retry network requests made while offline once the users device is back online. This enables common useful scenarios for your users such as the ability to post or upload content while the user is offline. The post or upload will be completed once the device is back online.
- Periodic Sync: The Periodic Sync API enables your PWA to sync data in the background (without your PWA being open) if the device is currently online. This enables common scenarios such as:
  o A news app can ensure the user always has the latest news as soon as they open the app as the data has been synced in the background before the app was opened.
  o A music app can ensure a user’s library on a device is always in sync with the cloud.

**How To**
Check out [this tutorial](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/offline#use-the-caching-to-improve-performance-of-pwas) to learn more about making your PWA work offline, [this tutorial](https://developers.google.com/web/updates/2015/12/background-sync) for more on the Background Sync API and finally, [this tutorial](https://web.dev/periodic-background-sync/) on using the Periodic Sync API.

## Push Notifications
PWAs can also receive push notifications, just like any other app on Windows! You will need a Service Worker for this to work (just as with the offline APIs above) and then you can use the Push API to receive push notifications from your server! These notifications will show using the built-in notifications UI in Windows.

**How To**
Check out [this tutorial](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/serviceworker#push-notifications) to learn how to set up push notifications for your PWA.

## URL Protocol Handling
This enables you to register your PWA as the default handler for a certain URL scheme. This enables your app to:
-	Prompt the user to set your PWA as the default handler for a certain URL type. For example, an email app that is a PWA can prompt the user to set it as the default app for `mailto` links, enabling your PWA to be the default mail application for that user.

**How To**
Check out [this tutorial](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/#uri-protocol-handling) to learn how to use the URL Protocol Handling API

## Touch + Pen
While touch will “just work” with any website, PWAs have access to advanced APIs available to allow you to build custom, optimized, low latency inking and touch experiences that are so vital to many experiences on a Windows device:
-	Pointer Events: The Pointer Events API enables you to see the type of input a user is using (touch, pen or mouse), handle multi-touch gestures, handle custom gestures, if the user is using the eraser or point side of a pen, if the user is hitting a button on their pen, and will even give you everything from the pen pressure being applied to the width and height of the contact point. This enables you to build touch and inking experience that users expect on a Windows device: low latency, multi touch support, top-notch pen support that includes changing the pen stroke size based on pressure etc, just like the native Whiteboard app on Windows.
-	Exact Pointer Data: The getCoalescedEvents API enables you to get detailed information about each pointermove event, which fires every time the user moves a pointer across the screen (such as drawing a line with your pen or finger). Instead of receiving a “coalesced” event you will instead get many events fired that contain the precise data of where the pointer is at that exact moment in time. This enables you to build inking experiences that have the smooth lines and curves that users expect, along with less latency.

**How To**
Check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#term_pointer_event) to learn more about Pointer Events and [this documentation](https://developers.google.com/web/updates/2017/06/aligning-input-events) on the getCoalescedEvents API.

## Keep the screen awake
PWAs can also keep the screen awake while the application is being used but not currently being directly interacted with! This can be handy for:
-	Video Chat / media apps: Your app can ensure the device does not go to sleep in the middle of a video chat or media session.
-	Navigation / Maps apps: Make sure the screens stays on while the user is navigating.
-	e-reader apps: Ensure the screen stays on while the user is reading.

**How To**
Check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#term_pointer_event) to learn more about Pointer Events and [this documentation](https://developers.google.com/web/updates/2017/06/aligning-input-events) on the getCoalescedEvents API.

## Connecting with external devices (Camera, Bluetooth, USB, Serial etc.)

PWAs can also connect with external devices such as the camera, Bluetooth devices, USB devices and even serial devices. Using APIs such as the MediaDevices API or the Web Bluetooth API can enable your PWA to interact with these devices just like any other app can on Windows. This enables many types of apps to be built as PWAs such as advanced video chat apps, full video editing applications such as ClipChamp, apps to integrate with specific Bluetooth enabled devices and more!

**How To**
To learn how to connect to and interact with the camera and mic on a device check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) on the MediaDevices API. For Bluetooth devices, [this documentation](https://web.dev/bluetooth/) should be helpful. For USB, the [Web USB API](https://web.dev/usb/) is what you’re looking for. For interacting with other devices, including printers, Windows Hello and other sensors on the user’s device, Serial devices and more, we recommend [this documentation](https://web.dev/devices-introduction/).