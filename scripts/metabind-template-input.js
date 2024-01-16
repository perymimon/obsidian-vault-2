debugger
let lib = await engine.importJs('scripts/flat-object.js');
let t = document.activeElement
if(!t) throw "there is no active element"
let frontmatter = lib.flattenObject(context.metadata.frontmatter)
let template = t.value
text = template.replace(/{{([^}]+?)}}/g,(_,path)=>{
    return frontmatter[path.trim()]
})
t.value = text;
