# My Awesome Project

This is an app I developed to track the International Space Station across the globe in real time.

**Link to project:** https://iss-live-tracker.netlify.app/

## How It's Made:

**Tech used:** HTML, CSS, Async JavaScript

I've wanted to build an ISS tracker for some time ever since I discovered a few APIs that provide real time coordinates for the Space Station. The biggest challenge was finding a way to render a map to the screen and then to update that periodically as new coordinates come in. For the world map I chose Open Layers, an open-source map software. And for the ISS tracking data I chose the wheretheiss.at API.

## Optimizations

_(optional)_

My initial version of the app forced a page refresh every 5 seconds which sent a new API request and rendered a new map each iteration. It worked, however the user experience left a lot to be desired as the page refreshing every few seconds didn't make for a great UI. My next iteration refactored the code to render the map once and then every X seconds send a fetch request to the API and update the coordinates on the ISS image layer.

## Lessons Learned:

I learned a lot about asynchronous JavaScript and how the call stack and task queue work within the web browser.
