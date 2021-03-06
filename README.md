# PWA Builder Blog

[![Discord Shield](https://discordapp.com/api/guilds/732665868521177117/widget.png?style=shield)](https://discord.gg/CZ85mguYjK)

America's favorite [Eleventy](https://www.11ty.dev) blog template. Built by [Reese Schultz](https://github.com/reeseschultz).

View the [demo](https://reeseschultz.github.io/11r/).

## Features

- [Eleventy](https://www.11ty.dev) for static site generation. See `.eleventy.js`.
- [Nunjucks](https://mozilla.github.io/nunjucks/) for templating.
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling. See `tailwind.config.js` and `src/styles/tailwind.css`.
- [Prism](https://prismjs.com/) syntax highlighting for code with copy button scripting included via [clipboard.js](https://clipboardjs.com/). See `src/styles/base.css` for the theme; and `src/scripts/copy.js`, which is used by `main.js`.
- [Rollup](https://rollupjs.org) for bundling and compiling. See `rollup.config.js`.which is used by `main.js`.
- [Pagination](https://www.11ty.dev/docs/pagination/).
- Exemplary [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) usage.
- SEO mostly done for you. Ensure you replace the data referenced in `src/globals/site.json`, including the images in `public/`.

## Setup

1. `git clone git@github.com:pwa-builder/pwabuilder-blog.git`
1. `cd pwabuilder-blog && yarn install`
1. `yarn dev` to serve the site.
1. `yarn build` to build the site.

## Tag Styling

Tags are styled in `src/styles/tags.css`. Coloring custom tags works as such:

```css
...

.tag.beer {
  @apply bg-blue-700;
}

.tag.spirituality {
  @apply bg-indigo-700;
}

.tag.orcas {
  @apply bg-purple-700;
}

...
```

## Credits

- This project was forked from [11ty Starter](https://github.com/mattwaler/eleventy-starter) by [Matt Waler](https://mattwaler.com/).
- The code copying script was adapted from [https://codepen.io/wilbo/pen/xRVLOj](https://codepen.io/wilbo/pen/xRVLOj) by [Wilbert Schepenaar](https://wilbert.dev/).
- SEO handling was inspired from [Skeleventy](https://github.com/josephdyer/skeleventy) by [Joseph Dyer](https://github.com/josephdyer).

## Contributing

Find a problem, or have an improvement in mind? Great. Go ahead and submit a pull request. Note that the maintainer offers no assurance he will respond to you, fix bugs or add features on your behalf in a timely fashion, if ever. All that said, [GitHub Issues](https://github.com/reeseschultz/11r/issues/new/choose) is fine for constructive discussion.

By submitting a pull request, you agree to license your work under [this project's MIT license](https://github.com/reeseschultz/11r/blob/main/LICENSE).

## Blog Template

```md
---
layout: post
title: Title
excerpt: Short description
description: Long description
date: 2021-01-01
updatedDate: 2021-01-01
trending: true
featured: true
image: placeholder.png
author:
name: John Doe
tags:
  - post
  - template
---

### Sub title

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod quis. Ac auctor augue mauris augue. Convallis tellus id interdum velit laoreet id donec ultrices. Aliquam eleifend mi in nulla posuere. Pretium quam vulputate dignissim suspendisse in est. Orci sagittis eu volutpat odio facilisis mauris sit.
![test](/placeholder.png)
```
