TARGETS=build/spamlib/main.js build/egglib/main.js

all: ${TARGETS}

${TARGETS}: wrap/head.frag

${TARGETS}:
	r.js -o build.js

build.deps: build/build.txt
	awk -f tools/deps.awk $^ > $@

-include build.deps

test: test/spamlib.js test/egglib.js

test/%.js: build/%/main.js
	cp $^ $@
