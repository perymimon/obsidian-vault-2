<%*
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
 
_%>

# game-log: <% result.game %>

[day:: <% tp.date.now("YYYY-MM-DD") %>] [start:: <% tp.date.now("HH:mm") %>]

<%*
console.log(this)
debugger
return result.players.value.map(name=> `- [[${name}]]::\`INPUT[text:score["${name}"]]\``)
    .join('\n')
_%>
