setup: yarn
	yarn add typescript

build: compile/greeter.ts

compile/%.ts:
	yarn tsc --outFile build/$(subst .ts,.js,$(@F)) $(@F)

lint:
	yarn tslint --fix *.ts
