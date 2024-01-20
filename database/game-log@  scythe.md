---
aliases: 
cssclasse: 
date-created: 2024-01-19
date-modified: 2024-01-20
end: 2024-01-20T22:04
game:
  - - game@ Scythe
players:
  - דני
  - פרי מימון
score:
  דני: ""
  פרי מימון: ""
tags:
  - game-log/scythe
win: דני
---
[[game@ Scythe]]  [[2024-01-19]] [start:: 20:17]   [duration:: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]`

[ [[דני]]:: `INPUT[text(placeholder(score)):score["דני"]]` ]
[ [[פרי מימון]]:: `INPUT[text(placeholder(score) ):score["פרי מימון"]]`]

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
