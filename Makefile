TARGETS=build/spamlib/main.js build/egglib/main.js build/jquery.js
RJSFLAGS=optimize=uglify

all: ${TARGETS}

${TARGETS}: wrap/head.frag build.js
${TARGETS}:
	r.js -o build.js ${RJSFLAGS}

build.deps: build/build.txt
	awk -f tools/deps.awk $^ > $@
-include build.deps

# Test directory setup
TEST=test/spamlib.js test/egglib.js test/jquery.js test/require.js

test: ${TEST}

test/jquery.js test/require.js: build/jquery.js build/require.js
	cp $^ test

test/%.js: build/%/main.js
	cp $^ $@

# Misc
.PHONY: clean
clean:
	rm -rf build
	rm -f ${TEST}
