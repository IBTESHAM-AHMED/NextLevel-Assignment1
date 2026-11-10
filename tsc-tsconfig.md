# What Happens When We Run tsc

Browsers and Node.js can't run TypeScript directly. So we use the TypeScript compiler, `tsc`, to convert it into JavaScript.

## What happens inside

When I run `tsc`, it mainly does these steps:

1. Reads my code and builds a syntax tree.
2. Checks the types and shows errors if something is wrong.
3. Removes TypeScript-only things like types and interfaces.
4. Writes the final JavaScript file.


```ts
// src/greet.ts
const greet = (name: string): string => `Hi ${name}`;
```
 
```js
// dist/greet.js
const greet = (name) => `Hi ${name}`;
```
 
The `: string` annotations are gone. Types only exist at compile time, not at runtime.
 
## The role of tsconfig.json
 
This file tells `tsc` how to compile. Here is the one I used:
 
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "esnext",
    "target": "esnext",
    "strict": true,
    "skipLibCheck": true,
    "moduleDetection": "force"
  }
}
```
 
- `rootDir` and `outDir`: read from `src`, write to `dist`.
- `module` and `target`: keep modern ES modules and the newest JavaScript syntax.
- `strict`: turns on all the strict type checks.
- `skipLibCheck`: skips type checking of `.d.ts` library files, which makes compiling faster.
- `moduleDetection: "force"`: treats every file as a module, so variables don't leak into the global scope.
## Conclusion
  
`tsc` is a checker first and a translator second. It verifies my types, then strips them out and leaves ordinary JavaScript behind. The `tsconfig.json` decides where the files go, which JavaScript they target, and how strict the checking is. That is why I now set it up before writing any code, with `strict` always on.