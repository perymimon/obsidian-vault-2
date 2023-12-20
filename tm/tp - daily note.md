<%*
moment.lang('he')
var fileDayFormat = 'YYYY-MM-DD'
var fileWeekFormat = 'YYYY-[W]ww' 
var happyDayFormat = "DD MMMM, יום dddd, DDD ימים או W שבועות מתחילת השנה."
var dv = app.plugins.plugins.dataview.api
var title = tp.file.title
var theDay = moment(title, fileDayFormat)
var tomorrow  = theDay.add(1,'days').format(fileDayFormat)
var yesterday  = theDay.add(-2,'days').format(fileDayFormat)
debugger
_%>
---
aliases: <% theDay.format("DD MMMM YYYY") %>
tags: [daily]
cssclasses: daily
day: <% theDay.format(fileDayFormat) %>
week: <% theDay.format(fileWeekFormat) %>
---

## [[<%_ yesterday _%>|👈]] [[<% title %>#הספקתי היום|<% title %>]] [[<%_ tomorrow _%>|👉]]

> [!todo]  <% theDay.format(happyDayFormat) %> **`== moment(dv.current().day - 0).fromNow()`**

> [!tip]  יומן מלחמה , היום ה - <% theDay.diff("2023-10-06",'days') %> למלחמה

## הספקתי היום 
- 

מצב רוח יומי:: 😑

> [!cite] אז איך עבר היום שלי 
משפט::  
סיפור::



