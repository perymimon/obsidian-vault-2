<%*
var fileDayFormat = 'YYYY-MM-DD'
var fileWeekFormat = 'YYYY-[W]ww' 
var happyDayFormat = "DD MMMM יום dddd היום ה- DDD, השבוע ה"
var dv = app.plugins.plugins.dataview.api
var title = tp.file.title
var theDay = moment(title,fileDayFormat)
var tomorrow  = theDay.add(1,'days').format(fileDayFormat)
var yesterday  = theDay.add(-2,'days').format(fileDayFormat)
_%>
---

tags: [daily]
cssclasses: daily
day: <% theDay.format(fileDayFormat) %>
week: <% theDay.format(fileWeekFormat) %>
---

## [[<%_ yesterday _%>|👈]][[<% title %>#מהלך היום.|<% title %>]][[<%_ tomorrow _%>|👉]]

>  <% theDay.format(happyDayFormat) %> **`$= moment(dv.current().day - 0).fromNow()`**

 > [!todo] היום <% theDay.format("dddd") %> , מה קורה ומה אני עושה היום

## הספקתי היום 
- 


## לסגור את היום 
משפט::  
סיפור::

 
##  [[חרבות ברזל]]
> [!tip]  יומן מלחמה , היום ה - <% theDay.diff("2023-10-06",'days') %> למלחמה

 | חטופים | נרצחים | חללי צה"ל |
 |:------:|:------:|:---------:|
 | 315    | 1,200  | 240       |
 
- [*]  
- [*]  
- [*]  