import App from './components/App.html';

var mountNode = document.getElementById("mount");

if (window.colors) {
    var colors = window.colors;
    const app = new App({
        target: mountNode,
        data: { colors }
    });

    console.log('Re-rendering on client completed');
}

window.addBench('svelte', function(el, colors) {
    var widget;
    var selectedColorIndex = 0;

    var widget = new App({
        target: el,
        data: { colors }
    });

    return function(done) {
        widget.set({
            selectedColorIndex: (++selectedColorIndex) % colors.length
        });
        done();
    };
});