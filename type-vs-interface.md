# Type Alias vs Interface in TypeScript

Both type and interface can describe the shape of an object, but they differ in what they can express and how they can be extended.

## Type alias

A type alias gives a new name to any type, like a literal, union, or tuple. An interface can't do this.

```ts
type ID = number;
type Role = "admin" | "user" | "guest";
```

## Interface

An interface describes the shape of an object, and it can be extended.

```ts
interface Animal { species: string }
interface Cat extends Animal { breed: string }
```

Types can't use `extends`, but they can combine with `&`.

```ts
type Vehicle = { brand: string };
type Car = Vehicle & { model: string; year: number };
```

## Declaration merging

If I write the same interface name twice, TypeScript merges them into one.

```ts
interface IEmployee { name: string }
interface IEmployee { age: number; id: number }
```

A type alias with the same name twice gives an error.

## Conclusion

For me, the rule is simple. I use `interface` for objects and classes, and `type` for unions, literals, and tuples. Whichever I pick, I try to stay consistent in the project.