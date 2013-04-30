(function () {
    var x;
    this.globalsDefined = {};
    for (x in this) {
        this.globalsDefined[x] = true;
    }
}());
