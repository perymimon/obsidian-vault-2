---
game: game@ מצודות
players:
  - פרי מימון
  - סטאס פירר
date-created: 2024-01-21
tags: game-log/מצודות
end: 2024-01-21T22:12
---
 [[game@  מצודות]] [[2024-01-21]] [start:: 22:10]  
 [ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]`

| players score |
|---|
| [[פרי מימון]] :: `INPUT[text(placeholder(score)):score["דני"]]` |
| [[סטאס פירר]] :: `INPUT[text(placeholder(score)):score["דני"]]` |

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

