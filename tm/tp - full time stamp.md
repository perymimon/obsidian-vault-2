<%*   
    var locale = moment.locale() 
    moment.locale('en') 
_%>
[time:: <% moment().format('HH:mm') %>]
<%_*   
moment.locale(locale)
_%>