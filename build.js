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
        'keis': '../keis',
    },

    modules: [
        {
            name: 'keis/spamlib/main',
            include: 'almond',
            override: expose('spamlib', 'keis/spamlib/main')
        },
        {
            name: 'keis/egglib/main',
            include: 'almond',
            override: expose('egglib', 'keis/egglib/main')
        },
        {
            name: 'keis/sprlib/main',
            override: {wrap: {start: '', end: ''}}
        }
    ]
};
}())
