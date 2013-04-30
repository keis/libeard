// head fragment
(function (root, factory) {
    var ctx = {};
    // Initialize in a dummy `this` context to avoid polluting
    // the global namespace.
    factory.call(
        ctx,
        /**
         * Import and expose modules to global require if available.
         *
         * @param {String}   name    the module name to define().
         * @param {Function} require local require function from e.g almond.
         * @param {String}   main    module name to import and expose.
         */
        function (name, require, main) {
            // use the local require to load the main module. define callbacks
            // will execute the real global scope.
            require([main], function (module) {
                // Redefine with global define
                if (typeof define === 'function' && define.amd) {
                    define(name, [], function () { return module; });
                }
            }, null, true);
        }
    );
}(this, function (expose) {
// head fragment
