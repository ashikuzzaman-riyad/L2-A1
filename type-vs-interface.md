TypeScript: Interface এবং Type

TypeScript-এ interface এবং type দুটোই ব্যবহার করা হয় Object-এর Structure তৈরি করার জন্য।

সহজভাবে বললে, একটি Object-এর মধ্যে কী কী Property থাকবে এবং প্রতিটি Property-এর Data Type কী হবে, তা নির্ধারণ করতে এগুলো ব্যবহার করা হয়।

1. Interface কী?

interface ব্যবহার করে আমরা একটি Object-এর Structure তৈরি করতে পারি।

ধরো, আমরা একজন Student-এর তথ্য রাখব। তার Name, Age এবং Email থাকবে।

interface Student {
  name: string;
  age: number;
  email: string;
}

const student: Student = {
  name: "Riyad",
  age: 21,
  email: "a.riyad.dev@gmail.com",
};

এখানে আমরা Student নামে একটি Interface তৈরি করেছি।

name-এর Data Type হবে String।

age-এর Data Type হবে Number।

email-এর Data Type হবে String।

এখন Student ব্যবহার করে কোনো Object তৈরি করলে এই Property-গুলোর Data Type ঠিক রাখতে হবে।

Interface কখন ব্যবহার করব?

সাধারণত কোনো Object-এর Structure তৈরি করার জন্য Interface ব্যবহার করা হয়।

যেমন:

User-এর তথ্য রাখার জন্য।

Product-এর তথ্য রাখার জন্য।

Employee-এর তথ্য রাখার জন্য।

API Request এবং Response-এর Structure তৈরি করতে।

Class-এর Structure নির্ধারণ করতে।

Interface Extend কী?

ধরো, আমাদের একটি Person Interface আছে। এখন আমরা চাই Developer-এর মধ্যেও Person-এর সব Property থাকবে, পাশাপাশি নতুন কিছু Property থাকবে।

এই কাজটি করার জন্য extends ব্যবহার করা হয়।

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  skills: string[];
}

const developer: Developer = {
  name: "Riyad",
  age: 21,
  skills: ["Node.js", "TypeScript"],
};

এখানে Developer Interface, Person Interface-কে Extend করেছে।

তাই Developer-এর মধ্যে name এবং age চলে এসেছে। এর পাশাপাশি আমরা নতুন skills Property যোগ করেছি।

অর্থাৎ, একটি Interface-এর Property অন্য Interface-এ সহজেই ব্যবহার করা যায়।

2. Type কী?

type দিয়েও আমরা Object-এর Structure তৈরি করতে পারি।

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "Riyad",
  age: 21,
};

এখানে Student নামে একটি Type তৈরি করেছি। এর মধ্যে name এবং age Property রাখা হয়েছে।

দেখতেই পাচ্ছো, Object-এর Structure তৈরি করার ক্ষেত্রে interface এবং type প্রায় একইভাবে কাজ করে।

তবে type দিয়ে আরও কিছু কাজ করা যায়, যেগুলো Interface দিয়ে সরাসরি করা যায় না।

1. Union Type

একটি Variable-এ একাধিক Data Type ব্যবহার করার জন্য Union Type ব্যবহার করা হয়।

type ID = string | number;

let userId: ID = 101;

userId = "USER101";

এখানে userId-এর মধ্যে String অথবা Number রাখা যাবে।

অর্থাৎ, দুটি Data Type-এর যেকোনো একটি ব্যবহার করতে পারব।

2. Primitive Type

type ব্যবহার করে String, Number বা Boolean-এর মতো Data Type-এর জন্য নিজের একটি নাম তৈরি করতে পারি।

type Age = number;

let myAge: Age = 21;

এখানে Age আসলে Number Type-এর আরেকটি নাম।

3. Tuple Type

Tuple ব্যবহার করে Array-এর প্রতিটি Position-এর জন্য নির্দিষ্ট Data Type ঠিক করে দেওয়া যায়।

type UserInfo = [string, number];

const user: UserInfo = ["Riyad", 21];

এখানে প্রথম Position-এ String এবং দ্বিতীয় Position-এ Number রাখতে হবে।

4. Intersection Type

একাধিক Type-এর Property একসঙ্গে ব্যবহার করার জন্য Intersection (&) ব্যবহার করা হয়।

type Person = {
  name: string;
};

type Developer = {
  skills: string[];
};

type FullDeveloper = Person & Developer;

এখানে FullDeveloper-এর মধ্যে Person এবং Developer উভয়ের Property থাকবে।

অর্থাৎ, এর মধ্যে name এবং skills দুটোই থাকবে।

### 3. Interface এবং Type-এর মধ্যে পার্থক্য

দুটো দেখতে প্রায় একই রকম হলেও কিছু পার্থক্য আছে।

| বিষয়                | Interface       | Type    |
|---                  |---              |---      |
| Object তৈরি          | করা যায়          | করা যায় |
| Union Type          |  সরাসরি করা যায় না | করা যায় |
| Intersection        | করা যায়           | করা যায় |
| Primitive Type      | করা যায় না         | করা যায় |
| Tuple               | সরাসরি করা যায় না   | করা যায় |
| Extend              | extends ব্যবহার করে | & ব্যবহার করে |
| Declaration Merging | করা যায়           | করা যায় না |

### Declaration Merging কী?

একই নামের একাধিক Interface তৈরি করলে TypeScript সেগুলোকে একসঙ্গে যুক্ত করে।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Riyad",
  age: 21,
};
```

এখানে আমরা দুটি User Interface তৈরি করেছি।

TypeScript এই দুটি Interface-কে একসঙ্গে Merge করেছে। তাই এখন User-এর মধ্যে name এবং age দুটো Property-ই আছে।

কিন্তু type দিয়ে একই নামে একাধিক Type তৈরি করা যায় না।