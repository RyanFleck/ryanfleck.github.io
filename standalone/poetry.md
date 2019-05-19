---
layout: justcontent
title: Poetry 
permalink: /poetry/
---

<br />

<ol>
{% for item in site.poetry %}
  <li><a href="{{item.url}}">{{ item.title }}</a></li>
{% endfor %}
</ol>

<br />

<br />
