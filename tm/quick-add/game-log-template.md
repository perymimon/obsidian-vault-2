---
---

```js quickadd
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm("top-table-game");
Object.assign(this.variables, result.data)
debugger
```
day:: {{DATE:YYYY-MM-DD}}
start:: {{time}} 

# game-log: {{value: game}}

```js quickadd
console.log(this.variables)
return this.variables.players.
	map(name=> `- [[${name}]]::`+`\`INPUT[:score[${name}]]\``)
    .join('\n')
```
