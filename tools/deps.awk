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
        gsub(/^keis/, "../keis/")

        deps[out] = deps[out] " src/vendor/" $0;
    }
}

END {
    for (d in deps)
        print "build/" d ":" deps[d]
}
