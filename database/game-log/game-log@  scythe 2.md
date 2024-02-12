---
game: game@ Scythe
players:
  - סטאס פירר

date-created: 2024-02-12
tags: game-log/scythe
---
[[game@  scythe]] [[2024-02-12]] [start:: 21:19]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(סטאס פירר)):win]`

| players score |
|---|
| [[סטאס פירר]] :: `INPUT[text(placeholder(score)):score["סטאס פירר"]]` | 

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

