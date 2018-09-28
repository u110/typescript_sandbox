setup: yarn
	yarn add typescript

compile/%.ts:
	yarn tsc --outFile build/$(subst .ts,.js,$(@F)) $(@F)

lint:
	yarn tslint --fix *.ts

open:
	open greeter.html

gulp:
	yarn gulp -f proj/gulpfile.js
	node proj/dist/main.js
