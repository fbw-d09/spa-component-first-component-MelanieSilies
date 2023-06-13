# `06` Your first functional component
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


When you create functions that return HTML, JSX will let you treat them as **"Components"**, basically they will become your own custom HTML tags.

## Creating our first functional Component

One of the things we can do thanks to JSX is calling functions like they are an HTML tag, for example:
```js
// if we declare a function called MyFunction
const MyFunction = () => {
    return <h1>I Love React</h1>;
}

// we can call the function as an HTML tag like this:
<MyFunction />

// instead of the typical way of using round brackets
MyFunction();
```

When you call a function like that, it becomes a **"React component"**, which is a function that generates (returns) HTML dynamically. Whatever the function returns will be replaced in the same place as the original `<MyFunction />` was placed.

## :speech_balloon: Instructions

On the 9th line of `src/index.js`, change the way the function is called, call the function as a **"React component"** using `<` and `>` like an HTML tag (instead of parentheses).

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Component

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Tag notation used to include `PrintHello` Component |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-component-first-component)


[//]: # (autograding info end)