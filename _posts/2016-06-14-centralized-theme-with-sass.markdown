---
layout: post
title:  "Centralized Themeing with Sass Variables"
date:   2016-06-14 11:00:00 -0600
meta_desc: Using Sass variables in a centralized theme file makes sitewide theme updates simple.
summary: When the basic elements of a website's theme can all be tweaked through a single, well-organized file, it makes for much cleaner, more scalable code that any developer can hopefully jump in and work on without too much upfront investigation.
---
I've always struggled with choosing a color palette for my personal work. Not so much finding a palette that looks nice, [Adobe Color](https://color.adobe.com/) makes that part simple, but choosing something I feel satisfied with and like the look of when a whole site comes together. It may not be able to help me choose a palette I'll be happy with long-term, but [Sass](http://sass-lang.com/) provides a simple, albeit great, tool to make the theme layer of any site much more flexible through the use of variables and some critical thought.

The actual breakdown can vary by site based on factors like scale and complexity of the theme layer. Given that, the general idea is to use a Sass partial as a centralized control hub for theme components that require flexibility or have a tendency to change frequently. Just as any good web project should, this requires some up-front planning to ensure a holistic approach is taken. This planning process can be as simple as writing out a list that represents the directory structure of the Sass files for the project, or as complex as planning everything intended to be stored in Sass variables in a spreadsheet.

For this project (the website you're looking at), all of the Sass variable definitions live in a file in a my Sass directory located at `base/_vars.scss`. Before getting started, I decided that the three pieces of my theme layer I wanted to control from this file were colors, fonts and some dimensions. It's important to have a pretty good idea of what these items are from the start, but, in the end, the resulting system should be flexible enough to accomodate additions and growth (scalability!).

Within my [variables file](https://github.com/nswitzer/1aw/blob/master/_sass/base/_vars.scss), you can clearly see those three sections broken out. Under each section, I also thought about three different sub-sections: base, sitewide and element-specific defintions. Base includes things like the hex values that make up the site color palette or the baseline dimensions used in layouts, sitewide should hopefully be obvious and element-specific defintions are individual components that require additional or different styling. Here's a sample of the fonts section of my _vars file:

{% highlight sass %}

//
// Fonts
//

$open-sans: 'Open Sans', sans-serif; // Available weights: 400, 700
$merriweather: 'Merriweather', serif; // Available weights: 400, 700
$icomoon: 'icomoon';
$arial: Arial, sans-serif;

// Sitewide Font Definitions
$base-font-family: $merriweather;
$base-font-size: 16px;
$base-font-weight: 400;
$base-font-color: $gray-blue;
$base-line-height: 1.5;

$link-font-color: $light-blue;
$link-font-color-hover: $light-gray;

$header-font-family: $open-sans;
$header-font-color: $base-font-color;
$header-font-weight: 700;
$header-line-height: 1;
$h1-font-size: 36px;
$h2-font-size: 30px;
$h3-font-size: 24px;
$h4-font-size: 18px;
$h5-font-size: 14px;
$h6-font-size: 12px;

// Element Font Definitions
$site-title-font-family: $open-sans;
$site-title-font-size: 36px;
$site-title-font-weight: 700;
$site-title-font-color: $white;

$nav-font-family: $open-sans;
$nav-font-size: 14px;
$nav-font-weight: 700;
$nav-font-color: $white;
$nav-font-color-hover: $red;

$blockquote-font-size: 24px;
$blockquote-font-weight: 700;
$blockquote-font-style: italic;

$post-meta-font-size: 14px;
$post-meta-font-style: italic;

$form-input-font-family: $merriweather;
$form-input-font-size: $base-font-size;
$form-input-font-color: $gray-blue;

$button-font-color: $gray-blue;
$button-font-weight: 700;

$site-footer-font-size: 12px;
$site-footer-font-color: $light-blue;

{% endhighlight %}

Since I have basically created an abstraction layer in this file, any time I want to change these values I can just update them here because the variables that actually apply these settings in my other Sass partials shouldn't ever need to change. This makes my life way easier when I decide I'd like to change my site color palette or experiment with some new fonts. What I find especially useful about this approach is that it does make experimentation much more plausible. When the basic elements of a website's theme can all be tweaked through a single, well-organized file, it makes for much cleaner, more scalable code that any developer can hopefully jump in and work on without too much upfront investigation.