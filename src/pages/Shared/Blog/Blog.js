import React from 'react';

const Blog = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl text-center font-bold'>Blog</h2>
            <div className="card w-full bg-slate-300 text-neutral-content my-8">
                <div className="card-body items-center text-center text-black">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>


                    <p>There are four main types of state you need to properly manage in your React apps: 1.Local state: Local state is data we manage in one or another component.<br></br>
                        2.Global state: Global state is data we manage across multiple components.,<br></br>
                        3.Server state:Data that comes from an external server that must be integrated with our UI state.,<br></br>
                        4.URL state:Data that exists on our URLs, including the pathname and query parameters.</p>

                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-full bg-slate-300 text-neutral-content my-8">
                <div className="card-body items-center text-center text-black">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>


                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOfWhen it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype..</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-full bg-slate-300 text-neutral-content my-8">
                <div className="card-body items-center text-center text-black">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>


                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                        <br></br>
                        They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-full bg-slate-300 text-neutral-content my-8">
                <div className="card-body items-center text-center text-black">
                    <h2 className="card-title"> React vs. Angular vs. Vue?</h2>


                    <p> <span className='font-bold'>Angular:</span>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                        <br />
                        <span className='font-bold'>React:</span>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                        <br />
                        <span className='font-bold'>Vue:</span>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                    </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;