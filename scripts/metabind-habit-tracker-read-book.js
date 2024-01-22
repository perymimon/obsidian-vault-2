const result = await app.plugins.plugins.modalforms
    .api.openForm("read-book");
let quickadd = app.plugins.plugins['quickadd']
let choice = quickadd.settings.choices.find( c => c.name.trim() == "script-daily-log")
choice.format.format = `- {{time}} read [[${result.book}]] untile page ${result.page} \\n`
quickadd.api.executeChoice('script-daily-log')