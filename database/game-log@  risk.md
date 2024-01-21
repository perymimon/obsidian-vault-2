---
aliases: 
cssclasse: 
date-created: 2024-01-21
date-modified: 2024-01-21
game: game@ Risk
players:
  - פרי מימון
  - דני
tags: game-log/risk
---
`BUTTON[end-game]` [[game@  risk]] [[2024-01-21]]

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

[start:: 15:46]

| players | score |
|---|---|
| [[דני]]   | `INPUT[text:score["דני"]]` |
| [[פרי מימון]] | `INPUT[text:score["פרי מימון"]] ` |

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
