#tracker #obsidian/plugin 

# Example Test

>You can collect data from `tag`, `frontmatter`, `wiki`, `text`, `table`, `dvField`, `task`, and `fileMeta`.

- **Tag**: tags in the format of ‘#tagName’ in the note content are evaluated as a constant value (default: 1.0). A value can be attached to the tag in the format of ‘#tagName:value’.

- **Wiki**: count wiki links in articles. For example, [[NoteA]].
- **Text**: count the number of occurrences of the provided text. You can also use regular expressions.
```md
searchType: text
searchTarget: '.+\@.+\..+'
```
- **Table**: Finds specified table in the specified file and collects data from the specified columns.
```md
searchType: table
searchTarget: data/Table[0][0], data/Table[0][1], data/Table[0][2] 
```
Where data/Tableis the path for the file, data/Table**[0]**[0]is the index of the table in the file data/Table[0]**[0]**and is the index of the column.

- Frontmatter: evaluate key-value pairs in the front matter.
```md

---

run: 60
--- 
```
- **dvField**: evaluate key::value inline fields.
```md
run:: 60 
```

- **FileMeta**: data from the files, like cDate, mDate, size, numWords, numChars or numSentences.
- **Task**: collects data from `tasks`. task or `task.all` returns all tasks, done or not. To get tasks done, use `task.done` or `task.notdone` for not done.
- 
