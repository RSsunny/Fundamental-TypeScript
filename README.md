# TypeScript-Fundamental

## Table of Contents

- [Basic Data Types](src/module/basic_data_type.ts)
- [Object Data Types](src/module/object_data_type.ts)
- [Function](src/module/function.ts)
- [Destructuring](src/module/destructuring.ts)
- [Spread and Rest Operator](src/module/spread_rest_operator.ts)
- [Union and Intersection](src/module/union_intersection.ts)
- [Type Alias](src/module/type_alias.ts)
- [Ternary, Optional Chaining & Nullish Coalescing Operator](#ternary-optional-chaining--nullish-coalescing-operator)
- [Unknown, Never and Nullable Type](#unknown-never-and-nullable-type)

## Ternary, Optional Chaining & Nullish Coalescing Operator

TypeScript has a powerful system to deal with null or undefined values.
null and undefined are primitive types and can be used like other types, such as string.

### Nullish Coalescence

```typescript
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? "Not Available"}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
```

## Unknown, Never and Nullable Type

Description here...

# Dependencies

- tsc configuration
<!-- install ts-node-dev if you need output -->
- ts-node-dev
