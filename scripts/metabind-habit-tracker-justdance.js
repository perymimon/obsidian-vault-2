let quickadd = app.plugins.plugins['quickadd']
let choice = quickadd.settings.choices.find( c => c.name.trim() == "script-daily-log")
choice.format.format = `- {{time}} play JustDance \\n`
quickadd.api.executeChoice('script-daily-log')