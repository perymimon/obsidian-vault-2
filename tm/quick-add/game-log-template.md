<%*
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
 let folder = "database"
 var filename = `game-log@ ${ result.game.value.toLowerCase() }`
 _%>
---
a: abc
---
[day:: <% tp.date.now("YYYY-MM-DD") %>] [start:: <% tp.date.now("HH:mm") %>]

<%*
console.log(this)
debugger
tR += result.players.value.map(name=> `- [[${name}]]::\`INPUT[text:score["${name}"]]\``)
    .join('\n')
_%>


<%*
 debugger
 // file move and rename
 tp.file.move(`${folder}/${filename}.md`)
_%>