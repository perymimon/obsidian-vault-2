---
game: game@ Viticulture
players:
  - סטאס פירר
  - נריה רוזנר

date-created: tp.date.now("YYYY-MM-DD")
tags: game-log/viticulture
---
`BUTTON[end-game]` [[game@  viticulture]] [[2024-01-21]]

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

[start:: 15:44] 

| players | score |
| --- | --- |
| [[סטאס פירר]] | `INPUT[text:score["סטאס פירר"]] ` |
| [[נריה רוזנר]] | `INPUT[text:score["נריה רוזנר"]] ` |

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

