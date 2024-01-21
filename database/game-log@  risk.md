---
aliases: 
cssclasse: 
date-created: 2024-01-21
date-modified: 2024-01-21
end: 2024-01-21T21:58
game: game@ Risk
players:
  - פרי מימון
  - נריה רוזנר
tags: game-log/risk
score:
  דני: "234234"
---
[[game@  risk]] [[2024-01-21]] [start:: 21:51]
 
`BUTTON[end-game]`

`= date(this["date-created"] + "T" + this.start)`

`= this.end`

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

| players score |
|---|
| [[פרי מימון]] :: `INPUT[text(placeholder(score)):score["דני"]]`  |
| [[נריה רוזנר]] :: `INPUT[text(placeholder(score)):score["דני"]]` |



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
