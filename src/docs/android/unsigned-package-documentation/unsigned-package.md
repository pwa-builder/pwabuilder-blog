---
layout: doc
title: How to sign your unsigned package
excerpt: You chose to generate an *unsigned* package, so there are just a few additional steps
description: You chose to generate an *unsigned* package, so there are just a few additional steps
date: 2021-09-17
updatedDate: 2021-09-17
trending: true
featured: true
recommended: true
isDocumentation: true
backUrl: '/docs'
author:
  name: PWA Builder documentation
tags:
  - docs
  - Documentation
  - Android
  - PlayStore
---

You chose to generate an *unsigned* package, so there are a few additional steps. If you'd rather generated a signed package, you can do so in [PWABuilder's Android Options dialog](/docs/android/generating-android-package).

Your next steps:
1. Sign your APK.
2. Generate `assetlinks.json` and deploy to your server.
3. Test your package on an Android device or Android emulator.
4. Upload your `apk` file to the Google Play Store.

Each step is explained below.

## 1. Sign your APK

You instructed PWABuilder to generate an *unsigned* APK. Before you can test your APK, you'll need to sign it.

To sign your APK, you can either [instruct PWABuilder to generate a signed APK](/docs/android/generating-android-package), or you can [manually sign it](https://developer.android.com/studio/publish/app-signing) with a new or existing key.

💁‍♂️ *Heads up*: If you create a new signing key, make sure you keep it and its credentials in a safe place. You'll need it again to upload future versions of your app.