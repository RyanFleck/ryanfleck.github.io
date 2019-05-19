---
layout: content
title: Tutorials
permalink: /manuals/
---
# Language Manuals

These documents are essentially notes, written during the reading of a textbook, website, or tutorial. While primarily intended for personal reference, making this knowledge public helps to enrich conversations by referring to my own written understanding to easily prove my point or identify any shortcomings in my knowledge.

Hopefully they are useful for you:

<ol>
{% for item in site.manuals %}
  <li><b><a href="{{item.url}}">{{ item.title }} Manual</a></b>, files in repo at <a href="https://github.com/RyanFleck/Projects/tree/master{{item.url}}">Projects{{item.url}}</a> - {{ item.content | number_of_words }}w</li>
{% endfor %}
</ol>
