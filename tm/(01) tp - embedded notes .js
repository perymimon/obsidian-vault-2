<%*
var dv = app.plugins.plugins.dataview.api

const TAG = 'from tag', TAGS='from tags', FOLDER = 'from folder', FILE = 'file', CUSTOM = 'custom'
const options = [TAG, FILE, TAGS]
var choice = await tp.system.suggester(options, options)
let selector ;

const allTags = Object.entries(app.metadataCache.getTags() )
// .sort( (a, b) => a[0].localeCompare(b[0]) ) // Sorted alphabetically
.sort( (a, b) => b[1] - a[1], "desc" ) // Sorted related to frequency

const allFiles = app.vault.getMarkdownFiles()

switch(choice){
case TAG:
    choice = await tp.system.suggester((t) => `${t[0]} (${t[1]})`, allTags, false, `select tags` )
    selector = choice;
break
case TAGS:

        let selectedTags = []
        while (true) {
            let choice = await tp.system.suggester(
                (t) => `${t[0]} (${t[1]})`,
                allTags,
                false,
                `${selectedTags.join(", ")} - (ESC when finished)`
            )

            if (choice) selectedTags.push(choice[0])
            else break;
        }
        selector = selectedTags.join(' AND ')
        break;
    case FILE:
        let choice = await tp.system.suggester( (f) => `${f.name}`, allFiles, true, `select file` )
        selector = `"${choice.path}"`
    break

}

var deleteAfterMerge = await tp.system.suggester(["false","true"],[false,true],false,'delete after merge?')
var notes = dv.pages(selector).array()
notes.sort((a,b)=>{
    return b["date-created"]?.ts - a["date-created"]?.ts
})

for( note of notes){
    var name = note.file.name
    var tFile = tp.file.find_tfile(note.file.name)
    var content = await app.vault.read(tFile)
    // remove yaml
    var contentNoYAML = content.replace(/---\n.*?---/s,"")
    var cDate = note["date-created"] || note.file.ctime;
    var dateFormat = cDate.toFormat('yyyy-MM-dd')

    const title = deleteAfterMerge? name :  `[[${name}]]`

    tR += `## [[${dateFormat }]] - ${title}\n`
    if(note.tags){
        var tags = Array.isArray(note.tags)? note.tags: note.tags.split(/, ?/)
        tR += tags.map(str=> `#${str}`).join(' ') + '\n'
    }
    tR += `${contentNoYAML}\n`

}
if(deleteAfterMerge){
// delete files
promises = notes.map( note => app.vault.trash(note.file, true))
await Promise.all(promises)
}
_%>
