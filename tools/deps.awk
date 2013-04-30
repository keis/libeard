/^$/ {
    out="";
}

/^-+$/ {
    next;
}

{
    if (out == "") {
        out = $0;
    } else {
        # FIXME: Should be constructed from paths in build.js
        gsub(/^spamlib/, "../spamlib/")
        gsub(/^egglib/, "../egglib/")
        gsub(/^common/, "../common/")

        deps[out] = deps[out] " src/vendor/" $0;
    }
}

END {
    for (d in deps)
        print "build/" d ":" deps[d]
}
