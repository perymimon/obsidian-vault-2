<%*
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
 let folder = "database"
 var filename = `game-log@ ${ result.game.value.toLowerCase() }`
 _%>
---
<% result.asFrontmatter() %>
---
[day:: <% tp.date.now("YYYY-MM-DD") %>] [start:: <% tp.date.now("HH:mm") %>]

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