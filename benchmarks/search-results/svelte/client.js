import App from './components/App.html';

var mountNode = document.getElementById("searchResultsMount");

if (mountNode) {
    mountNode.innerHTML = '';

    const app = new App({
        target: mountNode,
        data: { searchResultsData: window.searchResultsData }
    });

    console.log( `window.searchResultsData`, window.searchResultsData )

    console.log('Re-rendering on client completed');
}

window.addBench('svelte', function(el, getNextSearchResults) {
    var widget = new App({
        target: el,
        data: { searchResultsData: getNextSearchResults() }
    });

    return function(done) {
        widget.set({
            searchResultsData: getNextSearchResults()
        });
        done();
    };
});