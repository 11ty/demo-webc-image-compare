# Progressive Enhancement Recipes using Eleventy WebC Image Comparison Components

A bunch of examples of progressively enhanced server-rendered image comparison web components using WebC.

This component expects two images to be nested inside and will produce a input type range to let the user compare the two images by dragging the range slider.

* [Live demo on Netlify](https://demo-webc-image-compare.netlify.app/)
* [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/11ty/demo-webc-image-compare)
* Using [`@11ty/eleventy-plugin-webc`](https://www.11ty.dev/docs/languages/webc/)
* Originally a demo for a talk given at the [Eleventy Meetup: Adding Components to WebC with Eleventy](https://www.zachleat.com/web/webc-in-eleventy/)

## Examples

1. [Always Enabled](https://demo-webc-image-compare.netlify.app/#enabled): form control is interactive pre-JS and synchronizes post-JS.
1. [Disabled until JavaScript](https://demo-webc-image-compare.netlify.app/#disabled): uses JS to toggle the range input from disabled to enabled.
1. [Hidden via `:not(:defined)` CSS](https://demo-webc-image-compare.netlify.app/#hidden-css)
1. [Hidden via JS `<template>`](https://demo-webc-image-compare.netlify.app/#hidden-tmpl)
1. [Declarative Shadow DOM](https://demo-webc-image-compare.netlify.app/#dsd)
1. [`:has()` and Radios](https://demo-webc-image-compare.netlify.app/#has-radios)
1. [Bonus: `opacity` Slider](https://demo-webc-image-compare.netlify.app/#opacity)