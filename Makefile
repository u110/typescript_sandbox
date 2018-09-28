setup: yarn
	yarn add typescript

compile/%.ts:
	yarn tsc --outFile build/$(subst .ts,.js,$(@F)) $(@F)


