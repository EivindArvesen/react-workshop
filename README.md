# Introduction to React

This workshop will give a whirlwind tour of React, state management and Redux, demonstrating the core principles and providing a platform to build on.

## [Open presentation slides](https://docs.google.com/presentation/d/1AKCsU4UD0WQdzOA0SFIkN4OzBf35yLoWByBnsvTVqL4/edit?usp=sharing)

## Focus of this workshop

We will learn about React and build React components using the well-known Todo application as our use-case. After making a few components and making them render to the screen, we'll use hooks to add state to our components, and then install Redux. We'll then add more state to be handled by Redux and inject it back into React.

Time estimate: 4 hours

## Intended audience

Compared to other Nerdschool workshops, this one is considerably more advanced.

Since React - and the other libraries we'll use - are libraries for JavaScript, there is an expectation that you have a fair understanding of:

-   JavaScript
-   Web development (you know how request/response works and have used Chrome Developer Tools (F12) or similar).

## What you need

-   Google Chrome
    -   Extension: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
    -   Extension: [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
-   A modern text editor that understands JavaScript and React. We recommend Visual Studio Code but others such as Web Storm and Atom are good choises.
-   [NodeJS and npm](https://nodejs.org/en/) installed on your machine. **You should have the latest LTS release of NodeJS or later, which (when writing this) is 10.16.0 of node and 6.9.0 of npm. Use `node -v` and `npm -v` to check your version.**

### Bash (Windows Specifics)

These steps are known to work on Bash (which comes by default on macOS and most Linux Distros), which is likely your default shell.

On Windows, you'll need to take some extra steps.
You can either install:

-   [Git for Windows](https://gitforwindows.org/), and use the included "Git BASH" tool, or
-   [Ubuntu for Windows](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot%3aoverviewtab), which (amongst other things) includes Bash.

## How to get started

-   Start by cloning this repository into a folder on your computer. If you've never used git before, you can alternatively use the the "Download ZIP" button to the right.
-   Although you have this `README.md` file on your computer it's easier to read it on GitHub, so we recommend you keep this page open with the exercise tasks.

## Exercises

This repository contains a set of exercises organized in folders. Each folder contains a `README.md` describing the exercise.

-   [Exercise 1 - Getting started](exercise-1/) (start here)
-   [Exercise 2 - React components](exercise-2/)
-   [Exercise 3 - React](exercise-3/)
-   [Exercise 4 - State management](exercise-4/)
-   [Exercise 5 - Redux](exercise-5/)
-   [Exercise 6 - Completing the app](exercise-6/)

Remember that you can kill the currently active process on your shell by pressing:

<kbd>CTRL</kbd> + <kbd>C</kbd>

### Symbols and notation used in exercises

#### Icons with special meaning

:pencil2: - A task you should do
:book: - A section of text to read (no tasks, just information).
:bulb: - Additional information.
:exclamation: - Something important.
:question: - Open-ended question for the reader ("What do you think would happen if...")
:poop: - Bad practice (don't-do-this)
:star: - A bonus task (not required)

#### Keyboard keys

Will look like this:

<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>C</kbd>

#### Diff blocks

Emphasizes how lines of text should change.

```diff
- this text was removed
+ and replaced with this text
```

## Proposed solutions

Should you want or need to look at proposed solutions for the assignments, these are available at the following tags:

-   `ex1`
-   `ex2`
-   `ex3`
-   `ex4`
-   `ex5`

You can check them out using `git checkout <TAG>`

## Standing on the shoulders of giants

These excercises were originally forked from the excellent [React and Redux](https://github.com/nerdschoolbergen/react) workshop materials by [Bergen Nerdschool](https://nerdschoolbergen.github.io/home/).
