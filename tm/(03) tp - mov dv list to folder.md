<%*
var dv = app.plugins.plugins.dataview.api
var allTags = Object.entries(app.metadataCache.getTags() )

let choiceTag = await tp.system.suggester((t) => `${t[0]} (${t[1]})`,allTags,true,`select tag`)
var folders = [...new Set(app.vault.getMarkdownFiles().map(f => f.parent))]
var choiceFolder = await tp.system.suggester((folder)=> folder.path, folders,true, 'select folder to move')

var selector = choiceTag[0]
var notes = dv.pages(selector).array()
for( let note of notes){
	var tFile = tp.file.find_tfile(note.file.path)
	await app.vault.rename(tFile,choiceFolder.path +'/' + tFile.name)
	//await tp.file.move(choiceFolder.path, note.file)
}

_%>

