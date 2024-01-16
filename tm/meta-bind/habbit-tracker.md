---
habbit:
  redingStoryBook: true
  book:
    name: "[[משאבים/ספרים/אומן השיר.md|אומן השיר]]"
---
> [!danger]+ Habit Tracker
> **כושר**: `BUTTON[hanging,morning-gym,JustDance]`
> **דת**: `BUTTON[tefillin]` 
> **פנאי** `BUTTON[topTableGame]` 
> **קריאה**:  `BUTTON[readStoryBook]` 
>  `INPUT[suggester(optionQuery(#book)):habbit.book.name]`  עד עמוד `INPUT[number:habbit.book.page]`

```meta-bind-button
label: test button
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: "קריאת ספר סיפור  {{habbit.book.name }}"
  - type: js
    file: scripts/metabind-template-input.js 

``` 

```meta-bind-button
label: ספר
id: readStoryBook
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: "קריאת ספר סיפור  {{habbit.book.name }}"
  - type: updateMetadata
    bindTarget: habbit.redingStoryBook
    evaluate: false
    value: true
```

```meta-bind-button
label: להתלות
id: hanging
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: תלייה 1 דקה
  - type: updateMetadata
    bindTarget: habbit.hanging
    evaluate: false
    value: true
```

```meta-bind-button
label: תרגילי בוקר
id: morning-gym
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: תרגילי בוקר
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
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: תפילין 
  - type: updateMetadata
    bindTarget: habbit.tefillin
    evaluate: false
    value: true
```


```meta-bind-button
label: משחקי שולחן
id: topTableGame
hidden: true
style: primary
actions:
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc
  - type: sleep
    ms: 100
  - type: input
    str: שיחקתי ב 
  - type: updateMetadata
    bindTarget: habbit.topTableGame
    evaluate: false
    value: true
```