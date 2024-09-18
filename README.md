# Reproduction of the problems

First problem:
1. First run `npx nx run-many -t build` (I used stream so you can see cache debug information for each NX project). Obvouisly, nothing is fetched from cache.
   1. You can see everything is correct, by going to the exploded war in the target directory.
   2. There in in the `WEB-INF` directory you can see 3 jars, and each jar has inside `META-INF/maven/com.example/lib-<a,b,c>` a copy of the original `pom.xml`. Notice all poms contain the same identical version for `junit-jupiter-api`.
2. For the first problem:
   1. Modify the `pom.xml` of `lib-d`, for instance change the only dependency version of `junit-jupiter-api` to `5.10.0`
   2. Then run `npx nx affected -t build`. 
   3. Notice that only `lib-d` is actually built, the rest is coming from cache. This is wrong, as `lib-c` might have a different unit test result if the implementation changed.
   4. If you do not trust the logs, inspect the pom inside the jar of `lib-d` that is inside the exploded war of `app-a`. This still has the old version of `junit-jupiter-api` (`5.10.1`), while the jar output of the `lib-d` project does have the correct version (`5.10.0`).
   5. Ergo, the build produced an invalid WAR, because it incorrectly used cache output.
   6. Run `npx nx reset` and then run `npx nx affected -t build` again. Now the output is correct, and the only difference is that we have reset the cache.
3. For the second problem:
   1. Modify the `pom.xml` of `second-parent`, add a dependency on `yoda-time` for instance:
      ```xml
      <dependencies>
        <dependency>
          <groupId>joda-time</groupId>
          <artifactId>joda-time</artifactId>
          <version>2.13.0</version>
        </dependency>
      </dependencies>
      ```
      Since `second-parent` is the parent of `lib-b`, `lib-c` and `lib-d`, we expect `yoda-time` to end up in the `war` of `app-a`.
   2. Then run `npx nx affected -t build`. Notice that `lib-b`, `lib-c` and `lib-d` and `app-a` are fetched from cache.
   3. Again if you dont trust the logs, inspect the output of the `war` of `app-a`. It does not contain the `yoda-time` jar.
   4. Run `npx nx reset` and then run `npx nx affected -t build` again. Now the output is correct, and the only difference is that we have reset the cache.

To validate the fix, modify your `nx.json` to that it contains the snippet below in the `targetDefaults` section:
```json
"@jnxplus/nx-maven:run-task": {
  "inputs": [
    "default",
    { "dependentTasksOutputFiles": "**/*", "transitive": true },
    { "externalDependencies": [] }
  ]
}
```
Then run the steps above, but notice now the WAR always contains the expected output.

## By now irrelevant, but keeping it for reference
A solution direction might be to look into the ideas of [hashver-maven-plugin](https://github.com/avodonosov/hashver-maven-plugin)
