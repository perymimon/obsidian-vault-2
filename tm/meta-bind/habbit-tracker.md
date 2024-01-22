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
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: updateMetadata
    bindTarget: memory^inputText
    value: I'm reading {{habbit.book.name}} until page {{habbit.book.page}}
  - type: js
    file: scripts/metabind-template-input.js  
``` 
 
```meta-bind-button
label: Hanging
id: hanging
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: updateMetadata
    bindTarget: memory^inputText
    value: hanging for 1 minute
  - type: js
    file: scripts/metabind-template-input.js  
```

```meta-bind-button
label: Morning Gym
id: morning-gym
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: updateMetadata
    bindTarget: memory^inputText
    value: Morning Gym, set 1    
  - type: input
    str: Morning Gym, set 1
  - type: updateMetadata
    bindTarget: habbit.hanging
    evaluate: false
    value: true
```

```meta-bind-button
label: JustDance
id: JustDance
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: Justdance 
  - type: updateMetadata
    bindTarget: habbit.JustDance
    evaluate: false
    value: true
```

```meta-bind-button
label: תפילין
id: tefillin
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:59fa3186-ca93-48ae-87fb-36781d8f9189
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
