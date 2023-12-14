---
aliases: 
cssclasses: 
date created: 2023-10-23 00:33:35
date modified: 2023-10-25 23:36:21
tags:
  - snippet
title: Examples Dataview inline
type: code
---

Show links to all mention to some page in one line with pipe (|) spereate the links

```md
`= join( map( [[2023-W42]].file.inlinks, (f)=> f ), "|" )`
```

Show links to all mention to some page in one line with pipe (|) spereate the links

```md
`= join( map( [[2023-W42]].file.inlinks, (f)=> f ), "|" )`
```

```md
> **`= choice( this.day = date(today) ,"זה היום", "זה לא היום")`** 
```