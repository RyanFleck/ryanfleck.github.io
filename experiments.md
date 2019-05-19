---
layout: expo
title: Experiments
cat: experiment
image: cinemagraph/clouds.gif
subtitle: "Miscallaneous tinkering with languages, programs and frameworks."
permalink: /experiments/
---

<br />

## Current Activity
I am presently busy learning things for upcoming contributions to projects related to *XAlgoAuthor* and *Lichen*, projects maintained by the Xalgorithms alliance.

During the week, I spend some of my spare and commuting time (when I'm not tinkering with GNU/Linux,) to complete small projects. Here are some planned projects:

5. **TechniColor for Engineers** - A desktop color-picking tool that shows both the hex code and the common name for a color onscreen, so you can direct users to the *aubergine colored button.*
1. **todo.ez** - Project management software that sweeps a repository for TODO tags, and displays information about each, including syntax-highlighted next 'n' lines or the next function, and adds severity/priority data to the TODO.
2. **rtouch** - An option for touch that initializes a file ending with a recognized format with generic (modifiable,) boilerplate.
3. **gacp** - Simple script that checks for temporary files, adds, commits (-m provides message,) and pushes to a repo. Basic implementation could just be an alias. For solo vcs usage.
4. **Vulkan, Godot, GameMaker, LibGDX** - Many tests and small games, will post here when near completion.

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

<br />

## Hackathon Projects

1. **MLH uOttaHack 2018** - Built ["LightShow.eth"](https://github.com/RyanFleck/eth-lightShow-uottahack), an interactive public art project, leveraging the ethereum blockchain, solidity, node.js and arduino/C++.
2. **Pebble Hackathon 2016** - Implemented a simple watchface that showed the date, time, connection state and adapted to different watch models (round, square.)

<br />

## Web Experiments
I have only been learning bits and pieces of web development *(html5/CSS, SASS, Node.js, Rails, etc...)* for a month or so, here are some of the basic things I have created in that time:
1. [**CSS Grid** front page prototype]({{ site.url }}/news)
1. [My old 'resume' website. *(Out of date.)*]({{ site.url }}/experiments/oldsite)
2. [Canvas rendering tests.]({{ site.url }}/experiments/canvastest)
3. [Brown Bears HTML5 learning page.]({{ site.url }}/experiments/brownbears)

More WebGL experiments are in the pipeline.

<br />

**PSA:** Replace CapsLock with ESC for reduced pinkie wear. As a vim user, having CAPS mapped to ESC greatly reduces the distance my finger needs to travel to change modes, and I don't seem to use CapsLock for much.

*X11*: One step.
```bash
setxkbmap -option caps:escape
```

*TTY*: Three steps.
```bash
sudo apt-get install console-data
echo "keycode 58 = Escape" > ~/.keystrings
sudo loadkeys ~/.keystrings
```

*Windows*: Variable steps.
```
Download and install 'keytweak', click the GUI until CAPS is mapped to ESC.
```

Check out this list of my [favourite programming articles]({{ site.url }}/notable);

<br />

<h2 class="post-list-heading">Archive</h2>
<ol>
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  {% for post in site.categories.experiment %}
   {% if post.url %}
    <li><a href="{{ post.url }}">{{ post.date | date: date_format }}: <b>{{ post.title }}</b></a></li>
   {% endif %}
  {% endfor %}
</ol>
