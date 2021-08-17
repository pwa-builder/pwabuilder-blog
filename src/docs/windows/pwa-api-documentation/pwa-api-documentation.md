---
layout: doc
title: Make your PWA feel like a native app on Windows
excerpt: One of the main challenges for web apps on Windows has always been that it is hard for your web app to “feel” like an app to a user.
description: Learn about new advanced capabilities available in Edge and Windows that can raise the quality of your user experience and make your PWA feel native on Windows!
date: 2021-08-05
updatedDate: 2021-08-05
trending: true
featured: false
image: docs/windows/pwa-api-documentation/shortcuts.png
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

<img src="/docs/windows/pwa-api-documentation/in-browser-install.png" width="350px" /> 

This UI provides more info to the user about the PWA, and then the user can choose to install your PWA.

<div class="how-to">
  <strong>How To</strong>

  <p>
    To ensure your PWA is installable, make sure you meet the requirements <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs">listed here</a>, <a href="https://www.pwabuilder.com">PWABuilder</a> can help you meet these requirements if your PWA does not already.
  </p>
</div>

### The Microsoft Store

PWAs can also be installed from the Microsoft Store just like any other app. In fact, the [new Microsoft Store](https://blogs.windows.com/windowsexperience/2021/06/24/building-a-new-open-microsoft-store-on-windows-11/) and updated policies make it easier than ever to get your PWA into the store, even if you use your own payment systems! For more developer information on how this works, check out [our docs](https://blog.pwabuilder.com/posts/bringing-chromium-edge-pwas-to-the-microsoft-store/).

<img src="/docs/windows/pwa-api-documentation/in-store.png" width="350px" /> 

<div class="how-to">
  <strong>How To</strong>

  <p>
    <a href="https://www.pwabuilder.com">PWABuilder</a> can automatically package and submit Chromium Based Edge PWAs to the store, ensuring that your PWA works the same whether its installed from the Store or Edge itself.
  </p>
</div>

## App Experience on Windows
Once your PWA has been installed by the user (either through the Store or Edge) Windows will treat this PWA just like any other app on Windows. Your PWA can be pinned to the Taskbar and Start Menu:

<img src="/docs/windows/pwa-api-documentation/taskbar.png" width="350px" /> 

Your PWA will also open in its own Window:

<img src="/docs/windows/pwa-api-documentation/in-window.png" width="350px" /> 

And finally, it will also show up in your App Settings:

<img src="/docs/windows/pwa-api-documentation/app-settings.png" width="350px" /> 

## File Handling and Integrating with the File Explorer

Handling files has always been a challenge for Web Apps as they have never had the same file handling capability as native apps. For example, you could not simply open a file from the File System, download a file or securely write to a file on the users device. With the [File System API](https://web.dev/file-system-access/), your PWA can now use files with the normal experience users expect from apps.

Your PWA can prompt the user to open a file, open mutiple files, open a directory and save files! Your PWA can also prompt the user for write access to an existing file, allowing your pwa to transparently write to a file without any extra downloads needed.

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://web.dev/file-system-access/">this tutorial</a> to learn how to use the File System Access API and enable this functionality in your PWA.
  </p>
</div>

## Sharing

Sharing content, and ingesting shared content, has always required custom UI and logic from the developer, until today! Your PWA can easily share content using the native Share UI built into Windows:

<img src="/docs/windows/pwa-api-documentation/share.png" width="350px" /> 

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share">this tutorial</a> to learn how to use the Web Share API and enable this functionality in your PWA
  </p>
</div>

Your PWA can also register as a Share Target, enabling your PWA to have content shared directly to it.

<div class="how-to">
  <strong>How To: Share Target</strong>

  <p>
    Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/webappmanifests#identify-your-app-as-a-share-target">this tutorial</a> to learn how to use the Share Target API and enable this functionality in your PWA.
  </p>
</div>

Finally, your PWA can use the early File Handlers API to register as a File Handler for certain file types. This enables you to open a file directly into a PWA, just as you can open images directly into the Photos app from the File Explorer:

<div class="how-to">
  <strong>How To: File Handling</strong>

  <p>
    Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/#file-handling">this documentation</a> to learn more!
  </p>
</div>

## Shortcuts

Using the Web Shortcuts API, PWAs can tie into the shortcuts UI in Windows, enabling users to jump to specific pages or actions in your PWA! This can be useful for

- Mail Applications for example, as you can let users jump straight to writing a new email from a right click on your App Icon in the start menu and taskbar!
- Social Media Apps such as Twitter, which enables users to jump straight into creating a tweet, the notifications screen, reading their DMs and more, all from a right click of the Twitter icon.

<img src="/docs/windows/pwa-api-documentation/shortcuts.png" width="350px" /> 

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/webappmanifests#use-shortcuts-to-provide-quick-access-to-features">this tutorial</a>to learn how to add shortcuts to your PWA.
  </p>
</div>

## The Clipboard

Want to be able to programmatically copy or paste content to and from your PWA? While this was possible before with an older clipboard API built into browsers, the experience was not great. With the new Async Clipboard API it is much easier to programmatically copy and paste everything from text to files. This also works seamlessly with the Cloud Clipboard in Windows!

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://web.dev/async-clipboard/">this tutorial</a> to learn how to use the Async Clipboard API and enable this functionality in your PWA.
  </p>
</div>

## Offline

Progressive Web Apps, unlike traditional web apps, can not only work great offline, but with the APIs available in Edge and other Chromium based browsers your app can provide specific tailored experiences for offline use. Service Workers are the key technology that enables this and therefore you will need one before you can use these APIs (Use [PWABuilder](https://www.pwabuilder.com) to easily grab one, or check out our recommendations [here](/posts/building-pwas-with-web-components!/)). Let’s go through a few of these APIs:

- Service Worker Cache API: The Cache API enables you to cache assets such as HTML, CSS, JavaScript, images, fonts and more to storage, ensuring that your app not only loads while the user is offline, but also loads much faster than coming over the network. This improved loading performance is becoming more important with the rise of always connected PC’s that may not always be on the fastest or most stable internet connection.
- Background Sync: The Background Sync API enables PWAs to retry network requests made while offline once the users device is back online. This enables common useful scenarios for your users such as the ability to post or upload content while the user is offline. The post or upload will be completed once the device is back online.
- Periodic Sync: The Periodic Sync API enables your PWA to sync data in the background (without your PWA being open) if the device is currently online. This enables common scenarios such as:
  o A news app can ensure the user always has the latest news as soon as they open the app as the data has been synced in the background before the app was opened.
  o A music app can ensure a user’s library on a device is always in sync with the cloud.

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/offline#use-the-caching-to-improve-performance-of-pwas">this tutorial</a> to learn more about making your PWA work offline, <a href="https://developers.google.com/web/updates/2015/12/background-sync">this tutorial</a> for more on the Background Sync API and finally, <a href="https://web.dev/periodic-background-sync/">this tutorial</a> on using the Periodic Sync API.
  </p>
</div>

## Push Notifications
PWAs can also receive push notifications, just like any other app on Windows! You will need a Service Worker for this to work (just as with the offline APIs above) and then you can use the Push API to receive push notifications from your server! These notifications will show using the built-in notifications UI in Windows.

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/serviceworker#push-notifications">this tutorial</a> to learn how to set up push notifications for your PWA.
  </p>
</div>

## URL Protocol Handling
This enables you to register your PWA as the default handler for a certain URL scheme. This enables your app to:
-	Prompt the user to set your PWA as the default handler for a certain URL type. For example, an email app that is a PWA can prompt the user to set it as the default app for `mailto` links, enabling your PWA to be the default mail application for that user.

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/#uri-protocol-handling">this tutorial</a> to learn how to use the URL Protocol Handling API
  </p>
</div>

## Touch + Pen
While touch will “just work” with any website, PWAs have access to advanced APIs available to allow you to build custom, optimized, low latency inking and touch experiences that are so vital to many experiences on a Windows device:
-	Pointer Events: The Pointer Events API enables you to see the type of input a user is using (touch, pen or mouse), handle multi-touch gestures, handle custom gestures, if the user is using the eraser or point side of a pen, if the user is hitting a button on their pen, and will even give you everything from the pen pressure being applied to the width and height of the contact point. This enables you to build touch and inking experience that users expect on a Windows device: low latency, multi touch support, top-notch pen support that includes changing the pen stroke size based on pressure etc, just like the native Whiteboard app on Windows.
-	Exact Pointer Data: The getCoalescedEvents API enables you to get detailed information about each pointermove event, which fires every time the user moves a pointer across the screen (such as drawing a line with your pen or finger). Instead of receiving a “coalesced” event you will instead get many events fired that contain the precise data of where the pointer is at that exact moment in time. This enables you to build inking experiences that have the smooth lines and curves that users expect, along with less latency.

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#term_pointer_event">this documentation</a> to learn more about Pointer Events and <a href="https://developers.google.com/web/updates/2017/06/aligning-input-events">this documentation</a> on the getCoalescedEvents API.
  </p>
</div>

## Keep the screen awake
PWAs can also keep the screen awake while the application is being used but not currently being directly interacted with! This can be handy for:
-	Video Chat / media apps: Your app can ensure the device does not go to sleep in the middle of a video chat or media session.
-	Navigation / Maps apps: Make sure the screens stays on while the user is navigating.
-	e-reader apps: Ensure the screen stays on while the user is reading.

<div class="how-to">
  <strong>How To</strong>

  <p>
    Check out <a href="https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API">this documentation</a> to learn more about the Wake Lock API
  </p>
</div>

## Connecting with external devices (Camera, Bluetooth, USB, Serial etc.)

PWAs can also connect with external devices such as the camera, Bluetooth devices, USB devices and even serial devices. Using APIs such as the MediaDevices API or the Web Bluetooth API can enable your PWA to interact with these devices just like any other app can on Windows. This enables many types of apps to be built as PWAs such as advanced video chat apps, full video editing applications such as ClipChamp, apps to integrate with specific Bluetooth enabled devices and more!

<div class="how-to">
  <strong>How To</strong>

  <p>
    To learn how to connect to and interact with the camera and mic on a device check out <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia">this documentation</a> on the MediaDevices API. For Bluetooth devices, <a href="https://web.dev/bluetooth/">this documentation</a> should be helpful. For USB, the <a href="https://web.dev/usb/">Web USB API</a> is what you’re looking for. For interacting with other devices, including printers, Windows Hello and other sensors on the user’s device, Serial devices and more, we recommend <a href="https://web.dev/devices-introduction/">this documentation</a>.
  </p>
</div>

## Customizing the title bar

Want to customize your title bar just like VSCode, Microsoft Teams and other apps on Windows? The Window Controls Overlay API allows you to put custom HTML content in the title bar! This removes the system title bar enabling you to achieve a fully custom UI for your app.

<img src="/docs/windows/pwa-api-documentation/title-bar.png" width="350px" /> 

<div class="how-to">
  <strong>How To</strong>

  <p>
    To learn how to use the Window Controls Overlay API check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/#window-controls-overlay-for-installed-desktop-web-apps">this tutorial</a> from the Edge team that includes examples and goes through all the details you need.
  </p>
</div>