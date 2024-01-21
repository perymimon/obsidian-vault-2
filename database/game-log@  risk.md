---
game: game@ Risk
players:
  - סטאס פירר
  - דני

date-created: 2024-01-21
tags: game-log/risk
---
`BUTTON[end-game]` [[game@  risk]] [[2024-01-21]]

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

[start:: 16:43] 


 [[סטאס פירר]] `INPUT[text(placeholder(score)):score["דני"]]`
 [[דני]] `INPUT[text(placeholder(score)):score["דני"]]`

| players | score |
|---|---|
| [[דני]]  |`INPUT[text(placeholder(score)):score["דני"]]` |
| [[פרי מימון]] | `INPUT[text(placeholder(score) ):score["פרי מימון"]]` |

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

