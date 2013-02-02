(function () {
    function expose (name, module) {
        var endstr = 'expose("' + name + '",require,"' + module + '");}))';
        return {wrap: {end: endstr}};
    }

return {
    appdir: '.',
    baseUrl: 'src/vendor',
    dir: 'build',
    optimize: 'none',

    wrap: {
        startFile: 'wrap/head.frag',
    },

    paths: {
        'spamlib': '../spamlib',
        'egglib': '../egglib'
    },

    modules: [
        {
            name: 'spamlib/main',
            include: 'almond',
            override: expose('spamlib', 'spamlib/main')
        },
        {
            name: 'egglib/main',
            include: 'almond',
            override: expose('egglib', 'egglib/main')
        }
    ]
};
}())
