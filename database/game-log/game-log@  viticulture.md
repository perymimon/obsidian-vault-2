---
game: game@ Viticulture
players:
  - פרי מימון
  - נריה רוזנר

date-created: 2024-01-23
tags: game-log/viticulture
---
[[game@  viticulture]] [[2024-01-23]] [start:: 21:40]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(פרי מימון),option(נריה רוזנר)):win]`

| players score |
|---|
| [[פרי מימון]] :: `INPUT[text(placeholder(score)):score["פרי מימון"]]` | 
| [[נריה רוזנר]] :: `INPUT[text(placeholder(score)):score["נריה רוזנר"]]` | 

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

