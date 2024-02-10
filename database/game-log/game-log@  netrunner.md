---
game: game@ NetRunner
players:
  - דני
  - נריה רוזנר
  - סטאס פירר
date-created: 2024-01-22
tags: game-log/netrunner
end: 2024-02-10T10:24
---
[[game@  netrunner]] [[2024-01-22]] [start:: 22:14]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 ```meta-bind-button
label: End Game
hidden: false
id: end-game
style: default
actions:
  - type: updateMetadata
    bindTarget: end
    evaluate: true
    value: moment().format("yyyy-MM-DDTHH:mm")
```


who win: `____,דני,נריה רוזנר,סטאס פירר -5-`

| players score |
|---|
| [[דני]] :: `__score__ -2-` | 
| [[נריה רוזנר]] :: `__score__ -3-` | 
| [[סטאס פירר]] :: `__score__ -4-` | 


