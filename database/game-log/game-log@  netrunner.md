---
game: game@ NetRunner
players:
  - דני
  - נריה רוזנר
  - סטאס פירר

date-created: 2024-01-22
tags: game-log/netrunner
---
[[game@  netrunner]] [[2024-01-22]] [start:: 22:14]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(option(דני),option(נריה רוזנר),option(סטאס פירר)):win]`

| players score |
|---|
| [[דני]] :: `INPUT[text(placeholder(score)):score["דני"]]` | 
| [[נריה רוזנר]] :: `INPUT[text(placeholder(score)):score["נריה רוזנר"]]` | 
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

