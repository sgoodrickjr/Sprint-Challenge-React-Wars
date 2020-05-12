# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library/quasi-framework that developers at Facebook created to make it easier and faster to manipulate components. It's main advantage is that it has a virtual DOM which allows for the main DOM to only refresh when particular components are changed rather than the entire DOM, saving time.

1. Describe component state.

Component state is like any state of being. It is broken down into current state, the ability to change that state, and an initial state. It allows for changes to be held in memory until they are desired to be executed.

1. Describe props.

Props, short for properties, is considered an object. When you create props in a component, an object is created in the DOM. This object can hold properties which can be inherited by other components when the props are passed in as an argument to other components.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A function has a side effect if it modifies state outside of its scope or has an observable interaction with its calling functions or the outside world besides returning a value. Basically any impure function has side effects (you don't just put a value in and get the same thing returned every time). The way to modify effect is with [] or [something] which tells the DOM what aspect of a component to sync.
