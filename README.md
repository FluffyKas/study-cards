# Study Cards

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)


## Overview

I've got to the point where it would be wise to prepare for interviews. As part of this process I thought I make some question-answer cards with common interview questions to practice a bit. Then it somehow turned into this small project...

### Links

[Live site](https://fluffykas.github.io/study-cards/)

### Screenshots

## My Process

I'm practicing some vanilla skills again with this project ( it's never really enough, is it). My plan is to build a simple grid layout with different sized cards that can be flipped, questions in the front, answers in the back. At the top, there will be a searchbar to filter through the questions if needed.

*First steps*

- I made a very simple grid layout for my cards. It's not responsive but I'm not sure it really has to be (we'll see)
- I made some research on how to achieve the flip effect I. It gave me a nice opportunity to use some transforms and was amazed to discover ```perspective``` that creates a really neat 3D effect on the flip
- Hardcoding some questions/answers
- Trying to come up with a good color scheme that doesn't put me to sleep...

PLANS: make a searchbar!

*Second attempt*

I added a searchbar to filter questions. I've never done something like this before so I used [The Net Ninja's awesome tutorial](https://www.youtube.com/watch?v=3NG8zy0ywIk) for the concept and then changed it a bit to my own use. 

I used indexOf() method that normally returns the position of the string we're looking for. If it's not found, it returns -1, I took advantage of this to determine whether the keyword we're looking for can be found in the question. If it's not found, the display of those elements is simply set to none.

````
if(questionTitle.indexOf(keyword)!=(-1)) {
...
} else {
...
}
````

There's some clean up to do, but I'm very happy that it works! :relaxed:

PLANS: I'll split all questions into categories (CSS, JS, Accessibility, etc) for easier search options. Need to work more on the answers and add different flip-effects!

*Third attempt*

- now wide/large/small cards will flip differently (up, right, inverted diagonal)