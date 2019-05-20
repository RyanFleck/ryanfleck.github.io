# RyanFleck.Github.IO

The source and content of my personal technical blog. As part of the transition to a public repository, I've removed all of my personal journal entries, scripts, tools, notes, and games. I'll release useful things after considering if they're worth releasing. At the end of it's active life, this site's original repository logged ~4000 commits.

I'll certainly keep a lot of the tricks I used here. All places that link my resume pull the URL from the config, which points to the raw file download of my latest *LaTeX*-generated resume. Using cinematics behind titles, while a bit distracting, I find very visually appealing. Integrating MathJax was hit and miss, as I didn't use it often. Other things, I won't miss; the manual pages, main site, and some specialty pages all had evolving themes over the past two years, and I'll be glad to have more depthful control over my next theme-from-scratch on the *Hugo* engine.

<br />

<br />


### Jekyll Notes

Install Ruby Deps:

```sh
apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
```

*Next:*

Offline stuff
1. <https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/>

Single variable font 
1. <https://caniuse.com/#search=font-variation-settings>
2. <https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts/>

Magic commands:

- `gem upgrade --system 2.7.3`
- `jekyll clean && jekyll build && jekyll serve`
- `git add . && git commit -m "Quick commit" && git push`

Display build status:
```markdown
[![Build Status](https://travis-ci.com/RyanFleck/ryanfleck.github.io.svg?token=etWmvYVue86yTwPL2RCa&branch=master)](https://travis-ci.com/RyanFleck/ryanfleck.github.io)
```

The MINIMA base theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
