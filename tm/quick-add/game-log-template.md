<%*
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
 let folder = "database/game-log"
 let gameName = result.game.value.toLowerCase().replace('game@','')
 var filename = `game-log@ ${ gameName }`
var winOptions =  result.players.value.map(n=>`option(${n})`)
 _%>
---
<% result.asFrontmatter() %>
date-created: <% tp.date.now("YYYY-MM-DD") %>
tags: game-log/<% gameName.replace(/\s+/g,'') %>
---
[[game@ <% gameName %>]] [[<% tp.date.now("YYYY-MM-DD") %>]] [start:: <% tp.date.now("HH:mm") %>]  

End game `= this.end`
 
[ duration: `= this.end - date(this["date-created"] + "T" + this.start)` ]

 `BUTTON[end-game]` who win: `INPUT[inlineSelect(<% winOptions %>):win]`

| players score |
|---|
<%*
tR += result.players.value
.map(name=> `| [[${name}]] :: \`INPUT[text(placeholder(score)):score["${name}"]]\` | `)
    .join('\n')
%>

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

<%*

const _rst = await Promise.all(__prs);
tR = tR.replace(/rJ2KqXzxQg/g, () => _rst.shift());
await tp.file.create_new(tR, `${folder}/${filename}.md`)
tR = ''
// add note on daily page
let quickadd = app.plugins.plugins['quickadd']
let choice = quickadd.settings.choices.find( c => c.name.trim() == "script-daily-log")
choice.format.format = `- {{time}} played the game [[${filename}]] \\n`
quickadd.api.executeChoice('script-daily-log')
_%>