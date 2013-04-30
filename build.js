(function () {
    function expose (name, module) {
        var endstr = 'expose("' + name + '",require,"' + module + '");}))';
        return {wrap: {end: endstr}};
    }

return {
    appdir: '.',
    baseUrl: 'src/vendor',
    dir: 'build',

    wrap: {
        startFile: 'wrap/head.frag',
    },

    paths: {
        'common': '../common',
        'spamlib': '../spamlib',
        'egglib': '../egglib',
        'sprlib': '../sprlib'
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
        },
        {
            name: 'sprlib/main',
            override: {wrap: {start: '', end: ''}}
        }
    ]
};
}())
