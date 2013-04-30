(function () {
    var newGlobals = [],
        x;

    for (x in this) {
        if (!this.globalsDefined[x]) {
            newGlobals.push(x)
        }
    }

    if (newGlobals != []) {
        console.log('New globals', newGlobals);
    }
}());
