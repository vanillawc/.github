## Getting Started

These packages are designed to make contributing as easy as possible. All work and planned features are tracked in the Issues.

If you'd like to contribute **claim an existing issue** -or- **create a new issue**. All unassigned issues are up-for-grabs.

Development follows the [Feature Branch Workflow][feature-workflow]:

1. Fork the repo
2. Clone your fork
3. Create a `feat/[name]` branch
4. Implement your feature
5. Commit the changes
6. Create a PR to merge the feature branch
7. Reference the issue in the PR

[feature-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow


## Developing

Every repository contains a `dev` folder that acts a playground for experimenting with the different features, attributes, and properties of the web component.

A few different approaches can be used to interact with this playground. 

To start the server run `npm start` from the command line.

### Basic

The most straight-forward way to interact with the playground is to

- start the server with `npm start`
- open your preferred browser and navigate to `http://127.0.0.1:5500/dev/`

### Debugging [VSCode + Chrome]

Each repo contains configurations to use VSCode's live debugging capabilities. The first is 'Open in Chrome' which loads the playground in Chrome with an attached debugger context.

To start live debugging in Chrome

- start the server with `npm start`
- open the 'Debug' tab in VSCode
- run the 'Chrome' configuration
- Chrome will open a tab that with the debugger attached
- stopping the debugger will close the Chrome tab

### Debugging [VSCode + Browser Preview]

'Browser Preview' is a VSCode plugin that opens a browser tab inside of VSCode. If you have this plugin installed, this config attaches a debugging context to the browser tab.

To start live debugging in Browser Preview

- start the server with `npm start`
- open the 'Debug' tab in VSCode
- run 'Browser Preview' configuration
- interact with the web component in the Browser Preview Tab
- stopping the debugger will close Browser Preview
