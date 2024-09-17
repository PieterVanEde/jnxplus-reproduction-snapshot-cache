# Reproduction of the problems

First problem:
1. First run `npx nx run-many -t build --output-style=stream` (I used stream so you can see cache debug information for each NX project). Obvouisly, nothing is fetched from cache.
2. For the first problem:
   1. Modify the `pom.xml` of `lib-d`, for instance change the only dependency version of `junit-jupiter-api` to `5.10.0`
   2. Then run `npx nx affected -t build --output-style=stream`. Notice that only `lib-d` is actually built, the rest is coming from cache. This is wrong, as `lib-c` might have a different unit test result if the implementation changed. And `app-a` might now be a war containing an outdated jar of `lib-d`.
3. For the second problem:
   1. Modify the `pom.xml` of `root-parent-project`, for instance change the Java version to `17`
   2. Then run `npx nx affected -t build --output-style=stream`. Notice that `lib-b`, `lib-c` and `lib-d` and `app-a` are fetched from cache. This is really wrong, as the parent pom might have contained managed dependencies in it's `dependenciesManagement` section, which changes the effective pom of all its children.

A solution direction might be to look into the ideas of [hashver-maven-plugin](https://github.com/avodonosov/hashver-maven-plugin)
