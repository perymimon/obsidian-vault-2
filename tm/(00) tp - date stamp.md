<%*   
    var locale = moment.locale() 
    moment.locale('en') 
_%>
[[<%moment().format('yyyy-MM-DD')%>]]
<%_*   
moment.locale(locale)
_%>