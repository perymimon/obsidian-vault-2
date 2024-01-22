---
game: game@ Scythe
players:
  - דני
  - נריה רוזנר
  - פרי מימון

date-created: 2024-01-22
tags: game-log/scythe
---
[[game@  scythe]] [[2024-01-22]] [start:: 22:13]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(דני),option(נריה רוזנר),option(פרי מימון)):win]`

| players score |
|---|
| [[דני]] :: `INPUT[text(placeholder(score)):score["דני"]]` | 
| [[נריה רוזנר]] :: `INPUT[text(placeholder(score)):score["נריה רוזנר"]]` | 
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

