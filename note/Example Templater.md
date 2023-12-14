---
aliases: 
cssclasse: 
date-created: 2023-11-28
date-modified: 2023-12-03
tags: 
---

```md
<%*

var fileDayFormat = 'YYYY-MM-DD'
var fileWeekFormat = 'YYYY-[W]ww'
var happyDayFormat = "DD MMMM יום dddd היום ה- DDD, השבוע ה"
var dv = app.plugins.plugins.dataview.api
var title = tp.file.title
var theDay = moment(title,fileDayFormat)
var tomorrow = theDay.add(1,'days').format(fileDayFormat)
var yesterday = theDay.add(-2,'days').format(fileDayFormat)

_%>
```

## Tags Selector

```js
const allTags = Object.entries(app.metadataCache.getTags() )  
//    .sort( (a, b) => a[0].localeCompare(b[0]) ) // Sorted alphabetically  
.sort( (a, b) => b[1] - a[1], "desc" ) // Sorted related to frequency  
  
let selectedTags = []  
while (true) {  
    let choice = await tp.system.suggester(        (t) => `${t[0]} (${t[1]})`,  
        allTags,        false,        `${selectedTags.join(", ")} - (ESC when finished)`    )  
    if (choice) selectedTags.push(choice[0])    else break;    }  
selector = selectedTags.join(' AND ')
```
