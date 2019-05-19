---
layout: content
title: Adobe Experience Manager
permalink: /aem
---

<h1>Adobe Experience Manager</h1>

Ryan's notes on **AEM**. The following body of work was completed while researching for a client solution at *MNP LLP*. Adobe Experience Manager (hereafter abbreviated to AEM,) is a Hybrid Enterprise WCMS that, by decoupling display and data, allows the CMS to drive progressive web apps, single page apps, audio-driven experiences and IOT.

<br />

<h2>Content</h2>
1. TOC Seed Entry
{:toc}

<br />

# Implementation Guides

## Configuring AEM Security

## Creating Simple JSP Components

Choosing one of the three methods of component creation should be dependant on two different factors. First, the complexity of the component must be considered. Secondly, the cleanliness of the implementation, and if time is a constraint. Component construction should be tackled using the following methods:

1. Very simple components should **Extend Core HTL Components**. This allows dialogues and core variables to be re-used with very little effort, and the markup around the fields to be quickly altered to meet client needs.
2. Components of middling complexity should be tackled with **JSP**, especially if time is limited.
3. The *most correct* way to implement a component of any complexity is with separate **HTL + Java** files, cleanly isolating the model and view. During prototype development, using the Eclipse AEM plugin to pull nodes from the AEM instance would result in horrible side effects.

Documented here is a step-by-step guide for simple JSP components, as our development team was short on time, and I personally could not configure my AEM/Eclipse instance to communicate correctly with our AEM instance. JSP enables developers to quickly assemble components without having to write an independent .java file to run server-side. Java Server Pages are good for drafting medium-high complexity components, but the final implementation of most components should be completed with the current best-practice, HTL + Java.

To get started with a JSP component, navigate to the correct components folder for the current project. Currently the components folder for the WJ project is organized as follows: apps → REDACTED → components → content → component nodes are contained in this directory. The process of creating a new JSP component is as follows:

1. Right-click on the component folder and select create, component.
2. **Label** should be set to the machine representation of the component, potentially including the version number.
3. **Title** should be set to the user-readable name that will be associated with the component.
4. **Description** will provide some additional description to the user. Having filled this, click next → okay.
5. After creating the component, add a few more properties to the node:
    - **cq:icon** can be set to a string from this list: Coral.Icon choices. For test components, use the string beaker.
    - **componentGroup** should be set to a group with similar components.

Following these steps correctly, a .jsp file will already be included under the node containing the following:

```java
<%--

  YourComponentName.

--%><%
%><%@include file="/libs/foundation/global.jsp"%><%
%><%@page session="false" %><%
%><%
    // TODO add you code here
%>
```

(Clearly the vendor took great care with this boilerplate. *Add you code!*)

JSP is Java + HTML. Strings set in the Java code are immediately available in the following html. An essential example is provided below, showing Java variable processing, HTML markup, and the inclusion of a Java string within HTML markup:

```java
<%
    // All java code must be stored between angle-percent brackets.
    String xyz = "a Java string!";
%>

<p>I can include <%= xyz %></p>
```

With a working knowledge of Java, all manners of content and data can now be processed and manipulated to extrude HTML.

To provide simple fields, forms and drop-targets while developing a JSP-based component, a dialogue must be configured. Using CRXDE to manipulate nodes, the following structure can be used to create a simple banner:

```
All files in the tree without an extension or specified JCR type are nodes with the following property:
   jcr:primaryType -> Name -> nt:unstructured

ComponentName -- Properties:
|                 |_ jcr:primaryType -> String -> cq:Component
|                 |_ componentGroup -> String -> REDACTED
|                 |_ cq:icon -> String -> beaker
|                 \_ jcr:title -> String -> Client Facing Component Name
|
|_ ComponentName.jsp
|
\_ cq:dialog -- Properties:
    |            |_ jcr:title -> String -> Client Facing Component Name
    |            \_ sling:resourceType -> String -> cq/gui/components/authoring/dialog
    |
    \_ content -- Properties:
        |          \_ sling:resourceType -> String -> granite/ui/components/coral/foundation/fixedcolumns
        |
        \_ items
            |
            \_ column -- Properties:
                |         \_ sling:resourceType -> String -> granite/ui/components/coral/foundation/container
                |
                \_ items
                    |
                    |_ file -- Properties:
                    |           |_ allowUpload -> Boolean -> false
                    |           |_ autoStart -> Boolean -> false
                    |           |_ class -> String -> cq-droptarget
                    |           |_ fileReferenceParameter -> String -> ./fileReference
                    |           |_ fileNameParameter -> String -> ./fileName
                    |           |_ multiple -> Boolean -> false
                    |           |_ name -> String -> ./file
                    |           |_ sling:resourceType -> String -> cq/gui/components/authoring/dialog/fileupload
                    |           \_ uploadUrl -> String -> ${suffix.path}
                    |
                    \_ caption -- Properties:
                                   |_ fieldLabel -> String -> Image Caption
                                   |_ name -> String -> ./jcr:banner/caption
                                   \_ sling:resourceType -> String -> granite/ui/components/coral/foundation/form/textfield
```

The important properties for use in the .jsp are the name properties of each field, along with any other file-reference fields. These are how you address the fields in the rendered component, and how the developer declares the fields are stored. To use the String stored in the caption field, the following command can be used. Developers can access the properties object, which allows access to assets within the current resource:

```java
<% String caption = properties.get("jcr:banner/caption",""); %>
<p>Caption: <%= caption %></p>
```

In order to access content stored in a central repository of fragments, the following Java classes should be included after include-global-jsp:

```java
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.adobe.cq.dam.cfm.ContentFragment,
                com.adobe.granite.asset.api.Asset,
                com.adobe.granite.asset.api.AssetManager,
                com.adobe.granite.asset.api.Rendition,
                org.apache.sling.api.resource.Resource,
                org.apache.sling.api.resource.ResourceUtil
                " %>
```

Now, the Content Fragment and Iterator classes are available to all the Java statements written past this point. To fetch a fragment based on name, use the resourceResolver to getResource based on the node name and path.

```java
<%
    Resource fragmentResource = resourceResolver.getResource("path/to/resource");
    ContentFragment fragment = fragmentResource.adaptTo(ContentFragment.class);
    String byline = contentFragment.getElement("byline").getContent();
%>
```

Typically, a selection tool will be implemented as a dialogue for the user enabling a one-to-many selection of content fragments. This is implemented with an iterator. I never got into development this advanced while creating the prototype.

# Preliminary Research

I have been delegated the following topics for research and minimal implementation. Topics are prioritized as follows:

1. [Component Creation.](#component-creation)
1. [Assets Management.](#asset-management)
1. [Headless API.](#headless-api)

**Primary Resources:**
1. <https://forums.adobe.com/thread/2327208>

## Component Creation

Expectation: Developer will create content blocks, tiles, banners, etc.

For HTL notes see [this section.](#htl-html-template-language)

Historically, AEM 6 has had three APIs for creating components: WCMUse, WCMUsePojo, and Sling. It is assumend that only the latest API should be used. A tutorial for creating components with Sling Models, HTL, the Style Sytem and Touch UI compatability is available [here](https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-wknd-tutorial-develop.html).

**Resources:**

1. <https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-wknd-tutorial-develop.html>

## Asset Management

**Expectation:** CSS and Javascript will be included and managed within the CMS.

AEM Asset Management is siloed into two areas. Firstly, a clientlibs folder associated with each application stores sitewide scripts and markup. In order to reduce the load on client browsers, each component can associate with independent script and style files, enabling AEM to package and send the resouces needed to render all the components on the page, and no more.

The clientlibs folder is accessible from CRXDE. Clientlib settings can be found in `/system/console/configMgr`, where scripts and styling can be minified and run through processors like Google's Closure Compiler.

Currently, the ClientLibs folder is organized like so:

```
apps
\_ sitename
   \_ clientlibs
      \_ clientlib_base
         |_ css.txt
         |_ css
         |  |_ styling.css
         |  |_ dependencies.css
         |  \_ more-styling.css
         |
         |_ js.txt
         \_ js
            |_ main.js
            |_ feature.js
            |_ dependencies.js
            \_ trinket.js
```

`css.txt` and `js.txt` define the files and order to pull into the final `clientlibs.css` and `clientlibs.js`. For the file heirarchy above, the following files would be used to organize the client libraries for delivery to a client:

```
#base=css

# Load dependencies first:
dependencies.css

# Followed by client styling:
styling.css
more-styling.css
```

Here, `#base=css` sets the base path to `css/`, allowing files to be referenced at this path. This functionality can also be seen in `js.txt`:

```
#base=js

dependencies.js
main.js
feature.js
trinket.js
```

**Resources:**

1. <https://www.icidigital.com/blog/web-development/best-approaches-clientlibs-aem-part-3>
2. <https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-wknd-tutorial-develop/part3.html>
3. <https://helpx.adobe.com/experience-manager/6-4/sites/developing/using/clientlibs.html>

## Headless API

Expectation: Developers will be able to use the REST API to provide decoupling between the content and presentation.

**Resources:**

1. <https://www.linkedin.com/pulse/decoupled-cms-going-headless-jeff-rule/>

## Workflow

![Simple approve/reject workflow.]({{ site.url }}/assets/mnp/AEM-Workflow.png){: .center-image}

This workflow model, when submitted by an author, will send a notification to the approval group (this is a function of the participant step, labeled in the diagram above as *Accept or Reject Publishing Request*.) If the content is rejected, the left GoTo step will kick the workflow back to the participant step *Re-Submit For Publishing*, which will notify the user who originally submitted the content. This cycle will continue indefinitely until *Publish Page* is selected at the *Accept/Reject* step, at which point the content will be replicated to the publish instance, aka activated, aka published.

**Resources:**

1. <https://helpx.adobe.com/experience-manager/6-4/sites/developing/using/workflows.html>
2. <https://helpx.adobe.com/ca/experience-manager/6-4/sites/administering/using/workflows-managing.html>

## Image Processing

As an image is uploaded to the AEM DAM, it is to be processed into multiple different sizes and qualities for use in different components, on different devices. It looks like there are two ways of accomplishing this task.

> AEM includes more than 100 dynamic media image delivery commands for tuning and optimizing images and rendering results. The following guidelines can help you streamline the process and achieve good results quickly using some essential commands and best practices. [**link**](https://helpx.adobe.com/ca/experience-manager/6-4/assets/using/best-practices-for-optimizing-the-quality-of-your-images.html)

> When uploading images, you can automatically crop the image upon upload by applying an Image Profile to the folder. [**link.**](https://helpx.adobe.com/ca/experience-manager/6-4/assets/using/image-profiles.html)


<br />

# Implementation Notes

The following sections were written as I developed some components and configured the security models for our prototype AEM instance. Most of what was written below was replicated to the company's internal documentation.

<br />

## HTL: HTML Template Language

HTL is a strict templating language that relies on JS and Java for logic.

Comments can be included in two ways:
```html
<!--/* HTL Comment. Will not appear in final markup. */-->
<!-- HTML Comment. Appears in final markup. -->
```

**Resources:**

1. <https://helpx.adobe.com/experience-manager/htl/using/getting-started.html>

### Syntax

HTL is composed of HTML Markup, data attributes integrated into existing HTML ([block statements](#block-statements),) and the [expression language](#expression-language) which gives access to the AEM data structures.

#### Block Statements

**Resources:**
 .
1. <https://helpx.adobe.com/experience-manager/htl/using/block-statements.html>

#### Expression Language

HTL Expression Language (what is inside the `${}`,) can make use of variables, booleans, arrays, comparison and ternary operators, string and array formatting, and process all of these data elements with a context.

**Resources:**

1. <https://helpx.adobe.com/experience-manager/htl/using/expression-language.html>

### Include JSP Files

```html
<sly data-sly-include="template.jsp"/>
```

### HTL Component Sample

```html
<div data-sly-use.image="com.adobe.cq.wcm.core.components.models.Image" data-sly-use.placeholderTemplate="core/wcm/components/commons/v1/templates.html"></div>
<p data-sly-test="${!image.fileReference}"><b>Banner Component</b> - Please add image. Photo credits can be written under metadata/caption.</p>
<div class="ls-cmp-wrap" data-sly-test="${image.fileReference}">
	<div class="iw_component">
		<section class="brand-hero col-xs-12">
			<div class="row eq">
            	<sly data-sly-test.usemap="${'{0}{1}' @ format=['#', resource.path]}"></sly>
				<div class="image-container">
                    <img class="visible-xs-block" src="${image.fileReference}" alt="${image.alt || true}">
                    <img class="hidden-xs" src="${image.fileReference}" alt="${image.alt || true}">
				</div>
			</div>
            <p class="photo-attribution hidden-xs">${image.title}</p>
            <p class="photo-attribution visible-xs-block">${image.title}</p>
		</section>
	</div>
</div>

<div style="display:block; clear:both;"> </div>
<div class="ls-row-clr"></div>
```

```html
<div data-sly-use.placeholderTemplate="core/wcm/components/commons/v1/templates.html"></div>

<h3>Test Component <b>IX</b></h3>
<p>BANNER START</p>

        <section class="brand-hero col-xs-12">
            <div class="row eq">
                <div class="image-container">
                    <img class="visible-xs-block" src="http://env.brand.lab:96/graphic-design/placeholders/Seatsale-sample-hero.jpg" alt="Image for small screens.">
                    <img class="hidden-xs" src="http://env.brand.lab:96/graphic-design/placeholders/Seatsale-sample-hero.jpg" alt="Father and son surfing on a small wave in the sun.">
                </div>

                <div data-sly-use.image="com.adobe.cq.wcm.core.components.models.Image"
     data-sly-use.templates="core/wcm/components/commons/v1/templates.html"
     data-sly-test="${image.src}"
     data-cmp-is="image"
     data-cmp-lazy="${image.lazyEnabled}"
     data-cmp-src="${image.srcUriTemplate ? image.srcUriTemplate : image.src}"
     data-cmp-widths="${image.widths}"
     data-asset="${image.fileReference}"
     data-asset-id="${image.uuid}"
     data-title="${image.title || image.alt}"
     class="image-container cmp-image${!wcmmode.disabled ? ' cq-dd-image' : ''}"
     itemscope itemtype="http://schema.org/ImageObject">
    <a data-sly-unwrap="${!image.link}"
       class="cmp-image__link" href="${image.link}"
       data-cmp-hook-image="link">
        <noscript data-sly-unwrap="${!image.lazyEnabled && image.widths.length <= 1 && !image.areas}" data-cmp-hook-image="noscript">
            <sly data-sly-test.usemap="${'{0}{1}' @ format=['#', resource.path]}"></sly>
            <img src="${image.src}" class="visible-xs-block cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image"
                 data-sly-attribute.usemap="${image.areas ? usemap : ''}"
                 alt="${image.alt || true}" title="${image.displayPopupTitle && image.title}"/>
            <img src="${image.src}" class="hidden-xs cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image"
                 data-sly-attribute.usemap="${image.areas ? usemap : ''}"
                 alt="${image.alt || true}" title="${image.displayPopupTitle && image.title}"/>
            <map data-sly-test="${image.areas}"
                 data-sly-list.area="${image.areas}"
                 name="${resource.path}"
                 data-cmp-hook-image="map">
                <area shape="${area.shape}" coords="${area.coordinates}" href="${area.href}" target="${area.target}" alt="${area.alt}"
                      data-cmp-hook-image="area" data-cmp-relcoords="${area.relativeCoordinates}">
            </map>
        </noscript>
    </a>
    <span class="cmp-image__title" itemprop="caption" data-sly-test="${!image.displayPopupTitle && image.title}">${image.title}</span>
    <meta itemprop="caption" content="${image.title}" data-sly-test="${image.displayPopupTitle && image.title}">
</div>
            </div>
            <p class="photo-attribution hidden-xs">Photo: Lorem Ipsum</p>
            <p class="photo-attribution visible-xs-block">Photo: Small Lorem Ipsum</p>
        </section>



 <div style="display:block; clear:both;"> </div>
 <div class="ls-row-clr"></div>

 <p>BANNER END</p>
 ```

<br />

## JSP: Java Server Pages

JSP is a faster way to prototype components; as a team, we have primarily utilized JSP for the final renditions of our prototype components.

### JSP Component Sample

Node Structure

```
All files in the tree without an extension or specified JCR type are nodes with the following property:
   jcr:primaryType -> Name -> nt:unstructured

ComponentName -- Properties:
|                 |_ jcr:primaryType -> String -> cq:Component
|                 |_ componentGroup -> String -> REDACTED
|                 |_ cq:icon -> String -> beaker
|                 \_ jcr:title -> String -> Client Facing Component Name
|
|_ ComponentName.jsp
|
\_ cq:dialog -- Properties:
    |            |_ jcr:title -> String -> Client Facing Component Name
    |            \_ sling:resourceType -> String -> cq/gui/components/authoring/dialog
    |
    \_ content -- Properties:
        |          \_ sling:resourceType -> String -> granite/ui/components/coral/foundation/fixedcolumns
        |
        \_ items
            |
            \_ column -- Properties:
                |         \_ sling:resourceType -> String -> granite/ui/components/coral/foundation/container
                |
                \_ items
                    |
                    |_ file -- Properties:
                    |           |_ allowUpload -> Boolean -> false
                    |           |_ autoStart -> Boolean -> false
                    |           |_ class -> String -> cq-droptarget
                    |           |_ fileReferenceParameter -> String -> ./fileReference
                    |           |_ fileNameParameter -> String -> ./fileName
                    |           |_ multiple -> Boolean -> false
                    |           |_ name -> String -> ./file
                    |           |_ sling:resourceType -> String -> cq/gui/components/authoring/dialog/fileupload
                    |           \_ uploadUrl -> String -> ${suffix.path}
                    |
                    \_ caption -- Properties:
                                   |_ fieldLabel -> String -> Image Caption
                                   |_ name -> String -> ./jcr:banner/caption
                                   \_ sling:resourceType -> String -> granite/ui/components/coral/foundation/form/textfield
```

```java
<%--

  BannerV3 component.

  Banner containing an image and caption.

--%><%
%><%@include file="/libs/foundation/global.jsp"%><%
%><%@page session="false" %><%
%><%@page import="org.apache.sling.api.resource.Resource, org.apache.sling.api.resource.ResourceUtil, com.day.cq.wcm.foundation.Image" %><%

    String caption = properties.get("jcr:banner/caption","");
    String imageRef = properties.get("fileReference", "");
	String imageName = properties.get("fileName", "");
	String imageFile = properties.get("file", "");

	Image bannerImage = new Image(resource, "file");

	String imagePath = imageRef;

if( imagePath != "" ){

%>
    <div class="ls-cmp-wrap">
        <div class="iw_component">
            <section class="brand-hero col-xs-12">
                <div class="row eq">
                    <div class="image-container">
                        <img class="visible-xs-block" src="<%= imagePath %>?qlt=95&resMode=sharp2" alt="alt">
                        <img class="hidden-xs" src="<%= imagePath %>?qlt=5&hei=100&resMode=sharp2" alt="alt">
                    </div>
                </div>
                <p class="photo-attribution hidden-xs"><%= caption %></p>
                <p class="photo-attribution visible-xs-block"><%= caption %></p>
            </section>
        </div>
    </div>

    <div style="display:block; clear:both;"> </div>
    <div class="ls-row-clr"></div>
<%
    } else {
%>
  	  <div class="ls-cmp-wrap">
            <div class="iw_component">
                <section class="col-xs-12">
                    <p><b>Banner Component</b></p>
                    <p>Please add an image and caption.</p>
                </section>
            </div>
        </div>

        <div style="display:block; clear:both;"> </div>
        <div class="ls-row-clr"></div>
<%
    }
%>

<!--pre>
Caption: <%= caption %>

Rendered Image Path: {site}<%= imagePath %>

Image Reference: {site}<%= imageRef %>
Image Name: {site}<%= imageName %>
Image File: {site}<%= imageFile %>

Image Information:
Class: <%= bannerImage.getClass().getName() %>
Has Content: <%= bannerImage.hasContent() %>
Src: <%= bannerImage.getSrc() %>

</pre-->
```

<br />

## AEM Security

Security, that is to say, permissions for users and groups, is managed through three interfaces:

1. [**Security Tools**, accessible as an admin via the Touch UI.](#touch-ui-security-tools)
2. [**Access Control Lists**, which can be manipulated on nodes in CRXDE.](#access-control-lists)
3. [**UserAdmin**, accessible via ye olde CQ interface at `/useradmin`.](#useradmin)

### Touch UI Security Tools

![AEM Touch-UI User/Group Security]({{ site.url }}/assets/mnp/AEM-Users.png)

Blurb.

### Access Control Lists

![CRXDE with ACL tab open.]({{ site.url }}/assets/mnp/AEM-CRXDE.png)

Blurb.

### UserAdmin

![AEM UserAdmin]({{ site.url }}/assets/mnp/AEM-Security.png)

Blurb.

<br />

## Apache Maven

I created a test repository to initialize a Maven project, include and call dependencies, and configured CI to run after a source control push. The repository is now archived and can be viewed at <https://github.com/RyanFleck/java-maven-travis-test>.

<br />

## AEM Development Instance

JAR can be started with `java -XX:MaxPermSize=256m -Xmx1024M -jar AEM_6.2_Quickstart.jar`.

<br />

<img src="{{ site.url }}/assets/cinemagraph/train1.gif" alt="Masta Plan" style="display:block; margin-left: auto; margin-right: auto; border-radius:50%;"/>

![]({{ site.url }}/assets/cinemagraph/train1.gif){:class="cinemagraph"}

![]({{ site.url }}/assets/cinemagraph/patience.gif){:class="cinemagraph"}

![]({{ site.url }}/assets/cinemagraph/music.gif){:class="cinemagraph"}

![]({{ site.url }}/assets/cinemagraph/burn.gif){:class="cinemagraph"}
