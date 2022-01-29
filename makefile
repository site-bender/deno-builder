cov:
	 rm -rf profile.lcov ./cov && deno test --coverage=cov && deno coverage cov --lcov > profile.lcov && genhtml -o cov/html profile.lcov && open cov/html/index.html

fmt:
	dprint fmt

lint:
	deno lint src

test:
	deno test --import-map=./import_map.json src
