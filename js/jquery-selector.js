(function() {
    /**
     * query 100000 times to calculate the emulation
     * version: jquery-3.1.0.min.js
     */
    var query = function(selector) {
        var startTime = new Date().getTime();
        var tempDom;
        for (var i = 0; i < 100000; i++) {
            tempDom = $(selector);
        }
        return new Date() - startTime;
    }

    console.log("Version: 3.1.0. ID selector: " + query("#debug_5") + "ms");
})();
