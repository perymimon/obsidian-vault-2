let quickadd = app.plugins.plugins['quickadd']
let choice = quickadd.settings.choices.find( c => c.name.trim() == "script-daily-log")
choice.format.format = `- {{time}} Morning Gym, set 1 \\n`
quickadd.api.executeChoice('script-daily-log')