TARGETS=build/keis/spamlib/main.js build/keis/egglib/main.js build/jquery.js
RJSFLAGS=optimize=uglify

all: ${TARGETS}

${TARGETS}: wrap/head.frag build.js
${TARGETS}:
	r.js -o build.js ${RJSFLAGS}

build.deps: build/build.txt
	awk -f tools/deps.awk $^ > $@
-include build.deps

# Test directory setup
TEST=test/keis/spamlib.js test/keis/egglib.js test/jquery.js test/require.js

test: ${TEST}

test/jquery.js test/require.js: build/jquery.js build/require.js
	cp $^ test

test/%.js: build/%/main.js
	mkdir -p `dirname $@`
	cp $^ $@

# Misc
.PHONY: clean
clean:
	rm -rf build
	rm -f ${TEST}
