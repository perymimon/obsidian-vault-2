---
aliases: 
cssclasse: 
date-created: 2024-01-21
date-modified: 2024-01-21
end: 2024-01-21T16:44
game: game@ Havana
players:
  - דני
  - איליה
tags: game-log/havana
---
`BUTTON[end-game]` [[game@  havana]] [[2024-01-21]] [start:: 16:43]

[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

| players | score |
|---|---|
| [[דני]] | `INPUT[text(placeholder(score)):score["דני"]]`
| [[איליה]] | `INPUT[text(placeholder(score)):score["דני"]]`

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
