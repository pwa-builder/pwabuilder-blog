---
layout: doc
title: Simulate your PWA on Windows 11
excerpt: This guide shows you how to use and customize the PWA simulator
description: This guide shows you how to use and customize the PWA simulator
date: 2021-08-19
trending: true
featured: true
image: docs/windows/pwa-simulator/store-preview.png
isDocumentation: true
backUrl: '/docs'
author:
  name: PWA Builder documentation
tags:
  - docs
  - Documentation
  - Windows
---

This guide shows you how to use the **PWA simulator**, a <a href="https://medium.com/pwabuilder/building-pwas-with-web-components-33f986bf8e4c" target="_blank">web component</a> that allows you to preview your PWA on Windows 11 based on your app's `manifest.json` file. Below is the simulation of <a src="https://www.pwabuilder.com/" target="_blank">PWABuilder</a> [PWABuilder] (try clicking on the taskbar icon!):

<div class="glitch-embed-wrap" style="height: 580px; width: 800px;">
  <iframe
    src="https://glitch.com/embed/#!/embed/misty-sedate-turner?path=pwa-simulator.js&previewSize=100"
    title="misty-sedate-turner on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Do you want to try it out with your own app? Then you can visit the <a href="https://thankful-field-01d77ed10.azurestaticapps.net/" target="_blank">component's demo site</a> and enter the URL to your PWA!

## Installation
The component can be <a href="https://www.npmjs.com/package/@pwabuilder/pwa-simulator" target="_blank">downloaded</a> from `npm` with `npm i @pwabuilder/pwa-simulator`. Typings are also included in the package.

## Using this component
### Modes
The `pwa-simulator` can be used in 2 ways: 
1. **You can enter the PWA's URL in the initially rendered form**, and via the <a href="https://github.com/pwa-builder/pwabuilder-manifest-finder" target="_blank">`pwabuilder-manifest-finder` API</a>, the component fetches the corresponding web manifest. 
<img src="/docs/windows/pwa-simulator/url-form.png" alt="URL simulator form" width="500px" />

2. **The site's URL can be passed as a property to the component**, together with the web manifest. Note that the PWA's URL is still needed in this mode to display the icons and other images.
<img src="/docs/windows/pwa-simulator/mode2-code.png" alt="Mode 2 example" width="500px" />

## Configuration
All properties are optional and have default values, but for the optimal experience these should be modified as needed.
Note that in the HTML markup, property names should be all in lowercase. For more information refer to <a href="https://lit.dev/docs/components/properties/#attributes" target="_blank">lit's documentation</a>.

- `siteUrl`: The PWA's URL. If not defined, the component will initially display a form to input the site's URL (see mode 1 above).
- `manifest`: The input manifest object. The `siteUrl` property should be defined if a manifest is given as input.
  - Default:
  <img src="/docs/windows/pwa-simulator/manifest-template.png" alt="Manifest template" width="600px" />
- `hideEditor`: If true, the code editor is hidden and only the preview window is displayed.
  - Default: `false`
- `explanations`: Object containing the explanation messages that are displayed when the user interacts with the previewer. `initial` is the starting message (can be used to suggest an initial action to the user). `appWindow`, `startMenu`, `jumpList` and `store` are all shown when the respective window is open. If a value isn't specified, the default message is used.
  - Default:
  <img src="/docs/windows/pwa-simulator/descriptions.png" alt="Explanations messages" width="850px" />
- `explanationDisplayTime`: The duration (in milliseconds) of the explanation message display, after which it fades out.
  - Default: 5000 (5 seconds)

## Styling
The simulator exposes the parts below for customization with the <a href="https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/" target="_blank">CSS `::part()` pseudo-element</a>:
- `background`: The simulator's main container.
- `content`: The container of both the text editor and platform window.
- `input-form`: The form for entering the PWA's URL.
- `input-title`: The title of the form for entering the PWA's URL.
- `input-field`: The text field for entering the PWA's URL.
- `input-button`: The button that submits the form for entering the PWA's URL.
- `status-message`: The text that announces changes in the preview manifest.

The following <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank">CSS variables</a> can also be provided:
- `--font-family`: The component's main font family.
- `--font-color`: The component's main font color. 
- `--background`: The CSS background of the entire component.
- `--pwa-background-color`: Fallback background color to use in case it is not defined in the manifest.
- `--pwa-theme-color`: Fallback theme color to use in case it is not defined in the manifest.

## Need help?
Are you having trouble using this component, encountered a bug, or just have a question concerning its customization? Then feel free to <a href="https://github.com/pwa-builder/pwa-simulator" target="_blank">open an issue</a> and we'll do our best to help! 