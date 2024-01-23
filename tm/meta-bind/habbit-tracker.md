---
habbit:
  redingStoryBook: true
  book:
    name: "[[database/ספרים/אומן השיר|אומן השיר]]"
    page: 24
  topTableGame: true
  tefillin: true
  morningGym: true
---
> [!danger]+ Habit Tracker 
> **כושר**: `BUTTON[hanging, morning-gym, JustDance]`
> **דת**: `BUTTON[tefillin]` 
> **hobbies** `BUTTON[topTableGame]` 
> **Reading**: `BUTTON[readingStoryBook]`


```meta-bind-button
label: Reading Book
hidden: true
id: readingStoryBook
style: default
actions:
  - type: js
    file: scripts/metabind-habit-tracker-read-book.js  
``` 
 
```meta-bind-button
label: hanging
hidden: true
class: ""
tooltip: ""
id: "hanging"
style: default
actions:
  - type: updateMetadata
    bindTarget: habbit.hanging
    evaluate: false
    value: "true"
  - type: js
    file: scripts/metabind-habit-tracker-hanging.js 
```


```meta-bind-button
label: Morning Gym
id: morning-gym
hidden: true
style: default
actions:
 - type: updateMetadata
   bindTarget: habbit.morningGym
   evaluate: false
   value: "true"
 - type: js
   file: scripts/metabind-habit-tracker-morning-gym.js  
```

```meta-bind-button
label: JustDance
id: JustDance
hidden: true
style: default
actions:
  - type: updateMetadata
    bindTarget: habbit.JustDance
    evaluate: false
    value: true
  - type: js
    file: scripts/metabind-habit-tracker-justdance.js   
```


```meta-bind-button
label: tefillin
hidden: true
id: tefillin
style: default
actions:
  - type: updateMetadata
    bindTarget: habbit.tefillin
    evaluate: false
    value: "true"
  - type: js
    file: scripts/metabind-habit-tracker-thfilin.js 
```

```meta-bind-button
label: Top Table Game
id: topTableGame
hidden: true
style: default
actions:
  - type: templaterCreateNote
    templateFile: tm/quick-add/game-log-template.md
```