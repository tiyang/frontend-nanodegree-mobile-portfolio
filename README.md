# Website Performance Optimization portfolio project

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

