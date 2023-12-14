<%*
var tag = await tp.system.suggester(
	(item) => item, Object.keys(app.metadataCache.getTags()) 
	)
var tag1 = tag.replace('#','')
_%>

## ועוד
```dataview
table without id date-created as created, file.link as note,
	join(filter(tags, (t) => t != "<%tag1%>")) as tags

from <%tag%>
sort date-created desc
```

<hr  style="clear:both"/>
