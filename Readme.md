# Project: Web Page Screenshot Capture

## Description
Build several CSS Generator front-end pages and implement capturing functionality.

## Features
- Implment 4 app features of CSS generator.
- Captures webpage content as images
- Saves images to a local directory
- Utilizes React for frontend and Node.js for backend

## Screenshots
[View Screenshots](/screenshots)

## Requirements
1. [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html)
2. [Border Radius CSS Generator](https://cssgenerator.org/border-radius-css-generator.html)
3. [Text Shadow CSS Generator](https://cssgenerator.org/text-shadow-css-generator.html)
4. [CSS Cursor Demonstrator and Generator](https://cssgenerator.org/css-cursor-demonstrator-and-generator.html)
5. Backend: Take a screenshot of the webpage every 5 secs and save on hard disk

## Frontend
### Tech Stacks
- React
- TypeScript
- HTML2Canvas
- Axios
- Vite

### Features
- Border Radius, Box Shadow, Text Shadow, CSS Cursor Generators
- Copy CSS styles to clipboard

### Challenges & Solutions
- Adopted dynamic CSS with inline styles
- Achieved pixel-perfect design
- Copied styles using JavaScript's navigator object

## Backend
### Tech Stacks
- Node.js
- Express.js
- CORS module

### API Features
- `/api/capture`: Receives image data (Canvas DataURI) from frontend

### Installation

1. Clone the repository

2. Set up the node modules on both front end and back end side
- Please use Node 16.14.0

```shell
npm install
```

3. Run the program

- Front-end

```shell
npm run dev
```

- Back-end
```shell
node server.js
```