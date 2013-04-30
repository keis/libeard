define(function () {
    'use strict';

    var root = this,
        self = {},
        ns = 'Keis';

    if (root[ns] !== void 0) {
        return root[ns];
    }

    function extend(dest, src) {
        for (var prop in src) {
            dest[prop] = src[prop];
        }
        return dest;
    }

    self._namespace = ns;

    /**
     * Register a namespace
     *
     * @param {String} namespace the name of the namespace
     * @param {Object} [value]   attributes to bind to the namespace
     */
    self.namespace = function (namespace, value) {
        var parts = namespace.split('.'),
            ctx = self,
            ns = [ctx._namespace],
            part;

        while (part = parts.shift()) {
            ns.push(part);

            if (!ctx[part]) {
                ctx[part] = {};
            }

            ctx = ctx[part];
            ctx._namespace = ns.join('.');
        }

        return extend(ctx, value || {});
    }

    self.use = function (name) {
        return self.namespace(name);
    }

    return (root[ns] = self);
});
