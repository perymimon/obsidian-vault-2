---
aliases: 
cssclasse: 
date-created: 2023-12-13
date-modified: 2023-12-17
tags: 
---
daily note : `= link( "jornal/daily/" + dateformat(date(today), "yyyy-MM-dd"))`

## Active Working

- [[python]]

---

```dataviewjs
dv.pagePaths('"homes"')
.forEach(pagePath => {
  
  dv.paragraph("![["+pagePath+"]]")
  
  dv.el("hr","")
})
```
