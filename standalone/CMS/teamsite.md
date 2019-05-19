---
layout: content
title: Teamsite
permalink: /teamsite
---

<h1>Interwoven TeamSite</h1>

**TeamSite** is a Java-based WCMS used by multiple clients. Pages and data are processed using Java and XML/XSL. TeamSite has a long acquisition history; originally developed by Interwoven, it has passed through the intellectual hands of Autonomy, HP and Opentext. *MNP LLP* extends and maintains multiple client TS instances.

<br />

<h3>Table of Contents</h3>
1. TOC Seed Entry
{:toc}

<br />

# Teamsite Architecture

## Components

Teamsite components are composed of:
- An XML component definition.
- An XSL style referenced by the XML.

In Java Land:
- `External -> XML Component`
- Spring (Sprintboot?) services

## Spring Services

```
Services -> DoStuffService -> DefaultDoStuffService
```

## Loading Pages

Filter Chain:
- A collection of controllers called when page loads.
- Controllers apply to a subset of pages.
- Processes a `.page` file.

**RequestContext** is an object with important information about the page requiest.

<br />

# Team

## Structure

So as a dev, you will be under my umbrella as the dev lead.  This week is QA week in our 5 Week Dev cycle (As well as design, these overlap from sprint to sprint).  So we are just looking to fix defects as they come in from the QA team (Led by Allen, includes Robert and Tamara).  So I can't say for certain what exactly you will be working on this week until we start getting defects that I think would be good items for you to look at.  In the meantime, you checkout the code from TFS into your Eclipse workspace.  We have 3 projects that all come together into the full build package - iwov, which includes the java, XSL, DCR, workflow stuff.  styleguide - Which includes css/scss files, and xx-brand, which includes our js. I keep mine all in the same eclipse workspace.  Ill get you a link to how we work with git in terms of our branching strategy in a moment.  (Need to restart my computer, running into all kinds of technical issues today apparently...)

In terms of process for the dev portion of the sprint which starts next week.  I assign tasks/stories on a week-by-week basis based on where people's skills and abilities are in terms of technology area (Java, CSS, JS, HTML, etc) as well as based on interest.  So I will be assigning tasks/stories that make the most sense for someone brand new to TS development (not going to throw you straight into the deep end, don't worry.)

(Speaking about attached doc) This is the technical design portion of this release (well a part of it so far). Much like the design document we had for RBC, it details the technical design of how we are implementing the functionality in the sprint.  Its 95% for us to explain to our dev team how we are building what we set out to, but also 5% for xxxxxx's architecture team to understand the implications of our changes (usually fairly minor in terms of what they care about).  I shared the dev plan in dev chat that details what stories everyone is working on, which we will have design for most, but some stories are quick bug fixes that don't require design.

<br />

# Maintaining a TS Virtual Machine

Installation and maintainance of a TS VM is labor intensive, to say the least. This section contains useful guides and troubleshooting tips to ensure the bulk of development time is spent working towards a feature-complete story.

<br />

# Debugging

## Updating Configs

Name | Path
-----|--------


## Writing to the Logs

The full class is passed to the logger to enable logging:
```java
    private static final Log LOGGER = LogFactory.getLog(FullClassName.class);
```

Logs will post at different severities:
```java
LOGGER.debug("xyz");
LOGGER.warn("xyz");
LOGGER.error("xyz");
```

If concatenation is involved, wrap the log in an if for performance:
```java
if (LOGGER.isDebugEnabled()) {
    LOGGER.debug("xyz"+var);
}
```

## Adjust Log Levels

The logs levels can be adjusted on a per-class basis, depending on the location in the project.

Frontend logs can be tweaked at:
```
env:1776/iw/admin/log4j.jsp
```

Backend logs can be tweaked at:
```
/iw-cc/command/iw.base.loggers
```
