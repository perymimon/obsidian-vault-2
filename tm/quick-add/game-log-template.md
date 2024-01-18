```js quickadd
console.log(this, arguments)
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm("top-table-game");
Object.assign(this.variable, result)
```

# GAME: {{value: result.game}}
```js quickadd
this.variable.players
```

# top table game log
start:: 10:00
## players
    [[dany]]:: 60,000
    [[pery]]:: 58,000

end:: 12:00

win:: [[dany]]

## comments
