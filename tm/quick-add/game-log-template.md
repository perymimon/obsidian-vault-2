<%*
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
 let folder = "database"
 let gameName = result.game.value.toLowerCase()
 var filename = `game-log@ ${ gameName }`
 _%>
---
<% result.asFrontmatter() %>
tags: game-log/<% gameName.replace(/\s+/g,'') %>
---
[day:: <% tp.date.now("YYYY-MM-DD") %>] [start:: <% tp.date.now("HH:mm") %>] [end:: `INPUT[time:end]`]

<%*
tR += result.players.value.map(name=> `- [[${name}]]::\`INPUT[text:score["${name}"]]\``)
    .join('\n')
_%>


<%*

const _rst = await Promise.all(__prs);
tR = tR.replace(/rJ2KqXzxQg/g, () => _rst.shift());
await tp.file.create_new(tR, `${folder}/${filename}.md`)
tR = ''

_%>