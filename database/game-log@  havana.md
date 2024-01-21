---
game: game@ Havana
players:
  - דני
  - איליה
tags: game-log/havana
end: 2024-01-21T15:37
---
`BUTTON[end-game]` [[game@  havana]] [[2024-01-21]] 

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

[start:: 15:37] 

| players | score |
| --- | --- |
| [[דני]] | `INPUT[text:score["דני"]] ` |
| [[איליה]] | `INPUT[text:score["איליה"]] ` |

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

