"use strict";
var He = Object.create;
var _ = Object.defineProperty;
var Le = Object.getOwnPropertyDescriptor;
var xe = Object.getOwnPropertyNames;
var Ve = Object.getPrototypeOf, Ce = Object.prototype.hasOwnProperty;
var Re = (a, t) => () => (t || a((t = {exports: {}}).exports, t), t.exports), Ie = (a, t) => {
    for (var e in t) _(a, e, {get: t[e], enumerable: !0})
}, le = (a, t, e, n) => {
    if (t && typeof t == "object" || typeof t == "function") for (let i of xe(t)) !Ce.call(a, i) && i !== e && _(a, i, {
        get: () => t[i],
        enumerable: !(n = Le(t, i)) || n.enumerable
    });
    return a
};
var _e = (a, t, e) => (e = a != null ? He(Ve(a)) : {}, le(t || !a || !a.__esModule ? _(e, "default", {
    value: a,
    enumerable: !0
}) : e, a)), We = a => le(_({}, "__esModule", {value: !0}), a);
var Me = Re(l => {
    "use strict";
    Object.defineProperty(l, "__esModule", {value: !0});
    var g = require("obsidian"), Q = "YYYY-MM-DD", J = "gggg-[W]ww", ge = "YYYY-MM", me = "YYYY-[Q]Q", he = "YYYY";

    function S(a) {
        let t = window.app.plugins.getPlugin("periodic-notes");
        return t && t.settings?.[a]?.enabled
    }

    function E() {
        try {
            let {internalPlugins: a, plugins: t} = window.app;
            if (S("daily")) {
                let {format: o, folder: s, template: p} = t.getPlugin("periodic-notes")?.settings?.daily || {};
                return {format: o || Q, folder: s?.trim() || "", template: p?.trim() || ""}
            }
            let {folder: e, format: n, template: i} = a.getPluginById("daily-notes")?.instance?.options || {};
            return {format: n || Q, folder: e?.trim() || "", template: i?.trim() || ""}
        } catch (a) {
            console.info("No custom daily note settings found!", a)
        }
    }

    function H() {
        try {
            let a = window.app.plugins, t = a.getPlugin("calendar")?.options,
                e = a.getPlugin("periodic-notes")?.settings?.weekly;
            if (S("weekly")) return {
                format: e.format || J,
                folder: e.folder?.trim() || "",
                template: e.template?.trim() || ""
            };
            let n = t || {};
            return {
                format: n.weeklyNoteFormat || J,
                folder: n.weeklyNoteFolder?.trim() || "",
                template: n.weeklyNoteTemplate?.trim() || ""
            }
        } catch (a) {
            console.info("No custom weekly note settings found!", a)
        }
    }

    function L() {
        let a = window.app.plugins;
        try {
            let t = S("monthly") && a.getPlugin("periodic-notes")?.settings?.monthly || {};
            return {format: t.format || ge, folder: t.folder?.trim() || "", template: t.template?.trim() || ""}
        } catch (t) {
            console.info("No custom monthly note settings found!", t)
        }
    }

    function x() {
        let a = window.app.plugins;
        try {
            let t = S("quarterly") && a.getPlugin("periodic-notes")?.settings?.quarterly || {};
            return {format: t.format || me, folder: t.folder?.trim() || "", template: t.template?.trim() || ""}
        } catch (t) {
            console.info("No custom quarterly note settings found!", t)
        }
    }

    function V() {
        let a = window.app.plugins;
        try {
            let t = S("yearly") && a.getPlugin("periodic-notes")?.settings?.yearly || {};
            return {format: t.format || he, folder: t.folder?.trim() || "", template: t.template?.trim() || ""}
        } catch (t) {
            console.info("No custom yearly note settings found!", t)
        }
    }

    function fe(...a) {
        let t = [];
        for (let n = 0, i = a.length; n < i; n++) t = t.concat(a[n].split("/"));
        let e = [];
        for (let n = 0, i = t.length; n < i; n++) {
            let o = t[n];
            !o || o === "." || e.push(o)
        }
        return t[0] === "" && e.unshift(""), e.join("/")
    }

    function Ye(a) {
        let t = a.substring(a.lastIndexOf("/") + 1);
        return t.lastIndexOf(".") != -1 && (t = t.substring(0, t.lastIndexOf("."))), t
    }

    async function Ue(a) {
        let t = a.replace(/\\/g, "/").split("/");
        if (t.pop(), t.length) {
            let e = fe(...t);
            window.app.vault.getAbstractFileByPath(e) || await window.app.vault.createFolder(e)
        }
    }

    async function C(a, t) {
        t.endsWith(".md") || (t += ".md");
        let e = g.normalizePath(fe(a, t));
        return await Ue(e), e
    }

    async function A(a) {
        let {metadataCache: t, vault: e} = window.app, n = g.normalizePath(a);
        if (n === "/") return Promise.resolve(["", null]);
        try {
            let i = t.getFirstLinkpathDest(n, ""), o = await e.cachedRead(i), s = window.app.foldManager.load(i);
            return [o, s]
        } catch (i) {
            return console.error(`Failed to read the daily note template '${n}'`, i), new g.Notice("Failed to read the daily note template"), ["", null]
        }
    }

    function b(a, t = "day") {
        let e = a.clone().startOf(t).format();
        return `${t}-${e}`
    }

    function we(a) {
        return a.replace(/\[[^\]]*\]/g, "")
    }

    function qe(a, t) {
        if (t === "week") {
            let e = we(a);
            return /w{1,2}/i.test(e) && (/M{1,4}/.test(e) || /D{1,4}/.test(e))
        }
        return !1
    }

    function O(a, t) {
        return ye(a.basename, t)
    }

    function Be(a, t) {
        return ye(Ye(a), t)
    }

    function ye(a, t) {
        let n = {day: E, week: H, month: L, quarter: x, year: V}[t]().format.split("/").pop(),
            i = window.moment(a, n, !0);
        if (!i.isValid()) return null;
        if (qe(n, t) && t === "week") {
            let o = we(n);
            if (/w{1,2}/i.test(o)) return window.moment(a, n.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), !1)
        }
        return i
    }

    var Z = class extends Error {
    };

    async function ve(a) {
        let t = window.app, {vault: e} = t, n = window.moment, {
            template: i,
            format: o,
            folder: s
        } = E(), [p, d] = await A(i), r = a.format(o), c = await C(s, r);
        try {
            let y = await e.create(c, p.replace(/{{\s*date\s*}}/gi, r).replace(/{{\s*time\s*}}/gi, n().format("HH:mm")).replace(/{{\s*title\s*}}/gi, r).replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (N, k, T, v, f, m) => {
                let z = n(), G = a.clone().set({hour: z.get("hour"), minute: z.get("minute"), second: z.get("second")});
                return T && G.add(parseInt(v, 10), f), m ? G.format(m.substring(1).trim()) : G.format(o)
            }).replace(/{{\s*yesterday\s*}}/gi, a.clone().subtract(1, "day").format(o)).replace(/{{\s*tomorrow\s*}}/gi, a.clone().add(1, "d").format(o)));
            return t.foldManager.save(y, d), y
        } catch (y) {
            console.error(`Failed to create file: '${c}'`, y), new g.Notice("Unable to create new file.")
        }
    }

    function je(a, t) {
        return t[b(a, "day")] ?? null
    }

    function Ke() {
        let {vault: a} = window.app, {folder: t} = E(), e = a.getAbstractFileByPath(g.normalizePath(t));
        if (!e) throw new Z("Failed to find daily notes folder");
        let n = {};
        return g.Vault.recurseChildren(e, i => {
            if (i instanceof g.TFile) {
                let o = O(i, "day");
                if (o) {
                    let s = b(o, "day");
                    n[s] = i
                }
            }
        }), n
    }

    var X = class extends Error {
    };

    function $e() {
        let {moment: a} = window, t = a.localeData()._week.dow,
            e = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        for (; t;) e.push(e.shift()), t--;
        return e
    }

    function ze(a) {
        return $e().indexOf(a.toLowerCase())
    }

    async function be(a) {
        let {vault: t} = window.app, {template: e, format: n, folder: i} = H(), [o, s] = await A(e), p = a.format(n),
            d = await C(i, p);
        try {
            let r = await t.create(d, o.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, y, N, k, T, v) => {
                let f = window.moment(),
                    m = a.clone().set({hour: f.get("hour"), minute: f.get("minute"), second: f.get("second")});
                return N && m.add(parseInt(k, 10), T), v ? m.format(v.substring(1).trim()) : m.format(n)
            }).replace(/{{\s*title\s*}}/gi, p).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, (c, y, N) => {
                let k = ze(y);
                return a.weekday(k).format(N.trim())
            }));
            return window.app.foldManager.save(r, s), r
        } catch (r) {
            console.error(`Failed to create file: '${d}'`, r), new g.Notice("Unable to create new file.")
        }
    }

    function Ge(a, t) {
        return t[b(a, "week")] ?? null
    }

    function Qe() {
        let a = {};
        if (!ke()) return a;
        let {vault: t} = window.app, {folder: e} = H(), n = t.getAbstractFileByPath(g.normalizePath(e));
        if (!n) throw new X("Failed to find weekly notes folder");
        return g.Vault.recurseChildren(n, i => {
            if (i instanceof g.TFile) {
                let o = O(i, "week");
                if (o) {
                    let s = b(o, "week");
                    a[s] = i
                }
            }
        }), a
    }

    var ee = class extends Error {
    };

    async function Ne(a) {
        let {vault: t} = window.app, {template: e, format: n, folder: i} = L(), [o, s] = await A(e), p = a.format(n),
            d = await C(i, p);
        try {
            let r = await t.create(d, o.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, y, N, k, T, v) => {
                let f = window.moment(),
                    m = a.clone().set({hour: f.get("hour"), minute: f.get("minute"), second: f.get("second")});
                return N && m.add(parseInt(k, 10), T), v ? m.format(v.substring(1).trim()) : m.format(n)
            }).replace(/{{\s*date\s*}}/gi, p).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, p));
            return window.app.foldManager.save(r, s), r
        } catch (r) {
            console.error(`Failed to create file: '${d}'`, r), new g.Notice("Unable to create new file.")
        }
    }

    function Je(a, t) {
        return t[b(a, "month")] ?? null
    }

    function Ze() {
        let a = {};
        if (!Pe()) return a;
        let {vault: t} = window.app, {folder: e} = L(), n = t.getAbstractFileByPath(g.normalizePath(e));
        if (!n) throw new ee("Failed to find monthly notes folder");
        return g.Vault.recurseChildren(n, i => {
            if (i instanceof g.TFile) {
                let o = O(i, "month");
                if (o) {
                    let s = b(o, "month");
                    a[s] = i
                }
            }
        }), a
    }

    var te = class extends Error {
    };

    async function Xe(a) {
        let {vault: t} = window.app, {template: e, format: n, folder: i} = x(), [o, s] = await A(e), p = a.format(n),
            d = await C(i, p);
        try {
            let r = await t.create(d, o.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, y, N, k, T, v) => {
                let f = window.moment(),
                    m = a.clone().set({hour: f.get("hour"), minute: f.get("minute"), second: f.get("second")});
                return N && m.add(parseInt(k, 10), T), v ? m.format(v.substring(1).trim()) : m.format(n)
            }).replace(/{{\s*date\s*}}/gi, p).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, p));
            return window.app.foldManager.save(r, s), r
        } catch (r) {
            console.error(`Failed to create file: '${d}'`, r), new g.Notice("Unable to create new file.")
        }
    }

    function et(a, t) {
        return t[b(a, "quarter")] ?? null
    }

    function tt() {
        let a = {};
        if (!Te()) return a;
        let {vault: t} = window.app, {folder: e} = x(), n = t.getAbstractFileByPath(g.normalizePath(e));
        if (!n) throw new te("Failed to find quarterly notes folder");
        return g.Vault.recurseChildren(n, i => {
            if (i instanceof g.TFile) {
                let o = O(i, "quarter");
                if (o) {
                    let s = b(o, "quarter");
                    a[s] = i
                }
            }
        }), a
    }

    var ae = class extends Error {
    };

    async function at(a) {
        let {vault: t} = window.app, {template: e, format: n, folder: i} = V(), [o, s] = await A(e), p = a.format(n),
            d = await C(i, p);
        try {
            let r = await t.create(d, o.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, y, N, k, T, v) => {
                let f = window.moment(),
                    m = a.clone().set({hour: f.get("hour"), minute: f.get("minute"), second: f.get("second")});
                return N && m.add(parseInt(k, 10), T), v ? m.format(v.substring(1).trim()) : m.format(n)
            }).replace(/{{\s*date\s*}}/gi, p).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, p));
            return window.app.foldManager.save(r, s), r
        } catch (r) {
            console.error(`Failed to create file: '${d}'`, r), new g.Notice("Unable to create new file.")
        }
    }

    function nt(a, t) {
        return t[b(a, "year")] ?? null
    }

    function it() {
        let a = {};
        if (!De()) return a;
        let {vault: t} = window.app, {folder: e} = V(), n = t.getAbstractFileByPath(g.normalizePath(e));
        if (!n) throw new ae("Failed to find yearly notes folder");
        return g.Vault.recurseChildren(n, i => {
            if (i instanceof g.TFile) {
                let o = O(i, "year");
                if (o) {
                    let s = b(o, "year");
                    a[s] = i
                }
            }
        }), a
    }

    function ot() {
        let {app: a} = window, t = a.internalPlugins.plugins["daily-notes"];
        if (t && t.enabled) return !0;
        let e = a.plugins.getPlugin("periodic-notes");
        return e && e.settings?.daily?.enabled
    }

    function ke() {
        let {app: a} = window;
        if (a.plugins.getPlugin("calendar")) return !0;
        let t = a.plugins.getPlugin("periodic-notes");
        return t && t.settings?.weekly?.enabled
    }

    function Pe() {
        let {app: a} = window, t = a.plugins.getPlugin("periodic-notes");
        return t && t.settings?.monthly?.enabled
    }

    function Te() {
        let {app: a} = window, t = a.plugins.getPlugin("periodic-notes");
        return t && t.settings?.quarterly?.enabled
    }

    function De() {
        let {app: a} = window, t = a.plugins.getPlugin("periodic-notes");
        return t && t.settings?.yearly?.enabled
    }

    function st(a) {
        let t = {day: E, week: H, month: L, quarter: x, year: V}[a];
        return t()
    }

    function rt(a, t) {
        return {day: ve, month: Ne, week: be}[a](t)
    }

    l.DEFAULT_DAILY_NOTE_FORMAT = Q;
    l.DEFAULT_MONTHLY_NOTE_FORMAT = ge;
    l.DEFAULT_QUARTERLY_NOTE_FORMAT = me;
    l.DEFAULT_WEEKLY_NOTE_FORMAT = J;
    l.DEFAULT_YEARLY_NOTE_FORMAT = he;
    l.appHasDailyNotesPluginLoaded = ot;
    l.appHasMonthlyNotesPluginLoaded = Pe;
    l.appHasQuarterlyNotesPluginLoaded = Te;
    l.appHasWeeklyNotesPluginLoaded = ke;
    l.appHasYearlyNotesPluginLoaded = De;
    l.createDailyNote = ve;
    l.createMonthlyNote = Ne;
    l.createPeriodicNote = rt;
    l.createQuarterlyNote = Xe;
    l.createWeeklyNote = be;
    l.createYearlyNote = at;
    l.getAllDailyNotes = Ke;
    l.getAllMonthlyNotes = Ze;
    l.getAllQuarterlyNotes = tt;
    l.getAllWeeklyNotes = Qe;
    l.getAllYearlyNotes = it;
    l.getDailyNote = je;
    l.getDailyNoteSettings = E;
    l.getDateFromFile = O;
    l.getDateFromPath = Be;
    l.getDateUID = b;
    l.getMonthlyNote = Je;
    l.getMonthlyNoteSettings = L;
    l.getPeriodicNoteSettings = st;
    l.getQuarterlyNote = et;
    l.getQuarterlyNoteSettings = x;
    l.getTemplateInfo = A;
    l.getWeeklyNote = Ge;
    l.getWeeklyNoteSettings = H;
    l.getYearlyNote = nt;
    l.getYearlyNoteSettings = V
});
var dt = {};
Ie(dt, {default: () => $});
module.exports = We(dt);
var M = require("obsidian");
var w = require("obsidian");
var Fe = require("obsidian");
var ce = require("obsidian");

function P(a) {
    return a ? a.extension == "md" ? a.path.slice(0, -3) : a.path : ""
}

function de(a) {
    return a.split("/").slice(-1)[0].contains(".") ? a : `${a}.md`
}

function pe(a) {
    let t = a.vault.getFiles().filter(e => ["md", "canvas"].contains(e.extension));
    if (t.length) {
        let e = Math.floor(Math.random() * t.length);
        return P(t[e])
    }
}

function ue(a) {
    return a.workspace.getActiveViewOfType(ce.View)?.getViewType() == "empty"
}

var u = _e(Me()), ne = {
    ["Daily Note"]: {
        noun: "day",
        adjective: "daily",
        create: u.createDailyNote,
        get: u.getDailyNote,
        getAll: u.getAllDailyNotes
    },
    ["Weekly Note"]: {
        noun: "week",
        adjective: "weekly",
        create: u.createWeeklyNote,
        get: u.getWeeklyNote,
        getAll: u.getAllWeeklyNotes
    },
    ["Monthly Note"]: {
        noun: "month",
        adjective: "monthly",
        create: u.createMonthlyNote,
        get: u.getMonthlyNote,
        getAll: u.getAllMonthlyNotes
    },
    ["Yearly Note"]: {
        noun: "year",
        adjective: "yearly",
        create: u.createYearlyNote,
        get: u.getYearlyNote,
        getAll: u.getAllYearlyNotes
    }
}, ie = ["Daily Note", "Weekly Note", "Monthly Note", "Yearly Note"];

async function Ae(a, t) {
    let e = t.communityPlugins["periodic-notes"], n = ne[a], i = (0, Fe.moment)().startOf(n.noun), o;
    if (Se(e)) {
        let s = n.getAll();
        Object.keys(s).length ? o = n.get(i, s) || await n.create(i) : o = await n.create(i)
    } else e.cache.initialize(), o = e.getPeriodicNote(n.noun, i) || await e.createPeriodicNote(n.noun, i);
    return P(o)
}

function Oe(a, t) {
    if (a == "Daily Note" && t.internalPlugins["daily-notes"]?.enabled) return !0;
    let e = t.communityPlugins["periodic-notes"];
    if (!e) return !1;
    if (Se(e)) {
        let n = ne[a].adjective;
        return t.communityPlugins["periodic-notes"].settings[n]?.enabled
    } else {
        let n = ne[a].noun;
        return t.communityPlugins["periodic-notes"]?.calendarSetManager?.getActiveSet()[n]?.enabled
    }
}

function W(a) {
    let t = a.internalPlugins["daily-notes"];
    return t?.enabled && t?.instance.options.autorun
}

function Se(a) {
    return (a?.manifest.version || "0").startsWith("0")
}

var Ee = ["markdown", "canvas", "kanban"], F = "Main Homepage", Y = "Mobile Homepage",
    U = (n => (n.ReplaceAll = "Replace all open notes", n.ReplaceLast = "Replace last note", n.Retain = "Keep open notes", n))(U || {}),
    oe = (i => (i.Default = "Default view", i.Reading = "Reading view", i.Source = "Editing view (Source)", i.LivePreview = "Editing view (Live Preview)", i))(oe || {}),
    R = (c => (c.File = "File", c.Workspace = "Workspace", c.Random = "Random file", c.Graph = "Graph view", c.None = "Nothing", c.DailyNote = "Daily Note", c.WeeklyNote = "Weekly Note", c.MonthlyNote = "Monthly Note", c.YearlyNote = "Yearly Note", c.MomentDate = "Date-dependent file", c))(R || {}),
    I = class {
        constructor(t, e) {
            this.lastView = void 0;
            this.openedViews = new WeakMap;
            this.name = t, this.plugin = e, this.app = e.app, this.data = e.settings.homepages[t], this.data.commands || (this.data.commands = [], this.save()), this.data?.hasRibbonIcon == !1 && this.app.workspace.onLayoutReady(async () => {
                let n = this.app.workspace.leftRibbon;
                n.items.find(i => i.id === "homepage:Open homepage").hidden = !0, n.onChange(!0), delete this.data.hasRibbonIcon, this.save()
            })
        }

        async open(t = !1) {
            if (this.plugin.hasRequiredPlugin(this.data.kind)) this.data.hideReleaseNotes && this.app.workspace.detachLeavesOfType("release-notes"); else {
                new w.Notice("Homepage cannot be opened due to plugin unavailablity.");
                return
            }
            if (this.data.kind === "Workspace") await this.launchWorkspace(); else if (this.data.kind !== "Nothing") {
                let e = this.plugin.loaded ? this.data.manualOpenMode : this.data.openMode;
                t && (e = "Keep open notes"), await this.launchLeaf(e)
            }
            if (this.data.commands) for (let e of this.data.commands) this.app.commands.executeCommandById(e)
        }

        async launchWorkspace() {
            let t = this.plugin.internalPlugins.workspaces?.instance;
            if (!(this.data.value in t.workspaces)) {
                new w.Notice(`Cannot find the workspace "${this.data.value}" to use as the homepage.`);
                return
            }
            t.loadWorkspace(this.data.value)
        }

        async launchLeaf(t) {
            let e;
            if (this.computedValue = await this.computeValue(), this.plugin.executing = !0, !(W(this.plugin) && !this.plugin.loaded)) {
                if (t !== "Replace all open notes") {
                    let n = this.getOpened();
                    if (n.length > 0) {
                        this.app.workspace.setActiveLeaf(n[0]), await this.configure(n[0]);
                        return
                    } else t == "Keep open notes" && ue(this.app) && (t = "Replace last note")
                }
                t !== "Keep open notes" && this.app.workspace.getActiveViewOfType(w.View)?.leaf.setPinned(!1), t === "Replace all open notes" && (Ee.forEach(n => this.app.workspace.detachLeavesOfType(n)), await Promise.resolve()), this.data.kind === "Graph view" ? e = await this.launchGraph(t) : e = await this.launchNote(t), e && await this.configure(e)
            }
        }

        async launchGraph(t) {
            if (t === "Keep open notes") {
                let e = this.app.workspace.getLeaf("tab");
                this.app.workspace.setActiveLeaf(e)
            }
            return this.app.commands.executeCommandById("graph:open"), this.app.workspace.getActiveViewOfType(w.View)?.leaf
        }

        async launchNote(t) {
            let e = this.app.metadataCache.getFirstLinkpathDest(this.computedValue, "/");
            if (!e) {
                if (!this.data.autoCreate) {
                    new w.Notice(`Homepage "${this.computedValue}" does not exist.`);
                    return
                }
                e = await this.app.vault.create(de(this.computedValue), "")
            }
            let n = this.app.workspace.getLeaf(t == "Keep open notes");
            return await n.openFile(e), this.app.workspace.setActiveLeaf(n), n
        }

        async configure(t) {
            this.plugin.executing = !1;
            let e = t.view;
            if (!(e instanceof w.MarkdownView)) {
                this.data.pin && e.leaf.setPinned(!0);
                return
            }
            let n = e.getState();
            if (this.data.revertView && (this.lastView = new WeakRef(e)), this.data.autoScroll) {
                let i = e.editor.lineCount();
                n.mode == "preview" ? e.previewMode.applyScroll(i - 4) : (e.editor.setCursor(i), e.editor.focus())
            }
            if (this.data.pin && e.leaf.setPinned(!0), this.data.view != "Default view") {
                switch (this.data.view) {
                    case"Editing view (Live Preview)":
                    case"Editing view (Source)":
                        n.mode = "source", n.source = this.data.view != "Editing view (Live Preview)";
                        break;
                    case"Reading view":
                        n.mode = "preview";
                        break
                }
                await e.leaf.setViewState({
                    type: "markdown",
                    state: n
                }), this.plugin.loaded && this.data.refreshDataview && this.plugin.communityPlugins.dataview?.index.touch()
            }
        }

        getOpened() {
            return this.data.kind == "Graph view" ? this.app.workspace.getLeavesOfType("graph") : Ee.flatMap(e => this.app.workspace.getLeavesOfType(e)).filter(e => P(e.view.file) == this.computedValue)
        }

        async computeValue() {
            let t = this.data.value;
            switch (this.data.kind) {
                case"Date-dependent file":
                    t = (0, w.moment)().format(this.data.value);
                    break;
                case"Random file":
                    let e = pe(this.app);
                    e && (t = e);
                    break;
                case"Daily Note":
                case"Weekly Note":
                case"Monthly Note":
                case"Yearly Note":
                    t = await Ae(this.data.kind, this.plugin);
                    break
            }
            return t
        }

        async save() {
            this.plugin.settings.homepages[this.name] = this.data, await this.plugin.saveSettings()
        }

        async revertView() {
            if (this.lastView == null || this.data.view == "Default view") return;
            let t = this.lastView.deref();
            if (!t || P(t.file) == this.computedValue) return;
            let e = t.getState(), n = this.app.vault.config, i = n.defaultViewMode || "source",
                o = n.livePreview !== void 0 ? !n.livePreview : !1;
            t.leaf.getViewState().type == "markdown" && (i != e.mode || o != e.source) && (e.mode = i, e.source = o, await t.leaf.setViewState({
                type: "markdown",
                state: e,
                active: !0
            })), this.lastView = void 0
        }

        async openWhenEmpty() {
            if (!this.plugin.loaded || this.plugin.executing) return;
            let t = this.app.workspace.getActiveViewOfType(w.View)?.leaf;
            t?.getViewState().type !== "empty" || t.parentSplit.children.length != 1 || await this.open(!0)
        }

        async apply() {
            let t = this.app.workspace.getActiveViewOfType(w.FileView);
            if (!t) return;
            let e = P(t.file);
            this.openedViews.get(t) !== e && (this.openedViews.set(t, e), e === await this.computeValue() && this.plugin.loaded && !this.plugin.executing && await this.configure(t.leaf))
        }
    };
var h = require("obsidian");
var D = require("obsidian");
var q = class extends D.AbstractInputSuggest {
    getSuggestions(e) {
        let n = this.app.vault.getAllLoadedFiles(), i = [], o = e.toLowerCase();
        return n.forEach(s => {
            s instanceof D.TFile && ["md", "canvas"].contains(s.extension) && s.path.toLowerCase().contains(o) && i.push(s)
        }), i
    }

    renderSuggestion(e, n) {
        e.extension == "md" ? n.setText(P(e)) : (n.setText(e.path.slice(0, -7)), n.insertAdjacentHTML("beforeend", '<div class="nav-file-tag" style="display:inline-block;vertical-align:middle">canvas</div>'))
    }

    selectSuggestion(e) {
        this.textInputEl.value = P(e), this.textInputEl.trigger("input"), this.close()
    }
}, B = class extends D.AbstractInputSuggest {
    getSuggestions(e) {
        let n = Object.keys(this.app.internalPlugins.plugins.workspaces?.instance.workspaces), i = e.toLowerCase();
        return n.filter(o => o.toLowerCase().contains(i))
    }

    renderSuggestion(e, n) {
        n.setText(e)
    }

    selectSuggestion(e) {
        this.textInputEl.value = e, this.textInputEl.trigger("input"), this.close()
    }
}, j = class extends D.FuzzySuggestModal {
    constructor(e) {
        super(e.plugin.app);
        this.homepage = e.plugin.homepage, this.tab = e
    }

    getItems() {
        return Object.values(this.app.commands.commands)
    }

    getItemText(e) {
        return e.name
    }

    onChooseItem(e) {
        if (e.id === "homepage:open-homepage") {
            new D.Notice("Really?");
            return
        } else this.homepage.data.commands || (this.homepage.data.commands = []);
        this.homepage.data.commands.push(e.id), this.homepage.save(), this.tab.updateCommandBox()
    }
};
var re = {
    version: 3,
    homepages: {
        [F]: {
            value: "Home",
            kind: "File",
            openOnStartup: !0,
            openMode: "Replace all open notes",
            manualOpenMode: "Keep open notes",
            view: "Default view",
            revertView: !0,
            openWhenEmpty: !1,
            refreshDataview: !1,
            autoCreate: !0,
            autoScroll: !1,
            pin: !1,
            commands: [],
            alwaysApply: !1,
            hideReleaseNotes: !1
        }
    },
    separateMobile: !1
}, se = re.homepages[F], lt = ["Random file", "Graph view", "Nothing", ...ie], K = class extends h.PluginSettingTab {
    constructor(e, n) {
        super(e, n);
        this.plugin = n, this.settings = n.settings
    }

    sanitiseNote(e) {
        return e === null || e.match(/^\s*$/) !== null ? null : (0, h.normalizePath)(e)
    }

    display() {
        let e = this.plugin.homepage.data.kind == "Workspace", n = this.plugin.homepage.data.kind, i = W(this.plugin),
            o = !1, s = document.createElement("article"), p = e ? B : q;
        this.containerEl.empty(), this.elements = {}, s.id = "nv-desc";
        let d = new h.Setting(this.containerEl).setName("Homepage").addDropdown(async r => {
            for (let c of Object.values(R)) {
                if (!this.plugin.hasRequiredPlugin(c)) if (c == this.plugin.homepage.data.kind) o = !0; else continue;
                let y = c;
                if (c == "Date-dependent file") {
                    if (!this.enableMomentOption()) continue;
                    y = "Moment (legacy)"
                }
                r.addOption(c, y)
            }
            r.setValue(this.plugin.homepage.data.kind), r.onChange(async c => {
                this.plugin.homepage.data.kind = c, await this.plugin.homepage.save(), this.display()
            })
        });
        switch (d.settingEl.id = "nv-main-setting", d.settingEl.append(s), n) {
            case"File":
                s.innerHTML = "Enter a note or canvas to use.";
                break;
            case"Workspace":
                s.innerHTML = "Enter an Obsidian workspace to use.";
                break;
            case"Graph view":
                s.innerHTML = "Your graph view will be used.";
                break;
            case"Nothing":
                s.innerHTML = "Nothing will occur by default. Any commands added will still take effect.";
                break;
            case"Date-dependent file":
                s.innerHTML = `<span class="mod-warning">This type is deprecated and will eventually be removed. It is only available since you have previously chosen it. Use Daily/Weekly/Monthly/Yearly Note instead, which works natively with Daily and Periodic Notes.</span><br>
				Enter a note or canvas to use based on <a href="https://momentjs.com/docs/#/displaying/format/" target="_blank" rel="noopener">Moment date formatting</a>.`;
                break;
            case"Random file":
                s.innerHTML = "A random note or canvas from your Obsidian folder will be selected.";
                break;
            case"Daily Note":
                s.innerHTML = "Your Daily Note or Periodic Daily Note will be used.";
                break;
            case"Weekly Note":
            case"Monthly Note":
            case"Yearly Note":
                s.innerHTML = `Your Periodic ${this.plugin.homepage.data.kind} will be used.`;
                break
        }
        o && s.createDiv({
            text: "The plugin required for this homepage type isn't available.",
            attr: {class: "mod-warning"}
        }), lt.includes(n) ? d.addText(r => {
            r.setDisabled(!0)
        }) : d.addText(r => {
            new p(this.app, r.inputEl), r.setPlaceholder(se.value), r.setValue(se.value == this.plugin.homepage.data.value ? "" : this.plugin.homepage.data.value), r.onChange(async c => {
                this.plugin.homepage.data.value = this.sanitiseNote(c) || se.value, await this.plugin.homepage.save()
            })
        }), this.addToggle("Open on startup", "When launching Obsidian, open the homepage.", "openOnStartup", r => this.display()), i && (this.elements.openOnStartup.descEl.createDiv({
            text: `This setting has been disabled, as it isn't compatible with Daily Notes' "Open daily note on startup" functionality. To use it, disable the Daily Notes setting.`,
            attr: {class: "mod-warning"}
        }), this.disableSetting("openOnStartup")), this.addToggle("Open when empty", "When there are no tabs open, open the homepage.", "openWhenEmpty"), this.addToggle("Use when opening normally", "Use homepage settings when opening it normally, such as from a link or the file browser.", "alwaysApply"), new h.Setting(this.containerEl).setName("Separate mobile homepage").setDesc("For mobile devices, store the homepage and its settings separately.").addToggle(r => r.setValue(this.plugin.settings.separateMobile).onChange(async c => {
            this.plugin.settings.separateMobile = c, this.plugin.homepage = this.plugin.getHomepage(), await this.plugin.saveSettings(), this.display()
        })), this.addHeading("Commands", "commandsHeading"), this.containerEl.createDiv({
            cls: "nv-command-desc setting-item-description",
            text: "Select commands that will be executed when opening the homepage."
        }), this.commandBox = this.containerEl.createDiv({cls: "nv-command-box"}), this.updateCommandBox(), this.addHeading("Vault environment", "vaultHeading"), this.addDropdown("Opening method", "Determine how extant tabs and views are affected on startup.", "openMode", U), this.addDropdown("Manual opening method", "Determine how extant tabs and views are affected when opening with commands or the ribbon button.", "manualOpenMode", U), this.addToggle("Auto-create", "If the homepage doesn't exist, create a note with the specified name.", "autoCreate"), this.addToggle("Pin", "Pin the homepage when opening.", "pin"), this.addToggle("Hide release notes", "Never display release notes when Obsidian updates.", "hideReleaseNotes"), this.addHeading("Opened view", "paneHeading"), this.addDropdown("Homepage view", "Choose what view to open the homepage in.", "view", oe), this.addToggle("Revert view on close", "When navigating away from the homepage, restore the default view.", "revertView"), this.addToggle("Auto-scroll", "When opening the homepage, scroll to the bottom and focus on the last line.", "autoScroll"), "dataview" in this.plugin.communityPlugins && (this.addToggle("Refresh Dataview", "Always attempt to reload Dataview views when opening the homepage.", "refreshDataview"), this.elements.refreshDataview.descEl.createDiv({
            text: "Requires Dataview auto-refresh to be enabled.",
            attr: {class: "mod-warning"}
        })), h.Platform.isMobile || new h.ButtonComponent(this.containerEl).setButtonText("Copy debug info").setClass("nv-debug-button").onClick(async () => await this.copyDebugInfo()), (e || n === "Nothing") && this.disableSettings("openWhenEmpty", "alwaysApply", "vaultHeading", "openMode", "manualOpenMode", "autoCreate", "pin"), (e || ["Nothing", "Graph view"].includes(n)) && this.disableSettings("paneHeading", "view", "revertView", "autoScroll", "refreshDataview"), (!this.plugin.homepage.data.openOnStartup || i) && this.disableSetting("openMode"), ie.includes(this.plugin.homepage.data.kind) && this.disableSetting("autoCreate")
    }

    disableSetting(e) {
        this.elements[e]?.settingEl.setAttribute("nv-greyed", "")
    }

    disableSettings(...e) {
        e.forEach(n => this.disableSetting(n))
    }

    addHeading(e, n) {
        let i = new h.Setting(this.containerEl).setHeading().setName(e);
        this.elements[n] = i
    }

    addDropdown(e, n, i, o, s) {
        let p = new h.Setting(this.containerEl).setName(e).setDesc(n).addDropdown(async d => {
            for (let r of Object.values(o)) d.addOption(r, r);
            d.setValue(this.plugin.homepage.data[i]), d.onChange(async r => {
                this.plugin.homepage.data[i] = r, await this.plugin.homepage.save(), s && s(r)
            })
        });
        this.elements[i] = p
    }

    addToggle(e, n, i, o) {
        let s = new h.Setting(this.containerEl).setName(e).setDesc(n).addToggle(p => p.setValue(this.plugin.homepage.data[i]).onChange(async d => {
            this.plugin.homepage.data[i] = d, await this.plugin.homepage.save(), o && o(d)
        }));
        this.elements[i] = s
    }

    updateCommandBox() {
        this.commandBox.innerHTML = "";
        for (let [e, n] of this.plugin.homepage.data.commands.entries()) {
            let i = this.app.commands.findCommand(n);
            if (!i) continue;
            let o = this.commandBox.createDiv({cls: "nv-command-pill", text: i.name});
            new h.ButtonComponent(o).setIcon("trash-2").setClass("clickable-icon").onClick(() => {
                this.plugin.homepage.data.commands.splice(e, 1), this.plugin.homepage.save(), this.updateCommandBox()
            })
        }
        new h.ButtonComponent(this.commandBox).setClass("nv-command-add-button").setButtonText("Add...").onClick(() => {
            new j(this).open()
        })
    }

    enableMomentOption() {
        return this.plugin.homepage.data.kind == "Date-dependent file" || window.homepageLegacyOptionsEnabled
    }

    async copyDebugInfo() {
        let e = this.app.vault.config, n = {
            ...this.settings,
            _defaultViewMode: e.defaultViewMode || "default",
            _livePreview: e.livePreview !== void 0 ? e.livePreview : "default",
            _focusNewTab: e.focusNewTab !== void 0 ? e.focusNewTab : "default",
            _plugins: Object.keys(this.plugin.communityPlugins),
            _internalPlugins: Object.values(this.plugin.internalPlugins).flatMap(i => i.enabled ? [i.instance.id] : []),
            _obsidianVersion: window.electron.ipcRenderer.sendSync("version")
        };
        await navigator.clipboard.writeText(JSON.stringify(n)), new h.Notice("Copied homepage debug information to clipboard")
    }
};
var ct = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"><path d="M10.025 21H6v-7H3v-1.5L12 3l9 9.5V14h-3v7h-4v-7h-3.975v7Z" style="fill:none;stroke:currentColor;stroke-width:2px"/></svg>',
    $ = class extends M.Plugin {
        constructor() {
            super(...arguments);
            this.loaded = !1;
            this.executing = !1;
            this.onLayoutChange = async () => {
                this.homepage.data.revertView && await this.homepage.revertView(), this.homepage.data.openWhenEmpty && await this.homepage.openWhenEmpty(), this.homepage.data.alwaysApply && await this.homepage.apply()
            }
        }

        async onload() {
            let e = document.body.querySelector(".progress-bar") !== null;
            this.settings = await this.loadSettings(), this.internalPlugins = this.app.internalPlugins.plugins, this.communityPlugins = this.app.plugins.plugins, this.homepage = this.getHomepage(), this.app.workspace.onLayoutReady(async () => {
                let n = this.communityPlugins["new-tab-default-page"],
                    i = this.homepage.data.openOnStartup && e && !this.hasUrlParams();
                n && (n._checkForNewTab = n.checkForNewTab, n.checkForNewTab = async o => {
                    if (!(this && this.executing)) return await n._checkForNewTab(o)
                }), i && await this.homepage.open(), this.loaded = !0
            }), (0, M.addIcon)("homepage", ct), this.addRibbonIcon("homepage", "Open homepage", n => this.homepage.open(n.button == 1 || n.button == 2 || M.Keymap.isModifier(n, "Mod"))).setAttribute("id", "nv-homepage-icon"), this.registerEvent(this.app.workspace.on("layout-change", this.onLayoutChange)), this.addSettingTab(new K(this.app, this)), this.addCommand({
                id: "open-homepage",
                name: "Open homepage",
                callback: () => this.homepage.open()
            }), console.log(`Homepage: ${this.homepage.data.value} (method: ${this.homepage.data.openMode}, view: ${this.homepage.data.view}, kind: ${this.homepage.data.kind})`)
        }

        async onunload() {
            this.app.workspace.off("layout-change", this.onLayoutChange);
            let e = this.communityPlugins["new-tab-default-page"];
            e && (e.checkForNewTab = e._checkForNewTab)
        }

        getHomepage() {
            return this.settings.separateMobile && M.Platform.isMobile ? (Y in this.settings.homepages || (this.settings.homepages[Y] = {...this.settings.homepages[F]}), new I(Y, this)) : new I(F, this)
        }

        async loadSettings() {
            let e = await this.loadData();
            if (!e || e.version !== 2) return Object.assign({}, re, e);
            {
                let n = {version: 3, homepages: {}, separateMobile: !1}, i = e;
                return e.workspaceEnabled ? (i.value = i.workspace, i.kind = "Workspace") : e.useMoment ? (i.value = i.momentFormat, i.kind = "Date-dependent file") : (i.value = i.defaultNote, i.kind = "File"), i.commands = [], delete i.workspace, delete i.momentFormat, delete i.defaultNote, delete i.useMoment, delete i.workspaceEnabled, n.homepages[F] = i, n
            }
        }

        async saveSettings() {
            await this.saveData(this.settings)
        }

        hasUrlParams() {
            let e = window.OBS_ACT;
            return e && ["open", "advanced-uri"].includes(e?.action) && ("file" in e || "filepath" in e || "workspace" in e)
        }

        hasRequiredPlugin(e) {
            switch (e) {
                case"Workspace":
                    return this.internalPlugins.workspaces?.enabled;
                case"Graph view":
                    return this.internalPlugins.graph?.enabled;
                case"Daily Note":
                case"Weekly Note":
                case"Monthly Note":
                case"Yearly Note":
                    return Oe(e, this);
                default:
                    return !0
            }
        }
    };
