---
layout: post
title: Publish your PWAs to the iOS App Store with PWABuilder
excerpt: Announcing PWABuilder's new iOS platform. Publish your PWA to the App Store and gain new iPhone and iPad users.
description: Announcing PWABuilder's new iOS platform. Publish your PWA to the App Store and gain new iPhone and iPad users.
date: 2021-10-28
updatedDate: 2021-10-28
trending: true
featured: true
image: posts/introducing-the-brand-new-pwa-builder/ios-announcement.png
isPost: true
backUrl: '/'
author:
  name: Judah Gabriel Himango
  twitter: https://twitter.com/judahgabriel
  title: Software Engineer
tags:
  - post
  - iOS
  - PWA
  - Apple
  - App Store
---

Today, the [PWABuilder](https://www.pwabuilder.com) team is happy to announce the release of **PWABuilder's iOS platform preview**. It gives you an easy way to publish your Progressive Web Apps (PWAs) to the iOS App Store.

Try it now:

1. Go to [PWABuilder.com](https://www.pwabuilder.com) and analyze your PWA's URL. (Don't have a PWA? Use https://webboard.app)
2. Click `Next` to advance to the publish page.
3. You'll see the iOS publish section. Choose `Store Package`: <br><a href="http://www.pwabuilder.com/publish?site=https://webboard.app" target="_blank"><img loading="lazy" src="/posts/announcing-ios/ios-publish-section.png" alt="Screenshot of the new iOS publishing section on PWABuilder" /></a>
4. You'll be prompted for metadata about your app, such as app name, URL, icons, and more. By default, we populate these based on your PWA's web app manifest. <br><img loading="lazy" src="/posts/announcing-ios/ios-options.png" />
5. Click `Generate` to download your iOS app package.
6. Your download will contain [instructions](/docs/ios-next-steps) for submitting the package to the iOS App Store.

## What is it?

When you generate an iOS app for your PWA, we create a native Swift app with a [WebKit web view](https://developer.apple.com/documentation/webkit/wkwebview) to load your PWA while enabling some PWA features, such as service workers, theme colors, background color, app icons, in-scope URLs, and more.

It pulls values from your PWA's manifest as these defaults, allowing you to override them in the PWABuilder iOS options dialog seen above. If your PWA manifest doesn't have the all the right-sized images for the iOS app, the platform will generate these images for you, scaling down from a large, square, `any` purpose PNG icon from your manifest.

It packages this all together as an Xcode project workspace that you can [build in Xcode](/docs/ios-next-steps) and [publish to the App Store](/docs/ios-app-submission).

## Why should I use this?

We've trained a generation of users to look for apps in the App Store. By publishing your PWA to the iOS App Store, you broaden your audience. 

Additionally, using our iOS platform, your PWA becomes a first-class citizen on iOS devices. Your app shows up on the user's homescreen without clunky Safari installation flows.

## What do I need?

You can generate an iOS app from your PWA from your browser.

- To build the project, you'll [need a Mac with Xcode installed](https://github.com/pwa-builder/pwabuilder-ios/issues/9). 
- To publish your PWA to the App Store, you'll need an Apple Developer account.

See [our FAQ](/docs/ios-faq) for details.

## What can it do?

In short:

- Service worker support
- URL capture
- Permitted navigation scopes
- Status bar customization based on your manifest's `background_color`
- Splash screen based on your manifest's `theme_color`, `icons`, and `background_color`.
- iOS app awareness from JS
- Mac Store support

#### Service workers

We utilize [App-Bound Domains](https://webkit.org/blog/10882/app-bound-domains/) to enable service workers to function when your PWA is run on supported platforms (iOS 14 and above). 

#### URL capture

By default, PWABuilder's iOS platform generates a URL capture-ready app. If a user installs your app, you can have your app's URLs open in your PWA, rather than in the browser. 

To enable this, deploy an [Apple App-Site Association file](https://developer.apple.com/documentation/xcode/supporting-associated-domains) to your web server. Your app already contains the necessary configuration to utilize link capture. See [our iOS Platform FAQ](/docs/ios-faq) for more info.

#### Permitted navigation scopes

When you generate your iOS app in PWABuilder, you can specify a list of permitted URLs that are considered in-scope for the app:

<img loading="lazy" src="/permitted-urls.png" />

This can be useful when your PWA needs to work with 3rd party URLs, such as `Login with Google` or other authentication providers.

#### Status bar customization

The iOS status bar -- containing your iPhone's reception bars, battery level, and more -- can be customized when shown in your app. By default, we set the status bar color to your manifest's `background_color`, or white if you don't have a `background_color` supplied.

As a future enhancement, we may allow you to hide the status bar -- useful in `display: fullscreen` PWAs like games -- as well as change the status bar foreground color.

#### Splash screen

While your app loads and while the inner web view loads your PWA, users will see a splash screen. The splash screen will be a solid background color, with your app's icon centered and a progress bar beneath it:

<img loading="lazy" src="/ios-splash.png" />

When your app finishes initializing and your PWA completes loading into the web view, the splash screen disappears and your PWA takes the fore.

#### iOS app awareness from JS

In your PWA, you can detect if you're running in the iOS app by looking for an `app-platform` cookie, its value set to `iOS App Store`.

#### Mac Store support

When publishing your iOS app, you can opt-in to publishing to the Mac App Store as well. Your app will be available to macOS 11 on M1 chips.

## What **can't** it do

#### Push Notifications

We currently don't support push notifications. We have partial support in the platform for enabling push notifications via Firebase, but the code is currently commented out, and PWABuilder has no UI for letting you input your push notification details.

If Push Notification support is important to you, [upvote this issue](https://github.com/pwa-builder/pwabuilder-ios/issues/6).

#### Shortcuts

We currently don't support web manifest shortcuts. We'd be glad to accept a PR for this. 😊

In the meantime, if Shortcut support is important to you, [upvote this issue](https://github.com/pwa-builder/pwabuilder-ios/issues/7).

#### iOS feature X

Our template doesn't include support for iOS-specific functionality like Apple Pay, Sign In with Apple, HealthKit, etc. 

But that doesn't mean you can't add them. 

To add support for iOS-specific functionality, you'd enable the capability when [creating your Bundle ID](/docs/ios-app-submission), then update your Xcode project to take advantage of the new capability. See [our FAQ](/docs/ios-faq) for more info. 

We also be glad to accept PRs enabling such functionality into [our iOS project template code](https://github.com/pwa-builder/pwabuilder-ios/tree/main/Microsoft.PWABuilder.IOS.Web/Resources/ios-project-src).

## Does this mean Apple loves PWAs now?

No. 

[Microsoft Store supports PWAs](posts/bringing-chromium-edge-pwas-to-the-microsoft-store/) as first-class apps. Google Play [does as well](/posts/microsoft-and-google-team-up-to-make-pwas-better-in-the-play-store). 

But Apple's PWA support is still very much lagging behind Android and Windows. At this time, [PWAs remain a second-class citizen on iOS](https://firt.dev/ios-14.5/), and App Store support for PWAs is non-existent, requiring a web view-based solution like PWABuilder's.

Additionally, because iOS doesn't allow 3rd party web browser engines, your PWA is limited to WebKit's PWA capabilities, which are currently lagging behind other browser engines.

With the recent announcements of powerful apps moving to the web, such as [VS Code](https://vscode.dev) and [Photoshop](https://web.dev/ps-on-the-web/), we hope to see Apple improve PWA support in Safari, WebKit, and the App Store.

## Will Apple approve my PWA?

PWABuilder doesn't guarantee that your app will be accepted into Apple's App Store.

In 2019, Apple released [new guidelines for HTML5 apps in the App Store](https://developer.apple.com/news/?id=09062019b). The new guidelines appear to forbid certain kinds of web apps (gambling, lotteries, etc.) from the App Store.

The PWABuilder team attempted to clarify with Apple their general stance on PWAs in the App Store. Despite several meetings, we were unable to receive an official answer from Apple.

Since that time, a few members of the PWABuilder open source community successfully published PWAs in the iOS App Store. Thus, we are releasing our new iOS platform with the knowledge that Apple may not approve some PWAs, especially if they are little more than traditional websites in an app frame.

**Our recommendation is to build a great PWA.** PWAs that provide real value to users, PWAs that are more than just websites, PWAs that look, feel, and behave like real apps. These are more likely to pass certification and get into the app store. Provide value to your users, and app stores will want your PWA.

## Where can I learn more?

Check out our PWABuilder iOS documentation:

- [Intro to iOS PWAs](/docs/ios-platform)
- [How to build and test your iOS PWA](/docs/ios-next-steps)
- [Publishing your PWA to the iOS App Store](/docs/ios-app-submission)
- [iOS PWAs frequently asked questions (FAQs)](/docs/ios-faq)

If you need help or have questions, we'd be glad you can file an issue over at our main PWABuilder repository.

## A special thank you

A great big thank you to PWA enthusiast and open sourcer [Gleb Khmyznikov](https://github.com/khmyznikov). In the true open source spirit, several members of the PWABuilder open source community, including Gleb himself, sent us open source iOS projects they had successfully published to the iOS App Store. Gleb suggested we could fork his project for a fresh PWABuilder iOS platform based on latest iOS technologies.

Gleb encouraged us, provided us help, and [his code](https://github.com/khmyznikov/pwa-install/) served as the base foundation for PWABuilder's iOS platform. Gleb, you rock! Thank you for your code, your encouragement, your technical help, your answers to our questions over the last few months. ♥

## Summary

PWABuilder's iOS platform preview is live! Go try it out on [pwabuilder.com](https://www.pwabuilder.com). 

If you've got questions, bug reports, feature requests, [open an issue on our Github repo](https://github.com/pwa-builder/pwabuilder/issues). You can also reach us [@pwabuilder on Twitter](https://twitter.com/pwabuilder).