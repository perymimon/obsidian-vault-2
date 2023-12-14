---
aliases: 
cssclasse: 
date-created: 2023-10-29
date-modified: 2023-11-28
tags:
  - snippet
---

## Show First Icons from All Compilate Tasks under Some Title

```md
```dataviewjs
let section = "שגרה יומית"
let weekly ='yyyy-[W]WW'
let daily = 'yyyy-mm-dd'

let groups = dv.pages('"Calendar/Daily Notes"')
.where(page => moment(page.day.ts + dv.duration("1 day")).format(weekly) == dv.current().file.name)
.file.tasks
.where(task => task.link.subpath == section)  
//.where(task => task.status == ' ')
.groupBy( task => task.link )
 
let rows = groups.map( group =>{
		let emojis = group.rows
			.map(task =>`<span checked=${task.status !=' '}>${task.text.match(/\p{Emoji}+/u)}</span>` )
			.join(' | ')
		
		console.log( group.row )
		
		group.key.display = group.key.path.slice(-17, -3)
		return [group.key, emojis]	 
}) 

	dv.table(["day","hobbies"],rows)
    ```
```

```dataviewjs
let section = "שגרה יומית"
let weekly ='yyyy-[W]WW'
let daily = 'yyyy-mm-dd'
let startWeek = moment(dv.current().file.name, 'gggg-[W]WW') - dv.duration("1 day")
let endWeek = startWeek + dv.duration("7 day")
										
let groups = dv.pages('"Calendar/Daily Notes"')
.where(page => page.day >= startWeek && page.day <= endWeek)
.file.tasks
.where(task => task.link.subpath == section)  
//.where(task => task.status == ' ')
.groupBy( task => task.link )
 
let rows = groups.map( group =>{
		let emojis = group.rows
					.map(task =>
					 	`<span checked=${task.status !=' '}>${task.text.match(/\p{Emoji}+/u)}</span>` 
					)
					.join(' | ')
		
		console.log( group.row )
		
		group.key.display = group.key.path.slice(-17, -3)
		return [group.key, emojis]	 
}) 

	dv.table(["day","hobbies"],rows)
    ```

```dataview
table from "Google Keep"
limit 2
```

### כל המשימות ששם הקובץ הנוכחי מוזכר בהן

```md

```dataviewjs

const name = dv.current().file.name;
dv.taskList(dv.pages().file.tasks.where(t=> !t.complated && t.text.includes(name)))
    ```
```

### Show Content of Files

```md
```dataviewjs

dv.pagePaths('"Google Keep"').limit(3).forEach(pagePath => { dv.paragraph("![["+pagePath+"]]") })  
	```

```

```md
dv.pagePaths('[[אומן השיר]]').forEach(pagePath => { dv.paragraph("![["+pagePath+"]]") })
```
