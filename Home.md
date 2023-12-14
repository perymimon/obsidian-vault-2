---
aliases: 
cssclasse: 
date-created: 2023-12-13
date-modified: 2023-12-13
tags: 
---



```dataviewjs
dv.pagePaths('"homes"')
.forEach(pagePath => {
  
  dv.paragraph("![["+pagePath+"]]")
  
  dv.el("hr","")
})
```
