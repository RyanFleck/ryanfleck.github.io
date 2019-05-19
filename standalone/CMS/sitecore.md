---
layout: content
title: Sitecore
permalink: /sitecore
---
<p style="text-align: center;">Ryan's Collection of Learning Resources for</p>
<img src="{{ site.url }}/assets/sc.jpg" alt="Sitecore®" style="display:block; margin-left: auto; margin-right: auto; width: 600px; border-radius:0;"/>
<p style="text-align: center;">Work completed for <b>MNP LLP</b> May 2018.
<br>
MNP assets © Copyright 2018 MNP LLP
<br>
Sitecore® assets © Copyright 2018 Sitecore
</p>

<br />

<h3>Table of Contents</h3>
1. TOC Seed Entry
{:toc}

<br />

## History
* **20180508** - Learning plan discussed. Began installing programs and VMs.
* **20180510** - Created this page to keep track of resources and learning.
* **20180511** - Began [Sitecore® 8.2 Developer Foundation eLearning.](#sitecore-developer-foundations)
* **20180514** - *Week 1 of Sitecore® learning begins.*
* **20180514** - Reading through an O'Reilly C# textbook and [writing notes.]({{ site.url }}/cs)
* **20180528** - *Week 2 of Sitecore®.* Attempt to setup local sitecore environment.
* **20180529** - Day 2 of struggling with SQL/MongoDB/Sitecore® environment setup.
* **20180604** - Briefed on [MNP DI Team best practices for Sitecore development.](#di-team-sc-development)
* **20180605** - Finished Sitecore® 8.2 Developer Foundation eLearning.
* **20180606** - Began Sitecore® 8.2 Experience Solution Developer eLearning.
* **20180607** - First day of contributions to MNP Sitecore projects!
* **20180611** - Continuing with small updates to `.cshtml` rendering files.
* **20180614** - Learning continues, slowly. Sitecore was designed by .NET devs.
* **20180618** - Accidentally wiped the Mongo on my vm. Will have to learn to reinstall.

## Resources
Before I began learning Sitecore-specific material, which is presented below, I learned a good bit of C# and [wrote a short personal manual on how to use the language.]({{ site.url }}/cs) The transition from Java was very quite simple, and the differences were easy to understand. [*Link to Manual.*]({{ site.url }}/cs)

1. [Sitecore® Community Slack](https://sitecorechat.slack.com), also see the [community guidelines.](https://jammykam.wordpress.com/2018/02/26/Sitecore-slack-community-guidelines/)
2. [The Sitecore® Stack Exchange is helpful.](https://Sitecore.stackexchange.com/)
3. [**Beginner's Guide** on stack exchange.](https://Sitecore.stackexchange.com/questions/1737/how-can-i-get-started-learning-Sitecore)
4. [Master Sitecore® youtube page.](https://www.youtube.com/user/masterSitecore)
5. [Official E-Learning Courses](https://elearning.Sitecore.net)
6. [Documentation for SC-Helix](http://helix.Sitecore.net/)
7. [Database of Sitecore Articles, **SITECORELINK.**](http://sitecore.link)
8. [TDS User Manual.](https://hedgehogdevelopment.github.io/tds/chapter4.html)

Spare parts:
1. [MVC Contrib](https://github.com/Sitecore-Community/Sitecore-Mvc-Contrib)

Once I've learned a little more, these blogs and sites should be particularly useful:

1. [*Velir* has lots of resources.](https://www.velir.com/devblog/2018/01/09/creating-custom-rich-text-editor)

## Learning Plan

The following is being learned in anticipation of continued work on Sitecore® projects until December 2018. The investment in learning is being made so additional development resources are available for a number of prospective Sitecore® clients.

1. Install required programs, tools, files, and virtual machines.
2. Learn Sitecore® (**SC**) usage from dev perspective:
  * Databases that are used and how publishing works internally.
  * Indexing/re-indexing does.
  * Helix design pattern.
  * Relationships between dependencies, etc.
3. Become proficient with the following technologies:
 * SQL Server Management Studio.
 * Visual Studio (**VS**) and version control.
 * Hyper-V virtual machine management.
4. Team Development for Sitecore® (**TDS**) training.
  * How to serialize and synchronize the project.
  * What a package does and how to use it.
5. Pull Request (**PR**) procedures and branch management.
6. How and when to create templates, renderings, rendering parameters, and set up standard values.
7. Understanding datasources. How to use them programatically.
8. Creating a rendering (**cshtml**) and using the above items to make something authorable/usable and compatible with the Experience Editor.





## E-Learning Course Outlines

### Sitecore® Developer Foundations

**Sitecore® as an Experience Content Management System**
* Define a Experience Content Management System (xManagement).
* Describe the features of a WCMS.
* State the three foundation pillars of a WCMS.
* Describe Sitecore®’s architecture.
* Use basic Sitecore® terminology.
* Identify the Sitecore® applications and their users.

**Building the Site’s Data Infrastructure**
* Describe the templates’ building blocks.
* Name the field types and their purpose.
* Give examples of how you use source fields.
* Identify when you need to use template inheritance.
* Apply template inheritance to new and existing templates.
* List what you should consider when you apply inheritance to templates.
* Describe the purpose of the Standard template.
* Use the Template Manager to build and configure a site infrastructure.
* State the importance of setting up icons on templates.

**Creating the Site’s Content Structure**
* Define a Sitecore® item.
* Create content items based on templates.
* Use the Standard Values to set default values and settings.
* Explain the importance of insert options.
* Describe different content versioning options in Sitecore®.  

**Working with Sitecore® Publishing**
* Use the publishing feature.
* Describe publishing options.
* Set publishing restrictions.
* Describe the purpose of the Core, Master and the Web database.
* Describe a publishing target.

**Creating and Applying Presentation**
* Describe how Sitecore® layouts and components are tied to the ASP.NET MVC framework.
* Retrieve field values from Sitecore® and make the fields editable in the Experience Editor.
* Explain the difference between inline-editable and non-editable field types.
* Apply presentation to a Sitecore® item or Standard Values.
* Define the context item.
* Set up a control or component to target an item that is not the context item.
* Identify components in a HTML template.
* Describe the presentation details and their related definition items.

### Sitecore® Experience Solution Developers

**The Adventure Company Project**
- Summarize the Adventure Company story
- Identify the tasks you will accomplish during the training
- Review the HTML structure of the Adventure Company website
- Identify key Sitecore® terminology
- Configuring Your Sitecore® Environment

**Set up a Sitecore® instance on a development machine**
- Describe the basic development architecture of Sitecore®
- Describe the basic features of SIM and use it to install Sitecore®
- Use the default admin username and password to log in to a Sitecore® instance
- Install a Sitecore® package into Sitecore
- Define the file structure and files of a clean Sitecore® instance
- Setting Up a Multisite Project

**Identify the core binary files of the Sitecore® framework**
- Set up a Visual Studio solution and project for Sitecore® development
- Prepare the Sitecore® Rocks Visual Studio plug-in and set up a connection to a Sitecore® instance
- Configure Sitecore® to host multiple websites
- Use the include folder to apply configuration patches
- Describe how Sitecore® resolves pages
- Build multisite implementations according to recommended practices
- Creating the Sitecore® Structure

**Describe the recommended practices for the content structure in a multisite solution**
- Define a Sitecore® Template with different sections and field types
- Create Sitecore® Layouts and connect them to matching views on the file system
- Create Sitecore® Standard Values and set up presentation for different devices
- Create content items based on data templates by using Insert Options
- Set up a multi-language website
- List recommended practices for using dictionaries in a multi-language solution
- Building Component-Based Sites

**Name the different types of MVC renderings**
- Define the difference between static and dynamic binding
- Use presentation details to add components in the Experience Editor
- Describe placeholders and placeholder definition items
- Set up allowed controls on a placeholder definition item
- Increasing Component Reusability

**Configure compatible renderings on a component definition item**
- Describe how to limit content choices in the data source selection window
- Describe how component properties can be maintained by content authors
- Create a rendering parameters template for a component
- Read component properties and use the specified value in the component's output
- Describe what to do when you cache components
- Applying Navigation Practices within the Site

**Create a navigation component**
- Explain how Sitecore® renders links and how they can be controlled
- Use the Sitecore® API to navigate the tree
- Working with Complex Field Types and Item Sorting

**Use different field types and define which fields can be edited in Experience Editor**
- Render field values by using the Sitecore® API
- Retrieve an item's child items and apply custom sorting
- Implement an edit frame
- Use the field editor buttons
- Make all fields editable in the Experience Editor
- Tracking and Interacting with Site Visitors

**Create user-generated content in Sitecore**
- Describe why content should be created only in the Master database
- Invoke the Sitecore.Services.Client API
- Handle submissions from multiple forms on one page
- Working with Adaptive Personalization

**Use the Rules Set Editor to deliver individual experiences to your customer**
- Segment content by using profiles and profile keys
- Describe a Sitecore® contact
- Describe how to extend a Sitecore® contact by implementing custom facets
- Implementing Search-driven Components

**List the available search providers that Sitecore® offers**
- Describe the differences between these search providers
- Configure a custom index
- Optimize indexing performance by changing indexed fields and templates
- Create a search-driven component
- Compile dynamic LINQ queries
- Define item buckets in Sitecore®
- Driving Robust Development

**List the advantages of unit testing**
- Unit test the parts of the API that you will be working with
- Create build scripts
- Deploy your Sitecore® solution
- Exploring Security and Workflow

**Create users and roles in Sitecore.htm**
- Apply security on Sitecore® items for editing purposes.htm
- Describe how Sitecore® handles conflicting security rights.htm
- Build and configure Sitecore® workflows.htm
- Connect a workflow to a template.htm
- Finding Documentation and Support

**Locate Sitecore® websites and documentation**
- Describe the value of the Sitecore® Community
- List the benefits of the Most Valuable Professional program
- Discuss the Sitecore® Versioning Policy
- Describe how to interact with Sitecore® Support

## **Course Notes:** Developer Foundations

Notes from [Sitecore® 8.2 Developer Foundation eLearning.](https://elearning.sitecore.net/dl.aspx?id=7B781B1C3510447BBA22D7B0BF3251A2)


Getting the official guides requires registration to a Sitecore® *E-Learning* course.
1. Download [MongoDB Community](https://www.mongodb.com/download-center?jmp=nav#community) and follow [this guide to set it up.](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition)
2. Download the [Sitecore® Instance Manager](https://marketplace.sitecore.net/en/Modules/S/Sitecore_Instance_Manager.aspx) and install it. Sitecore® Instances are stored at `C:\inetpub\wwwroot`.

I became very stuck here. The official documentation simply mentioned to install this and that, so I needed to search online for more information about the requirements for Sitecore, how to set up a local SQL server and the management server.

<br />
<img src="{{ site.url }}/assets/mnp/fire.gif" alt="Fire" style="display: block; margin-top: 20px; margin-bottom: 20px; margin-left: auto; margin-right: auto; border-radius:15px; width: 360px;"/>
<p style="text-align: center;">Hmmm, that didn't do it...</p>
<br />

### Struggling with Installation

The successful parts of the work I have completed below are available in a condensed [**Installation Guide**](#sitecore-developer-environment-installation-guide) below. Detailed descriptions of the problems I encountered and dealt with are examined here.

All of 20180528 was spent struggling with the *Training Preparation Guide*, which outlines the procedure to install a Sitecore® instance, along with all supporting technology. I was able to get a Sitecore® instance up and running in a VM with all the required tools pre-installed, but wanted to do things *by the book*, and continued to tinker with the installations on my host OS.

I'm fairly certain my problems are related to SQL Server. I've downloaded and installed the developer edition, and Sitecore® Instance Manager can create the required DBs, but there are access problems. I've fiddled with the *Connection String* but to no avail.



<img src="{{ site.url }}/assets/mnp/databases.png" alt="CorrectDB" style="display:block; margin-left: auto; margin-right: auto; border-radius:0;"/>

I'm reinstalling SQL... **Bah!** I'll come back and install on my local when I have more experience.

<!--https://www.sitecoreblog.cz/en/creating-a-sitecore-sandbox-virtual-environment/-->

### Sitecore® Developer Environment Installation Guide
**Step One:** Get a VM from Dan or Jason, install using Hyper-V. *Boom.*

<!--
The following steps have been written and reviewed by the Digital Integration team at MNP LLP, and is intended to expedite the process of learning to set up Sitecore® on Windows.

**Install all prerequisites and set permissions correctly:**
1. SQL and SQL Server Management Studio.
2. MongoDB needs some command-line configuration. ✓
3. Ensure "inetpub" folder has allowed "NETWORK SERVICE" read and write access. ✓

[This may help? "Configuring a private session state database" ](https://doc.sitecore.net/sitecore_experience_platform/setting_up_and_maintaining/session_state/session_state/walkthrough_configuring_a_private_session_state_database_using_the_sql_server_provider#_Deploy_a_SQL)

*THIS SECTION IS UNFINISHED, AND WILL BE COMPLETED IN DUE TIME, ONCE EXPERIENCE MANIPULATING SITECORE AND RELATED SERVICES IS ATTAINED.*
-->
### Module 1: WCMS Definition
Module 1 focuses on basic Sitecore® terminology and how different parties use/interact with it.

**WCMS** stands for Web Content Management System. These platforms provide website authoring, collaboration and administration tools once built. The three pillars of a WCMS are:
- Data Definition: Infrastructure for the website content, templates.
- Content: Content.
- Presentation: Appearance of the content after it has been placed in a component.

### Module 2: Templates, Sitecore Data Infrastructure

Templates exist in the sitecore tree, and can inherit properties from parent templates. Sitecore uses `CamelCasing` when naming anything.

Templates have *sections*, and within those, *fields*. If a parent and child have a matching section name, the fields they both reference will be merged into one larger section.

Templates that will not be added by the user should be prepended with `_Base`. The controls for inheritance are under the *Builder Options* tab, and are opened with the *Base Templates* button in the *Template* section.

**Recommendations:**
1. Creating cyclical references will break SiteCore. Don't.
1. Set icons so template function is clear.
1. Make use of inheritance for greater maintainability.
1. Fields can be marked *not to be inherited*.

**Insert options** can be configured after selecting an item, in `configure > (Insert Options) > Assign`. *The only way a user can create content is through developer-assigned insert options.* Setting insert options on the `__standard_values` is recommended.

### Module 3: Sitecore Content Structure

Sitecore *items* are based on *templates*, inherit *standard values* if fields are left empty, and are *versioned*.

**Field Data Sharing:**
* *Versioned* means languages and versions have their own copies.
* *Unversioned* means a single version per language.
* *Shared* means a single version for the entire site.

Again, it is very important to set *insert options*. Without them, users will not have easy access to the correct content to insert in any given location.

<!--
<br />
<img src="{{ site.url }}/assets/mnp/guy.png" alt="correctdb" style="display:block; margin-left: auto; margin-right: auto; border-radius:20;"/>
<p style="text-align: center;">sitecore "developer" shown in training materials.</p>
<br />
-->

### Module 4: Sitecore® Databases and Publishing

**Sitec®re's Databases:**
1. **Core** - UI definitions, membership tables.
1. **Master** - Content, templates.
1. **Web** - Live website files.

A Sitecore environment can be served directly from *Master* in *live mode* if development is ongoing, preventing the need for publishing. All that is needed is to append `.config` onto `App_Config\include\livemode`. Revert (or disable with `.disabled`) this change before deploying a live site.

By navigating to the Sitecore Desktop, you can change the database that is being modified in the lower-right corner. By switching to *Core*, the Sitecore UI itself can be updated and modified.

Publishing certain items can be restricted in different workflow states or times during the day. Publishing restrictions have inheritance.

*( Ensure dependencies are always published. )*

**Review Questions**
1. Why would you need to run a full re-publish?
  * You shouldn't need to.
2. If you set up publishing restrictions, will Sitecore automatically publish the content at that time?
  * No.
3. What is the difference between the Master and Web databases?
  * There is no difference in schema, but the content of Master is considered to be a work in progress, while web is final and public.
4. Should a user work in the Web database if something needs to go live ASAP?
  * No. Users shouldn't even be able to access the web database.

### Module 5: Creating and Applying Presentation

* **Layouts** are the foundations of the page; the *presentation details* of a page can be pointed towards the relevant `mvc layout` template, which in turn points to a `*.cshtml` file.
* **Renderings** are smaller pieces of markup for components, stored as `view rendering` templates in the *Renderings* folder.

It is best to set *presentation details* in an item's *standard values* to avoid a `no layout` error.

Layouts are stored in two parts: a `.cshtml` file stored in the filesystem, and a layout definition (`mvc layout`) accessible in the content tree.

Simple renderings can be added to a page in the following manner:
```cs
@Html.Sitecore().Rendering(
  "/sitecore/layout/renderings/folder/rendering_name"
  )
```

Renderings can be pointed at another item as a data source:
```cs
//All on one line, when implemented:
@Html.Sitecore().Rendering(
  "/sitecore/layout/renderings/pnm/pagefooter",
  new{DataSource="/sitecore/content/Global/Footer"}
  )
```

If a rendering will often point to a unique data source, pointing to the rendering and setting the data source in the rendering is a superior method. The item ID can be pasted in the rendering's *data source* field. If you do decide to use this method, the `Data Source` field must be renamed in the template to `Datasource`. This is a Sitecore bug. (Edit the template at **configure > Template > edit**.)


For inspiration, *HTML5up* provides some neat html5/css3 themes:
- [Read Only](https://html5up.net/read-only)
- [Dimension](https://html5up.net/dimension)
- [Hyperspace](https://html5up.net/hyperspace)

### Object-Oriented HTML5 Insertions

To retrieve the content of a field from the template, insert the following into the relevant `.cshtml` file:
```cs
@Html.Sitecore().Field("Introduction")
@Html.Sitecore().Field("Heading",new{DisableWebEdit=true})
```

Adding an html class attribute to the new HTML block using `new{@class="class_name"}`:
```cs
@Html.Sitecore().Field("field_name",new{@class="class_name"})
@Html.Sitecore().Field("Image",new{@class="image-background"})
```

Other parameters that can be set:
```cs
//DisableWebEdit = boolean
@Html.Sitecore().Field("field_name", DisableWebEdit=true)
//EnclosingTag = string
@Html.Sitecore().Field("field_name", EnclosingTag="img")
//Format - for date/time fields.
@Html.Sitecore().Field("field_name",  unknown  )
//Image manipulation
@Html.Sitecore().Field("image",new{option=123,option=123})
//Options include:
mw=1200 //Maximum width
mh=300 //Maximum height
w=412 //Width
h=333 //Height
as=0 //Allow stretch, takes boolean 1/0
bc=fffff //Background color
sc=1.5 //Scale
```

Within a page, **placeholders** must be inserted where renderings for items (components) will be shown:

```cs
@Html.Sitecore().Placeholder("placeholder_name")
@Html.Sitecore().Placeholder("Header")
@Html.Sitecore().Placeholder("PageContentMain")
```
The components that can be added within a place (marked with a placeholder,) can be configured with a **placeholder settings** item, located at `Layout/Placeholder Settings`. Adding a `Placeholder` item to this folder with a *key* matching the placeholder name instantiates a field called *Allowed Controls*. Here, *renderings* can be selected for use by authors.

The **presentation detail controls** are used to manipulate components appearing in the placeholders. The *data source* of a set of controls can be pointed towards a different *item* for data.

**Simple control flow** can be implemented in the `.cshtml` files. The `@foreach` command iterates through the items in a folder.

```html
<ol> //List of articles.
@foreach(Sitecore.Data.Items.Item item //contd
  in Model.Item.Children["Articles"].Children)
{
  <li> //Each article is placed in a list entry.
  @Html.Sitecore().Field("Title", item)
  @Html.Sitecore().Field("Image", item)
  @Html.Sitecore().Field("Introductory Paragraph", item)
  <a href="@Sitecore.Links.LinkManager.GetItemUrl(item)">Full Article</a>
  </li>
}
</ol>
```




## **Course Notes:** Experience Solution Developer

Notes from [Sitecore® 8.2 Experience Solution Developer Course.](https://elearning.sitecore.net/ContentDetails.aspx?id=9925D47D5E594EC7AC2E2FA2DB5B18DE)

> This eLearning teaches developers to build robust MVC solutions that integrate with the Content Management System and marketing capabilities of Sitecore® 8.0, 8.1, and 8.2.  The course covers MVC design patterns such as separations of concerns, unit testing and dependency injection as well as how to build data-driven applications using the Sitecore® Services Client.  Learn how to build real world MVC-based Sitecore® solutions that turn digital strangers into delighted customers with context marketing.

### Review of Previous Course:
- **WCMS**: Web content management system. Three pillars: data, content, presentation.
- **Editors**: Content for technical, experience for non-technical.
- **Items**: Building blocks of Sitecore. Can hold `content` or `data`.
- **Presentation Details**: Present the content of an item.
- **Templates**: Define the fields of an item (data schema).
- **xManagement**: Supports Web Content Management.
- **xDB**: Integrated marketing and analytics applications.
- **Page**: An item with presentation details set.
- **Definition Item**: Metadata that describes the location of a related file.

### Sitecore Production Architecture

Sitecore can be installed using SIM, the Sitecore Install Manager, using a system ZIP and moving files manually, or with the EXE provided by Sitecore. Servers can be configured to perform dedicated tasks; this improves scalability.

**Automation in Sitecore:**
- Windows Task Scheduler => best option for publishing at a precise time.
- Configure Agents in `Web.Config`
- Define scheduled tasks in a Database

*Publishing* moves data from the Master database to the Web database, so it is visible to the public.

*Parallel Publishing* is disabled by default, but allows the performance of publishing operations to be scaled up dramatically.

*Packages*, ZIP files containing items and files, can easily be installed onto a sitecore instance.

### Setting Up a Multi-Site Project

The core binary files of the Sitecore framework are as follows:
- **Sitecore.Kernel**: `Item currentItem = Model.PageItem;`
- **Sitecore.Mvc**: `string name = Model.Item.Name;`
- **Sitecore.Mvc.Analytics**:  `var interaction = Sitecore.Analytics...`

The recommended practice for creating a multisite instance is to leave the default *Home* item under content alone, and below (not beneath) the Home, create a new item for each site.

Critical files:
- **Web.config**:
- **Global.asax**:
- **/Views/Web.config**:
- **App_Config/Include/\*.config**: Additional configuration files.

Each site has a section in `/Website/App_Config/Sitecore.config` with the name, path, language and cache settings.

```cs
//Get homepage:
String startPath = Sitecore.Context.Site.StartPath;
Item Homepage = Sitecore.Context.Database.GetItem(startPath);
```


<!--
<br />
<img src="{{ site.url }}/assets/mnp/masta_plan.png" alt="Masta Plan" style="display:block; margin-left: auto; margin-right: auto; border-radius:20;"/>
<p style="text-align: center;">Two sitecore developers discuss their master plans.</p>
<br />


<br />
<img src="{{ site.url }}/assets/mnp/masta_plan_revealed.png" alt="Masta Plan REVEALED!" style="display:block; margin-left: auto; margin-right: auto; border-radius:20;"/>
<p style="text-align: center;">A closeup of the master plans, a direct push to web! Genius.</p>
<br />
-->

<!-- ########## ########## ########## ########## ########## -->
<!-- ########## ########## ########## ########## ########## -->
<!-- ########## ########## ########## ########## ########## -->
<!-- ########## ####### END OF LEARNING ######## ########## -->
<!-- ########## ########## ########## ########## ########## -->
<!-- ########## ########## ########## ########## ########## -->
<!-- ########## ########## ########## ########## ########## -->

## DI Team SC Development

A short meeting was held on 20180604 regarding version control practices, visual studio and TDS.

The following file `TdsGlobal.config.user` in your local project repository needs to be added/modified with your VM information.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="3.5" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <PropertyGroup Condition=" '$(Configuration)' == 'Dev' ">        
      <SitecoreWebUrl>http://machine-name-with-domain</SitecoreWebUrl>
      <SitecoreDeployFolder>\\machine-name-with-domain\wwwroot\Sitecore\Website</SitecoreDeployFolder>
      <InstallSitecoreConnector>true</InstallSitecoreConnector>
      <SitecoreAccessGuid>access-guid</SitecoreAccessGuid>
	  <DisabledFileDeployment>false</DisabledFileDeployment>
    </PropertyGroup>
</Project>
```

- Replace `access-guid` with the `SitecoreAccessGuid` at `\\machine-name\wwwroot\Sitecore\Website\_DEV\web.config`
- Replace `machine-name-with-domain` with the relevant development machine's local address.

### Project Architecture

1. **Foundation** - Core Sitecore functionality like indexing and extensions.
2. **Feature** - Secondary Sitecore features like forms and search.
3. **Project/Website** - Website data: templates, css and javascript, Sitecore items.

For sitecore development, each folder should have a TDS build definition.

Right-clicking on the TDS item and clicking 'sync with sitecore' will show changed files

### Managing Work
To work, right click on `Development`, then `New local branch from...`

Branch naming convention: `Initials/Sprint/Task`, ex. `rf/sprint-3/x1234name`. `x` is the first letter of (t)ask, (b)ug, etc.

### Building the Project & Deploying to Local Virtual Machine
Individual features can be built by right-clicking on the *build definition* and selecting the *build* option. Sping.

### Preparing Your OS
*Future addition.*

### Configuring Visual Studio
*Future addition.*

**Required Extensions:**
- *Bundler and Minifier:* Adds support for bundling and minifying JavaScript, CSS and HTML files in any project.
- Team Development for Sitecore (version is project-specific.)

### Development Workflow
It is expected that a set of *TFS* (Microsoft Team Foundation Server) items, specified by the team leaders, will be completed each sprint. To move through and complete the items assigned to you, the following steps should be taken after prioritizing your tasks with management. These steps assume that a change will need to be made in the project's C# or in a local VM running Sitecore.
1. Find the task item within TFS. Read the task carefully, planning what investigation or changes need to be completed.
1. Mark the TFS item as active, then proceed into *VS* (Microsoft Visual Studio).
1. Update your local *git* repository and create a branch for your work:
  -
  -
  -
  -

## Sitecore Helix Design Principles

<br />
<p style="text-align: center;"><b>Business Goal => Module</b></p>
<!--p class="quiet" style="text-align: center;"><b>Implies</b></p-->
<br />

[**Helix**](http://helix.sitecore.net/) provides a set of design principles to create a modular Sitecore project that is easy to test, extend and maintain. In this context, a *module* refers to a group of assets related to a business requirement. The ideals behind helix bring the monolithic and interdependant .NET architectures a few steps closer to high-functioning [Unix design philosophies](https://homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html):

>Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. ([D. McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy))

**High cohesion, low coupling;** modules should be grouped so they are self-contained to the greatest extent possible, and refrain from relying on other modules as much as possible. If a solution is highly coupled, removing a module and bridging dependencies can be very difficult.

**Layers** help to refine the *dependancy flow*. Dependancies should only flow from lower-level layers to higher-level layers. Sitecore projects have the following *layers*:

1. **Foundation** - Core Sitecore functionality like indexing and extensions.
2. **Feature** - Secondary Sitecore features like forms and search.
3. **Project/Website** - Website data: templates, layouts, css and javascript, Sitecore items.

```
/
    /src
        /[Feature|Foundation|Project]
            /[Module Group]
                /[Module Name]
                    /code
                    /serialization
                    /tests  
    /[…]
```
*(Also ensure that no dependencies are cyclic; only inverted trees!)*

All items in a Sitecore project can be defined as *Content* or *Definition* items. *Content Items* include all editor-modified content based on item templates. *Definition Items* include all renderings, templates, placeholder settings, and everything in the core database.

> The Principle of Common Closure: What changes together should live together.



## Development notes

The following anecdotes were recorded during my first few weeks of proper Sitecore development.

### Overwhelming Logs
First thing's first: I need output. Sitecore's built in logs are overwhelming. Until I am shown the proper tools for isolating relevant data from the logs, I created a small method to log data to an easily-accessible location with only the data I need. *Temp solution*:
```cs
private void RLog(string text)
{   
    //Log to Sitecore.
    Diagnostics.Log.Debug("rdebug: "+text);

    //Log to Troubleshooting file.
    using (StreamWriter w = File.AppendText(@"C:\SitePath\rlog.txt"))
    {
        w.WriteLine("\r\nRLOG: {0}", text);
    }
}
```
**Version 2:**
```cs
private void RLog(string text)
{
  using (System.IO.StreamWriter w = System.IO.File.AppendText(@"C:\inetpub\wwwroot\Sitecore\rlog.txt"))
    w.WriteLine("\r\nRLOG: {0}", text);
}
```

### Branch Before Working
One may find it useful to refer to these [git koans.](http://stevelosh.com/blog/2013/04/git-koans/)

### Inconsistent Sitecore Paradigms
*Roles* are not completely contained; each role stores only it's *child* items. If a role has a *parent* set, this setting will be stored as a child within the parent, **not** in the original item as a reference to the parent's `guid`. [This blog post by Matthew Dresser](http://www.matthewdresser.com/sitecore/synching-roles-with-hedgehog-tds) confirms this finding.

**Lesson learned:** parents of roles need to be serialized in *TDS*.

### Dictionary Entries
To link a text field to a dictionary entry, the following line can be used:
```cs
@DictionaryPhraseRepository.Current.Get("Path/to/entry","fallback")
```

### Getting Fields from Workflow Items
```cs
Item contentItem = args.DataItem;
String ItemContent = contentItem.Fields["ItemName"].Value;
```
Despite my insisting that Visual Studio hard-reset my repo, it keeps doing strange things.

This article on [C# regex-matches-to-array](https://stackoverflow.com/questions/4632438/how-can-i-put-regex-matches-into-an-array) should come in handy.

```cs
//Regex example from regex101.com
using System;
using System.Text.RegularExpressions;

public class Example
{
 public static void Main()
 {
  string pattern = @"\$\$([^\$\$]*)\$\$";
  string input = @"This is a $$call$$ for all the rest, a $$drawl$$ but none the less, this $$squall$$ will take my best, for $$fa ll x$$ is calling $$ness$$. $nope$";
  RegexOptions options = RegexOptions.Multiline;

  foreach (Match m in Regex.Matches(input, pattern, options))
  {
  Console.WriteLine("'{0}' found at index {1}.", m.Value, m.Index);
  }
 }
}
```
**First real task completed!** Wrote a few methods that look for field names enclosed by `$$` within a text block, and replace the fields with values from the relevant workflow item.

### Extending the Link Object

**Objective:**
- Extend the general link with a data tag field.
- Represented in the HTML as `data-tag=""`, a property of the `<a>` tag.
- Authorable field must be present where links can be authored.

**Implementation references:**
1. [Adding support for anchors in internal links](https://www.exlrt.com/blog/extending-sitecore-8-1-adding-support-for-anchors-in-internal-links)
2. [Adding custom attributes to general link fields](https://sitecorejunkie.com/2015/10/10/add-a-custom-attribute-to-the-general-link-field-in-sitecore/)
3. [Simplifying media links](https://sitecorejunkie.com/2016/01/01/add-a-new-sitecore-link-field-type-without-writing-any-custom-code/)

**Pre-Implementation: Tentative Steps:**
1. Add custom link class that extends Sitecore's `LinkField` with new link property.
2. Connect general `Link` Sitecore item to new `LinkField` class.
3. Update user interfaces with editable filed for new link property.

**Implementation Notes:**


<br />

<br />

<p style="text-align: right;">\*Permission pending <br /> for MNP logo usage.</p>

<img src="{{ site.url }}/assets/MNPdim.png" alt="Drawing" style="float: right; border-radius:0; width: 200px;"/>
