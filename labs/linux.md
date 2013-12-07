---
layout: default
title: The Linux Command Line
---

## Learning objectives

- Learn how to work from the Linux command line.
- Learn the difference between assembly language and C++.
- Learn a simple approach to compile and run console programs written in C++.

## Preparation

To complete this lab, you need to have an account that enables you to log into the computers in JB 359. You can also log into computers in JB 358 with the same username and password. The lab instructor will give you a username and password, or will explain how to get one. 

You can do all labs and assignments on a personal computer by logging into a lab machine using SSH; see [How to work remotely using SSH](https://github.com/csusbdt/201-2013-fall/blob/master/SSH.md).

## Alternative environments

If you have a Mac that runs OS X, you can do this assignment because the commands covered in this lab are also available in OS X.  However, you will need to install Xcode to have access to a C++ compiler.

If you have access to a computer that runs the Linux operating system, then you can use that computer and do not need to work on a computer in JB 359/358.

If your personal computer is fast enough and has enough memory, you can run an instance of Linux in a virtual machine such as [Virtual Box](https://www.virtualbox.org/), or you can set up your computer to duel boot into Windows or Linux.

## Instructions

To do the exercises in this lab, you need to log into one of the computers in JB359.
You can do this from inside the lab room JB359 or remotely using SSH.

### Learn about the Linux (and OS X) command line (0 points)

Use a search engine to find documentation and tutorials that help you understand the Linux command line interface.

Learn how to use the following Linux commands.

- pwd
- cd
- ls
- mkdir
- rmdir
- mv
- rm
- cp

Learn how to use the following special characters in commands.

- .
- ..
- ~

Learn how to use a text editor to create and modify character data files.  

If you are working directly on a lab computer (not through ssh), then you can run programs that create windows, such as the text-editor called gedit.  However, if you are working on a lab computer remotely (through ssh), then you can not run programs that create windows, because the ssh program gives you a text-based interface to the remote system.  In this case, you need to use an editor that runs inside a terminal window. On our systems, you can use _nano_ or _vi_.  Nano is easier to understand, but vi is the traditional text editor that comes pre-installed on practically all UNIX-like operating systems, and is therefore important to system administrators.

A program that creates a window is said to have a graphical user interface (GUI). In the early days of computers, GUIs did not exist, so that all interaction with the computer was through text-based programs.

Practice using the above commands and special symbols in the terminal window while logged into your Linux account.  Design and carry out experiments to verify your understanding of these Linux commands and special characters.

Create a folder called lab_01, cd into it, and do the following exercises in it.

### Experience working with assembly language (10 points)

Read [What is a computer](https://github.com/csusbdt/201-2013-fall/blob/master/CPU.md) and compile and run the assembly language program described in it.  

Modify the program so that it displays _Hello, Alice._

Name the source code file _say_hello.s_ and place it in folder lab_01.

### Experience working with C++ (10 points)

Follow the instructions in
[Hello Program](https://github.com/csusbdt/201-2013-fall/blob/master/HELLO.md)
to write, compile and run a C++ program that displays the word _hello_.

Modify the program so that it displays _Hello, Alice._

Name the source code file _hello.cpp_ and place it in folder lab_01.

### Submit your work

Submit your work (files _say_hello.s_ and _hello.cpp_ but not other files such as _a.out_).
See [Submission instructions](https://github.com/csusbdt/201-2013-fall/blob/master/SUBMIT.md) for help with this.

