require('svelte/ssr/register');

var App = require('./components/App.html');

module.exports = function(getNextSearchResults) {
    return function benchFn(done) {
        const html = App.render({ searchResultsData: getNextSearchResults() });
        done();
        return html;
    };
};