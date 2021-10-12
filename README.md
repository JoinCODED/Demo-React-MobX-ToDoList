# ToDo List


## What is this demo?

A todo list app that let you create/delete tasks and set a priority.

## What are the objectives?

The students should learn how to apply MobX .

## Steps
1. `yarn add mobx mobx-react`
2. Create a file called taskStore in src
3. define the task class , tasks =[]
4. `import { makeObservable, observable,action } from "mobx";`
5. make a construtore that will make this a store ` constructor() {makeObservable(this, {tasks: observable,});}` 
6. export `const taskStore = new TaskStore(); export default taskStore;`
7. then add fetchTasks function and replace last line with `this.tasks = response.data;`
8. add createTask as an action in the constructor 
9. in TasksList component 
  1. `import taskStore from "../taskStore";`
  2. `import { observer } from "mobx-react";`
  3. add a use effect and call fetch tasks 
  4. add observer before component export
10. in form call the create and do the same thing as list 
11. in taskItem as well 

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
