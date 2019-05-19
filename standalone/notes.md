---
layout: content
title: Class Notes 
permalink: /notes
---

<br />

<br />

# Class Notes 

Written at the end of each class to summarize the lecture, starting in Winter 2019. It's a shame I didn't do this during my whole trip through academia, but hey, better late than never. Each entry also contains a rich account of important details from labs and tutorials.

<br />

<div style="padding: 1em; color: white; background: black;border-radius: 5px;/*! font-size: 1; *//*! font-size: 1.1rem; */">
  <h3 style="color: white;">Experimental Failure</h3>
  <p>Regrettably, I could not keep up (as those around me warned) with the task of copying summaries of every lecture I attended, complete with MathJax and diagrams, into markdown files.</p>
  <p>While it lasted, it was a fantastic way to review and reinforce my learning. I'll leave these course notes up, but this page will now be accessible exclusively via the archives.</p>
  <p>I would absolutely attempt this again, but perhaps on a weekly basis.</p>
</div>

<br />

<ol>
{% for item in site.classnotes %}
  <li><b><a href="{{item.url}}">{{ item.title | upcase }}</a></b> - {{ item.course-title }}</li>
{% endfor %}
</ol>

<br />

<br />

<br />
