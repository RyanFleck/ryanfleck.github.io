---
layout: content
title: Drupal 
permalink: /drupal
---

![Image.]({{ site.url }}/assets/drupal-logo.png){: .center-image}

<h1 style="font-size: 60px; text-align: center;">Drupal</h1>
<p style="text-align: center;">Ryan's research and learning resources.
<br>
Work completed for <a href="https://www.mnp.ca/en"><b>MNP LLP</b></a> May 2018.
<br>
MNP assets © Copyright 2018 MNP LLP
<br>
Drupal logo <b>CC 3.0-BY</b> by <a href="http://simpleicon.com">SimpleIcon</a>. 
</p>

<br />

<h3>Table of Contents</h3>
1. TOC Seed Entry
{:toc}

<br />

# Research

This section is dedicated to requirements-gathering and prototyping. I've done a good bit of reading and messaging with the Drupal community, along with running a small Drupal instance on my personal micro-server. Useful resources: 
1. [Drupal Business Survey 2017](https://www.drupal.org/association/blog/drupal-business-survey-2017) and corresponding [Slides](https://www.slideshare.net/exove/drupal-business-survey-results-2017).

<br />

## Operating System

While the team I am working with seems most comfortable with Windows Server and IIS, the majority of the Drupal community seems to use a LAMP stack running on a GNU/Linux distribution. On Friday July 27th I posed this question on the Drupal IRC on Freenode. Information about [Drupal's IRC community can be found here.](https://www.drupal.org/ircchat)

> [10:48] **rflec028** Hello, Drupal; I was wondering if there was any survey data on the distribution of Operating Systems in use among enterprise Drupal installations. My team is more familiar with IIS/Windows, but most articles I've seen point to better stability/security on CentOS, RHEL, SUSE, etc.

<br />

The resulting conversation:

> [10:50] **ivaat** rflec028, scratch out centos and suse. and think of rhel that when major version changes (like rhel 6 to 7) then you wont be able to upgrade. new installation of OS needed.

> [10:50] **ivaat** there is also freebsd to be counted, and ubuntu core as server, ubuntu LTS allow easily uograde release distro as well.

> [10:52] **rflec028** Alright, that's good to know; I've seen some people mention RHEL and Ubuntu Server. Why not CentOS/SUSE? What/where/how do you use the OSes you mentioned?

<br />

He didn't get back to me after that. I then posed the same question to the [Drupal community **Slack**](https://www.drupal.org/slack). Some members mentioned that they also used Ubuntu Server.

> [12:09] **Mario Martins** [Ubuntu and] apache is well organized.... better that rpm based like centos/redhat....

<br />

Had this short descussion regarding Windows vs Unix security with [Granville R. of Semtech](https://discoverorg.com/directory/person/granville-raper/6552968):

> [11:59] **graper** Ultimately, PHP can run in IIS and Drupal does provide a web.config file for use by IIS, so it isn't a problem to run on Windows with IIS. You can also run Apache on Windows, which has different security issues then IIS, but you may still have issues with security on Windows vs Linux.

> [12:07] **rcf** Security is definitely a concern. Is running a GNU/Linux distro (and getting the team to learn development for a new OS,) worth it for the Security benefits? (Will be using containers.)

> [12:09] **graper** Is your team capable of making changes to windows to patch security holes or do they just wait for MS for a patch?

> [12:10] **rcf** More experienced members can, but this is a small project and I feel the best out-of-box security would be preferable for our use case.

> [12:19] **graper** IMO if you have great windows admin/engineers stick with windows.  if a problem comes up it will be easier for them to troubleshoot it.  If this project is small enough that you can train them on linux, make sure you have a backup IIS server to rescue the project should it come to it.

> [12:10] **rcf** Alright, thank you. I appreciate the input. Do you mind sharing what you've seen people using in general? What is popular?

> [12:23] **graper** I used to use a windows server for my sandbox but the hosting we got was a dedicated server from a reseller out of a data center and it was linux.  ultimately the biggest standard for hosting out in the wild is linux because it doesn't require user licenses and people are only uploading PHP code. If you have alot of .net based site, you can run php code on that same server and reduce management.  containers breaks that because only a windows host can run a windows container, and linux for linux containers.

> [12:24] **nikathone** FWIW for peace of mind and better support use a linux based OS if possible. I've seen too many issues when it comes to windows and IIS, we also have a government client who have their own windows server which host their drupal intranet and we always run into all sort of problems.

<br />

**Mike Adams** suggested that the OS didn't matter in a container.

> [1303] **Mike Adams** so i don't think the OS matters much and is just down to personal preference at a base level. I containerize everything w/ docker, makes working across different operating systems a lot smoother. You can use it on everything from windows to gentoo. That may solve your issue of getting everyone on the same page @RCF

> [1303] **rcf** @Mike Adams we will be containerizing with Azure. Admin has recommended CentOS/Debian. I am trying to optimize for development difficulty/time; are there significant problems with running Drupal on Windows Server to justify time spent getting started with GNU/Linux? In my personal experience running Drupal on Debian with LAMP was a breeze.

> [1303] **Mike Adams** Everything development related on windows outside of C# is a nightmare. The containerization should be what cuts down dev time because if everything is properly containerized, the host os shouldn't matter at all.

> [1303] **rcf** ...what about performance? Any data out there on which containerized OS runs Drupal/PHP the best? (Disregarding nginx/optimization/caching) 

> [1303] **Mike Adams** If you're rolling your own image for drupal, i'd wager that literally any gnu/linuxy os is close enough in performance to anything else where the margins are too small to matter. The drupal8 image used for docker uses debian stretch-slim

> [1303] **rcf** Hm, never used containers myself before, time for me to do some docker-containers-on-azure research. Thanks for your time!

> [1303] **Mike Adams** np, good luck

<br />

**Bojan Zivanovic** mentioned some potentially important performance info:

> [1303] **bojanz** You should expect Drupal on Windows to be noticably slower, yes. Open source software is not well optimized for Windows, and PHP itself is known for being slower.

> [1303] **rcf** Interesting. I thought as much. Do you have any link-able statistics?

> [1303] **bojanz** No, I just saw some comments by PHP core devs on r/php. Plus personal experience.

<br />

**Things to continue research on:**
- Docker containers.
- Docker/Azure container compatability.
- Most performant/popular GNU/Linux for PHP/Drupal.

<br />

## Azure Containers

Tyler is willing to spin up new Azure Containers for experimentation. A [quick overview of Azure containers can be found here](https://www.petri.com/azure-containers-pros). I need to give him a VM with:
* VHD (not VHDX) fixed size disk.
* GEN 1, not GEN 2.

The following OSes will be tested for ease of install/networking/scalability:
1. Microsoft **Windows Server** (IIS)
2. **CentOS** (LAMP) (Derived from RHEL)
3. **SUSE** Enterprise Linux (LAMP) (Sub. OpenSuse Leap)
4. **Ubuntu** Server (LAMP)
5. **RedHat** Enterprise Linux aka RHEL (LAMP) (Sub. Fedora Server)

Drupal's official [Docker containers](https://hub.docker.com/r/_/drupal/) use **Debian** or **Alpine Linux** as a base, and look promising for development and production setups.

Drupal seems to have middling module support for Azure, but since the site won't be handling large amounts of user-uploaded media, it shouldn't pose a problem if *Azure Blob Storage* or other functionality is not used. [Azure Blob Storage Module (no longer maintained?)](https://www.drupal.org/project/azure_blob)

Drupal has good support for SQL and Azure SQL: [Module.](https://www.drupal.org/project/sqlsrv)

<br />

## Server Architecture

**Resources:**
1. [Azure blog on best practices for Drupal CMS (**very useful**)](https://azure.microsoft.com/en-ca/blog/best-practices-for-drupal-cms-on-azure-websites-2/)
2. [Post on high-availability Drupal 8 on Azure.](https://www.previousnext.com.au/blog/high-availability-drupal-8-microsoft-azure)

<br />

## Setting Up a Test Environment

For use as preliminary containers and development environments.

**Recommended Tutorials:**
1. [Log email to plaintext so no mail server setup is needed.](https://www.drupal.org/docs/develop/local-server-setup/managing-mail-handling-for-development-or-testing)
1. [Centos VM for Drupal Development](https://www.drupal.org/forum/support/before-you-start/2014-03-03/creating-centos-vm-for-drupal-development)
<!--1. []()-->

### Windows VM Setup

**Using the following guides:**
1. [Installind Drupal 8 on Windows](http://www.drupalonwindows.com/en/blog/installing-drupal-8-windows#section2)
2. [Configuring IIS and PHP on Windows](https://docs.microsoft.com/en-us/iis/application-frameworks/scenario-build-a-php-website-on-iis/configuring-step-1-install-iis-and-php)

**And the following programs:**
1. [MySQL (Any database will do.)](https://dev.mysql.com/downloads/installer/)
1. [Composer (PHP Package Manager](https://getcomposer.org/download/)

**PHP.ini**
```
extension_dir = "ext"
extension=php_curl.dll
extension=php_pdo_mysql.dll
```

```
composer create-project drupal-composer/aha-drupal:8.x-dev
```

Ran into some PHP version issues, apparently 7.2 broke some things.
<https://github.com/drupal-composer/drupal-project/issues/398>
<https://github.com/drupal-composer/drupal-scaffold/pull/80>

Pausing Windows configuration for now so I can focus on CentOS.

`ToDo`

### CentOS VM Setup

Right off the bat, I was presented with the option to configure MariaDB, PHP, standard development and virtual-guest tools right off the bat.

![CentOS installation.]({{ site.url }}/assets/mnp/centos-install.png)

Had some problems with the virtualized network config. Reinstalled. Followed [this tutorial to assign an ip to the machine.](https://achubbard.com/2018/01/31/centos-7-minimal-installation-hyper-v/) [**This tutorial from Microsoft worked best**](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/create-upload-centos#centos-70) and allowed me to successfully gain network access at `machine.ahundredanswers.com`.

Enable apache2:
```bash
systemctl start httpd
systemctl enable httpd
```

Open firewall for port 80 and 443:
```bash
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --reload
```

Now, by typing `ip addr show`, it is possible to view the machine's ip (assuming it is not addressable via the set name yet,) you will be able to view webpages placed at `//var/www/http`.

To allow **SSH** access:
```bash
yum -y install openssh-server openssh-clients
systemctl enable sshd.service
systemctl start sshd.service
```

It is now possible to use the windows subsystem for linux, putty or any Unix-like machine to ssh and easily administer the machine.

**Preparing CentOS VM for Azure:**

First, update GRUB2 by adding the following boot parameters to `GRUB_CMDLINE_LINUX`. Grub config files, like most others, are located at `/etc/default/grub`.
```
rootdelay=300 console=ttyS0 earlyprintk=ttyS0 net.ifnames=0
```
Next, remove these boot parameters ([see this guide](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/create-upload-centos#centos-70))
```
rhgb quiet crashkernel=auto
```

Now Azure Linux Agent can be installed:
```bash
yum install python-pyasn1 WALinuxAgent
systemctl enable waagent
```

Update `/etc/waagent.conf`:
```
ResourceDisk.Format=y
ResourceDisk.Filesystem=ext4
ResourceDisk.MountPoint=/mnt/resource
ResourceDisk.EnableSwap=y
ResourceDisk.SwapSizeMB=8192 (Should match RAM size.)
```

Final prep for Azure containerization:
```
sudo waagent -force -deprovision
export HISTSIZE=0
logout
```
**Installing Drupal:**

Install database:
```bash
yum install mariadb-server

systemctl enable mariadb
systemctl start mariadb

#Only for production:
mysql_secure_installation
```

1. Download and untar Drupal
2. Move directory to /var/www/html/drupal
3. Set permissions and move files:

> PHP  
5.6.36  
Drupal will drop support for this version on March 6, 2019. Upgrade to PHP version 7.1 or higher to ensure your site can receive updates and remain secure. See PHP's version support documentation and the Drupal 8 PHP requirements handbook page for more information.

**Using PHP 7:**
```
yum remove php*
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum install php70w php70w-opcache php70w-mbstring php70w-gd php70w-xml php70w-pear php70w-fpm php70w-mysql php70w-pdo
```
**Setting Permissions:**

Short article on [httpd permissions via selinux](https://stackoverflow.com/questions/6795350/nginx-403-forbidden-for-all-files).

```bash
con -R -t httpd_sys_content_rw_t /var/www/html/sites/default/files/
chcon -R -t httpd_sys_content_rw_t /var/www/www.example.com/private-files

#enable mail:
setsebool -P httpd_can_sendmail on
```

**FTP Setup**

[Guide](https://www.tecmint.com/install-ftp-server-in-centos-7/)

### Debian VM Setup

`ToDo`

<br />

## Database Serialization

Research will appear here


<br />

<img src="{{ site.url }}/assets/MNPdim.png" alt="Drawing" style="float: right; border-radius:0; width: 200px;"/>
