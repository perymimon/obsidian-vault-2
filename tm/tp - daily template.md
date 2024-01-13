<%*
moment.lang('he')
var fileDayFormat = 'YYYY-MM-DD'
var fileWeekFormat = 'YYYY-[W]ww' 
var happyDayFormat = "יום dddd, DD MMMM yyyy | מתחילת השנה: DDD ימים (או W שבועות)."
var dv = app.plugins.plugins.dataview.api
var title = tp.file.title
var theDay = moment(title, fileDayFormat)
var tomorrow  = theDay.clone().add(1,'days').format(fileDayFormat)
var yesterday  = theDay.clone().add(-2,'days').format(fileDayFormat)
_%>

---
aliases: <% theDay.format("DD MMMM YYYY") %>
tags: [daily]
cssclasses: daily
day: <% theDay.format(fileDayFormat) %>
week: <% theDay.format(fileWeekFormat) %>
---

[[jornal/daily/<%_ yesterday _%>|אתמול 👈]] [[<% title %>#הספקתי היום|<% title %>]] [[jornal/daily/<%_ tomorrow _%>|👉 מחר ]]

> [!todo]  <% theDay.format(happyDayFormat) %> **`== moment(dv.current().day - 0).fromNow()`**

> [!tip]  יומן מלחמה , היום ה - <% theDay.diff("2023-10-06",'days') %> למלחמה

```meta-bind-embed
[[habbit-tracker]]
```

## הספקתי היום

```meta-bind-button
label: Add Activity
style: default
actions: 
  - type: command
    command: quickadd:choice:1a3b6275-d9b2-4604-b43d-55cf470298bc

```
-  

> [!cite] אז איך עבר היום שלי
> **מצב רוח** :  התעוררות `INPUT[mood][:mood.morning]` , צהריים : `INPUT[mood][:mood.noon]`,  לפני השינה :  `INPUT[mood][:mood.sleep]`
> **כותרת היום** : `INPUT[text(defaultValue("יום שגרתי")):daily.title]`
> ```meta-bind
> INPUT[editor:daily.story]
> ```