# Frontend project: EmployeeManagement

## Introduction
For the purpose of this project, we will be implementing a [single page application](https://en.wikipedia.org/wiki/Single-page_application) using a modern framework called [Svelte](https://svelte.dev/).

Svelte will allow us to use vanilla HTML, CSS and JavaScript, but to split them into reusable components in order to speed up development and reduce code duplication.

In order to get started in using Svelte, the official tutorial is a good resource:

https://svelte.dev/tutorial/basics

## 1. Configuring the environment

In order to get the project up and running, we have the following dependencies:
 * Git, for source version control.
 * A text editor.
 * Node.js, which contains `npm` for obtaining our JavaScript dependencies (including the Svelte framework).

### a. Installing Node
Go to the [Node.js Official Website](https://nodejs.org/en/) and download and install the latest LTS version (12.18.3 at the time of writing). There is no need to change the default options.

### b. Installing Git
There is a dedicated tutorial on how to set up Git.

### c. Cloning the repository
In a Git Bash, console we need to type the following command:

```
git clone https://github.com/AusyPractice/EmployeeManagement_Front
```

A new directory should be created called `Ausy_EmployeeManagement` containing the project.

### d. Installing the dependencies

We should go to the new `Ausy_EmployeeManagement` and open a new Git Bash terminal there (go into the folder with Windows Explorer and right click on an empty space, and select _Open in Git Bash_). 

In Git Bash, we should type the following command:

```
npm install
```

### e. Installing an editor

A text editor which is commonly used in web development is Visual Studio Code.

After installing it, make sure to install the following extensions to make development easier:
- _Svelte for VS Code_ by  Svelte -- adds features such as syntax highlight to `.svelte` files.
- _Svelte Intellisense_ by ardenivanov -- adds autocompletion support to `.svelte` files.

## 2. Development process

After the environment has been set up in the previous step, we can start the development process.

Svelte is a framework which requires a build step and a server in order to work properly.

Before making any changes to the code, type the following command in Git Bash, in the `Ausy_EmployeeManagement` directory:
```
npm run dev
```

After the command is run, navigate to [localhost:5000](http://localhost:5000/) on your favorite browser to see the project. Any changes while the `npm run dev` command is still active will appear at this address.