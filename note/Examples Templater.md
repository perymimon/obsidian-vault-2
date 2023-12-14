---
aliases: 
cssclasses: 
date created: 2023-10-25 23:23:28
date modified: 2023-10-25 23:20:326:54
tags:
  - snippet
title: Examples Templater
type: code
---

## MULTI LINE CODE

```md
 > Templates / Inputs / YouTube
 
	<%"---"%>
	tags: 📽️/📅
	publish:false
	aliases:
	type: video
	status:
	<%"---"%>
	<%* 
			const url = await tp.system.clipboard()
			const response = await fetch(`https://youtube.com/oembed?url=${url}&format=json`
			const data = await response.json()
			console.log(data)
			
			cost html = data.html
			const newPath = "Inbox/" + title
		-%>
			
```

## RENAME FILE INTO CREATION 

```md
	<%* 
		let  title = "{{title}}"
		let date = tp.date.now("YYYY-MM-DD")
		await tp.file.rename(`& ${date} ${title}`)
		_%>
```

## CUSTOM TEMPLATE BY USER SELECT 

```js
	tp.system.suggester(
		text_items: string[] ⎮ ((item: T) => string),
		items: T[],
		throw_on_cancel: boolean = false,
		placeholder: string = "",
		limit?: number = undefined
	)
```

## NICE FULL DAY FORMAT

```js
	moment("dddd, MMMM Do YYYY, h:mm:ss a")
```

## IF AROUND PART OF THE NOTE

```md
	<%* if(tp.date.now("M-D") == "1-1") {%>
		Make Yearly Note
	<%* } _%>
```
