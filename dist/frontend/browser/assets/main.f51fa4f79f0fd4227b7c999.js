(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([[179], {
    8255: t=>{
/*        function e(t) {
            return Promise.resolve().then(()=>{
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            )
        }
        e.keys = ()=>[],
        e.resolve = e,
        e.id = 8255,
        t.exports = e
*/    }
    ,
    1116: (t,e,n)=>{
        "use strict";
        n.d(e, {
            mr: ()=>w,
            ez: ()=>M,
            K0: ()=>l,
            Do: ()=>C,
            V_: ()=>h,
            Ye: ()=>S,
            S$: ()=>v,
            mk: ()=>R,
            sg: ()=>N,
            O5: ()=>D,
            b0: ()=>b,
            lw: ()=>c,
            OU: ()=>F,
            EM: ()=>q,
            JF: ()=>$,
            NF: ()=>V,
            w_: ()=>a,
            bD: ()=>H,
            q: ()=>i,
            Mx: ()=>O,
            HT: ()=>o
        });
        var r = n(5614);
        let s = null;
        function i() {
            return s
        }
        function o(t) {
            s || (s = t)
        }
        class a {
        }
        const l = new r.OlP("DocumentToken");
        let c = (()=>{
            class t {
                historyGo(t) {
                    throw new Error("Not implemented")
                }
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)
    */        }
            ,
            t.\u0275prov = (0,
            r.Yz7)({
                factory: u,
                token: t,
                providedIn: "platform"
            }),
            t
        }
        )();
        function u() {
            return (0,
            r.LFG)(d)
        }
        const h = new r.OlP("Location Initialized");
        let d = (()=>{
            class t extends c {
                constructor(t) {
                    super(),
                    this._doc = t,
                    this._init()
                }
                _init() {
                    this.location = window.location,
                    this._history = window.history
                }
                getBaseHrefFromDOM() {
                    return i().getBaseHref(this._doc)
                }
                onPopState(t) {
                    const e = i().getGlobalEventTarget(this._doc, "window");
                    return e.addEventListener("popstate", t, !1),
                    ()=>e.removeEventListener("popstate", t)
                }
                onHashChange(t) {
                    const e = i().getGlobalEventTarget(this._doc, "window");
                    return e.addEventListener("hashchange", t, !1),
                    ()=>e.removeEventListener("hashchange", t)
                }
            /*    get href() {
                    return this.location.href
                }
                get protocol() {
                    return this.location.protocol
                }
                get hostname() {
                    return this.location.hostname
                }
                get port() {
                    return this.location.port
                }*/
                get pathname() {
                    return this.location.pathname
                }
                get search() {
                    return this.location.search
                }
                get hash() {
                    return this.location.hash
                }
            /*    set pathname(t) {
                    this.location.pathname = t
                }*/
                pushState(t, e, n) {
                    f() ? this._history.pushState(t, e, n) : this.location.hash = n
                }
                replaceState(t, e, n) {
                    f() ? this._history.replaceState(t, e, n) : this.location.hash = n
                }
            /*    forward() {
                    this._history.forward()
                }
                back() {
                    this._history.back()
                }
                historyGo(t=0) {
                    this._history.go(t)
                }
                getState() {
                    return this._history.state
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(r.LFG(l))
    */        }
            ,
            t.\u0275prov = (0,
            r.Yz7)({
                factory: p,
                token: t,
                providedIn: "platform"
            }),
            t
        }
        )();
        function f() {
            return !!window.history.pushState
        }
        function p() {
            return new d((0,
            r.LFG)(l))
        }
        function g(t, e) {
            if (0 == t.length)
                return e;
            if (0 == e.length)
                return t;
            let n = 0;
            return t.endsWith("/") && n++,
            e.startsWith("/") && n++,
            2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }
        function m(t) {
            const e = t.match(/#|\?|$/)
              , n = e && e.index || t.length;
            return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }
        function y(t) {
            return t && "?" !== t[0] ? "?" + t : t
        }
        let v = (()=>{
            class t {
    /*           historyGo(t) {
                    throw new Error("Not implemented")
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)
    */        }
            ,
            t.\u0275prov = (0,
            r.Yz7)({
                factory: _,
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        function _(t) {
    /*        const e = (0,
            r.LFG)(l).location;
            return new b((0,
            r.LFG)(c),e && e.origin || "")
    */    }
        const w = new r.OlP("appBaseHref");
        let b = (()=>{
            class t extends v {
                constructor(t, e) {
                    if (super(),
                    this._platformLocation = t,
                    this._removeListenerFns = [],
                    null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                    null == e)
                        throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    this._baseHref = e
                }
            /*    ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }*/
                onPopState(t) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t))
                }
                getBaseHref() {
                    return this._baseHref
                }
                prepareExternalUrl(t) {
                    return g(this._baseHref, t)
                }
                path(t=!1) {
                    const e = this._platformLocation.pathname + y(this._platformLocation.search)
                      , n = this._platformLocation.hash;
                    return n && t ? `${e}${n}` : e
                }
                pushState(t, e, n, r) {
                    const s = this.prepareExternalUrl(n + y(r));
                    this._platformLocation.pushState(t, e, s)
                }
                replaceState(t, e, n, r) {
                    const s = this.prepareExternalUrl(n + y(r));
                    this._platformLocation.replaceState(t, e, s)
                }
    /*            forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                historyGo(t=0) {
                    var e, n;
                    null === (n = (e = this._platformLocation).historyGo) || void 0 === n || n.call(e, t)
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(r.LFG(c),r.LFG(w, 8))
    */        }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , C = (()=>{
    /*        class t extends v {
                constructor(t, e) {
                    super(),
                    this._platformLocation = t,
                    this._baseHref = "",
                    this._removeListenerFns = [],
                    null != e && (this._baseHref = e)
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(t) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t))
                }
                getBaseHref() {
                    return this._baseHref
                }
                path(t=!1) {
                    let e = this._platformLocation.hash;
                    return null == e && (e = "#"),
                    e.length > 0 ? e.substring(1) : e
                }
                prepareExternalUrl(t) {
                    const e = g(this._baseHref, t);
                    return e.length > 0 ? "#" + e : e
                }
                pushState(t, e, n, r) {
                    let s = this.prepareExternalUrl(n + y(r));
                    0 == s.length && (s = this._platformLocation.pathname),
                    this._platformLocation.pushState(t, e, s)
                }
                replaceState(t, e, n, r) {
                    let s = this.prepareExternalUrl(n + y(r));
                    0 == s.length && (s = this._platformLocation.pathname),
                    this._platformLocation.replaceState(t, e, s)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                historyGo(t=0) {
                    var e, n;
                    null === (n = (e = this._platformLocation).historyGo) || void 0 === n || n.call(e, t)
                }
            }*/
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(r.LFG(c),r.LFG(w, 8))
    */        }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , S = (()=>{
            class t {
                constructor(t, e) {
                    this._subject = new r.vpe,
                    this._urlChangeListeners = [],
                    this._platformStrategy = t;
                    const n = this._platformStrategy.getBaseHref();
                    this._platformLocation = e,
                    this._baseHref = m(T(n)),
                    this._platformStrategy.onPopState(t=>{
            /*            this._subject.emit({
                            url: this.path(!0),
                            pop: !0,
                            state: t.state,
                            type: t.type
                        })
            */        }
                    )
                }
                path(t=!1) {
                    return this.normalize(this._platformStrategy.path(t))
                }
            /*    getState() {
                    return this._platformLocation.getState()
                }*/
                isCurrentPathEqualTo(t, e="") {
                    return this.path() == this.normalize(t + y(e))
                }
                normalize(e) {
                    return t.stripTrailingSlash(function(t, e) {
                        return t && e.startsWith(t) ? e.substring(t.length) : e
                    }(this._baseHref, T(e)))
                }
                prepareExternalUrl(t) {
                    return t && "/" !== t[0] && (t = "/" + t),
                    this._platformStrategy.prepareExternalUrl(t)
                }
                go(t, e="", n=null) {
                    this._platformStrategy.pushState(n, "", t, e),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                }
                replaceState(t, e="", n=null) {
                    this._platformStrategy.replaceState(n, "", t, e),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                }
    /*            forward() {
                    this._platformStrategy.forward()
                }
                back() {
                    this._platformStrategy.back()
                }
                historyGo(t=0) {
                    var e, n;
                    null === (n = (e = this._platformStrategy).historyGo) || void 0 === n || n.call(e, t)
                }
                onUrlChange(t) {
                    this._urlChangeListeners.push(t),
                    this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(t=>{
                        this._notifyUrlChangeListeners(t.url, t.state)
                    }
                    ))
                }*/
                _notifyUrlChangeListeners(t="", e) {
                    this._urlChangeListeners.forEach(n=>n(t, e))
                }
                subscribe(t, e, n) {
                    return this._subject.subscribe({
                        next: t,
                        error: e,
                        complete: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.LFG(v),r.LFG(c))
            }
            ,
            t.normalizeQueryParams = y,
            t.joinWithSlash = g,
            t.stripTrailingSlash = m,
            t.\u0275prov = (0,
            r.Yz7)({
                factory: x,
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        function x() {
    /*        return new S((0,
            r.LFG)(v),(0,
            r.LFG)(c))
    */    }
        function T(t) {
            return t.replace(/\/index.html$/, "")
        }
        var E = function(t) {
            return t[t.Zero = 0] = "Zero",
            t[t.One = 1] = "One",
            t[t.Two = 2] = "Two",
            t[t.Few = 3] = "Few",
            t[t.Many = 4] = "Many",
            t[t.Other = 5] = "Other",
            t
        }({});
        const A = r.kL8;
        class k {
        }
        let I = (()=>{
    /*        class t extends k {
                constructor(t) {
                    super(),
                    this.locale = t
                }
                getPluralCategory(t, e) {
                    switch (A(e || this.locale)(t)) {
                    case E.Zero:
                        return "zero";
                    case E.One:
                        return "one";
                    case E.Two:
                        return "two";
                    case E.Few:
                        return "few";
                    case E.Many:
                        return "many";
                    default:
                        return "other"
                    }
                }
            }*/
            return t.\u0275fac = function(e) {
        /*        return new (e || t)(r.LFG(r.soG))
        */    }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
    /*    function O(t, e) {
            e = encodeURIComponent(e);
            for (const n of t.split(";")) {
                const t = n.indexOf("=")
                  , [r,s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
                if (r.trim() === e)
                    return decodeURIComponent(s)
            }
            return null
        }*/
        let R = (()=>{
            class t {
                constructor(t, e, n, r) {
                    this._iterableDiffers = t,
                    this._keyValueDiffers = e,
                    this._ngEl = n,
                    this._renderer = r,
                    this._iterableDiffer = null,
                    this._keyValueDiffer = null,
                    this._initialClasses = [],
                    this._rawClass = null
                }
                set klass(t) {
                    this._removeClasses(this._initialClasses),
                    this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [],
                    this._applyClasses(this._initialClasses),
                    this._applyClasses(this._rawClass)
                }
                set ngClass(t) {
                    this._removeClasses(this._rawClass),
                    this._applyClasses(this._initialClasses),
                    this._iterableDiffer = null,
                    this._keyValueDiffer = null,
                    this._rawClass = "string" == typeof t ? t.split(/\s+/) : t,
                    this._rawClass && ((0,
                    r.sIi)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                }
                ngDoCheck() {
                    if (this._iterableDiffer) {
                        const t = this._iterableDiffer.diff(this._rawClass);
                        t && this._applyIterableChanges(t)
                    } else if (this._keyValueDiffer) {
                        const t = this._keyValueDiffer.diff(this._rawClass);
                        t && this._applyKeyValueChanges(t)
                    }
                }
                _applyKeyValueChanges(t) {
                    t.forEachAddedItem(t=>this._toggleClass(t.key, t.currentValue)),
                    t.forEachChangedItem(t=>this._toggleClass(t.key, t.currentValue)),
                    t.forEachRemovedItem(t=>{
            /*            t.previousValue && this._toggleClass(t.key, !1)
            */        }
                    )
                }
    /*            _applyIterableChanges(t) {
                    t.forEachAddedItem(t=>{
                        if ("string" != typeof t.item)
                            throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,
                            r.AaK)(t.item)}`);
                        this._toggleClass(t.item, !0)
                    }
                    ),
                    t.forEachRemovedItem(t=>this._toggleClass(t.item, !1))
                }*/
                _applyClasses(t) {
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(t=>this._toggleClass(t, !0)) : Object.keys(t).forEach(e=>this._toggleClass(e, !!t[e])))
                }
                _removeClasses(t) {
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(t=>this._toggleClass(t, !1)) : Object.keys(t).forEach(t=>this._toggleClass(t, !1)))
                }
                _toggleClass(t, e) {
                    (t = t.trim()) && t.split(/\s+/g).forEach(t=>{
                        e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(r.ZZ4),r.Y36(r.aQg),r.Y36(r.SBq),r.Y36(r.Qsj))
            }
            ,
            t.\u0275dir = r.lG2({
                type: t,
                selectors: [["", "ngClass", ""]],
                inputs: {
                    klass: ["class", "klass"],
                    ngClass: "ngClass"
                }
            }),
            t
        }
        )();
        class P {
            constructor(t, e, n, r) {
                this.$implicit = t,
                this.ngForOf = e,
                this.index = n,
                this.count = r
            }
    /*        get first() {
                return 0 === this.index
            }
            get last() {
                return this.index === this.count - 1
            }
            get even() {
                return this.index % 2 == 0
            }
            get odd() {
                return !this.even
            }*/
            
        }
        let N = (()=>{
            class t {
                constructor(t, e, n) {
                    this._viewContainer = t,
                    this._template = e,
                    this._differs = n,
                    this._ngForOf = null,
                    this._ngForOfDirty = !0,
                    this._differ = null
                }
                set ngForOf(t) {
                    this._ngForOf = t,
                    this._ngForOfDirty = !0
                }
                set ngForTrackBy(t) {
                    this._trackByFn = t
                }
                get ngForTrackBy() {
                    return this._trackByFn
                }
            /*    set ngForTemplate(t) {
                    t && (this._template = t)
                }*/
                ngDoCheck() {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        const n = this._ngForOf;
                        if (!this._differ && n)
                            try {
                                this._differ = this._differs.find(n).create(this.ngForTrackBy)
                            } catch (e) {
                                throw new Error(`Cannot find a differ supporting object '${n}' of type '${t = n,
                                t.name || typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                            }
                    }
                    var t;
                    if (this._differ) {
                        const t = this._differ.diff(this._ngForOf);
                        t && this._applyChanges(t)
                    }
                }
                _applyChanges(t) {
                    const e = [];
                    t.forEachOperation((t,n,r)=>{
                        if (null == t.previousIndex) {
                            const n = this._viewContainer.createEmbeddedView(this._template, new P(null,this._ngForOf,-1,-1), null === r ? void 0 : r)
                              , s = new L(t,n);
                            e.push(s)
                        } else if (null == r)
                            this._viewContainer.remove(null === n ? void 0 : n);
                        else if (null !== n) {
                            const s = this._viewContainer.get(n);
                            this._viewContainer.move(s, r);
                            const i = new L(t,s);
                            e.push(i)
                        }
                    }
                    );
                    for (let n = 0; n < e.length; n++)
                        this._perViewChange(e[n].view, e[n].record);
                    for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                        const t = this._viewContainer.get(n);
                        t.context.index = n,
                        t.context.count = r,
                        t.context.ngForOf = this._ngForOf
                    }
                    t.forEachIdentityChange(t=>{
                        this._viewContainer.get(t.currentIndex).context.$implicit = t.item
                    }
                    )
                }
                _perViewChange(t, e) {
                    t.context.$implicit = e.item
                }
                static ngTemplateContextGuard(t, e) {
    /*                return !0
    */            }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(r.s_b),r.Y36(r.Rgc),r.Y36(r.ZZ4))
            }
            ,
            t.\u0275dir = r.lG2({
                type: t,
                selectors: [["", "ngFor", "", "ngForOf", ""]],
                inputs: {
                    ngForOf: "ngForOf",
                    ngForTrackBy: "ngForTrackBy",
                    ngForTemplate: "ngForTemplate"
                }
            }),
            t
        }
        )();
        class L {
            constructor(t, e) {
                this.record = t,
                this.view = e
            }
        }
        let D = (()=>{
            class t {
                constructor(t, e) {
                    this._viewContainer = t,
                    this._context = new U,
                    this._thenTemplateRef = null,
                    this._elseTemplateRef = null,
                    this._thenViewRef = null,
                    this._elseViewRef = null,
                    this._thenTemplateRef = e
                }
                set ngIf(t) {
                    this._context.$implicit = this._context.ngIf = t,
                    this._updateView()
                }
    /*            set ngIfThen(t) {
                    j("ngIfThen", t),
                    this._thenTemplateRef = t,
                    this._thenViewRef = null,
                    this._updateView()
                }
                set ngIfElse(t) {
                    j("ngIfElse", t),
                    this._elseTemplateRef = t,
                    this._elseViewRef = null,
                    this._updateView()
                }*/
                _updateView() {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(),
                    this._elseViewRef = null,
                    this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(),
                    this._thenViewRef = null,
                    this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                }
                static ngTemplateContextGuard(t, e) {
            /*        return !0
            */    }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(r.s_b),r.Y36(r.Rgc))
            }
            ,
            t.\u0275dir = r.lG2({
                type: t,
                selectors: [["", "ngIf", ""]],
                inputs: {
                    ngIf: "ngIf",
                    ngIfThen: "ngIfThen",
                    ngIfElse: "ngIfElse"
                }
            }),
            t
        }
        )();
        class U {
            constructor() {
                this.$implicit = null,
                this.ngIf = null
            }
        }
    /*    function j(t, e) {
            if (e && !e.createEmbeddedView)
                throw new Error(`${t} must be a TemplateRef, but received '${(0,
                r.AaK)(e)}'.`)
        }*/
        let F = (()=>{
            class t {
                transform(e, n, s) {
                    if (null == e)
                        return null;
                    if (!this.supports(e))
                        throw function(t, e) {
                /*            return Error(`InvalidPipeArgument: '${e}' for pipe '${(0,
                            r.AaK)(t)}'`)
                */        }(t, e);
                    return e.slice(n, s)
                }
                supports(t) {
                    return "string" == typeof t || Array.isArray(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275pipe = r.Yjl({
                name: "slice",
                type: t,
                pure: !1
            }),
            t
        }
        )()
          , M = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = r.oAB({
                type: t
            }),
            t.\u0275inj = r.cJS({
                providers: [{
                    provide: k,
                    useClass: I
                }]
            }),
            t
        }
        )();
        const H = "browser";
        function V(t) {
            return t === H
        }
        let q = (()=>{
            class t {
            }
            return t.\u0275prov = (0,
            r.Yz7)({
                token: t,
                providedIn: "root",
                factory: ()=>new Z((0,
                r.LFG)(l),window)
            }),
            t
        }
        )();
        class Z {
            constructor(t, e) {
                this.document = t,
                this.window = e,
                this.offset = ()=>[0, 0]
            }
    /*        setOffset(t) {
                this.offset = Array.isArray(t) ? ()=>t : t
            }*/
            getScrollPosition() {
                return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
            }
    /*        scrollToPosition(t) {
                this.supportsScrolling() && this.window.scrollTo(t[0], t[1])
            }
            scrollToAnchor(t) {
                if (!this.supportsScrolling())
                    return;
                const e = function(t, e) {
                    const n = t.getElementById(e) || t.getElementsByName(e)[0];
                    if (n)
                        return n;
                    if ("function" == typeof t.createTreeWalker && t.body && (t.body.createShadowRoot || t.body.attachShadow)) {
                        const n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT);
                        let r = n.currentNode;
                        for (; r; ) {
                            const t = r.shadowRoot;
                            if (t) {
                                const n = t.getElementById(e) || t.querySelector(`[name="${e}"]`);
                                if (n)
                                    return n
                            }
                            r = n.nextNode()
                        }
                    }
                    return null
                }(this.document, t);
                e && (this.scrollToElement(e),
                this.attemptFocus(e))
            }
            setHistoryScrollRestoration(t) {
                if (this.supportScrollRestoration()) {
                    const e = this.window.history;
                    e && e.scrollRestoration && (e.scrollRestoration = t)
                }
            }
            scrollToElement(t) {
                const e = t.getBoundingClientRect()
                  , n = e.left + this.window.pageXOffset
                  , r = e.top + this.window.pageYOffset
                  , s = this.offset();
                this.window.scrollTo(n - s[0], r - s[1])
            }
            attemptFocus(t) {
                return t.focus(),
                this.document.activeElement === t
            }
            supportScrollRestoration() {
                try {
                    if (!this.supportsScrolling())
                        return !1;
                    const t = z(this.window.history) || z(Object.getPrototypeOf(this.window.history));
                    return !(!t || !t.writable && !t.set)
                } catch (t) {
                    return !1
                }
            }*/
            supportsScrolling() {
                try {
                    return !!this.window && !!this.window.scrollTo && "pageXOffset"in this.window
                } catch (t) {
                    return !1
                }
            }
        }
/*        function z(t) {
            return Object.getOwnPropertyDescriptor(t, "scrollRestoration")
        }*/
        class $ {
        }
    }
    ,
    5614: (t,e,n)=>{
        "use strict";
        n.d(e, {
            deG: ()=>sn,
            tb: ()=>kl,
            AFp: ()=>Sl,
            ip1: ()=>bl,
            CZH: ()=>Cl,
            hGG: ()=>bc,
            z2F: ()=>hc,
            sBO: ()=>xa,
            Sil: ()=>Ml,
            _Vd: ()=>Wo,
            EJc: ()=>Rl,
            SBq: ()=>Jo,
            qLn: ()=>wr,
            vpe: ()=>nl,
            gxx: ()=>oi,
            tBr: ()=>Tn,
            XFs: ()=>R,
            OlP: ()=>rn,
            zs3: ()=>bi,
            ZZ4: ()=>ya,
            aQg: ()=>_a,
            soG: ()=>Ol,
            YKP: ()=>La,
            v3s: ()=>fc,
            h0i: ()=>Na,
            PXZ: ()=>oc,
            R0b: ()=>ql,
            FiY: ()=>En,
            Lbi: ()=>Al,
            g9A: ()=>El,
            Qsj: ()=>ea,
            FYo: ()=>ta,
            JOm: ()=>xr,
            Tiy: ()=>ra,
            q3G: ()=>fr,
            tp0: ()=>An,
            EAV: ()=>mc,
            Rgc: ()=>Ia,
            dDg: ()=>Yl,
            DyG: ()=>on,
            GfV: ()=>sa,
            s_b: ()=>Ua,
            ifc: ()=>j,
            eFA: ()=>ac,
            G48: ()=>sc,
            Gpc: ()=>g,
            X6Q: ()=>rc,
            _c5: ()=>_c,
            VLi: ()=>Jl,
            c2e: ()=>Il,
            zSh: ()=>li,
            wAp: ()=>Lo,
            vHH: ()=>v,
            EiD: ()=>hr,
            mCW: ()=>Wn,
            qzn: ()=>jn,
            JVY: ()=>Mn,
            pB0: ()=>Zn,
            eBb: ()=>Vn,
            L6k: ()=>Hn,
            LAX: ()=>qn,
            cg1: ()=>Ro,
            Tjo: ()=>vc,
            kL8: ()=>Po,
            yhl: ()=>Fn,
            dqk: ()=>q,
            sIi: ()=>Ri,
            CqO: ()=>Yi,
            QGY: ()=>Gi,
            F4k: ()=>Wi,
            RDi: ()=>Et,
            AaK: ()=>d,
            z3N: ()=>Un,
            qOj: ()=>Si,
            TTD: ()=>wt,
            _Bn: ()=>$o,
            xp6: ()=>hs,
            uIk: ()=>Ui,
            Tol: ()=>fo,
            ekj: ()=>ho,
            Suo: ()=>ml,
            Xpm: ()=>X,
            lG2: ()=>ot,
            Yz7: ()=>C,
            cJS: ()=>S,
            oAB: ()=>rt,
            Yjl: ()=>at,
            Y36: ()=>Hi,
            _UZ: ()=>$i,
            qZA: ()=>zi,
            TgZ: ()=>Zi,
            EpF: ()=>Bi,
            n5z: ()=>Je,
            Ikx: ()=>Ao,
            LFG: ()=>Cn,
            $8M: ()=>tn,
            NdJ: ()=>Qi,
            CRH: ()=>yl,
            oxw: ()=>Xi,
            ALo: ()=>Xa,
            Dn7: ()=>tl,
            Hsn: ()=>no,
            F$t: ()=>eo,
            Q6J: ()=>Vi,
            s9C: ()=>ro,
            VKq: ()=>Ka,
            iGM: ()=>pl,
            MAs: ()=>Mi,
            Jf7: ()=>Cr,
            CHM: ()=>zt,
            LSH: ()=>pr,
            kYT: ()=>st,
            YNc: ()=>Fi,
            _uU: ()=>So,
            Oqu: ()=>xo,
            hij: ()=>To,
            HOy: ()=>Eo,
            Gf: ()=>gl
        });
        var r = n(3559)
          , s = n(7570)
          , i = n(8318)
          , o = n(1906)
          , a = n(6598)
          , l = n(1564);
        function c() {
            return new r.xQ
        }
        function u(t) {
            for (let e in t)
                if (t[e] === u)
                    return e;
            throw Error("Could not find renamed property on target object.")
        }
        function h(t, e) {
            for (const n in e)
                e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }
        function d(t) {
            if ("string" == typeof t)
                return t;
            if (Array.isArray(t))
                return "[" + t.map(d).join(", ") + "]";
            if (null == t)
                return "" + t;
            if (t.overriddenName)
                return `${t.overriddenName}`;
            if (t.name)
                return `${t.name}`;
            const e = t.toString();
            if (null == e)
                return "" + e;
            const n = e.indexOf("\n");
            return -1 === n ? e : e.substring(0, n)
        }
        function f(t, e) {
            return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }
        const p = u({
            __forward_ref__: u
        });
        function g(t) {
            return t.__forward_ref__ = g,
            t.toString = function() {
        /*        return d(this())
        */
            }
            ,
            t
        }
        function m(t) {
            return y(t) ? t() : t
        }
        function y(t) {
            return "function" == typeof t && t.hasOwnProperty(p) && t.__forward_ref__ === g
        }
    /*    class v extends Error {
            constructor(t, e) {
                super(function(t, e) {
                    return `${t ? `NG0${t}: ` : ""}${e}`
                }(t, e)),
                this.code = t
            }
        }*/
        function _(t) {
            return "string" == typeof t ? t : null == t ? "" : String(t)
        }
    /*    function w(t) {
            return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : _(t)
        }
        function b(t, e) {
            const n = e ? ` in ${e}` : "";
            throw new v("201",`No provider for ${w(t)} found${n}`)
        }*/
        function C(t) {
            return {
                token: t.token,
                providedIn: t.providedIn || null,
                factory: t.factory,
                value: void 0
            }
        }
        function S(t) {
            return {
                providers: t.providers || [],
                imports: t.imports || []
            }
        }
        function x(t) {
            return T(t, A) || T(t, I)
        }
        function T(t, e) {
            return t.hasOwnProperty(e) ? t[e] : null
        }
        function E(t) {
            return t && (t.hasOwnProperty(k) || t.hasOwnProperty(O)) ? t[k] : null
        }
        const A = u({
            "\u0275prov": u
        })
          , k = u({
            "\u0275inj": u
        })
          , I = u({
            ngInjectableDef: u
        })
          , O = u({
            ngInjectorDef: u
        });
        var R = function(t) {
            return t[t.Default = 0] = "Default",
            t[t.Host = 1] = "Host",
            t[t.Self = 2] = "Self",
            t[t.SkipSelf = 4] = "SkipSelf",
            t[t.Optional = 8] = "Optional",
            t
        }({});
        let P;
        function N(t) {
            const e = P;
            return P = t,
            e
        }
    /*    function L(t, e, n) {
            const r = x(t);
            return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & R.Optional ? null : void 0 !== e ? e : void b(d(t), "Injector")
        }*/
        function D(t) {
            return {
                toString: t
            }.toString()
        }
        var U = function(t) {
            return t[t.OnPush = 0] = "OnPush",
            t[t.Default = 1] = "Default",
            t
        }({})
          , j = function(t) {
            return t[t.Emulated = 0] = "Emulated",
            t[t.None = 2] = "None",
            t[t.ShadowDom = 3] = "ShadowDom",
            t
        }({});
        const F = "undefined" != typeof globalThis && globalThis
          , M = "undefined" != typeof window && window
          , H = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self
          , V = "undefined" != typeof global && global
          , q = F || V || M || H
          , Z = {}
          , z = []
          , $ = u({
            "\u0275cmp": u
        })
          , B = u({
            "\u0275dir": u
        })
          , G = u({
            "\u0275pipe": u
        })
          , W = u({
            "\u0275mod": u
        })
          , Y = u({
            "\u0275loc": u
        })
          , Q = u({
            "\u0275fac": u
        })
          , K = u({
            __NG_ELEMENT_ID__: u
        });
        let J = 0;
        function X(t) {
            return D(()=>{
                const e = {}
                  , n = {
                    type: t.type,
                    providersResolver: null,
                    decls: t.decls,
                    vars: t.vars,
                    factory: null,
                    template: t.template || null,
                    consts: t.consts || null,
                    ngContentSelectors: t.ngContentSelectors,
                    hostBindings: t.hostBindings || null,
                    hostVars: t.hostVars || 0,
                    hostAttrs: t.hostAttrs || null,
                    contentQueries: t.contentQueries || null,
                    declaredInputs: e,
                    inputs: null,
                    outputs: null,
                    exportAs: t.exportAs || null,
                    onPush: t.changeDetection === U.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: t.selectors || z,
                    viewQuery: t.viewQuery || null,
                    features: t.features || null,
                    data: t.data || {},
                    encapsulation: t.encapsulation || j.Emulated,
                    id: "c",
                    styles: t.styles || z,
                    _: null,
                    setInput: null,
                    schemas: t.schemas || null,
                    tView: null
                }
                  , r = t.directives
                  , s = t.features
                  , i = t.pipes;
                return n.id += J++,
                n.inputs = it(t.inputs, e),
                n.outputs = it(t.outputs),
                s && s.forEach(t=>t(n)),
                n.directiveDefs = r ? ()=>("function" == typeof r ? r() : r).map(tt) : null,
                n.pipeDefs = i ? ()=>("function" == typeof i ? i() : i).map(et) : null,
                n
            }
            )
        }
        function tt(t) {
            return lt(t) || function(t) {
                return t[B] || null
            }(t)
        }
        function et(t) {
            return function(t) {
                return t[G] || null
            }(t)
        }
        const nt = {};
        function rt(t) {
            return D(()=>{
                const e = {
                    type: t.type,
                    bootstrap: t.bootstrap || z,
                    declarations: t.declarations || z,
                    imports: t.imports || z,
                    exports: t.exports || z,
                    transitiveCompileScopes: null,
                    schemas: t.schemas || null,
                    id: t.id || null
                };
                return null != t.id && (nt[t.id] = t.type),
                e
            }
            )
        }
    /*    function st(t, e) {
            return D(()=>{
                const n = ct(t, !0);
                n.declarations = e.declarations || z,
                n.imports = e.imports || z,
                n.exports = e.exports || z
            }
            )
        }*/
        function it(t, e) {
            if (null == t)
                return Z;
            const n = {};
            for (const r in t)
                if (t.hasOwnProperty(r)) {
                    let s = t[r]
                      , i = s;
                    Array.isArray(s) && (i = s[1],
                    s = s[0]),
                    n[s] = r,
                    e && (e[s] = i)
                }
            return n
        }
        const ot = X;
        function at(t) {
            return {
                type: t.type,
                name: t.name,
                factory: null,
                pure: !1 !== t.pure,
                onDestroy: t.type.prototype.ngOnDestroy || null
            }
        }
        function lt(t) {
            return t[$] || null
        }
        function ct(t, e) {
            const n = t[W] || null;
            if (!n && !0 === e)
                throw new Error(`Type ${d(t)} does not have '\u0275mod' property.`);
            return n
        }
        const ut = 20
          , ht = 10;
        function dt(t) {
            return Array.isArray(t) && "object" == typeof t[1]
        }
        function ft(t) {
            return Array.isArray(t) && !0 === t[1]
        }
        function pt(t) {
            return 0 != (8 & t.flags)
        }
        function gt(t) {
            return 2 == (2 & t.flags)
        }
        function mt(t) {
            return 1 == (1 & t.flags)
        }
        function yt(t) {
            return null !== t.template
        }
        function vt(t, e) {
            return t.hasOwnProperty(Q) ? t[Q] : null
        }
        class _t {
            constructor(t, e, n) {
                this.previousValue = t,
                this.currentValue = e,
                this.firstChange = n
            }
    /*        isFirstChange() {
                return this.firstChange
            }*/
        }
        function wt() {
            return bt
        }
        function bt(t) {
            return t.type.prototype.ngOnChanges && (t.setInput = St),
            Ct
        }
        function Ct() {
            const t = xt(this)
              , e = null == t ? void 0 : t.current;
            if (e) {
                const n = t.previous;
                if (n === Z)
                    t.previous = e;
                else
                    for (let t in e)
                        n[t] = e[t];
                t.current = null,
                this.ngOnChanges(e)
            }
        }
        function St(t, e, n, r) {
            const s = xt(t) || function(t, e) {
                return t.__ngSimpleChanges__ = e
            }(t, {
                previous: Z,
                current: null
            })
              , i = s.current || (s.current = {})
              , o = s.previous
              , a = this.declaredInputs[n]
              , l = o[a];
            i[a] = new _t(l && l.currentValue,e,o === Z),
            t[r] = e
        }
        function xt(t) {
            return t.__ngSimpleChanges__ || null
        }
        let Tt;
        function Et(t) {
            Tt = t
        }
        function At(t) {
            return !!t.listen
        }
        wt.ngInherit = !0;
        const kt = {
            createRenderer: (t,e)=>void 0 !== Tt ? Tt : "undefined" != typeof document ? document : void 0
        };
        function It(t) {
            for (; Array.isArray(t); )
                t = t[0];
            return t
        }
        function Ot(t, e) {
            return It(e[t])
        }
        function Rt(t, e) {
            return It(e[t.index])
        }
        function Pt(t, e) {
            return t.data[e]
        }
        function Nt(t, e) {
            return t[e]
        }
        function Lt(t, e) {
            const n = e[t];
            return dt(n) ? n : n[0]
        }
        function Dt(t) {
            return 4 == (4 & t[2])
        }
        function Ut(t) {
            return 128 == (128 & t[2])
        }
        function jt(t, e) {
            return null == e ? null : t[e]
        }
        function Ft(t) {
            t[18] = 0
        }
    /*    function Mt(t, e) {
            t[5] += e;
            let n = t
              , r = t[3];
            for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]); )
                r[5] += e,
                n = r,
                r = r[3]
        }*/
        const Ht = {
            lFrame: ue(null),
            bindingsEnabled: !0,
            isInCheckNoChangesMode: !1
        };
        function Vt() {
            return Ht.bindingsEnabled
        }
        function qt() {
            return Ht.lFrame.lView
        }
        function Zt() {
            return Ht.lFrame.tView
        }
        function zt(t) {
            return Ht.lFrame.contextLView = t,
            t[8]
        }
        function $t() {
            let t = Bt();
            for (; null !== t && 64 === t.type; )
                t = t.parent;
            return t
        }
        function Bt() {
            return Ht.lFrame.currentTNode
        }
        function Gt(t, e) {
            const n = Ht.lFrame;
            n.currentTNode = t,
            n.isParent = e
        }
        function Wt() {
            return Ht.lFrame.isParent
        }
        function Yt() {
            Ht.lFrame.isParent = !1
        }
        function Qt() {
            return Ht.isInCheckNoChangesMode
        }
    /*    function Kt(t) {
            Ht.isInCheckNoChangesMode = t
        }*/
        function Jt() {
            const t = Ht.lFrame;
            let e = t.bindingRootIndex;
            return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex),
            e
        }
        function Xt() {
            return Ht.lFrame.bindingIndex
        }
        function te() {
            return Ht.lFrame.bindingIndex++
        }
        function ee(t) {
            const e = Ht.lFrame
              , n = e.bindingIndex;
            return e.bindingIndex = e.bindingIndex + t,
            n
        }
        function ne(t, e) {
            const n = Ht.lFrame;
            n.bindingIndex = n.bindingRootIndex = t,
            re(e)
        }
        function re(t) {
            Ht.lFrame.currentDirectiveIndex = t
        }
        function se() {
            return Ht.lFrame.currentQueryIndex
        }
        function ie(t) {
            Ht.lFrame.currentQueryIndex = t
        }
    /*    function oe(t) {
            const e = t[1];
            return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null
        }*/
        function ae(t, e, n) {
            if (n & R.SkipSelf) {
                let r = e
                  , s = t;
                for (; r = r.parent,
                !(null !== r || n & R.Host || (r = oe(s),
                null === r) || (s = s[15],
                10 & r.type)); )
                    ;
                if (null === r)
                    return !1;
                e = r,
                t = s
            }
            const r = Ht.lFrame = ce();
            return r.currentTNode = e,
            r.lView = t,
            !0
        }
        function le(t) {
            const e = ce()
              , n = t[1];
            Ht.lFrame = e,
            e.currentTNode = n.firstChild,
            e.lView = t,
            e.tView = n,
            e.contextLView = t,
            e.bindingIndex = n.bindingStartIndex,
            e.inI18n = !1
        }
        function ce() {
            const t = Ht.lFrame
              , e = null === t ? null : t.child;
            return null === e ? ue(t) : e
        }
        function ue(t) {
            const e = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: t,
                child: null,
                inI18n: !1
            };
            return null !== t && (t.child = e),
            e
        }
        function he() {
            const t = Ht.lFrame;
            return Ht.lFrame = t.parent,
            t.currentTNode = null,
            t.lView = null,
            t
        }
        const de = he;
        function fe() {
            const t = he();
            t.isParent = !0,
            t.tView = null,
            t.selectedIndex = -1,
            t.contextLView = null,
            t.elementDepthCount = 0,
            t.currentDirectiveIndex = -1,
            t.currentNamespace = null,
            t.bindingRootIndex = -1,
            t.bindingIndex = -1,
            t.currentQueryIndex = 0
        }
        function pe() {
            return Ht.lFrame.selectedIndex
        }
        function ge(t) {
            Ht.lFrame.selectedIndex = t
        }
        function me() {
            const t = Ht.lFrame;
            return Pt(t.tView, t.selectedIndex)
        }
        function ye(t, e) {
            for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
                const e = t.data[n].type.prototype
                  , {ngAfterContentInit: r, ngAfterContentChecked: s, ngAfterViewInit: i, ngAfterViewChecked: o, ngOnDestroy: a} = e;
                r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
                s && ((t.contentHooks || (t.contentHooks = [])).push(n, s),
                (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
                i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
                o && ((t.viewHooks || (t.viewHooks = [])).push(n, o),
                (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
                null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a)
            }
        }
        function ve(t, e, n) {
            be(t, e, 3, n)
        }
        function _e(t, e, n, r) {
            (3 & t[2]) === n && be(t, e, n, r)
        }
        function we(t, e) {
            let n = t[2];
            (3 & n) === e && (n &= 2047,
            n += 1,
            t[2] = n)
        }
        function be(t, e, n, r) {
            const s = null != r ? r : -1
              , i = e.length - 1;
            let o = 0;
            for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++)
                if ("number" == typeof e[a + 1]) {
                    if (o = e[a],
                    null != r && o >= r)
                        break
                } else
                    e[a] < 0 && (t[18] += 65536),
                    (o < s || -1 == s) && (Ce(t, n, e, a),
                    t[18] = (4294901760 & t[18]) + a + 2),
                    a++
        }
        function Ce(t, e, n, r) {
            const s = n[r] < 0
              , i = n[r + 1]
              , o = t[s ? -n[r] : n[r]];
            if (s) {
                if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
                    t[2] += 2048;
                    try {
                        i.call(o)
                    } finally {}
                }
            } else
                try {
                    i.call(o)
                } finally {}
        }
        const Se = -1;
        class xe {
            constructor(t, e, n) {
                this.factory = t,
                this.resolving = !1,
                this.canSeeViewProviders = e,
                this.injectImpl = n
            }
        }
        function Te(t, e, n) {
            const r = At(t);
            let s = 0;
            for (; s < n.length; ) {
                const i = n[s];
                if ("number" == typeof i) {
                    if (0 !== i)
                        break;
                    s++;
                    const o = n[s++]
                      , a = n[s++]
                      , l = n[s++];
                    r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
                } else {
                    const o = i
                      , a = n[++s];
                    Ae(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a),
                    s++
                }
            }
            return s
        }
        function Ee(t) {
            return 3 === t || 4 === t || 6 === t
        }
        function Ae(t) {
            return 64 === t.charCodeAt(0)
        }
        function ke(t, e) {
            if (null === e || 0 === e.length)
                ;
            else if (null === t || 0 === t.length)
                t = e.slice();
            else {
                let n = -1;
                for (let r = 0; r < e.length; r++) {
                    const s = e[r];
                    "number" == typeof s ? n = s : 0 === n || Ie(t, n, s, null, -1 === n || 2 === n ? e[++r] : null)
                }
            }
            return t
        }
        function Ie(t, e, n, r, s) {
            let i = 0
              , o = t.length;
            if (-1 === e)
                o = -1;
            else
                for (; i < t.length; ) {
                    const n = t[i++];
                    if ("number" == typeof n) {
                        if (n === e) {
                            o = -1;
                            break
                        }
                        if (n > e) {
                            o = i - 1;
                            break
                        }
                    }
                }
            for (; i < t.length; ) {
                const e = t[i];
                if ("number" == typeof e)
                    break;
                if (e === n) {
                    if (null === r)
                        return void (null !== s && (t[i + 1] = s));
                    if (r === t[i + 1])
                        return void (t[i + 2] = s)
                }
                i++,
                null !== r && i++,
                null !== s && i++
            }
            -1 !== o && (t.splice(o, 0, e),
            i = o + 1),
            t.splice(i++, 0, n),
            null !== r && t.splice(i++, 0, r),
            null !== s && t.splice(i++, 0, s)
        }
        function Oe(t) {
            return t !== Se
        }
        function Re(t) {
            return 32767 & t
        }
        function Pe(t, e) {
            let n = t >> 16
              , r = e;
            for (; n > 0; )
                r = r[15],
                n--;
            return r
        }
        let Ne = !0;
        function Le(t) {
            const e = Ne;
            return Ne = t,
            e
        }
        let De = 0;
        function Ue(t, e) {
            const n = Fe(t, e);
            if (-1 !== n)
                return n;
            const r = e[1];
            r.firstCreatePass && (t.injectorIndex = e.length,
            je(r.data, t),
            je(e, null),
            je(r.blueprint, null));
            const s = Me(t, e)
              , i = t.injectorIndex;
            if (Oe(s)) {
                const t = Re(s)
                  , n = Pe(s, e)
                  , r = n[1].data;
                for (let s = 0; s < 8; s++)
                    e[i + s] = n[t + s] | r[t + s]
            }
            return e[i + 8] = s,
            i
        }
        function je(t, e) {
            t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }
        function Fe(t, e) {
            return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }
        function Me(t, e) {
            if (t.parent && -1 !== t.parent.injectorIndex)
                return t.parent.injectorIndex;
            let n = 0
              , r = null
              , s = e;
            for (; null !== s; ) {
                const t = s[1]
                  , e = t.type;
                if (r = 2 === e ? t.declTNode : 1 === e ? s[6] : null,
                null === r)
                    return Se;
                if (n++,
                s = s[15],
                -1 !== r.injectorIndex)
                    return r.injectorIndex | n << 16
            }
            return Se
        }
        function He(t, e, n) {
            !function(t, e, n) {
                let r;
                "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(K) && (r = n[K]),
                null == r && (r = n[K] = De++);
                const s = 255 & r;
                e.data[t + (s >> 5)] |= 1 << s
            }(t, e, n)
        }
        function Ve(t, e, n) {
            if (n & R.Optional)
                return t;
            b(e, "NodeInjector")
        }
        function qe(t, e, n, r) {
            if (n & R.Optional && void 0 === r && (r = null),
            0 == (n & (R.Self | R.Host))) {
                const s = t[9]
                  , i = N(void 0);
                try {
                    return s ? s.get(e, r, n & R.Optional) : L(e, r, n & R.Optional)
                } finally {
                    N(i)
                }
            }
            return Ve(r, e, n)
        }
        function Ze(t, e, n, r=R.Default, s) {
            if (null !== t) {
                const i = function(t) {
                    if ("string" == typeof t)
                        return t.charCodeAt(0) || 0;
                    const e = t.hasOwnProperty(K) ? t[K] : void 0;
                    return "number" == typeof e ? e >= 0 ? 255 & e : $e : e
                }(n);
                if ("function" == typeof i) {
                    if (!ae(e, t, r))
                        return r & R.Host ? Ve(s, n, r) : qe(e, n, r, s);
                    try {
                        const t = i(r);
                        if (null != t || r & R.Optional)
                            return t;
                        b(n)
                    } finally {
                        de()
                    }
                } else if ("number" == typeof i) {
                    let s = null
                      , o = Fe(t, e)
                      , a = Se
                      , l = r & R.Host ? e[16][6] : null;
                    for ((-1 === o || r & R.SkipSelf) && (a = -1 === o ? Me(t, e) : e[o + 8],
                    a !== Se && Qe(r, !1) ? (s = e[1],
                    o = Re(a),
                    e = Pe(a, e)) : o = -1); -1 !== o; ) {
                        const t = e[1];
                        if (Ye(i, o, t.data)) {
                            const t = Be(o, e, n, s, r, l);
                            if (t !== ze)
                                return t
                        }
                        a = e[o + 8],
                        a !== Se && Qe(r, e[1].data[o + 8] === l) && Ye(i, o, e) ? (s = t,
                        o = Re(a),
                        e = Pe(a, e)) : o = -1
                    }
                }
            }
            return qe(e, n, r, s)
        }
        const ze = {};
        function $e() {
            return new Ke($t(),qt())
        }
        function Be(t, e, n, r, s, i) {
            const o = e[1]
              , a = o.data[t + 8]
              , l = Ge(a, o, n, null == r ? gt(a) && Ne : r != o && 0 != (3 & a.type), s & R.Host && i === a);
            return null !== l ? We(e, o, l, a) : ze
        }
        function Ge(t, e, n, r, s) {
            const i = t.providerIndexes
              , o = e.data
              , a = 1048575 & i
              , l = t.directiveStart
              , c = i >> 20
              , u = s ? a + c : t.directiveEnd;
            for (let h = r ? a : a + c; h < u; h++) {
                const t = o[h];
                if (h < l && n === t || h >= l && t.type === n)
                    return h
            }
            if (s) {
                const t = o[l];
                if (t && yt(t) && t.type === n)
                    return l
            }
            return null
        }
        function We(t, e, n, r) {
            let s = t[n];
            const i = e.data;
            if (s instanceof xe) {
                const o = s;
                o.resolving && function(t, e) {
            /*        throw new v("200",`Circular dependency in DI detected for ${t}`)
            */    }(w(i[n]));
                const a = Le(o.canSeeViewProviders);
                o.resolving = !0;
                const l = o.injectImpl ? N(o.injectImpl) : null;
                ae(t, r, R.Default);
                try {
                    s = t[n] = o.factory(void 0, i, t, r),
                    e.firstCreatePass && n >= r.directiveStart && function(t, e, n) {
                        const {ngOnChanges: r, ngOnInit: s, ngDoCheck: i} = e.type.prototype;
                        if (r) {
                            const r = bt(e);
                            (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                            (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)
                        }
                        s && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                        i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                        (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i))
                    }(n, i[n], e)
                } finally {
                    null !== l && N(l),
                    Le(a),
                    o.resolving = !1,
                    de()
                }
            }
            return s
        }
        function Ye(t, e, n) {
            return !!(n[e + (t >> 5)] & 1 << t)
        }
        function Qe(t, e) {
            return !(t & R.Self || t & R.Host && e)
        }
        class Ke {
            constructor(t, e) {
                this._tNode = t,
                this._lView = e
            }
            get(t, e) {
                return Ze(this._tNode, this._lView, t, void 0, e)
            }
        }
    /*    function Je(t) {
            return D(()=>{
                const e = t.prototype.constructor
                  , n = e[Q] || Xe(e)
                  , r = Object.prototype;
                let s = Object.getPrototypeOf(t.prototype).constructor;
                for (; s && s !== r; ) {
                    const t = s[Q] || Xe(s);
                    if (t && t !== n)
                        return t;
                    s = Object.getPrototypeOf(s)
                }
                return t=>new t
            }
            )
        }
        function Xe(t) {
            return y(t) ? ()=>{
                const e = Xe(m(t));
                return e && e()
            }
            : vt(t)
        }*/
        function tn(t) {
            return function(t, e) {
                if ("class" === e)
                    return t.classes;
                if ("style" === e)
                    return t.styles;
                const n = t.attrs;
                if (n) {
                    const t = n.length;
                    let r = 0;
                    for (; r < t; ) {
                        const s = n[r];
                        if (Ee(s))
                            break;
                        if (0 === s)
                            r += 2;
                        else if ("number" == typeof s)
                            for (r++; r < t && "string" == typeof n[r]; )
                                r++;
                        else {
                            if (s === e)
                                return n[r + 1];
                            r += 2
                        }
                    }
                }
                return null
            }($t(), t)
        }
        const en = "__parameters__";
        function nn(t, e, n) {
            return D(()=>{
                const r = function(t) {
                    return function(...e) {
                        if (t) {
                            const n = t(...e);
                            for (const t in n)
                                this[t] = n[t]
                        }
                    }
                }(e);
                function s(...t) {
                    if (this instanceof s)
                        return r.apply(this, t),
                        this;
                    const e = new s(...t);
                    return n.annotation = e,
                    n;
            /*        function n(t, n, r) {
                        const s = t.hasOwnProperty(en) ? t[en] : Object.defineProperty(t, en, {
                            value: []
                        })[en];
                        for (; s.length <= r; )
                            s.push(null);
                        return (s[r] = s[r] || []).push(e),
                        t
                    }*/
                }
                return n && (s.prototype = Object.create(n.prototype)),
                s.prototype.ngMetadataName = t,
                s.annotationCls = s,
                s
            }
            )
        }
        class rn {
            constructor(t, e) {
                this._desc = t,
                this.ngMetadataName = "InjectionToken",
                this.\u0275prov = void 0,
                "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = C({
                    token: this,
                    providedIn: e.providedIn || "root",
                    factory: e.factory
                }))
            }
    /*        toString() {
                return `InjectionToken ${this._desc}`
            }*/
        }
        const sn = new rn("AnalyzeForEntryComponents")
          , on = Function;
        function an(t, e) {
            void 0 === e && (e = t);
            for (let n = 0; n < t.length; n++) {
                let r = t[n];
                Array.isArray(r) ? (e === t && (e = t.slice(0, n)),
                an(r, e)) : e !== t && e.push(r)
            }
            return e
        }
        function ln(t, e) {
            t.forEach(t=>Array.isArray(t) ? ln(t, e) : e(t))
        }
        function cn(t, e, n) {
            e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }
        function un(t, e) {
            return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }
    /*    function hn(t, e) {
            const n = [];
            for (let r = 0; r < t; r++)
                n.push(e);
            return n
        }*/
        function dn(t, e, n) {
            let r = pn(t, e);
            return r >= 0 ? t[1 | r] = n : (r = ~r,
            function(t, e, n, r) {
                let s = t.length;
                if (s == e)
                    t.push(n, r);
                else if (1 === s)
                    t.push(r, t[0]),
                    t[0] = n;
                else {
                    for (s--,
                    t.push(t[s - 1], t[s]); s > e; )
                        t[s] = t[s - 2],
                        s--;
                    t[e] = n,
                    t[e + 1] = r
                }
            }(t, r, e, n)),
            r
        }
    /*    function fn(t, e) {
            const n = pn(t, e);
            if (n >= 0)
                return t[1 | n]
        }*/
        function pn(t, e) {
            return function(t, e, n) {
                let r = 0
                  , s = t.length >> 1;
                for (; s !== r; ) {
                    const n = r + (s - r >> 1)
                      , i = t[n << 1];
                    if (e === i)
                        return n << 1;
                    i > e ? s = n : r = n + 1
                }
                return ~(s << 1)
            }(t, e)
        }
        const gn = {}
          , mn = /\n/gm
          , yn = "__source"
          , vn = u({
            provide: String,
            useValue: u
        });
        let _n;
        function wn(t) {
            const e = _n;
            return _n = t,
            e
        }
        function bn(t, e=R.Default) {
            if (void 0 === _n)
                throw new Error("inject() must be called from an injection context");
            return null === _n ? L(t, void 0, e) : _n.get(t, e & R.Optional ? null : void 0, e)
        }
        function Cn(t, e=R.Default) {
            return (P || bn)(m(t), e)
        }
        function Sn(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) {
                const r = m(t[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length)
                        throw new Error("Arguments array must have arguments.");
                    let t, n = R.Default;
                    for (let e = 0; e < r.length; e++) {
                        const s = r[e]
                          , i = s.__NG_DI_FLAG__;
                        "number" == typeof i ? -1 === i ? t = s.token : n |= i : t = s
                    }
                    e.push(Cn(t, n))
                } else
                    e.push(Cn(r))
            }
            return e
        }
        function xn(t, e) {
            return t.__NG_DI_FLAG__ = e,
            t.prototype.__NG_DI_FLAG__ = e,
            t
        }
        const Tn = xn(nn("Inject", t=>({
            token: t
        })), -1)
          , En = xn(nn("Optional"), 8)
          , An = xn(nn("SkipSelf"), 4);
        let kn;
    /*    function In(t) {
            var e;
            return (null === (e = function() {
                if (void 0 === kn && (kn = null,
                q.trustedTypes))
                    try {
                        kn = q.trustedTypes.createPolicy("angular", {
                            createHTML: t=>t,
                            createScript: t=>t,
                            createScriptURL: t=>t
                        })
                    } catch (e) {}
                return kn
            }()) || void 0 === e ? void 0 : e.createHTML(t)) || t
        }*/
       class On {
            constructor(t) {
        /*        this.changingThisBreaksApplicationSecurity = t
        */    }
        /*    toString() {
                return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
            }*/
        }
    /*    class Rn extends On {
            getTypeName() {
                return "HTML"
            }
        }
        class Pn extends On {
            getTypeName() {
                return "Style"
            }
        }
        class Nn extends On {
            getTypeName() {
                return "Script"
            }
        }*/
    /*    class Ln extends On {
            getTypeName() {
                return "URL"
            }
        }*/
    /*    class Dn extends On {
            getTypeName() {
                return "ResourceURL"
            }
        }*/
        function Un(t) {
            return t instanceof On ? t.changingThisBreaksApplicationSecurity : t
        }
        function jn(t, e) {
            const n = Fn(t);
            if (null != n && n !== e) {
                if ("ResourceURL" === n && "URL" === e)
                    return !0;
                throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)
            }
            return n === e
        }
        function Fn(t) {
            return t instanceof On && t.getTypeName() || null
        }
    /*    function Mn(t) {
            return new Rn(t)
        }
        function Hn(t) {
            return new Pn(t)
        }
        function Vn(t) {
            return new Nn(t)
        }
        function qn(t) {
            return new Ln(t)
        }
        function Zn(t) {
            return new Dn(t)
        }*/
    /*    class zn {
            constructor(t) {
                this.inertDocumentHelper = t
            }
            getInertBodyElement(t) {
                t = "<body><remove></remove>" + t;
                try {
                    const e = (new window.DOMParser).parseFromString(In(t), "text/html").body;
                    return null === e ? this.inertDocumentHelper.getInertBodyElement(t) : (e.removeChild(e.firstChild),
                    e)
                } catch (e) {
                    return null
                }
            }
        }*/
    /*    class $n {
            constructor(t) {
                if (this.defaultDoc = t,
                this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),
                null == this.inertDocument.body) {
                    const t = this.inertDocument.createElement("html");
                    this.inertDocument.appendChild(t);
                    const e = this.inertDocument.createElement("body");
                    t.appendChild(e)
                }
            }
            getInertBodyElement(t) {
                const e = this.inertDocument.createElement("template");
                if ("content"in e)
                    return e.innerHTML = In(t),
                    e;
                const n = this.inertDocument.createElement("body");
                return n.innerHTML = In(t),
                this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
                n
            }
            stripCustomNsAttrs(t) {
                const e = t.attributes;
                for (let r = e.length - 1; 0 < r; r--) {
                    const n = e.item(r).name;
                    "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n)
                }
                let n = t.firstChild;
                for (; n; )
                    n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
                    n = n.nextSibling
            }
        }*/
        const Bn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi
          , Gn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
        function Wn(t) {
            return (t = String(t)).match(Bn) || t.match(Gn) ? t : "unsafe:" + t
        }
        function Yn(t) {
            const e = {};
            for (const n of t.split(","))
                e[n] = !0;
            return e
        }
        function Qn(...t) {
            const e = {};
            for (const n of t)
                for (const t in n)
                    n.hasOwnProperty(t) && (e[t] = !0);
            return e
        }
        const Kn = Yn("area,br,col,hr,img,wbr")
          , Jn = Yn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr")
          , Xn = Yn("rp,rt")
          , tr = Qn(Xn, Jn)
          , er = Qn(Kn, Qn(Jn, Yn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Qn(Xn, Yn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), tr)
          , nr = Yn("background,cite,href,itemtype,longdesc,poster,src,xlink:href")
          , rr = Yn("srcset")
          , sr = Qn(nr, rr, Yn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Yn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"))
          , ir = Yn("script,style,template");
        class or {
    /*        constructor() {
                this.sanitizedSomething = !1,
                this.buf = []
            }
            sanitizeChildren(t) {
                let e = t.firstChild
                  , n = !0;
                for (; e; )
                    if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0,
                    n && e.firstChild)
                        e = e.firstChild;
                    else
                        for (; e; ) {
                            e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                            let t = this.checkClobberedElement(e, e.nextSibling);
                            if (t) {
                                e = t;
                                break
                            }
                            e = this.checkClobberedElement(e, e.parentNode)
                        }
                return this.buf.join("")
            }
            startElement(t) {
                const e = t.nodeName.toLowerCase();
                if (!er.hasOwnProperty(e))
                    return this.sanitizedSomething = !0,
                    !ir.hasOwnProperty(e);
                this.buf.push("<"),
                this.buf.push(e);
                const n = t.attributes;
                for (let s = 0; s < n.length; s++) {
                    const t = n.item(s)
                      , e = t.name
                      , i = e.toLowerCase();
                    if (!sr.hasOwnProperty(i)) {
                        this.sanitizedSomething = !0;
                        continue
                    }
                    let o = t.value;
                    nr[i] && (o = Wn(o)),
                    rr[i] && (r = o,
                    o = (r = String(r)).split(",").map(t=>Wn(t.trim())).join(", ")),
                    this.buf.push(" ", e, '="', cr(o), '"')
                }
                var r;
                return this.buf.push(">"),
                !0
            }
            endElement(t) {
                const e = t.nodeName.toLowerCase();
                er.hasOwnProperty(e) && !Kn.hasOwnProperty(e) && (this.buf.push("</"),
                this.buf.push(e),
                this.buf.push(">"))
            }
            chars(t) {
                this.buf.push(cr(t))
            }
            checkClobberedElement(t, e) {
                if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
                    throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
                return e
            }*/
        }
        const ar = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
          , lr = /([^\#-~ |!])/g;
    /*    function cr(t) {
            return t.replace(/&/g, "&amp;").replace(ar, function(t) {
                return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
            }).replace(lr, function(t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }*/
        let ur;
    /*    function hr(t, e) {
            let n = null;
            try {
                ur = ur || function(t) {
                    const e = new $n(t);
                    return function() {
                        try {
                            return !!(new window.DOMParser).parseFromString(In(""), "text/html")
                        } catch (t) {
                            return !1
                        }
                    }() ? new zn(e) : e
                }(t);
                let r = e ? String(e) : "";
                n = ur.getInertBodyElement(r);
                let s = 5
                  , i = r;
                do {
                    if (0 === s)
                        throw new Error("Failed to sanitize html because the input is unstable");
                    s--,
                    r = i,
                    i = n.innerHTML,
                    n = ur.getInertBodyElement(r)
                } while (r !== i);
                return In((new or).sanitizeChildren(dr(n) || n))
            } finally {
                if (n) {
                    const t = dr(n) || n;
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild)
                }
            }
        }
        function dr(t) {
            return "content"in t && function(t) {
                return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            }(t) ? t.content : null
        }*/
        var fr = function(t) {
            return t[t.NONE = 0] = "NONE",
            t[t.HTML = 1] = "HTML",
            t[t.STYLE = 2] = "STYLE",
            t[t.SCRIPT = 3] = "SCRIPT",
            t[t.URL = 4] = "URL",
            t[t.RESOURCE_URL = 5] = "RESOURCE_URL",
            t
        }({});
        function pr(t) {
            const e = function() {
                const t = qt();
                return t && t[12]
            }();
            return e ? e.sanitize(fr.URL, t) || "" : jn(t, "URL") ? Un(t) : Wn(_(t))
        }
        function gr(t, e) {
            t.__ngContext__ = e
        }
        function mr(t) {
            const e = function(t) {
                return t.__ngContext__ || null
            }(t);
            return e ? Array.isArray(e) ? e : e.lView : null
        }
    /*    function yr(t) {
            return t.ngDebugContext
        }
        function vr(t) {
            return t.ngOriginalError
        }
        function _r(t, ...e) {
            t.error(...e)
        }*/
        class wr {
            constructor() {
                this._console = console
            }
    /*        handleError(t) {
                const e = this._findOriginalError(t)
                  , n = this._findContext(t)
                  , r = function(t) {
                    return t.ngErrorLogger || _r
                }(t);
                r(this._console, "ERROR", t),
                e && r(this._console, "ORIGINAL ERROR", e),
                n && r(this._console, "ERROR CONTEXT", n)
            }
            _findContext(t) {
                return t ? yr(t) ? yr(t) : this._findContext(vr(t)) : null
            }
            _findOriginalError(t) {
                let e = vr(t);
                for (; e && vr(e); )
                    e = vr(e);
                return e
            }*/
        }
        const br = (()=>("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(q))();
    /*    function Cr(t) {
            return t.ownerDocument.defaultView
        }*/
        function Sr(t) {
            return t instanceof Function ? t() : t
        }
        var xr = function(t) {
            return t[t.Important = 1] = "Important",
            t[t.DashCase = 2] = "DashCase",
            t
        }({});
    /*    function Tr(t, e) {
            return (void 0)(t, e)
        }*/
        function Er(t) {
            const e = t[3];
            return ft(e) ? e[3] : e
        }
        function Ar(t) {
            return Ir(t[13])
        }
        function kr(t) {
            return Ir(t[4])
        }
        function Ir(t) {
            for (; null !== t && !ft(t); )
                t = t[4];
            return t
        }
        function Or(t, e, n, r, s) {
            if (null != r) {
                let i, o = !1;
                ft(r) ? i = r : dt(r) && (o = !0,
                r = r[0]);
                const a = It(r);
                0 === t && null !== n ? null == s ? Fr(e, n, a) : jr(e, n, a, s || null, !0) : 1 === t && null !== n ? jr(e, n, a, s || null, !0) : 2 === t ? function(t, e, n) {
                    const r = Hr(t, e);
                    r && function(t, e, n, r) {
                        At(t) ? t.removeChild(e, n, r) : e.removeChild(n)
                    }(t, r, e, n)
                }(e, a, o) : 3 === t && e.destroyNode(a),
                null != i && function(t, e, n, r, s) {
            /*        const i = n[7];
                    i !== It(n) && Or(e, t, r, i, s);
                    for (let o = ht; o < n.length; o++) {
                        const s = n[o];
                        Wr(s[1], s, t, e, r, i)
                    }
            */    }(e, t, i, n, s)
            }
        }
        function Rr(t, e, n) {
            return At(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
        }
    /*    function Pr(t, e) {
            const n = t[9]
              , r = n.indexOf(e)
              , s = e[3];
            1024 & e[2] && (e[2] &= -1025,
            Mt(s, -1)),
            n.splice(r, 1)
        }*/
        function Nr(t, e) {
            if (t.length <= ht)
                return;
            const n = ht + e
              , r = t[n];
            if (r) {
                const i = r[17];
                null !== i && i !== t && Pr(i, r),
                e > 0 && (t[n - 1][4] = r[4]);
                const o = un(t, ht + e);
                Wr(r[1], s = r, s[11], 2, null, null),
                s[0] = null,
                s[6] = null;
                const a = o[19];
                null !== a && a.detachView(o[1]),
                r[3] = null,
                r[4] = null,
                r[2] &= -129
            }
            var s;
            return r
        }
        function Lr(t, e) {
            if (!(256 & e[2])) {
                const n = e[11];
                At(n) && n.destroyNode && Wr(t, e, n, 3, null, null),
                function(t) {
                    let e = t[13];
                    if (!e)
                        return Dr(t[1], t);
                    for (; e; ) {
                        let n = null;
                        if (dt(e))
                            n = e[13];
                        else {
                            const t = e[10];
                            t && (n = t)
                        }
                        if (!n) {
                            for (; e && !e[4] && e !== t; )
                                dt(e) && Dr(e[1], e),
                                e = e[3];
                            null === e && (e = t),
                            dt(e) && Dr(e[1], e),
                            n = e && e[4]
                        }
                        e = n
                    }
                }(e)
            }
        }
        function Dr(t, e) {
            if (!(256 & e[2])) {
                e[2] &= -129,
                e[2] |= 256,
                function(t, e) {
                    let n;
                    if (null != t && null != (n = t.destroyHooks))
                        for (let r = 0; r < n.length; r += 2) {
                            const t = e[n[r]];
                            if (!(t instanceof xe)) {
                                const e = n[r + 1];
                                if (Array.isArray(e))
                                    for (let n = 0; n < e.length; n += 2) {
                                        const r = t[e[n]]
                                          , s = e[n + 1];
                                        try {
                                            s.call(r)
                                        } finally {}
                                    }
                                else
                                    try {
                                        e.call(t)
                                    } finally {}
                            }
                        }
                }(t, e),
                function(t, e) {
                    const n = t.cleanup
                      , r = e[7];
                    let s = -1;
                    if (null !== n)
                        for (let i = 0; i < n.length - 1; i += 2)
                            if ("string" == typeof n[i]) {
                                const t = n[i + 1]
                                  , o = "function" == typeof t ? t(e) : It(e[t])
                                  , a = r[s = n[i + 2]]
                                  , l = n[i + 3];
                                "boolean" == typeof l ? o.removeEventListener(n[i], a, l) : l >= 0 ? r[s = l]() : r[s = -l].unsubscribe(),
                                i += 2
                            } else {
                                const t = r[s = n[i + 1]];
                                n[i].call(t)
                            }
                    if (null !== r) {
                        for (let t = s + 1; t < r.length; t++)
                            (0,
                            r[t])();
                        e[7] = null
                    }
                }(t, e),
                1 === e[1].type && At(e[11]) && e[11].destroy();
                const n = e[17];
                if (null !== n && ft(e[3])) {
                    n !== e[3] && Pr(n, e);
                    const r = e[19];
                    null !== r && r.detachView(t)
                }
            }
        }
        function Ur(t, e, n) {
            return function(t, e, n) {
                let r = e;
                for (; null !== r && 40 & r.type; )
                    r = (e = r).parent;
                if (null === r)
                    return n[0];
                if (2 & r.flags) {
                    const e = t.data[r.directiveStart].encapsulation;
                    if (e === j.None || e === j.Emulated)
                        return null
                }
                return Rt(r, n)
            }(t, e.parent, n)
        }
        function jr(t, e, n, r, s) {
            At(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s)
        }
        function Fr(t, e, n) {
            At(t) ? t.appendChild(e, n) : e.appendChild(n)
        }
        function Mr(t, e, n, r, s) {
            null !== r ? jr(t, e, n, r, s) : Fr(t, e, n)
        }
        function Hr(t, e) {
            return At(t) ? t.parentNode(e) : e.parentNode
        }
        function Vr(t, e, n) {
            return qr(t, e, n)
        }
        let qr = function(t, e, n) {
            return 40 & t.type ? Rt(t, n) : null
        };
        function Zr(t, e, n, r) {
            const s = Ur(t, r, e)
              , i = e[11]
              , o = Vr(r.parent || e[6], r, e);
            if (null != s)
                if (Array.isArray(n))
                    for (let a = 0; a < n.length; a++)
                        Mr(i, s, n[a], o, !1);
                else
                    Mr(i, s, n, o, !1)
        }
        function zr(t, e) {
            if (null !== e) {
                const n = e.type;
                if (3 & n)
                    return Rt(e, t);
                if (4 & n)
                    return Br(-1, t[e.index]);
                if (8 & n) {
                    const n = e.child;
                    if (null !== n)
                        return zr(t, n);
                    {
                        const n = t[e.index];
                        return ft(n) ? Br(-1, n) : It(n)
                    }
                }
                if (32 & n)
                    return Tr(e, t)() || It(t[e.index]);
                {
                    const n = $r(t, e);
                    return null !== n ? Array.isArray(n) ? n[0] : zr(Er(t[16]), n) : zr(t, e.next)
                }
            }
            return null
        }
    /*    function $r(t, e) {
            return null !== e ? t[16][6].projection[e.projection] : null
        }*/
        function Br(t, e) {
            const n = ht + t + 1;
            if (n < e.length) {
                const t = e[n]
                  , r = t[1].firstChild;
                if (null !== r)
                    return zr(t, r)
            }
            return e[7]
        }
        function Gr(t, e, n, r, s, i, o) {
            for (; null != n; ) {
                const a = r[n.index]
                  , l = n.type;
                if (o && 0 === e && (a && gr(It(a), r),
                n.flags |= 4),
                64 != (64 & n.flags))
                    if (8 & l)
                        Gr(t, e, n.child, r, s, i, !1),
                        Or(e, t, s, a, i);
                    else if (32 & l) {
                        const o = Tr(n, r);
                        let l;
                        for (; l = o(); )
                            Or(e, t, s, l, i);
                        Or(e, t, s, a, i)
                    } else
                        16 & l ? Yr(t, e, r, n, s, i) : Or(e, t, s, a, i);
                n = o ? n.projectionNext : n.next
            }
        }
        function Wr(t, e, n, r, s, i) {
            Gr(n, r, t.firstChild, e, s, i, !1)
        }
        function Yr(t, e, n, r, s, i) {
            const o = n[16]
              , a = o[6].projection[r.projection];
            if (Array.isArray(a))
                for (let l = 0; l < a.length; l++)
                    Or(e, t, s, a[l], i);
            else
                Gr(t, e, a, o[3], s, i, !0)
        }
        function Qr(t, e, n) {
            At(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }
        function Kr(t, e, n) {
            At(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }
    /*    function Jr(t, e, n) {
            let r = t.length;
            for (; ; ) {
                const s = t.indexOf(e, n);
                if (-1 === s)
                    return s;
                if (0 === s || t.charCodeAt(s - 1) <= 32) {
                    const n = e.length;
                    if (s + n === r || t.charCodeAt(s + n) <= 32)
                        return s
                }
                n = s + 1
            }
        }*/
        const Xr = "ng-template";
    /*    function ts(t, e, n) {
            let r = 0;
            for (; r < t.length; ) {
                let s = t[r++];
                if (n && "class" === s) {
                    if (s = t[r],
                    -1 !== Jr(s.toLowerCase(), e, 0))
                        return !0
                } else if (1 === s) {
                    for (; r < t.length && "string" == typeof (s = t[r++]); )
                        if (s.toLowerCase() === e)
                            return !0;
                    return !1
                }
            }
            return !1
        }*/
        function es(t) {
            return 4 === t.type && t.value !== Xr
        }
        function ns(t, e, n) {
            return e === (4 !== t.type || n ? t.value : Xr)
        }
        function rs(t, e, n) {
            let r = 4;
            const s = t.attrs || []
              , i = function(t) {
                for (let e = 0; e < t.length; e++)
                    if (Ee(t[e]))
                        return e;
                return t.length
            }(s);
            let o = !1;
            for (let a = 0; a < e.length; a++) {
                const l = e[a];
                if ("number" != typeof l) {
                    if (!o)
                        if (4 & r) {
                            if (r = 2 | 1 & r,
                            "" !== l && !ns(t, l, n) || "" === l && 1 === e.length) {
                                if (ss(r))
                                    return !1;
                                o = !0
                            }
                        } else {
                            const c = 8 & r ? l : e[++a];
                            if (8 & r && null !== t.attrs) {
                                if (!ts(t.attrs, c, n)) {
                                    if (ss(r))
                                        return !1;
                                    o = !0
                                }
                                continue
                            }
                            const u = is(8 & r ? "class" : l, s, es(t), n);
                            if (-1 === u) {
                                if (ss(r))
                                    return !1;
                                o = !0;
                                continue
                            }
                            if ("" !== c) {
                                let t;
                                t = u > i ? "" : s[u + 1].toLowerCase();
                                const e = 8 & r ? t : null;
                                if (e && -1 !== Jr(e, c, 0) || 2 & r && c !== t) {
                                    if (ss(r))
                                        return !1;
                                    o = !0
                                }
                            }
                        }
                } else {
                    if (!o && !ss(r) && !ss(l))
                        return !1;
                    if (o && ss(l))
                        continue;
                    o = !1,
                    r = l | 1 & r
                }
            }
            return ss(r) || o
        }
        function ss(t) {
            return 0 == (1 & t)
        }
        function is(t, e, n, r) {
            if (null === e)
                return -1;
            let s = 0;
            if (r || !n) {
                let n = !1;
                for (; s < e.length; ) {
                    const r = e[s];
                    if (r === t)
                        return s;
                    if (3 === r || 6 === r)
                        n = !0;
                    else {
                        if (1 === r || 2 === r) {
                            let t = e[++s];
                            for (; "string" == typeof t; )
                                t = e[++s];
                            continue
                        }
                        if (4 === r)
                            break;
                        if (0 === r) {
                            s += 4;
                            continue
                        }
                    }
                    s += n ? 1 : 2
                }
                return -1
            }
            return function(t, e) {
                let n = t.indexOf(4);
                if (n > -1)
                    for (n++; n < t.length; ) {
                        const r = t[n];
                        if ("number" == typeof r)
                            return -1;
                        if (r === e)
                            return n;
                        n++
                    }
                return -1
            }(e, t)
        }
        function os(t, e, n=!1) {
            for (let r = 0; r < e.length; r++)
                if (rs(t, e[r], n))
                    return !0;
            return !1
        }
    /*    function as(t, e) {
            t: for (let n = 0; n < e.length; n++) {
                const r = e[n];
                if (t.length === r.length) {
                    for (let e = 0; e < t.length; e++)
                        if (t[e] !== r[e])
                            continue t;
                    return !0
                }
            }
            return !1
        }
        function ls(t, e) {
            return t ? ":not(" + e.trim() + ")" : e
        }*/
        function cs(t) {
            let e = t[0]
              , n = 1
              , r = 2
              , s = ""
              , i = !1;
            for (; n < t.length; ) {
                let o = t[n];
                if ("string" == typeof o)
                    if (2 & r) {
                        const e = t[++n];
                        s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
                    } else
                        8 & r ? s += "." + o : 4 & r && (s += " " + o);
                else
                    "" === s || ss(o) || (e += ls(i, s),
                    s = ""),
                    r = o,
                    i = i || !ss(r);
                n++
            }
            return "" !== s && (e += ls(i, s)),
            e
        }
        const us = {};
        function hs(t) {
            ds(Zt(), qt(), pe() + t, Qt())
        }
        function ds(t, e, n, r) {
            if (!r)
                if (3 == (3 & e[2])) {
                    const r = t.preOrderCheckHooks;
                    null !== r && ve(e, r, n)
                } else {
                    const r = t.preOrderHooks;
                    null !== r && _e(e, r, 0, n)
                }
            ge(n)
        }
        function fs(t, e) {
            return t << 17 | e << 2
        }
        function ps(t) {
            return t >> 17 & 32767
        }
        function gs(t) {
            return 2 | t
        }
        function ms(t) {
            return (131068 & t) >> 2
        }
        function ys(t, e) {
            return -131069 & t | e << 2
        }
        function vs(t) {
            return 1 | t
        }
    /*    function _s(t, e) {
            const n = t.contentQueries;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2) {
                    const s = n[r]
                      , i = n[r + 1];
                    if (-1 !== i) {
                        const n = t.data[i];
                        ie(s),
                        n.contentQueries(2, e[i], i)
                    }
                }
        }*/
        function ws(t, e, n, r, s, i, o, a, l, c) {
            const u = e.blueprint.slice();
            return u[0] = s,
            u[2] = 140 | r,
            Ft(u),
            u[3] = u[15] = t,
            u[8] = n,
            u[10] = o || t && t[10],
            u[11] = a || t && t[11],
            u[12] = l || t && t[12] || null,
            u[9] = c || t && t[9] || null,
            u[6] = i,
            u[16] = 2 == e.type ? t[16] : u,
            u
        }
        function bs(t, e, n, r, s) {
            let i = t.data[e];
            if (null === i)
                i = function(t, e, n, r, s) {
                    const i = Bt()
                      , o = Wt()
                      , a = t.data[e] = function(t, e, n, r, s, i) {
                        return {
                            type: n,
                            index: r,
                            insertBeforeIndex: null,
                            injectorIndex: e ? e.injectorIndex : -1,
                            directiveStart: -1,
                            directiveEnd: -1,
                            directiveStylingLast: -1,
                            propertyBindings: null,
                            flags: 0,
                            providerIndexes: 0,
                            value: s,
                            attrs: i,
                            mergedAttrs: null,
                            localNames: null,
                            initialInputs: void 0,
                            inputs: null,
                            outputs: null,
                            tViews: null,
                            next: null,
                            projectionNext: null,
                            child: null,
                            parent: e,
                            projection: null,
                            styles: null,
                            stylesWithoutHost: null,
                            residualStyles: void 0,
                            classes: null,
                            classesWithoutHost: null,
                            residualClasses: void 0,
                            classBindings: 0,
                            styleBindings: 0
                        }
                    }(0, o ? i : i && i.parent, n, e, r, s);
                    return null === t.firstChild && (t.firstChild = a),
                    null !== i && (o ? null == i.child && null !== a.parent && (i.child = a) : null === i.next && (i.next = a)),
                    a
                }(t, e, n, r, s),
                Ht.lFrame.inI18n && (i.flags |= 64);
            else if (64 & i.type) {
                i.type = n,
                i.value = r,
                i.attrs = s;
                const t = function() {
            /*        const t = Ht.lFrame
                      , e = t.currentTNode;
                    return t.isParent ? e : e.parent
            */    }();
                i.injectorIndex = null === t ? -1 : t.injectorIndex
            }
            return Gt(i, !0),
            i
        }
        function Cs(t, e, n, r) {
            if (0 === n)
                return -1;
            const s = e.length;
            for (let i = 0; i < n; i++)
                e.push(r),
                t.blueprint.push(r),
                t.data.push(null);
            return s
        }
        function Ss(t, e, n) {
            le(e);
            try {
                const r = t.viewQuery;
                null !== r && Js(1, r, n);
                const s = t.template;
                null !== s && Es(t, e, s, 1, n),
                t.firstCreatePass && (t.firstCreatePass = !1),
                t.staticContentQueries && _s(t, e),
                t.staticViewQueries && Js(2, t.viewQuery, n);
                const i = t.components;
                null !== i && function(t, e) {
                    for (let n = 0; n < e.length; n++)
                        Gs(t, e[n])
                }(e, i)
            } catch (r) {
                throw t.firstCreatePass && (t.incompleteFirstPass = !0),
                r
            } finally {
                e[2] &= -5,
                fe()
            }
        }
        function xs(t, e, n, r) {
            const s = e[2];
            if (256 == (256 & s))
                return;
            le(e);
            const i = Qt();
            try {
                Ft(e),
                Ht.lFrame.bindingIndex = t.bindingStartIndex,
                null !== n && Es(t, e, n, 2, r);
                const o = 3 == (3 & s);
                if (!i)
                    if (o) {
                        const n = t.preOrderCheckHooks;
                        null !== n && ve(e, n, null)
                    } else {
                        const n = t.preOrderHooks;
                        null !== n && _e(e, n, 0, null),
                        we(e, 0)
                    }
                if (function(t) {
                    for (let e = Ar(t); null !== e; e = kr(e)) {
                        if (!e[2])
                            continue;
                        const t = e[9];
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e]
                              , r = n[3];
                            0 == (1024 & n[2]) && Mt(r, 1),
                            n[2] |= 1024
                        }
                    }
                }(e),
                function(t) {
                    for (let e = Ar(t); null !== e; e = kr(e))
                        for (let t = ht; t < e.length; t++) {
                            const n = e[t]
                              , r = n[1];
                            Ut(n) && xs(r, n, r.template, n[8])
                        }
                }(e),
                null !== t.contentQueries && _s(t, e),
                !i)
                    if (o) {
                        const n = t.contentCheckHooks;
                        null !== n && ve(e, n)
                    } else {
                        const n = t.contentHooks;
                        null !== n && _e(e, n, 1),
                        we(e, 1)
                    }
                !function(t, e) {
                    const n = t.hostBindingOpCodes;
                    if (null !== n)
                        try {
                            for (let t = 0; t < n.length; t++) {
                                const r = n[t];
                                if (r < 0)
                                    ge(~r);
                                else {
                                    const s = r
                                      , i = n[++t]
                                      , o = n[++t];
                                    ne(i, s),
                                    o(2, e[s])
                                }
                            }
                        } finally {
                            ge(-1)
                        }
                }(t, e);
                const a = t.components;
                null !== a && function(t, e) {
                    for (let n = 0; n < e.length; n++)
                        $s(t, e[n])
                }(e, a);
                const l = t.viewQuery;
                if (null !== l && Js(2, l, r),
                !i)
                    if (o) {
                        const n = t.viewCheckHooks;
                        null !== n && ve(e, n)
                    } else {
                        const n = t.viewHooks;
                        null !== n && _e(e, n, 2),
                        we(e, 2)
                    }
                !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
                i || (e[2] &= -73),
                1024 & e[2] && (e[2] &= -1025,
                Mt(e[3], -1))
            } finally {
                fe()
            }
        }
        function Ts(t, e, n, r) {
            const s = e[10]
              , i = !Qt()
              , o = Dt(e);
            try {
                i && !o && s.begin && s.begin(),
                o && Ss(t, e, r),
                xs(t, e, n, r)
            } finally {
                i && !o && s.end && s.end()
            }
        }
        function Es(t, e, n, r, s) {
            const i = pe()
              , o = 2 & r;
            try {
                ge(-1),
                o && e.length > ut && ds(t, e, ut, Qt()),
                n(r, s)
            } finally {
                ge(i)
            }
        }
        function As(t, e, n) {
            Vt() && (function(t, e, n, r) {
                const s = n.directiveStart
                  , i = n.directiveEnd;
                t.firstCreatePass || Ue(n, e),
                gr(r, e);
                const o = n.initialInputs;
                for (let a = s; a < i; a++) {
                    const r = t.data[a]
                      , i = yt(r);
                    i && Vs(e, n, r);
                    const l = We(e, t, a, n);
                    gr(l, e),
                    null !== o && qs(0, a - s, l, r, 0, o),
                    i && (Lt(n.index, e)[8] = l)
                }
            }(t, e, n, Rt(n, e)),
            128 == (128 & n.flags) && function(t, e, n) {
                const r = n.directiveStart
                  , s = n.directiveEnd
                  , i = n.index
                  , o = Ht.lFrame.currentDirectiveIndex;
                try {
                    ge(i);
                    for (let n = r; n < s; n++) {
                        const r = t.data[n]
                          , s = e[n];
                        re(n),
                        null === r.hostBindings && 0 === r.hostVars && null === r.hostAttrs || Us(r, s)
                    }
                } finally {
                    ge(-1),
                    re(o)
                }
            }(t, e, n))
        }
        function ks(t, e, n=Rt) {
            const r = e.localNames;
            if (null !== r) {
                let s = e.index + 1;
                for (let i = 0; i < r.length; i += 2) {
                    const o = r[i + 1]
                      , a = -1 === o ? n(e, t) : t[o];
                    t[s++] = a
                }
            }
        }
        function Is(t) {
            const e = t.tView;
            return null === e || e.incompleteFirstPass ? t.tView = Os(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e
        }
        function Os(t, e, n, r, s, i, o, a, l, c) {
            const u = ut + r
              , h = u + s
              , d = function(t, e) {
                const n = [];
                for (let r = 0; r < e; r++)
                    n.push(r < t ? null : us);
                return n
            }(u, h)
              , f = "function" == typeof c ? c() : c;
            return d[1] = {
                type: t,
                blueprint: d,
                template: n,
                queries: null,
                viewQuery: a,
                declTNode: e,
                data: d.slice().fill(null, u),
                bindingStartIndex: u,
                expandoStartIndex: h,
                hostBindingOpCodes: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof i ? i() : i,
                pipeRegistry: "function" == typeof o ? o() : o,
                firstChild: null,
                schemas: l,
                consts: f,
                incompleteFirstPass: !1
            }
        }
        function Rs(t, e, n, r) {
            const s = ti(e);
            null === n ? s.push(r) : (s.push(n),
            t.firstCreatePass && ei(t).push(r, s.length - 1))
        }
        function Ps(t, e, n) {
            for (let r in t)
                if (t.hasOwnProperty(r)) {
                    const s = t[r];
                    (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : n[r] = [e, s]
                }
            return n
        }
        function Ns(t, e, n, r, s, i, o, a) {
            const l = Rt(e, n);
            let c, u = e.inputs;
            var h;
            !a && null != u && (c = u[r]) ? (ri(t, n, c, r, s),
            gt(e) && function(t, e) {
    /*            const n = Lt(e, t);
                16 & n[2] || (n[2] |= 64)
    */        }(n, e.index)) : 3 & e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h,
            s = null != o ? o(s, e.value || "", r) : s,
            At(i) ? i.setProperty(l, r, s) : Ae(r) || (l.setProperty ? l.setProperty(r, s) : l[r] = s))
        }
        function Ls(t, e, n, r) {
            let s = !1;
            if (Vt()) {
                const i = function(t, e, n) {
                    const r = t.directiveRegistry;
                    let s = null;
                    if (r)
                        for (let i = 0; i < r.length; i++) {
                            const o = r[i];
                            os(n, o.selectors, !1) && (s || (s = []),
                            He(Ue(n, e), t, o.type),
                            yt(o) ? (js(t, n),
                            s.unshift(o)) : s.push(o))
                        }
                    return s
                }(t, e, n)
                  , o = null === r ? null : {
                    "": -1
                };
                if (null !== i) {
                    s = !0,
                    Ms(n, t.data.length, i.length);
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t];
                        e.providersResolver && e.providersResolver(e)
                    }
                    let r = !1
                      , a = !1
                      , l = Cs(t, e, i.length, null);
                    for (let s = 0; s < i.length; s++) {
                        const c = i[s];
                        n.mergedAttrs = ke(n.mergedAttrs, c.hostAttrs),
                        Hs(t, n, e, l, c),
                        Fs(l, c, o),
                        null !== c.contentQueries && (n.flags |= 8),
                        null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128);
                        const u = c.type.prototype;
                        !r && (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                        r = !0),
                        a || !u.ngOnChanges && !u.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index),
                        a = !0),
                        l++
                    }
                    !function(t, e) {
                        const n = e.directiveEnd
                          , r = t.data
                          , s = e.attrs
                          , i = [];
                        let o = null
                          , a = null;
                        for (let l = e.directiveStart; l < n; l++) {
                            const t = r[l]
                              , n = t.inputs
                              , c = null === s || es(e) ? null : Zs(n, s);
                            i.push(c),
                            o = Ps(n, l, o),
                            a = Ps(t.outputs, l, a)
                        }
                        null !== o && (o.hasOwnProperty("class") && (e.flags |= 16),
                        o.hasOwnProperty("style") && (e.flags |= 32)),
                        e.initialInputs = i,
                        e.inputs = o,
                        e.outputs = a
                    }(t, n)
                }
                o && function(t, e, n) {
                    if (e) {
                        const r = t.localNames = [];
                        for (let t = 0; t < e.length; t += 2) {
                            const s = n[e[t + 1]];
                            if (null == s)
                                throw new v("301",`Export of name '${e[t + 1]}' not found!`);
                            r.push(e[t], s)
                        }
                    }
                }(n, r, o)
            }
            return n.mergedAttrs = ke(n.mergedAttrs, n.attrs),
            s
        }
        function Ds(t, e, n, r, s, i) {
            const o = i.hostBindings;
            if (o) {
                let n = t.hostBindingOpCodes;
                null === n && (n = t.hostBindingOpCodes = []);
                const i = ~e.index;
                (function(t) {
                    let e = t.length;
                    for (; e > 0; ) {
                        const n = t[--e];
                        if ("number" == typeof n && n < 0)
                            return n
                    }
                    return 0
                }
                )(n) != i && n.push(i),
                n.push(r, s, o)
            }
        }
        function Us(t, e) {
            null !== t.hostBindings && t.hostBindings(1, e)
        }
        function js(t, e) {
            e.flags |= 2,
            (t.components || (t.components = [])).push(e.index)
        }
        function Fs(t, e, n) {
            if (n) {
                if (e.exportAs)
                    for (let r = 0; r < e.exportAs.length; r++)
                        n[e.exportAs[r]] = t;
                yt(e) && (n[""] = t)
            }
        }
        function Ms(t, e, n) {
            t.flags |= 1,
            t.directiveStart = e,
            t.directiveEnd = e + n,
            t.providerIndexes = e
        }
        function Hs(t, e, n, r, s) {
            t.data[r] = s;
            const i = s.factory || (s.factory = vt(s.type))
              , o = new xe(i,yt(s),null);
            t.blueprint[r] = o,
            n[r] = o,
            Ds(t, e, 0, r, Cs(t, n, s.hostVars, us), s)
        }
        function Vs(t, e, n) {
            const r = Rt(e, t)
              , s = Is(n)
              , i = t[10]
              , o = Ws(t, ws(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n), null, null));
            t[e.index] = o
        }
        function qs(t, e, n, r, s, i) {
            const o = i[e];
            if (null !== o) {
                const t = r.setInput;
                for (let e = 0; e < o.length; ) {
                    const s = o[e++]
                      , i = o[e++]
                      , a = o[e++];
                    null !== t ? r.setInput(n, a, s, i) : n[i] = a
                }
            }
        }
        function Zs(t, e) {
            let n = null
              , r = 0;
            for (; r < e.length; ) {
                const s = e[r];
                if (0 !== s)
                    if (5 !== s) {
                        if ("number" == typeof s)
                            break;
                        t.hasOwnProperty(s) && (null === n && (n = []),
                        n.push(s, t[s], e[r + 1])),
                        r += 2
                    } else
                        r += 2;
                else
                    r += 4
            }
            return n
        }
        function zs(t, e, n, r) {
            return new Array(t,!0,!1,e,null,0,r,n,null,null)
        }
        function $s(t, e) {
            const n = Lt(e, t);
            if (Ut(n)) {
                const t = n[1];
                80 & n[2] ? xs(t, n, t.template, n[8]) : n[5] > 0 && Bs(n)
            }
        }
    /*    function Bs(t) {
            for (let n = Ar(t); null !== n; n = kr(n))
                for (let t = ht; t < n.length; t++) {
                    const e = n[t];
                    if (1024 & e[2]) {
                        const t = e[1];
                        xs(t, e, t.template, e[8])
                    } else
                        e[5] > 0 && Bs(e)
                }
            const e = t[1].components;
            if (null !== e)
                for (let n = 0; n < e.length; n++) {
                    const r = Lt(e[n], t);
                    Ut(r) && r[5] > 0 && Bs(r)
                }
        }*/
        function Gs(t, e) {
            const n = Lt(e, t)
              , r = n[1];
            !function(t, e) {
                for (let n = e.length; n < t.blueprint.length; n++)
                    e.push(t.blueprint[n])
            }(r, n),
            Ss(r, n, n[8])
        }
        function Ws(t, e) {
            return t[13] ? t[14][4] = e : t[13] = e,
            t[14] = e,
            e
        }
        function Ys(t) {
            for (; t; ) {
                t[2] |= 64;
                const e = Er(t);
                if (0 != (512 & t[2]) && !e)
                    return t;
                t = e
            }
            return null
        }
    /*    function Qs(t, e, n) {
            const r = e[10];
            r.begin && r.begin();
            try {
                xs(t, e, t.template, n)
            } catch (s) {
                throw ni(e, s),
                s
            } finally {
                r.end && r.end()
            }
        }*/
        function Ks(t) {
            !function(t) {
                for (let e = 0; e < t.components.length; e++) {
                    const n = t.components[e]
                      , r = mr(n)
                      , s = r[1];
                    Ts(s, r, s.template, n)
                }
            }(t[8])
        }
        function Js(t, e, n) {
            ie(0),
            e(t, n)
        }
        const Xs = (()=>Promise.resolve(null))();
        function ti(t) {
            return t[7] || (t[7] = [])
        }
        function ei(t) {
            return t.cleanup || (t.cleanup = [])
        }
    /*    function ni(t, e) {
            const n = t[9]
              , r = n ? n.get(wr, null) : null;
            r && r.handleError(e)
        }*/
        function ri(t, e, n, r, s) {
            for (let i = 0; i < n.length; ) {
                const o = n[i++]
                  , a = n[i++]
                  , l = e[o]
                  , c = t.data[o];
                null !== c.setInput ? c.setInput(l, s, r, a) : l[a] = s
            }
        }
        function si(t, e, n) {
            const r = Ot(e, t);
            !function(t, e, n) {
                At(t) ? t.setValue(e, n) : e.textContent = n
            }(t[11], r, n)
        }
        function ii(t, e, n) {
            let r = n ? t.styles : null
              , s = n ? t.classes : null
              , i = 0;
            if (null !== e)
                for (let o = 0; o < e.length; o++) {
                    const t = e[o];
                    "number" == typeof t ? i = t : 1 == i ? s = f(s, t) : 2 == i && (r = f(r, t + ": " + e[++o] + ";"))
                }
            n ? t.styles = r : t.stylesWithoutHost = r,
            n ? t.classes = s : t.classesWithoutHost = s
        }
        const oi = new rn("INJECTOR",-1);
        class ai {
            get(t, e=gn) {
                if (e === gn) {
                    const e = new Error(`NullInjectorError: No provider for ${d(t)}!`);
                    throw e.name = "NullInjectorError",
                    e
                }
                return e
            }
        }
        const li = new rn("Set Injector scope.")
          , ci = {}
          , ui = {};
        let hi;
        function di() {
            return void 0 === hi && (hi = new ai),
            hi
        }
        function fi(t, e=null, n=null, r) {
            return new pi(t,n,e || di(),r)
        }
        class pi {
            constructor(t, e, n, r=null) {
                this.parent = n,
                this.records = new Map,
                this.injectorDefTypes = new Set,
                this.onDestroy = new Set,
                this._destroyed = !1;
                const s = [];
                e && ln(e, n=>this.processProvider(n, t, e)),
                ln([t], t=>this.processInjectorType(t, [], s)),
                this.records.set(oi, yi(void 0, this));
                const i = this.records.get(li);
                this.scope = null != i ? i.value : null,
                this.source = r || ("object" == typeof t ? null : d(t))
            }
    /*        get destroyed() {
                return this._destroyed
            }
            destroy() {
                this.assertNotDestroyed(),
                this._destroyed = !0;
                try {
                    this.onDestroy.forEach(t=>t.ngOnDestroy())
                } finally {
                    this.records.clear(),
                    this.onDestroy.clear(),
                    this.injectorDefTypes.clear()
                }
            }*/
            get(t, e=gn, n=R.Default) {
                this.assertNotDestroyed();
                const r = wn(this);
                try {
                    if (!(n & R.SkipSelf)) {
                        let e = this.records.get(t);
                        if (void 0 === e) {
                            const n = ("function" == typeof (s = t) || "object" == typeof s && s instanceof rn) && x(t);
                            e = n && this.injectableDefInScope(n) ? yi(gi(t), ci) : null,
                            this.records.set(t, e)
                        }
                        if (null != e)
                            return this.hydrate(t, e)
                    }
                    return (n & R.Self ? di() : this.parent).get(t, e = n & R.Optional && e === gn ? null : e)
                } catch (i) {
                    if ("NullInjectorError" === i.name) {
                        if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(d(t)),
                        r)
                            throw i;
                        return function(t, e, n, r) {
            /*                const s = t.ngTempTokenPath;
                            throw e[yn] && s.unshift(e[yn]),
                            t.message = function(t, e, n, r=null) {
                                t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                                let s = d(e);
                                if (Array.isArray(e))
                                    s = e.map(d).join(" -> ");
                                else if ("object" == typeof e) {
                                    let t = [];
                                    for (let n in e)
                                        if (e.hasOwnProperty(n)) {
                                            let r = e[n];
                                            t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : d(r)))
                                        }
                                    s = `{${t.join(", ")}}`
                                }
                                return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(mn, "\n  ")}`
                            }("\n" + t.message, s, n, r),
                            t.ngTokenPath = s,
                            t.ngTempTokenPath = null,
                            t
            */            }(i, t, "R3InjectorError", this.source)
                    }
                    throw i
                } finally {
                    wn(r)
                }
                var s
            }
            _resolveInjectorDefTypes() {
                this.injectorDefTypes.forEach(t=>this.get(t))
            }
    /*        toString() {
                const t = [];
                return this.records.forEach((e,n)=>t.push(d(n))),
                `R3Injector[${t.join(", ")}]`
            }*/
            assertNotDestroyed() {
                if (this._destroyed)
                    throw new Error("Injector has already been destroyed.")
            }
            processInjectorType(t, e, n) {
                if (!(t = m(t)))
                    return !1;
                let r = E(t);
                const s = null == r && t.ngModule || void 0
                  , i = void 0 === s ? t : s
                  , o = -1 !== n.indexOf(i);
                if (void 0 !== s && (r = E(s)),
                null == r)
                    return !1;
                if (null != r.imports && !o) {
                    let t;
                    n.push(i);
                    try {
                        ln(r.imports, r=>{
                            this.processInjectorType(r, e, n) && (void 0 === t && (t = []),
                            t.push(r))
                        }
                        )
                    } finally {}
                    if (void 0 !== t)
                        for (let e = 0; e < t.length; e++) {
                            const {ngModule: n, providers: r} = t[e];
                            ln(r, t=>this.processProvider(t, n, r || z))
                        }
                }
                this.injectorDefTypes.add(i);
                const a = vt(i) || (()=>new i);
                this.records.set(i, yi(a, ci));
                const l = r.providers;
                if (null != l && !o) {
                    const e = t;
                    ln(l, t=>this.processProvider(t, e, l))
                }
                return void 0 !== s && void 0 !== t.providers
            }
            processProvider(t, e, n) {
                let r = _i(t = m(t)) ? t : m(t && t.provide);
                const s = function(t, e, n) {
                    return vi(t) ? yi(void 0, t.useValue) : yi(mi(t), ci)
                }(t);
                if (_i(t) || !0 !== t.multi)
                    this.records.get(r);
                else {
                    let e = this.records.get(r);
                    e || (e = yi(void 0, ci, !0),
                    e.factory = ()=>Sn(e.multi),
                    this.records.set(r, e)),
                    r = t,
                    e.multi.push(t)
                }
                this.records.set(r, s)
            }
            hydrate(t, e) {
                var n;
                return e.value === ci && (e.value = ui,
                e.value = e.factory()),
                "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value),
                e.value
            }
            injectableDefInScope(t) {
                if (!t.providedIn)
                    return !1;
                const e = m(t.providedIn);
                return "string" == typeof e ? "any" === e || e === this.scope : this.injectorDefTypes.has(e)
            }
        }
        function gi(t) {
            const e = x(t)
              , n = null !== e ? e.factory : vt(t);
            if (null !== n)
                return n;
            if (t instanceof rn)
                throw new Error(`Token ${d(t)} is missing a \u0275prov definition.`);
            if (t instanceof Function)
                return function(t) {
                    const e = t.length;
                    if (e > 0) {
                        const n = hn(e, "?");
                        throw new Error(`Can't resolve all parameters for ${d(t)}: (${n.join(", ")}).`)
                    }
                    const n = function(t) {
                        const e = t && (t[A] || t[I]);
                        if (e) {
                            const n = function(t) {
            /*                    if (t.hasOwnProperty("name"))
                                    return t.name;
                                const e = ("" + t).match(/^function\s*([^\s(]+)/);
                                return null === e ? "" : e[1]
            */                }(t);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),
                            e
                        }
                        return null
                    }(t);
                    return null !== n ? ()=>n.factory(t) : ()=>new t
                }(t);
            throw new Error("unreachable")
        }
        function mi(t, e, n) {
            let r;
            if (_i(t)) {
                const e = m(t);
                return vt(e) || gi(e)
            }
            if (vi(t))
                r = ()=>m(t.useValue);
            else if ((s = t) && s.useFactory)
                r = ()=>t.useFactory(...Sn(t.deps || []));
            else if (function(t) {
                return !(!t || !t.useExisting)
            }(t))
                r = ()=>Cn(m(t.useExisting));
            else {
                const e = m(t && (t.useClass || t.provide));
                if (!function(t) {
                    return !!t.deps
                }(t))
                    return vt(e) || gi(e);
                r = ()=>new e(...Sn(t.deps))
            }
            var s;
            return r
        }
        function yi(t, e, n=!1) {
            return {
                factory: t,
                value: e,
                multi: n ? [] : void 0
            }
        }
        function vi(t) {
            return null !== t && "object" == typeof t && vn in t
        }
        function _i(t) {
            return "function" == typeof t
        }
        const wi = function(t, e, n) {
            return function(t, e=null, n=null, r) {
                const s = fi(t, e, n, r);
                return s._resolveInjectorDefTypes(),
                s
            }({
                name: n
            }, e, t, n)
        };
        let bi = (()=>{
            class t {
                static create(t, e) {
                    return Array.isArray(t) ? wi(t, e, "") : wi(t.providers, t.parent, t.name || "")
                }
            }
            return t.THROW_IF_NOT_FOUND = gn,
            t.NULL = new ai,
            t.\u0275prov = C({
                token: t,
                providedIn: "any",
                factory: ()=>Cn(oi)
            }),
            t.__NG_ELEMENT_ID__ = -1,
            t
        }
        )();
        function Ci(t, e) {
            ye(mr(t)[1], $t())
        }
        function Si(t) {
            let e = Object.getPrototypeOf(t.type.prototype).constructor
              , n = !0;
            const r = [t];
            for (; e; ) {
                let s;
                if (yt(t))
                    s = e.\u0275cmp || e.\u0275dir;
                else {
                    if (e.\u0275cmp)
                        throw new Error("Directives cannot inherit Components");
                    s = e.\u0275dir
                }
                if (s) {
                    if (n) {
                        r.push(s);
                        const e = t;
                        e.inputs = xi(t.inputs),
                        e.declaredInputs = xi(t.declaredInputs),
                        e.outputs = xi(t.outputs);
                        const n = s.hostBindings;
                        n && Ai(t, n);
                        const i = s.viewQuery
                          , o = s.contentQueries;
                        if (i && Ti(t, i),
                        o && Ei(t, o),
                        h(t.inputs, s.inputs),
                        h(t.declaredInputs, s.declaredInputs),
                        h(t.outputs, s.outputs),
                        yt(s) && s.data.animation) {
                            const e = t.data;
                            e.animation = (e.animation || []).concat(s.data.animation)
                        }
                    }
                    const e = s.features;
                    if (e)
                        for (let r = 0; r < e.length; r++) {
                            const s = e[r];
                            s && s.ngInherit && s(t),
                            s === Si && (n = !1)
                        }
                }
                e = Object.getPrototypeOf(e)
            }
            !function(t) {
                let e = 0
                  , n = null;
                for (let r = t.length - 1; r >= 0; r--) {
                    const s = t[r];
                    s.hostVars = e += s.hostVars,
                    s.hostAttrs = ke(s.hostAttrs, n = ke(n, s.hostAttrs))
                }
            }(r)
        }
        function xi(t) {
            return t === Z ? {} : t === z ? [] : t
        }
    /*    function Ti(t, e) {
            const n = t.viewQuery;
            t.viewQuery = n ? (t,r)=>{
                e(t, r),
                n(t, r)
            }
            : e
        }
        function Ei(t, e) {
            const n = t.contentQueries;
            t.contentQueries = n ? (t,r,s)=>{
                e(t, r, s),
                n(t, r, s)
            }
            : e
        }
        function Ai(t, e) {
            const n = t.hostBindings;
            t.hostBindings = n ? (t,r)=>{
                e(t, r),
                n(t, r)
            }
            : e
        }*/
        let ki = null;
        function Ii() {
            if (!ki) {
                const t = q.Symbol;
                if (t && t.iterator)
                    ki = t.iterator;
                else {
                    const t = Object.getOwnPropertyNames(Map.prototype);
                    for (let e = 0; e < t.length; ++e) {
                        const n = t[e];
                        "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (ki = n)
                    }
                }
            }
            return ki
        }
        class Oi {
            constructor(t) {
                this.wrapped = t
            }
    /*        static wrap(t) {
                return new Oi(t)
            }
            static unwrap(t) {
                return Oi.isWrapped(t) ? t.wrapped : t
            }*/
            static isWrapped(t) {
                return t instanceof Oi
            }
        }
        function Ri(t) {
            return !!Pi(t) && (Array.isArray(t) || !(t instanceof Map) && Ii()in t)
        }
        function Pi(t) {
            return null !== t && ("function" == typeof t || "object" == typeof t)
        }
        function Ni(t, e, n) {
            return t[e] = n
        }
        function Li(t, e, n) {
            return !Object.is(t[e], n) && (t[e] = n,
            !0)
        }
        function Di(t, e, n, r) {
            const s = Li(t, e, n);
            return Li(t, e + 1, r) || s
        }
        function Ui(t, e, n, r) {
            const s = qt();
            return Li(s, te(), e) && (Zt(),
            function(t, e, n, r, s, i) {
                const o = Rt(t, e);
                !function(t, e, n, r, s, i, o) {
                    if (null == i)
                        At(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                    else {
                        const a = null == o ? _(i) : o(i, r || "", s);
                        At(t) ? t.setAttribute(e, s, a, n) : n ? e.setAttributeNS(n, s, a) : e.setAttribute(s, a)
                    }
                }(e[11], o, i, t.value, n, r, s)
            }(me(), s, t, e, n, r)),
            Ui
        }
        function ji(t, e, n, r) {
            return Li(t, te(), n) ? e + _(n) + r : us
        }
        function Fi(t, e, n, r, s, i, o, a) {
            const l = qt()
              , c = Zt()
              , u = t + ut
              , h = c.firstCreatePass ? function(t, e, n, r, s, i, o, a, l) {
                const c = e.consts
                  , u = bs(e, t, 4, o || null, jt(c, a));
                Ls(e, n, u, jt(c, l)),
                ye(e, u);
                const h = u.tViews = Os(2, u, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c);
                return null !== e.queries && (e.queries.template(e, u),
                h.queries = e.queries.embeddedTView(u)),
                u
            }(u, c, l, e, n, r, s, i, o) : c.data[u];
            Gt(h, !1);
            const d = l[11].createComment("");
            Zr(c, l, d, h),
            gr(d, l),
            Ws(l, l[u] = zs(d, l, d, h)),
            mt(h) && As(c, l, h),
            null != o && ks(l, h, a)
        }
        function Mi(t) {
            return Nt(Ht.lFrame.contextLView, ut + t)
        }
        function Hi(t, e=R.Default) {
            const n = qt();
            return null === n ? Cn(t, e) : Ze($t(), n, m(t), e)
        }
        function Vi(t, e, n) {
            const r = qt();
            return Li(r, te(), e) && Ns(Zt(), me(), r, t, e, r[11], n, !1),
            Vi
        }
        function qi(t, e, n, r, s) {
            const i = s ? "class" : "style";
            ri(t, n, e.inputs[i], i, r)
        }
        function Zi(t, e, n, r) {
            const s = qt()
              , i = Zt()
              , o = ut + t
              , a = s[11]
              , l = s[o] = Rr(a, e, Ht.lFrame.currentNamespace)
              , c = i.firstCreatePass ? function(t, e, n, r, s, i, o) {
                const a = e.consts
                  , l = bs(e, t, 2, s, jt(a, i));
                return Ls(e, n, l, jt(a, o)),
                null !== l.attrs && ii(l, l.attrs, !1),
                null !== l.mergedAttrs && ii(l, l.mergedAttrs, !0),
                null !== e.queries && e.queries.elementStart(e, l),
                l
            }(o, i, s, 0, e, n, r) : i.data[o];
            Gt(c, !0);
            const u = c.mergedAttrs;
            null !== u && Te(a, l, u);
            const h = c.classes;
            null !== h && Kr(a, l, h);
            const d = c.styles;
            null !== d && Qr(a, l, d),
            64 != (64 & c.flags) && Zr(i, s, l, c),
            0 === Ht.lFrame.elementDepthCount && gr(l, s),
            Ht.lFrame.elementDepthCount++,
            mt(c) && (As(i, s, c),
            function(t, e, n) {
                if (pt(e)) {
                    const r = e.directiveEnd;
                    for (let s = e.directiveStart; s < r; s++) {
                        const e = t.data[s];
                        e.contentQueries && e.contentQueries(1, n[s], s)
                    }
                }
            }(i, c, s)),
            null !== r && ks(s, c)
        }
        function zi() {
            let t = $t();
            Wt() ? Yt() : (t = t.parent,
            Gt(t, !1));
            const e = t;
            Ht.lFrame.elementDepthCount--;
            const n = Zt();
            n.firstCreatePass && (ye(n, t),
            pt(t) && n.queries.elementEnd(t)),
            null != e.classesWithoutHost && function(t) {
                return 0 != (16 & t.flags)
            }(e) && qi(n, e, qt(), e.classesWithoutHost, !0),
            null != e.stylesWithoutHost && function(t) {
                return 0 != (32 & t.flags)
            }(e) && qi(n, e, qt(), e.stylesWithoutHost, !1)
        }
        function $i(t, e, n, r) {
            Zi(t, e, n, r),
            zi()
        }
        function Bi() {
            return qt()
        }
        function Gi(t) {
            return !!t && "function" == typeof t.then
        }
        function Wi(t) {
            return !!t && "function" == typeof t.subscribe
        }
        const Yi = Wi;
        function Qi(t, e, n, r) {
            const s = qt()
              , i = Zt()
              , o = $t();
            return function(t, e, n, r, s, i, o, a) {
                const l = mt(r)
                  , c = t.firstCreatePass && ei(t)
                  , u = ti(e);
                let h = !0;
                if (3 & r.type || a) {
                    const d = Rt(r, e)
                      , f = a ? a(d) : d
                      , p = u.length
                      , g = a ? t=>a(It(t[r.index])) : r.index;
                    if (At(n)) {
                        let o = null;
                        if (!a && l && (o = function(t, e, n, r) {
                            const s = t.cleanup;
                            if (null != s)
                                for (let i = 0; i < s.length - 1; i += 2) {
                                    const t = s[i];
                                    if (t === n && s[i + 1] === r) {
                                        const t = e[7]
                                          , n = s[i + 2];
                                        return t.length > n ? t[n] : null
                                    }
                                    "string" == typeof t && (i += 2)
                                }
                            return null
                        }(t, e, s, r.index)),
                        null !== o)
                            (o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i,
                            o.__ngLastListenerFn__ = i,
                            h = !1;
                        else {
                            i = Ji(r, e, 0, i, !1);
                            const t = n.listen(f, s, i);
                            u.push(i, t),
                            c && c.push(s, g, p, p + 1)
                        }
                    } else
                        i = Ji(r, e, 0, i, !0),
                        f.addEventListener(s, i, o),
                        u.push(i),
                        c && c.push(s, g, p, o)
                } else
                    i = Ji(r, e, 0, i, !1);
                const d = r.outputs;
                let f;
                if (h && null !== d && (f = d[s])) {
                    const t = f.length;
                    if (t)
                        for (let n = 0; n < t; n += 2) {
                            const t = e[f[n]][f[n + 1]].subscribe(i)
                              , o = u.length;
                            u.push(i, t),
                            c && c.push(s, r.index, o, -(o + 1))
                        }
                }
            }(i, s, s[11], o, t, e, !!n, r),
            Qi
        }
        function Ki(t, e, n, r) {
            try {
                return !1 !== n(r)
            } catch (s) {
                return ni(t, s),
                !1
            }
        }
        function Ji(t, e, n, r, s) {
            return function n(i) {
                if (i === Function)
                    return r;
                const o = 2 & t.flags ? Lt(t.index, e) : e;
                0 == (32 & e[2]) && Ys(o);
                let a = Ki(e, 0, r, i)
                  , l = n.__ngNextListenerFn__;
                for (; l; )
                    a = Ki(e, 0, l, i) && a,
                    l = l.__ngNextListenerFn__;
                return s && !1 === a && (i.preventDefault(),
                i.returnValue = !1),
                a
            }
        }
        function Xi(t=1) {
            return function(t) {
                return (Ht.lFrame.contextLView = function(t, e) {
                    for (; t > 0; )
                        e = e[15],
                        t--;
                    return e
                }(t, Ht.lFrame.contextLView))[8]
            }(t)
        }
    /*    function to(t, e) {
            let n = null;
            const r = function(t) {
                const e = t.attrs;
                if (null != e) {
                    const t = e.indexOf(5);
                    if (0 == (1 & t))
                        return e[t + 1]
                }
                return null
            }(t);
            for (let s = 0; s < e.length; s++) {
                const i = e[s];
                if ("*" !== i) {
                    if (null === r ? os(t, i, !0) : as(r, i))
                        return s
                } else
                    n = s
            }
            return n
        }*/
        function eo(t) {
            const e = qt()[16][6];
            if (!e.projection) {
                const n = e.projection = hn(t ? t.length : 1, null)
                  , r = n.slice();
                let s = e.child;
                for (; null !== s; ) {
                    const e = t ? to(s, t) : 0;
                    null !== e && (r[e] ? r[e].projectionNext = s : n[e] = s,
                    r[e] = s),
                    s = s.next
                }
            }
        }
        function no(t, e=0, n) {
            const r = qt()
              , s = Zt()
              , i = bs(s, ut + t, 16, null, n || null);
            null === i.projection && (i.projection = e),
            Yt(),
            64 != (64 & i.flags) && function(t, e, n) {
                Yr(e[11], 0, e, n, Ur(t, n, e), Vr(n.parent || e[6], n, e))
            }(s, r, i)
        }
        function ro(t, e, n) {
            return so(t, "", e, "", n),
            ro
        }
        function so(t, e, n, r, s) {
            const i = qt()
              , o = ji(i, e, n, r);
            return o !== us && Ns(Zt(), me(), i, t, o, i[11], s, !1),
            so
        }
        function io(t, e, n, r, s) {
            const i = t[n + 1]
              , o = null === e;
            let a = r ? ps(i) : ms(i)
              , l = !1;
            for (; 0 !== a && (!1 === l || o); ) {
                const n = t[a + 1];
                oo(t[a], e) && (l = !0,
                t[a + 1] = r ? vs(n) : gs(n)),
                a = r ? ps(n) : ms(n)
            }
            l && (t[n + 1] = r ? gs(i) : vs(i))
        }
        function oo(t, e) {
            return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && pn(t, e) >= 0
        }
        const ao = {
            textEnd: 0,
            key: 0,
            keyEnd: 0,
            value: 0,
            valueEnd: 0
        };
        function lo(t) {
            return t.substring(ao.key, ao.keyEnd)
        }
        function co(t, e) {
            const n = ao.textEnd;
            return n === e ? -1 : (e = ao.keyEnd = function(t, e, n) {
                for (; e < n && t.charCodeAt(e) > 32; )
                    e++;
                return e
            }(t, ao.key = e, n),
            uo(t, e, n))
        }
        function uo(t, e, n) {
            for (; e < n && t.charCodeAt(e) <= 32; )
                e++;
            return e
        }
        function ho(t, e) {
            return function(t, e, n, r) {
                const s = qt()
                  , i = Zt()
                  , o = ee(2);
                i.firstUpdatePass && mo(i, t, o, true),
                e !== us && Li(s, o, e) && _o(i, i.data[pe()], s, s[11], t, s[o + 1] = function(t, e) {
                    return null == t || "object" == typeof t && (t = d(Un(t))),
                    t
                }(e), true, o)
            }(t, e),
            ho
        }
        function fo(t) {
            !function(t, e, n, r) {
                const s = Zt()
                  , i = ee(2);
                s.firstUpdatePass && mo(s, null, i, r);
                const o = qt();
                if (n !== us && Li(o, i, n)) {
                    const a = s.data[pe()];
                    if (Co(a, r) && !go(s, i)) {
                        let t = a.classesWithoutHost;
                        null !== t && (n = f(t, n || "")),
                        qi(s, a, o, n, r)
                    } else
                        !function(t, e, n, r, s, i, o, a) {
                            s === us && (s = z);
                            let l = 0
                              , c = 0
                              , u = 0 < s.length ? s[0] : null
                              , h = 0 < i.length ? i[0] : null;
                            for (; null !== u || null !== h; ) {
                                const o = l < s.length ? s[l + 1] : void 0
                                  , d = c < i.length ? i[c + 1] : void 0;
                                let f, p = null;
                                u === h ? (l += 2,
                                c += 2,
                                o !== d && (p = h,
                                f = d)) : null === h || null !== u && u < h ? (l += 2,
                                p = u) : (c += 2,
                                p = h,
                                f = d),
                                null !== p && _o(t, e, n, r, p, f, true, a),
                                u = l < s.length ? s[l] : null,
                                h = c < i.length ? i[c] : null
                            }
                        }(s, a, o, o[11], o[i + 1], o[i + 1] = function(t, e, n) {
                            if (null == n || "" === n)
                                return z;
                            const r = []
                              , s = Un(n);
                            if (Array.isArray(s))
                                for (let i = 0; i < s.length; i++)
                                    t(r, s[i], !0);
                            else if ("object" == typeof s)
                                for (const i in s)
                                    s.hasOwnProperty(i) && t(r, i, s[i]);
                            else
                                "string" == typeof s && e(r, s);
                            return r
                        }(t, e, n), 0, i)
                }
            }(dn, po, t, !0)
        }
        function po(t, e) {
            for (let n = function(t) {
                return function(t) {
                    ao.key = 0,
                    ao.keyEnd = 0,
                    ao.value = 0,
                    ao.valueEnd = 0,
                    ao.textEnd = t.length
                }(t),
                co(t, uo(t, 0, ao.textEnd))
            }(e); n >= 0; n = co(e, n))
                dn(t, lo(e), !0)
        }
        function go(t, e) {
            return e >= t.expandoStartIndex
        }
        function mo(t, e, n, r) {
            const s = t.data;
            if (null === s[n + 1]) {
                const i = s[pe()]
                  , o = go(t, n);
                Co(i, r) && null === e && !o && (e = !1),
                e = function(t, e, n, r) {
                    const s = function(t) {
                        const e = Ht.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e]
                    }(t);
                    let i = r ? e.residualClasses : e.residualStyles;
                    if (null === s)
                        0 === (r ? e.classBindings : e.styleBindings) && (n = vo(n = yo(null, t, e, n, r), e.attrs, r),
                        i = null);
                    else {
                        const o = e.directiveStylingLast;
                        if (-1 === o || t[o] !== s)
                            if (n = yo(s, t, e, n, r),
                            null === i) {
                                let n = function(t, e, n) {
            /*                        const r = n ? e.classBindings : e.styleBindings;
                                    if (0 !== ms(r))
                                        return t[ps(r)]
            */                    }(t, e, r);
                                void 0 !== n && Array.isArray(n) && (n = yo(null, t, e, n[1], r),
                                n = vo(n, e.attrs, r),
                                function(t, e, n, r) {
            /*                        t[ps(n ? e.classBindings : e.styleBindings)] = r
            */                    }(t, e, r, n))
                            } else
                                i = function(t, e, n) {
                                    let r;
                                    const s = e.directiveEnd;
                                    for (let i = 1 + e.directiveStylingLast; i < s; i++)
                                        r = vo(r, t[i].hostAttrs, n);
                                    return vo(r, e.attrs, n)
                                }(t, e, r)
                    }
                    return void 0 !== i && (r ? e.residualClasses = i : e.residualStyles = i),
                    n
                }(s, i, e, r),
                function(t, e, n, r, s, i) {
                    let o = i ? e.classBindings : e.styleBindings
                      , a = ps(o)
                      , l = ms(o);
                    t[r] = n;
                    let c, u = !1;
                    if (Array.isArray(n)) {
                        const t = n;
                        c = t[1],
                        (null === c || pn(t, c) > 0) && (u = !0)
                    } else
                        c = n;
                    if (s)
                        if (0 !== l) {
                            const e = ps(t[a + 1]);
                            t[r + 1] = fs(e, a),
                            0 !== e && (t[e + 1] = ys(t[e + 1], r)),
                            t[a + 1] = 131071 & t[a + 1] | r << 17
                        } else
                            t[r + 1] = fs(a, 0),
                            0 !== a && (t[a + 1] = ys(t[a + 1], r)),
                            a = r;
                    else
                        t[r + 1] = fs(l, 0),
                        0 === a ? a = r : t[l + 1] = ys(t[l + 1], r),
                        l = r;
                    u && (t[r + 1] = gs(t[r + 1])),
                    io(t, c, r, !0),
                    io(t, c, r, !1),
                    function(t, e, n, r, s) {
                        const i = s ? t.residualClasses : t.residualStyles;
                        null != i && "string" == typeof e && pn(i, e) >= 0 && (n[r + 1] = vs(n[r + 1]))
                    }(e, c, t, r, i),
                    o = fs(a, l),
                    i ? e.classBindings = o : e.styleBindings = o
                }(s, i, e, n, o, r)
            }
        }
        function yo(t, e, n, r, s) {
            let i = null;
            const o = n.directiveEnd;
            let a = n.directiveStylingLast;
            for (-1 === a ? a = n.directiveStart : a++; a < o && (i = e[a],
            r = vo(r, i.hostAttrs, s),
            i !== t); )
                a++;
            return null !== t && (n.directiveStylingLast = a),
            r
        }
        function vo(t, e, n) {
            const r = n ? 1 : 2;
            let s = -1;
            if (null !== e)
                for (let i = 0; i < e.length; i++) {
                    const o = e[i];
                    "number" == typeof o ? s = o : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                    dn(t, o, !!n || e[++i]))
                }
            return void 0 === t ? null : t
        }
        function _o(t, e, n, r, s, i, o, a) {
            if (!(3 & e.type))
                return;
            const l = t.data
              , c = l[a + 1];
            bo(1 == (1 & c) ? wo(l, e, n, s, ms(c), o) : void 0) || (bo(i) || 2 == (2 & c) && (i = wo(l, null, n, s, a, o)),
            function(t, e, n, r, s) {
                const i = At(t);
                if (e)
                    s ? i ? t.addClass(n, r) : n.classList.add(r) : i ? t.removeClass(n, r) : n.classList.remove(r);
                else {
                    let e = -1 === r.indexOf("-") ? void 0 : xr.DashCase;
                    if (null == s)
                        i ? t.removeStyle(n, r, e) : n.style.removeProperty(r);
                    else {
                        const o = "string" == typeof s && s.endsWith("!important");
                        o && (s = s.slice(0, -10),
                        e |= xr.Important),
                        i ? t.setStyle(n, r, s, e) : n.style.setProperty(r, s, o ? "important" : "")
                    }
                }
            }(r, o, Ot(pe(), n), s, i))
        }
    /*    function wo(t, e, n, r, s, i) {
            const o = null === e;
            let a;
            for (; s > 0; ) {
                const e = t[s]
                  , i = Array.isArray(e)
                  , l = i ? e[1] : e
                  , c = null === l;
                let u = n[s + 1];
                u === us && (u = c ? z : void 0);
                let h = c ? fn(u, r) : l === r ? u : void 0;
                if (i && !bo(h) && (h = fn(e, r)),
                bo(h) && (a = h,
                o))
                    return a;
                const d = t[s + 1];
                s = o ? ps(d) : ms(d)
            }
            if (null !== e) {
                let t = i ? e.residualClasses : e.residualStyles;
                null != t && (a = fn(t, r))
            }
            return a
        }*/
        function bo(t) {
            return void 0 !== t
        }
        function Co(t, e) {
            return 0 != (t.flags & (e ? 16 : 32))
        }
        function So(t, e="") {
            const n = qt()
              , r = Zt()
              , s = t + ut
              , i = r.firstCreatePass ? bs(r, s, 1, e, null) : r.data[s]
              , o = n[s] = function(t, e) {
                return At(t) ? t.createText(e) : t.createTextNode(e)
            }(n[11], e);
            Zr(r, n, o, i),
            Gt(i, !1)
        }
        function xo(t) {
            return To("", t, ""),
            xo
        }
        function To(t, e, n) {
            const r = qt()
              , s = ji(r, t, e, n);
            return s !== us && si(r, pe(), s),
            To
        }
        function Eo(t, e, n, r, s, i, o, a, l) {
            const c = qt()
              , u = function(t, e, n, r, s, i, o, a, l, c) {
                const u = function(t, e, n, r, s, i) {
                    const o = Di(t, e, n, r);
                    return Di(t, e + 2, s, i) || o
                }(t, Xt(), n, s, o, l);
                return ee(4),
                u ? e + _(n) + r + _(s) + i + _(o) + a + _(l) + c : us
            }(c, t, e, n, r, s, i, o, a, l);
            return u !== us && si(c, pe(), u),
            Eo
        }
        function Ao(t, e, n) {
            const r = qt();
            return Li(r, te(), e) && Ns(Zt(), me(), r, t, e, r[11], n, !0),
            Ao
        }
        const ko = void 0;
        var Io = ["en", [["a", "p"], ["AM", "PM"], ko], [["AM", "PM"], ko, ko], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], ko, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], ko, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", ko, "{1} 'at' {0}", ko], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function(t) {
    /*        let e = Math.floor(Math.abs(t))
              , n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
    */    }
        ];
        let Oo = {};
    /*    function Ro(t) {
            const e = function(t) {
                return t.toLowerCase().replace(/_/g, "-")
            }(t);
            let n = No(e);
            if (n)
                return n;
            const r = e.split("-")[0];
            if (n = No(r),
            n)
                return n;
            if ("en" === r)
                return Io;
            throw new Error(`Missing locale data for the locale "${t}".`)
        }*/
        function Po(t) {
    /*        return Ro(t)[Lo.PluralCase]
    */    }
    /*    function No(t) {
            return t in Oo || (Oo[t] = q.ng && q.ng.common && q.ng.common.locales && q.ng.common.locales[t]),
            Oo[t]
        }*/
        var Lo = function(t) {
            return t[t.LocaleId = 0] = "LocaleId",
            t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat",
            t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
            t[t.DaysFormat = 3] = "DaysFormat",
            t[t.DaysStandalone = 4] = "DaysStandalone",
            t[t.MonthsFormat = 5] = "MonthsFormat",
            t[t.MonthsStandalone = 6] = "MonthsStandalone",
            t[t.Eras = 7] = "Eras",
            t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek",
            t[t.WeekendRange = 9] = "WeekendRange",
            t[t.DateFormat = 10] = "DateFormat",
            t[t.TimeFormat = 11] = "TimeFormat",
            t[t.DateTimeFormat = 12] = "DateTimeFormat",
            t[t.NumberSymbols = 13] = "NumberSymbols",
            t[t.NumberFormats = 14] = "NumberFormats",
            t[t.CurrencyCode = 15] = "CurrencyCode",
            t[t.CurrencySymbol = 16] = "CurrencySymbol",
            t[t.CurrencyName = 17] = "CurrencyName",
            t[t.Currencies = 18] = "Currencies",
            t[t.Directionality = 19] = "Directionality",
            t[t.PluralCase = 20] = "PluralCase",
            t[t.ExtraData = 21] = "ExtraData",
            t
        }({});
        const Do = "en-US";
        let Uo = Do;
        function jo(t) {
            var e, n;
            n = "Expected localeId to be defined",
            null == (e = t) && function(t, e, n, r) {
    /*            throw new Error(`ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`)
    */        }(n, e),
            "string" == typeof t && (Uo = t.toLowerCase().replace(/_/g, "-"))
        }
        function Fo(t, e, n, r, s) {
            if (t = m(t),
            Array.isArray(t))
                for (let i = 0; i < t.length; i++)
                    Fo(t[i], e, n, r, s);
            else {
                const i = Zt()
                  , o = qt();
                let a = _i(t) ? t : m(t.provide)
                  , l = mi(t);
                const c = $t()
                  , u = 1048575 & c.providerIndexes
                  , h = c.directiveStart
                  , d = c.providerIndexes >> 20;
                if (_i(t) || !t.multi) {
                    const r = new xe(l,s,Hi)
                      , f = Vo(a, e, s ? u : u + d, h);
                    -1 === f ? (He(Ue(c, o), i, a),
                    Mo(i, t, e.length),
                    e.push(a),
                    c.directiveStart++,
                    c.directiveEnd++,
                    s && (c.providerIndexes += 1048576),
                    n.push(r),
                    o.push(r)) : (n[f] = r,
                    o[f] = r)
                } else {
                    const f = Vo(a, e, u + d, h)
                      , p = Vo(a, e, u, u + d)
                      , g = f >= 0 && n[f]
                      , m = p >= 0 && n[p];
                    if (s && !m || !s && !g) {
                        He(Ue(c, o), i, a);
                        const u = function(t, e, n, r, s) {
                            const i = new xe(t,n,Hi);
                            return i.multi = [],
                            i.index = e,
                            i.componentProviders = 0,
                            Ho(i, s, r && !n),
                            i
                        }(s ? Zo : qo, n.length, s, r, l);
                        !s && m && (n[p].providerFactory = u),
                        Mo(i, t, e.length, 0),
                        e.push(a),
                        c.directiveStart++,
                        c.directiveEnd++,
                        s && (c.providerIndexes += 1048576),
                        n.push(u),
                        o.push(u)
                    } else
                        Mo(i, t, f > -1 ? f : p, Ho(n[s ? p : f], l, !s && r));
                    !s && r && m && n[p].componentProviders++
                }
            }
        }
        function Mo(t, e, n, r) {
            const s = _i(e);
            if (s || e.useClass) {
                const i = (e.useClass || e).prototype.ngOnDestroy;
                if (i) {
                    const o = t.destroyHooks || (t.destroyHooks = []);
                    if (!s && e.multi) {
                        const t = o.indexOf(n);
                        -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i)
                    } else
                        o.push(n, i)
                }
            }
        }
        function Ho(t, e, n) {
            return n && t.componentProviders++,
            t.multi.push(e) - 1
        }
        function Vo(t, e, n, r) {
            for (let s = n; s < r; s++)
                if (e[s] === t)
                    return s;
            return -1
        }
        function qo(t, e, n, r) {
            return zo(this.multi, [])
        }
    /*    function Zo(t, e, n, r) {
            const s = this.multi;
            let i;
            if (this.providerFactory) {
                const t = this.providerFactory.componentProviders
                  , e = We(n, n[1], this.providerFactory.index, r);
                i = e.slice(0, t),
                zo(s, i);
                for (let n = t; n < e.length; n++)
                    i.push(e[n])
            } else
                i = [],
                zo(s, i);
            return i
        }*/
        function zo(t, e) {
            for (let n = 0; n < t.length; n++)
                e.push((0,
                t[n])());
            return e
        }
        function $o(t, e=[]) {
            return n=>{
                n.providersResolver = (n,r)=>function(t, e, n) {
                    const r = Zt();
                    if (r.firstCreatePass) {
                        const s = yt(t);
                        Fo(n, r.data, r.blueprint, s, !0),
                        Fo(e, r.data, r.blueprint, s, !1)
                    }
                }(n, r ? r(t) : t, e)
            }
        }
        class Bo {
        }
        class Go {
    /*        resolveComponentFactory(t) {
                throw function(t) {
                    const e = Error(`No component factory found for ${d(t)}. Did you add it to @NgModule.entryComponents?`);
                    return e.ngComponent = t,
                    e
                }(t)
            }
    */    }
        let Wo = (()=>{
            class t {
            }
            return t.NULL = new Go,
            t
        }
        )();
        function Yo(...t) {}
        function Qo(t, e) {
            return new Jo(Rt(t, e))
        }
        const Ko = function() {
            return Qo($t(), qt())
        };
        let Jo = (()=>{
            class t {
                constructor(t) {
                    this.nativeElement = t
                }
            }
            return t.__NG_ELEMENT_ID__ = Ko,
            t
        }
        )();
        function Xo(t) {
    /*        return t instanceof Jo ? t.nativeElement : t
    */    }
        class ta {
        }
        let ea = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = ()=>na(),
            t
        }
        )();
        const na = function() {
            const t = qt()
              , e = Lt($t().index, t);
            return function(t) {
                return t[11]
            }(dt(e) ? e : t)
        };
        let ra = (()=>{
            class t {
            }
            return t.\u0275prov = C({
                token: t,
                providedIn: "root",
                factory: ()=>null
            }),
            t
        }
        )();
        class sa {
            constructor(t) {
                this.full = t,
                this.major = t.split(".")[0],
                this.minor = t.split(".")[1],
                this.patch = t.split(".").slice(2).join(".")
            }
        }
        const ia = new sa("12.0.5");
        class oa {
            constructor() {}
            supports(t) {
                return Ri(t)
            }
            create(t) {
                return new la(t)
            }
        }
        const aa = (t,e)=>e;
        class la {
            constructor(t) {
                this.length = 0,
                this._linkedRecords = null,
                this._unlinkedRecords = null,
                this._previousItHead = null,
                this._itHead = null,
                this._itTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._movesHead = null,
                this._movesTail = null,
                this._removalsHead = null,
                this._removalsTail = null,
                this._identityChangesHead = null,
                this._identityChangesTail = null,
                this._trackByFn = t || aa
            }
    /*        forEachItem(t) {
                let e;
                for (e = this._itHead; null !== e; e = e._next)
                    t(e)
            }*/
            forEachOperation(t) {
                let e = this._itHead
                  , n = this._removalsHead
                  , r = 0
                  , s = null;
                for (; e || n; ) {
                    const i = !n || e && e.currentIndex < da(n, r, s) ? e : n
                      , o = da(i, r, s)
                      , a = i.currentIndex;
                    if (i === n)
                        r--,
                        n = n._nextRemoved;
                    else if (e = e._next,
                    null == i.previousIndex)
                        r++;
                    else {
                        s || (s = []);
                        const t = o - r
                          , e = a - r;
                        if (t != e) {
                            for (let n = 0; n < t; n++) {
                                const r = n < s.length ? s[n] : s[n] = 0
                                  , i = r + n;
                                e <= i && i < t && (s[n] = r + 1)
                            }
                            s[i.previousIndex] = e - t
                        }
                    }
                    o !== a && t(i, o, a)
                }
            }
    /*        forEachPreviousItem(t) {
                let e;
                for (e = this._previousItHead; null !== e; e = e._nextPrevious)
                    t(e)
            }
            forEachAddedItem(t) {
                let e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                    t(e)
            }
            forEachMovedItem(t) {
                let e;
                for (e = this._movesHead; null !== e; e = e._nextMoved)
                    t(e)
            }
            forEachRemovedItem(t) {
                let e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                    t(e)
            }*/
            forEachIdentityChange(t) {
                let e;
                for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange)
                    t(e)
            }
            diff(t) {
                if (null == t && (t = []),
                !Ri(t))
                    throw new Error(`Error trying to diff '${d(t)}'. Only arrays and iterables are allowed`);
                return this.check(t) ? this : null
            }
    /*        onDestroy() {}
    */        check(t) {
                this._reset();
                let e, n, r, s = this._itHead, i = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (let e = 0; e < this.length; e++)
                        n = t[e],
                        r = this._trackByFn(e, n),
                        null !== s && Object.is(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                        Object.is(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e),
                        i = !0),
                        s = s._next
                } else
                    e = 0,
                    function(t, e) {
            /*            if (Array.isArray(t))
                            for (let n = 0; n < t.length; n++)
                                e(t[n]);
                        else {
                            const n = t[Ii()]();
                            let r;
                            for (; !(r = n.next()).done; )
                                e(r.value)
                        }*/
                    }(t, t=>{
            /*            r = this._trackByFn(e, t),
                        null !== s && Object.is(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                        Object.is(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e),
                        i = !0),
                        s = s._next,
                        e++
            */        }
                    ),
                    this.length = e;
                return this._truncate(s),
                this.collection = t,
                this.isDirty
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                        t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null,
                    t = this._movesHead; null !== t; t = t._nextMoved)
                        t.previousIndex = t.currentIndex;
                    this._movesHead = this._movesTail = null,
                    this._removalsHead = this._removalsTail = null,
                    this._identityChangesHead = this._identityChangesTail = null
                }
            }
            _mismatch(t, e, n, r) {
                let s;
                return null === t ? s = this._itTail : (s = t._prev,
                this._remove(t)),
                null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r)) : t = this._addAfter(new ca(e,n), s, r),
                t
            }
    /*        _verifyReinsertion(t, e, n, r) {
                let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r,
                this._addToMoves(t, r)),
                t
            }*/
            _truncate(t) {
                for (; null !== t; ) {
                    const e = t._next;
                    this._addToRemovals(this._unlink(t)),
                    t = e
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
    /*        _reinsertAfter(t, e, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                const r = t._prevRemoved
                  , s = t._nextRemoved;
                return null === r ? this._removalsHead = s : r._nextRemoved = s,
                null === s ? this._removalsTail = r : s._prevRemoved = r,
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
            }*/
            _moveAfter(t, e, n) {
                return this._unlink(t),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
            }
            _addAfter(t, e, n) {
                return this._insertAfter(t, e, n),
                this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t,
                t
            }
            _insertAfter(t, e, n) {
                const r = null === e ? this._itHead : e._next;
                return t._next = r,
                t._prev = e,
                null === r ? this._itTail = t : r._prev = t,
                null === e ? this._itHead = t : e._next = t,
                null === this._linkedRecords && (this._linkedRecords = new ha),
                this._linkedRecords.put(t),
                t.currentIndex = n,
                t
            }
            _remove(t) {
                return this._addToRemovals(this._unlink(t))
            }
            _unlink(t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                const e = t._prev
                  , n = t._next;
                return null === e ? this._itHead = n : e._next = n,
                null === n ? this._itTail = e : n._prev = e,
                t
            }
            _addToMoves(t, e) {
                return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t),
                t
            }
            _addToRemovals(t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new ha),
                this._unlinkedRecords.put(t),
                t.currentIndex = null,
                t._nextRemoved = null,
                null === this._removalsTail ? (this._removalsTail = this._removalsHead = t,
                t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
                this._removalsTail = this._removalsTail._nextRemoved = t),
                t
            }
            _addIdentityChange(t, e) {
                return t.item = e,
                this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t,
                t
            }
        }
        class ca {
            constructor(t, e) {
                this.item = t,
                this.trackById = e,
                this.currentIndex = null,
                this.previousIndex = null,
                this._nextPrevious = null,
                this._prev = null,
                this._next = null,
                this._prevDup = null,
                this._nextDup = null,
                this._prevRemoved = null,
                this._nextRemoved = null,
                this._nextAdded = null,
                this._nextMoved = null,
                this._nextIdentityChange = null
            }
        }
        class ua {
            constructor() {
                this._head = null,
                this._tail = null
            }
            add(t) {
                null === this._head ? (this._head = this._tail = t,
                t._nextDup = null,
                t._prevDup = null) : (this._tail._nextDup = t,
                t._prevDup = this._tail,
                t._nextDup = null,
                this._tail = t)
            }
            get(t, e) {
                let n;
                for (n = this._head; null !== n; n = n._nextDup)
                    if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t))
                        return n;
                return null
            }
            remove(t) {
                const e = t._prevDup
                  , n = t._nextDup;
                return null === e ? this._head = n : e._nextDup = n,
                null === n ? this._tail = e : n._prevDup = e,
                null === this._head
            }
        }
        class ha {
            constructor() {
                this.map = new Map
            }
            put(t) {
                const e = t.trackById;
                let n = this.map.get(e);
                n || (n = new ua,
                this.map.set(e, n)),
                n.add(t)
            }
            get(t, e) {
                const n = this.map.get(t);
                return n ? n.get(t, e) : null
            }
            remove(t) {
                const e = t.trackById;
                return this.map.get(e).remove(t) && this.map.delete(e),
                t
            }
    /*        get isEmpty() {
                return 0 === this.map.size
            }*/
            clear() {
                this.map.clear()
            }
        }
        function da(t, e, n) {
            const r = t.previousIndex;
            if (null === r)
                return r;
            let s = 0;
            return n && r < n.length && (s = n[r]),
            r + e + s
        }
        class fa {
            constructor() {}
            supports(t) {
                return t instanceof Map || Pi(t)
            }
            create() {
                return new pa
            }
        }
        class pa {
            constructor() {
                this._records = new Map,
                this._mapHead = null,
                this._appendAfter = null,
                this._previousMapHead = null,
                this._changesHead = null,
                this._changesTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._removalsHead = null,
                this._removalsTail = null
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
    /*        forEachItem(t) {
                let e;
                for (e = this._mapHead; null !== e; e = e._next)
                    t(e)
            }
            forEachPreviousItem(t) {
                let e;
                for (e = this._previousMapHead; null !== e; e = e._nextPrevious)
                    t(e)
            }*/
            forEachChangedItem(t) {
                let e;
                for (e = this._changesHead; null !== e; e = e._nextChanged)
                    t(e)
            }
            forEachAddedItem(t) {
                let e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                    t(e)
            }
            forEachRemovedItem(t) {
                let e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                    t(e)
            }
            diff(t) {
                if (t) {
                    if (!(t instanceof Map || Pi(t)))
                        throw new Error(`Error trying to diff '${d(t)}'. Only maps and objects are allowed`)
                } else
                    t = new Map;
                return this.check(t) ? this : null
            }
    /*        onDestroy() {}
    */        check(t) {
                this._reset();
                let e = this._mapHead;
                if (this._appendAfter = null,
                this._forEach(t, (t,n)=>{
                    if (e && e.key === n)
                        this._maybeAddToChanges(e, t),
                        this._appendAfter = e,
                        e = e._next;
                    else {
                        const r = this._getOrCreateRecordForKey(n, t);
                        e = this._insertBeforeOrAppend(e, r)
                    }
                }
                ),
                e) {
                    e._prev && (e._prev._next = null),
                    this._removalsHead = e;
                    for (let t = e; null !== t; t = t._nextRemoved)
                        t === this._mapHead && (this._mapHead = null),
                        this._records.delete(t.key),
                        t._nextRemoved = t._next,
                        t.previousValue = t.currentValue,
                        t.currentValue = null,
                        t._prev = null,
                        t._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
            }
            _insertBeforeOrAppend(t, e) {
                if (t) {
                    const n = t._prev;
                    return e._next = t,
                    e._prev = n,
                    t._prev = e,
                    n && (n._next = e),
                    t === this._mapHead && (this._mapHead = e),
                    this._appendAfter = t,
                    t
                }
                return this._appendAfter ? (this._appendAfter._next = e,
                e._prev = this._appendAfter) : this._mapHead = e,
                this._appendAfter = e,
                null
            }
            _getOrCreateRecordForKey(t, e) {
                if (this._records.has(t)) {
                    const n = this._records.get(t);
                    this._maybeAddToChanges(n, e);
                    const r = n._prev
                      , s = n._next;
                    return r && (r._next = s),
                    s && (s._prev = r),
                    n._next = null,
                    n._prev = null,
                    n
                }
                const n = new ga(t);
                return this._records.set(t, n),
                n.currentValue = e,
                this._addToAdditions(n),
                n
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (this._previousMapHead = this._mapHead,
                    t = this._previousMapHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                        t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded)
                        t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null,
                    this._additionsHead = this._additionsTail = null,
                    this._removalsHead = null
                }
            }
            _maybeAddToChanges(t, e) {
                Object.is(e, t.currentValue) || (t.previousValue = t.currentValue,
                t.currentValue = e,
                this._addToChanges(t))
            }
            _addToAdditions(t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t,
                this._additionsTail = t)
            }
    /*        _addToChanges(t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t,
                this._changesTail = t)
            }*/
            _forEach(t, e) {
                t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n=>e(t[n], n))
            }
        }
        class ga {
            constructor(t) {
                this.key = t,
                this.previousValue = null,
                this.currentValue = null,
                this._nextPrevious = null,
                this._next = null,
                this._prev = null,
                this._nextAdded = null,
                this._nextRemoved = null,
                this._nextChanged = null
            }
        }
        function ma() {
    /*        return new ya([new oa])
    */    }
        let ya = (()=>{
            class t {
                constructor(t) {
                    this.factories = t
                }
    /*            static create(e, n) {
                    if (null != n) {
                        const t = n.factories.slice();
                        e = e.concat(t)
                    }
                    return new t(e)
                }*/
    /*            static extend(e) {
                    return {
                        provide: t,
                        useFactory: n=>t.create(e, n || ma()),
                        deps: [[t, new An, new En]]
                    }
                }*/
                find(t) {
                    const e = this.factories.find(e=>e.supports(t));
                    if (null != e)
                        return e;
                    throw new Error(`Cannot find a differ supporting object '${t}' of type '${n = t,
                    n.name || typeof n}'`);
                    var n
                }
            }
            return t.\u0275prov = C({
                token: t,
                providedIn: "root",
                factory: ma
            }),
            t
        }
        )();
        function va() {
    /*        return new _a([new fa])
    */    }
        let _a = (()=>{
            class t {
                constructor(t) {
                    this.factories = t
                }
    /*            static create(e, n) {
                    if (n) {
                        const t = n.factories.slice();
                        e = e.concat(t)
                    }
                    return new t(e)
                }*/
    /*            static extend(e) {
                    return {
                        provide: t,
                        useFactory: n=>t.create(e, n || va()),
                        deps: [[t, new An, new En]]
                    }
                }*/
                find(t) {
                    const e = this.factories.find(e=>e.supports(t));
                    if (e)
                        return e;
                    throw new Error(`Cannot find a differ supporting object '${t}'`)
                }
            }
            return t.\u0275prov = C({
                token: t,
                providedIn: "root",
                factory: va
            }),
            t
        }
        )();
    /*    function wa(t, e, n, r, s=!1) {
            for (; null !== n; ) {
                const i = e[n.index];
                if (null !== i && r.push(It(i)),
                ft(i))
                    for (let t = ht; t < i.length; t++) {
                        const e = i[t]
                          , n = e[1].firstChild;
                        null !== n && wa(e[1], e, n, r)
                    }
                const o = n.type;
                if (8 & o)
                    wa(t, e, n.child, r);
                else if (32 & o) {
                    const t = Tr(n, e);
                    let s;
                    for (; s = t(); )
                        r.push(s)
                } else if (16 & o) {
                    const t = $r(e, n);
                    if (Array.isArray(t))
                        r.push(...t);
                    else {
                        const n = Er(e[16]);
                        wa(n[1], n, t, r, !0)
                    }
                }
                n = s ? n.projectionNext : n.next
            }
            return r
        }*/
        class ba {
            constructor(t, e) {
                this._lView = t,
                this._cdRefInjectingView = e,
                this._appRef = null,
                this._attachedToViewContainer = !1
            }
    /*        get rootNodes() {
                const t = this._lView
                  , e = t[1];
                return wa(e, t, e.firstChild, [])
            }*/
            get context() {
                return this._lView[8]
            }
    /*        set context(t) {
                this._lView[8] = t
            }
            get destroyed() {
                return 256 == (256 & this._lView[2])
            }
            destroy() {
                if (this._appRef)
                    this._appRef.detachView(this);
                else if (this._attachedToViewContainer) {
                    const t = this._lView[3];
                    if (ft(t)) {
                        const e = t[8]
                          , n = e ? e.indexOf(this) : -1;
                        n > -1 && (Nr(t, n),
                        un(e, n))
                    }
                    this._attachedToViewContainer = !1
                }
                Lr(this._lView[1], this._lView)
            }*/
            onDestroy(t) {
                Rs(this._lView[1], this._lView, null, t)
            }
            markForCheck() {
                Ys(this._cdRefInjectingView || this._lView)
            }
    /*        detach() {
                this._lView[2] &= -129
            }
            reattach() {
                this._lView[2] |= 128
            }
            detectChanges() {
                Qs(this._lView[1], this._lView, this.context)
            }
            checkNoChanges() {
                !function(t, e, n) {
                    Kt(!0);
                    try {
                        Qs(t, e, n)
                    } finally {
                        Kt(!1)
                    }
                }(this._lView[1], this._lView, this.context)
            }*/
            attachToViewContainerRef() {
                if (this._appRef)
                    throw new Error("This view is already attached directly to the ApplicationRef!");
                this._attachedToViewContainer = !0
            }
    /*        detachFromAppRef() {
                var t;
                this._appRef = null,
                Wr(this._lView[1], t = this._lView, t[11], 2, null, null)
            }*/
            attachToAppRef(t) {
                if (this._attachedToViewContainer)
                    throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = t
            }
        }
        class Ca extends ba {
            constructor(t) {
                super(t),
                this._view = t
            }
            detectChanges() {
                Ks(this._view)
            }
    /*        checkNoChanges() {
                !function(t) {
                    Kt(!0);
                    try {
                        Ks(t)
                    } finally {
                        Kt(!1)
                    }
                }(this._view)
            }
            get context() {
                return null
            }*/
        }
        const Sa = function(t) {
            return function(t, e, n) {
                if (gt(t) && !n) {
                    const n = Lt(t.index, e);
                    return new ba(n,n)
                }
                return 47 & t.type ? new ba(e[16],e) : null
            }($t(), qt(), 16 == (16 & t))
        };
        let xa = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = Sa,
            t
        }
        )();
        const Ta = [new fa]
          , Ea = new ya([new oa])
          , Aa = new _a(Ta)
          , ka = function() {
            return Pa($t(), qt())
        };
        let Ia = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = ka,
            t
        }
        )();
        const Oa = Ia
          , Ra = class extends Oa {
            constructor(t, e, n) {
                super(),
                this._declarationLView = t,
                this._declarationTContainer = e,
                this.elementRef = n
            }
            createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews
                  , n = ws(this._declarationLView, e, t, 16, null, e.declTNode, null, null, null, null);
                n[17] = this._declarationLView[this._declarationTContainer.index];
                const r = this._declarationLView[19];
                return null !== r && (n[19] = r.createEmbeddedView(e)),
                Ss(e, n, t),
                new ba(n)
            }
        }
        ;
        function Pa(t, e) {
            return 4 & t.type ? new Ra(e,t,Qo(t, e)) : null
        }
        class Na {
        }
        class La {
        }
        const Da = function() {
            return Va($t(), qt())
        };
        let Ua = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = Da,
            t
        }
        )();
        const ja = Ua
          , Fa = class extends ja {
            constructor(t, e, n) {
                super(),
                this._lContainer = t,
                this._hostTNode = e,
                this._hostLView = n
            }
    /*        get element() {
                return Qo(this._hostTNode, this._hostLView)
            }*/
            get injector() {
                return new Ke(this._hostTNode,this._hostLView)
            }
    /*        get parentInjector() {
                const t = Me(this._hostTNode, this._hostLView);
                if (Oe(t)) {
                    const e = Pe(t, this._hostLView)
                      , n = Re(t);
                    return new Ke(e[1].data[n + 8],e)
                }
                return new Ke(null,this._hostLView)
            }*/
            clear() {
                for (; this.length > 0; )
                    this.remove(this.length - 1)
            }
            get(t) {
                const e = Ma(this._lContainer);
                return null !== e && e[t] || null
            }
            get length() {
                return this._lContainer.length - ht
            }
            createEmbeddedView(t, e, n) {
                const r = t.createEmbeddedView(e || {});
                return this.insert(r, n),
                r
            }
            createComponent(t, e, n, r, s) {
                const i = n || this.parentInjector;
                if (!s && null == t.ngModule && i) {
                    const t = i.get(Na, null);
                    t && (s = t)
                }
                const o = t.create(i, r, void 0, s);
                return this.insert(o.hostView, e),
                o
            }
            insert(t, e) {
                const n = t._lView
                  , r = n[1];
                if (ft(n[3])) {
                    const e = this.indexOf(t);
                    if (-1 !== e)
                        this.detach(e);
                    else {
                        const e = n[3]
                          , r = new Fa(e,e[6],e[3]);
                        r.detach(r.indexOf(t))
                    }
                }
                const s = this._adjustIndex(e)
                  , i = this._lContainer;
                !function(t, e, n, r) {
                    const s = ht + r
                      , i = n.length;
                    r > 0 && (n[s - 1][4] = e),
                    r < i - ht ? (e[4] = n[s],
                    cn(n, ht + r, e)) : (n.push(e),
                    e[4] = null),
                    e[3] = n;
                    const o = e[17];
                    null !== o && n !== o && function(t, e) {
            /*            const n = t[9];
                        e[16] !== e[3][3][16] && (t[2] = !0),
                        null === n ? t[9] = [e] : n.push(e)
            */        }(o, e);
                    const a = e[19];
                    null !== a && a.insertView(t),
                    e[2] |= 128
                }(r, n, i, s);
                const o = Br(s, i)
                  , a = n[11]
                  , l = Hr(a, i[7]);
                return null !== l && function(t, e, n, r, s, i) {
                    r[0] = s,
                    r[6] = e,
                    Wr(t, r, n, 1, s, i)
                }(r, i[6], a, n, l, o),
                t.attachToViewContainerRef(),
                cn(Ha(i), s, t),
                t
            }
    /*        move(t, e) {
                return this.insert(t, e)
            }
            indexOf(t) {
                const e = Ma(this._lContainer);
                return null !== e ? e.indexOf(t) : -1
            }*/
            remove(t) {
                const e = this._adjustIndex(t, -1)
                  , n = Nr(this._lContainer, e);
                n && (un(Ha(this._lContainer), e),
                Lr(n[1], n))
            }
    /*        detach(t) {
                const e = this._adjustIndex(t, -1)
                  , n = Nr(this._lContainer, e);
                return n && null != un(Ha(this._lContainer), e) ? new ba(n) : null
            }*/
            _adjustIndex(t, e=0) {
                return null == t ? this.length + e : t
            }
        }
        ;
        function Ma(t) {
            return t[8]
        }
        function Ha(t) {
            return t[8] || (t[8] = [])
        }
        function Va(t, e) {
            let n;
            const r = e[t.index];
            if (ft(r))
                n = r;
            else {
                let s;
                if (8 & t.type)
                    s = It(r);
                else {
                    const n = e[11];
                    s = n.createComment("");
                    const r = Rt(t, e);
                    jr(n, Hr(n, r), s, function(t, e) {
                        return At(t) ? t.nextSibling(e) : e.nextSibling
                    }(n, r), !1)
                }
                e[t.index] = n = zs(r, e, s, t),
                Ws(e, n)
            }
            return new Fa(n,t,e)
        }
        const qa = {};
        class Za extends Wo {
            constructor(t) {
                super(),
                this.ngModule = t
            }
            resolveComponentFactory(t) {
                const e = lt(t);
                return new Ba(e,this.ngModule)
            }
        }
    /*    function za(t) {
            const e = [];
            for (let n in t)
                t.hasOwnProperty(n) && e.push({
                    propName: t[n],
                    templateName: n
                });
            return e
        }*/
        const $a = new rn("SCHEDULER_TOKEN",{
            providedIn: "root",
            factory: ()=>br
        });
        class Ba extends Bo {
            constructor(t, e) {
                super(),
                this.componentDef = t,
                this.ngModule = e,
                this.componentType = t.type,
                this.selector = t.selectors.map(cs).join(","),
                this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [],
                this.isBoundToModule = !!e
            }
    /*        get inputs() {
                return za(this.componentDef.inputs)
            }
            get outputs() {
                return za(this.componentDef.outputs)
            }*/
            create(t, e, n, r) {
                const s = (r = r || this.ngModule) ? function(t, e) {
                    return {
                        get: (n,r,s)=>{
                            const i = t.get(n, qa, s);
                            return i !== qa || r === qa ? i : e.get(n, r, s)
                        }
                    }
                }(t, r.injector) : t
                  , i = s.get(ta, kt)
                  , o = s.get(ra, null)
                  , a = i.createRenderer(null, this.componentDef)
                  , l = this.componentDef.selectors[0][0] || "div"
                  , c = n ? function(t, e, n) {
                    if (At(t))
                        return t.selectRootElement(e, n === j.ShadowDom);
                    let r = "string" == typeof e ? t.querySelector(e) : e;
                    return r.textContent = "",
                    r
                }(a, n, this.componentDef.encapsulation) : Rr(i.createRenderer(null, this.componentDef), l, function(t) {
                    const e = t.toLowerCase();
                    return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
                }(l))
                  , u = this.componentDef.onPush ? 576 : 528
                  , h = {
                    components: [],
                    scheduler: br,
                    clean: Xs,
                    playerHandler: null,
                    flags: 0
                }
                  , d = Os(0, null, null, 1, 0, null, null, null, null, null)
                  , f = ws(null, d, h, u, null, null, i, a, o, s);
                let p, g;
                le(f);
                try {
                    const t = function(t, e, n, r, s, i) {
                        const o = n[1];
                        n[20] = t;
                        const a = bs(o, 20, 2, "#host", null)
                          , l = a.mergedAttrs = e.hostAttrs;
                        null !== l && (ii(a, l, !0),
                        null !== t && (Te(s, t, l),
                        null !== a.classes && Kr(s, t, a.classes),
                        null !== a.styles && Qr(s, t, a.styles)));
                        const c = r.createRenderer(t, e)
                          , u = ws(n, Is(e), null, e.onPush ? 64 : 16, n[20], a, r, c, null, null);
                        return o.firstCreatePass && (He(Ue(a, n), o, e.type),
                        js(o, a),
                        Ms(a, n.length, 1)),
                        Ws(n, u),
                        n[20] = u
                    }(c, this.componentDef, f, i, a);
                    if (c)
                        if (n)
                            Te(a, c, ["ng-version", ia.full]);
                        else {
                            const {attrs: t, classes: e} = function(t) {
                                const e = []
                                  , n = [];
                                let r = 1
                                  , s = 2;
                                for (; r < t.length; ) {
                                    let i = t[r];
                                    if ("string" == typeof i)
                                        2 === s ? "" !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                                    else {
                                        if (!ss(s))
                                            break;
                                        s = i
                                    }
                                    r++
                                }
                                return {
                                    attrs: e,
                                    classes: n
                                }
                            }(this.componentDef.selectors[0]);
                            t && Te(a, c, t),
                            e && e.length > 0 && Kr(a, c, e.join(" "))
                        }
                    if (g = Pt(d, ut),
                    void 0 !== e) {
                        const t = g.projection = [];
                        for (let n = 0; n < this.ngContentSelectors.length; n++) {
                            const r = e[n];
                            t.push(null != r ? Array.from(r) : null)
                        }
                    }
                    p = function(t, e, n, r, s) {
                        const i = n[1]
                          , o = function(t, e, n) {
                            const r = $t();
                            t.firstCreatePass && (n.providersResolver && n.providersResolver(n),
                            Hs(t, r, e, Cs(t, e, 1, null), n));
                            const s = We(e, t, r.directiveStart, r);
                            gr(s, e);
                            const i = Rt(r, e);
                            return i && gr(i, e),
                            s
                        }(i, n, e);
                        if (r.components.push(o),
                        t[8] = o,
                        s && s.forEach(t=>t(o, e)),
                        e.contentQueries) {
                            const t = $t();
                            e.contentQueries(1, o, t.directiveStart)
                        }
                        const a = $t();
                        return !i.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (ge(a.index),
                        Ds(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                        Us(e, o)),
                        o
                    }(t, this.componentDef, f, h, [Ci]),
                    Ss(d, f, null)
                } finally {
                    fe()
                }
                return new Ga(this.componentType,p,Qo(g, f),f,g)
            }
        }
        class Ga extends class {
        }
        {
            constructor(t, e, n, r, s) {
                super(),
                this.location = n,
                this._rootLView = r,
                this._tNode = s,
                this.instance = e,
                this.hostView = this.changeDetectorRef = new Ca(r),
                this.componentType = t
            }
            get injector() {
                return new Ke(this._tNode,this._rootLView)
            }
    /*        destroy() {
                this.hostView.destroy()
            }*/
            onDestroy(t) {
                this.hostView.onDestroy(t)
            }
        }
        const Wa = new Map;
        class Ya extends Na {
            constructor(t, e) {
                super(),
                this._parent = e,
                this._bootstrapComponents = [],
                this.injector = this,
                this.destroyCbs = [],
                this.componentFactoryResolver = new Za(this);
                const n = ct(t)
                  , r = t[Y] || null;
                r && jo(r),
                this._bootstrapComponents = Sr(n.bootstrap),
                this._r3Injector = fi(t, e, [{
                    provide: Na,
                    useValue: this
                }, {
                    provide: Wo,
                    useValue: this.componentFactoryResolver
                }], d(t)),
                this._r3Injector._resolveInjectorDefTypes(),
                this.instance = this.get(t)
            }
            get(t, e=bi.THROW_IF_NOT_FOUND, n=R.Default) {
                return t === bi || t === Na || t === oi ? this : this._r3Injector.get(t, e, n)
            }
    /*        destroy() {
                const t = this._r3Injector;
                !t.destroyed && t.destroy(),
                this.destroyCbs.forEach(t=>t()),
                this.destroyCbs = null
            }*/
            onDestroy(t) {
                this.destroyCbs.push(t)
            }
        }
        class Qa extends La {
            constructor(t) {
                super(),
                this.moduleType = t,
                null !== ct(t) && function(t) {
                    const e = new Set;
                    !function t(n) {
                        const r = ct(n, !0)
                          , s = r.id;
                        null !== s && (function(t, e, n) {
            /*                if (e && e !== n)
                                throw new Error(`Duplicate module registered for ${t} - ${d(e)} vs ${d(e.name)}`)
            */            }(s, Wa.get(s), n),
                        Wa.set(s, n));
                        const i = Sr(r.imports);
                        for (const o of i)
                            e.has(o) || (e.add(o),
                            t(o))
                    }(t)
                }(t)
            }
            create(t) {
                return new Ya(this.moduleType,t)
            }
        }
        function Ka(t, e, n, r) {
            return function(t, e, n, r, s, i) {
                const o = e + n;
                return Li(t, o, s) ? Ni(t, o + 1, i ? r.call(i, s) : r(s)) : Ja(t, o + 1)
            }(qt(), Jt(), t, e, n, r)
        }
        function Ja(t, e) {
            const n = t[e];
            return n === us ? void 0 : n
        }
        function Xa(t, e) {
            const n = Zt();
            let r;
            const s = t + ut;
            n.firstCreatePass ? (r = function(t, e) {
                if (e)
                    for (let n = e.length - 1; n >= 0; n--) {
                        const r = e[n];
                        if (t === r.name)
                            return r
                    }
                throw new v("302",`The pipe '${t}' could not be found!`)
            }(e, n.pipeRegistry),
            n.data[s] = r,
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s];
            const i = r.factory || (r.factory = vt(r.type))
              , o = N(Hi);
            try {
                const t = Le(!1)
                  , e = i();
                return Le(t),
                function(t, e, n, r) {
                    n >= t.data.length && (t.data[n] = null,
                    t.blueprint[n] = null),
                    e[n] = r
                }(n, qt(), s, e),
                e
            } finally {
                N(o)
            }
        }
        function tl(t, e, n, r, s) {
            const i = t + ut
              , o = qt()
              , a = Nt(o, i);
            return function(t, e) {
                return Oi.isWrapped(e) && (e = Oi.unwrap(e),
                t[Xt()] = us),
                e
            }(o, function(t, e) {
                return t[1].data[e].pure
            }(o, i) ? function(t, e, n, r, s, i, o, a) {
                const l = e + n;
                return function(t, e, n, r, s) {
    /*                const i = Di(t, e, n, r);
                    return Li(t, e + 2, s) || i
    */            }(t, l, s, i, o) ? Ni(t, l + 3, a ? r.call(a, s, i, o) : r(s, i, o)) : Ja(t, l + 3)
            }(o, Jt(), e, a.transform, n, r, s, a) : a.transform(n, r, s))
        }
    /*    function el(t) {
            return e=>{
                setTimeout(t, void 0, e)
            }
        }*/
        const nl = class extends r.xQ {
            constructor(t=!1) {
                super(),
                this.__isAsync = t
            }
            emit(t) {
                super.next(t)
            }
            subscribe(t, e, n) {
                var r, i, o;
                let a = t
                  , l = e || (()=>null)
                  , c = n;
                if (t && "object" == typeof t) {
                    const e = t;
                    a = null === (r = e.next) || void 0 === r ? void 0 : r.bind(e),
                    l = null === (i = e.error) || void 0 === i ? void 0 : i.bind(e),
                    c = null === (o = e.complete) || void 0 === o ? void 0 : o.bind(e)
                }
                this.__isAsync && (l = el(l),
                a && (a = el(a)),
                c && (c = el(c)));
                const u = super.subscribe({
                    next: a,
                    error: l,
                    complete: c
                });
                return t instanceof s.w && t.add(u),
                u
            }
        }
        ;
        function rl() {
    /*        return this._results[Ii()]()
    */    }
        class sl {
            constructor(t=!1) {
                this._emitDistinctChangesOnly = t,
                this.dirty = !0,
                this._results = [],
                this._changesDetected = !1,
                this._changes = null,
                this.length = 0,
                this.first = void 0,
                this.last = void 0;
                const e = Ii()
                  , n = sl.prototype;
                n[e] || (n[e] = rl)
            }
    /*        get changes() {
                return this._changes || (this._changes = new nl)
            }
            get(t) {
                return this._results[t]
            }
            map(t) {
                return this._results.map(t)
            }
            filter(t) {
                return this._results.filter(t)
            }
            find(t) {
                return this._results.find(t)
            }
            reduce(t, e) {
                return this._results.reduce(t, e)
            }
            forEach(t) {
                this._results.forEach(t)
            }
            some(t) {
                return this._results.some(t)
            }
            toArray() {
                return this._results.slice()
            }
            toString() {
                return this._results.toString()
            }*/
            reset(t, e) {
                const n = this;
                n.dirty = !1;
                const r = an(t);
                (this._changesDetected = !function(t, e, n) {
                    if (t.length !== e.length)
                        return !1;
                    for (let r = 0; r < t.length; r++) {
                        let s = t[r]
                          , i = e[r];
                        if (n && (s = n(s),
                        i = n(i)),
                        i !== s)
                            return !1
                    }
                    return !0
                }(n._results, r, e)) && (n._results = r,
                n.length = r.length,
                n.last = r[this.length - 1],
                n.first = r[0])
            }
            notifyOnChanges() {
                !this._changes || !this._changesDetected && this._emitDistinctChangesOnly || this._changes.emit(this)
            }
    /*        setDirty() {
                this.dirty = !0
            }
            destroy() {
                this.changes.complete(),
                this.changes.unsubscribe()
            }*/
        }
        class il {
            constructor(t) {
                this.queryList = t,
                this.matches = null
            }
            clone() {
                return new il(this.queryList)
            }
    /*        setDirty() {
                this.queryList.setDirty()
            }*/
        }
        class ol {
            constructor(t=[]) {
                this.queries = t
            }
            createEmbeddedView(t) {
                const e = t.queries;
                if (null !== e) {
                    const n = null !== t.contentQueries ? t.contentQueries[0] : e.length
                      , r = [];
                    for (let t = 0; t < n; t++) {
                        const n = e.getByIndex(t);
                        r.push(this.queries[n.indexInDeclarationView].clone())
                    }
                    return new ol(r)
                }
                return null
            }
            insertView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            detachView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            dirtyQueriesWithMatches(t) {
                for (let e = 0; e < this.queries.length; e++)
                    null !== wl(t, e).matches && this.queries[e].setDirty()
            }
        }
        class al {
            constructor(t, e, n=null) {
                this.predicate = t,
                this.flags = e,
                this.read = n
            }
        }
        class ll {
            constructor(t=[]) {
                this.queries = t
            }
            elementStart(t, e) {
                for (let n = 0; n < this.queries.length; n++)
                    this.queries[n].elementStart(t, e)
            }
    /*        elementEnd(t) {
                for (let e = 0; e < this.queries.length; e++)
                    this.queries[e].elementEnd(t)
            }*/
            embeddedTView(t) {
                let e = null;
                for (let n = 0; n < this.length; n++) {
                    const r = null !== e ? e.length : 0
                      , s = this.getByIndex(n).embeddedTView(t, r);
                    s && (s.indexInDeclarationView = n,
                    null !== e ? e.push(s) : e = [s])
                }
                return null !== e ? new ll(e) : null
            }
            template(t, e) {
                for (let n = 0; n < this.queries.length; n++)
                    this.queries[n].template(t, e)
            }
            getByIndex(t) {
                return this.queries[t]
            }
            get length() {
                return this.queries.length
            }
            track(t) {
                this.queries.push(t)
            }
        }
        class cl {
            constructor(t, e=-1) {
                this.metadata = t,
                this.matches = null,
                this.indexInDeclarationView = -1,
                this.crossesNgTemplate = !1,
                this._appliesToNextNode = !0,
                this._declarationNodeIndex = e
            }
            elementStart(t, e) {
                this.isApplyingToNode(e) && this.matchTNode(t, e)
            }
    /*        elementEnd(t) {
                this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
            }*/
            template(t, e) {
                this.elementStart(t, e)
            }
            embeddedTView(t, e) {
                return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
                this.addMatch(-t.index, e),
                new cl(this.metadata)) : null
            }
            isApplyingToNode(t) {
                if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                    const e = this._declarationNodeIndex;
                    let n = t.parent;
                    for (; null !== n && 8 & n.type && n.index !== e; )
                        n = n.parent;
                    return e === (null !== n ? n.index : -1)
                }
                return this._appliesToNextNode
            }
            matchTNode(t, e) {
                const n = this.metadata.predicate;
                if (Array.isArray(n))
                    for (let r = 0; r < n.length; r++) {
                        const s = n[r];
                        this.matchTNodeWithReadOption(t, e, ul(e, s)),
                        this.matchTNodeWithReadOption(t, e, Ge(e, t, s, !1, !1))
                    }
                else
                    n === Ia ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Ge(e, t, n, !1, !1))
            }
            matchTNodeWithReadOption(t, e, n) {
                if (null !== n) {
                    const r = this.metadata.read;
                    if (null !== r)
                        if (r === Jo || r === Ua || r === Ia && 4 & e.type)
                            this.addMatch(e.index, -2);
                        else {
                            const n = Ge(e, t, r, !1, !1);
                            null !== n && this.addMatch(e.index, n)
                        }
                    else
                        this.addMatch(e.index, n)
                }
            }
            addMatch(t, e) {
                null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
            }
        }
        function ul(t, e) {
            const n = t.localNames;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2)
                    if (n[r] === e)
                        return n[r + 1];
            return null
        }
        function hl(t, e, n, r) {
            return -1 === n ? function(t, e) {
                return 11 & t.type ? Qo(t, e) : 4 & t.type ? Pa(t, e) : null
            }(e, t) : -2 === n ? function(t, e, n) {
                return n === Jo ? Qo(e, t) : n === Ia ? Pa(e, t) : n === Ua ? Va(e, t) : void 0
            }(t, e, r) : We(t, t[1], n, e)
        }
        function dl(t, e, n, r) {
            const s = e[19].queries[r];
            if (null === s.matches) {
                const r = t.data
                  , i = n.matches
                  , o = [];
                for (let t = 0; t < i.length; t += 2) {
                    const s = i[t];
                    o.push(s < 0 ? null : hl(e, r[s], i[t + 1], n.metadata.read))
                }
                s.matches = o
            }
            return s.matches
        }
        function fl(t, e, n, r) {
            const s = t.queries.getByIndex(n)
              , i = s.matches;
            if (null !== i) {
                const o = dl(t, e, s, n);
                for (let t = 0; t < i.length; t += 2) {
                    const n = i[t];
                    if (n > 0)
                        r.push(o[t / 2]);
                    else {
                        const s = i[t + 1]
                          , o = e[-n];
                        for (let t = ht; t < o.length; t++) {
                            const e = o[t];
                            e[17] === e[3] && fl(e[1], e, s, r)
                        }
                        if (null !== o[9]) {
                            const t = o[9];
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                fl(n[1], n, s, r)
                            }
                        }
                    }
                }
            }
            return r
        }
        function pl(t) {
            const e = qt()
              , n = Zt()
              , r = se();
            ie(r + 1);
            const s = wl(n, r);
            if (t.dirty && Dt(e) === (2 == (2 & s.metadata.flags))) {
                if (null === s.matches)
                    t.reset([]);
                else {
                    const i = s.crossesNgTemplate ? fl(n, e, r, []) : dl(n, e, s, r);
                    t.reset(i, Xo),
                    t.notifyOnChanges()
                }
                return !0
            }
            return !1
        }
        function gl(t, e, n) {
            const r = Zt();
            r.firstCreatePass && (_l(r, new al(t,e,n), -1),
            2 == (2 & e) && (r.staticViewQueries = !0)),
            vl(r, qt(), e)
        }
    /*    function ml(t, e, n, r) {
            const s = Zt();
            if (s.firstCreatePass) {
                const i = $t();
                _l(s, new al(e,n,r), i.index),
                function(t, e) {
                    const n = t.contentQueries || (t.contentQueries = []);
                    e !== (n.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
                }(s, t),
                2 == (2 & n) && (s.staticContentQueries = !0)
            }
            vl(s, qt(), n)
        }*/
        function yl() {
            return t = qt(),
            e = se(),
            t[19].queries[e].queryList;
            var t, e
        }
        function vl(t, e, n) {
            const r = new sl(4 == (4 & n));
            Rs(t, e, r, r.destroy),
            null === e[19] && (e[19] = new ol),
            e[19].queries.push(new il(r))
        }
        function _l(t, e, n) {
            null === t.queries && (t.queries = new ll),
            t.queries.track(new cl(e,n))
        }
        function wl(t, e) {
            return t.queries.getByIndex(e)
        }
        const bl = new rn("Application Initializer");
        let Cl = (()=>{
            class t {
                constructor(t) {
                    this.appInits = t,
                    this.resolve = Yo,
                    this.reject = Yo,
                    this.initialized = !1,
                    this.done = !1,
                    this.donePromise = new Promise((t,e)=>{
                        this.resolve = t,
                        this.reject = e
                    }
                    )
                }
                runInitializers() {
                    if (this.initialized)
                        return;
                    const t = []
                      , e = ()=>{
                        this.done = !0,
                        this.resolve()
                    }
                    ;
                    if (this.appInits)
                        for (let n = 0; n < this.appInits.length; n++) {
                            const e = this.appInits[n]();
                            if (Gi(e))
                                t.push(e);
                            else if (Yi(e)) {
                                const n = new Promise((t,n)=>{
            /*                        e.subscribe({
                                        complete: t,
                                        error: n
                                    })
            */                    }
                                );
                                t.push(n)
                            }
                        }
                    Promise.all(t).then(()=>{
                        e()
                    }
                    ).catch(t=>{
    /*                    this.reject(t)
    */                }
                    ),
                    0 === t.length && e(),
                    this.initialized = !0
                }
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(Cn(bl, 8))
    */        }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Sl = new rn("AppId")
          , xl = {
            provide: Sl,
            useFactory: function() {
    /*            return `${Tl()}${Tl()}${Tl()}`
    */        },
            deps: []
        };
    /*    function Tl() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }*/
        const El = new rn("Platform Initializer")
          , Al = new rn("Platform ID")
          , kl = new rn("appBootstrapListener");
        let Il = (()=>{
            class t {
        /*        log(t) {
                    console.log(t)
                }
                warn(t) {
                    console.warn(t)
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)
    */        }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Ol = new rn("LocaleId")
          , Rl = new rn("DefaultCurrencyCode");
    /*    class Pl {
            constructor(t, e) {
                this.ngModuleFactory = t,
                this.componentFactories = e
            }
        }*/
        const Nl = function(t) {
            return new Qa(t)
        }
          , Ll = Nl
          , Dl = function(t) {
            return Promise.resolve(Nl(t))
        }
          , Ul = function(t) {
    /*        const e = Nl(t)
              , n = Sr(ct(t).declarations).reduce((t,e)=>{
                const n = lt(e);
                return n && t.push(new Ba(n)),
                t
            }
            , []);
            return new Pl(e,n)*/
        }
          , jl = Ul
          , Fl = function(t) {
    /*        return Promise.resolve(Ul(t))
    */    };
        let Ml = (()=>{
            class t {
                constructor() {
                    this.compileModuleSync = Ll,
                    this.compileModuleAsync = Dl,
                    this.compileModuleAndAllComponentsSync = jl,
                    this.compileModuleAndAllComponentsAsync = Fl
                }
    /*            clearCache() {}
                clearCacheFor(t) {}
                getModuleId(t) {}*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)
    */        }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Hl = (()=>Promise.resolve(0))();
        function Vl(t) {
            "undefined" == typeof Zone ? Hl.then(()=>{
    /*            t && t.apply(null, null)
    */        }
            ) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }
        class ql {
            constructor({enableLongStackTrace: t=!1, shouldCoalesceEventChangeDetection: e=!1, shouldCoalesceRunChangeDetection: n=!1}) {
                if (this.hasPendingMacrotasks = !1,
                this.hasPendingMicrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new nl(!1),
                this.onMicrotaskEmpty = new nl(!1),
                this.onStable = new nl(!1),
                this.onError = new nl(!1),
                "undefined" == typeof Zone)
                    throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched();
                const r = this;
                r._nesting = 0,
                r._outer = r._inner = Zone.current,
                Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec)),
                t && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
                r.shouldCoalesceEventChangeDetection = !n && e,
                r.shouldCoalesceRunChangeDetection = n,
                r.lastRequestAnimationFrameId = -1,
                r.nativeRequestAnimationFrame = function() {
                    let t = q.requestAnimationFrame
                      , e = q.cancelAnimationFrame;
                    if ("undefined" != typeof Zone && t && e) {
                        const n = t[Zone.__symbol__("OriginalDelegate")];
                        n && (t = n);
                        const r = e[Zone.__symbol__("OriginalDelegate")];
                        r && (e = r)
                    }
                    return {
                        nativeRequestAnimationFrame: t,
                        nativeCancelAnimationFrame: e
                    }
                }().nativeRequestAnimationFrame,
                function(t) {
        /*            const e = ()=>{
                        !function(t) {
                            t.isCheckStableRunning || -1 !== t.lastRequestAnimationFrameId || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(q, ()=>{
                                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", ()=>{
                                    t.lastRequestAnimationFrameId = -1,
                                    $l(t),
                                    t.isCheckStableRunning = !0,
                                    zl(t),
                                    t.isCheckStableRunning = !1
                                }
                                , void 0, ()=>{}
                                , ()=>{}
                                )),
                                t.fakeTopEventTask.invoke()
                            }
                            ),
                            $l(t))
                        }(t)
                    }*/
                    ;
                    t._inner = t._inner.fork({
                        name: "angular",
                        properties: {
                            isAngularZone: !0
                        },
                        onInvokeTask: (n,r,s,i,o,a)=>{
                            try {
                                return Bl(t),
                                n.invokeTask(s, i, o, a)
                            } finally {
                                (t.shouldCoalesceEventChangeDetection && "eventTask" === i.type || t.shouldCoalesceRunChangeDetection) && e(),
                                Gl(t)
                            }
                        }
                        ,
                        onInvoke: (n,r,s,i,o,a,l)=>{
                            try {
                                return Bl(t),
                                n.invoke(s, i, o, a, l)
                            } finally {
                                t.shouldCoalesceRunChangeDetection && e(),
                                Gl(t)
                            }
                        }
                        ,
                        onHasTask: (e,n,r,s)=>{
                            e.hasTask(r, s),
                            n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask,
                            $l(t),
                            zl(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask))
                        }
                        ,
            /*            onHandleError: (e,n,r,s)=>(e.handleError(r, s),
                        t.runOutsideAngular(()=>t.onError.emit(s)),
                        !1)*/
                    })
                }(r)
            }
            static isInAngularZone() {
                return !0 === Zone.current.get("isAngularZone")
            }
            static assertInAngularZone() {
                if (!ql.isInAngularZone())
                    throw new Error("Expected to be in Angular Zone, but it is not!")
            }
            static assertNotInAngularZone() {
                if (ql.isInAngularZone())
                    throw new Error("Expected to not be in Angular Zone, but it is!")
            }
            run(t, e, n) {
                return this._inner.run(t, e, n)
            }
    /*        runTask(t, e, n, r) {
                const s = this._inner
                  , i = s.scheduleEventTask("NgZoneEvent: " + r, t, Zl, Yo, Yo);
                try {
                    return s.runTask(i, e, n)
                } finally {
                    s.cancelTask(i)
                }
            }
            runGuarded(t, e, n) {
                return this._inner.runGuarded(t, e, n)
            }*/
            runOutsideAngular(t) {
                return this._outer.run(t)
            }
        }
        const Zl = {};
        function zl(t) {
            if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
                try {
                    t._nesting++,
                    t.onMicrotaskEmpty.emit(null)
                } finally {
                    if (t._nesting--,
                    !t.hasPendingMicrotasks)
                        try {
                            t.runOutsideAngular(()=>t.onStable.emit(null))
                        } finally {
                            t.isStable = !0
                        }
                }
        }
        function $l(t) {
            t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId)
        }
        function Bl(t) {
            t._nesting++,
            t.isStable && (t.isStable = !1,
            t.onUnstable.emit(null))
        }
        function Gl(t) {
            t._nesting--,
            zl(t)
        }
    /*    class Wl {
            constructor() {
                this.hasPendingMicrotasks = !1,
                this.hasPendingMacrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new nl,
                this.onMicrotaskEmpty = new nl,
                this.onStable = new nl,
                this.onError = new nl
            }
            run(t, e, n) {
                return t.apply(e, n)
            }
            runGuarded(t, e, n) {
                return t.apply(e, n)
            }
            runOutsideAngular(t) {
                return t()
            }
            runTask(t, e, n, r) {
                return t.apply(e, n)
            }
        }*/
        let Yl = (()=>{
            class t {
                constructor(t) {
                    this._ngZone = t,
                    this._pendingCount = 0,
                    this._isZoneStable = !0,
                    this._didWork = !1,
                    this._callbacks = [],
                    this.taskTrackingZone = null,
                    this._watchAngularEvents(),
                    t.run(()=>{
                        this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                    }
                    )
                }
                _watchAngularEvents() {
                    this._ngZone.onUnstable.subscribe({
                        next: ()=>{
                            this._didWork = !0,
                            this._isZoneStable = !1
                        }
                    }),
                    this._ngZone.runOutsideAngular(()=>{
                        this._ngZone.onStable.subscribe({
                            next: ()=>{
                                ql.assertNotInAngularZone(),
                                Vl(()=>{
                                    this._isZoneStable = !0,
                                    this._runCallbacksIfReady()
                                }
                                )
                            }
                        })
                    }
                    )
                }
    /*            increasePendingRequestCount() {
                    return this._pendingCount += 1,
                    this._didWork = !0,
                    this._pendingCount
                }
                decreasePendingRequestCount() {
                    if (this._pendingCount -= 1,
                    this._pendingCount < 0)
                        throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(),
                    this._pendingCount
                }*/
                isStable() {
                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                }
                _runCallbacksIfReady() {
                    if (this.isStable())
                        Vl(()=>{
                            for (; 0 !== this._callbacks.length; ) {
                                let t = this._callbacks.pop();
                                clearTimeout(t.timeoutId),
                                t.doneCb(this._didWork)
                            }
                            this._didWork = !1
                        }
                        );
                    else {
                        let t = this.getPendingTasks();
                        this._callbacks = this._callbacks.filter(e=>!e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId),
                        !1)),
                        this._didWork = !0
                    }
                }
                getPendingTasks() {
                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t=>({
    /*                    source: t.source,
                        creationLocation: t.creationLocation,
                        data: t.data*/
                    })) : []
                }
    /*            addCallback(t, e, n) {
                    let r = -1;
                    e && e > 0 && (r = setTimeout(()=>{
                        this._callbacks = this._callbacks.filter(t=>t.timeoutId !== r),
                        t(this._didWork, this.getPendingTasks())
                    }
                    , e)),
                    this._callbacks.push({
                        doneCb: t,
                        timeoutId: r,
                        updateCb: n
                    })
                }
                whenStable(t, e, n) {
                    if (n && !this.taskTrackingZone)
                        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                    this.addCallback(t, e, n),
                    this._runCallbacksIfReady()
                }
                getPendingRequestCount() {
                    return this._pendingCount
                }
                findProviders(t, e, n) {
                    return []
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(Cn(ql))
    */        }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Ql = (()=>{
            class t {
                constructor() {
                    this._applications = new Map,
                    tc.addToWindow(this)
                }
                registerApplication(t, e) {
                    this._applications.set(t, e)
                }
    /*            unregisterApplication(t) {
                    this._applications.delete(t)
                }
                unregisterAllApplications() {
                    this._applications.clear()
                }
                getTestability(t) {
                    return this._applications.get(t) || null
                }
                getAllTestabilities() {
                    return Array.from(this._applications.values())
                }
                getAllRootElements() {
                    return Array.from(this._applications.keys())
                }
                findTestabilityInTree(t, e=!0) {
                    return tc.findTestabilityInTree(this, t, e)
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)
    */        }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class Kl {
    /*        addToWindow(t) {}
            findTestabilityInTree(t, e, n) {
                return null
            }*/
        }
        function Jl(t) {
            tc = t
        }
        let Xl, tc = new Kl, ec = !0, nc = !1;
        function rc() {
            return nc = !0,
            ec
        }
        function sc() {
            if (nc)
                throw new Error("Cannot enable prod mode after platform setup.");
            ec = !1
        }
        const ic = new rn("AllowMultipleToken");
        class oc {
            constructor(t, e) {
                this.name = t,
                this.token = e
            }
        }
        function ac(t, e, n=[]) {
            const r = `Platform: ${e}`
              , s = new rn(r);
            return (e=[])=>{
                let i = lc();
                if (!i || i.injector.get(ic, !1))
                    if (t)
                        t(n.concat(e).concat({
                            provide: s,
                            useValue: !0
                        }));
                    else {
                        const t = n.concat(e).concat({
                            provide: s,
                            useValue: !0
                        }, {
                            provide: li,
                            useValue: "platform"
                        });
                        !function(t) {
                            if (Xl && !Xl.destroyed && !Xl.injector.get(ic, !1))
                                throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                            Xl = t.get(cc);
                            const e = t.get(El, null);
                            e && e.forEach(t=>t())
                        }(bi.create({
                            providers: t,
                            name: r
                        }))
                    }
                return function(t) {
                    const e = lc();
                    if (!e)
                        throw new Error("No platform exists!");
                    if (!e.injector.get(t, null))
                        throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return e
                }(s)
            }
        }
        function lc() {
            return Xl && !Xl.destroyed ? Xl : null
        }
        let cc = (()=>{
            class t {
                constructor(t) {
                    this._injector = t,
                    this._modules = [],
                    this._destroyListeners = [],
                    this._destroyed = !1
                }
                bootstrapModuleFactory(t, e) {
                    const n = function(t, e) {
                        let n;
                        return n = "noop" === t ? new Wl : ("zone.js" === t ? void 0 : t) || new ql({
                            enableLongStackTrace: rc(),
                            shouldCoalesceEventChangeDetection: !!(null == e ? void 0 : e.ngZoneEventCoalescing),
                            shouldCoalesceRunChangeDetection: !!(null == e ? void 0 : e.ngZoneRunCoalescing)
                        }),
                        n
                    }(e ? e.ngZone : void 0, {
                        ngZoneEventCoalescing: e && e.ngZoneEventCoalescing || !1,
                        ngZoneRunCoalescing: e && e.ngZoneRunCoalescing || !1
                    })
                      , r = [{
                        provide: ql,
                        useValue: n
                    }];
                    return n.run(()=>{
                        const e = bi.create({
                            providers: r,
                            parent: this.injector,
                            name: t.moduleType.name
                        })
                          , s = t.create(e)
                          , i = s.injector.get(wr, null);
                        if (!i)
                            throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.runOutsideAngular(()=>{
                            const t = n.onError.subscribe({
                                next: t=>{
                /*                    i.handleError(t)
                */                }
                            });
                            s.onDestroy(()=>{
                /*                dc(this._modules, s),
                                t.unsubscribe()
                */            }
                            )
                        }
                        ),
                        function(t, e, n) {
                            try {
                                const r = n();
                                return Gi(r) ? r.catch(n=>{
                    /*                throw e.runOutsideAngular(()=>t.handleError(n)),
                                    n
                    */            }
                                ) : r
                            } catch (r) {
                                throw e.runOutsideAngular(()=>t.handleError(r)),
                                r
                            }
                        }(i, n, ()=>{
                            const t = s.injector.get(Cl);
                            return t.runInitializers(),
                            t.donePromise.then(()=>(jo(s.injector.get(Ol, Do) || Do),
                            this._moduleDoBootstrap(s),
                            s))
                        }
                        )
                    }
                    )
                }
                bootstrapModule(t, e=[]) {
                    const n = uc({}, e);
                    return function(t, e, n) {
                        const r = new Qa(n);
                        return Promise.resolve(r)
                    }(0, 0, t).then(t=>this.bootstrapModuleFactory(t, n))
                }
                _moduleDoBootstrap(t) {
                    const e = t.injector.get(hc);
                    if (t._bootstrapComponents.length > 0)
                        t._bootstrapComponents.forEach(t=>e.bootstrap(t));
                    else {
                        if (!t.instance.ngDoBootstrap)
                            throw new Error(`The module ${d(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }
    /*            onDestroy(t) {
                    this._destroyListeners.push(t)
                }*/
                get injector() {
                    return this._injector
                }
    /*            destroy() {
                    if (this._destroyed)
                        throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(t=>t.destroy()),
                    this._destroyListeners.forEach(t=>t()),
                    this._destroyed = !0
                }*/
                get destroyed() {
                    return this._destroyed
                }
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(Cn(bi))
    */        }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        function uc(t, e) {
            return Array.isArray(e) ? e.reduce(uc, t) : Object.assign(Object.assign({}, t), e)
        }
        let hc = (()=>{
            class t {
                constructor(t, e, n, r, s) {
                    this._zone = t,
                    this._injector = e,
                    this._exceptionHandler = n,
                    this._componentFactoryResolver = r,
                    this._initStatus = s,
                    this._bootstrapListeners = [],
                    this._views = [],
                    this._runningTick = !1,
                    this._stable = !0,
                    this.componentTypes = [],
                    this.components = [],
                    this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                        next: ()=>{
                            this._zone.run(()=>{
                                this.tick()
                            }
                            )
                        }
                    });
                    const u = new i.y(t=>{
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks,
                        this._zone.runOutsideAngular(()=>{
                            t.next(this._stable),
                            t.complete()
                        }
                        )
                    }
                    )
                      , h = new i.y(t=>{
                        let e;
                        this._zone.runOutsideAngular(()=>{
                            e = this._zone.onStable.subscribe(()=>{
                                ql.assertNotInAngularZone(),
                                Vl(()=>{
                                    this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0,
                                    t.next(!0))
                                }
                                )
                            }
                            )
                        }
                        );
                        const n = this._zone.onUnstable.subscribe(()=>{
                            ql.assertInAngularZone(),
                            this._stable && (this._stable = !1,
                            this._zone.runOutsideAngular(()=>{
                /*                t.next(!1)
                */            }
                            ))
                        }
                        );
                        return ()=>{
                            e.unsubscribe(),
                            n.unsubscribe()
                        }
                    }
                    );
                    this.isStable = (0,
                    o.T)(u, h.pipe(t=>(0,
                    l.x)()((0,
                    a.O)(c)(t))))
                }
                bootstrap(t, e) {
                    if (!this._initStatus.done)
                        throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    let n;
                    n = t instanceof Bo ? t : this._componentFactoryResolver.resolveComponentFactory(t),
                    this.componentTypes.push(n.componentType);
                    const r = n.isBoundToModule ? void 0 : this._injector.get(Na)
                      , s = n.create(bi.NULL, [], e || n.selector, r)
                      , i = s.location.nativeElement
                      , o = s.injector.get(Yl, null)
                      , a = o && s.injector.get(Ql);
                    return o && a && a.registerApplication(i, o),
                    s.onDestroy(()=>{
            /*            this.detachView(s.hostView),
                        dc(this.components, s),
                        a && a.unregisterApplication(i)
            */        }
                    ),
                    this._loadComponent(s),
                    s
                }
                tick() {
                    if (this._runningTick)
                        throw new Error("ApplicationRef.tick is called recursively");
                    try {
                        this._runningTick = !0;
                        for (let t of this._views)
                            t.detectChanges()
                    } catch (t) {
                        this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))
                    } finally {
                        this._runningTick = !1
                    }
                }
                attachView(t) {
                    const e = t;
                    this._views.push(e),
                    e.attachToAppRef(this)
                }
        /*        detachView(t) {
                    const e = t;
                    dc(this._views, e),
                    e.detachFromAppRef()
                }*/
                _loadComponent(t) {
                    this.attachView(t.hostView),
                    this.tick(),
                    this.components.push(t),
                    this._injector.get(kl, []).concat(this._bootstrapListeners).forEach(e=>e(t))
                }
        /*        ngOnDestroy() {
                    this._views.slice().forEach(t=>t.destroy()),
                    this._onMicrotaskEmptySubscription.unsubscribe()
                }
                get viewCount() {
                    return this._views.length
                }*/
            }
            return t.\u0275fac = function(e) {
        /*        return new (e || t)(Cn(ql),Cn(bi),Cn(wr),Cn(Wo),Cn(Cl))
        */    }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
    /*    function dc(t, e) {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }*/
        class fc {
        }
        class pc {
        }
        const gc = {
            factoryPathPrefix: "",
            factoryPathSuffix: ".ngfactory"
        };
        let mc = (()=>{
            class t {
                constructor(t, e) {
                    this._compiler = t,
                    this._config = e || gc
                }
        /*        load(t) {
                    return this.loadAndCompile(t)
                }
                loadAndCompile(t) {
                    let[e,r] = t.split("#");
                    return void 0 === r && (r = "default"),
                    n(8255)(e).then(t=>t[r]).then(t=>yc(t, e, r)).then(t=>this._compiler.compileModuleAsync(t))
                }
                loadFactory(t) {
                    let[e,r] = t.split("#")
                      , s = "NgFactory";
                    return void 0 === r && (r = "default",
                    s = ""),
                    n(8255)(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t=>t[r + s]).then(t=>yc(t, e, r))
                }*/
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Cn(Ml),Cn(pc, 8))
            }
            ,
            t.\u0275prov = C({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
    /*    function yc(t, e, n) {
            if (!t)
                throw new Error(`Cannot find '${n}' in '${e}'`);
            return t
        }*/
        const vc = function(t) {
    /*        return null
    */    }
          , _c = ac(null, "core", [{
            provide: Al,
            useValue: "unknown"
        }, {
            provide: cc,
            deps: [bi]
        }, {
            provide: Ql,
            deps: []
        }, {
            provide: Il,
            deps: []
        }])
          , wc = [{
            provide: hc,
            useClass: hc,
            deps: [ql, bi, wr, Wo, Cl]
        }, {
            provide: $a,
            deps: [ql],
    /*        useFactory: function(t) {
                let e = [];
                return t.onStable.subscribe(()=>{
                    for (; e.length; )
                        e.pop()()
                }
                ),
                function(t) {
                    e.push(t)
                }
            }*/
        }, {
            provide: Cl,
            useClass: Cl,
            deps: [[new En, bl]]
        }, {
            provide: Ml,
            useClass: Ml,
            deps: []
        }, xl, {
            provide: ya,
            useFactory: function() {
                return Ea
            },
            deps: []
        }, {
            provide: _a,
            useFactory: function() {
                return Aa
            },
            deps: []
        }, {
            provide: Ol,
            useFactory: function(t) {
                return jo(t = t || "undefined" != typeof $localize && $localize.locale || Do),
                t
            },
            deps: [[new Tn(Ol), new En, new An]]
        }, {
            provide: Rl,
            useValue: "USD"
        }];
        let bc = (()=>{
            class t {
                constructor(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Cn(hc))
            }
            ,
            t.\u0275mod = rt({
                type: t
            }),
            t.\u0275inj = S({
                providers: wc
            }),
            t
        }
        )()
    }
    ,
    2720: (t,e,n)=>{
        "use strict";
        n.d(e, {
            F0: ()=>Dn,
            yS: ()=>Un,
            Bz: ()=>Wn,
            lC: ()=>Fn
        });
        var r = n(1116)
          , s = n(5614)
          , i = n(3559)
          , o = n(3895);
        class a extends i.xQ {
            constructor(t) {
                super(),
                this._value = t
            }
            get value() {
                return this.getValue()
            }
            _subscribe(t) {
                const e = super._subscribe(t);
                return e && !e.closed && t.next(this._value),
                e
            }
            getValue() {
                if (this.hasError)
                    throw this.thrownError;
                if (this.closed)
                    throw new o.N;
                return this._value
            }
            next(t) {
                super.next(this._value = t)
            }
        }
        var l = n(6163)
          , c = n(8470)
          , u = n(6673);
        class h extends u.L {
    /*        notifyNext(t, e, n, r, s) {
                this.destination.next(e)
            }
            notifyError(t, e) {
                this.destination.error(t)
            }
            notifyComplete(t) {
                this.destination.complete()
            }*/
        }
    /*    class d extends u.L {
            constructor(t, e, n) {
                super(),
                this.parent = t,
                this.outerValue = e,
                this.outerIndex = n,
                this.index = 0
            }
            _next(t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }
            _error(t) {
                this.parent.notifyError(t, this),
                this.unsubscribe()
            }
            _complete() {
                this.parent.notifyComplete(this),
                this.unsubscribe()
            }
        }*/
        var f = n(6015)
          , p = n(8318);
    /*    function g(t, e, n, r, s=new d(t,n,r)) {
            if (!s.closed)
                return e instanceof p.y ? e.subscribe(s) : (0,
                f.s)(e)(s)
        }*/
        var m = n(9342);
        const y = {};
        class v {
            constructor(t) {
                this.resultSelector = t
            }
            call(t, e) {
                return e.subscribe(new _(t,this.resultSelector))
            }
        }
        class _ extends h {
            constructor(t, e) {
                super(t),
                this.resultSelector = e,
                this.active = 0,
                this.values = [],
                this.observables = []
            }
    /*        _next(t) {
                this.values.push(y),
                this.observables.push(t)
            }*/
            _complete() {
                const t = this.observables
                  , e = t.length;
                if (0 === e)
                    this.destination.complete();
                else {
                    this.active = e,
                    this.toRespond = e;
                    for (let n = 0; n < e; n++)
                        this.add(g(this, t[n], void 0, n))
                }
            }
    /*        notifyComplete(t) {
                0 == (this.active -= 1) && this.destination.complete()
            }
            notifyNext(t, e, n) {
                const r = this.values
                  , s = this.toRespond ? r[n] === y ? --this.toRespond : this.toRespond : 0;
                r[n] = e,
                0 === s && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
            }
            _tryResultSelector(t) {
                let e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }*/
        }
        const w = (()=>{
            function t() {
                return Error.call(this),
                this.message = "no elements in sequence",
                this.name = "EmptyError",
                this
            }
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )();
        var b = n(9764)
          , C = n(878)
          , S = n(7930)
          , x = n(1450)
          , T = n(653)
          , E = n(2875);
        function A(t, e) {
            let n = !1;
            return arguments.length >= 2 && (n = !0),
            function(r) {
                return r.lift(new k(t,e,n))
            }
        }
        class k {
            constructor(t, e, n=!1) {
                this.accumulator = t,
                this.seed = e,
                this.hasSeed = n
            }
            call(t, e) {
                return e.subscribe(new I(t,this.accumulator,this.seed,this.hasSeed))
            }
        }
        class I extends u.L {
            constructor(t, e, n, r) {
                super(t),
                this.accumulator = e,
                this._seed = n,
                this.hasSeed = r,
                this.index = 0
            }
            get seed() {
                return this._seed
            }
            set seed(t) {
                this.hasSeed = !0,
                this._seed = t
            }
            _next(t) {
                if (this.hasSeed)
                    return this._tryNext(t);
                this.seed = t,
                this.destination.next(t)
            }
            _tryNext(t) {
                const e = this.index++;
                let n;
                try {
                    n = this.accumulator(this.seed, t, e)
                } catch (r) {
                    this.destination.error(r)
                }
                this.seed = n,
                this.destination.next(n)
            }
        }
        var O = n(6882);
        function R(t) {
            return function(e) {
                const n = new P(t)
                  , r = e.lift(n);
                return n.caught = r
            }
        }
        class P {
            constructor(t) {
                this.selector = t
            }
            call(t, e) {
                return e.subscribe(new N(t,this.selector,this.caught))
            }
        }
        class N extends O.Ds {
            constructor(t, e, n) {
                super(t),
                this.selector = e,
                this.caught = n
            }
            error(t) {
                if (!this.isStopped) {
                    let n;
                    try {
                        n = this.selector(t, this.caught)
                    } catch (e) {
                        return void super.error(e)
                    }
                    this._unsubscribeAndRecycle();
                    const r = new O.IY(this);
                    this.add(r);
                    const s = (0,
                    O.ft)(n, r);
                    s !== r && this.add(s)
                }
            }
        }
        var L = n(3982);
        function D(t, e) {
            return (0,
            L.zg)(t, e, 1)
        }
        var U = n(3835)
          , j = n(8402);
        function F(t) {
            return function(e) {
                return 0 === t ? (0,
                T.c)() : e.lift(new M(t))
            }
        }
        class M {
            constructor(t) {
                if (this.total = t,
                this.total < 0)
                    throw new j.W
            }
            call(t, e) {
                return e.subscribe(new H(t,this.total))
            }
        }
        class H extends u.L {
            constructor(t, e) {
                super(t),
                this.total = e,
                this.ring = new Array,
                this.count = 0
            }
            _next(t) {
                const e = this.ring
                  , n = this.total
                  , r = this.count++;
                e.length < n ? e.push(t) : e[r % n] = t
            }
            _complete() {
                const t = this.destination;
                let e = this.count;
                if (e > 0) {
                    const n = this.count >= this.total ? this.total : this.count
                      , r = this.ring;
                    for (let s = 0; s < n; s++) {
                        const s = e++ % n;
                        t.next(r[s])
                    }
                }
                t.complete()
            }
        }
        function V(t=z) {
            return e=>e.lift(new q(t))
        }
        class q {
            constructor(t) {
                this.errorFactory = t
            }
            call(t, e) {
                return e.subscribe(new Z(t,this.errorFactory))
            }
        }
        class Z extends u.L {
            constructor(t, e) {
                super(t),
                this.errorFactory = e,
                this.hasValue = !1
            }
            _next(t) {
                this.hasValue = !0,
                this.destination.next(t)
            }
            _complete() {
                if (this.hasValue)
                    return this.destination.complete();
                {
                    let e;
                    try {
                        e = this.errorFactory()
                    } catch (t) {
                        e = t
                    }
                    this.destination.error(e)
                }
            }
        }
    /*    function z() {
            return new w
        }*/
        function $(t=null) {
            return e=>e.lift(new B(t))
        }
        class B {
            constructor(t) {
                this.defaultValue = t
            }
            call(t, e) {
                return e.subscribe(new G(t,this.defaultValue))
            }
        }
        class G extends u.L {
            constructor(t, e) {
                super(t),
                this.defaultValue = e,
                this.isEmpty = !0
            }
    /*        _next(t) {
                this.isEmpty = !1,
                this.destination.next(t)
            }*/
            _complete() {
                this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete()
            }
        }
        var W = n(3392)
          , Y = n(611);
        function Q(t, e) {
            const n = arguments.length >= 2;
            return r=>r.pipe(t ? (0,
            U.h)((e,n)=>t(e, n, r)) : W.y, (0,
            Y.q)(1), n ? $(e) : V(()=>new w))
        }
        var K = n(7570);
        class J {
            constructor(t) {
                this.callback = t
            }
            call(t, e) {
                return e.subscribe(new X(t,this.callback))
            }
        }
        class X extends u.L {
            constructor(t, e) {
                super(t),
                this.add(new K.w(e))
            }
        }
        var tt = n(9996)
          , et = n(4689)
          , nt = n(4019)
          , rt = n(1564)
          , st = n(7471);
        class it {
            constructor(t, e) {
                this.id = t,
                this.url = e
            }
        }
        class ot extends it {
            constructor(t, e, n="imperative", r=null) {
                super(t, e),
                this.navigationTrigger = n,
                this.restoredState = r
            }
    /*        toString() {
                return `NavigationStart(id: ${this.id}, url: '${this.url}')`
            }*/
        }
        class at extends it {
            constructor(t, e, n) {
                super(t, e),
                this.urlAfterRedirects = n
            }
    /*        toString() {
                return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
            }*/
        }
        class lt extends it {
            constructor(t, e, n) {
                super(t, e),
                this.reason = n
            }
    /*        toString() {
                return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
            }*/
        }
    /*    class ct extends it {
            constructor(t, e, n) {
                super(t, e),
                this.error = n
            }
            toString() {
                return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
            }
        }*/
        class ut extends it {
            constructor(t, e, n, r) {
                super(t, e),
                this.urlAfterRedirects = n,
                this.state = r
            }
    /*        toString() {
                return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }*/
        }
        class ht extends it {
            constructor(t, e, n, r) {
                super(t, e),
                this.urlAfterRedirects = n,
                this.state = r
            }
    /*        toString() {
                return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }*/
        }
        class dt extends it {
            constructor(t, e, n, r, s) {
                super(t, e),
                this.urlAfterRedirects = n,
                this.state = r,
                this.shouldActivate = s
            }
    /*        toString() {
                return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
            }*/
        }
        class ft extends it {
            constructor(t, e, n, r) {
                super(t, e),
                this.urlAfterRedirects = n,
                this.state = r
            }
    /*        toString() {
                return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }*/
        }
        class pt extends it {
            constructor(t, e, n, r) {
                super(t, e),
                this.urlAfterRedirects = n,
                this.state = r
            }
    /*        toString() {
                return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }*/
        }
        class gt {
            constructor(t) {
                this.route = t
            }
    /*        toString() {
                return `RouteConfigLoadStart(path: ${this.route.path})`
            }*/
        }
        class mt {
            constructor(t) {
                this.route = t
            }
    /*        toString() {
                return `RouteConfigLoadEnd(path: ${this.route.path})`
            }*/
        }
        class yt {
            constructor(t) {
                this.snapshot = t
            }
    /*        toString() {
                return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }*/
        }
        class vt {
            constructor(t) {
                this.snapshot = t
            }
    /*        toString() {
                return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }*/
        }
        class _t {
            constructor(t) {
                this.snapshot = t
            }
    /*        toString() {
                return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }*/
        }
        class wt {
            constructor(t) {
                this.snapshot = t
            }
    /*        toString() {
                return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }*/
        }
        class bt {
            constructor(t, e, n) {
                this.routerEvent = t,
                this.position = e,
                this.anchor = n
            }
    /*        toString() {
                return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`
            }*/
        }
        const Ct = "primary";
    /*    class St {
            constructor(t) {
                this.params = t || {}
            }
            has(t) {
                return Object.prototype.hasOwnProperty.call(this.params, t)
            }
            get(t) {
                if (this.has(t)) {
                    const e = this.params[t];
                    return Array.isArray(e) ? e[0] : e
                }
                return null
            }
            getAll(t) {
                if (this.has(t)) {
                    const e = this.params[t];
                    return Array.isArray(e) ? e : [e]
                }
                return []
            }
            get keys() {
                return Object.keys(this.params)
            }
        }*/
    /*    function xt(t) {
            return new St(t)
        }
        function Tt(t) {
            const e = Error("NavigationCancelingError: " + t);
            return e.ngNavigationCancelingError = !0,
            e
        }*/
        function Et(t, e, n) {
            const r = n.path.split("/");
            if (r.length > t.length)
                return null;
            if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
                return null;
            const s = {};
            for (let i = 0; i < r.length; i++) {
                const e = r[i]
                  , n = t[i];
                if (e.startsWith(":"))
                    s[e.substring(1)] = n;
                else if (e !== n.path)
                    return null
            }
            return {
                consumed: t.slice(0, r.length),
                posParams: s
            }
        }
        function At(t, e) {
            const n = t ? Object.keys(t) : void 0
              , r = e ? Object.keys(e) : void 0;
            if (!n || !r || n.length != r.length)
                return !1;
            let s;
            for (let i = 0; i < n.length; i++)
                if (s = n[i],
                !kt(t[s], e[s]))
                    return !1;
            return !0
        }
    /*    function kt(t, e) {
            if (Array.isArray(t) && Array.isArray(e)) {
                if (t.length !== e.length)
                    return !1;
                const n = [...t].sort()
                  , r = [...e].sort();
                return n.every((t,e)=>r[e] === t)
            }
            return t === e
        }*/
        function It(t) {
            return Array.prototype.concat.apply([], t)
        }
    /*    function Ot(t) {
            return t.length > 0 ? t[t.length - 1] : null
        }*/
        function Rt(t, e) {
            for (const n in t)
                t.hasOwnProperty(n) && e(t[n], n)
        }
        function Pt(t) {
            return (0,
            s.CqO)(t) ? t : (0,
            s.QGY)(t) ? (0,
            b.D)(Promise.resolve(t)) : (0,
            C.of)(t)
        }
        const Nt = {
    /*        exact: function t(e, n, r) {
                if (!qt(e.segments, n.segments))
                    return !1;
                if (!Ft(e.segments, n.segments, r))
                    return !1;
                if (e.numberOfChildren !== n.numberOfChildren)
                    return !1;
                for (const s in n.children) {
                    if (!e.children[s])
                        return !1;
                    if (!t(e.children[s], n.children[s], r))
                        return !1
                }
                return !0
            },*/
            subset: Ut
        }
          , Lt = {
        /*    exact: function(t, e) {
                return At(t, e)
            },
            subset: function(t, e) {
                return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n=>kt(t[n], e[n]))
            },*/
            ignored: ()=>!0
        };
    /*    function Dt(t, e, n) {
            return Nt[n.paths](t.root, e.root, n.matrixParams) && Lt[n.queryParams](t.queryParams, e.queryParams) && !("exact" === n.fragment && t.fragment !== e.fragment)
        }*/
        function Ut(t, e, n) {
            return jt(t, e, e.segments, n)
        }
    /*    function jt(t, e, n, r) {
            if (t.segments.length > n.length) {
                const s = t.segments.slice(0, n.length);
                return !!qt(s, n) && !e.hasChildren() && !!Ft(s, n, r)
            }
            if (t.segments.length === n.length) {
                if (!qt(t.segments, n))
                    return !1;
                if (!Ft(t.segments, n, r))
                    return !1;
                for (const n in e.children) {
                    if (!t.children[n])
                        return !1;
                    if (!Ut(t.children[n], e.children[n], r))
                        return !1
                }
                return !0
            }
            {
                const s = n.slice(0, t.segments.length)
                  , i = n.slice(t.segments.length);
                return !!qt(t.segments, s) && !!Ft(t.segments, s, r) && !!t.children.primary && jt(t.children.primary, e, i, r)
            }
        }
        function Ft(t, e, n) {
            return e.every((e,r)=>Lt[n](t[r].parameters, e.parameters))
        }*/
        class Mt {
            constructor(t, e, n) {
                this.root = t,
                this.queryParams = e,
                this.fragment = n
            }
        /*    get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = xt(this.queryParams)),
                this._queryParamMap
            }*/
            toString() {
                return $t.serialize(this)
            }
        }
        class Ht {
            constructor(t, e) {
                this.segments = t,
                this.children = e,
                this.parent = null,
                Rt(e, (t,e)=>t.parent = this)
            }
            hasChildren() {
                return this.numberOfChildren > 0
            }
            get numberOfChildren() {
                return Object.keys(this.children).length
            }
        /*    toString() {
                return Bt(this)
            }*/
        }
        class Vt {
            constructor(t, e) {
                this.path = t,
                this.parameters = e
            }
    /*        get parameterMap() {
                return this._parameterMap || (this._parameterMap = xt(this.parameters)),
                this._parameterMap
            }
            toString() {
                return Xt(this)
            }*/
        }
    /*    function qt(t, e) {
            return t.length === e.length && t.every((t,n)=>t.path === e[n].path)
        }*/
        class Zt {
        }
        class zt {
            parse(t) {
                const e = new se(t);
                return new Mt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())
            }
            serialize(t) {
                var e;
                return `/${Gt(t.root, !0)}${function(t) {
                    const e = Object.keys(t).map(e=>{
    /*                    const n = t[e];
                        return Array.isArray(n) ? n.map(t=>`${Yt(e)}=${Yt(t)}`).join("&") : `${Yt(e)}=${Yt(n)}`
    */                }
                    ).filter(t=>!!t);
                    return e.length ? `?${e.join("&")}` : ""
                }(t.queryParams)}${"string" == typeof t.fragment ? `#${e = t.fragment,
                encodeURI(e)}` : ""}`
            }
        }
        const $t = new zt;
        function Bt(t) {
            return t.segments.map(t=>Xt(t)).join("/")
        }
        function Gt(t, e) {
            if (!t.hasChildren())
                return Bt(t);
            if (e) {
                const e = t.children.primary ? Gt(t.children.primary, !1) : ""
                  , n = [];
                return Rt(t.children, (t,e)=>{
                    e !== Ct && n.push(`${e}:${Gt(t, !1)}`)
                }
                ),
                n.length > 0 ? `${e}(${n.join("//")})` : e
            }
            {
                const e = function(t, e) {
            /*        let n = [];
                    return Rt(t.children, (t,r)=>{
                        r === Ct && (n = n.concat(e(t, r)))
                    }
                    ),
                    Rt(t.children, (t,r)=>{
                        r !== Ct && (n = n.concat(e(t, r)))
                    }
                    ),
                    n
            */    }(t, (e,n)=>n === Ct ? [Gt(t.children.primary, !1)] : [`${n}:${Gt(e, !1)}`]);
                return 1 === Object.keys(t.children).length && null != t.children.primary ? `${Bt(t)}/${e[0]}` : `${Bt(t)}/(${e.join("//")})`
            }
        }
        function Wt(t) {
            return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }
    /*    function Yt(t) {
            return Wt(t).replace(/%3B/gi, ";")
        }*/
        function Qt(t) {
            return Wt(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }
        function Kt(t) {
            return decodeURIComponent(t)
        }
    /*    function Jt(t) {
            return Kt(t.replace(/\+/g, "%20"))
        }*/
        function Xt(t) {
            return `${Qt(t.path)}${e = t.parameters,
            Object.keys(e).map(t=>`;${Qt(t)}=${Qt(e[t])}`).join("")}`;
            var e
        }
        const te = /^[^\/()?;=#]+/;
        function ee(t) {
            const e = t.match(te);
            return e ? e[0] : ""
        }
        const ne = /^[^=?&#]+/
          , re = /^[^?&#]+/;
        class se {
            constructor(t) {
                this.url = t,
                this.remaining = t
            }
            parseRootSegment() {
                return this.consumeOptional("/"),
                "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Ht([],{}) : new Ht([],this.parseChildren())
            }
            parseQueryParams() {
                const t = {};
                if (this.consumeOptional("?"))
                    do {
                        this.parseQueryParam(t)
                    } while (this.consumeOptional("&"));
                return t
            }
            parseFragment() {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }
            parseChildren() {
                if ("" === this.remaining)
                    return {};
                this.consumeOptional("/");
                const t = [];
                for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
                    this.capture("/"),
                    t.push(this.parseSegment());
                let e = {};
                this.peekStartsWith("/(") && (this.capture("/"),
                e = this.parseParens(!0));
                let n = {};
                return this.peekStartsWith("(") && (n = this.parseParens(!1)),
                (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Ht(t,e)),
                n
            }
            parseSegment() {
                const t = ee(this.remaining);
                if ("" === t && this.peekStartsWith(";"))
                    throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                return this.capture(t),
                new Vt(Kt(t),this.parseMatrixParams())
            }
            parseMatrixParams() {
                const t = {};
                for (; this.consumeOptional(";"); )
                    this.parseParam(t);
                return t
            }
    /*        parseParam(t) {
                const e = ee(this.remaining);
                if (!e)
                    return;
                this.capture(e);
                let n = "";
                if (this.consumeOptional("=")) {
                    const t = ee(this.remaining);
                    t && (n = t,
                    this.capture(n))
                }
                t[Kt(e)] = Kt(n)
            }
            parseQueryParam(t) {
                const e = function(t) {
                    const e = t.match(ne);
                    return e ? e[0] : ""
                }(this.remaining);
                if (!e)
                    return;
                this.capture(e);
                let n = "";
                if (this.consumeOptional("=")) {
                    const t = function(t) {
                        const e = t.match(re);
                        return e ? e[0] : ""
                    }(this.remaining);
                    t && (n = t,
                    this.capture(n))
                }
                const r = Jt(e)
                  , s = Jt(n);
                if (t.hasOwnProperty(r)) {
                    let e = t[r];
                    Array.isArray(e) || (e = [e],
                    t[r] = e),
                    e.push(s)
                } else
                    t[r] = s
            }
            parseParens(t) {
                const e = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
                    const n = ee(this.remaining)
                      , r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r)
                        throw new Error(`Cannot parse url '${this.url}'`);
                    let s;
                    n.indexOf(":") > -1 ? (s = n.substr(0, n.indexOf(":")),
                    this.capture(s),
                    this.capture(":")) : t && (s = Ct);
                    const i = this.parseChildren();
                    e[s] = 1 === Object.keys(i).length ? i.primary : new Ht([],i),
                    this.consumeOptional("//")
                }
                return e
            }*/
            peekStartsWith(t) {
                return this.remaining.startsWith(t)
            }
            consumeOptional(t) {
                return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length),
                !0)
            }
            capture(t) {
                if (!this.consumeOptional(t))
                    throw new Error(`Expected "${t}".`)
            }
        }
        class ie {
            constructor(t) {
                this._root = t
            }
            get root() {
                return this._root.value
            }
            parent(t) {
                const e = this.pathFromRoot(t);
                return e.length > 1 ? e[e.length - 2] : null
            }
    /*        children(t) {
                const e = oe(t, this._root);
                return e ? e.children.map(t=>t.value) : []
            }
            firstChild(t) {
                const e = oe(t, this._root);
                return e && e.children.length > 0 ? e.children[0].value : null
            }
            siblings(t) {
                const e = ae(t, this._root);
                return e.length < 2 ? [] : e[e.length - 2].children.map(t=>t.value).filter(e=>e !== t)
            }*/
            pathFromRoot(t) {
                return ae(t, this._root).map(t=>t.value)
            }
        }
    /*    function oe(t, e) {
            if (t === e.value)
                return e;
            for (const n of e.children) {
                const e = oe(t, n);
                if (e)
                    return e
            }
            return null
        }*/
        function ae(t, e) {
            if (t === e.value)
                return [e];
            for (const n of e.children) {
                const r = ae(t, n);
                if (r.length)
                    return r.unshift(e),
                    r
            }
            return []
        }
        class le {
            constructor(t, e) {
                this.value = t,
                this.children = e
            }
    /*        toString() {
                return `TreeNode(${this.value})`
            }*/
        }
        function ce(t) {
            const e = {};
            return t && t.children.forEach(t=>e[t.value.outlet] = t),
            e
        }
        class ue extends ie {
            constructor(t, e) {
                super(t),
                this.snapshot = e,
                me(this, t)
            }
        /*    toString() {
                return this.snapshot.toString()
            }*/
        }
        function he(t, e) {
            const n = function(t, e) {
                const n = new pe([],{},{},"",{},Ct,e,null,t.root,-1,{});
                return new ge("",new le(n,[]))
            }(t, e)
              , r = new a([new Vt("",{})])
              , s = new a({})
              , i = new a({})
              , o = new a({})
              , l = new a("")
              , c = new de(r,s,o,l,i,Ct,e,n.root);
            return c.snapshot = n.root,
            new ue(new le(c,[]),n)
        }
        class de {
            constructor(t, e, n, r, s, i, o, a) {
                this.url = t,
                this.params = e,
                this.queryParams = n,
                this.fragment = r,
                this.data = s,
                this.outlet = i,
                this.component = o,
                this._futureSnapshot = a
            }
    /*        get routeConfig() {
                return this._futureSnapshot.routeConfig
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = this.params.pipe((0,
                tt.U)(t=>xt(t)))),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0,
                tt.U)(t=>xt(t)))),
                this._queryParamMap
            }
            toString() {
                return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
            }*/
        }
        function fe(t, e="emptyOnly") {
            const n = t.pathFromRoot;
            let r = 0;
            if ("always" !== e)
                for (r = n.length - 1; r >= 1; ) {
                    const t = n[r]
                      , e = n[r - 1];
                    if (t.routeConfig && "" === t.routeConfig.path)
                        r--;
                    else {
                        if (e.component)
                            break;
                        r--
                    }
                }
            return function(t) {
                return t.reduce((t,e)=>({
                    params: Object.assign(Object.assign({}, t.params), e.params),
                    data: Object.assign(Object.assign({}, t.data), e.data),
                    resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
                }), {
                    params: {},
                    data: {},
                    resolve: {}
                })
            }(n.slice(r))
        }
        class pe {
            constructor(t, e, n, r, s, i, o, a, l, c, u) {
                this.url = t,
                this.params = e,
                this.queryParams = n,
                this.fragment = r,
                this.data = s,
                this.outlet = i,
                this.component = o,
                this.routeConfig = a,
                this._urlSegment = l,
                this._lastPathIndex = c,
                this._resolve = u
            }
    /*        get root() {
                return this._routerState.root
            }*/
            get parent() {
                return this._routerState.parent(this)
            }
    /*        get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }*/
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
    /*        get paramMap() {
                return this._paramMap || (this._paramMap = xt(this.params)),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = xt(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return `Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`
            }*/
        }
        class ge extends ie {
            constructor(t, e) {
                super(e),
                this.url = t,
                me(this, e)
            }
    /*        toString() {
                return ye(this._root)
            }*/
        }
        function me(t, e) {
            e.value._routerState = t,
            e.children.forEach(e=>me(t, e))
        }
    /*    function ye(t) {
            const e = t.children.length > 0 ? ` { ${t.children.map(ye).join(", ")} } ` : "";
            return `${t.value}${e}`
        }*/
        function ve(t) {
            if (t.snapshot) {
                const e = t.snapshot
                  , n = t._futureSnapshot;
                t.snapshot = n,
                At(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
                e.fragment !== n.fragment && t.fragment.next(n.fragment),
                At(e.params, n.params) || t.params.next(n.params),
                function(t, e) {
                    if (t.length !== e.length)
                        return !1;
                    for (let n = 0; n < t.length; ++n)
                        if (!At(t[n], e[n]))
                            return !1;
                    return !0
                }(e.url, n.url) || t.url.next(n.url),
                At(e.data, n.data) || t.data.next(n.data)
            } else
                t.snapshot = t._futureSnapshot,
                t.data.next(t._futureSnapshot.data)
        }
    /*    function _e(t, e) {
            var n, r;
            return At(t.params, e.params) && qt(n = t.url, r = e.url) && n.every((t,e)=>At(t.parameters, r[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || _e(t.parent, e.parent))
        }*/
        function we(t, e, n) {
            if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
                const r = n.value;
                r._futureSnapshot = e.value;
                const s = function(t, e, n) {
                    return e.children.map(e=>{
                        for (const r of n.children)
                            if (t.shouldReuseRoute(e.value, r.value.snapshot))
                                return we(t, e, r);
                        return we(t, e)
                    }
                    )
                }(t, e, n);
                return new le(r,s)
            }
            {
                if (t.shouldAttach(e.value)) {
                    const n = t.retrieve(e.value);
                    if (null !== n) {
                        const t = n.route;
                        return be(e, t),
                        t
                    }
                }
                const n = new de(new a((r = e.value).url),new a(r.params),new a(r.queryParams),new a(r.fragment),new a(r.data),r.outlet,r.component,r)
                  , s = e.children.map(e=>we(t, e));
                return new le(n,s)
            }
            var r
        }
    /*    function be(t, e) {
            if (t.value.routeConfig !== e.value.routeConfig)
                throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
            if (t.children.length !== e.children.length)
                throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
            e.value._futureSnapshot = t.value;
            for (let n = 0; n < t.children.length; ++n)
                be(t.children[n], e.children[n])
        }*/
        function Ce(t) {
            return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        }
        function Se(t) {
            return "object" == typeof t && null != t && t.outlets
        }
        function xe(t, e, n, r, s) {
            let i = {};
            return r && Rt(r, (t,e)=>{
    /*            i[e] = Array.isArray(t) ? t.map(t=>`${t}`) : `${t}`
    */        }
            ),
            new Mt(n.root === t ? e : Te(n.root, t, e),i,s)
        }
    /*    function Te(t, e, n) {
            const r = {};
            return Rt(t.children, (t,s)=>{
                r[s] = t === e ? n : Te(t, e, n)
            }
            ),
            new Ht(t.segments,r)
        }*/
        class Ee {
            constructor(t, e, n) {
                if (this.isAbsolute = t,
                this.numberOfDoubleDots = e,
                this.commands = n,
                t && n.length > 0 && Ce(n[0]))
                    throw new Error("Root segment cannot have matrix parameters");
                const r = n.find(Se);
                if (r && r !== Ot(n))
                    throw new Error("{outlets:{}} has to be the last command")
            }
            toRoot() {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }
        }
        class Ae {
            constructor(t, e, n) {
                this.segmentGroup = t,
                this.processChildren = e,
                this.index = n
            }
        }
        function ke(t, e, n) {
            if (t || (t = new Ht([],{})),
            0 === t.segments.length && t.hasChildren())
                return Ie(t, e, n);
            const r = function(t, e, n) {
                let r = 0
                  , s = e;
                const i = {
                    match: !1,
                    pathIndex: 0,
                    commandIndex: 0
                };
                for (; s < t.segments.length; ) {
                    if (r >= n.length)
                        return i;
                    const e = t.segments[s]
                      , o = n[r];
                    if (Se(o))
                        break;
                    const a = `${o}`
                      , l = r < n.length - 1 ? n[r + 1] : null;
                    if (s > 0 && void 0 === a)
                        break;
                    if (a && l && "object" == typeof l && void 0 === l.outlets) {
                        if (!Ne(a, l, e))
                            return i;
                        r += 2
                    } else {
                        if (!Ne(a, {}, e))
                            return i;
                        r++
                    }
                    s++
                }
                return {
                    match: !0,
                    pathIndex: s,
                    commandIndex: r
                }
            }(t, e, n)
              , s = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < t.segments.length) {
                const e = new Ht(t.segments.slice(0, r.pathIndex),{});
                return e.children.primary = new Ht(t.segments.slice(r.pathIndex),t.children),
                Ie(e, 0, s)
            }
            return r.match && 0 === s.length ? new Ht(t.segments,{}) : r.match && !t.hasChildren() ? Oe(t, e, n) : r.match ? Ie(t, 0, s) : Oe(t, e, n)
        }
        function Ie(t, e, n) {
            if (0 === n.length)
                return new Ht(t.segments,{});
            {
                const r = function(t) {
                    return Se(t[0]) ? t[0].outlets : {
                        [Ct]: t
                    }
                }(n)
                  , s = {};
                return Rt(r, (n,r)=>{
                    "string" == typeof n && (n = [n]),
                    null !== n && (s[r] = ke(t.children[r], e, n))
                }
                ),
                Rt(t.children, (t,e)=>{
                    void 0 === r[e] && (s[e] = t)
                }
                ),
                new Ht(t.segments,s)
            }
        }
        function Oe(t, e, n) {
            const r = t.segments.slice(0, e);
            let s = 0;
            for (; s < n.length; ) {
                const i = n[s];
                if (Se(i)) {
                    const t = Re(i.outlets);
                    return new Ht(r,t)
                }
                if (0 === s && Ce(n[0])) {
                    r.push(new Vt(t.segments[e].path,Pe(n[0]))),
                    s++;
                    continue
                }
                const o = Se(i) ? i.outlets.primary : `${i}`
                  , a = s < n.length - 1 ? n[s + 1] : null;
                o && a && Ce(a) ? (r.push(new Vt(o,Pe(a))),
                s += 2) : (r.push(new Vt(o,{})),
                s++)
            }
            return new Ht(r,{})
        }
    /*    function Re(t) {
            const e = {};
            return Rt(t, (t,n)=>{
                "string" == typeof t && (t = [t]),
                null !== t && (e[n] = Oe(new Ht([],{}), 0, t))
            }
            ),
            e
        }
        function Pe(t) {
            const e = {};
            return Rt(t, (t,n)=>e[n] = `${t}`),
            e
        }*/
        function Ne(t, e, n) {
            return t == n.path && At(e, n.parameters)
        }
        class Le {
            constructor(t, e, n, r) {
                this.routeReuseStrategy = t,
                this.futureState = e,
                this.currState = n,
                this.forwardEvent = r
            }
            activate(t) {
                const e = this.futureState._root
                  , n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(e, n, t),
                ve(this.futureState.root),
                this.activateChildRoutes(e, n, t)
            }
            deactivateChildRoutes(t, e, n) {
                const r = ce(e);
                t.children.forEach(t=>{
                    const e = t.value.outlet;
                    this.deactivateRoutes(t, r[e], n),
                    delete r[e]
                }
                ),
                Rt(r, (t,e)=>{
        /*            this.deactivateRouteAndItsChildren(t, n)
        */        }
                )
            }
            deactivateRoutes(t, e, n) {
                const r = t.value
                  , s = e ? e.value : null;
                if (r === s)
                    if (r.component) {
                        const s = n.getContext(r.outlet);
                        s && this.deactivateChildRoutes(t, e, s.children)
                    } else
                        this.deactivateChildRoutes(t, e, n);
                else
                    s && this.deactivateRouteAndItsChildren(e, n)
            }
    /*        deactivateRouteAndItsChildren(t, e) {
                this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
            }
            detachAndStoreRouteSubtree(t, e) {
                const n = e.getContext(t.value.outlet);
                if (n && n.outlet) {
                    const e = n.outlet.detach()
                      , r = n.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(t.value.snapshot, {
                        componentRef: e,
                        route: t,
                        contexts: r
                    })
                }
            }
            deactivateRouteAndOutlet(t, e) {
                const n = e.getContext(t.value.outlet)
                  , r = n && t.value.component ? n.children : e
                  , s = ce(t);
                for (const i of Object.keys(s))
                    this.deactivateRouteAndItsChildren(s[i], r);
                n && n.outlet && (n.outlet.deactivate(),
                n.children.onOutletDeactivated(),
                n.attachRef = null,
                n.resolver = null,
                n.route = null)
            }*/
            activateChildRoutes(t, e, n) {
                const r = ce(e);
                t.children.forEach(t=>{
                    this.activateRoutes(t, r[t.value.outlet], n),
                    this.forwardEvent(new wt(t.value.snapshot))
                }
                ),
                t.children.length && this.forwardEvent(new vt(t.value.snapshot))
            }
            activateRoutes(t, e, n) {
                const r = t.value
                  , s = e ? e.value : null;
                if (ve(r),
                r === s)
                    if (r.component) {
                        const s = n.getOrCreateContext(r.outlet);
                        this.activateChildRoutes(t, e, s.children)
                    } else
                        this.activateChildRoutes(t, e, n);
                else if (r.component) {
                    const e = n.getOrCreateContext(r.outlet);
                    if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                        const t = this.routeReuseStrategy.retrieve(r.snapshot);
                        this.routeReuseStrategy.store(r.snapshot, null),
                        e.children.onOutletReAttached(t.contexts),
                        e.attachRef = t.componentRef,
                        e.route = t.route.value,
                        e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                        De(t.route)
                    } else {
                        const n = function(t) {
                            for (let e = t.parent; e; e = e.parent) {
                                const t = e.routeConfig;
                                if (t && t._loadedConfig)
                                    return t._loadedConfig;
                                if (t && t.component)
                                    return null
                            }
                            return null
                        }(r.snapshot)
                          , s = n ? n.module.componentFactoryResolver : null;
                        e.attachRef = null,
                        e.route = r,
                        e.resolver = s,
                        e.outlet && e.outlet.activateWith(r, s),
                        this.activateChildRoutes(t, null, e.children)
                    }
                } else
                    this.activateChildRoutes(t, null, n)
            }
        }
        function De(t) {
            ve(t.value),
            t.children.forEach(De)
        }
        class Ue {
            constructor(t, e) {
                this.routes = t,
                this.module = e
            }
        }
    /*    function je(t) {
            return "function" == typeof t
        }*/
        function Fe(t) {
            return t instanceof Mt
        }
        const Me = Symbol("INITIAL_VALUE");
        function He() {
            return (0,
            et.w)(t=>function(...t) {
                let e, n;
                return (0,
                l.K)(t[t.length - 1]) && (n = t.pop()),
                "function" == typeof t[t.length - 1] && (e = t.pop()),
                1 === t.length && (0,
                c.k)(t[0]) && (t = t[0]),
                (0,
                m.n)(t, n).lift(new v(e))
            }(t.map(t=>t.pipe((0,
            Y.q)(1), function(...t) {
        /*        const e = t[t.length - 1];
                return (0,
                l.K)(e) ? (t.pop(),
                n=>(0,
                S.z)(t, n, e)) : e=>(0,
                S.z)(t, e)
        */    }(Me)))).pipe(A((t,e)=>{
        /*        let n = !1;
                return e.reduce((t,r,s)=>{
                    if (t !== Me)
                        return t;
                    if (r === Me && (n = !0),
                    !n) {
                        if (!1 === r)
                            return r;
                        if (s === e.length - 1 || Fe(r))
                            return r
                    }
                    return t
                }
                , t)
        */    }
            , Me), (0,
            U.h)(t=>t !== Me), (0,
            tt.U)(t=>Fe(t) ? t : !0 === t), (0,
            Y.q)(1)))
        }
        let Ve = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)
    */        }
            ,
            t.\u0275cmp = s.Xpm({
                type: t,
                selectors: [["ng-component"]],
                decls: 1,
                vars: 0,
        /*        template: function(t, e) {
                    1 & t && s._UZ(0, "router-outlet")
                },
                directives: function() {
                    return [Fn]
                },*/
                encapsulation: 2
            }),
            t
        }
        )();
        function qe(t, e="") {
            for (let n = 0; n < t.length; n++) {
                const r = t[n];
                Ze(r, ze(e, r))
            }
        }
        function Ze(t, e) {
            t.children && qe(t.children, e)
        }
        function ze(t, e) {
            return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
        }
        function $e(t) {
            const e = t.children && t.children.map($e)
              , n = e ? Object.assign(Object.assign({}, t), {
                children: e
            }) : Object.assign({}, t);
            return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== Ct && (n.component = Ve),
            n
        }
        function Be(t) {
            return t.outlet || Ct
        }
        function Ge(t, e) {
            const n = t.filter(t=>Be(t) === e);
            return n.push(...t.filter(t=>Be(t) !== e)),
            n
        }
        const We = {
            matched: !1,
            consumedSegments: [],
            lastChild: 0,
            parameters: {},
            positionalParamSegments: {}
        };
        function Ye(t, e, n) {
            var r;
            if ("" === e.path)
                return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? Object.assign({}, We) : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    parameters: {},
                    positionalParamSegments: {}
                };
            const s = (e.matcher || Et)(n, t, e);
            if (!s)
                return Object.assign({}, We);
            const i = {};
            Rt(s.posParams, (t,e)=>{
    /*            i[e] = t.path
    */        }
            );
            const o = s.consumed.length > 0 ? Object.assign(Object.assign({}, i), s.consumed[s.consumed.length - 1].parameters) : i;
            return {
                matched: !0,
                consumedSegments: s.consumed,
                lastChild: s.consumed.length,
                parameters: o,
                positionalParamSegments: null !== (r = s.posParams) && void 0 !== r ? r : {}
            }
        }
        function Qe(t, e, n, r, s="corrected") {
            if (n.length > 0 && function(t, e, n) {
        /*        return n.some(n=>Ke(t, e, n) && Be(n) !== Ct)
        */    }(t, n, r)) {
                const s = new Ht(e,function(t, e, n, r) {
            /*        const s = {};
                    s.primary = r,
                    r._sourceSegment = t,
                    r._segmentIndexShift = e.length;
                    for (const i of n)
                        if ("" === i.path && Be(i) !== Ct) {
                            const n = new Ht([],{});
                            n._sourceSegment = t,
                            n._segmentIndexShift = e.length,
                            s[Be(i)] = n
                        }
                    return s
            */    }(t, e, r, new Ht(n,t.children)));
                return s._sourceSegment = t,
                s._segmentIndexShift = e.length,
                {
                    segmentGroup: s,
                    slicedSegments: []
                }
            }
            if (0 === n.length && function(t, e, n) {
                return n.some(n=>Ke(t, e, n))
            }(t, n, r)) {
                const i = new Ht(t.segments,function(t, e, n, r, s, i) {
                    const o = {};
                    for (const a of r)
                        if (Ke(t, n, a) && !s[Be(a)]) {
                            const n = new Ht([],{});
                            n._sourceSegment = t,
                            n._segmentIndexShift = "legacy" === i ? t.segments.length : e.length,
                            o[Be(a)] = n
                        }
                    return Object.assign(Object.assign({}, s), o)
                }(t, e, n, r, t.children, s));
                return i._sourceSegment = t,
                i._segmentIndexShift = e.length,
                {
                    segmentGroup: i,
                    slicedSegments: n
                }
            }
            const i = new Ht(t.segments,t.children);
            return i._sourceSegment = t,
            i._segmentIndexShift = e.length,
            {
                segmentGroup: i,
                slicedSegments: n
            }
        }
        function Ke(t, e, n) {
            return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path
        }
        function Je(t, e, n, r) {
            return !!(Be(t) === r || r !== Ct && Ke(e, n, t)) && ("**" === t.path || Ye(e, t, n).matched)
        }
        function Xe(t, e, n) {
            return 0 === e.length && !t.children[n]
        }
        class tn {
            constructor(t) {
                this.segmentGroup = t || null
            }
        }
    /*    class en {
            constructor(t) {
                this.urlTree = t
            }
        }*/
        function nn(t) {
            return new p.y(e=>e.error(new tn(t)))
        }
    /*    function rn(t) {
            return new p.y(e=>e.error(new en(t)))
        }
        function sn(t) {
            return new p.y(e=>e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
        }*/
        class on {
            constructor(t, e, n, r, i) {
                this.configLoader = e,
                this.urlSerializer = n,
                this.urlTree = r,
                this.config = i,
                this.allowRedirects = !0,
                this.ngModule = t.get(s.h0i)
            }
            apply() {
                const t = Qe(this.urlTree.root, [], [], this.config).segmentGroup
                  , e = new Ht(t.segments,t.children);
                return this.expandSegmentGroup(this.ngModule, this.config, e, Ct).pipe((0,
                tt.U)(t=>this.createUrlTree(an(t), this.urlTree.queryParams, this.urlTree.fragment))).pipe(R(t=>{
        /*            if (t instanceof en)
                        return this.allowRedirects = !1,
                        this.match(t.urlTree);
                    if (t instanceof tn)
                        throw this.noMatchError(t);
                    throw t
        */        }
                ))
            }
    /*        match(t) {
                return this.expandSegmentGroup(this.ngModule, this.config, t.root, Ct).pipe((0,
                tt.U)(e=>this.createUrlTree(an(e), t.queryParams, t.fragment))).pipe(R(t=>{
                    if (t instanceof tn)
                        throw this.noMatchError(t);
                    throw t
                }
                ))
            }
            noMatchError(t) {
                return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
            }*/
            createUrlTree(t, e, n) {
                const r = t.segments.length > 0 ? new Ht([],{
                    [Ct]: t
                }) : t;
                return new Mt(r,e,n)
            }
            expandSegmentGroup(t, e, n, r) {
                return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe((0,
                tt.U)(t=>new Ht([],t))) : this.expandSegment(t, n, e, n.segments, r, !0)
            }
            expandChildren(t, e, n) {
                const r = [];
                for (const s of Object.keys(n.children))
                    "primary" === s ? r.unshift(s) : r.push(s);
                return (0,
                b.D)(r).pipe(D(r=>{
                    const s = n.children[r]
                      , i = Ge(e, r);
                    return this.expandSegmentGroup(t, i, s, r).pipe((0,
                    tt.U)(t=>({
                        segment: t,
                        outlet: r
                    })))
                }
                ), A((t,e)=>(t[e.outlet] = e.segment,
                t), {}), function(t, e) {
                    const n = arguments.length >= 2;
                    return r=>r.pipe(t ? (0,
                    U.h)((e,n)=>t(e, n, r)) : W.y, F(1), n ? $(e) : V(()=>new w))
                }())
            }
            expandSegment(t, e, n, r, s, i) {
                return (0,
                b.D)(n).pipe(D(o=>this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(R(t=>{
                    if (t instanceof tn)
                        return (0,
                        C.of)(null);
                    throw t
                }
                ))), Q(t=>!!t), R((t,n)=>{
                    if (t instanceof w || "EmptyError" === t.name) {
                        if (Xe(e, r, s))
                            return (0,
                            C.of)(new Ht([],{}));
                        throw new tn(e)
                    }
                    throw t
                }
                ))
            }
            expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
                return Je(r, e, s, i) ? void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, s, i) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) : nn(e) : nn(e)
            }
    /*        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
                return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            }
            expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
                const s = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/") ? rn(s) : this.lineralizeSegments(n, s).pipe((0,
                L.zg)(n=>{
                    const s = new Ht(n,{});
                    return this.expandSegment(t, s, e, n, r, !1)
                }
                ))
            }
            expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
                const {matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: c} = Ye(e, r, s);
                if (!o)
                    return nn(e);
                const u = this.applyRedirectCommands(a, r.redirectTo, c);
                return r.redirectTo.startsWith("/") ? rn(u) : this.lineralizeSegments(r, u).pipe((0,
                L.zg)(r=>this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)))
            }*/
            matchSegmentAgainstRoute(t, e, n, r, s) {
                if ("**" === n.path)
                    return n.loadChildren ? (n._loadedConfig ? (0,
                    C.of)(n._loadedConfig) : this.configLoader.load(t.injector, n)).pipe((0,
                    tt.U)(t=>(n._loadedConfig = t,
                    new Ht(r,{})))) : (0,
                    C.of)(new Ht(r,{}));
                const {matched: i, consumedSegments: o, lastChild: a} = Ye(e, n, r);
                if (!i)
                    return nn(e);
                const l = r.slice(a);
                return this.getChildConfig(t, n, r).pipe((0,
                L.zg)(t=>{
                    const r = t.module
                      , i = t.routes
                      , {segmentGroup: a, slicedSegments: c} = Qe(e, o, l, i)
                      , u = new Ht(a.segments,a.children);
                    if (0 === c.length && u.hasChildren())
                        return this.expandChildren(r, i, u).pipe((0,
                        tt.U)(t=>new Ht(o,t)));
                    if (0 === i.length && 0 === c.length)
                        return (0,
                        C.of)(new Ht(o,{}));
                    const h = Be(n) === s;
                    return this.expandSegment(r, u, i, c, h ? Ct : s, !0).pipe((0,
                    tt.U)(t=>new Ht(o.concat(t.segments),t.children)))
                }
                ))
            }
            getChildConfig(t, e, n) {
                return e.children ? (0,
                C.of)(new Ue(e.children,t)) : e.loadChildren ? void 0 !== e._loadedConfig ? (0,
                C.of)(e._loadedConfig) : this.runCanLoadGuards(t.injector, e, n).pipe((0,
                L.zg)(n=>n ? this.configLoader.load(t.injector, e).pipe((0,
                tt.U)(t=>(e._loadedConfig = t,
                t))) : function(t) {
        /*            return new p.y(e=>e.error(Tt(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
        */        }(e))) : (0,
                C.of)(new Ue([],t))
            }
            runCanLoadGuards(t, e, n) {
                const r = e.canLoad;
                if (!r || 0 === r.length)
                    return (0,
                    C.of)(!0);
                const s = r.map(r=>{
        /*            const s = t.get(r);
                    let i;
                    if (function(t) {
                        return t && je(t.canLoad)
                    }(s))
                        i = s.canLoad(e, n);
                    else {
                        if (!je(s))
                            throw new Error("Invalid CanLoad guard");
                        i = s(e, n)
                    }
                    return Pt(i)
        */        }
                );
                return (0,
                C.of)(s).pipe(He(), (0,
                nt.b)(t=>{
        /*            if (!Fe(t))
                        return;
                    const e = Tt(`Redirecting to "${this.urlSerializer.serialize(t)}"`);
                    throw e.url = t,
                    e
                */}
                ), (0,
                tt.U)(t=>!0 === t))
            }
    /*        lineralizeSegments(t, e) {
                let n = []
                  , r = e.root;
                for (; ; ) {
                    if (n = n.concat(r.segments),
                    0 === r.numberOfChildren)
                        return (0,
                        C.of)(n);
                    if (r.numberOfChildren > 1 || !r.children.primary)
                        return sn(t.redirectTo);
                    r = r.children.primary
                }
            }
            applyRedirectCommands(t, e, n) {
                return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
            }
            applyRedirectCreatreUrlTree(t, e, n, r) {
                const s = this.createSegmentGroup(t, e.root, n, r);
                return new Mt(s,this.createQueryParams(e.queryParams, this.urlTree.queryParams),e.fragment)
            }
            createQueryParams(t, e) {
                const n = {};
                return Rt(t, (t,r)=>{
                    if ("string" == typeof t && t.startsWith(":")) {
                        const s = t.substring(1);
                        n[r] = e[s]
                    } else
                        n[r] = t
                }
                ),
                n
            }
            createSegmentGroup(t, e, n, r) {
                const s = this.createSegments(t, e.segments, n, r);
                let i = {};
                return Rt(e.children, (e,s)=>{
                    i[s] = this.createSegmentGroup(t, e, n, r)
                }
                ),
                new Ht(s,i)
            }
            createSegments(t, e, n, r) {
                return e.map(e=>e.path.startsWith(":") ? this.findPosParam(t, e, r) : this.findOrReturn(e, n))
            }
            findPosParam(t, e, n) {
                const r = n[e.path.substring(1)];
                if (!r)
                    throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
                return r
            }
            findOrReturn(t, e) {
                let n = 0;
                for (const r of e) {
                    if (r.path === t.path)
                        return e.splice(n),
                        r;
                    n++
                }
                return t
            }*/
        }
        function an(t) {
            const e = {};
            for (const n of Object.keys(t.children)) {
                const r = an(t.children[n]);
                (r.segments.length > 0 || r.hasChildren()) && (e[n] = r)
            }
            return function(t) {
                if (1 === t.numberOfChildren && t.children.primary) {
                    const e = t.children.primary;
                    return new Ht(t.segments.concat(e.segments),e.children)
                }
                return t
            }(new Ht(t.segments,e))
        }
        class ln {
            constructor(t) {
                this.path = t,
                this.route = this.path[this.path.length - 1]
            }
        }
    /*    class cn {
            constructor(t, e) {
                this.component = t,
                this.route = e
            }
        }*/
        function un(t, e, n) {
            const r = t._root;
            return dn(r, e ? e._root : null, n, [r.value])
        }
    /*    function hn(t, e, n) {
            const r = function(t) {
                if (!t)
                    return null;
                for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig)
                        return t._loadedConfig
                }
                return null
            }(e);
            return (r ? r.module.injector : n).get(t)
        }*/
        function dn(t, e, n, r, s={
            canDeactivateChecks: [],
            canActivateChecks: []
        }) {
            const i = ce(e);
            return t.children.forEach(t=>{
                !function(t, e, n, r, s={
                    canDeactivateChecks: [],
                    canActivateChecks: []
                }) {
                    const i = t.value
                      , o = e ? e.value : null
                      , a = n ? n.getContext(t.value.outlet) : null;
                    if (o && i.routeConfig === o.routeConfig) {
                        const l = function(t, e, n) {
                /*            if ("function" == typeof n)
                                return n(t, e);
                            switch (n) {
                            case "pathParamsChange":
                                return !qt(t.url, e.url);
                            case "pathParamsOrQueryParamsChange":
                                return !qt(t.url, e.url) || !At(t.queryParams, e.queryParams);
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !_e(t, e) || !At(t.queryParams, e.queryParams);
                            case "paramsChange":
                            default:
                                return !_e(t, e)
                            }
                */        }(o, i, i.routeConfig.runGuardsAndResolvers);
                        l ? s.canActivateChecks.push(new ln(r)) : (i.data = o.data,
                        i._resolvedData = o._resolvedData),
                        dn(t, e, i.component ? a ? a.children : null : n, r, s),
                        l && a && a.outlet && a.outlet.isActivated && s.canDeactivateChecks.push(new cn(a.outlet.component,o))
                    } else
                        o && fn(e, a, s),
                        s.canActivateChecks.push(new ln(r)),
                        dn(t, null, i.component ? a ? a.children : null : n, r, s)
                }(t, i[t.value.outlet], n, r.concat([t.value]), s),
                delete i[t.value.outlet]
            }
            ),
            Rt(i, (t,e)=>fn(t, n.getContext(e), s)),
            s
        }
    /*    function fn(t, e, n) {
            const r = ce(t)
              , s = t.value;
            Rt(r, (t,r)=>{
                fn(t, s.component ? e ? e.children.getContext(r) : null : e, n)
            }
            ),
            n.canDeactivateChecks.push(new cn(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null,s))
        }*/
        class pn {
        }
    /*    function gn(t) {
            return new p.y(e=>e.error(t))
        }*/
        class mn {
            constructor(t, e, n, r, s, i) {
                this.rootComponentType = t,
                this.config = e,
                this.urlTree = n,
                this.url = r,
                this.paramsInheritanceStrategy = s,
                this.relativeLinkResolution = i
            }
            recognize() {
                const t = Qe(this.urlTree.root, [], [], this.config.filter(t=>void 0 === t.redirectTo), this.relativeLinkResolution).segmentGroup
                  , e = this.processSegmentGroup(this.config, t, Ct);
                if (null === e)
                    return null;
                const n = new pe([],Object.freeze({}),Object.freeze(Object.assign({}, this.urlTree.queryParams)),this.urlTree.fragment,{},Ct,this.rootComponentType,null,this.urlTree.root,-1,{})
                  , r = new le(n,e)
                  , s = new ge(this.url,r);
                return this.inheritParamsAndData(s._root),
                s
            }
            inheritParamsAndData(t) {
                const e = t.value
                  , n = fe(e, this.paramsInheritanceStrategy);
                e.params = Object.freeze(n.params),
                e.data = Object.freeze(n.data),
                t.children.forEach(t=>this.inheritParamsAndData(t))
            }
            processSegmentGroup(t, e, n) {
                return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
            }
            processChildren(t, e) {
                const n = [];
                for (const s of Object.keys(e.children)) {
                    const r = e.children[s]
                      , i = Ge(t, s)
                      , o = this.processSegmentGroup(i, r, s);
                    if (null === o)
                        return null;
                    n.push(...o)
                }
                const r = vn(n);
                return r.sort((t,e)=>t.value.outlet === Ct ? -1 : e.value.outlet === Ct ? 1 : t.value.outlet.localeCompare(e.value.outlet)),
                r
            }
            processSegment(t, e, n, r) {
                for (const s of t) {
                    const t = this.processSegmentAgainstRoute(s, e, n, r);
                    if (null !== t)
                        return t
                }
                return Xe(e, n, r) ? [] : null
            }
            processSegmentAgainstRoute(t, e, n, r) {
                if (t.redirectTo || !Je(t, e, n, r))
                    return null;
                let s, i = [], o = [];
                if ("**" === t.path) {
                    const r = n.length > 0 ? Ot(n).parameters : {};
                    s = new pe(n,r,Object.freeze(Object.assign({}, this.urlTree.queryParams)),this.urlTree.fragment,bn(t),Be(t),t.component,t,_n(e),wn(e) + n.length,Cn(t))
                } else {
                    const r = Ye(e, t, n);
                    if (!r.matched)
                        return null;
                    i = r.consumedSegments,
                    o = n.slice(r.lastChild),
                    s = new pe(i,r.parameters,Object.freeze(Object.assign({}, this.urlTree.queryParams)),this.urlTree.fragment,bn(t),Be(t),t.component,t,_n(e),wn(e) + i.length,Cn(t))
                }
                const a = function(t) {
                    return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                }(t)
                  , {segmentGroup: l, slicedSegments: c} = Qe(e, i, o, a.filter(t=>void 0 === t.redirectTo), this.relativeLinkResolution);
                if (0 === c.length && l.hasChildren()) {
                    const t = this.processChildren(a, l);
                    return null === t ? null : [new le(s,t)]
                }
                if (0 === a.length && 0 === c.length)
                    return [new le(s,[])];
                const u = Be(t) === r
                  , h = this.processSegment(a, l, c, u ? Ct : r);
                return null === h ? null : [new le(s,h)]
            }
        }
        function yn(t) {
            const e = t.value.routeConfig;
            return e && "" === e.path && void 0 === e.redirectTo
        }
        function vn(t) {
            const e = []
              , n = new Set;
            for (const r of t) {
                if (!yn(r)) {
                    e.push(r);
                    continue
                }
                const t = e.find(t=>r.value.routeConfig === t.value.routeConfig);
                void 0 !== t ? (t.children.push(...r.children),
                n.add(t)) : e.push(r)
            }
            for (const r of n) {
                const t = vn(r.children);
                e.push(new le(r.value,t))
            }
            return e.filter(t=>!n.has(t))
        }
        function _n(t) {
            let e = t;
            for (; e._sourceSegment; )
                e = e._sourceSegment;
            return e
        }
        function wn(t) {
            let e = t
              , n = e._segmentIndexShift ? e._segmentIndexShift : 0;
            for (; e._sourceSegment; )
                e = e._sourceSegment,
                n += e._segmentIndexShift ? e._segmentIndexShift : 0;
            return n - 1
        }
        function bn(t) {
            return t.data || {}
        }
        function Cn(t) {
            return t.resolve || {}
        }
        function Sn(t) {
            return (0,
            et.w)(e=>{
                const n = t(e);
                return n ? (0,
                b.D)(n).pipe((0,
                tt.U)(()=>e)) : (0,
                C.of)(e)
            }
            )
        }
        class xn extends class {
    /*        shouldDetach(t) {
                return !1
            }
            store(t, e) {}*/
            shouldAttach(t) {
                return !1
            }
    /*        retrieve(t) {
                return null
            }*/
            shouldReuseRoute(t, e) {
                return t.routeConfig === e.routeConfig
            }
        }
        {
        }
        const Tn = new s.OlP("ROUTES");
        class En {
            constructor(t, e, n, r) {
                this.loader = t,
                this.compiler = e,
                this.onLoadStartListener = n,
                this.onLoadEndListener = r
            }
            load(t, e) {
                if (e._loader$)
                    return e._loader$;
                this.onLoadStartListener && this.onLoadStartListener(e);
                const n = this.loadModuleFactory(e.loadChildren).pipe((0,
                tt.U)(n=>{
                    this.onLoadEndListener && this.onLoadEndListener(e);
                    const r = n.create(t);
                    return new Ue(It(r.injector.get(Tn, void 0, s.XFs.Self | s.XFs.Optional)).map($e),r)
                }
                ), R(t=>{
            /*        throw e._loader$ = void 0,
                    t*/
                }
                ));
                return e._loader$ = new E.c(n,()=>new i.xQ).pipe((0,
                rt.x)()),
                e._loader$
            }
            loadModuleFactory(t) {
                return "string" == typeof t ? (0,
                b.D)(this.loader.load(t)) : Pt(t()).pipe((0,
                L.zg)(t=>t instanceof s.YKP ? (0,
                C.of)(t) : (0,
                b.D)(this.compiler.compileModuleAsync(t))))
            }
        }
        class An {
            constructor() {
                this.outlet = null,
                this.route = null,
                this.resolver = null,
                this.children = new kn,
                this.attachRef = null
            }
        }
        class kn {
            constructor() {
                this.contexts = new Map
            }
            onChildOutletCreated(t, e) {
                const n = this.getOrCreateContext(t);
                n.outlet = e,
                this.contexts.set(t, n)
            }
    /*        onChildOutletDestroyed(t) {
                const e = this.getContext(t);
                e && (e.outlet = null)
            }
            onOutletDeactivated() {
                const t = this.contexts;
                return this.contexts = new Map,
                t
            }
            onOutletReAttached(t) {
                this.contexts = t
            }*/
            getOrCreateContext(t) {
                let e = this.getContext(t);
                return e || (e = new An,
                this.contexts.set(t, e)),
                e
            }
            getContext(t) {
                return this.contexts.get(t) || null
            }
        }
        class In {
            shouldProcessUrl(t) {
                return !0
            }
            extract(t) {
                return t
            }
            merge(t, e) {
                return t
            }
        }
        function On(t) {
            throw t
        }
        function Rn(t, e, n) {
            return e.parse("/")
        }
        function Pn(t, e) {
            return (0,
            C.of)(null)
        }
        const Nn = {
            paths: "exact",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "exact"
        }
          , Ln = {
            paths: "subset",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "subset"
        };
        let Dn = (()=>{
            class t {
                constructor(t, e, n, r, o, l, c, u) {
                    this.rootComponentType = t,
                    this.urlSerializer = e,
                    this.rootContexts = n,
                    this.location = r,
                    this.config = u,
                    this.lastSuccessfulNavigation = null,
                    this.currentNavigation = null,
                    this.disposed = !1,
                    this.lastLocationChangeInfo = null,
                    this.navigationId = 0,
                    this.currentPageId = 0,
                    this.isNgZoneEnabled = !1,
                    this.events = new i.xQ,
                    this.errorHandler = On,
                    this.malformedUriErrorHandler = Rn,
                    this.navigated = !1,
                    this.lastSuccessfulId = -1,
                    this.hooks = {
                        beforePreactivation: Pn,
                        afterPreactivation: Pn
                    },
                    this.urlHandlingStrategy = new In,
                    this.routeReuseStrategy = new xn,
                    this.onSameUrlNavigation = "ignore",
                    this.paramsInheritanceStrategy = "emptyOnly",
                    this.urlUpdateStrategy = "deferred",
                    this.relativeLinkResolution = "corrected",
                    this.canceledNavigationResolution = "replace",
                    this.ngModule = o.get(s.h0i),
                    this.console = o.get(s.c2e);
                    const h = o.get(s.R0b);
                    this.isNgZoneEnabled = h instanceof s.R0b && s.R0b.isInAngularZone(),
                    this.resetConfig(u),
                    this.currentUrlTree = new Mt(new Ht([],{}),{},null),
                    this.rawUrlTree = this.currentUrlTree,
                    this.browserUrlTree = this.currentUrlTree,
                    this.configLoader = new En(l,c,t=>this.triggerEvent(new gt(t)),t=>this.triggerEvent(new mt(t))),
                    this.routerState = he(this.currentUrlTree, this.rootComponentType),
                    this.transitions = new a({
                        id: 0,
                        targetPageId: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {
                            canActivateChecks: [],
                            canDeactivateChecks: []
                        },
                        guardsResult: null
                    }),
                    this.navigations = this.setupNavigations(this.transitions),
                    this.processNavigations()
                }
                setupNavigations(t) {
                    const e = this.events;
                    return t.pipe((0,
                    U.h)(t=>0 !== t.id), (0,
                    tt.U)(t=>Object.assign(Object.assign({}, t), {
                        extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
                    })), (0,
                    et.w)(t=>{
                        let n = !1
                          , r = !1;
                        return (0,
                        C.of)(t).pipe((0,
                        nt.b)(t=>{
                            this.currentNavigation = {
                                id: t.id,
                                initialUrl: t.currentRawUrl,
                                extractedUrl: t.extractedUrl,
                                trigger: t.source,
                                extras: t.extras,
                                previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                                    previousNavigation: null
                                }) : null
                            }
                        }
                        ), (0,
                        et.w)(t=>{
                            const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                            if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))
                                return (0,
                                C.of)(t).pipe((0,
                                et.w)(t=>{
                                    const n = this.transitions.getValue();
                                    return e.next(new ot(t.id,this.serializeUrl(t.extractedUrl),t.source,t.restoredState)),
                                    n !== this.transitions.getValue() ? T.E : Promise.resolve(t)
                                }
                                ), (r = this.ngModule.injector,
                                s = this.configLoader,
                                i = this.urlSerializer,
                                o = this.config,
                                (0,
                                et.w)(t=>function(t, e, n, r, s) {
                                    return new on(t,e,n,r,s).apply()
                                }(r, s, i, t.extractedUrl, o).pipe((0,
                                tt.U)(e=>Object.assign(Object.assign({}, t), {
                                    urlAfterRedirects: e
                                }))))), (0,
                                nt.b)(t=>{
                                    this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                                        finalUrl: t.urlAfterRedirects
                                    })
                                }
                                ), function(t, e, n, r, s) {
                                    return (0,
                                    L.zg)(i=>function(t, e, n, r, s="emptyOnly", i="legacy") {
                                        try {
                                            const o = new mn(t,e,n,r,s,i).recognize();
                                            return null === o ? gn(new pn) : (0,
                                            C.of)(o)
                                        } catch (o) {
                                            return gn(o)
                                        }
                                    }(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe((0,
                                    tt.U)(t=>Object.assign(Object.assign({}, i), {
                                        targetSnapshot: t
                                    }))))
                                }(this.rootComponentType, this.config, t=>this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), (0,
                                nt.b)(t=>{
                                    "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, t),
                                    this.browserUrlTree = t.urlAfterRedirects);
                                    const n = new ut(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);
                                    e.next(n)
                                }
                                ));
                            var r, s, i, o;
                            if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                const {id: n, extractedUrl: r, source: s, restoredState: i, extras: o} = t
                                  , a = new ot(n,this.serializeUrl(r),s,i);
                                e.next(a);
                                const l = he(r, this.rootComponentType).snapshot;
                                return (0,
                                C.of)(Object.assign(Object.assign({}, t), {
                                    targetSnapshot: l,
                                    urlAfterRedirects: r,
                                    extras: Object.assign(Object.assign({}, o), {
                                        skipLocationChange: !1,
                                        replaceUrl: !1
                                    })
                                }))
                            }
                            return this.rawUrlTree = t.rawUrl,
                            this.browserUrlTree = t.urlAfterRedirects,
                            t.resolve(null),
                            T.E
                        }
                        ), Sn(t=>{
                            const {targetSnapshot: e, id: n, extractedUrl: r, rawUrl: s, extras: {skipLocationChange: i, replaceUrl: o}} = t;
                            return this.hooks.beforePreactivation(e, {
                                navigationId: n,
                                appliedUrlTree: r,
                                rawUrlTree: s,
                                skipLocationChange: !!i,
                                replaceUrl: !!o
                            })
                        }
                        ), (0,
                        nt.b)(t=>{
                            const e = new ht(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);
                            this.triggerEvent(e)
                        }
                        ), (0,
                        tt.U)(t=>Object.assign(Object.assign({}, t), {
                            guards: un(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
                        })), function(t, e) {
                            return (0,
                            L.zg)(n=>{
                                const {targetSnapshot: r, currentSnapshot: s, guards: {canActivateChecks: i, canDeactivateChecks: o}} = n;
                                return 0 === o.length && 0 === i.length ? (0,
                                C.of)(Object.assign(Object.assign({}, n), {
                                    guardsResult: !0
                                })) : function(t, e, n, r) {
                                    return (0,
                                    b.D)(t).pipe((0,
                                    L.zg)(t=>function(t, e, n, r, s) {
                            /*            const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                        if (!i || 0 === i.length)
                                            return (0,
                                            C.of)(!0);
                                        const o = i.map(i=>{
                                            const o = hn(i, e, s);
                                            let a;
                                            if (function(t) {
                                                return t && je(t.canDeactivate)
                                            }(o))
                                                a = Pt(o.canDeactivate(t, e, n, r));
                                            else {
                                                if (!je(o))
                                                    throw new Error("Invalid CanDeactivate guard");
                                                a = Pt(o(t, e, n, r))
                                            }
                                            return a.pipe(Q())
                                        }
                                        );
                                        return (0,
                                        C.of)(o).pipe(He())
                        */            }(t.component, t.route, n, e, r)), Q(t=>!0 !== t, !0))
                                }(o, r, s, t).pipe((0,
                                L.zg)(n=>n && "boolean" == typeof n ? function(t, e, n, r) {
                                    return (0,
                                    b.D)(e).pipe(D(e=>(0,
                                    S.z)(function(t, e) {
                                        return null !== t && e && e(new yt(t)),
                                        (0,
                                        C.of)(!0)
                                    }(e.route.parent, r), function(t, e) {
                                        return null !== t && e && e(new _t(t)),
                                        (0,
                                        C.of)(!0)
                                    }(e.route, r), function(t, e, n) {
                                        const r = e[e.length - 1]
                                          , s = e.slice(0, e.length - 1).reverse().map(t=>function(t) {
                                            const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                                            return e && 0 !== e.length ? {
                                                node: t,
                                                guards: e
                                            } : null
                                        }(t)).filter(t=>null !== t).map(e=>(0,
                                        x.P)(()=>{
                                /*            const s = e.guards.map(s=>{
                                                const i = hn(s, e.node, n);
                                                let o;
                                                if (function(t) {
                                                    return t && je(t.canActivateChild)
                                                }(i))
                                                    o = Pt(i.canActivateChild(r, t));
                                                else {
                                                    if (!je(i))
                                                        throw new Error("Invalid CanActivateChild guard");
                                                    o = Pt(i(r, t))
                                                }
                                                return o.pipe(Q())
                                            }
                                            );
                                            return (0,
                                            C.of)(s).pipe(He())
                            */            }
                                        ));
                                        return (0,
                                        C.of)(s).pipe(He())
                                    }(t, e.path, n), function(t, e, n) {
                                        const r = e.routeConfig ? e.routeConfig.canActivate : null;
                                        if (!r || 0 === r.length)
                                            return (0,
                                            C.of)(!0);
                                        const s = r.map(r=>(0,
                                        x.P)(()=>{
                                /*            const s = hn(r, e, n);
                                            let i;
                                            if (function(t) {
                                                return t && je(t.canActivate)
                                            }(s))
                                                i = Pt(s.canActivate(e, t));
                                            else {
                                                if (!je(s))
                                                    throw new Error("Invalid CanActivate guard");
                                                i = Pt(s(e, t))
                                            }
                                            return i.pipe(Q())
                                */        }
                                        ));
                                        return (0,
                                        C.of)(s).pipe(He())
                                    }(t, e.route, n))), Q(t=>!0 !== t, !0))
                                }(r, i, t, e) : (0,
                                C.of)(n)), (0,
                                tt.U)(t=>Object.assign(Object.assign({}, n), {
                                    guardsResult: t
                                })))
                            }
                            )
                        }(this.ngModule.injector, t=>this.triggerEvent(t)), (0,
                        nt.b)(t=>{
                            if (Fe(t.guardsResult)) {
                                const e = Tt(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                                throw e.url = t.guardsResult,
                                e
                            }
                            const e = new dt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot,!!t.guardsResult);
                            this.triggerEvent(e)
                        }
                        ), (0,
                        U.h)(t=>!!t.guardsResult || (this.cancelNavigationTransition(t, ""),
                        !1)), Sn(t=>{
                            if (t.guards.canActivateChecks.length)
                                return (0,
                                C.of)(t).pipe((0,
                                nt.b)(t=>{
                                    const e = new ft(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);
                                    this.triggerEvent(e)
                                }
                                ), (0,
                                et.w)(t=>{
                                    let e = !1;
                                    return (0,
                                    C.of)(t).pipe((n = this.paramsInheritanceStrategy,
                                    r = this.ngModule.injector,
                                    (0,
                                    L.zg)(t=>{
                                        const {targetSnapshot: e, guards: {canActivateChecks: s}} = t;
                                        if (!s.length)
                                            return (0,
                                            C.of)(t);
                                        let i = 0;
                                        return (0,
                                        b.D)(s).pipe(D(t=>function(t, e, n, r) {
                                            return function(t, e, n, r) {
                                                const s = Object.keys(t);
                                                if (0 === s.length)
                                                    return (0,
                                                    C.of)({});
                                                const i = {};
                                                return (0,
                                                b.D)(s).pipe((0,
                                                L.zg)(s=>function(t, e, n, r) {
                                            /*        const s = hn(t, e, r);
                                                    return Pt(s.resolve ? s.resolve(e, n) : s(e, n))
                                            */    }(t[s], e, n, r).pipe((0,
                                                nt.b)(t=>{
                                                /*    i[s] = t*/
                                                }
                                                ))), F(1), (0,
                                                L.zg)(()=>Object.keys(i).length === s.length ? (0,
                                                C.of)(i) : T.E))
                                            }(t._resolve, t, e, r).pipe((0,
                                            tt.U)(e=>(t._resolvedData = e,
                                            t.data = Object.assign(Object.assign({}, t.data), fe(t, n).resolve),
                                            null)))
                                        }(t.route, e, n, r)), (0,
                                        nt.b)(()=>i++), F(1), (0,
                                        L.zg)(e=>i === s.length ? (0,
                                        C.of)(t) : T.E))
                                    }
                                    )), (0,
                                    nt.b)({
                                        next: ()=>e = !0,
                                        complete: ()=>{
                                            e || this.cancelNavigationTransition(t, "At least one route resolver didn't emit any value.")
                                        }
                                    }));
                                    var n, r
                                }
                                ), (0,
                                nt.b)(t=>{
                                    const e = new pt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);
                                    this.triggerEvent(e)
                                }
                                ))
                        }
                        ), Sn(t=>{
                            const {targetSnapshot: e, id: n, extractedUrl: r, rawUrl: s, extras: {skipLocationChange: i, replaceUrl: o}} = t;
                            return this.hooks.afterPreactivation(e, {
                                navigationId: n,
                                appliedUrlTree: r,
                                rawUrlTree: s,
                                skipLocationChange: !!i,
                                replaceUrl: !!o
                            })
                        }
                        ), (0,
                        tt.U)(t=>{
                            const e = function(t, e, n) {
                                const r = we(t, e._root, n ? n._root : void 0);
                                return new ue(r,e)
                            }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                            return Object.assign(Object.assign({}, t), {
                                targetRouterState: e
                            })
                        }
                        ), (0,
                        nt.b)(t=>{
                            this.currentUrlTree = t.urlAfterRedirects,
                            this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl),
                            this.routerState = t.targetRouterState,
                            "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, t),
                            this.browserUrlTree = t.urlAfterRedirects)
                        }
                        ), (i = this.rootContexts,
                        o = this.routeReuseStrategy,
                        a = t=>this.triggerEvent(t),
                        (0,
                        tt.U)(t=>(new Le(o,t.targetRouterState,t.currentRouterState,a).activate(i),
                        t))), (0,
                        nt.b)({
                            next() {
                                n = !0
                            },
                            complete() {
                                n = !0
                            }
                        }), (s = ()=>{
                            n || r || this.cancelNavigationTransition(t, `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`),
                            this.currentNavigation = null
                        }
                        ,
                        t=>t.lift(new J(s))), R(n=>{
                /*            if (r = !0,
                            (s = n) && s.ngNavigationCancelingError) {
                                const r = Fe(n.url);
                                r || (this.navigated = !0,
                                this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                                const s = new lt(t.id,this.serializeUrl(t.extractedUrl),n.message);
                                e.next(s),
                                r ? setTimeout(()=>{
                                    const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                                    this.scheduleNavigation(e, "imperative", null, {
                                        skipLocationChange: t.extras.skipLocationChange,
                                        replaceUrl: "eager" === this.urlUpdateStrategy
                                    }, {
                                        resolve: t.resolve,
                                        reject: t.reject,
                                        promise: t.promise
                                    })
                                }
                                , 0) : t.resolve(!1)
                            } else {
                                this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                                const r = new ct(t.id,this.serializeUrl(t.extractedUrl),n);
                                e.next(r);
                                try {
                                    t.resolve(this.errorHandler(n))
                                } catch (i) {
                                    t.reject(i)
                                }
                            }
                            var s;
                            return T.E
                */        }
                        ));
                        var s, i, o, a
                    }
                    ))
                }
                resetRootComponentType(t) {
                    this.rootComponentType = t,
                    this.routerState.root.component = this.rootComponentType
                }
                getTransition() {
                    const t = this.transitions.value;
                    return t.urlAfterRedirects = this.browserUrlTree,
                    t
                }
                setTransition(t) {
                    this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
                }
                initialNavigation() {
                    this.setUpLocationChangeListener(),
                    0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                        replaceUrl: !0
                    })
                }
                setUpLocationChangeListener() {
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(t=>{
                /*        const e = this.extractLocationChangeInfoFromEvent(t);
                        this.shouldScheduleNavigation(this.lastLocationChangeInfo, e) && setTimeout(()=>{
                            const {source: t, state: n, urlTree: r} = e
                              , s = {
                                replaceUrl: !0
                            };
                            if (n) {
                                const t = Object.assign({}, n);
                                delete t.navigationId,
                                delete t.\u0275routerPageId,
                                0 !== Object.keys(t).length && (s.state = t)
                            }
                            this.scheduleNavigation(r, t, n, s)
                        }
                        , 0),
                        this.lastLocationChangeInfo = e
                */    }
                    ))
                }
    /*            extractLocationChangeInfoFromEvent(t) {
                    var e;
                    return {
                        source: "popstate" === t.type ? "popstate" : "hashchange",
                        urlTree: this.parseUrl(t.url),
                        state: (null === (e = t.state) || void 0 === e ? void 0 : e.navigationId) ? t.state : null,
                        transitionId: this.getTransition().id
                    }
                }
                shouldScheduleNavigation(t, e) {
                    if (!t)
                        return !0;
                    const n = e.urlTree.toString() === t.urlTree.toString();
                    return !(e.transitionId === t.transitionId && n && ("hashchange" === e.source && "popstate" === t.source || "popstate" === e.source && "hashchange" === t.source))
                }
                get url() {
                    return this.serializeUrl(this.currentUrlTree)
                }
                getCurrentNavigation() {
                    return this.currentNavigation
                }*/
                triggerEvent(t) {
                    this.events.next(t)
                }
                resetConfig(t) {
                    qe(t),
                    this.config = t.map($e),
                    this.navigated = !1,
                    this.lastSuccessfulId = -1
                }
    /*            ngOnDestroy() {
                    this.dispose()
                }
                dispose() {
                    this.transitions.complete(),
                    this.locationSubscription && (this.locationSubscription.unsubscribe(),
                    this.locationSubscription = void 0),
                    this.disposed = !0
                }*/
                createUrlTree(t, e={}) {
                    const {relativeTo: n, queryParams: r, fragment: s, queryParamsHandling: i, preserveFragment: o} = e
                      , a = n || this.routerState.root
                      , l = o ? this.currentUrlTree.fragment : s;
                    let c = null;
                    switch (i) {
                    case "merge":
                        c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                        break;
                    case "preserve":
                        c = this.currentUrlTree.queryParams;
                        break;
                    default:
                        c = r || null
                    }
                    return null !== c && (c = this.removeEmptyProps(c)),
                    function(t, e, n, r, s) {
                        if (0 === n.length)
                            return xe(e.root, e.root, e, r, s);
                        const i = function(t) {
                            if ("string" == typeof t[0] && 1 === t.length && "/" === t[0])
                                return new Ee(!0,0,t);
                            let e = 0
                              , n = !1;
                            const r = t.reduce((t,r,s)=>{
                                if ("object" == typeof r && null != r) {
                                    if (r.outlets) {
                                        const e = {};
                                        return Rt(r.outlets, (t,n)=>{
                                /*            e[n] = "string" == typeof t ? t.split("/") : t
                                */        }
                                        ),
                                        [...t, {
                                            outlets: e
                                        }]
                                    }
                                    if (r.segmentPath)
                                        return [...t, r.segmentPath]
                                }
                                return "string" != typeof r ? [...t, r] : 0 === s ? (r.split("/").forEach((r,s)=>{
                                    0 == s && "." === r || (0 == s && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                }
                                ),
                                t) : [...t, r]
                            }
                            , []);
                            return new Ee(n,e,r)
                        }(n);
                        if (i.toRoot())
                            return xe(e.root, new Ht([],{}), e, r, s);
                        const o = function(t, e, n) {
                            if (t.isAbsolute)
                                return new Ae(e.root,!0,0);
                            if (-1 === n.snapshot._lastPathIndex) {
                                const t = n.snapshot._urlSegment;
                                return new Ae(t,t === e.root,0)
                            }
                            const r = Ce(t.commands[0]) ? 0 : 1;
                            return function(t, e, n) {
                    /*            let r = t
                                  , s = e
                                  , i = n;
                                for (; i > s; ) {
                                    if (i -= s,
                                    r = r.parent,
                                    !r)
                                        throw new Error("Invalid number of '../'");
                                    s = r.segments.length
                                }
                                return new Ae(r,!1,s - i)*/
                            }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots)
                        }(i, e, t)
                          , a = o.processChildren ? Ie(o.segmentGroup, o.index, i.commands) : ke(o.segmentGroup, o.index, i.commands);
                        return xe(o.segmentGroup, a, e, r, s)
                    }(a, this.currentUrlTree, t, c, null != l ? l : null)
                }
                navigateByUrl(t, e={
                    skipLocationChange: !1
                }) {
                    const n = Fe(t) ? t : this.parseUrl(t)
                      , r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                    let s = null;
                    return "computed" === this.canceledNavigationResolution && (0 === this.currentPageId || e.skipLocationChange || e.replaceUrl) && (s = this.location.getState()),
                    this.scheduleNavigation(r, "imperative", s, e)
                }
                navigate(t, e={
                    skipLocationChange: !1
                }) {
                    return function(t) {
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e];
                            if (null == n)
                                throw new Error(`The requested path contains ${n} segment at index ${e}`)
                        }
                    }(t),
                    this.navigateByUrl(this.createUrlTree(t, e), e)
                }
                serializeUrl(t) {
                    return this.urlSerializer.serialize(t)
                }
                parseUrl(t) {
                    let e;
                    try {
                        e = this.urlSerializer.parse(t)
                    } catch (n) {
                        e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
                    }
                    return e
                }
        /*        isActive(t, e) {
                    let n;
                    if (n = !0 === e ? Object.assign({}, Nn) : !1 === e ? Object.assign({}, Ln) : e,
                    Fe(t))
                        return Dt(this.currentUrlTree, t, n);
                    const r = this.parseUrl(t);
                    return Dt(this.currentUrlTree, r, n)
                }
                removeEmptyProps(t) {
                    return Object.keys(t).reduce((e,n)=>{
                        const r = t[n];
                        return null != r && (e[n] = r),
                        e
                    }
                    , {})
                }*/
                processNavigations() {
                    this.navigations.subscribe(t=>{
                        this.navigated = !0,
                        this.lastSuccessfulId = t.id,
                        this.currentPageId = t.targetPageId,
                        this.events.next(new at(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),
                        this.lastSuccessfulNavigation = this.currentNavigation,
                        t.resolve(!0)
                    }
                    , t=>{
                        this.console.warn("Unhandled Navigation Error: ")
                    }
                    )
                }
                scheduleNavigation(t, e, n, r, s) {
                    if (this.disposed)
                        return Promise.resolve(!1);
                    const i = this.getTransition()
                      , o = "imperative" !== e && "imperative" === (null == i ? void 0 : i.source)
                      , a = (this.lastSuccessfulId === i.id || this.currentNavigation ? i.rawUrl : i.urlAfterRedirects).toString() === t.toString();
                    if (o && a)
                        return Promise.resolve(!0);
                    let l, c, u;
                    s ? (l = s.resolve,
                    c = s.reject,
                    u = s.promise) : u = new Promise((t,e)=>{
                        l = t,
                        c = e
                    }
                    );
                    const h = ++this.navigationId;
                    let d;
                    return d = "computed" === this.canceledNavigationResolution ? n && n.\u0275routerPageId ? n.\u0275routerPageId : this.currentPageId + 1 : 0,
                    this.setTransition({
                        id: h,
                        targetPageId: d,
                        source: e,
                        restoredState: n,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: t,
                        extras: r,
                        resolve: l,
                        reject: c,
                        promise: u,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }),
                    u.catch(t=>Promise.reject(t))
                }
                setBrowserUrl(t, e) {
                    const n = this.urlSerializer.serialize(t)
                      , r = Object.assign(Object.assign({}, e.extras.state), this.generateNgRouterState(e.id, e.targetPageId));
                    this.location.isCurrentPathEqualTo(n) || e.extras.replaceUrl ? this.location.replaceState(n, "", r) : this.location.go(n, "", r)
                }
                resetStateAndUrl(t, e, n) {
                    this.routerState = t,
                    this.currentUrlTree = e,
                    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n),
                    this.resetUrlToCurrentUrlTree()
                }
                resetUrlToCurrentUrlTree() {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                }
                cancelNavigationTransition(t, e) {
                    "computed" === this.canceledNavigationResolution ? "popstate" !== t.source && "eager" !== this.urlUpdateStrategy || this.location.historyGo(this.currentPageId - t.targetPageId) : this.resetUrlToCurrentUrlTree();
                    const n = new lt(t.id,this.serializeUrl(t.extractedUrl),e);
                    this.triggerEvent(n),
                    t.resolve(!1)
                }
                generateNgRouterState(t, e) {
                    return "computed" === this.canceledNavigationResolution ? {
                        navigationId: t,
                        "\u0275routerPageId": e
                    } : {
                        navigationId: t
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(s.DyG),s.LFG(Zt),s.LFG(kn),s.LFG(r.Ye),s.LFG(s.zs3),s.LFG(s.v3s),s.LFG(s.Sil),s.LFG(void 0))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Un = (()=>{
            class t {
                constructor(t, e, n) {
                    this.router = t,
                    this.route = e,
                    this.locationStrategy = n,
                    this.commands = [],
                    this.onChanges = new i.xQ,
                    this.subscription = t.events.subscribe(t=>{
                        t instanceof at && this.updateTargetUrlAndHref()
                    }
                    )
                }
                set routerLink(t) {
                    this.commands = null != t ? Array.isArray(t) ? t : [t] : []
                }
                ngOnChanges(t) {
                    this.updateTargetUrlAndHref(),
                    this.onChanges.next(this)
                }
        /*        ngOnDestroy() {
                    this.subscription.unsubscribe()
                }*/
                onClick(t, e, n, r, s) {
                    if (0 !== t || e || n || r || s)
                        return !0;
                    if ("string" == typeof this.target && "_self" != this.target)
                        return !0;
                    const i = {
                        skipLocationChange: jn(this.skipLocationChange),
                        replaceUrl: jn(this.replaceUrl),
                        state: this.state
                    };
                    return this.router.navigateByUrl(this.urlTree, i),
                    !1
                }
                updateTargetUrlAndHref() {
                    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                }
                get urlTree() {
                    return this.router.createUrlTree(this.commands, {
                        relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: jn(this.preserveFragment)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(Dn),s.Y36(de),s.Y36(r.S$))
            }
            ,
            t.\u0275dir = s.lG2({
                type: t,
                selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
                hostVars: 2,
                hostBindings: function(t, e) {
                    1 & t && s.NdJ("click", function(t) {
                        return e.onClick(t.button, t.ctrlKey, t.shiftKey, t.altKey, t.metaKey)
                    }),
                    2 & t && (s.Ikx("href", e.href, s.LSH),
                    s.uIk("target", e.target))
                },
                inputs: {
                    routerLink: "routerLink",
                    target: "target",
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    preserveFragment: "preserveFragment",
                    skipLocationChange: "skipLocationChange",
                    replaceUrl: "replaceUrl",
                    state: "state",
                    relativeTo: "relativeTo"
                },
                features: [s.TTD]
            }),
            t
        }
        )();
        function jn(t) {
            return "" === t || !!t
        }
        let Fn = (()=>{
            class t {
                constructor(t, e, n, r, i) {
                    this.parentContexts = t,
                    this.location = e,
                    this.resolver = n,
                    this.changeDetector = i,
                    this.activated = null,
                    this._activatedRoute = null,
                    this.activateEvents = new s.vpe,
                    this.deactivateEvents = new s.vpe,
                    this.name = r || Ct,
                    t.onChildOutletCreated(this.name, this)
                }
        /*        ngOnDestroy() {
                    this.parentContexts.onChildOutletDestroyed(this.name)
                }*/
                ngOnInit() {
                    if (!this.activated) {
                        const t = this.parentContexts.getContext(this.name);
                        t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                    }
                }
                get isActivated() {
                    return !!this.activated
                }
        /*        get component() {
                    if (!this.activated)
                        throw new Error("Outlet is not activated");
                    return this.activated.instance
                }
                get activatedRoute() {
                    if (!this.activated)
                        throw new Error("Outlet is not activated");
                    return this._activatedRoute
                }
                get activatedRouteData() {
                    return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                }
                detach() {
                    if (!this.activated)
                        throw new Error("Outlet is not activated");
                    this.location.detach();
                    const t = this.activated;
                    return this.activated = null,
                    this._activatedRoute = null,
                    t
                }
                attach(t, e) {
                    this.activated = t,
                    this._activatedRoute = e,
                    this.location.insert(t.hostView)
                }
                deactivate() {
                    if (this.activated) {
                        const t = this.component;
                        this.activated.destroy(),
                        this.activated = null,
                        this._activatedRoute = null,
                        this.deactivateEvents.emit(t)
                    }
                }*/
                activateWith(t, e) {
                    if (this.isActivated)
                        throw new Error("Cannot activate an already activated outlet");
                    this._activatedRoute = t;
                    const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component)
                      , r = this.parentContexts.getOrCreateContext(this.name).children
                      , s = new Mn(t,r,this.location.injector);
                    this.activated = this.location.createComponent(n, this.location.length, s),
                    this.changeDetector.markForCheck(),
                    this.activateEvents.emit(this.activated.instance)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(kn),s.Y36(s.s_b),s.Y36(s._Vd),s.$8M("name"),s.Y36(s.sBO))
            }
            ,
            t.\u0275dir = s.lG2({
                type: t,
                selectors: [["router-outlet"]],
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate"
                },
                exportAs: ["outlet"]
            }),
            t
        }
        )();
        class Mn {
            constructor(t, e, n) {
                this.route = t,
                this.childContexts = e,
                this.parent = n
            }
            get(t, e) {
                return t === de ? this.route : t === kn ? this.childContexts : this.parent.get(t, e)
            }
        }
        class Hn {
        }
        class Vn {
            preload(t, e) {
                return (0,
                C.of)(null)
            }
        }
        let qn = (()=>{
            class t {
                constructor(t, e, n, r, s) {
                    this.router = t,
                    this.injector = r,
                    this.preloadingStrategy = s,
                    this.loader = new En(e,n,e=>t.triggerEvent(new gt(e)),e=>t.triggerEvent(new mt(e)))
                }
                setUpPreloading() {
                    this.subscription = this.router.events.pipe((0,
                    U.h)(t=>t instanceof at), D(()=>this.preload())).subscribe(()=>{}
                    )
                }
                preload() {
                    const t = this.injector.get(s.h0i);
                    return this.processRoutes(t, this.router.config)
                }
        /*        ngOnDestroy() {
                    this.subscription && this.subscription.unsubscribe()
                }*/
                processRoutes(t, e) {
                    const n = [];
                    for (const r of e)
                        if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                            const t = r._loadedConfig;
                            n.push(this.processRoutes(t.module, t.routes))
                        } else
                            r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(t, r)) : r.children && n.push(this.processRoutes(t, r.children));
                    return (0,
                    b.D)(n).pipe((0,
                    st.J)(), (0,
                    tt.U)(t=>{}
                    ))
                }
                preloadConfig(t, e) {
                    return this.preloadingStrategy.preload(e, ()=>(e._loadedConfig ? (0,
                    C.of)(e._loadedConfig) : this.loader.load(t.injector, e)).pipe((0,
                    L.zg)(t=>(e._loadedConfig = t,
                    this.processRoutes(t.module, t.routes)))))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(Dn),s.LFG(s.v3s),s.LFG(s.Sil),s.LFG(s.zs3),s.LFG(Hn))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Zn = (()=>{
            class t {
                constructor(t, e, n={}) {
                    this.router = t,
                    this.viewportScroller = e,
                    this.options = n,
                    this.lastId = 0,
                    this.lastSource = "imperative",
                    this.restoredId = 0,
                    this.store = {},
                    n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled",
                    n.anchorScrolling = n.anchorScrolling || "disabled"
                }
                init() {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"),
                    this.routerEventsSubscription = this.createScrollEvents(),
                    this.scrollEventsSubscription = this.consumeScrollEvents()
                }
                createScrollEvents() {
                    return this.router.events.subscribe(t=>{
                        t instanceof ot ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(),
                        this.lastSource = t.navigationTrigger,
                        this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof at && (this.lastId = t.id,
                        this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
                    }
                    )
                }
                consumeScrollEvents() {
                    return this.router.events.subscribe(t=>{
                        t instanceof bt && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                    }
                    )
                }
                scheduleScrollEvent(t, e) {
                    this.router.triggerEvent(new bt(t,"popstate" === this.lastSource ? this.store[this.restoredId] : null,e))
                }
        /*        ngOnDestroy() {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                    this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }*/
            }
            return t.\u0275fac = function(e) {
                /*return new (e || t)(s.LFG(Dn),s.LFG(r.EM),s.LFG(void 0))*/
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const zn = new s.OlP("ROUTER_CONFIGURATION")
          , $n = new s.OlP("ROUTER_FORROOT_GUARD")
          , Bn = [r.Ye, {
            provide: Zt,
            useClass: zt
        }, {
            provide: Dn,
            useFactory: function(t, e, n, r, s, i, o, a={}, l, c) {
                const u = new Dn(null,t,e,n,r,s,i,It(o));
                return l && (u.urlHandlingStrategy = l),
                c && (u.routeReuseStrategy = c),
                function(t, e) {
                    t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler && (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation && (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy && (e.paramsInheritanceStrategy = t.paramsInheritanceStrategy),
                    t.relativeLinkResolution && (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy && (e.urlUpdateStrategy = t.urlUpdateStrategy)
                }(a, u),
        /*        a.enableTracing && u.events.subscribe(t=>{
                    var e, n;
                    null === (e = console.group) || void 0 === e || e.call(console, `Router Event: ${t.constructor.name}`),
                    console.log(t.toString()),
                    console.log(t),
                    null === (n = console.groupEnd) || void 0 === n || n.call(console)
                }
                ),*/
                u
            },
            deps: [Zt, kn, r.Ye, s.zs3, s.v3s, s.Sil, Tn, zn, [class {
            }
            , new s.FiY], [class {
            }
            , new s.FiY]]
        }, kn, {
            provide: de,
            useFactory: function(t) {
                return t.routerState.root
            },
            deps: [Dn]
        }, {
            provide: s.v3s,
            useClass: s.EAV
        }, qn, Vn, class {
    /*        preload(t, e) {
                return e().pipe(R(()=>(0,
                C.of)(null)))
            }*/
        }
        , {
            provide: zn,
            useValue: {
                enableTracing: !1
            }
        }];
        function Gn() {
            return new s.PXZ("Router",Dn)
        }
        let Wn = (()=>{
            class t {
                constructor(t, e) {}
                static forRoot(e, n) {
                    return {
                        ngModule: t,
                        providers: [Bn, Jn(e), {
                            provide: $n,
                            useFactory: Kn,
                            deps: [[Dn, new s.FiY, new s.tp0]]
                        }, {
                            provide: zn,
                            useValue: n || {}
                        }, {
                            provide: r.S$,
                            useFactory: Qn,
                            deps: [r.lw, [new s.tBr(r.mr), new s.FiY], zn]
                        }, {
                            provide: Zn,
                            useFactory: Yn,
                            deps: [Dn, r.EM, zn]
                        }, {
                            provide: Hn,
                            useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Vn
                        }, {
                            provide: s.PXZ,
                            multi: !0,
                            useFactory: Gn
                        }, [Xn, {
                            provide: s.ip1,
                            multi: !0,
                            useFactory: tr,
                            deps: [Xn]
                        }, {
                            provide: nr,
                            useFactory: er,
                            deps: [Xn]
                        }, {
                            provide: s.tb,
                            multi: !0,
                            useExisting: nr
                        }]]
                    }
                }
                static forChild(e) {
                    return {
                        ngModule: t,
                        providers: [Jn(e)]
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG($n, 8),s.LFG(Dn, 8))
            }
            ,
            t.\u0275mod = s.oAB({
                type: t
            }),
            t.\u0275inj = s.cJS({}),
            t
        }
        )();
        function Yn(t, e, n) {
            return n.scrollOffset && e.setOffset(n.scrollOffset),
            new Zn(t,e,n)
        }
        function Qn(t, e, n={}) {
            return n.useHash ? new r.Do(t,e) : new r.b0(t,e)
        }
        function Kn(t) {
            return "guarded"
        }
        function Jn(t) {
            return [{
                provide: s.deG,
                multi: !0,
                useValue: t
            }, {
                provide: Tn,
                multi: !0,
                useValue: t
            }]
        }
        let Xn = (()=>{
            class t {
                constructor(t) {
                    this.injector = t,
                    this.initNavigation = !1,
                    this.resultOfPreactivationDone = new i.xQ
                }
                appInitializer() {
                    return this.injector.get(r.V_, Promise.resolve(null)).then(()=>{
                        let t = null;
                        const e = new Promise(e=>t = e)
                          , n = this.injector.get(Dn)
                          , r = this.injector.get(zn);
                        return "disabled" === r.initialNavigation ? (n.setUpLocationChangeListener(),
                        t(!0)) : "enabled" === r.initialNavigation || "enabledBlocking" === r.initialNavigation ? (n.hooks.afterPreactivation = ()=>this.initNavigation ? (0,
                        C.of)(null) : (this.initNavigation = !0,
                        t(!0),
                        this.resultOfPreactivationDone),
                        n.initialNavigation()) : t(!0),
                        e
                    }
                    )
                }
                bootstrapListener(t) {
                    const e = this.injector.get(zn)
                      , n = this.injector.get(qn)
                      , r = this.injector.get(Zn)
                      , i = this.injector.get(Dn)
                      , o = this.injector.get(s.z2F);
                    t === o.components[0] && ("enabledNonBlocking" !== e.initialNavigation && void 0 !== e.initialNavigation || i.initialNavigation(),
                    n.setUpPreloading(),
                    r.init(),
                    i.resetRootComponentType(o.componentTypes[0]),
                    this.resultOfPreactivationDone.next(null),
                    this.resultOfPreactivationDone.complete())
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(s.zs3))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        function tr(t) {
            return t.appInitializer.bind(t)
        }
        function er(t) {
            return t.bootstrapListener.bind(t)
        }
        const nr = new s.OlP("Router Initializer")
    }
    ,
    8721: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Wr: ()=>P,
            yO: ()=>T
        });
        var r = n(1116)
          , s = n(5614)
          , i = n(8318)
          , o = n(6054);
        const a = new i.y(o.Z);
        var l = n(1450)
          , c = n(1225)
          , u = n(7254)
          , h = n(878)
          , d = n(7930)
          , f = n(3559)
          , p = n(1906)
          , g = n(6598)
          , m = n(9996)
          , y = n(3835)
          , v = n(4689)
          , _ = n(611)
          , w = n(4019)
          , b = n(6349);
        const C = "Service workers are disabled or not supported by this browser";
        class S {
            constructor(t) {
                if (this.serviceWorker = t,
                t) {
                    const e = (0,
                    u.R)(t, "controllerchange").pipe((0,
                    m.U)(()=>t.controller))
                      , n = (0,
                    l.P)(()=>(0,
                    h.of)(t.controller))
                      , r = (0,
                    d.z)(n, e);
                    this.worker = r.pipe((0,
                    y.h)(t=>!!t)),
                    this.registration = this.worker.pipe((0,
                    v.w)(()=>t.getRegistration()));
                    const s = (0,
                    u.R)(t, "message").pipe((0,
                    m.U)(t=>t.data)).pipe((0,
                    y.h)(t=>t && t.type)).pipe((0,
                    g.O)(new f.xQ));
                    s.connect(),
                    this.events = s
                } else
                    this.worker = this.events = this.registration = (0,
                    l.P)(()=>(0,
                    c._)(new Error("Service workers are disabled or not supported by this browser")))
            }
            postMessage(t, e) {
                return this.worker.pipe((0,
                _.q)(1), (0,
                w.b)(n=>{
                    n.postMessage(Object.assign({
                        action: t
                    }, e))
                }
                )).toPromise().then(()=>{}
                )
            }
            postMessageWithStatus(t, e, n) {
                /*const r = this.waitForStatus(n) это оригинл ниже строка fake*/
                  const r = Promise.resolve(()=>{})
                  , s = this.postMessage(t, e);
                return Promise.all([r, s]).then(()=>{}
                )
            }
            generateNonce() {
                return Math.round(1e7 * Math.random())
            }
            eventsOfType(t) {
                return this.events.pipe((0,
                y.h)(e=>e.type === t))
            }
            nextEventOfType(t) {
                return this.eventsOfType(t).pipe((0,
                _.q)(1))
            }
            waitForStatus(t) {
                return this.eventsOfType("STATUS").pipe((0,
                y.h)(e=>e.nonce === t), (0,
                _.q)(1), (0,
                m.U)(t=>{
                    if (!t.status)
                        throw new Error(t.error)
                }
                )).toPromise()
            }
            get isEnabled() {
                return !!this.serviceWorker
            }
        }
        let x = (()=>{
            class t {
                constructor(t) {
                    if (this.sw = t,
                    this.subscriptionChanges = new f.xQ,
                    !t.isEnabled)
                        return this.messages = a,
                        this.notificationClicks = a,
                        void (this.subscription = a);
                    this.messages = this.sw.eventsOfType("PUSH").pipe((0,
                    m.U)(t=>t.data)),
                    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,
                    m.U)(t=>t.data)),
                    this.pushManager = this.sw.registration.pipe((0,
                    m.U)(t=>t.pushManager));
                    const e = this.pushManager.pipe((0,
                    v.w)(t=>t.getSubscription()));
                    this.subscription = (0,
                    p.T)(e, this.subscriptionChanges)
                }
                get isEnabled() {
                    return this.sw.isEnabled
                }
                requestSubscription(t) {
                    if (!this.sw.isEnabled)
                        return Promise.reject(new Error(C));
                    const e = {
                        userVisibleOnly: !0
                    };
                    let n = this.decodeBase64(t.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"))
                      , r = new Uint8Array(new ArrayBuffer(n.length));
                    for (let s = 0; s < n.length; s++)
                        r[s] = n.charCodeAt(s);
                    return e.applicationServerKey = r,
                    this.pushManager.pipe((0,
                    v.w)(t=>t.subscribe(e)), (0,
                    _.q)(1)).toPromise().then(t=>(this.subscriptionChanges.next(t),
                    t))
                }
                unsubscribe() {
                    return this.sw.isEnabled ? this.subscription.pipe((0,
                    _.q)(1), (0,
                    v.w)(t=>{
                        if (null === t)
                            throw new Error("Not subscribed to push notifications.");
                        return t.unsubscribe().then(t=>{
                            if (!t)
                                throw new Error("Unsubscribe failed!");
                            this.subscriptionChanges.next(null)
                        }
                        )
                    }
                    )).toPromise() : Promise.reject(new Error(C))
                }
                decodeBase64(t) {
                    return atob(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(S))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , T = (()=>{
            class t {
                constructor(t) {
                    if (this.sw = t,
                    !t.isEnabled)
                        return this.available = a,
                        this.activated = a,
                        void (this.unrecoverable = a);
                    this.available = this.sw.eventsOfType("UPDATE_AVAILABLE"),
                    this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED"),
                    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE")
                }
                get isEnabled() {
                    return this.sw.isEnabled
                }
                /*checkForUpdate() {
                    if (!this.sw.isEnabled)
                        return Promise.reject(new Error(C));
                    const t = this.sw.generateNonce();
                    return this.sw.postMessageWithStatus("CHECK_FOR_UPDATES", {
                        statusNonce: t
                    }, t)
                }*/
                activateUpdate() {
                    if (!this.sw.isEnabled)
                        return Promise.reject(new Error(C));
                    const t = this.sw.generateNonce();
                    return this.sw.postMessageWithStatus("ACTIVATE_UPDATE", {
                        statusNonce: t
                    }, t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(S))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class E {
        }
        const A = new s.OlP("NGSW_REGISTER_SCRIPT");
        function k(t, e, n, i) {
            return ()=>{
                if (!(0,
                r.NF)(i) || !("serviceWorker"in navigator) || !1 === n.enabled)
                    return;
                let o;
                if (navigator.serviceWorker.addEventListener("controllerchange", ()=>{
                    null !== navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
                        action: "INITIALIZE"
                    })
                }
                ),
                "function" == typeof n.registrationStrategy)
                    o = n.registrationStrategy();
                else {
                    const [e,...r] = (n.registrationStrategy || "registerWhenStable:30000").split(":");
                    switch (e) {
                    case "registerImmediately":
                        o = (0,
                        h.of)(null);
                        break;
                    case "registerWithDelay":
                        o = I(+r[0] || 0);
                        break;
                    case "registerWhenStable":
                        o = r[0] ? (0,
                        p.T)(O(t), I(+r[0])) : O(t);
                        break;
                    default:
                        throw new Error(`Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`)
                    }
                }
                t.get(s.R0b).runOutsideAngular(()=>o.pipe((0,
                _.q)(1)).subscribe(()=>navigator.serviceWorker.register(e, {
                    scope: n.scope
                }).catch(t=>console.error("Service worker registration failed with:", t))))
            }
        }
        function I(t) {
            return (0,
            h.of)(null).pipe((0,
            b.g)(t))
        }
        function O(t) {
            return t.get(s.z2F).isStable.pipe((0,
            y.h)(t=>t))
        }
        function R(t, e) {
            return new S((0,
            r.NF)(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0)
        }
        let P = (()=>{
            class t {
                static register(e, n={}) {
                    return {
                        ngModule: t,
                        providers: [{
                            provide: A,
                            useValue: e
                        }, {
                            provide: E,
                            useValue: n
                        }, {
                            provide: S,
                            useFactory: R,
                            deps: [E, s.Lbi]
                        }, {
                            provide: s.ip1,
                            useFactory: k,
                            deps: [s.zs3, A, E, s.Lbi],
                            multi: !0
                        }]
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = s.oAB({
                type: t
            }),
            t.\u0275inj = s.cJS({
                providers: [x, T]
            }),
            t
        }
        )()
    }
    ,
    8318: (t,e,n)=>{
        "use strict";
        n.d(e, {
            y: ()=>c
        });
        var r = n(6673)
          , s = n(5331)
          , i = n(7498)
          , o = n(6197)
          , a = n(3392)
          , l = n(1484);
        let c = (()=>{
            class t {
                constructor(t) {
                    this._isScalar = !1,
                    t && (this._subscribe = t)
                }
                lift(e) {
                    const n = new t;
                    return n.source = this,
                    n.operator = e,
                    n
                }
                subscribe(t, e, n) {
                    const {operator: o} = this
                      , a = function(t, e, n) {
                        if (t) {
                            if (t instanceof r.L)
                                return t;
                            if (t[s.b])
                                return t[s.b]()
                        }
                        return t || e || n ? new r.L(t,e,n) : new r.L(i.c)
                    }(t, e, n);
                    if (a.add(o ? o.call(a, this.source) : this.source || l.v.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable ? this._subscribe(a) : this._trySubscribe(a)),
                    l.v.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable && (a.syncErrorThrowable = !1,
                    a.syncErrorThrown))
                        throw a.syncErrorValue;
                    return a
                }
                _trySubscribe(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        l.v.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0,
                        t.syncErrorValue = e),
                       function(t) {/*
                            for (; t; ) {
                                const {closed: e, destination: n, isStopped: s} = t;
                                if (e || s)
                                    return !1;
                                t = n && n instanceof r.L ? n : null
                            }
                            return !0
                        */}(t) ? t.error(e) : console.warn(e)
                    }
                }
        /*        forEach(t, e) {
                    return new (e = u(e))((e,n)=>{
                        let r;
                        r = this.subscribe(e=>{
                            try {
                                t(e)
                            } catch (s) {
                                n(s),
                                r && r.unsubscribe()
                            }
                        }
                        , n, e)
                    }
                    )
                }
                _subscribe(t) {
                    const {source: e} = this;
                    return e && e.subscribe(t)
                }
                [o.L]() {
                    return this
                }*/
                pipe(...t) {
                    return 0 === t.length ? this : (0 === (e = t).length ? a.y : 1 === e.length ? e[0] : function(t) {
                        return e.reduce((t,e)=>e(t), t)
                    }
                    )(this);
                    var e
                }
    /*            toPromise(t) {
                    return new (t = u(t))((t,e)=>{
                        let n;
                        this.subscribe(t=>n = t, t=>e(t), ()=>t(n))
                    }
                    )
                }*/
            }
            return t.create = e=>new t(e),
            t
        }
        )();
    /*    function u(t) {
            if (t || (t = l.v.Promise || Promise),
            !t)
                throw new Error("no Promise impl found");
            return t
        }*/
    }
    ,
    7498: (t,e,n)=>{
        "use strict";
        n.d(e, {
            c: ()=>i
        });
        var r = n(1484)
          , s = n(4294);
        const i = {
            closed: !0,
    /*        next(t) {},
            error(t) {
                if (r.v.useDeprecatedSynchronousErrorHandling)
                    throw t;
                (0,
                s.z)(t)
            },
            complete() {}*/
        }
    }
    ,
    3559: (t,e,n)=>{
        "use strict";
        n.d(e, {
            xQ: ()=>u,
            Yc: ()=>c
        });
        var r = n(8318)
          , s = n(6673)
          , i = n(7570)
          , o = n(3895);
        class a extends i.w {
            constructor(t, e) {
                super(),
                this.subject = t,
                this.subscriber = e,
                this.closed = !1
            }
            unsubscribe() {
                if (this.closed)
                    return;
                this.closed = !0;
                const t = this.subject
                  , e = t.observers;
                if (this.subject = null,
                !e || 0 === e.length || t.isStopped || t.closed)
                    return;
                const n = e.indexOf(this.subscriber);
                -1 !== n && e.splice(n, 1)
            }
        }
        var l = n(5331);
        class c extends s.L {
            constructor(t) {
                super(t),
                this.destination = t
            }
        }
        let u = (()=>{
            class t extends r.y {
                constructor() {
                    super(),
                    this.observers = [],
                    this.closed = !1,
                    this.isStopped = !1,
                    this.hasError = !1,
                    this.thrownError = null
                }
        /*        [l.b]() {
                    return new c(this)
                }*/
                lift(t) {
                    const e = new h(this,this);
                    return e.operator = t,
                    e
                }
                next(t) {
                    if (this.closed)
                        throw new o.N;
                    if (!this.isStopped) {
                        const {observers: e} = this
                          , n = e.length
                          , r = e.slice();
                        for (let s = 0; s < n; s++)
                            r[s].next(t)
                    }
                }
        /*        error(t) {
                    if (this.closed)
                        throw new o.N;
                    this.hasError = !0,
                    this.thrownError = t,
                    this.isStopped = !0;
                    const {observers: e} = this
                      , n = e.length
                      , r = e.slice();
                    for (let s = 0; s < n; s++)
                        r[s].error(t);
                    this.observers.length = 0
                }*/
                complete() {
                    if (this.closed)
                        throw new o.N;
                    this.isStopped = !0;
                    const {observers: t} = this
                      , e = t.length
                      , n = t.slice();
                    for (let r = 0; r < e; r++)
                        n[r].complete();
                    this.observers.length = 0
                }
                unsubscribe() {
                    this.isStopped = !0,
                    this.closed = !0,
                    this.observers = null
                }
                _trySubscribe(t) {
                    if (this.closed)
                        throw new o.N;
                    return super._trySubscribe(t)
                }
                _subscribe(t) {
                    if (this.closed)
                        throw new o.N;
                    return this.hasError ? (t.error(this.thrownError),
                    i.w.EMPTY) : this.isStopped ? (t.complete(),
                    i.w.EMPTY) : (this.observers.push(t),
                    new a(this,t))
                }
            /*    asObservable() {
                    const t = new r.y;
                    return t.source = this,
                    t
                }*/
            }
            return t.create = (t,e)=>new h(t,e),
            t
        }
        )();
        class h extends u {
            constructor(t, e) {
                super(),
                this.destination = t,
                this.source = e
            }
        /*    next(t) {
                const {destination: e} = this;
                e && e.next && e.next(t)
            }
            error(t) {
                const {destination: e} = this;
                e && e.error && this.destination.error(t)
            }
            complete() {
                const {destination: t} = this;
                t && t.complete && this.destination.complete()
            }
            _subscribe(t) {
                const {source: e} = this;
                return e ? this.source.subscribe(t) : i.w.EMPTY
            }*/
        }
    }
    ,
    6673: (t,e,n)=>{
        "use strict";
        n.d(e, {
            L: ()=>c
        });
        var r = n(5024)
          , s = n(7498)
          , i = n(7570)
          , o = n(5331)
          , a = n(1484)
          , l = n(4294);
        class c extends i.w {
            constructor(t, e, n) {
                switch (super(),
                this.syncErrorValue = null,
                this.syncErrorThrown = !1,
                this.syncErrorThrowable = !1,
                this.isStopped = !1,
                arguments.length) {
                case 0:
                    this.destination = s.c;
                    break;
                case 1:
                    if (!t) {
                        this.destination = s.c;
                        break
                    }
                    if ("object" == typeof t) {
                        t instanceof c ? (this.syncErrorThrowable = t.syncErrorThrowable,
                        this.destination = t,
                        t.add(this)) : (this.syncErrorThrowable = !0,
                        this.destination = new u(this,t));
                        break
                    }
                default:
                    this.syncErrorThrowable = !0,
                    this.destination = new u(this,t,e,n)
                }
            }
        /*    [o.b]() {
                return this
            }
            static create(t, e, n) {
                const r = new c(t,e,n);
                return r.syncErrorThrowable = !1,
                r
            }*/
            next(t) {
                this.isStopped || this._next(t)
            }
        /*    error(t) {
                this.isStopped || (this.isStopped = !0,
                this._error(t))
            }*/
            complete() {
                this.isStopped || (this.isStopped = !0,
                this._complete())
            }
            unsubscribe() {
                this.closed || (this.isStopped = !0,
                super.unsubscribe())
            }
            _next(t) {
                this.destination.next(t)
            }
        /*    _error(t) {
                this.destination.error(t),
                this.unsubscribe()
            }*/
            _complete() {
                this.destination.complete(),
                this.unsubscribe()
            }
            _unsubscribeAndRecycle() {
                const {_parentOrParents: t} = this;
                return this._parentOrParents = null,
                this.unsubscribe(),
                this.closed = !1,
                this.isStopped = !1,
                this._parentOrParents = t,
                this
            }
        }
        class u extends c {
            constructor(t, e, n, i) {
                let o;
                super(),
                this._parentSubscriber = t;
                let a = this;
                (0,
                r.m)(e) ? o = e : e && (o = e.next,
                n = e.error,
                i = e.complete,
                e !== s.c && (a = Object.create(e),
                (0,
                r.m)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                a.unsubscribe = this.unsubscribe.bind(this))),
                this._context = a,
                this._next = o,
                this._error = n,
                this._complete = i
            }
            next(t) {
                if (!this.isStopped && this._next) {
                    const {_parentSubscriber: e} = this;
                    a.v.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }
    /*        error(t) {
                if (!this.isStopped) {
                    const {_parentSubscriber: e} = this
                      , {useDeprecatedSynchronousErrorHandling: n} = a.v;
                    if (this._error)
                        n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t),
                        this.unsubscribe()) : (this.__tryOrUnsub(this._error, t),
                        this.unsubscribe());
                    else if (e.syncErrorThrowable)
                        n ? (e.syncErrorValue = t,
                        e.syncErrorThrown = !0) : (0,
                        l.z)(t),
                        this.unsubscribe();
                    else {
                        if (this.unsubscribe(),
                        n)
                            throw t;
                        (0,
                        l.z)(t)
                    }
                }
            }*/
            complete() {
                if (!this.isStopped) {
                    const {_parentSubscriber: t} = this;
                    if (this._complete) {
                        const e = ()=>this._complete.call(this._context);
                        a.v.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e),
                        this.unsubscribe()) : (this.__tryOrUnsub(e),
                        this.unsubscribe())
                    } else
                        this.unsubscribe()
                }
            }
            __tryOrUnsub(t, e) {
                try {
                    t.call(this._context, e)
                } catch (n) {
                    if (this.unsubscribe(),
                    a.v.useDeprecatedSynchronousErrorHandling)
                        throw n;
                    (0,
                    l.z)(n)
                }
            }
    /*        __tryOrSetError(t, e, n) {
                if (!a.v.useDeprecatedSynchronousErrorHandling)
                    throw new Error("bad call");
                try {
                    e.call(this._context, n)
                } catch (r) {
                    return a.v.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r,
                    t.syncErrorThrown = !0,
                    !0) : ((0,
                    l.z)(r),
                    !0)
                }
                return !1
            }*/
            _unsubscribe() {
                const {_parentSubscriber: t} = this;
                this._context = null,
                this._parentSubscriber = null,
                t.unsubscribe()
            }
        }
    }
    ,
    7570: (t,e,n)=>{
        "use strict";
        n.d(e, {
            w: ()=>a
        });
        var r = n(8470)
          , s = n(2056)
          , i = n(5024);
        const o = (()=>{
        /*    function t(t) {
                return Error.call(this),
                this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e + 1}) ${t.toString()}`).join("\n  ")}` : "",
                this.name = "UnsubscriptionError",
                this.errors = t,
                this
            }*/
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )();
        let a = (()=>{
            class t {
                constructor(t) {
                    this.closed = !1,
                    this._parentOrParents = null,
                    this._subscriptions = null,
                    t && (this._ctorUnsubscribe = !0,
                    this._unsubscribe = t)
                }
                unsubscribe() {
                    let e;
                    if (this.closed)
                        return;
                    let {_parentOrParents: n, _ctorUnsubscribe: a, _unsubscribe: c, _subscriptions: u} = this;
                    if (this.closed = !0,
                    this._parentOrParents = null,
                    this._subscriptions = null,
                    n instanceof t)
                        n.remove(this);
                    else if (null !== n)
                        for (let t = 0; t < n.length; ++t)
                            n[t].remove(this);
                    if ((0,
                    i.m)(c)) {
                        a && (this._unsubscribe = void 0);
                        try {
                            c.call(this)
                        } catch (h) {
                            e = h instanceof o ? l(h.errors) : [h]
                        }
                    }
                    if ((0,
                    r.k)(u)) {
                        let t = -1
                          , n = u.length;
                        for (; ++t < n; ) {
                            const n = u[t];
                            if ((0,
                            s.K)(n))
                                try {
                                    n.unsubscribe()
                                } catch (h) {
                                    e = e || [],
                                    h instanceof o ? e = e.concat(l(h.errors)) : e.push(h)
                                }
                        }
                    }
                    if (e)
                        throw new o(e)
                }
                add(e) {
                    let n = e;
                    if (!e)
                        return t.EMPTY;
                    switch (typeof e) {
                    case "function":
                        n = new t(e);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe)
                            return n;
                        if (this.closed)
                            return n.unsubscribe(),
                            n;
                        if (!(n instanceof t)) {
                            const e = n;
                            n = new t,
                            n._subscriptions = [e]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    let {_parentOrParents: r} = n;
                    if (null === r)
                        n._parentOrParents = this;
                    else if (r instanceof t) {
                        if (r === this)
                            return n;
                        n._parentOrParents = [r, this]
                    } else {
                        if (-1 !== r.indexOf(this))
                            return n;
                        r.push(this)
                    }
                    const s = this._subscriptions;
                    return null === s ? this._subscriptions = [n] : s.push(n),
                    n
                }
                remove(t) {
                    const e = this._subscriptions;
                    if (e) {
                        const n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }
                }
            }
            var e;
            return t.EMPTY = ((e = new t).closed = !0,
            e),
            t
        }
        )();
    /*    function l(t) {
            return t.reduce((t,e)=>t.concat(e instanceof o ? e.errors : e), [])
        }*/
    }
    ,
    1484: (t,e,n)=>{
        "use strict";
        n.d(e, {
            v: ()=>s
        });
        let r = !1;
        const s = {
            Promise: void 0,
            /*set useDeprecatedSynchronousErrorHandling(t) {
                if (t) {
                    const t = new Error;
                    console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                } else
                    r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                r = t
            },*/
            get useDeprecatedSynchronousErrorHandling() {
                return r
            }
        }
    }
    ,
    6882: (t,e,n)=>{
        "use strict";
        n.d(e, {
            IY: ()=>o,
            Ds: ()=>a,
            ft: ()=>l
        });
        var r = n(6673)
          , s = n(8318)
          , i = n(6015);
        class o extends r.L {
            constructor(t) {
                super(),
                this.parent = t
            }
            _next(t) {
                this.parent.notifyNext(t)
            }
    /*        _error(t) {
                this.parent.notifyError(t),
                this.unsubscribe()
            }*/
            _complete() {
                this.parent.notifyComplete(),
                this.unsubscribe()
            }
        }
        class a extends r.L {
            notifyNext(t) {
                this.destination.next(t)
            }
    /*        notifyError(t) {
                this.destination.error(t)
            }*/
            notifyComplete() {
                this.destination.complete()
            }
        }
        function l(t, e) {
            if (e.closed)
                return;
            if (t instanceof s.y)
                return t.subscribe(e);
            let n;
            try {
                n = (0,
                i.s)(t)(e)
            } catch (r) {
                e.error(r)
            }
            return n
        }
    }
    ,
    2875: (t,e,n)=>{
        "use strict";
        n.d(e, {
            c: ()=>a,
            N: ()=>l
        });
        var r = n(3559)
          , s = n(8318)
          , i = n(7570)
          , o = n(1564);
        class a extends s.y {
            constructor(t, e) {
                super(),
                this.source = t,
                this.subjectFactory = e,
                this._refCount = 0,
                this._isComplete = !1
            }
            _subscribe(t) {
                return this.getSubject().subscribe(t)
            }
            getSubject() {
                const t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()),
                this._subject
            }
            connect() {
                let t = this._connection;
                return t || (this._isComplete = !1,
                t = this._connection = new i.w,
                t.add(this.source.subscribe(new c(this.getSubject(),this))),
                t.closed && (this._connection = null,
                t = i.w.EMPTY)),
                t
            }
        /*    refCount() {
                return (0,
                o.x)()(this)
            }*/
        }
        const l = (()=>{
            const t = a.prototype;
            return {
                operator: {
                    value: null
                },
                _refCount: {
                    value: 0,
                    writable: !0
                },
                _subject: {
                    value: null,
                    writable: !0
                },
                _connection: {
                    value: null,
                    writable: !0
                },
                _subscribe: {
                    value: t._subscribe
                },
                _isComplete: {
                    value: t._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: t.getSubject
                },
                connect: {
                    value: t.connect
                },
                refCount: {
                    value: t.refCount
                }
            }
        }
        )();
        class c extends r.Yc {
            constructor(t, e) {
                super(t),
                this.connectable = e
            }
        /*    _error(t) {
                this._unsubscribe(),
                super._error(t)
            }
            _complete() {
                this.connectable._isComplete = !0,
                this._unsubscribe(),
                super._complete()
            }*/
            _unsubscribe() {
                const t = this.connectable;
                if (t) {
                    this.connectable = null;
                    const e = t._connection;
                    t._refCount = 0,
                    t._subject = null,
                    t._connection = null,
                    e && e.unsubscribe()
                }
            }
        }
    }
    ,
    7930: (t,e,n)=>{
        "use strict";
        n.d(e, {
            z: ()=>i
        });
        var r = n(878)
          , s = n(7471);
        function i(...t) {
            return (0,
            s.J)(1)((0,
            r.of)(...t))
        }
    }
    ,
    1450: (t,e,n)=>{
        "use strict";
        n.d(e, {
            P: ()=>o
        });
        var r = n(8318)
          , s = n(9764)
          , i = n(653);
        function o(t) {
            return new r.y(e=>{
            /*    let n;
                try {
                    n = t()
                } catch (r) {
                    return void e.error(r)
                }
                return (n ? (0,
                s.D)(n) : (0,
                i.c)()).subscribe(e)*/
            }
            )
        }
    }
    ,
    653: (t,e,n)=>{
        "use strict";
        n.d(e, {
            E: ()=>s,
            c: ()=>i
        });
        var r = n(8318);
        const s = new r.y(t=>t.complete());
    /*    function i(t) {
            return t ? function(t) {
                return new r.y(e=>t.schedule(()=>e.complete()))
            }(t) : s
        }*/
    }
    ,
    9764: (t,e,n)=>{
        "use strict";
        n.d(e, {
            D: ()=>h
        });
        var r = n(8318)
          , s = n(6015)
          , i = n(7570)
          , o = n(6197)
          , a = n(2570)
          , l = n(5686)
          , c = n(5168)
          , u = n(9653);
        function h(t, e) {
            return e ? function(t, e) {
            /*    if (null != t) {
                    if (function(t) {
                        return t && "function" == typeof t[o.L]
                    }(t))
                        return function(t, e) {
                            return new r.y(n=>{
                                const r = new i.w;
                                return r.add(e.schedule(()=>{
                                    const s = t[o.L]();
                                    r.add(s.subscribe({
                                        next(t) {
                                            r.add(e.schedule(()=>n.next(t)))
                                        },
                                        error(t) {
                                            r.add(e.schedule(()=>n.error(t)))
                                        },
                                        complete() {
                                            r.add(e.schedule(()=>n.complete()))
                                        }
                                    }))
                                }
                                )),
                                r
                            }
                            )
                        }(t, e);
                    if ((0,
                    c.t)(t))
                        return function(t, e) {
                            return new r.y(n=>{
                                const r = new i.w;
                                return r.add(e.schedule(()=>t.then(t=>{
                                    r.add(e.schedule(()=>{
                                        n.next(t),
                                        r.add(e.schedule(()=>n.complete()))
                                    }
                                    ))
                                }
                                , t=>{
                                    r.add(e.schedule(()=>n.error(t)))
                                }
                                ))),
                                r
                            }
                            )
                        }(t, e);
                    if ((0,
                    u.z)(t))
                        return (0,
                        a.r)(t, e);
                    if (function(t) {
                        return t && "function" == typeof t[l.hZ]
                    }(t) || "string" == typeof t)
                        return function(t, e) {
                            if (!t)
                                throw new Error("Iterable cannot be null");
                            return new r.y(n=>{
                                const r = new i.w;
                                let s;
                                return r.add(()=>{
                                    s && "function" == typeof s.return && s.return()
                                }
                                ),
                                r.add(e.schedule(()=>{
                                    s = t[l.hZ](),
                                    r.add(e.schedule(function() {
                                        if (n.closed)
                                            return;
                                        let t, e;
                                        try {
                                            const n = s.next();
                                            t = n.value,
                                            e = n.done
                                        } catch (r) {
                                            return void n.error(r)
                                        }
                                        e ? n.complete() : (n.next(t),
                                        this.schedule())
                                    }))
                                }
                                )),
                                r
                            }
                            )
                        }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
        */    }(t, e) : t instanceof r.y ? t : new r.y((0,
            s.s)(t))
        }
    }
    ,
    9342: (t,e,n)=>{
        "use strict";
        n.d(e, {
            n: ()=>o
        });
        var r = n(8318)
          , s = n(625)
          , i = n(2570);
        function o(t, e) {
            return e ? (0,
            i.r)(t, e) : new r.y((0,
            s.V)(t))
        }
    }
    ,
    7254: (t,e,n)=>{
        "use strict";
        n.d(e, {
            R: ()=>a
        });
        var r = n(8318)
          , s = n(8470)
          , i = n(5024)
          , o = n(9996);
        function a(t, e, n, c) {
            return (0,
            i.m)(n) && (c = n,
            n = void 0),
            c ? a(t, e, n).pipe((0,
            o.U)(t=>(0,
            s.k)(t) ? c(...t) : c(t))) : new r.y(r=>{
                l(t, e, function(t) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t)
                }, r, n)
            }
            )
        }
        function l(t, e, n, r, s) {
            let i;
            if (function(t) {
                return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
            }(t)) {
                const r = t;
                t.addEventListener(e, n, s),
                i = ()=>r.removeEventListener(e, n, s)
            } else if (function(t) {
                return t && "function" == typeof t.on && "function" == typeof t.off
            }(t)) {
                const r = t;
                t.on(e, n),
                i = ()=>r.off(e, n)
            } else if (function(t) {
                return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
            }(t)) {
                const r = t;
                t.addListener(e, n),
                i = ()=>r.removeListener(e, n)
            } else {
                if (!t || !t.length)
                    throw new TypeError("Invalid event target");
                for (let i = 0, o = t.length; i < o; i++)
                    l(t[i], e, n, r, s)
            }
            r.add(i)
        }
    }
    ,
    1906: (t,e,n)=>{
        "use strict";
        n.d(e, {
            T: ()=>a
        });
        var r = n(8318)
          , s = n(6163)
          , i = n(7471)
          , o = n(9342);
        function a(...t) {
            let e = Number.POSITIVE_INFINITY
              , n = null
              , a = t[t.length - 1];
            return (0,
            s.K)(a) ? (n = t.pop(),
            t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof a && (e = t.pop()),
            null === n && 1 === t.length && t[0]instanceof r.y ? t[0] : (0,
            i.J)(e)((0,
            o.n)(t, n))
        }
    }
    ,
    878: (t,e,n)=>{
        "use strict";
        n.d(e, {
            of: ()=>o
        });
        var r = n(6163)
          , s = n(9342)
          , i = n(2570);
        function o(...t) {
            let e = t[t.length - 1];
            return (0,
            r.K)(e) ? (t.pop(),
            (0,
            i.r)(t, e)) : (0,
            s.n)(t)
        }
    }
    ,
    1225: (t,e,n)=>{
        "use strict";
        n.d(e, {
            _: ()=>s
        });
        var r = n(8318);
    /*    function s(t, e) {
            return new r.y(e ? n=>e.schedule(i, 0, {
                error: t,
                subscriber: n
            }) : e=>e.error(t))
        }
        function i({error: t, subscriber: e}) {
            e.error(t)
        }*/
    }
    ,
    6349: (t,e,n)=>{
        "use strict";
        n.d(e, {
            g: ()=>c
        });
        var r = n(8569)
          , s = n(6673)
          , i = n(653)
          , o = n(878)
          , a = n(1225);
        let l = (()=>{
            class t {
                constructor(t, e, n) {
                    this.kind = t,
                    this.value = e,
                    this.error = n,
                    this.hasValue = "N" === t
                }
                observe(t) {
                    switch (this.kind) {
                    case "N":
                        return t.next && t.next(this.value);
                    case "E":
                        return t.error && t.error(this.error);
                    case "C":
                        return t.complete && t.complete()
                    }
                }
        /*        do(t, e, n) {
                    switch (this.kind) {
                    case "N":
                        return t && t(this.value);
                    case "E":
                        return e && e(this.error);
                    case "C":
                        return n && n()
                    }
                }
                accept(t, e, n) {
                    return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
                }
                toObservable() {
                    switch (this.kind) {
                    case "N":
                        return (0,
                        o.of)(this.value);
                    case "E":
                        return (0,
                        a._)(this.error);
                    case "C":
                        return (0,
                        i.c)()
                    }
                    throw new Error("unexpected notification kind value")
                }*/
                static createNext(e) {
                    return void 0 !== e ? new t("N",e) : t.undefinedValueNotification
                }
        /*        static createError(e) {
                    return new t("E",void 0,e)
                }*/
                static createComplete() {
                    return t.completeNotification
                }
            }
            return t.completeNotification = new t("C"),
            t.undefinedValueNotification = new t("N",void 0),
            t
        }
        )();
        function c(t, e=r.P) {
            var n;
            const s = (n = t)instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
            return t=>t.lift(new u(s,e))
        }
        class u {
            constructor(t, e) {
                this.delay = t,
                this.scheduler = e
            }
            call(t, e) {
                return e.subscribe(new h(t,this.delay,this.scheduler))
            }
        }
        class h extends s.L {
            constructor(t, e, n) {
                super(t),
                this.delay = e,
                this.scheduler = n,
                this.queue = [],
                this.active = !1,
                this.errored = !1
            }
            static dispatch(t) {
                const e = t.source
                  , n = e.queue
                  , r = t.scheduler
                  , s = t.destination;
                for (; n.length > 0 && n[0].time - r.now() <= 0; )
                    n.shift().notification.observe(s);
                if (n.length > 0) {
                    const e = Math.max(0, n[0].time - r.now());
                    this.schedule(t, e)
                } else
                    this.unsubscribe(),
                    e.active = !1
            }
            _schedule(t) {
                this.active = !0,
                this.destination.add(t.schedule(h.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t
                }))
            }
            scheduleNotification(t) {
                if (!0 === this.errored)
                    return;
                const e = this.scheduler
                  , n = new d(e.now() + this.delay,t);
                this.queue.push(n),
                !1 === this.active && this._schedule(e)
            }
            _next(t) {
                this.scheduleNotification(l.createNext(t))
            }
        /*    _error(t) {
                this.errored = !0,
                this.queue = [],
                this.destination.error(t),
                this.unsubscribe()
            }*/
            _complete() {
                this.scheduleNotification(l.createComplete()),
                this.unsubscribe()
            }
        }
        class d {
            constructor(t, e) {
                this.time = t,
                this.notification = e
            }
        }
    }
    ,
    3835: (t,e,n)=>{
        "use strict";
        n.d(e, {
            h: ()=>s
        });
        var r = n(6673);
        function s(t, e) {
            return function(n) {
                return n.lift(new i(t,e))
            }
        }
        class i {
            constructor(t, e) {
                this.predicate = t,
                this.thisArg = e
            }
            call(t, e) {
                return e.subscribe(new o(t,this.predicate,this.thisArg))
            }
        }
        class o extends r.L {
            constructor(t, e, n) {
                super(t),
                this.predicate = e,
                this.thisArg = n,
                this.count = 0
            }
            _next(t) {
                let e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e && this.destination.next(t)
            }
        }
    }
    ,
    9996: (t,e,n)=>{
        "use strict";
        n.d(e, {
            U: ()=>s
        });
        var r = n(6673);
        function s(t, e) {
            return function(n) {
                if ("function" != typeof t)
                    throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new i(t,e))
            }
        }
        class i {
            constructor(t, e) {
                this.project = t,
                this.thisArg = e
            }
            call(t, e) {
                return e.subscribe(new o(t,this.project,this.thisArg))
            }
        }
        class o extends r.L {
            constructor(t, e, n) {
                super(t),
                this.project = e,
                this.count = 0,
                this.thisArg = n || this
            }
            _next(t) {
                let e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }
        }
    }
    ,
    7471: (t,e,n)=>{
        "use strict";
        n.d(e, {
            J: ()=>i
        });
        var r = n(3982)
          , s = n(3392);
        function i(t=Number.POSITIVE_INFINITY) {
            return (0,
            r.zg)(s.y, t)
        }
    }
    ,
    3982: (t,e,n)=>{
        "use strict";
        n.d(e, {
            zg: ()=>o
        });
        var r = n(9996)
          , s = n(9764)
          , i = n(6882);
        function o(t, e, n=Number.POSITIVE_INFINITY) {
            return "function" == typeof e ? i=>i.pipe(o((n,i)=>(0,
            s.D)(t(n, i)).pipe((0,
            r.U)((t,r)=>e(n, t, i, r))), n)) : ("number" == typeof e && (n = e),
            e=>e.lift(new a(t,n)))
        }
        class a {
            constructor(t, e=Number.POSITIVE_INFINITY) {
                this.project = t,
                this.concurrent = e
            }
            call(t, e) {
                return e.subscribe(new l(t,this.project,this.concurrent))
            }
        }
        class l extends i.Ds {
            constructor(t, e, n=Number.POSITIVE_INFINITY) {
                super(t),
                this.project = e,
                this.concurrent = n,
                this.hasCompleted = !1,
                this.buffer = [],
                this.active = 0,
                this.index = 0
            }
            _next(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }
            _tryNext(t) {
                let e;
                const n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this.active++,
                this._innerSub(e)
            }
            _innerSub(t) {
                const e = new i.IY(this)
                  , n = this.destination;
                n.add(e);
                const r = (0,
                i.ft)(t, e);
                r !== e && n.add(r)
            }
            _complete() {
                this.hasCompleted = !0,
                0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                this.unsubscribe()
            }
            notifyNext(t) {
                this.destination.next(t)
            }
            notifyComplete() {
                const t = this.buffer;
                this.active--,
                t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }
        }
    }
    ,
    6598: (t,e,n)=>{
        "use strict";
        n.d(e, {
            O: ()=>s
        });
        var r = n(2875);
        function s(t, e) {
            return function(n) {
                let s;
                if (s = "function" == typeof t ? t : function() {
                    return t
                }
                ,
                "function" == typeof e)
                    return n.lift(new i(s,e));
                const o = Object.create(n, r.N);
                return o.source = n,
                o.subjectFactory = s,
                o
            }
        }
    /*    class i {
            constructor(t, e) {
                this.subjectFactory = t,
                this.selector = e
            }
            call(t, e) {
                const {selector: n} = this
                  , r = this.subjectFactory()
                  , s = n(r).subscribe(t);
                return s.add(e.subscribe(r)),
                s
            }
        }*/
    }
    ,
    1564: (t,e,n)=>{
        "use strict";
        n.d(e, {
            x: ()=>s
        });
        var r = n(6673);
        function s() {
            return function(t) {
                return t.lift(new i(t))
            }
        }
        class i {
            constructor(t) {
                this.connectable = t
            }
            call(t, e) {
                const {connectable: n} = this;
                n._refCount++;
                const r = new o(t,n)
                  , s = e.subscribe(r);
                return r.closed || (r.connection = n.connect()),
                s
            }
        }
        class o extends r.L {
            constructor(t, e) {
                super(t),
                this.connectable = e
            }
            _unsubscribe() {
                const {connectable: t} = this;
                if (!t)
                    return void (this.connection = null);
                this.connectable = null;
                const e = t._refCount;
                if (e <= 0)
                    return void (this.connection = null);
                if (t._refCount = e - 1,
                e > 1)
                    return void (this.connection = null);
                const {connection: n} = this
                  , r = t._connection;
                this.connection = null,
                !r || n && r !== n || r.unsubscribe()
            }
        }
    }
    ,
    4689: (t,e,n)=>{
        "use strict";
        n.d(e, {
            w: ()=>o
        });
        var r = n(9996)
          , s = n(9764)
          , i = n(6882);
        function o(t, e) {
            return "function" == typeof e ? n=>n.pipe(o((n,i)=>(0,
            s.D)(t(n, i)).pipe((0,
            r.U)((t,r)=>e(n, t, i, r))))) : e=>e.lift(new a(t))
        }
        class a {
            constructor(t) {
                this.project = t
            }
            call(t, e) {
                return e.subscribe(new l(t,this.project))
            }
        }
        class l extends i.Ds {
            constructor(t, e) {
                super(t),
                this.project = e,
                this.index = 0
            }
            _next(t) {
                let e;
                const n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this._innerSub(e)
            }
            _innerSub(t) {
                const e = this.innerSubscription;
                e && e.unsubscribe();
                const n = new i.IY(this)
                  , r = this.destination;
                r.add(n),
                this.innerSubscription = (0,
                i.ft)(t, n),
                this.innerSubscription !== n && r.add(this.innerSubscription)
            }
            _complete() {
                const {innerSubscription: t} = this;
                t && !t.closed || super._complete(),
                this.unsubscribe()
            }
            _unsubscribe() {
                this.innerSubscription = void 0
            }
            notifyComplete() {
                this.innerSubscription = void 0,
                this.isStopped && super._complete()
            }
            notifyNext(t) {
                this.destination.next(t)
            }
        }
    }
    ,
    611: (t,e,n)=>{
        "use strict";
        n.d(e, {
            q: ()=>o
        });
        var r = n(6673)
          , s = n(8402)
          , i = n(653);
        function o(t) {
            return e=>0 === t ? (0,
            i.c)() : e.lift(new a(t))
        }
        class a {
            constructor(t) {
                if (this.total = t,
                this.total < 0)
                    throw new s.W
            }
            call(t, e) {
                return e.subscribe(new l(t,this.total))
            }
        }
        class l extends r.L {
            constructor(t, e) {
                super(t),
                this.total = e,
                this.count = 0
            }
            _next(t) {
                const e = this.total
                  , n = ++this.count;
                n <= e && (this.destination.next(t),
                n === e && (this.destination.complete(),
                this.unsubscribe()))
            }
        }
    }
    ,
    4019: (t,e,n)=>{
        "use strict";
        n.d(e, {
            b: ()=>o
        });
        var r = n(6673)
          , s = n(6054)
          , i = n(5024);
        function o(t, e, n) {
            return function(r) {
                return r.lift(new a(t,e,n))
            }
        }
        class a {
            constructor(t, e, n) {
                this.nextOrObserver = t,
                this.error = e,
                this.complete = n
            }
            call(t, e) {
                return e.subscribe(new l(t,this.nextOrObserver,this.error,this.complete))
            }
        }
        class l extends r.L {
            constructor(t, e, n, r) {
                super(t),
                this._tapNext = s.Z,
                this._tapError = s.Z,
                this._tapComplete = s.Z,
                this._tapError = n || s.Z,
                this._tapComplete = r || s.Z,
                (0,
                i.m)(e) ? (this._context = this,
                this._tapNext = e) : e && (this._context = e,
                this._tapNext = e.next || s.Z,
                this._tapError = e.error || s.Z,
                this._tapComplete = e.complete || s.Z)
            }
            _next(t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }
    /*        _error(t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }*/
            _complete() {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }
        }
    }
    ,
    2570: (t,e,n)=>{
        "use strict";
        n.d(e, {
            r: ()=>i
        });
        var r = n(8318)
          , s = n(7570);
        function i(t, e) {
            return new r.y(n=>{
                const r = new s.w;
                let i = 0;
                return r.add(e.schedule(function() {
                    i !== t.length ? (n.next(t[i++]),
                    n.closed || r.add(this.schedule())) : n.complete()
                })),
                r
            }
            )
        }
    }
    ,
    8277: (t,e,n)=>{
        "use strict";
        n.d(e, {
            o: ()=>i
        });
        var r = n(7570);
        class s extends r.w {
            constructor(t, e) {
                super()
            }
    /*        schedule(t, e=0) {
                return this
            }*/
        }
        class i extends s {
            constructor(t, e) {
                super(t, e),
                this.scheduler = t,
                this.work = e,
                this.pending = !1
            }
            schedule(t, e=0) {
                if (this.closed)
                    return this;
                this.state = t;
                const n = this.id
                  , r = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(r, n, e)),
                this.pending = !0,
                this.delay = e,
                this.id = this.id || this.requestAsyncId(r, this.id, e),
                this
            }
            requestAsyncId(t, e, n=0) {
                return setInterval(t.flush.bind(t, this), n)
            }
            recycleAsyncId(t, e, n=0) {
                if (null !== n && this.delay === n && !1 === this.pending)
                    return e;
                clearInterval(e)
            }
            execute(t, e) {
                if (this.closed)
                    return new Error("executing a cancelled action");
                this.pending = !1;
                const n = this._execute(t, e);
                if (n)
                    return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }
            _execute(t, e) {
                let n, r = !1;
                try {
                    this.work(t)
                } catch (s) {
                    r = !0,
                    n = !!s && s || new Error(s)
                }
                if (r)
                    return this.unsubscribe(),
                    n
            }
            _unsubscribe() {
                const t = this.id
                  , e = this.scheduler
                  , n = e.actions
                  , r = n.indexOf(this);
                this.work = null,
                this.state = null,
                this.pending = !1,
                this.scheduler = null,
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                this.delay = null
            }
        }
    }
    ,
    1098: (t,e,n)=>{
        "use strict";
        n.d(e, {
            v: ()=>s
        });
        let r = (()=>{
            class t {
                constructor(e, n=t.now) {
                    this.SchedulerAction = e,
                    this.now = n
                }
                schedule(t, e=0, n) {
                    return new this.SchedulerAction(this,t).schedule(n, e)
                }
            }
            return t.now = ()=>Date.now(),
            t
        }
        )();
        class s extends r {
            constructor(t, e=r.now) {
                super(t, ()=>s.delegate && s.delegate !== this ? s.delegate.now() : e()),
                this.actions = [],
                this.active = !1,
                this.scheduled = void 0
            }
            schedule(t, e=0, n) {
                return s.delegate && s.delegate !== this ? s.delegate.schedule(t, e, n) : super.schedule(t, e, n)
            }
            flush(t) {
                const {actions: e} = this;
                if (this.active)
                    return void e.push(t);
                let n;
                this.active = !0;
                do {
                    if (n = t.execute(t.state, t.delay))
                        break
                } while (t = e.shift());
                if (this.active = !1,
                n) {
                    for (; t = e.shift(); )
                        t.unsubscribe();
                    throw n
                }
            }
        }
    }
    ,
    8569: (t,e,n)=>{
        "use strict";
        n.d(e, {
            P: ()=>s
        });
        var r = n(8277);
        const s = new (n(1098).v)(r.o)
    }
    ,
    5686: (t,e,n)=>{
        "use strict";
        function r() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        n.d(e, {
            hZ: ()=>s
        });
        const s = r()
    }
    ,
    6197: (t,e,n)=>{
        "use strict";
        n.d(e, {
            L: ()=>r
        });
        const r = (()=>"function" == typeof Symbol && Symbol.observable || "@@observable")()
    }
    ,
    5331: (t,e,n)=>{
        "use strict";
        n.d(e, {
            b: ()=>r
        });
        const r = (()=>"function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())()
    }
    ,
    8402: (t,e,n)=>{
        "use strict";
        n.d(e, {
            W: ()=>r
        });
        const r = (()=>{
    /*        function t() {
                return Error.call(this),
                this.message = "argument out of range",
                this.name = "ArgumentOutOfRangeError",
                this
            }*/
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )()
    }
    ,
    3895: (t,e,n)=>{
        "use strict";
        n.d(e, {
            N: ()=>r
        });
        const r = (()=>{
    /*        function t() {
                return Error.call(this),
                this.message = "object unsubscribed",
                this.name = "ObjectUnsubscribedError",
                this
            }*/
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )()
    }
    ,
    4294: (t,e,n)=>{
        "use strict";
        function r(t) {
            setTimeout(()=>{
                throw t
            }
            , 0)
        }
        n.d(e, {
            z: ()=>r
        })
    }
    ,
    3392: (t,e,n)=>{
        "use strict";
        function r(t) {
            return t
        }
        n.d(e, {
            y: ()=>r
        })
    }
    ,
    8470: (t,e,n)=>{
        "use strict";
        n.d(e, {
            k: ()=>r
        });
        const r = (()=>Array.isArray || (t=>t && "number" == typeof t.length))()
    }
    ,
    9653: (t,e,n)=>{
        "use strict";
        n.d(e, {
            z: ()=>r
        });
        const r = t=>t && "number" == typeof t.length && "function" != typeof t
    }
    ,
    5024: (t,e,n)=>{
        "use strict";
        function r(t) {
            return "function" == typeof t
        }
        n.d(e, {
            m: ()=>r
        })
    }
    ,
    2056: (t,e,n)=>{
        "use strict";
        function r(t) {
            return null !== t && "object" == typeof t
        }
        n.d(e, {
            K: ()=>r
        })
    }
    ,
    5168: (t,e,n)=>{
        "use strict";
        function r(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        n.d(e, {
            t: ()=>r
        })
    }
    ,
    6163: (t,e,n)=>{
        "use strict";
        function r(t) {
            return t && "function" == typeof t.schedule
        }
        n.d(e, {
            K: ()=>r
        })
    }
    ,
    6054: (t,e,n)=>{
        "use strict";
        function r() {}
        n.d(e, {
            Z: ()=>r
        })
    }
    ,
    6015: (t,e,n)=>{
        "use strict";
        n.d(e, {
            s: ()=>u
        });
        var r = n(625)
          , s = n(4294)
          , i = n(5686)
          , o = n(6197)
          , a = n(9653)
          , l = n(5168)
          , c = n(2056);
        const u = t=>{
            if (t && "function" == typeof t[o.L])
                return u = t,
                t=>{
                    const e = u[o.L]();
                    if ("function" != typeof e.subscribe)
                        throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return e.subscribe(t)
                }
                ;
            if ((0,
            a.z)(t))
                return (0,
                r.V)(t);
            if ((0,
            l.t)(t))
                return n = t,
                t=>(n.then(e=>{
                    t.closed || (t.next(e),
                    t.complete())
                }
                , e=>t.error(e)).then(null, s.z),
                t);
            if (t && "function" == typeof t[i.hZ])
            /*    return e = t,
                t=>{
                    const n = e[i.hZ]();
                    for (; ; ) {
                        let e;
                        try {
                            e = n.next()
                        } catch (r) {
                            return t.error(r),
                            t
                        }
                        if (e.done) {
                            t.complete();
                            break
                        }
                        if (t.next(e.value),
                        t.closed)
                            break
                    }
                    return "function" == typeof n.return && t.add(()=>{
                        n.return && n.return()
                    }
                    ),
                    t
                }
                ;*/
            {
                const e = (0,
                c.K)(t) ? "an invalid object" : `'${t}'`;
                throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
            }
            var e, n, u
        }
    }
    ,
    625: (t,e,n)=>{
        "use strict";
        n.d(e, {
            V: ()=>r
        });
        const r = t=>e=>{
            for (let n = 0, r = t.length; n < r && !e.closed; n++)
                e.next(t[n]);
            e.complete()
        }
    }
    ,
    5637: (t,e,n)=>{
        "use strict";
        n.d(e, {
            _: ()=>i
        });
        var r = n(5614)
          , s = n(1116);
        let i = (()=>{
            class t {
                constructor(t) {
                    this.nativeWindow = (0,
                    s.NF)(t) ? window : null
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.LFG(r.Lbi))
            }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    }
    ,
    910: (t,e,n)=>{
        "use strict";
        n.d(e, {
            A: ()=>i
        });
        var r = n(3559)
          , s = n(5614);
        let i = (()=>{
            class t {
                constructor() {
                    this.isInitial = new r.xQ,
                    this.onDestroy = new r.xQ,
                    this.setInitial = t=>this.isInitial.next(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    }
    ,
    6909: (t,e,n)=>{
        "use strict";
        var r = n(1116)
          , s = n(5614);
        class i extends r.w_ {
            constructor() {
                super(...arguments),
                this.supportsDOMEvents = !0
            }
        }
        class o extends i {
            static makeCurrent() {
                (0,
                r.HT)(new o)
            }
            onAndCancel(t, e, n) {
                return t.addEventListener(e, n, !1),
                ()=>{
                    t.removeEventListener(e, n, !1)
                }
            }
        /*    dispatchEvent(t, e) {
                t.dispatchEvent(e)
            }*/
            remove(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }
    /*        createElement(t, e) {
                return (e = e || this.getDefaultDocument()).createElement(t)
            }
            createHtmlDocument() {
                return document.implementation.createHTMLDocument("fakeTitle")
            }
            getDefaultDocument() {
                return document
            }
            isElementNode(t) {
                return t.nodeType === Node.ELEMENT_NODE
            }
            isShadowRoot(t) {
                return t instanceof DocumentFragment
            }*/
            getGlobalEventTarget(t, e) {
                return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
            }
            getBaseHref(t) {
                const e = (l = l || document.querySelector("base"),
                l ? l.getAttribute("href") : null);
                return null == e ? null : function(t) {
                    a = a || document.createElement("a"),
                    a.setAttribute("href", t);
                    const e = a.pathname;
                    return "/" === e.charAt(0) ? e : `/${e}`
                }(e)
            }
    /*        resetBaseElement() {
                l = null
            }*/
            getUserAgent() {
                return window.navigator.userAgent
            }
    /*        getCookie(t) {
                return (0,
                r.Mx)(document.cookie, t)
            }*/
        }
        let a, l = null;
        const c = new s.OlP("TRANSITION_ID")
          , u = [{
            provide: s.ip1,
            useFactory: function(t, e, n) {
                return ()=>{
                    n.get(s.CZH).donePromise.then(()=>{
                        const n = (0,
                        r.q)();
                        Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition") === t).forEach(t=>n.remove(t))
                    }
                    )
                }
            },
            deps: [c, r.K0, s.zs3],
            multi: !0
        }];
        class h {
            static init() {
                (0,
                s.VLi)(new h)
            }
            addToWindow(t) {
                s.dqk.getAngularTestability = (e,n=!0)=>{
                /*    const r = t.findTestabilityInTree(e, n);
                    if (null == r)
                        throw new Error("Could not find testability for element.");
                    return r*/
                }
                ,
                s.dqk.getAllAngularTestabilities = ()=>t.getAllTestabilities(),
                s.dqk.getAllAngularRootElements = ()=>t.getAllRootElements(),
                s.dqk.frameworkStabilizers || (s.dqk.frameworkStabilizers = []),
                s.dqk.frameworkStabilizers.push(t=>{
                /*    const e = s.dqk.getAllAngularTestabilities();
                    let n = e.length
                      , r = !1;
                    const i = function(e) {
                        r = r || e,
                        n--,
                        0 == n && t(r)
                    };
                    e.forEach(function(t) {
                        t.whenStable(i)
                    })*/
                }
                )
            }
    /*        findTestabilityInTree(t, e, n) {
                if (null == e)
                    return null;
                const s = t.getTestability(e);
                return null != s ? s : n ? (0,
                r.q)().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
            }*/
        }
        let d = (()=>{
            class t {
    /*            build() {
                    return new XMLHttpRequest
                }*/
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)*/
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const f = new s.OlP("EventManagerPlugins");
        let p = (()=>{
            class t {
                constructor(t, e) {
                    this._zone = e,
                    this._eventNameToPlugin = new Map,
                    t.forEach(t=>t.manager = this),
                    this._plugins = t.slice().reverse()
                }
                addEventListener(t, e, n) {
                    return this._findPluginFor(e).addEventListener(t, e, n)
                }
        /*        addGlobalEventListener(t, e, n) {
                    return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                }*/
                getZone() {
                    return this._zone
                }
                _findPluginFor(t) {
                    const e = this._eventNameToPlugin.get(t);
                    if (e)
                        return e;
                    const n = this._plugins;
                    for (let r = 0; r < n.length; r++) {
                        const e = n[r];
                        if (e.supports(t))
                            return this._eventNameToPlugin.set(t, e),
                            e
                    }
                    throw new Error(`No event manager plugin found for event ${t}`)
                }
            }
            return t.\u0275fac = function(e) {
    /*            return new (e || t)(s.LFG(f),s.LFG(s.R0b)) */
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class g {
            constructor(t) {
                this._doc = t
            }
        /*    addGlobalEventListener(t, e, n) {
                const s = (0,
                r.q)().getGlobalEventTarget(this._doc, t);
                if (!s)
                    throw new Error(`Unsupported event target ${s} for event ${e}`);
                return this.addEventListener(s, e, n)
            }*/
        }
        let m = (()=>{
            class t {
                constructor() {
                    this._stylesSet = new Set
                }
                addStyles(t) {
                    const e = new Set;
                    t.forEach(t=>{
                        this._stylesSet.has(t) || (this._stylesSet.add(t),
                        e.add(t))
                    }
                    ),
                    this.onStylesAdded(e)
                }
            /*    onStylesAdded(t) {}
                getAllStyles() {
                    return Array.from(this._stylesSet)
                }*/
            }
            return t.\u0275fac = function(e) {
                /*return new (e || t)*/
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , y = (()=>{
            class t extends m {
                constructor(t) {
                    super(),
                    this._doc = t,
                    this._hostNodes = new Map,
                    this._hostNodes.set(t.head, [])
                }
                _addStylesToHost(t, e, n) {
                    t.forEach(t=>{
                        const r = this._doc.createElement("style");
                        r.textContent = t,
                        n.push(e.appendChild(r))
                    }
                    )
                }
            /*    addHost(t) {
                    const e = [];
                    this._addStylesToHost(this._stylesSet, t, e),
                    this._hostNodes.set(t, e)
                }
                removeHost(t) {
                    const e = this._hostNodes.get(t);
                    e && e.forEach(v),
                    this._hostNodes.delete(t)
                }*/
                onStylesAdded(t) {
                    this._hostNodes.forEach((e,n)=>{
                        this._addStylesToHost(t, n, e)
                    }
                    )
                }
            /*    ngOnDestroy() {
                    this._hostNodes.forEach(t=>t.forEach(v))
                }*/
            }
            return t.\u0275fac = function(e) {
             /*   return new (e || t)(s.LFG(r.K0))*/
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        /*function v(t) {
            (0,
            r.q)().remove(t)
        }*/
        const _ = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
          , w = /%COMP%/g;
        function b(t, e, n) {
            for (let r = 0; r < e.length; r++) {
                let s = e[r];
                Array.isArray(s) ? b(t, s, n) : (s = s.replace(w, t),
                n.push(s))
            }
            return n
        }
        function C(t) {
            return e=>{
                if ("__ngUnwrap__" === e)
                    return t;
                !1 === t(e) && (e.preventDefault(),
                e.returnValue = !1)
            }
        }
        let S = (()=>{
            class t {
                constructor(t, e, n) {
                    this.eventManager = t,
                    this.sharedStylesHost = e,
                    this.appId = n,
                    this.rendererByCompId = new Map,
                    this.defaultRenderer = new x(t)
                }
                createRenderer(t, e) {
                    if (!t || !e)
                        return this.defaultRenderer;
                    switch (e.encapsulation) {
                    case s.ifc.Emulated:
                        {
                            let n = this.rendererByCompId.get(e.id);
                            return n || (n = new T(this.eventManager,this.sharedStylesHost,e,this.appId),
                            this.rendererByCompId.set(e.id, n)),
                            n.applyToHost(t),
                            n
                        }
                    case 1:
                    case s.ifc.ShadowDom:
                        return new E(this.eventManager,this.sharedStylesHost,t,e);
                    default:
                        if (!this.rendererByCompId.has(e.id)) {
                            const t = b(e.id, e.styles, []);
                            this.sharedStylesHost.addStyles(t),
                            this.rendererByCompId.set(e.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                    }
                }
                begin() {}
                end() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(p),s.LFG(y),s.LFG(s.AFp))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class x {
            constructor(t) {
                this.eventManager = t,
                this.data = Object.create(null)
            }
            /*destroy() {}*/
            createElement(t, e) {
                return e ? document.createElementNS(_[e] || e, t) : document.createElement(t)
            }
            createComment(t) {
                return document.createComment(t)
            }
            createText(t) {
                return document.createTextNode(t)
            }
            appendChild(t, e) {
                t.appendChild(e)
            }
            insertBefore(t, e, n) {
                t && t.insertBefore(e, n)
            }
            removeChild(t, e) {
                t && t.removeChild(e)
            }
            selectRootElement(t, e) {
                let n = "string" == typeof t ? document.querySelector(t) : t;
                if (!n)
                    throw new Error(`The selector "${t}" did not match any elements`);
                return e || (n.textContent = ""),
                n
            }
            parentNode(t) {
                return t.parentNode
            }
            nextSibling(t) {
                return t.nextSibling
            }
            setAttribute(t, e, n, r) {
                if (r) {
                    e = r + ":" + e;
                    const s = _[r];
                    s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n)
                } else
                    t.setAttribute(e, n)
            }
            removeAttribute(t, e, n) {
                if (n) {
                    const r = _[n];
                    r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`)
                } else
                    t.removeAttribute(e)
            }
            addClass(t, e) {
                t.classList.add(e)
            }
            removeClass(t, e) {
                t.classList.remove(e)
            }
            setStyle(t, e, n, r) {
                r & (s.JOm.DashCase | s.JOm.Important) ? t.style.setProperty(e, n, r & s.JOm.Important ? "important" : "") : t.style[e] = n
            }
            /*removeStyle(t, e, n) {
                n & s.JOm.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
            }*/
            setProperty(t, e, n) {
                t[e] = n
            }
            setValue(t, e) {
                t.nodeValue = e
            }
            listen(t, e, n) {
                return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, C(n)) : this.eventManager.addEventListener(t, e, C(n))
            }
        }
        class T extends x {
            constructor(t, e, n, r) {
                super(t),
                this.component = n;
                const s = b(r + "-" + n.id, n.styles, []);
                e.addStyles(s),
                this.contentAttr = "_ngcontent-%COMP%".replace(w, r + "-" + n.id),
                this.hostAttr = "_nghost-%COMP%".replace(w, r + "-" + n.id)
            }
            applyToHost(t) {
                super.setAttribute(t, this.hostAttr, "")
            }
            createElement(t, e) {
                const n = super.createElement(t, e);
                return super.setAttribute(n, this.contentAttr, ""),
                n
            }
        }
    /*    class E extends x {
            constructor(t, e, n, r) {
                super(t),
                this.sharedStylesHost = e,
                this.hostEl = n,
                this.shadowRoot = n.attachShadow({
                    mode: "open"
                }),
                this.sharedStylesHost.addHost(this.shadowRoot);
                const s = b(r.id, r.styles, []);
                for (let i = 0; i < s.length; i++) {
                    const t = document.createElement("style");
                    t.textContent = s[i],
                    this.shadowRoot.appendChild(t)
                }
            }
            nodeOrShadowRoot(t) {
                return t === this.hostEl ? this.shadowRoot : t
            }
            destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot)
            }
            appendChild(t, e) {
                return super.appendChild(this.nodeOrShadowRoot(t), e)
            }
            insertBefore(t, e, n) {
                return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
            }
            removeChild(t, e) {
                return super.removeChild(this.nodeOrShadowRoot(t), e)
            }
            parentNode(t) {
                return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
            }
        }*/
        let A = (()=>{
            class t extends g {
                constructor(t) {
                    super(t)
                }
                supports(t) {
                    return !0
                }
                addEventListener(t, e, n) {
                    return t.addEventListener(e, n, !1),
                    ()=>this.removeEventListener(t, e, n)
                }
                removeEventListener(t, e, n) {
                    return t.removeEventListener(e, n)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(r.K0))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const k = ["alt", "control", "meta", "shift"]
          , I = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }
          , O = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        }
          , R = {
            alt: t=>t.altKey,
            control: t=>t.ctrlKey,
            meta: t=>t.metaKey,
            shift: t=>t.shiftKey
        };
        let P = (()=>{
            class t extends g {
                constructor(t) {
                    super(t)
                }
                supports(e) {
                    return null != t.parseEventName(e)
                }
                addEventListener(e, n, s) {
                    const i = t.parseEventName(n)
                      , o = t.eventCallback(i.fullKey, s, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(()=>(0,
                    r.q)().onAndCancel(e, i.domEventName, o))
                }
                static parseEventName(e) {
                    const n = e.toLowerCase().split(".")
                      , r = n.shift();
                    if (0 === n.length || "keydown" !== r && "keyup" !== r)
                        return null;
                    const s = t._normalizeKey(n.pop());
                    let i = "";
                    if (k.forEach(t=>{
                        const e = n.indexOf(t);
                        e > -1 && (n.splice(e, 1),
                        i += t + ".")
                    }
                    ),
                    i += s,
                    0 != n.length || 0 === s.length)
                        return null;
                    const o = {};
                    return o.domEventName = r,
                    o.fullKey = i,
                    o
                }
            /*    static getEventFullKey(t) {
                    let e = ""
                      , n = function(t) {
                        let e = t.key;
                        if (null == e) {
                            if (e = t.keyIdentifier,
                            null == e)
                                return "Unidentified";
                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)),
                            3 === t.location && O.hasOwnProperty(e) && (e = O[e]))
                        }
                        return I[e] || e
                    }(t);
                    return n = n.toLowerCase(),
                    " " === n ? n = "space" : "." === n && (n = "dot"),
                    k.forEach(r=>{
                        r != n && (0,
                        R[r])(t) && (e += r + ".")
                    }
                    ),
                    e += n,
                    e
                }*/
                static eventCallback(e, n, r) {
                    return s=>{
                    /*    t.getEventFullKey(s) === e && r.runGuarded(()=>n(s))*/
                    }
                }
                static _normalizeKey(t) {
                    switch (t) {
                    case "esc":
                        return "escape";
                    default:
                        return t
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(r.K0))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const N = (0,
        s.eFA)(s._c5, "browser", [{
            provide: s.Lbi,
            useValue: r.bD
        }, {
            provide: s.g9A,
            useValue: function() {
                o.makeCurrent(),
                h.init()
            },
            multi: !0
        }, {
            provide: r.K0,
            useFactory: function() {
                return (0,
                s.RDi)(document),
                document
            },
            deps: []
        }])
          , L = [[], {
            provide: s.zSh,
            useValue: "root"
        }, {
            provide: s.qLn,
            useFactory: function() {
                return new s.qLn
            },
            deps: []
        }, {
            provide: f,
            useClass: A,
            multi: !0,
            deps: [r.K0, s.R0b, s.Lbi]
        }, {
            provide: f,
            useClass: P,
            multi: !0,
            deps: [r.K0]
        }, [], {
            provide: S,
            useClass: S,
            deps: [p, y, s.AFp]
        }, {
            provide: s.FYo,
            useExisting: S
        }, {
            provide: m,
            useExisting: y
        }, {
            provide: y,
            useClass: y,
            deps: [r.K0]
        }, {
            provide: s.dDg,
            useClass: s.dDg,
            deps: [s.R0b]
        }, {
            provide: p,
            useClass: p,
            deps: [f, s.R0b]
        }, {
            provide: r.JF,
            useClass: d,
            deps: []
        }, []];
        let D = (()=>{
            class t {
                constructor(t) {
                    if (t)
                        throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                static withServerTransition(e) {
                    return {
                        ngModule: t,
                        providers: [{
                            provide: s.AFp,
                            useValue: e.appId
                        }, {
                            provide: c,
                            useExisting: s.AFp
                        }, u]
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(t, 12))
            }
            ,
            t.\u0275mod = s.oAB({
                type: t
            }),
            t.\u0275inj = s.cJS({
                providers: L,
                imports: [r.ez, s.hGG]
            }),
            t
        }
        )();
        "undefined" != typeof window && window;
        var U = n(2720);
        const j = [{
            path: "customers",
            loadChildren: ()=>n.e(272).then(n.bind(n, 5272)).then(t=>t.CustomersModule)
        }];
        let F = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = s.oAB({
                type: t
            }),
            t.\u0275inj = s.cJS({
                imports: [[U.Bz.forRoot(j)], U.Bz]
            }),
            t
        }
        )();
        var M = n(5637);
        let H = (()=>{
            class t {
                constructor(t) {
                    this.router = t,
                    this.isLocation = t=>"/" == t.document.location.pathname,
                    this.doHistory = t=>t.history.go(-1)
                }
                set(t) {
                    t.onpopstate = ()=>this.isLocation(t) ? this.doHistory(t) : null,
                    t.onbeforeunload = ()=>t.scrollTo(0, 0),
                    "/customers" == t.document.location.pathname && this.router.navigate([""])
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(U.F0))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , V = (()=>{
            class t {
                constructor() {
                    this.setImg = t=>t.document.getElementById("removeStyle").removeAttribute("style"),
                    this.showImg = t=>t.setTimeout(()=>this.setImg(t), 2700)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , q = (()=>{
            class t {
                constructor() {
                    this.getY = t=>t.document.getElementById("register").offsetTop,
                    this.goToR = t=>{
                        clearTimeout(this.timerId);
                        let e = this.getY(t);
                        if (e != t.pageYOffset)
                            return e > t.pageYOffset ? void Promise.resolve(t.scrollTo(0, t.pageYOffset + 45)).then(()=>this.timerId = t.setTimeout(()=>this.goToR(t), 1)) : (t.scrollTo(0, e),
                            void clearTimeout(this.timerId));
                        clearTimeout(this.timerId)
                    }
                    ,
                    this.checkTarget = (t,e)=>"A" == t.tagName ? this.goToRegister(e) : null,
                    this.setListeners = t=>Object.keys(t.document.getElementsByTagName("a")).forEach(e=>{
                        t.document.getElementsByTagName("a")[e].onclick = ()=>this.goToRegister(t)
                    }
                    )
                }
                goToRegister(t) {
                    try {
                        this.getY(t) ? this.goToR(t) : t.setTimeout(()=>this.goToRegister(t), 9)
                    } catch (e) {}
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var Z = n(910);
        let z = (()=>{
            class t {
                constructor(t, e, n, r, s) {
                    this.checkService = t,
                    this.firstPage = e,
                    this.lazyImg = n,
                    this.scrollService = r,
                    this.sidebarTriggerService = s,
                    this.firstValue = !0,
                    this.title = "frontend",
                    this.showSidebarMenu = ()=>1 == this.firstValue ? this.checkService.nativeWindow.setTimeout(()=>this.sidebarTriggerService.setInitial(!0), 999) : this.sidebarTriggerService.setInitial(!0),
                    this.mainAppCompMethod(t.nativeWindow)
                }
                getCustomersComponentByEvent(t) {
                    t.onclick = this.handler(t),
                    t.onscroll = this.handler(t)
                }
                handler(t) {
                    return e=>{
                        t.onclick = null,
                        t.onscroll = null;
                        const n = t.document.createElement("link");
                        n.setAttribute("rel", "stylesheet"),
                        n.setAttribute("href", "assets/delay.style.css"),
                        n.setAttribute("type", "text/css"),
                        n.setAttribute("as", "style"),
                        t.document.head.appendChild(n),
                        Promise.resolve(this.firstPage.router.navigate(["customers"])).then(()=>this.scrollService.checkTarget(e.target, t)).then(()=>this.scrollService.setListeners(t)),
                        this.firstValue = !1
                    }
                }
                mainAppCompMethod(t) {
                    t && (this.firstPage.set(t),
                    this.lazyImg.showImg(t),
                    1 == this.firstValue && this.getCustomersComponentByEvent(t))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(M._),s.Y36(H),s.Y36(V),s.Y36(q),s.Y36(Z.A))
            }
            ,
            t.\u0275cmp = s.Xpm({
                type: t,
                selectors: [["app-root"]],
                decls: 91,
                vars: 0,
                consts: [["src", "assets/favicon.webp", "onload", "try { this.parentNode.classList.add('webp'); \n    document.getElementById('webpImg').setAttribute('href', 'assets/banner-photo.webp');} catch (_) {}", "onerror", "try { this.parentNode.classList.add('no-webp'); \n    document.getElementById('webpImg').setAttribute('href', 'assets/banner-photo.jpg');} catch (_) {}", "width", "16", "height", "16", 2, "display", "none"], ["id", "headId", 1, "container-xl", "fixed-top"], ["role", "banner", 1, "row", "bg-light", "shadow-sm", "mb-5"], [1, "navbar", "col-12", "navbar-light", "pr-md-0"], [1, "tt"], ["src", "assets/logo.svg", "alt", "logo", "width", "135", "height", "20"], ["role", "navigation", 1, "d-none", "d-lg-block"], [1, "nav"], ["routerLink", "/customers"], ["role", "button", "id", "sidebarTrigger", 1, "menu", "d-lg-none", 3, "click"], ["src", "assets/menu-icon.svg", "alt", "line menu", "width", "20", "height", "15"], ["role", "main", 1, "container-xl", 2, "min-height", "100vh"], [1, "row", "bg-light"], ["id", "removeStyle", 1, "banner", "row", 2, "background", "#3e526b"], [1, "col-md-8", "col-lg-7", "text-white"], [1, "text-md-left", "text-center", "ml-md-0", "mx-auto", "pr-lg-3"], [1, "text-uppercase"], [1, "test"], [1, "assign"], [1, "frontend", "d-block"], [1, "dev"], [1, "d-none", "d-md-inline"], ["routerLink", "/customers", "role", "button", "aria-pressed", "true", 1, "btn", "btn-success"], [1, "about-me", "row", "bg-light"], [1, "col-12", "text-center"], [1, "col-md-4", "col-lg-5"], [1, "man-laptop", "text-center", "mx-lg-auto"], ["src", "assets/man-laptop-v1.svg", "alt", "funny programmer", "width", "429", "height", "362", 1, "img-fluid"], [1, "col-md-8", "col-lg-7"], [1, "developer"], [1, "text-md-left", "text-center"], [1, "we"], [1, "css"], [1, "js"], [1, "first"], [1, "code"], [1, "rd"], [1, "lastchild"], [1, "second"], [1, "project"], [1, "third"], [1, "will"], [1, "any"], [1, "fourth"], [1, "well"], [1, "page"], [1, "ok"], [1, "container-xl", "border-top", "bg-light"], [1, "text-center"]],
                template: function(t, e) {
                    1 & t && (s._UZ(0, "img", 0),
                    s.TgZ(1, "header", 1),
                    s.TgZ(2, "div", 2),
                    s.TgZ(3, "nav", 3),
                    s.TgZ(4, "div", 4),
                    s._UZ(5, "img", 5),
                    s.qZA(),
                    s.TgZ(6, "div", 6),
                    s.TgZ(7, "nav", 7),
                    s.TgZ(8, "a", 8),
                    s._uU(9, "About me"),
                    s.qZA(),
                    s.TgZ(10, "a", 8),
                    s._uU(11, "Relationships"),
                    s.qZA(),
                    s.TgZ(12, "a", 8),
                    s._uU(13, "Requirements"),
                    s.qZA(),
                    s.TgZ(14, "a", 8),
                    s._uU(15, "Users"),
                    s.qZA(),
                    s.TgZ(16, "a", 8),
                    s._uU(17, "Sign Up"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(18, "div", 9),
                    s.NdJ("click", function() {
                        return e.showSidebarMenu()
                    }),
                    s._UZ(19, "img", 10),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(20, "div", 11),
                    s.TgZ(21, "div", 12),
                    s._UZ(22, "nav", 3),
                    s.qZA(),
                    s.TgZ(23, "div", 13),
                    s.TgZ(24, "div", 14),
                    s.TgZ(25, "div", 15),
                    s.TgZ(26, "h1", 16),
                    s.TgZ(27, "span", 17),
                    s._uU(28, "Test"),
                    s.qZA(),
                    s.TgZ(29, "span", 18),
                    s._uU(30, "assignment"),
                    s.qZA(),
                    s.TgZ(31, "span", 19),
                    s._uU(32, "for frontend"),
                    s.qZA(),
                    s.TgZ(33, "span", 20),
                    s._uU(34, "developer position"),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(35, "p"),
                    s._uU(36, "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. "),
                    s.TgZ(37, "span", 21),
                    s._uU(38, " Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens "),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(39, "a", 22),
                    s._uU(40, " Sign up now "),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(41, "div", 23),
                    s.TgZ(42, "div", 24),
                    s.TgZ(43, "h1"),
                    s._uU(44, "Let's get acquainted"),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(45, "div", 25),
                    s.TgZ(46, "div", 26),
                    s._UZ(47, "img", 27),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(48, "div", 28),
                    s.TgZ(49, "div", 29),
                    s.TgZ(50, "h2", 30),
                    s._uU(51, "I am cool frontend developer"),
                    s.qZA(),
                    s.TgZ(52, "p"),
                    s.TgZ(53, "span", 31),
                    s._uU(54, " We will evaluate how clean your approach to "),
                    s.TgZ(55, "span", 32),
                    s._uU(56, "writing CSS and "),
                    s.qZA(),
                    s.TgZ(57, "span", 33),
                    s._uU(58, "Javascript"),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(59, "span", 34),
                    s.TgZ(60, "span", 35),
                    s._uU(61, " code is. You can"),
                    s.qZA(),
                    s._uU(62, " use any CSS and Javascript "),
                    s.TgZ(63, "span", 36),
                    s._uU(64, "3rd party libraries without any restriction."),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(65, "p", 37),
                    s.TgZ(66, "span", 38),
                    s._uU(67, " If 3rd party css/javascript libraries are added "),
                    s.TgZ(68, "span", 39),
                    s._uU(69, "to the project via "),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(70, "span", 40),
                    s.TgZ(71, "span", 41),
                    s._uU(72, "bower/npm/yarn you will "),
                    s.qZA(),
                    s._uU(73, " get bonus points. "),
                    s.TgZ(74, "span", 42),
                    s._uU(75, "If you use any task runner"),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(76, "span", 43),
                    s._uU(77, " (gulp/webpack) you will get bonus points "),
                    s.TgZ(78, "span", 44),
                    s._uU(79, "as well. Slice service directory "),
                    s.TgZ(80, "span", 45),
                    s._uU(81, "page P\u200bSD "),
                    s.TgZ(82, "span", 46),
                    s._uU(83, "mockup\u200b into HTML5/CSS3."),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(84, "div", 30),
                    s.TgZ(85, "a", 8),
                    s._uU(86, "Sign up now"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s._UZ(87, "router-outlet"),
                    s.TgZ(88, "footer", 47),
                    s.TgZ(89, "p", 48),
                    s._uU(90, "\xa9 abz.agency specially for the test task"),
                    s.qZA(),
                    s.qZA())
                },
                directives: [U.yS, U.lC],
                styles: [""]
            }),
            t
        }
        )();
        var $ = n(8721);
        let B = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = s.oAB({
                type: t,
                bootstrap: [z]
            }),
            t.\u0275inj = s.cJS({
                imports: [[D.withServerTransition({
                    appId: "serverApp"
                }), F, $.Wr.register("ngsw-worker.js", {
                    enabled: !0
                })]]
            }),
            t
        }
        )();
        (0,
        s.G48)(),
        document.addEventListener("DOMContentLoaded", ()=>{
            N().bootstrapModule(B).catch(t=>console.error(t))
        }
        )
    }
}, t=>{
    "use strict";
    t(t.s = 6909)
}
]);
