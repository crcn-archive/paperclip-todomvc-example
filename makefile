ALL_TESTS = $(shell find ./test/unit -name "*-test.js")
REPORTER="dot"
ONLY=.

build-app:
	./node_modules/.bin/mojo build ./app/js/entry.js -m --output=build/app.min.js

test-node:
	APP_DIR=app ./node_modules/.bin/mocha $(ALL_TESTS) --reporter=$(REPORTER) -g $(ONLY) --bail

test-watch:
	APP_DIR=app ./node_modules/.bin/mocha $(ALL_TESTS) --reporter=$(REPORTER) -g $(ONLY) --bail --watch ./app ./test

coverable:
	@rm -rf cov;
	cp -R ./app ./cov;
	find ./cov -name "*.pc" -exec rm {} \;
	@for PCFILE in `find ./app -name "*.pc"`; \
		do \
		RCFILE=`echo $$PCFILE | sed -e "s/app/cov/g"`; \
		RCFILE="$$RCFILE.js"; \
		mkdir -p `dirname $$RCFILE`; \
		./node_modules/.bin/paperclip -p -i $$PCFILE > $$RCFILE; \
	done;

test-cov: coverable
	APP_DIR=cov \
	./node_modules/.bin/istanbul cover \
	./node_modules/.bin/_mocha -- $(ALL_TESTS) --ignore-leaks --bail
