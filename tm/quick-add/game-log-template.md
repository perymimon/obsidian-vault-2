
---
```js quickadd
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm("top-table-game");
Object.assign(this.variables, result.data)
return result.asFrontmatterString()
```
---


# game-log: {{VALUE: game}}

[day:: {{DATE:YYYY-MM-DD}}] [start:: {{time}}]
```js quickadd
console.log(this.variables)
return this.variables.players.
	map(name=> `- [[${name}]]::`+`\`INPUT[text:score["${name}"]]\``)
    .join('\n')
```
