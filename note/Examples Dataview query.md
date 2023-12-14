---
tags:
  - snippet
---
Templater + dataview: Show Table of page that point to the page that snipper embed in

````md
```dataview
		table without id 

		link( file.name )  as "days in the week"

		from "Calendar/Daily Notes" AND [[Examples Dataview query]]
		sort file.name asc
	```
````

## Table 5 Last Modifies Files

```md
 ```dataview
		TABLE  without id  
			link(file.name) as "last files"
		from ""
		sort file.mtime desc
		limit 5
	```
```

## Table of Tasks from this week or finished this week. 
> week is the name of note
```md
```dataview
	TABLE without id
		regexreplace(task.text, "(\[completion:|@).*$","") as "Task"
		,file.link as "Board"
		,task.completion as Done
	FROM #daily
	FLATTEN file.tasks as task
	WHERE task.completed 
	WHERE meta(task.section).subpath = "היום"
	WHERE (
			dateformat(file.day + dur(1 day),"yyyy-'W'WW") = this.file.name 
			OR 
			dateformat(task.completion + dur(1 day),"yyyy-'W'WW") = this.file.name 
		)
		
	```
```

##  Show Goals Tracker

An example note (with an inline field to fix a date, but you can use a field in frontmatter):

```md
dDate:: 2022-12-24

## Denni's Goals  

- [x] 🐷 Create PIGGS 
- [ ] 🏋️ Movement 
- [ ] 📖 Bible App 
- [ ] 💰 EveryDollar 
- [ ] 🛏 Make the bed 
- [ ] 💡 Learn a new thing 
- [x] 🎸 Guitar - 10 minutes`
```

### the query

Now a query based in these conditions:

- as I see in your mockup, to you the start of the week is in sunday… so, for the case the weekly query is placed in a note with a Saturday date. why? to use a comparison and calculation based on the date in that field
- because you use in the section title an `'` (“Denni’s Goals”) you need to ignore it in `WHERE meta(T.section).subpath = "Dennis Goals"`
- the query is based in a fixed list of ordered seven tasks

```md 
dDate:: 2022-12-24 

```dataview 
		TABLE WITHOUT ID
			upper(dateformat(dDate, "cccc")) AS Weekday,
			choice(rows.T.completed[0], "🟢", "❌") AS 🐷,
			choice(rows.T.completed[1], "🟢", "❌") AS 🏋️,
			choice(rows.T.completed[2], "🟢", "❌") AS 📖, 
			choice(rows.T.completed[3], "🟢", "❌") AS 💰, 	
			choice(rows.T.completed[4], "🟢", "❌") AS 🛏, 	
			choice(rows.T.completed[5], "🟢", "❌") AS 💡, 	
			choice(rows.T.completed[6], "🟢", "❌") AS 🎸 
			
		 FROM "your-folder-path" 
		 FLATTEN file.tasks as T 
		 WHERE meta(T.section).subpath = "Dennis Goals" 
		 WHERE dDate <= this.dDate AND dDate >= this.dDate - dur(6days) 
		 GROUP BY dDate
		 SORT dDate ASC 
		
    ``` 
```
_Isn’t an elegant query (with undesirable repetitions), but is one way inside dql limitations_.

#### the result

(weekdays are in portuguese, my local language)

![image](https://forum.obsidian.md/uploads/default/optimized/3X/4/e/4e6c5f67b05590314f1b4ee150231e24cca1160b_2_690x242.png)