## Configuration
# Names of modules to build
MODULES=keis/spamlib keis/egglib

# Flags to pass to RJS
RJSFLAGS=optimize=uglify

## Core targets
TARGETS=${MODULES:%=dist/%.js}
BUILD=${TARGETS:dist/%.js=build/%/main.js}

all: ${TARGETS}

dist/%.js: build/%/main.js
	mkdir -p `dirname $@`
	cp $^ $@

${BUILD}: wrap/head.frag build.js
${BUILD}:
	r.js -o build.js ${RJSFLAGS}

build.deps: build/build.txt
	awk -f tools/deps.awk $^ > $@
-include build.deps

# Test directory setup
TEST=${MODULES:%=test/%.js} test/jquery.js test/require.js

test: ${TEST}

test/jquery.js test/require.js: build/jquery.js build/require.js
	cp $^ test

test/%.js: dist/%.js
	mkdir -p `dirname $@`
	cp $^ $@

# Misc
.PHONY: clean
clean:
	rm -rf build dist
	rm -f ${TEST}
