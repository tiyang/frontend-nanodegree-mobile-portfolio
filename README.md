# Website Performance Optimization portfolio project

## How to run
### Setup
Run `npm install` to install the dependent packages.

### Develop
Run `gulp` to start up a server, and a liveload browser will automatically open.

### Build
Run `gulp build` to build the source files into `dist` folder.

### Deploy
Run `gulp deploy` to deploy the project to your own github pages.

## Optimizations

### index.html
Optimizations for `index.html` include:

- Add `media="print"` to the `print.css`
- Inline `style.css`
- Move scripts to the end of the body tag
- Add async attribute to the scripts
- Optimize the image sizes

### views/js/main.js
Optimizations for the pizza page's main.js:

- Near line 506, move the read to the `scrollTop` out of the loop. This will prevent reflow in loop, and make the scroll animation smooth.
- Remove the useless `determinDx` function; optimize `changePizzaSizes` function.

## Test the optimized pages
The optimized project has been deploy to [https://tiyang.github.io/udportfolio/](https://tiyang.github.io/udportfolio/).

You can test the speed on [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/).

