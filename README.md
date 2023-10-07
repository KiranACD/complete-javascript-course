# Course Material and FAQ for my Complete JavaScript Course

This branch of the repo contains starter files and final code for all sections and projects of the course, **exactly as shown in the videos**.

Use starter code to start each section, and **final code to compare it with your own code whenever something doesn't work**!

There is also a the [updates-and-fixes](https://github.com/jonasschmedtmann/complete-javascript-course/tree/updates-and-fixes) branch which is kept up-to-date with **latest package updates and important bugfixes 🐛**

🚨 **_Please read the following Frequently Asked Questions (FAQ) carefully before starting the course_** 🚨

## FAQ

### Q1: How do I download the files?

**A:** If you're new to GitHub and just want to download the entire code, hit the green button saying "Code", and then choose the "Download ZIP" option. If you can't see the button (on mobile), use [this link](https://github.com/jonasschmedtmann/complete-javascript-course/archive/master.zip) instead.

### Q2: I'm stuck! Where do I get help?

**A:** Have you actually tried to fix the problem on your own? **Have you compared your code to the final code?** If you failed fixing your problem, please **post a detailed description of the problem to the Q&A area of that video over at Udemy**, along with a [codepen](https://codepen.io/pen/) containing your code. You will get help there. Please don't send me a personal message or email to fix coding problems.

### Q3: What VSCode theme are you using?

**A:** I use Monokai Pro for all my coding and course production. It's a paid theme (I', **not** affiliated with them), but you can actually use the free demo version forever 😅

### Q4: Can I see a final version of the course projects?

**A:** Sure! Here you go:

- [Pig Game](https://pig-game-v2.netlify.app) (DOM Manipulation)
- [Bankist](https://bankist.netlify.app/) (Arrays, Numbers, Dates, Timers. Fake "log in" with user `js` and PIN `1111`)
- [Bankist Site](https://bankist-dom.netlify.app/) (Advanced DOM and Events)
- [Mapty](https://mapty.netlify.app/) (OOP, Geolocation, Project planning)
- [forkify](https://forkify-v2.netlify.app/) (Final advanced project)

### Q5: Videos don't load, can you fix it?

**A:** Unfortunately, there is nothing I can do about it. The course is hosted on Udemy, and sometimes they have technical issues like this. Please just come back a bit later or [contact their support team](https://support.udemy.com/hc/en-us).

### Q6: Videos are blurred / have low quality, can you fix it?

**A:** Please open video settings and change the quality from 'Auto' to another value, for example 720p. If that doesn't help, please [contact the Udemy support team](https://support.udemy.com/hc/en-us).

### Q7: Are the videos downloadable?

**A:** Videos used to be downloadable, but unfortunately, Udemy has disabled video downloads on all my courses in order to fight piracy. There is nothing I can do about this.

### Q8: I want to put these projects in my portfolio. Is that allowed?

**A:** Absolutely! Just make sure you actually built them yourself by following the course, and that you understand what you did. What is **not allowed** is that you create your own course/videos/articles based on this course's content!

### Q9: You mentioned your resources page. Where can I find it?

**A:** It's on my website at <http://codingheroes.io/resources>. You can subscribe for updates 😉

### Q10: I love your courses and want to get updates on new courses. How?

**A:** First, you can subscribe to my email list [at my website](http://codingheroes.io/resources). Plus, I make important announcements on twitter [@jonasschmedtman](https://twitter.com/jonasschmedtman), so you should definitely follow me there 🔥

### Q11: How do I get my certificate of completion?

**A:** A certificate of completion is provided by Udemy after you complete 100% of the course. After completing the course, just click on the "Your progress" indicator in the top right-hand corner of the course page. If you want to change your name on the certificate, please [contact the Udemy support team](https://support.udemy.com/hc/en-us).

### Q12: Can you add subtitles in my language?

**A:** No. I provide professional English captions, but Udemy is responsible for subtitles in all other languages (automatic translations). So please [contact the Udemy support team](https://support.udemy.com/hc/en-us) to request your own language.

### Q13: Do you accept pull requests?

**A:** No, for the simple reason that I want this repository to contain the _exact_ same code that is shown in the videos. _However, please feel free to add an issue if you found one._

### Q14: I'm looking for the old course version (v1) files. Where can I find them?

**A:** They are in this same repo, but in the [v1 branch](https://github.com/jonasschmedtmann/complete-javascript-course/tree/v1). So just go to [v1](https://github.com/jonasschmedtmann/complete-javascript-course/tree/v1), and download the code from there.

# Some Notes

## High Level Overview of Javascript

Javascript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

### High-Level

In a low-level language, developer has to manage resources manually, whereas in a high-level language, resources are managed automatically. This makes high-level languages easy to learn and read but programs will not be as fast or optimized as compared to those created using high-level language.

### Garbage Colleciton

In high-level languages, resource management is done using garbage collector. It removes unused objects from the memory.

### Interpreted or Just-In-Time Compilation

Javascript code is converted to machine code in the javascript engine and this happens dynamically.

Compilation: Entire code is converted into machine code at once and written to a binary file that can be executed by any computer.

Interpretation: Interpreter runs through the source code and executes it line by line.

Javascript is not an interpreted language anymore. The entire code is converted into machine code and then executed immediately.

The code is parsed into an abstract syntax tree. This tree is then used to generate the machine code which is executed right away. While execution is going on, the code is optimized and recompiled and then replaces the previous version without break in execution. All this parsing, compilation and optimization runs in a seperate thread seperate from the main thread. This is what makes the javascipt engine fast.

Javascript runtime is a big container that includes all the things that we need to use javascript in the browser.

1. One of these things is the javascript engine. The engine contains the heap and the call stack.

2. Apart from the engine, we have the web APIs. This includes the DOM, timers, fetch API etc. These are functionalities provided to the engine, but not part of the javascript language. The APIs can be accessed through the global window object.

3. Another thing the runtime has is the callback queue. This is a data structure that contains all the callback functions that have to be executed. An example of a callback function is the eventhandler functions that we attach to various elements in the DOM. When we click on the element, a callback function is called. The callback function is put into the callback queue. When the call stack is empty, the function is passed into the call stack to be executed. This is handled by the event loop.

Javascript runtime can exist outside of browsers, for example in NodeJS. Instead of web APIs, we have multiple C++ bindings and a thread pool.

### Multi-paradigm

In programming, paradigm is an approach to stucturing code. Three popular paradigms are:

1. Procedural programming
2. Object-oriented programming
3. Functional programming

Javascript follows all three paradigms.

Paradigms can be imperative or declarative.

### Prototype-based Object-oriented

Javascript follows prototypical inheritance. For example, an array in javascript is created from a template which is called a prototype. This prototype contains all the methods that the array we created inherits.

### First-class Functions

Functions are treated as regular variables. We can pass functions to other functions and also make functions return functions.

### Dynamically Typed

We do not define datatypes of variables declared in javascript. They are determined when javascript engine executes our code. The type of variable can be redefined when we reassign the variable.

### Single Threaded

Javascript runs in one single thread. So, it can do only 1 thing at a time.

When there is a task that runs for a long time, it would block the single thread for the duration of the task. We need non blocking behaviour.

### Event Loop

It takes long runnning tasks, executes them in the background and puts them back in the main thread once they are finished.

### Concurrency Model

Javascript engine uses this model to handle multiple tasks happening at the same time.

## Javascript Engine and Runtime

Javascript engine is a program that executes javascript code. Every browser has its own javascript engine. One of the well known engines is the V8 engine in Chrome. It also runs NodeJS.

All engines contain a call stack and heap.

Call stack is where our code is executed using something called execution context.

Assume the code has been compiled. A global execution context is created for the top-level code. Top-level code is code not in a function. Execution context is an environment in which a piece of javascript is executed. It stores all the necessary information for some code to be executed. There is only one global execution context. For each function call, a new execution context is created. All execution contexts together make up the call stack.

What is inside the execution context?

1. Variable environment which includes let, const and var declarations, then functions and arguments object. The arguments object contains all the arguments that were passed into the function.

2. Scope Chain. A function, apart from the variables defined in the function, can also access variables that are defined outside the function. The scope chain consists of references to variables that are defined outside the function.

3. Each context gets a special keyword called 'this'.

These are generated at the creation phase right before execution. Execution context related to arrow function do not get the arguments object or the 'this' keyword. They can use the arguments object and the 'this' keyword from the nearest function parent.

The execution contexts are stacked on top of each other in the call stack and this is how the engine keeps track of where we are in the execution.

### Scoping / Scope Chain

Scope is the space or environment in which a certain variable is declared. There is global scope, function scope and block scope.

Scope of a variable is the entire region of the code where a certain variable can be accessed.

In case of functions, variable environment and scope is the same thing.

Scoping controls how our program's variables are organized and accessed by the javascript engine.

#### Lexical Scoping

Scoping is controlled by placement of functions and blocks in the code. For example, a function defined inside another function has access to the variables of the parent function.

#### Global Scope

This is for variables outside of any function or block. These variables are accessible in all functions and blocks in the program.

#### Function Scope

Variables declared inside a function are accessible only inside the function.

#### Block Scope

Starting from ES6, blocks also create scopes. Block is a piece of code between curly braces. This can be the if-block or the block inside for or while loop. Block scope only applies to variables declared using let and const. A variable declared using var will also be accessible outside the block.

Variables are not copied over from the global scope to the function scope and so on. Instead, when we need to a access a variable in the global scope from a function scope, we move up the scope chain and perform the variable check. If variable not found in any of the scopes, then an error is raised.

Scope chain has nothing to do with the order in which functions are called and everything to do with the order in which the functions are written.

Sibling scopes will not have access to each others variables.

### Variable Environment

How is variable environment created?

Hoisting makes some types of variables accessible in the code before they are actually declared. Behind the scenes, before execution, the code is scanned for variable declarations. This happens in the creation phase of the execution context. For each variable found, a new property is created in the variable environment object.

|                       | Hoisted? | Initial Value                    | Scope                                    |
| --------------------- | -------- | -------------------------------- | ---------------------------------------- |
| function declarations | Yes      | Actual function                  | Block (strict mode) Function (otherwise) |
| var variables         | Yes      | undefined                        | Function                                 |
| let and const         | No       | uninitialzed, temporal dead zone | Block                                    |

In case of function expressions and arrow functions, it depends on if they are created using var or let/const.

## DOM

DOM is Document Object Model. It is the structured representation of HTML documents. It allows Javascript to access HTML elements and styles to manipulate them.

Dom is automatically created by the browser as soon as the HTML loads. It is stored in a tree structure. In the tree, each HTML element is an object or node.

The entry point to the DOM is an object called document. There are many methods that are available in the object. One of them is the querySelector method.

Document's child is the HTML element, which inturn has two children, the head and the body. These objects inturn have more children.

### DOM Manipulation.

Way of selecting an element `document.querySelector()`

We have to pass a selector to the querySelector. This selector is the same as the CSS selector.

To access the text content of this element, we have to do `document.querySelector().textContent`

DOM, its methods and properties are part of web APIs, which are libraries that browsers implement. We can access these APIs from our JS code. There are other web APIs apart from DOM and its methods and properties.

Get the value of an input element.

`document.querySelector('.{class_name}').value`

We use the addEventListener to respond to events. The events can be click of a button, or any mouse movements etc. For example, if we want to repond to a click of a button with class = 'check', then we can add an event listener to log values from an input box with class = 'guess' to the console.

```
document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').vallue)
});
```
