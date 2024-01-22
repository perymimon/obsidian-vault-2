---
game: game@ Scythe
players:
  - פרי מימון

date-created: 2024-01-23
tags: game-log/scythe
---
[[game@  scythe]] [[2024-01-23]] [start:: 00:43]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(פרי מימון)):win]`

| players score |
|---|
| [[פרי מימון]] :: `INPUT[text(placeholder(score)):score["פרי מימון"]]` | 

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

