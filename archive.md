---
layout: archive
title: Archive
image: Programming-opt.gif
subtitle: "All posts and papers."
permalink: /archive/
---

<br />

## Posts

<ol reversed="true">
{% for item in site.posts %}
  {%- assign date_format = "%Y%m%d" -%}
  <li><a href="{{item.url}}"><b>{{ item.date | date: date_format }}</b>:  {{ item.title }}</a></li>
{% endfor %}
</ol>

<br />

## Class Notes 

<ol>
{% for item in site.classnotes %}
  <li><b><a href="{{item.url}}">{{ item.title | upcase }}</a></b> - {{ item.course-title }}</li>
{% endfor %}
</ol>

<br />

## Personal Programming Manuals

<ol>
{% for item in site.manuals %}
  <li><b><a href="{{item.url}}">{{ item.title }} Manual</a></b>, files in <a href="https://github.com/RyanFleck/Projects">Projects</a> repo at <a href="https://github.com/RyanFleck/Projects/tree/master{{item.url}}">Projects{{item.url}}</a>
</li>
{% endfor %}
</ol>

<br />
