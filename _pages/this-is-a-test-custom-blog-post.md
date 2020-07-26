---
layout: modular
published: true
date: 2020-07-24 00:00:00
permalink: test-test
title: This is a test custom blog post
meta-description:
meta-keywords:
image_path:
categories:
tags:
author: Marie Fe
page_blocks:
  - _id: image-banner
    background_image: /uploads/20200302-1537300.jpg
    banner-height: vh-50
    heading_html: <h1>A new kind of page template</h1>
  - _id: image-gallery
    block-class: dark-bg
    gallery-images:
      - background_image: /uploads/2fa3dd86-0eeb-4117-a804-6586fa47c6df.jpeg
        image-height: portrait
        body-content_html: >-
          <p>This is a sample title</p><p><a target="_blank" rel="noopener"
          href="#">Buy it now&nbsp;</a></p>
      - background_image: /uploads/571d1392-2d3e-425b-96af-b2c28009e133.jpeg
        image-height: portrait
        body-content_html: >-
          <p>Another description&nbsp;</p><p><a href="#">Buy it now
          $37&nbsp;</a></p>
      - background_image: /uploads/75ef853e-025c-4073-8bfe-15d66c98e8d3.jpeg
        image-height: portrait
        body-content_html: '<p>A final description</p><p><a href="#">Buy now $28</a></p>'
  - _id: slideshow-gallery
    block-class: dark-bg
    slideshow-images:
      - background_image: /uploads/13d0dac8-b19d-49f5-a60f-03940ed2db79.jpeg
      - background_image: /uploads/6248302a-9df9-4022-bd7f-3a9f845db39e.jpeg
      - background_image: /uploads/571d1392-2d3e-425b-96af-b2c28009e133.jpeg
  - _id: intro
    block-class: featured-bg
    image-1_path: /uploads/75ef853e-025c-4073-8bfe-15d66c98e8d3.jpeg
    image-2_path: /uploads/coffee-tabel-with-a-book-and-a-chair.jpg
    intro-paragraph-emphasis: 'oh hey there, what a beautiful introduction to this page.'
    body-content_html: >-
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor <strong>incididunt</strong> ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea <u>commodo</u> consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.</p>
  - _id: main-content
    block-class: light-bg
_all-posts: true
_comments:
  slug: this overrides the default url
---

This is big emphasis Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
{: .big-emphasis}

This is emphasis Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{: .emphasis}

This is a normal image.
{: .emphasis}

![](/uploads/2fa3dd86-0eeb-4117-a804-6586fa47c6df.jpeg){: .one-half width="1600" height="2399"}![](/uploads/f95597c7-d2bf-4e6b-8d52-92cd1a3c43ad.jpeg){: .one-half width="1600" height="1999"}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.