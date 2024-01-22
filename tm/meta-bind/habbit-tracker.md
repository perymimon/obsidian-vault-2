---
habbit:
  redingStoryBook: true
  book:
    name: "[[database/ספרים/אומן השיר|אומן השיר]]"
    page: 24
  topTableGame: true
  tefillin: true
---
> [!danger]+ Habit Tracker 
> **כושר**: `BUTTON[hanging,morning-gym,JustDance]`
> **דת**: `BUTTON[tefillin]` 
> **hobbies** `BUTTON[topTableGame]` 
> **Reading**: Book `INPUT[suggester(optionQuery(#book)):habbit.book.name]`  until page `INPUT[number:habbit.book.page]` `BUTTON[readingStoryBook]`

```meta-bind-button
label: Reading Book
hidden: true
id: readingStoryBook
style: primary
actions:
  - type: js
    file: scripts/metabind-habit-tracker-read-book.js  
``` 
 
```meta-bind-button
label: Hanging
id: hanging
hidden: true
style: primary
actions:
  - type: updateMetadata
    bindTarget: habbit.hanging
    value: 1 min
  - type: js
    file: scripts/metabind-habit-tracker-hanging.js  
```

```meta-bind-button
label: Morning Gym
id: morning-gym
hidden: true
style: primary
actions:
  - type: js
    file: scripts/metabind-habit-tracker-morning-gym.js  
  - type: updateMetadata
    bindTarget: habbit.hanging
    value: true
```

```meta-bind-button
label: JustDance
id: JustDance
hidden: true
style: primary
actions:
  - type: js
    file: scripts/metabind-habit-tracker-justdance.js   
  - type: updateMetadata
    bindTarget: habbit.JustDance
    value: true
```

```meta-bind-button
label: תפילין
id: tefillin
hidden: true
style: primary
actions:
  - type: js
    file: scripts/metabind-habit-tracker-thfilin.js  
  - type: updateMetadata    
    bindTarget: habbit.tefillin
    value: true
```


```meta-bind-button
label: Top Table Game
id: topTableGame
hidden: true
style: primary
actions:
  - type: templaterCreateNote
    templateFile: tm/quick-add/game-log-template.md
```
