<%*
var fileDayFormat = "YYYY-MM-DD"
var happyDayFormat = "DD MMMM יום dddd היום ה- DDD, השבוע ה"
var dv = app.plugins.plugins.dataview.api
var goodreadsDB = app.vault.getMarkdownFiles().filter(item.path.include('goodreads-db'))
var file = await tp.system.suggester((item) => item.basename, goodreadsDB)
var note = dv.page("Goodreads - " + file.basename)

tR += `# ${note.file.link}  \n`
tR += `![](${note.cover})  \n`

tR += `banner:: [banner link](${note.cover})  \n`
tR += `book name:: ${note.title}  \n`
tR += `author:: ${note.author}  \n`
tR += `publish:: ${moment(note.datePublished - 0).format(fileDayFormat)}  \n`
tR += `pages:: ${note.pages}  \n`
tR += `rating:: ${note.avgRating}  \n`

_%>
<hr  style="clear:both"/>