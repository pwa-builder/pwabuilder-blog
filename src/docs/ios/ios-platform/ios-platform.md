layout: doc
title: PWABuilder iOS Platform Documentation
excerpt: Everything you need to know to build an iOS app from your PWA
description: Everything you need to know to build an iOS app from your PWA
date: 2021-10-26
updatedDate: 2021-10-26
trending: false
featured: true
recommended: true
isDocumentation: true
backUrl: '/docs'
image: docs/ios/ios-appstore-documentation/StoreLogo.png
author:
  name: PWA Builder documentation
tags:
  - docs
  - Documentation
  - iOS
---
The PWABuilder iOS platform is an experimental project that utilizes a Webkit-based web view (WKWebView) to load your PWA on iOS and enable some PWA functionality. The platform is based on a modified fork of [Gleb Kymyznikov's PWA iOS project](https://github.com/khmyznikov/pwa-install/), licensed under [The Unlicense](https://unlicense.org/). A big thanks to Gleb for permitting PWABuilder to to use, fork, and improve on his PWA template, and for his help in making this project a reality.

When you use PWABuilder to package your PWA for iOS, your download will include an Xcode project customized for your PWA. Once downloaded, see [Next Steps for iOS](../next-steps).

## What can you customize?

## Disclaimer

This project is experimental, and PWABuilder doesn't guarantee that your app will be accepted into Apple's App Store.

In 2019, Apple released new [guidelines for HTML5 apps in the App Store](https://developer.apple.com/news/?id=09062019b). The new guidelines appear to state that certain kinds of web apps (gambling, lotteries, etc.) may not be accepted into the App Store.

The PWABuilder team attempted to clarify with Apple their stance on PWAs in their App Store. Despite several meetings, we were unable to receive an official answer from Apple.

Since that time, a few members of the PWABuilder open source community successfully published PWAs in the iOS app store via web view-based apps. Thus, we are releasing our new iOS platform with the knowledge that Apple may not approve some PWAs, especially if they are little more than traditional websites in an app frame.

**Our recommendation is to build a great PWA.** PWAs that provide real value to users, PWAs that are more than just websites, PWAs that look and feel like real apps. These are more likely to pass certification and get into the app store. Provide value to your users, and app stores will _want_ your PWA.

## PWABuilder iOS documentation

- [Next steps for building your iOS app](/../docs/generating-your-android-package)
2. [Testing and publishing your your app to the Google Play Store](/docs/testing-and-publishing-your-android-pwa-to-the-google-play-store)
3. [Updating your existing app](/docs/updating-your-existing-app)
4. [Removing the Browser Address Bar: Asset Links](/docs/removing-the-browser-address-bar)