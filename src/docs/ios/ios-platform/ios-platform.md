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
The PWABuilder iOS platform is an experimental project that utilizes a Webkit-based web view (WKWebView) to load your PWA on iOS and enable some PWA functionality. 

When you use PWABuilder to package your PWA for iOS, your download will include an Xcode project customized for your PWA. Once downloaded, see [Next Steps for iOS](../next-steps).

## What can it do?

- Service worker support
- URL capture
- Permitted navigation scopes
- Status bar customization based on your manifest's `background_color`
- Splash screen based on your manifest's `theme_color`, `icons`, and `background_color`.
- iOS app awareness from JS
- Mac Store support

## PWABuilder iOS documentation

1. [Next steps for building your iOS app](/../docs/generating-your-android-package)
2. [Testing and publishing your your app to the Google Play Store](/docs/testing-and-publishing-your-android-pwa-to-the-google-play-store)
3. [Updating your existing app](/docs/updating-your-existing-app)
4. [Removing the Browser Address Bar: Asset Links](/docs/removing-the-browser-address-bar)

## A special thanks

A great big thank you to PWA enthusiast and open sourcer [Gleb Khmyznikov](https://github.com/khmyznikov). In the true open source spirit, Gleb, along with several members of the PWABuilder open source community, sent us open source iOS projects they had successfully published to the iOS App Store. Gleb suggested we could fork his project for a fresh PWABuilder iOS platform based on latest iOS technologies.

Gleb encouraged us, provided us help, and [his code](https://github.com/khmyznikov/ios-pwa-wrap/) served as the base foundation for PWABuilder's iOS platform. Gleb, you rock! Thank you for your code, your encouragement, your technical help, your answers to our questions over the last few months. ♥

## Disclaimer

PWABuilder's iOS platform is experimental, and PWABuilder doesn't guarantee that your app will be accepted into Apple's App Store.

In 2019, Apple released new [guidelines for HTML5 apps in the App Store](https://developer.apple.com/news/?id=09062019b). The new guidelines appear to state that certain kinds of web apps (gambling, lotteries, etc.) may not be accepted into the App Store.

The PWABuilder team attempted to clarify with Apple their stance on PWAs in their App Store. Despite several meetings, we were unable to receive an official answer from Apple.

Since that time, a few members of the PWABuilder open source community successfully published PWAs in the iOS app store via web view-based apps. Thus, we are releasing our new iOS platform with the knowledge that Apple may not approve some PWAs, especially if they are little more than traditional websites in an app frame.

**Our recommendation is to build a great PWA.** PWAs that provide real value to users, PWAs that are more than just websites, PWAs that look and feel like real apps. These are more likely to pass certification and get into the app store. Provide value to your users, and app stores will _want_ your PWA.