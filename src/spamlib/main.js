define([], function () {
    var Spam = {
        name: 'spamlib',
        version: '1.0.0'
    };
    root.Spam = Spam; // Export for non amd users
    return Spam;
});
