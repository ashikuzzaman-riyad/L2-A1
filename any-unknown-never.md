# TypeScript: any, unknown এবং never

TypeScript-এ `any`, `unknown` এবং `never` তিনটি আলাদা Type। এগুলোর কাজও আলাদা।

সহজভাবে বুঝতে গেলে, `any` যেকোনো ধরনের Data ব্যবহার করতে দেয়, `unknown` Data ব্যবহার করার আগে Type Check করতে বলে এবং `never` এমন একটি Type যেখানে কোনো Value থাকে না।

## 1. Any কী?

`any` ব্যবহার করলে TypeScript আর নির্দিষ্টভাবে Data Type Check করে না।

অর্থাৎ, একটি Variable-এর মধ্যে যেকোনো ধরনের Data রাখা যায়।

```ts
let value: any = "Hello";

value = 100;
value = true;
```

এখানে প্রথমে `value`-এর মধ্যে String রেখেছি। পরে Number এবং Boolean রেখেছি।

তারপরও কোনো Error হয়নি।

কিন্তু এর একটি সমস্যা আছে। ভুলভাবে কোনো Method ব্যবহার করলেও TypeScript আমাদের সতর্ক করবে না।

```ts
let value: any = "Hello";

value.toFixed();
```

এখানে `value` একটি String। কিন্তু আমরা এর মধ্যে Number-এর `toFixed()` Method ব্যবহার করেছি।

তারপরও TypeScript কোনো Error দেখাবে না। তবে Code Run করলে Error হতে পারে।

তাই অপ্রয়োজনে `any` ব্যবহার করা উচিত নয়।

## 2. Unknown কী?

`unknown` দিয়েও যেকোনো ধরনের Data রাখা যায়।

কিন্তু `any`-এর মতো সরাসরি সেই Data ব্যবহার করা যায় না। ব্যবহার করার আগে Data Type Check করতে হয়।

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এখানে প্রথমে `value`-এর Data Type Check করেছি।

যদি `value` String হয়, তাহলে `toUpperCase()` Method ব্যবহার করতে পারব।

অর্থাৎ, `unknown` আমাদের আগে Data Type Check করতে বলে। এতে ভুল Data ব্যবহার করার সম্ভাবনা কমে যায়।

## 3. Never কী?

`never` এমন একটি Type, যেখানে কোনো Value থাকতে পারে না।

সাধারণত এমন Function-এর Return Type হিসেবে `never` ব্যবহার করা হয়, যেটি কখনো স্বাভাবিকভাবে শেষ হয় না।

যেমন, কোনো Function সবসময় Error Throw করলে:

```ts
const throwError = (): never => {
  throw new Error("Something went wrong");
};
```

এখানে Function-টি সবসময় Error Throw করবে। তাই এটি স্বাভাবিকভাবে কোনো Value Return করবে না।

আরেকটি উদাহরণ:

```ts
const infiniteLoop = (): never => {
  while (true) {
    console.log("Running...");
  }
};
```

এখানে `while` Loop কখনো শেষ হবে না। তাই Function-টি স্বাভাবিকভাবে শেষ হবে না।

এই ধরনের ক্ষেত্রে `never` ব্যবহার করা হয়।

