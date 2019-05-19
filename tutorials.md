---
layout: tutorials
title: Tutorials & Notes
image: cinemagraph/dam.gif
subtitle: "Class notes, personal manuals, tutorials, guides, and jargon."
permalink: /tutorials/
---

<br />

### Class Notes 
Post-lecture recollections. [Dedicated list.]({{ site.url }}/notes)

<ol>
{% for item in site.classnotes %}
  <li><b><a href="{{item.url}}">{{ item.title | upcase }}</a></b> - {{ item.course-title }}</li>
{% endfor %}
</ol>


<br />

### Personal Manuals:

It should be noted that these are *all* works in progress. These manuals are posted here primarily as references to catch up my peers when I rope them into a project of some sort. The *most complete* manuals are listed here:

1. [JavaScript]({{ site.url }}/js)
1. [Java]({{ site.url }}/java)
1. [C#]({{ site.url }}/cs)

[*A complete list of manuals is available here.*]({{ site.url }}/programming-manuals/)

<br />

### [RMS] How to Learn Programming
Copyright (C) 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2015 Richard Stallman.
Verbatim copying and distribution of this entire article is permitted in any medium, provided this notice is preserved.
<http://stallman.org/stallman-computing.html>

First, read a textbook about programming in some language, then manuals for several programming languages including Lisp . If this makes natural intuitive sense to you, that indicates your mind is well-adapted towards programming.

If they don't make intuitive sense to you, I suggest you do something other than programming. You might be able to do programming to some degree with a struggle, but if you find it a struggle you won't be very good at it. What's the point of programming if it is a struggle instead of a fascination?

After that, you need to read the source code of real programs (or parts of them) and figure out what they do. Then start writing changes in them, to add features, or fix bugs if you can find out about specific bugs to fix. Ask some good programmers who are familiar with the code of those programs to read and critique your changes.

If you fix a bug in a free program that people are developing, the developers are likely to be glad to get fixes from you and will tell you the way to write them to make them good to install. Look at their TODO list for features you would like to implement. You will find it is a great satisfaction when the developers incorporate your changes.

Do this over and over and you will become good at developing software.

Please use your programming capability only for good, not for evil. Don't develop nonfree software, or service as a software substitute . Design systems not to collect personal information, and to allow anonymous use.

*End of Note.*

<br />
