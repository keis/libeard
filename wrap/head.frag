// head fragment
(function (root, factory) {
    factory(root, function (name, require, main) {
        // use the local require to load the main module
        require([main], function (module) {
            // Redefine with global define
            if (typeof define === 'function' && define.amd) {
                define(name, [], function () {
                    return module;
                });
            }
        }, null, true);
    });
}(this, function (root, expose) {
// head fragment
