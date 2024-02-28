

[gamers::database/אנשים/איליה.md,database/אנשים/נריה רוזנר.md,database/אנשים/נריה רוזנר.md]


[game::database/topTableGame/game@ Fury of Dracula.md]

`text|__select game__|= list from #topTableGame >::game` `text|__select players__|= list from #gamer >::gamers append`

```dataview
list  from #gamer  
```
<%*
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
 let folder = "database/game-log"
 let gameName = result.game.value.toLowerCase().replace('game@','')
 var filename = `game-log@ ${ gameName }`
 var players =  result.players.value.join(',')
debugger
 _%>
---
<% result.asFrontmatter() %>
date-created: <% tp.date.now("YYYY-MM-DD") %>
tags: game-log/<% gameName.replace(/\s+/g,'') %>
---
`button|End Game| {time} >::end` 
[[game@ <% gameName %>]] [[<% tp.date.now("YYYY-MM-DD") %>]] [start:: <% tp.date.now("HH:mm") %>] 
[end::] [duration::  ] [Who win:: `text|____| <% players %> `] 
