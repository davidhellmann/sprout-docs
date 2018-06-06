(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{207:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("Events & Hooks")]),a("p",[t._v("Sprout Forms can be extended using the following Events and Hooks.")]),t._m(0),t._m(1),a("p",[t._v("Raised before an entry is saved.")]),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Example needed.\n")])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sproutForms.onBeforeSaveEntry\n")])])])])],2),a("h4",[t._v("Params")]),t._m(2),t._m(3),a("p",[t._v("Raised just after an entry is saved")]),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Example needed.\n")])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sproutForms.onSaveEntry\n")])])])])],2),a("h4",[t._v("Params")]),t._m(4),t._m(5),t._m(6),t._m(7),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Example needed.\n")])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public function init()\n{\n  craft()->templates->hook(\'sproutForms.modifyForm\', function(&$context)\n  {\n    $content = \'<div><input type="hidden" name="spammityspam" value="spam"></div>\';\n    return TemplateHelper::getRaw($content);\n  });\n}\n\n')])])])])],2)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"before-a-form-entry-is-saved"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before-a-form-entry-is-saved","aria-hidden":"true"}},[this._v("#")]),this._v(" Before a Form Entry is saved")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("em",[this._v("entry")]),this._v(" – The submitted SproutForms_EntryModel")]),e("li",[e("em",[this._v("isNewEntry")]),this._v(" -  A boolean indicating whether this is a brand new form entry")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"after-a-form-entry-is-saved"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after-a-form-entry-is-saved","aria-hidden":"true"}},[this._v("#")]),this._v(" After a Form Entry is Saved")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("em",[this._v("entry")]),this._v(" – The submitted SproutForms_EntryModel")]),e("li",[e("em",[this._v("isNewEntry")]),this._v(" -  A boolean indicating whether this is a brand new form entry")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Hooks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"template-hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#template-hook","aria-hidden":"true"}},[this._v("#")]),this._v(" Template Hook")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("The "),e("code",[this._v("sproutForms.modifyForm")]),this._v(" Template Hook gives plugins a chance to dynamically add content to a form template. The hook will output content between the "),e("code",[this._v("<form>")]),this._v(" tags when using the "),e("code",[this._v("displayForm")]),this._v(" tag.")])])}],!1,null,null,null);e.default=r.exports}}]);