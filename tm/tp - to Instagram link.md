<%*
var userSelection = tp.file.selection()
//var names = userSelection.replace(/@/g,'').split(/\n/)

tR += userSelection.replace(/@([^\s]+)/gm, function (anchor,name){
 return `[${anchor}](<https://www.instagram.com/${name}>)`
})


%>
