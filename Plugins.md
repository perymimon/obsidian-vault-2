---
aliases: 
cssclasse: 
date-created: 2023-12-26
date-modified: 2023-12-28
tags:
---
[obsidian-releases/community-plugins.json at master · obsidianmd/obsidian-releases · GitHub](https://github.com/obsidianmd/obsidian-releases/blob/master/community-plugins.json)

## "Habit Tracker 21

Habit Tracker 21 is a plugin based on the basic assumption that it takes 21 days to form a habit. Utilizing that philosophy, you can create a habit tracker in Obsidian with this plugin.

Instead of using other habit-tracking methods, we talked about previously, this takes a different approach. It doesn’t make use of daily notes.

Instead, you create a new note in a new folder for each habit you want to track.

Then use the following code to render the habit wherever you want.

```habittracker
{
 "path": "Habits/"
}
```

 https://obsidianninja.com/new-obsidian-plugins-pomodoro-habit-tracker-localgpt-peerdraft-more/#:~:text=Habit%20Tracker%2021,%7D%0A%60%60%60

"Note Gallery
Similar to the previous plugin we mentioned, the Note Gallery creates a masonry-style note gallery for Obsidian notes. And it doesn’t depend on the dataview plugin.

Here’s a code you can use to render a masonry-style note gallery for your notes.

~~~~note-gallery     #           default | options
query: 'tag:#book'  # optional: anything you'd put into an obsidian search query
                     # make sure to wrap into single quotes for any regex e.g.: '/\d/'
debugQuery: false    # optional: false | true - display native search results to debug
path:          # optional: current note folder | path/to/folder - you don't **need**
                     # to use path if you are using query, path will source additional notes
recursive: true      # optional: true | false
limit: 300          # optional: 0 | any number
sort: desc           # optional: desc | asc
sortBy: ctime        # optional: mtime | ctime | name
fontSize: 10pt        # optional: 6pt | NUMBERpt | NUMBERpx
showTitle: True    # optional: true | false
~~~~

 https://obsidianninja.com/new-obsidian-plugins-pomodoro-habit-tracker-localgpt-peerdraft-more/#:~:text=github.com-,Note%20Gallery,GitHub,-%2D%20pashashocky/obsidian%2Dnote

## "Pomodoro Timer for Obsidian

This is a simple and elegant Pomodoro timer for Obsidian. If you use the Pomodoro technique to get your work done, this is going to be useful.

You can customize the work and break intervals to suit your needs.

If you are working on Obsidian itself, it also integrates with the status bar. This means you can view the Pomodoro timer in the status bar.

Another feature I like is the ability to log your Pomodoro sessions in the daily notes. This makes it easy to review your productivity throughout the day.

 https://obsidianninja.com/new-obsidian-plugins-pomodoro-habit-tracker-localgpt-peerdraft-more/#:~:text=Pomodoro%20Timer%20for,throughout%20the%20day.

## "LocalGPT

LocalGPT allows you to use GPT inside Obsidian. With maximum privacy and offline access.

To use this plugin, you need to install Ollama. Then install the preferred model from the Ollama library.

After that, configure the plugin’s settings. You can use the available prompts or create new ones easily.

Then, go to the note where you want to use GPT. Go to the command palette, and search for Local GPT. Select the context menu option.

There you will have the option to use the pre-defined command prompts.

"
 https://obsidianninja.com/new-obsidian-plugins-pomodoro-habit-tracker-localgpt-peerdraft-more/#:~:text=github.com-,LocalGPT,will%20have%20the%20option%20to%20use%20the%20pre%2Ddefined%20command%20prompts.,-That%E2%80%99s%20all%20for


https://medium.com/obsidian-observer/obsidian-templater-snippets-i-wish-i-knew-sooner-e0effc30106d

https://youtube.com/watch?v=5ht8NYkU9wQ&si=HOovad_cmfg8dozY

https://prakashjoshipax.com/obsidian-showcases-1/