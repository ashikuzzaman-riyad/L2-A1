# TypeScript Assignment – Problem Solving & OOP

## Introduction

এই Assignment-এ TypeScript-এর Basic থেকে শুরু করে কিছু গুরুত্বপূর্ণ Concept ব্যবহার করে ৮টি Problem Solve করেছি।

প্রতিটি Problem Solve করার সময় Code সহজ এবং Readable রাখার চেষ্টা করেছি, যাতে অন্য Developer-রাও সহজে বুঝতে পারে।

## Technologies Used

- TypeScript
- JavaScript ES6+
- Object-Oriented Programming (OOP)

---

## Problem 1: Function with Optional Parameter

**Concept:** Optional Parameter

এই Function দুটি Number গ্রহণ করে। প্রথম Number-এর সঙ্গে দ্বিতীয় Number গুণ করে Result Return করে।

যদি দ্বিতীয় Number দেওয়া না হয়, তাহলে প্রথম Number-কে 2 দিয়ে গুণ করে।



**How it works:**

- `value` হলো প্রথম Number।
- `multiplier?` হলো Optional Parameter।
- যদি `multiplier` দেওয়া না হয়, তাহলে `value * 2` Return করবে।
- অন্যথায় `value * multiplier` Return করবে।


```

---

## Problem 2: Process Input

**Concept:** Union Type and Type Narrowing

এই Function String, Number অথবা Boolean গ্রহণ করে। Data Type অনুযায়ী আলাদা কাজ করে Result Return করে।



**How it works:**

- `string | number | boolean` দিয়ে তিন ধরনের Data গ্রহণ করতে পারবে।
- String হলে ছোট হাতের অক্ষরে Convert করে অতিরিক্ত Space Remove করবে।
- Number হলে 10 দিয়ে গুণ করবে।
- Boolean `true` হলে `"Active"` Return করবে।
- Boolean `false` হলে `"Inactive"` Return করবে।


---

## Problem 3: Format Coordinate

**Concept:** Readonly Tuple and Destructuring

এই Function একটি Coordinate Tuple গ্রহণ করে। Tuple-এর মধ্যে Latitude, Longitude এবং City Name থাকে।



**How it works:**

- `readonly` ব্যবহার করার কারণে Tuple-এর Value পরিবর্তন করা যাবে না।
- প্রথম Position-এ Latitude থাকবে।
- দ্বিতীয় Position-এ Longitude থাকবে।
- তৃতীয় Position-এ City Name থাকবে।
- Destructuring ব্যবহার করে Tuple-এর Value আলাদা করেছি।
- শেষে Template String ব্যবহার করে Location Return করেছি।



---

## Problem 4: Concatenate Arrays

**Concept:** Generics and Rest Parameter

এই Function একাধিক Array গ্রহণ করে সব Array-এর Value একসঙ্গে একটি নতুন Array হিসেবে Return করে।



**How it works:**

- `<T>` ব্যবহার করে Generic Type তৈরি করেছি।
- `T[][]` দিয়ে একাধিক Array গ্রহণ করেছি।
- `...items` হলো Rest Parameter, যা একাধিক Array গ্রহণ করে।
- `flat()` ব্যবহার করে সব Array-কে একটি Array-তে পরিণত করেছি।

**Example:**



---

## Problem 5: Get Popular Courses

**Concept:** Interface and Array Filter

এই Function Published Course-গুলোর মধ্যে যেসব Course-এ নির্দিষ্ট সংখ্যার সমান বা তার বেশি Student আছে, সেগুলো Return করে।

*

**How it works:**

- `Course` Interface দিয়ে Course-এর Structure তৈরি করেছি।
- `course: Course[]` দিয়ে Course-এর Array গ্রহণ করেছি।
- `minStudents` দিয়ে Minimum Student সংখ্যা নির্ধারণ করেছি।
- `filter()` ব্যবহার করে প্রয়োজনীয় Course বের করেছি।
- `isPublished` true হতে হবে।
- Student সংখ্যা `minStudents`-এর সমান অথবা বেশি হতে হবে।


---

## Problem 6: Pluck Values

**Concept:** Generics, keyof and Type Indexing

এই Function একটি Object-এর Array এবং একটি Property Key গ্রহণ করে। তারপর প্রতিটি Object থেকে নির্দিষ্ট Property-এর Value বের করে নতুন Array Return করে।


**How it works:**

- `<T>` দিয়ে Generic Type তৈরি করেছি।
- `K extends keyof T` দিয়ে নিশ্চিত করেছি, `K` অবশ্যই `T`-এর কোনো একটি Property Key হবে।
- `items: T[]` দিয়ে Object-এর Array গ্রহণ করেছি।
- `key: K` দিয়ে কোন Property-এর Value বের করতে হবে তা নির্ধারণ করেছি।
- `map()` ব্যবহার করে প্রতিটি Object থেকে নির্দিষ্ট Property-এর Value নিয়েছি।
- `item[key]` দিয়ে সেই Property-এর Value Access করেছি।



---

## Problem 7: Employee and Manager Class

**Concept:** Object-Oriented Programming (OOP), Inheritance, Constructor, Protected and Private

এই Problem-এ Employee নামে একটি Parent Class তৈরি করেছি। তারপর Manager নামে একটি Child Class তৈরি করেছি, যা Employee Class-এর Property এবং Method ব্যবহার করে।





**How it works:**

- `Employee` হলো Parent Class।
- `Manager` হলো Child Class।
- `extends` ব্যবহার করে Manager Class, Employee Class-কে Inherit করেছে।
- `protected` ব্যবহার করার কারণে `name` Parent এবং Child Class-এর মধ্যে ব্যবহার করা যায়।
- `private` ব্যবহার করার কারণে `baseSalary` শুধু Employee Class-এর মধ্যে ব্যবহার করা যায়।
- `super()` ব্যবহার করে Parent Class-এর Constructor Call করেছি।
- `getDetails()` Employee-এর তথ্য Return করে।
- `getRoleInfo()` Manager-এর Department এবং Name Return করে।



---

## Problem 8: Validate Age Async

**Concept:** Async/Await, Promise, Conditional Statement and Error Handling

এই Function একটি Age গ্রহণ করে এবং Promise Return করে।

যদি Age 18 বা তার বেশি হয়, তাহলে 1 Second অপেক্ষা করার পর `"Access Granted"` Return করবে।

অন্যদিকে, Age 18-এর কম হলে Error Throw করবে।


**How it works:**

- `async` ব্যবহার করে Asynchronous Function তৈরি করেছি।
- `age: number` দিয়ে Number গ্রহণ করেছি।
- `Promise<string>` দিয়ে জানিয়েছি Function সফল হলে String Return করবে।
- Age 18 বা তার বেশি হলে `if` Condition কাজ করবে।
- `setTimeout()` দিয়ে 1000 Milliseconds অর্থাৎ 1 Second অপেক্ষা করবে।
- `await` দিয়ে Promise Complete হওয়ার জন্য অপেক্ষা করবে।
- Age 18-এর কম হলে `throw new Error()` দিয়ে Error Throw করবে।





---

## What I Learned

এই Assignment করতে গিয়ে TypeScript-এর বেশ কিছু গুরুত্বপূর্ণ বিষয় শিখেছি।

1. Optional Parameter কীভাবে কাজ করে।
2. Union Type এবং Type Narrowing কীভাবে ব্যবহার করতে হয়।
3. Readonly Tuple এবং Destructuring কীভাবে কাজ করে।
4. Generic Function তৈরি করা।
5. Rest Parameter এবং Array Methods ব্যবহার করা।
6. Interface দিয়ে Object-এর Structure তৈরি করা।
7. `keyof` এবং Generic Constraint ব্যবহার করা।
8. OOP-এর Inheritance, Constructor, Protected এবং Private বুঝতে পারা।
9. Async/Await এবং Promise ব্যবহার করা।
10. Error Handling-এর মাধ্যমে Function-এর Error Manage করা।

## Conclusion

এই Assignment-এর মাধ্যমে TypeScript-এর Basic Concept থেকে শুরু করে Generics, OOP এবং Asynchronous Programming সম্পর্কে Practical ধারণা পেয়েছি।
