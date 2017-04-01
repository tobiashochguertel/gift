var baseUrl = window.location.pathname;
var fileIndex = baseUrl.indexOf("index.html");
if (fileIndex > 0)
    baseUrl = baseUrl.slice(0, fileIndex);
require.config({
    baseUrl: baseUrl,
    paths: {
        "jquery": "webjars/jquery/2.1.4/jquery.min",
        "xtext/xtext-codemirror": "xtext/2.9.2/xtext-codemirror"
    },
    packages: [{
        name: "codemirror",
        location: "webjars/codemirror/5.24.2",
        main: "lib/codemirror"
    }]
});
require(["xtext/xtext-codemirror"], function (xtext) {
    xtext.createEditor();
});