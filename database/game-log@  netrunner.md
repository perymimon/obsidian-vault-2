---
aliases: 
cssclasse: 
date-created: 2024-01-21
date-modified: 2024-01-21
end: 2024-01-21T23:00
game: game@ NetRunner
players:
  - פרי מימון
  - דני
tags: game-log/netrunner
win: דני
---
 [[game@  netrunner]] [[2024-01-21]] [start:: 23:00]  
 
 End game `= this.end`

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(פרי מימון),option(דני)):win]`

| players score |
|---|
| [[פרי מימון]] :: `INPUT[text(placeholder(score)):score["דני"]]` |
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
