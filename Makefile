install:
	npm install

build:
	npm run build

docs:
	mkdir -p docs
	npm run documentation -- build src/index.js -f md > docs/README.md

test:
	npm run test

lint:
	npx eslint .

publish:
	npm publish --access public

.PHONY: test docs
