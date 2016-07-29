(function() {
    /**
     * query 100000 times to calculate the emulation
     * basic selector
     * version: jquery-3.1.0.min.js
     */
    var query = function(selector) {
        var startTime = new Date().getTime();
        var tempDom;
        for (var i = 0; i < 100000; i++) {
            tempDom = $(selector);
        }
        return new Date() - startTime;
    };

    /**
     * query 100000 times to calculate the emulation
     * traversal selector
     * version: jquery-3.1.0.min.js
     */
    var siblings = function(basic, siblings) {
        var startTime = new Date().getTime();
        var tempDom;
        for (var i = 0; i < 100000; i++) {
            tempDom = $(basic).siblings(siblings);
        }
        return new Date() - startTime;
    };
    var children = function(basic, children) {
        var startTime = new Date().getTime();
        var tempDom;
        for (var i = 0; i < 100000; i++) {
            tempDom = $(basic).children(children);
        }
        return new Date() - startTime;
    };
    var parent = function(basic) {
        var startTime = new Date().getTime();
        var tempDom;
        for (var i = 0; i < 100000; i++) {
            tempDom = $(basic).parent();
        }
        return new Date() - startTime;
    };

    console.log('Browser: Chrome 51.0.2704.106. jQuery version: 3.1.0.');
    console.log("ID selector: " + query("#debug_1") + "ms");
    console.log("ClassName selector: " + query(".debug-1") + "ms");
    console.log("TagName selector: " + query("input") + "ms");
    console.log("Attribute selector '[data-type=A]': " + query("[data-type=debug-1]") + "ms");
    console.log("Pseudo selector ':checkbox': " + query(":checkbox") + "ms");
    console.log("Pseudo selector ':checked': " + query(":checked") + "ms");
    console.log("Pseudo selector ':disabled': " + query(":disabled") + "ms");
    console.log("All selector: " + query("*") + "ms");

    console.log("Siblings selector: " + siblings("#debug_1", "input"));
    console.log("Children selector: " + children("#debug_1", "input"));
    console.log("Parent selector: " + parent("#debug_1"));
})();
