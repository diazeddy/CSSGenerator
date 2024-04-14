# Project: Web Page Screenshot Capture

## Description
A web application that captures webpage content as images every 5 seconds and stores them locally on the server.

## Features
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

## Usage
1. Clone the repository
2. Install dependencies
3. Run the program
4. Open `http://127.0.0.1:5173/` in your browser