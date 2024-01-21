---
game: game@ Isla Dorada
players:
  - סטאס פירר
  - דני
date-created: 2024-01-21
tags: game-log/isladorada
end: 2024-01-21T22:46
---
 [[game@  isla dorada]] [[2024-01-21]] [start:: 22:46]  
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]`

| players score |
|---|
| [[סטאס פירר]] :: `INPUT[text(placeholder(score)):score["דני"]]` | 
| [[דני]] :: `INPUT[text(placeholder(score)):score["דני"]]` | 

```meta-bind-button
label: End Game
hidden: true
id: end-game
style: default
actions:
  - type: updateMetadata
    bindTarget: end
    evaluate: true
    value: moment().format("yyyy-MM-DDTHH:mm")
```

