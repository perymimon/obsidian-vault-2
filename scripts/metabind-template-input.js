debugger
let metaData = app.plugins.plugins["obsidian-meta-bind-plugin"]
let {flattenObject} = (await engine.importJs('scripts/flat-object.js'));
let file = app.workspace.activeEditor.file
let cache = metaData.metadataManager.cache.get(file.path)
let template = cache.memory["inputText"]
let frontmatter = flattenObject(context.metadata.frontmatter)
let text = template.replace(/{{([^}]+?)}}/g, (_, path) => {
    return frontmatter[path.trim()]
})
//save
let t = document.activeElement
if (!t) throw "there is no active element"
t.value = text;
t.trigger('input')
