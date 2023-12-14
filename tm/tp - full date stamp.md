<%*   
    var locale = moment.locale() 
    moment.locale('en') 
_%>
[[<%moment().format('yyyy-MM-DD')%>]] [time:: <% moment().format('HH:mm') %>]
<%_*   
moment.locale(locale)
_%>