---
game: game@ Viticulture
players:
  - איליה
  - נריה רוזנר

date-created: 2024-01-22
tags: game-log/viticulture
---
[[game@  viticulture]] [[2024-01-22]] [start:: 20:24]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(איליה),option(נריה רוזנר)):win]`

| players score |
|---|
| [[איליה]] :: `INPUT[text(placeholder(score)):score["דני"]]` | 
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

