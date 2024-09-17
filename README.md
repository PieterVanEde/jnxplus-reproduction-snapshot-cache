# Reproduction of the problems


  Use `$env:NX_MAVEN_CLI_OPTS='--batch-mode'` for fewer logs
  Run `npx nx run-many -t build --output-style=stream --skip-nx-cache`
  Run `npx nx run-many -t build --output-style=stream` to use cache
  Run `npx nx run-many -t build --output-style=stream` to use cache
  Serve app `npx nx serve app-a`: should print lib-d
  Modify class LibraryD of `lib-d`, change the name of lib:   return "nx-maven lib-d";
  Then run `npx nx affected -t build --output-style=stream`
  Serve app `npx nx serve app-a`: should print nx-maven lib-d
