"use strict";
// Sure, here are ten advanced TypeScript questions focusing on generics, promises, asynchronous programming, and object-oriented programming:
// 1. **Generic Data Structure**:
//    Define a generic data structure that allows storing elements of any type and provides methods to add, remove, and retrieve elements.
/**
class Stack1<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }
  pop(): undefined | T {
    return this.items.pop();
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

const nums = new Stack1<number>();
nums.push(45);
nums.push(34);
nums.push(84);
console.log(nums.size());
console.log(nums.isEmpty());

const str1 = new Stack1<string>();
str1.push("sudais");
str1.push("sadiq");
str1.push("kamran");
console.log(str1.size());
console.log(str1.isEmpty());

interface StackInterface<T> {
    push: (item: T) => void;
    pop: () => T | undefined;
    isEmpty: () => boolean;
    size: () => number;
}

class Stack2<T> implements StackInterface<T> {
    private items: T[]; // Change the accessibility to private

    constructor() {
        this.items = [];
    }

    push(item: T) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


const nums2 = new Stack2<number>();
nums2.push(45);
nums2.push(34);
nums2.push(84);
console.log(nums2.size());
console.log(nums2.isEmpty());

const str2 = new Stack2<string>();
str2.push("sudais");
str2.push("sadiq");
str2.push("kamran");
console.log(str2.size());
console.log(str2.isEmpty());

**/
// 2. **Promise Chain**:
//    Implement a function that makes multiple asynchronous calls using promises and returns the result of each call as an array.
/**
 *

const multiplePromises = (urls: string[]): Promise<any[]> => {
  let promises = urls.map((url) => fetch(url));

  return Promise.all(promises)
    .then((responces) => {
      return Promise.all(responces.map((responce) => responce.json()));
    })
    .then((data) => data);
};

multiplePromises([
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/users",
]).then(([res1, res2]) => {
  console.log(res1);
  console.log(
    "------------------------------------------------------------------"
  );
  console.log(res2);
});
//async wait handling
// async function getData() {
//   const [res1, res2] = await multiplePromises([
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/users",
//   ]);
//   console.log(res1);
//   console.log(
//     "------------------------------------------------------------------"
//   );
//   console.log(res2);
// }
// getData();

**/
// 3. **Type-safe Fetch**:
//    Create a wrapper around the `fetch` API that ensures type safety for request parameters and response data.
/**
interface RequestParamsInterface {
  method: string;
  url: string;
  body?: any;
  headers?: Record<string, string>;
}

interface ResponceDataInterface {
  userId: string;
  title: string;
  id: number;
  completed: boolean;
}

const fetchWrapper = <T>(params: RequestParamsInterface): Promise<T> => {
  // console.log(params);
  return fetch(params.url, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const requestParams: RequestParamsInterface = {
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/todos/1",
};
fetchWrapper<ResponceDataInterface>(requestParams)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

*/
// 4. **Async Iterator**:
//    Develop an asynchronous iterator that asynchronously fetches data from a remote source in chunks and iterates over the fetched data.
// Iterate over the remote data asynchronously
// 5. **Decorator Pattern**:
//    Implement the decorator pattern using TypeScript classes, where decorators can add behavior to methods or properties of a class dynamically.
// 6. **Type-safe Event Emitter**:
//    Design an event emitter class that ensures type safety for event names and data payloads using generics.
// 7. **Async Queue**:
//    Develop a queue data structure that processes items asynchronously in a first-in-first-out manner, ensuring that items are processed one at a time.
// 8. **Composition vs. Inheritance**:
//    Discuss the differences between composition and inheritance in object-oriented programming and provide scenarios where each approach is more suitable.
// 9. **Throttling Function**:
//    Create a throttling function that limits the rate at which a given function can be called, ensuring that it is not called more than once within a specified time interval.
// 10. **Generic Middleware Chain**:
//     Design a middleware chain system using generics, where each middleware function can modify the input data and pass it to the next middleware in the chain.
// These questions cover a range of topics in advanced TypeScript, including generics, promises, asynchronous programming, object-oriented design, and design patterns. They should provide a good challenge and opportunity for exploration in TypeScript developm
