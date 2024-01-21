---
game: game@ Scythe
players:
  - פרי מימון
  - נריה רוזנר
date-created: 2024-01-21
tags: game-log/scythe
win: נריה רוזנר
---
 [[game@  scythe]] [[2024-01-21]] [start:: 22:58]  
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(פרי מימון),option(נריה רוזנר)):win]`

| players score |
|---|
| [[פרי מימון]] :: `INPUT[text(placeholder(score)):score["דני"]]` | 
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
```meta-bind-button
label: win
hidden: true
id: end-game
style: default
actions:
  - type: updateMetadata
    bindTarget: end
    evaluate: true
    value: moment().format("yyyy-MM-DDTHH:mm")
```
