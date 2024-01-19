<%*
var filename = "game-log { <% result.game %> }"
 const result = await app.plugins.plugins.modalforms.api.openForm("top-table-game");
var template = `
# game-log: <% result.game %>

[day:: <% tp.date.now("YYYY-MM-DD") %>] [start:: <% tp.date.now("HH:mm") %>]

`${result.players.value.map(name=> `- [[${name}]]::\`INPUT[text:score["${name}"]]\``)
.join('\n')}

tp.file.create_new(template: TFile ⎮ string, filename, false, 'database')
_%>

# game-log: <% result.game %>

[day:: <% tp.date.now("YYYY-MM-DD") %>] [start:: <% tp.date.now("HH:mm") %>]

<%*
console.log(this)
debugger
tR += result.players.value.map(name=> `- [[${name}]]::\`INPUT[text:score["${name}"]]\``)
    .join('\n')
_%>
