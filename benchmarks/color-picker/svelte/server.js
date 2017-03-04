require('svelte/ssr/register');

var App = require('./components/App.html');

module.exports = function(colors) {
    return function benchFn(done) {
        const html = App.render({ colors });
        done();
        return html;
    };
};