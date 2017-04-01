var baseUrl = window.location.pathname;
var fileIndex = baseUrl.indexOf("index.html");
if (fileIndex > 0)
    baseUrl = baseUrl.slice(0, fileIndex);
require.config({
    baseUrl: baseUrl,
    paths: {
        "jquery": "webjars/jquery/2.1.4/jquery.min",
        "ace/ext/language_tools": "webjars/ace/1.2.0/src/ext-language_tools",
        "xtext/xtext-ace": "xtext/2.9.2/xtext-ace"
    }
});
require(["webjars/ace/1.2.0/src/ace"], function() {
    require(["xtext/xtext-ace"], function(xtext) {
        xtext.createEditor({
            baseUrl: baseUrl,
            syntaxDefinition: "xtext-resources/generated/mode-gift"
        });
    });
});