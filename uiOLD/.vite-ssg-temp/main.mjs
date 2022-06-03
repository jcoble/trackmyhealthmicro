var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import NProgress from "nprogress";
import { createPinia, defineStore } from "pinia";
import { ViteSSG } from "vite-ssg";
import { openBlock, createElementBlock, createElementVNode, ref, computed, provide, useSSRContext, defineComponent, unref, mergeProps, resolveComponent, withCtx, renderSlot, createVNode, createTextVNode, watchEffect, nextTick, toDisplayString, createBlock, Fragment, renderList, createStaticVNode, inject, useAttrs, withModifiers, withKeys, createCommentVNode, h, onMounted } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import { useDark, useToggle } from "@vueuse/core";
import { useRouter } from "vue-router";
import { JsonServiceClient, ResponseStatus, ResponseError, combinePaths, createErrorStatus, appendQueryString, nameOf, errorResponseExcept, humanize, toPascalCase, omit, errorResponse, serializeToObject, leftPart, rightPart, lastRightPart, dateFmt, toDateFmt, toDate } from "@servicestack/client";
import useSWRV from "swrv";
const install$1 = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
var __glob_7_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install: install$1
});
const install = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  app.use(pinia);
  if (isClient)
    pinia.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia.state.value;
};
var __glob_7_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install
});
var index = "";
var main = "";
const _hoisted_1$A = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
}, null, -1);
const _hoisted_3$y = [
  _hoisted_2$A
];
function render$A(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$y);
}
var __unplugin_components_7 = { name: "carbon-sun", render: render$A };
const _hoisted_1$z = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
}, null, -1);
const _hoisted_3$x = [
  _hoisted_2$z
];
function render$z(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_3$x);
}
var __unplugin_components_6 = { name: "carbon-moon", render: render$z };
const _hoisted_1$y = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15Z"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$y
];
function render$y(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$w);
}
var __unplugin_components_0$9 = { name: "mdi-currency-usd", render: render$y };
var _imports_0 = "/assets/img/logo.svg";
class QueryBase {
  constructor(init) {
    Object.assign(this, init);
  }
}
class QueryData extends QueryBase {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
}
class QueryDb extends QueryBase {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
}
var RoomType = /* @__PURE__ */ ((RoomType2) => {
  RoomType2["Single"] = "Single";
  RoomType2["Double"] = "Double";
  RoomType2["Queen"] = "Queen";
  RoomType2["Twin"] = "Twin";
  RoomType2["Suite"] = "Suite";
  return RoomType2;
})(RoomType || {});
class HelloResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class QueryResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class Todo {
  constructor(init) {
    Object.assign(this, init);
  }
}
class AuthenticateResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class RegisterResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class IdResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class Hello {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new HelloResponse();
  }
  getTypeName() {
    return "Hello";
  }
  getMethod() {
    return "POST";
  }
}
class QueryTodos extends QueryData {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
  createResponse() {
    return new QueryResponse();
  }
  getTypeName() {
    return "QueryTodos";
  }
  getMethod() {
    return "GET";
  }
}
class CreateTodo {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new Todo();
  }
  getTypeName() {
    return "CreateTodo";
  }
  getMethod() {
    return "POST";
  }
}
class UpdateTodo {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new Todo();
  }
  getTypeName() {
    return "UpdateTodo";
  }
  getMethod() {
    return "PUT";
  }
}
class DeleteTodo {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
  }
  getTypeName() {
    return "DeleteTodo";
  }
  getMethod() {
    return "DELETE";
  }
}
class DeleteTodos {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
  }
  getTypeName() {
    return "DeleteTodos";
  }
  getMethod() {
    return "DELETE";
  }
}
class Authenticate {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new AuthenticateResponse();
  }
  getTypeName() {
    return "Authenticate";
  }
  getMethod() {
    return "POST";
  }
}
class Register {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new RegisterResponse();
  }
  getTypeName() {
    return "Register";
  }
  getMethod() {
    return "POST";
  }
}
class QueryBookings extends QueryDb {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
  createResponse() {
    return new QueryResponse();
  }
  getTypeName() {
    return "QueryBookings";
  }
  getMethod() {
    return "GET";
  }
}
class CreateBooking {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new IdResponse();
  }
  getTypeName() {
    return "CreateBooking";
  }
  getMethod() {
    return "POST";
  }
}
class UpdateBooking {
  constructor(init) {
    Object.assign(this, init);
  }
  createResponse() {
    return new IdResponse();
  }
  getTypeName() {
    return "UpdateBooking";
  }
  getMethod() {
    return "PATCH";
  }
}
const client = new JsonServiceClient("").apply((c) => {
  c.basePath = "/api";
  c.headers = new Headers();
});
function useClient() {
  const loading2 = ref(false);
  const error2 = ref();
  const setError = ({ message, errorCode, fieldName, errors }) => {
    errorCode != null ? errorCode : errorCode = "Exception";
    errors != null ? errors : errors = [];
    return error2.value = fieldName ? new ResponseStatus({
      errorCode,
      message,
      errors: [new ResponseError({ fieldName, errorCode, message })]
    }) : new ResponseStatus({ errorCode, message, errors });
  };
  const addFieldError = ({ fieldName, message, errorCode }) => {
    var _a;
    errorCode != null ? errorCode : errorCode = "Exception";
    if (!error2.value) {
      setError({ fieldName, message, errorCode });
    } else {
      let copy = new ResponseStatus(error2.value);
      copy.errors = [
        ...((_a = copy.errors) != null ? _a : []).filter((x) => x.fieldName.toLowerCase() != fieldName.toLowerCase()),
        new ResponseError({ fieldName, message, errorCode })
      ];
      error2.value = copy;
    }
  };
  async function api(request, args, method) {
    loading2.value = true;
    const apiResult = await client.api(request);
    loading2.value = false;
    error2.value = apiResult.error;
    return apiResult;
  }
  async function apiVoid(request, args, method) {
    loading2.value = true;
    const apiResult = await client.apiVoid(request);
    loading2.value = false;
    error2.value = apiResult.error;
    return apiResult;
  }
  let ctx = { setError, addFieldError, loading: loading2, error: error2, api, apiVoid };
  provide("ApiState", ctx);
  return ctx;
}
const metadata = ref();
const error = ref();
const loading$1 = ref(false);
const loaded = computed(() => metadata.value != null);
function useApp() {
  const load = async (force) => {
    if (metadata.value && !force)
      return;
    loading$1.value = true;
    let r = await fetch(combinePaths(client.baseUrl, "/types/metadata.json"));
    loading$1.value = false;
    if (r.ok) {
      let json = await r.text();
      metadata.value = JSON.parse(json);
    } else {
      error.value = createErrorStatus(r.statusText);
    }
  };
  const getType = (name) => {
    var _a, _b;
    return (_b = (_a = metadata.value) == null ? void 0 : _a.types) == null ? void 0 : _b.find((x) => {
      var _a2;
      return ((_a2 = x.name) == null ? void 0 : _a2.toLowerCase()) == name.toLowerCase();
    });
  };
  const enumOptions = (name) => {
    var _a;
    let to = {};
    let type = getType(name);
    if (type && type.isEnum && type.enumNames != null) {
      for (let i = 0; i < type.enumNames.length; i++) {
        const name2 = type.enumNames[i];
        const key = (_a = type.enumValues != null ? type.enumValues[i] : null) != null ? _a : name2;
        to[key] = name2;
      }
    }
    return to;
  };
  return {
    metadata,
    error,
    loaded,
    load,
    getType,
    enumOptions
  };
}
class SwrClient {
  constructor(client2) {
    this.client = client2;
  }
  get(fn) {
    return useSWRV(() => {
      let request = fn();
      return appendQueryString(`SwrClient:${nameOf(request)}`, request);
    }, (key) => this.client.get(fn()));
  }
}
const swrClient = new SwrClient(client);
const checkAuth = async () => {
  try {
    return await client.post(new Authenticate());
  } catch (e) {
    return void 0;
  }
};
const logout = async () => client.post(new Authenticate({ provider: "logout" }));
function createAttrs(auth2) {
  return auth2 ? [
    "auth",
    ...((auth2 == null ? void 0 : auth2.roles) || []).map((role) => `role:${role}`),
    ...((auth2 == null ? void 0 : auth2.permissions) || []).map((perm) => `perm:${perm}`)
  ] : [];
}
const auth = ref();
checkAuth().then((r) => auth.value = r);
async function revalidate() {
  loading.value = true;
  signin(await checkAuth());
  loading.value = false;
}
const loading = ref(false);
const attrs = computed(() => createAttrs(auth.value));
const signin = (response) => {
  return auth.value = response;
};
const signout = async (router, redirectTo) => {
  var _a;
  auth.value = void 0;
  await logout();
  await router.replace({ path: redirectTo != null ? redirectTo : (_a = router == null ? void 0 : router.currentRoute) == null ? void 0 : _a.value.path, force: true });
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    show: { type: String, required: false },
    hide: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const hasAccess = computed(() => {
      if (props.show)
        return attrs.value.indexOf(props.show) >= 0;
      if (props.hide)
        return attrs.value.indexOf(props.hide) == -1;
      return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasAccess)) {
        _push(`<li${ssrRenderAttrs(mergeProps({ class: "relative flex flex-wrap just-fu-start m-0" }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavItem.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var NavItem = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/NavItem.vue"]]);
const _sfc_main$F = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(_component_router_link, mergeProps({
    to: _ctx.$attrs.href,
    class: "flex items-center justify-start mw-full p-4 hover:text-green-600"
  }, _ctx.$attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavLink.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$4], ["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/NavLink.vue"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false },
    href: { type: String, required: false }
  },
  setup(__props) {
    const cls = "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_router_link = resolveComponent("router-link");
      if (__props.href) {
        _push(ssrRenderComponent(_component_router_link, mergeProps({ to: __props.href }, _attrs), {
          default: withCtx(({ navigate }, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<button${ssrRenderAttr("type", (_a2 = __props.type) != null ? _a2 : "button")} class="${ssrRenderClass(cls)}"${ssrRenderAttr("href", __props.href)}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", {
                  type: (_b = __props.type) != null ? _b : "button",
                  class: cls,
                  href: __props.href,
                  onClick: navigate
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 8, ["type", "href", "onClick"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: (_a = __props.type) != null ? _a : "button",
          class: cls
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/SecondaryButton.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var SecondaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/SecondaryButton.vue"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false, default: "submit" },
    href: { type: String, required: false },
    color: { type: String, required: false }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const cls = "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500".replace(/indigo/g, (_a = props.color) != null ? _a : "indigo");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (__props.href) {
        _push(ssrRenderComponent(_component_router_link, mergeProps({ to: __props.href }, _attrs), {
          default: withCtx(({ navigate }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="${ssrRenderClass(unref(cls))}"${ssrRenderAttr("href", __props.href)}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", {
                  class: unref(cls),
                  href: __props.href,
                  onClick: navigate
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 10, ["href", "onClick"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.type,
          class: unref(cls)
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/PrimaryButton.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/PrimaryButton.vue"]]);
const isDark = useDark();
useToggle(isDark);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_MdiCurrencyUsd = __unplugin_components_0$9;
      const _component_CarbonMoon = __unplugin_components_6;
      const _component_CarbonSun = __unplugin_components_7;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-200 pr-3" }, _attrs))}><div class="flex flex-wrap items-center"><div class="flex-shrink flex-grow-0">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 cursor-pointer"${_scopeId}><img class="w-9 h-9"${ssrRenderAttr("src", _imports_0)} alt="trackmyhealthmicro logo"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 cursor-pointer" }, [
                createVNode("img", {
                  class: "w-9 h-9",
                  src: _imports_0,
                  alt: "trackmyhealthmicro logo"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-grow flex-shrink flex-nowrap justify-end items-center"><nav class="relative flex flex-grow"><ul class="flex flex-wrap items-center justify-end w-full m-0">`);
      _push(ssrRenderComponent(NavItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SecondaryButton, {
              class: "m-2",
              href: "/hosting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex align-middle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MdiCurrencyUsd, { class: "text-gray-700 w-5 h-5" }, null, _parent3, _scopeId2));
                  _push3(` 0.40 /mo </div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex align-middle" }, [
                      createVNode(_component_MdiCurrencyUsd, { class: "text-gray-700 w-5 h-5" }),
                      createTextVNode(" 0.40 /mo ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(SecondaryButton, {
                class: "m-2",
                href: "/hosting"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex align-middle" }, [
                    createVNode(_component_MdiCurrencyUsd, { class: "text-gray-700 w-5 h-5" }),
                    createTextVNode(" 0.40 /mo ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavLink, { href: "/posts" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Blog`);
                } else {
                  return [
                    createTextVNode("Blog")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavLink, { href: "/posts" }, {
                default: withCtx(() => [
                  createTextVNode("Blog")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavLink, { href: "/todomvc" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Todos`);
                } else {
                  return [
                    createTextVNode("Todos")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavLink, { href: "/todomvc" }, {
                default: withCtx(() => [
                  createTextVNode("Todos")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavLink, { href: "/bookings-crud" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bookings`);
                } else {
                  return [
                    createTextVNode("Bookings")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavLink, { href: "/bookings-crud" }, {
                default: withCtx(() => [
                  createTextVNode("Bookings")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavLink, { href: "/features" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Features`);
                } else {
                  return [
                    createTextVNode("Features")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavLink, { href: "/features" }, {
                default: withCtx(() => [
                  createTextVNode("Features")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, { show: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavLink, { href: "/profile" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Profile`);
                } else {
                  return [
                    createTextVNode("Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavLink, { href: "/profile" }, {
                default: withCtx(() => [
                  createTextVNode("Profile")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, { show: "role:Admin" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavLink, { href: "/admin" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Admin`);
                } else {
                  return [
                    createTextVNode("Admin")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavLink, { href: "/admin" }, {
                default: withCtx(() => [
                  createTextVNode("Admin")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, { show: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SecondaryButton, { class: "m-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign Out`);
                } else {
                  return [
                    createTextVNode("Sign Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(SecondaryButton, {
                class: "m-2",
                onClick: ($event) => unref(signout)(_ctx.$router)
              }, {
                default: withCtx(() => [
                  createTextVNode("Sign Out")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, { hide: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SecondaryButton, {
              class: "m-2",
              href: "/signin"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign In`);
                } else {
                  return [
                    createTextVNode("Sign In")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(SecondaryButton, {
                class: "m-2",
                href: "/signin"
              }, {
                default: withCtx(() => [
                  createTextVNode("Sign In")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavItem, { hide: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PrimaryButton, {
              class: "m-2",
              href: "/signup"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(PrimaryButton, {
                class: "m-2",
                href: "/signup"
              }, {
                default: withCtx(() => [
                  createTextVNode("Register")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li class="ml-2"><button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false"><span class="${ssrRenderClass(`${!unref(isDark) ? "translate-x-5" : "translate-x-0"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`)}"><span class="${ssrRenderClass(`${!unref(isDark) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`)}" aria-hidden="true">`);
      _push(ssrRenderComponent(_component_CarbonMoon, { class: "h-4 w-4 text-gray-400" }, null, _parent));
      _push(`</span><span class="${ssrRenderClass(`${!unref(isDark) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`)}" aria-hidden="true">`);
      _push(ssrRenderComponent(_component_CarbonSun, { class: "h-4 w-4 text-indigo-600" }, null, _parent));
      _push(`</span></span></button></li></ul></nav></div></div></header>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavHeader.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var NavHeader = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/NavHeader.vue"]]);
const _sfc_main$B = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-accent-1 border-t border-accent-2" }, _attrs))}><div class="container mx-auto px-5"><div class="py-28 flex flex-col lg:flex-row items-center"><h3 class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"> A ServiceStack Project </h3><div class="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"><a href="https://docs.servicestack.net" class="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"> Read Documentation </a><a href="https://github.com/NetCoreTemplates/vue-ssg" class="mx-3 font-bold hover:underline"> View on GitHub </a></div></div></div></footer>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavFooter.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var NavFooter = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$3], ["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/NavFooter.vue"]]);
var default_vue_vue_type_style_index_0_lang = "";
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "text-gray-700" }, _attrs))}>`);
      _push(ssrRenderComponent(NavHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(ssrRenderComponent(NavFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/layouts/default.vue"]]);
const _sfc_main$z = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-screen px-4 text-black bg-white text-center flex flex-col items-center justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/empty.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$2], ["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/layouts/empty.vue"]]);
const layouts = {
  "default": __layout_0,
  "empty": __layout_1
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
const routes$1 = [{ "name": "Admin", "path": "/admin", "component": () => Promise.resolve().then(function() {
  return Admin$1;
}), "props": true }, { "name": "Forbidden", "path": "/forbidden", "component": () => Promise.resolve().then(function() {
  return Forbidden$1;
}), "props": true, "meta": { "layout": "empty" } }, { "name": "Index", "path": "/", "component": () => Promise.resolve().then(function() {
  return Index$5;
}), "props": true }, { "name": "Profile", "path": "/profile", "component": () => Promise.resolve().then(function() {
  return Profile$1;
}), "props": true }, { "name": "Signin", "path": "/signin", "component": () => Promise.resolve().then(function() {
  return Signin$1;
}), "props": true }, { "name": "Signup", "path": "/signup", "component": () => Promise.resolve().then(function() {
  return Signup$1;
}), "props": true }, { "name": "TodoMvc", "path": "/todomvc", "component": () => Promise.resolve().then(function() {
  return TodoMvc$1;
}), "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_$1;
}), "props": true, "meta": { "layout": "empty" } }, { "name": "features", "path": "/features", "component": () => Promise.resolve().then(function() {
  return features$1;
}), "props": true, "meta": { "crumbs": [], "frontmatter": { "title": "Template Features" } } }, { "name": "hosting", "path": "/hosting", "component": () => Promise.resolve().then(function() {
  return hosting$1;
}), "props": true, "meta": { "crumbs": [], "frontmatter": { "title": "App Hosting Costs" } } }, { "name": "bookings-crud-Create", "path": "/bookings-crud/create", "component": () => Promise.resolve().then(function() {
  return Create$1;
}), "props": true }, { "name": "bookings-crud-Edit", "path": "/bookings-crud/edit", "component": () => Promise.resolve().then(function() {
  return Edit$1;
}), "props": true }, { "name": "bookings-crud-Index", "path": "/bookings-crud", "component": () => Promise.resolve().then(function() {
  return Index$3;
}), "props": true }, { "name": "posts-Index", "path": "/posts", "component": () => Promise.resolve().then(function() {
  return Index$1;
}), "props": true }, { "name": "posts-deploy", "path": "/posts/deploy", "component": () => Promise.resolve().then(function() {
  return deploy$1;
}), "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Deployment with GitHub Actions", "summary": "Configuring your GitHub repo for SSH and CDN deployments", "date": "2021-11-21T00:00:00.000Z" } } }, { "name": "posts-rider", "path": "/posts/rider", "component": () => Promise.resolve().then(function() {
  return rider$1;
}), "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Develop using JetBrains Rider", "summary": "Setting up & exploring development workflow in Rider", "date": "2021-11-23T00:00:00.000Z" } } }, { "name": "posts-typography", "path": "/posts/typography", "component": () => Promise.resolve().then(function() {
  return typography$1;
}), "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Tailwind Typography", "summary": "tailwindcss/typography enabled for Markdown pages", "date": "2021-11-20T00:00:00.000Z" } } }, { "name": "posts-vs", "path": "/posts/vs", "component": () => Promise.resolve().then(function() {
  return vs$1;
}), "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Develop using Visual Studio", "summary": "Exploring development workflow in VS Code and Visual Studio .NET", "date": "2021-11-22T00:00:00.000Z" } } }];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "trackmyhealthmicro",
      meta: [
        { name: "description", content: "Vite SSG Starter Template" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/App.vue"]]);
const Routes = {
  signin: (redirectTo) => redirectTo ? `/signin?redirect=${redirectTo}` : `/signin`,
  forbidden: () => "/forbidden"
};
const ROUTE_GUARDS = [
  { path: "/profile", attr: "auth" },
  { path: "/admin", attr: "role:Admin" },
  { path: "/bookings-crud", attr: "role:Employee" }
];
function configRouter(router) {
  const invalidAttrRedirect = (to, guardAttr, userAttrs) => userAttrs.indexOf("auth") === -1 ? Routes.signin(to.path) : Routes.forbidden();
  const validateRoute = (to, next, attrs2) => {
    for (let i = 0; i < ROUTE_GUARDS.length; i++) {
      const { path, attr } = ROUTE_GUARDS[i];
      if (!to.path.startsWith(path))
        continue;
      if (attrs2.indexOf(attr) === -1) {
        const isAdmin = attrs2.indexOf("role:Admin") >= 0;
        const allowAdmin = isAdmin && (attr.startsWith("role:") || attr.startsWith("perm:"));
        if (!allowAdmin) {
          const goTo = invalidAttrRedirect(to, attr, attrs2);
          next(goTo);
          return;
        }
      }
    }
    next();
  };
  router.beforeEach((to, from, next) => {
    if (loading) {
      const stop = watchEffect(() => {
        validateRoute(to, next, attrs.value);
        nextTick(() => stop());
      });
    } else {
      validateRoute(to, next, attrs.value);
    }
  });
  return router;
}
function getRedirect(router) {
  var _a;
  let { redirect } = (_a = router.currentRoute) == null ? void 0 : _a.value.query;
  let ret = redirect && Array.isArray(redirect) ? redirect[0] : redirect;
  return ret == null ? void 0 : ret.toString();
}
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(App, { routes }, (ctx) => {
  configRouter(ctx.router);
  Object.values({ "./modules/nprogress.ts": __glob_7_0, "./modules/pinia.ts": __glob_7_1 }).map((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
const _hoisted_1$x = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m0 4a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.13 12A9.69 9.69 0 0 1 12 20.92A9.69 9.69 0 0 1 6.87 17c-.34-.5-.63-1-.87-1.53c0-1.65 2.71-3 6-3s6 1.32 6 3c-.24.53-.53 1.03-.87 1.53Z"
}, null, -1);
const _hoisted_3$v = [
  _hoisted_2$x
];
function render$x(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$v);
}
var __unplugin_components_0$8 = { name: "mdi-shield-account", render: render$x };
const _hoisted_1$w = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
}, null, -1);
const _hoisted_3$u = [
  _hoisted_2$w
];
function render$w(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$u);
}
var __unplugin_components_2$4 = { name: "mdi-chevron-right", render: render$w };
const _hoisted_1$v = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
}, null, -1);
const _hoisted_3$t = [
  _hoisted_2$v
];
function render$v(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$t);
}
var __unplugin_components_0$7 = { name: "mdi-home", render: render$v };
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    crumbs: { type: Array, required: false, default: () => [] },
    name: { type: String, required: true },
    href: { type: String, required: false },
    current: { type: Boolean, required: false, default: true }
  },
  setup(__props) {
    const { current } = __props;
    const ariaCurrent = computed(() => current ? "page" : void 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_MdiHome = __unplugin_components_0$7;
      const _component_MdiChevronRight = __unplugin_components_2$4;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "flex",
        "aria-label": "Breadcrumb"
      }, _attrs))}><ol role="list" class="flex items-center sm:space-x-4 flex-wrap sm:flex-nowrap"><li><div>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="text-gray-600 hover:text-gray-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MdiHome, {
              class: "flex-shrink-0 h-10 w-10",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Home</span></a>`);
          } else {
            return [
              createVNode("a", { class: "text-gray-600 hover:text-gray-700" }, [
                createVNode(_component_MdiHome, {
                  class: "flex-shrink-0 h-10 w-10",
                  "aria-hidden": "true"
                }),
                createVNode("span", { class: "sr-only" }, "Home")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><!--[-->`);
      ssrRenderList(__props.crumbs, (crumb) => {
        _push(`<li><div class="flex items-center">`);
        _push(ssrRenderComponent(_component_MdiChevronRight, {
          class: "flex-shrink-0 h-8 w-8 text-gray-400",
          "aria-hidden": "true"
        }, null, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: crumb.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700"${_scopeId}>${ssrInterpolate(crumb.name)}</a>`);
            } else {
              return [
                createVNode("a", { class: "ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700" }, toDisplayString(crumb.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--><li><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_MdiChevronRight, {
        class: "flex-shrink-0 h-8 w-8 text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      if (__props.href) {
        _push(ssrRenderComponent(_component_router_link, { to: __props.href }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700"${ssrRenderAttr("aria-current", unref(ariaCurrent))}${_scopeId}>${ssrInterpolate(__props.name)}</a>`);
            } else {
              return [
                createVNode("a", {
                  class: "ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700",
                  "aria-current": unref(ariaCurrent)
                }, toDisplayString(__props.name), 9, ["aria-current"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span class="ml-1 sm:ml-4 sm:text-3xl text-gray-700"${ssrRenderAttr("aria-current", unref(ariaCurrent))}>${ssrInterpolate(__props.name)}</span>`);
      }
      _push(`</div></li></ol></nav>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppBreadcrumb.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var AppBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/AppBreadcrumb.vue"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen mx-auto" }, _attrs))}><main class="flex"><div class="container px-5 mb-32">`);
      _push(ssrRenderComponent(AppBreadcrumb, {
        class: "my-8",
        name: __props.title
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppPage.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var AppPage = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/AppPage.vue"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const user = auth.value;
    const roles = (_b = (_a = auth.value) == null ? void 0 : _a.roles) != null ? _b : [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MdiShieldAccount = __unplugin_components_0$8;
      if (unref(user)) {
        _push(ssrRenderComponent(AppPage, mergeProps({
          title: "Admin Page",
          class: "max-w-prose flex justify-center"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_MdiShieldAccount, { class: "w-36 h-36 text-gray-700" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>${ssrInterpolate(unref(user).displayName)}</div><div${_scopeId}>${ssrInterpolate(unref(user).userName)}</div><div class="mt-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(roles), (role) => {
                _push2(`<span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"${_scopeId}>${ssrInterpolate(role)}</span>`);
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(SecondaryButton, { class: "mt-8" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Sign Out`);
                  } else {
                    return [
                      createTextVNode("Sign Out")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                  createVNode(_component_MdiShieldAccount, { class: "w-36 h-36 text-gray-700" }),
                  createVNode("div", null, toDisplayString(unref(user).displayName), 1),
                  createVNode("div", null, toDisplayString(unref(user).userName), 1),
                  createVNode("div", { class: "mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role) => {
                      return openBlock(), createBlock("span", {
                        key: role,
                        class: "ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                      }, toDisplayString(role), 1);
                    }), 128))
                  ]),
                  createVNode(SecondaryButton, {
                    class: "mt-8",
                    onClick: ($event) => unref(signout)(_ctx.$router, "/admin")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign Out")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Admin.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var Admin = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/Admin.vue"]]);
var Admin$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Admin
});
var block0 = {};
const _sfc_main$u = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_MdiHome = __unplugin_components_0$7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="inline-block border-gray-300 border-r m-0 mr-5 py-2 pr-4 text-2xl font-medium align-top">403</h1><div class="inline-block text-left h-8 align-middle"><h2 class="text-sm leading-10 font-normal m-0 p-0">You do not have access to this page.</h2></div><div class="mt-2"><button class="inline-flex justify-center py-1 px-2 text-sm">`);
  _push(ssrRenderComponent(_component_MdiHome, { class: "w-8 h-8" }, null, _parent));
  _push(`</button></div></div>`);
}
// if (typeof block0 === "function")
//   block0(_sfc_main$u);
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Forbidden.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var Forbidden = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$1], ["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/Forbidden.vue"]]);
var Forbidden$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Forbidden
});
const _hoisted_1$u = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12Z"
}, null, -1);
const _hoisted_3$s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10L12 15.59zM27.38 28h-6.762L24 21.236zM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.026-10.057A1 1 0 0 0 24 18z"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$u,
  _hoisted_3$s
];
function render$u(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_4$8);
}
var __unplugin_components_16 = { name: "carbon-checkmark-outline-warning", render: render$u };
const _hoisted_1$t = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m2.8-10V9.5C14.8 8.1 13.4 7 12 7S9.2 8.1 9.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11Z"
}, null, -1);
const _hoisted_3$r = [
  _hoisted_2$t
];
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$r);
}
var __unplugin_components_15 = { name: "mdi-shield-lock-outline", render: render$t };
const _hoisted_1$s = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m16.125 5.272l-4.511 4.475l2.684 2.659l1.827-1.813l5.19 5.145L24 13.079zM8.13 8.265L0 16.066l2.772 2.662l5.357-5.145l5.357 5.145l2.772-2.662z"
}, null, -1);
const _hoisted_3$q = [
  _hoisted_2$s
];
function render$s(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_3$q);
}
var __unplugin_components_14 = { name: "simple-icons-codeclimate", render: render$s };
const _hoisted_1$r = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H2c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1H5V2zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1V2zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"
}, null, -1);
const _hoisted_3$p = [
  _hoisted_2$r
];
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$p);
}
var __unplugin_components_13 = { name: "ic-round-settings-input-component", render: render$r };
const _hoisted_1$q = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"
}, null, -1);
const _hoisted_3$o = [
  _hoisted_2$q
];
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$o);
}
var __unplugin_components_12 = { name: "ic-round-auto-awesome-mosaic", render: render$q };
const _hoisted_1$p = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M13 21h13.17l-2.58 2.59L25 25l5-5l-5-5l-1.41 1.41L26.17 19H13v2z"
}, null, -1);
const _hoisted_3$n = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M22 14v-4a1 1 0 0 0-.29-.71l-7-7A1 1 0 0 0 14 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h-2v2H4V4h8v6a2 2 0 0 0 2 2h6v2Zm-8-4V4.41L19.59 10Z"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$p,
  _hoisted_3$n
];
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_4$7);
}
var __unplugin_components_11 = { name: "carbon-document-export", render: render$p };
const _hoisted_1$o = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m19 8l-4 4h3a6 6 0 0 1-6 6c-1 0-1.97-.25-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20a8 8 0 0 0 8-8h3M6 12a6 6 0 0 1 6-6c1 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4a8 8 0 0 0-8 8H1l4 4l4-4"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$o
];
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$m);
}
var __unplugin_components_10 = { name: "mdi-cached", render: render$o };
const _hoisted_1$n = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 128 128",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$n = /* @__PURE__ */ createStaticVNode('<path fill="#FFBE1F" d="M64.36 54.09c-15.61-.56-28.51 9.61-31.55 29.94c-3.06 20.45 6.76 40.38 31.26 39.93c26.04-.47 34.07-21.65 30.62-41.26c-3.94-22.28-16.97-28.12-30.33-28.61z"></path><path fill="#F79429" d="M77.01 72.23c-2.19-.06-6.91 4.64-7.85 5.69c-1.9 2.13-.5 4.24 1.69 3.18c2.11-1.02 5.38-3.28 6.2-3.29c.88-.01 3.42 1.67 4.49 2.48c3.08 2.3 4.79-.11 2.9-2.42c-1.06-1.29-4.92-5.57-7.43-5.64zm-26.09.06c-2.5-.13-8.08 5.56-8.38 5.88c-1.59 1.74-.11 3.75 2.01 2.85c1.22-.52 5.08-3.1 6.01-3.07c.69.02 2.19 1.14 4.35 2.55c3.54 2.3 5.49-.08 3.15-2.62c-2.36-2.56-4.97-5.48-7.14-5.59zM40.09 86.26c-1.45-.1-4.41 2.6-5.24 3.52c-.83.92-1.5 1.73-.87 2.7c.43.66 1.78.69 2.8.11c1.31-.74 2.66-1.47 3.17-1.45c.83.04 4.12 2.95 5.14 3.82c2.66 2.25 4.35-.77 2.88-2.51c-1.57-1.86-5.2-6-7.88-6.19zm24.04.24c-2.78-.04-7.96 5.49-8.75 6.41c-1.91 2.23-.46 5.2 2.51 3.12c.89-.63 4.63-3.84 5.98-3.74c.86.07 3.79 2.37 5.8 3.78c2.68 1.89 4.49-.29 2.64-2.77c-.83-1.12-5.11-6.76-8.18-6.8zm23.22-.63c-1.61-.09-7.02 5.6-7.94 6.8c-1.59 2.08.15 4.06 2.59 2.33c1.73-1.23 5.32-3.94 5.69-3.96c.53-.04 1.95 1.03 3.04 1.66c1.17.68 2.51.62 2.92-.15c.56-1.04-.27-2.06-1.12-2.85c-1.42-1.34-3.78-3.75-5.18-3.83zM76.5 101.91c-2.9.05-7.07 4.98-7.83 6.25c-1.45 2.44.78 3.46 2.03 2.84c1.89-.95 3.93-3.16 5.95-3.53c.87-.16 3.69 2.07 4.43 2.53c3.68 2.3 5.01-.81 2.58-3.22c-1.75-1.73-5.07-4.91-7.16-4.87zm-24.74-.09c-2.04-.1-6.92 4.33-8.14 5.51c-1.64 1.6-.45 4.26 2.15 3c2.27-1.1 4.99-2.78 5.75-2.74c.96.05 3.03 1.66 4.26 2.5c3.66 2.52 5.24-.25 2.96-2.89c-1.63-1.87-4.78-5.27-6.98-5.38z"></path><path fill="#2F7C31" d="M25.53 23.68c-.91-1.17 4.1-3.87 9.38-4.02c6.63-.19 12.71 1.57 12.71 1.57s.55-4.36-2.95-9.24c-2.4-3.35-3.49-5.01-3.42-6.2c.07-1.2 5.27-1.93 12.2 1.16c5.79 2.58 10.29 7.5 10.29 7.5s3.66-5.12 8.48-7.59C77.82 4 84.68 3.51 85.28 4.64c.46.86-1.72 3.38-3.15 6.62c-2.25 5.08-2.12 9.27-2.12 9.27s4.66-3.4 9.66-4.4c2.54-.51 10.03-.97 9.53.86c-.08.29-12.88 9.28-12.88 9.28l-1.91 9.35s6.79-3.88 12.84-3.17c3.13.37 2.61 1.35 2.61 1.35l-14.52 8.24l-2.16 7.13s4.07-1.02 8.03-1.07c1.91-.02 5.04.48 5.19 1.45c.2 1.25-8.75 5.67-8.75 5.67l-24.09 9.76l-22.87-8.28s-10.27-1.62-10.27-2.74c0-1.13 2.05-2.01 5.13-2.49c3.56-.56 7.22-.36 7.22-.36L32.2 44.1s-6.5-.61-7.06-1.88c-.56-1.27 2.92-3.59 5.05-4.21c5.39-1.58 11.53-.32 11.53-.32l-3.47-9.29c-.02-.03-11.73-3.45-12.72-4.72z"></path><path fill="#709921" d="M54.36 33.59c.54.27 1.94-3.05 3.67-5.18c2.52-3.11 5.8-5.44 6.37-5.44c.55 0 3.12 1.95 5.35 4.62c2.7 3.24 3.91 5.95 4.18 6.08c1 .49 4.24-5.22 10.48-10.04c5.39-4.17 14.34-7.9 14.81-6.64c.15.41-4.44 3.43-8.84 9.55c-4.83 6.71-4.36 13.94-4.36 13.94s5.53-3.97 7.31-4.89c1.49-.77 7.14-2.94 6.5-1.73c-.46.86-5.86 6.24-8.96 9.19c-4.88 4.62-6.32 11.51-5.85 11.9c.54.45 4.17-2.24 6.36-3.47c2.08-1.17 5.02-2.12 5-1.92c-.13 1.47-5.43 5.29-9.16 8.64c-2.76 2.47-8.1 9.52-23.31 9.27c-12.57-.2-19.92-6.78-24.5-9.24c-3.16-1.7-9.04-3.6-8.97-4.18c.04-.32 2.8-.54 4.66-.31c5.14.62 8.44 2.17 8.79 1.72c.36-.46-4.55-6.68-13.03-10.46c-4.09-1.83-5.88-2.3-5.8-3.12c.03-.36 2.59-.83 5.85-.94c5.78-.19 11.28 1.85 11.79 1.91c1.2.15-3.65-8.26-6.4-11.54c-4.36-5.21-11.16-6.6-10.88-7.91c.15-.71 8.07-.81 14.57 1.63c6.77 2.52 13.2 7.98 14.37 8.56z"></path><path fill="#2F7C31" d="M64.38 38.24c-.61.08-3.02 1.38-6.19 4.71c-3.75 3.93-5.07 8.18-4.2 8.9c1.17.96 2.8-.87 5.04-2.45c2.64-1.86 4.78-2.87 5.24-2.87c.46 0 2.52 1.3 4.25 2.61c2.15 1.64 4.01 3.41 4.96 2.81c1.6-.99-.62-6.17-3.12-9c-2.66-3.02-5.45-4.78-5.98-4.71z"></path>', 5);
const _hoisted_7$3 = [
  _hoisted_2$n
];
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_7$3);
}
var __unplugin_components_4$2 = { name: "noto-pineapple", render: render$n };
const _hoisted_1$m = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$m = /* @__PURE__ */ createStaticVNode('<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V21" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M4 3V5" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path stroke-linecap="round" d="M18 4.25204C17.3608 4.08751 16.6906 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20C16.6906 20 17.3608 19.9125 18 19.748" class="il-md-length-40 il-md-duration-3 il-md-delay-2"></path><path stroke-linecap="round" d="M16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8Z" class="il-md-length-40 il-md-duration-5 il-md-delay-5"></path></g>', 1);
const _hoisted_3$l = [
  _hoisted_2$m
];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$l);
}
var __unplugin_components_8 = { name: "line-md-iconify2", render: render$m };
const _hoisted_1$l = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 154",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$l = ["id"];
const _hoisted_3$k = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#2298BD"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#0ED7B5"
}, null, -1);
const _hoisted_5$4 = [
  _hoisted_3$k,
  _hoisted_4$6
];
const _hoisted_6$3 = ["fill"];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDa"],
        x1: "-2.778%",
        x2: "100%",
        y1: "32%",
        y2: "67.556%"
      }, _hoisted_5$4, 8, _hoisted_2$l)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      d: "M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
    }, null, 8, _hoisted_6$3)
  ]);
}
var __unplugin_components_1$5 = { name: "logos-tailwindcss-icon", render: render$l, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$k = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M22.27 19.385H1.73A1.73 1.73 0 0 1 0 17.655V6.345a1.73 1.73 0 0 1 1.73-1.73h20.54A1.73 1.73 0 0 1 24 6.345v11.308a1.73 1.73 0 0 1-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885l2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885l-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$k
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$j);
}
var __unplugin_components_4$1 = { name: "simple-icons-markdown", render: render$k };
const _hoisted_1$j = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M6.5.75a.75.75 0 0 0-1.5 0V2H3.75A1.75 1.75 0 0 0 2 3.75V5H.75a.75.75 0 0 0 0 1.5H2v3H.75a.75.75 0 0 0 0 1.5H2v1.25c0 .966.784 1.75 1.75 1.75H5v1.25a.75.75 0 0 0 1.5 0V14h3v1.25a.75.75 0 0 0 1.5 0V14h1.25A1.75 1.75 0 0 0 14 12.25V11h1.25a.75.75 0 0 0 0-1.5H14v-3h1.25a.75.75 0 0 0 0-1.5H14V3.75A1.75 1.75 0 0 0 12.25 2H11V.75a.75.75 0 0 0-1.5 0V2h-3V.75zm5.75 11.75h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25zM5.75 5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zm.75 4.5v-3h3v3h-3z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$i);
}
var __unplugin_components_3$2 = { name: "octicon-cpu16", render: render$j };
const _hoisted_1$i = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "#007ACC",
  d: "M0 128v128h256V0H0z"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "m56.612 128.85l-.081 10.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.4-.244-44.983-.203l-44.74.122l-.121 10.443Zm149.955-10.742c6.501 1.625 11.459 4.51 16.01 9.224c2.357 2.52 5.851 7.111 6.136 8.208c.08.325-11.053 7.802-17.798 11.988c-.244.162-1.22-.894-2.317-2.52c-3.291-4.795-6.745-6.867-12.028-7.233c-7.76-.528-12.759 3.535-12.718 10.321c0 1.992.284 3.17 1.097 4.795c1.707 3.536 4.876 5.649 14.832 9.956c18.326 7.883 26.168 13.084 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.14 17.879-28.323 20.276c-4.388.772-14.79.65-19.504-.203c-10.28-1.828-20.033-6.908-26.047-13.572c-2.357-2.6-6.949-9.387-6.664-9.874c.122-.163 1.178-.813 2.356-1.504c1.138-.65 5.446-3.129 9.509-5.485l7.355-4.267l1.544 2.276c2.154 3.29 6.867 7.801 9.712 9.305c8.167 4.307 19.383 3.698 24.909-1.26c2.357-2.153 3.332-4.388 3.332-7.68c0-2.966-.366-4.266-1.91-6.501c-1.99-2.845-6.054-5.242-17.595-10.24c-13.206-5.69-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.617-1.22-12.678-.447-16.335c2.723-12.76 12.353-21.659 26.25-24.3c4.51-.853 14.994-.528 19.424.569Z"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$i,
  _hoisted_3$h
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_4$5);
}
var __unplugin_components_2$3 = { name: "logos-typescript-icon", render: render$i };
const _hoisted_1$h = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 257",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = ["id"];
const _hoisted_3$g = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#41D1FF"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BD34FE"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_3$g,
  _hoisted_4$4
];
const _hoisted_6$2 = ["id"];
const _hoisted_7$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEA83"
}, null, -1);
const _hoisted_8$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "8.333%",
  "stop-color": "#FFDD35"
}, null, -1);
const _hoisted_9$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFA800"
}, null, -1);
const _hoisted_10$2 = [
  _hoisted_7$2,
  _hoisted_8$2,
  _hoisted_9$2
];
const _hoisted_11$1 = ["fill"];
const _hoisted_12$1 = ["fill"];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDa"],
        x1: "-.828%",
        x2: "57.636%",
        y1: "7.652%",
        y2: "78.411%"
      }, _hoisted_5$3, 8, _hoisted_2$h),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDb"],
        x1: "43.376%",
        x2: "50.316%",
        y1: "2.242%",
        y2: "89.03%"
      }, _hoisted_10$2, 8, _hoisted_6$2)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      d: "M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
    }, null, 8, _hoisted_11$1),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDb"] + ")",
      d: "M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
    }, null, 8, _hoisted_12$1)
  ]);
}
var __unplugin_components_1$4 = { name: "logos-vitejs", render: render$h, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId(), "svgIDb": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$g = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 221",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41B883",
  d: "M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41B883",
  d: "m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#35495E",
  d: "M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$g,
  _hoisted_3$f,
  _hoisted_4$3
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_5$2);
}
var __unplugin_components_5 = { name: "logos-vue", render: render$g };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const { data, error: error2 } = swrClient.get(() => new Hello({ name: props.name }));
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(error2)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "ml-2 text-red-500" }, _attrs))}>${ssrInterpolate(unref(error2).message)}</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "ml-3 mt-2 text-2xl" }, _attrs))}>${ssrInterpolate(unref(data) ? unref(data).result : "loading...")}</div>`);
      }
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloApi.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var HelloApi = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/HelloApi.vue"]]);
const _hoisted_1$f = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$e);
}
var __unplugin_components_0$6 = { name: "mdi-check", render: render$f };
var ShellCommand_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    let successText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MdiCheck = __unplugin_components_0$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lang relative bg-gray-700 text-gray-300 pl-5 py-3 sm:rounded flex" }, _attrs))} data-v-346361ab><div class="flex ml-2 w-full justify-between cursor-pointer" data-v-346361ab><label class="" data-v-346361ab>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label><small class="text-xs text-gray-400 px-3 -mt-1" data-v-346361ab>sh</small></div>`);
      if (unref(successText)) {
        _push(`<div class="-mr-24 right-0 absolute text-md text-gray-200 bg-green-700 px-1 rounded" data-v-346361ab><div class="flex pr-1" data-v-346361ab>`);
        _push(ssrRenderComponent(_component_MdiCheck, { class: "w-5 h-5 mt-0.5" }, null, _parent));
        _push(` ${ssrInterpolate(unref(successText))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ShellCommand.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var ShellCommand = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-346361ab"], ["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/ShellCommand.vue"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const project = ref("ProjectName");
    const resolvePath = (path) => navigator.userAgent.indexOf("Win") >= 0 ? path.replace(/\//g, "\\") : path;
    const uiPath = () => resolvePath(`ui`);
    const apiPath = () => resolvePath(`api/${project.value}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(_attrs)}><h2 class="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 whitespace-nowrap text-center pt-8"> Getting Started </h2><div class="mb-8 md:mb-16"><div class="sm:mx-0 sm:px-4 sm:py-8 flex justify-evenly"><div class="flex flex-col"><h4 class="py-6 text-center text-xl">Create New Project</h4><input type="text"${ssrRenderAttr("value", project.value)} autocomplete="off" spellcheck="false" class="mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800">`);
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`dotnet tool install -g x`);
          } else {
            return [
              createTextVNode("dotnet tool install -g x")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mkdir ${ssrInterpolate(project.value)} &amp;&amp; cd ${ssrInterpolate(project.value)}`);
          } else {
            return [
              createTextVNode("mkdir " + toDisplayString(project.value) + " && cd " + toDisplayString(project.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`x new vue-ssg`);
          } else {
            return [
              createTextVNode("x new vue-ssg")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="py-6 text-center text-xl">Build Client UI &amp; Run Dev Server</h4>`);
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`cd ${ssrInterpolate(uiPath())} &amp;&amp; npm run build:local`);
          } else {
            return [
              createTextVNode("cd " + toDisplayString(uiPath()) + " && npm run build:local", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`npm run dev`);
          } else {
            return [
              createTextVNode("npm run dev")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="py-6 text-center text-xl">Run Server .NET Project (New Terminal)</h4>`);
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`cd ${ssrInterpolate(apiPath())}`);
          } else {
            return [
              createTextVNode("cd " + toDisplayString(apiPath()), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ShellCommand, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`dotnet watch`);
          } else {
            return [
              createTextVNode("dotnet watch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-8 text-center"><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "bg-purple-500 text-purple-50 rounded px-2 py-0.5 mx-1",
        to: "/posts/rider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`rider`);
          } else {
            return [
              createTextVNode("rider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "bg-purple-500 text-purple-50 rounded px-2 py-0.5 mx-1",
        to: "/posts/vs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`visualstudio`);
          } else {
            return [
              createTextVNode("visualstudio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h3 class="mt-4 sm:text-2xl">Use npm dev server for UI Development</h3><div class="text-lg hover:text-green-600"><a href="http://localhost:3000">http://localhost:3000</a></div><h3 class="mt-4 sm:text-2xl">\`npm run build:local\` to view in .NET App</h3><div class="text-lg hover:text-green-600"><a href="https://localhost:5001">https://localhost:5001</a></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/GettingStarted.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var GettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/GettingStarted.vue"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const inputValue = ref("Vue.js");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogosVue = __unplugin_components_5;
      const _component_LogosVitejs = __unplugin_components_1$4;
      const _component_LogosTypescriptIcon = __unplugin_components_2$3;
      const _component_OcticonCpu16 = __unplugin_components_3$2;
      const _component_SimpleIconsMarkdown = __unplugin_components_4$1;
      const _component_LogosTailwindcssIcon = __unplugin_components_1$5;
      const _component_CarbonMoon = __unplugin_components_6;
      const _component_CarbonSun = __unplugin_components_7;
      const _component_LineMdIconify2 = __unplugin_components_8;
      const _component_NotoPineapple = __unplugin_components_4$2;
      const _component_MdiCached = __unplugin_components_10;
      const _component_CarbonDocumentExport = __unplugin_components_11;
      const _component_IcRoundAutoAwesomeMosaic = __unplugin_components_12;
      const _component_IcRoundSettingsInputComponent = __unplugin_components_13;
      const _component_SimpleIconsCodeclimate = __unplugin_components_14;
      const _component_MdiShieldLockOutline = __unplugin_components_15;
      const _component_CarbonCheckmarkOutlineWarning = __unplugin_components_16;
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><main><div class="container mx-auto px-5"><section class="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"><h1 class="text-4xl md:text-6xl xl:text-8xl font-bold tracking-tighter leading-tight md:pr-8 whitespace-nowrap"> Vue SSG </h1><div class="flex flex-col"><h4 class="text-lg mt-5"> Modern <a href="https://v3.vuejs.org" class="underline hover:text-green-600 duration-200 transition-colors">Vue 3</a> C# template using <a href="https://vitejs.dev" class="underline hover:text-green-600 duration-200 transition-colors">Vite</a>, <a href="https://github.com/antfu/vite-ssg" class="underline hover:text-green-600 duration-200 transition-colors">SSG</a>, <a href="https://www.typescriptlang.org" class="underline hover:text-green-600 duration-200 transition-colors">TypeScript</a>, <a href="https://tailwindcss.com" class="underline hover:text-green-600 duration-200 transition-colors">tailwindcss</a> &amp; <a href="https://servicestack.net" class="underline hover:text-green-600 duration-200 transition-colors">ServiceStack</a></h4><div class="flex items-center flex-wrap sm:flex-nowrap"><input type="text"${ssrRenderAttr("value", inputValue.value)} class="mt-2 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800">`);
      _push(ssrRenderComponent(HelloApi, { name: inputValue.value }, null, _parent));
      _push(`</div></div></section><section><div class="mb-8 md:mb-16 flex flex-wrap"><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LogosVue, {
        class: "w-7 h-7 mr-2",
        alt: "Vue.js logo"
      }, null, _parent));
      _push(`<a href="https://vuejs.org"><b>Vue 3</b> - simple, progressive reactive UI framework </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LogosVitejs, {
        class: "w-7 h-7 mr-2",
        alt: "Vite logo"
      }, null, _parent));
      _push(`<a href="https://vitejs.dev"><b>Vite</b> - lightning fast live reload server with instant startup </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LogosTypescriptIcon, {
        class: "w-7 h-7 mr-2",
        alt: "Typescript logo"
      }, null, _parent));
      _push(`<a href="https://www.typescriptlang.org"><b>Typescript</b> - stronlgly typed language for better tooling at scale </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_OcticonCpu16, {
        class: "w-7 h-7 mr-2",
        alt: "Vue SSG"
      }, null, _parent));
      _push(`<a href="https://github.com/antfu/vite-ssg"><b>Vite SSG</b> - server-side generation for Vue 3 on Vite </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_SimpleIconsMarkdown, {
        class: "w-7 h-7 mr-2",
        alt: "Markdown logo"
      }, null, _parent));
      _push(`<a href="https://www.markdownguide.org"><b>Markdown</b> - rich, extensible support for docs &amp; blogs </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LogosTailwindcssIcon, {
        class: "w-7 h-7 mr-2",
        alt: "Tailwind logo"
      }, null, _parent));
      _push(`<a href="https://tailwindcss.com"><b>Tailwind</b> - beautiful utility-first CSS framework </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(_component_CarbonMoon, {
          class: "w-7 h-7 mr-2",
          alt: "Moon"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_CarbonSun, {
          class: "w-7 h-7 mr-2",
          alt: "Sun"
        }, null, _parent));
      }
      _push(`<a href="#"><b>Dark Mode</b> - OS defined &amp; user toggable dark mode </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LineMdIconify2, {
        class: "w-7 h-7 mr-2",
        alt: "Iconify logo"
      }, null, _parent));
      _push(`<a href="https://iconify.design"><b>Iconify</b> - 100k+ quality SVG icons in one unified framework </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_NotoPineapple, {
        class: "w-7 h-7 mr-2",
        alt: "Pinia logo"
      }, null, _parent));
      _push(`<a href="https://pinia.esm.dev"><b>Pinia</b> - Vue 3 Intuitive, TypeSafe Reactive State Management </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_MdiCached, {
        class: "w-7 h-7 mr-2",
        alt: "Cache Icon"
      }, null, _parent));
      _push(`<a href="https://github.com/Kong/swrv"><b>SWRV</b> - typed, state-while-revalidate fetch &amp; Service Client </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LogosTailwindcssIcon, {
        class: "w-7 h-7 mr-2",
        alt: "Tailwind logo"
      }, null, _parent));
      _push(`<a href="https://tailwindcss-typography.vercel.app"><b>@tailwind/typography</b> - beautiful typography for markdown </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_LogosTailwindcssIcon, {
        class: "w-7 h-7 mr-2",
        alt: "Tailwind logo"
      }, null, _parent));
      _push(`<a href="https://github.com/tailwindlabs/tailwindcss-forms"><b>@tailwind/forms</b> - beautiful basic form &amp; input styles </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_CarbonDocumentExport, {
        class: "w-7 h-7 mr-2",
        alt: "Plugin Pages"
      }, null, _parent));
      _push(`<a href="https://github.com/hannoeru/vite-plugin-pages"><b>plugin/pages</b> - file system based routing for Vue 3 Vite </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_IcRoundAutoAwesomeMosaic, {
        class: "w-7 h-7 mr-2",
        alt: "Plugin Layouts"
      }, null, _parent));
      _push(`<a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts"><b>plugin/layouts</b> - support for multiple page layouts </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_IcRoundSettingsInputComponent, {
        class: "w-7 h-7 mr-2",
        alt: "Plugin Layouts"
      }, null, _parent));
      _push(`<a href="https://github.com/antfu/unplugin-vue-components"><b>plugin/components</b> - auto importing components on-demand </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_SimpleIconsCodeclimate, {
        class: "w-7 h-7 mr-2",
        alt: "Plugin Layouts"
      }, null, _parent));
      _push(`<a href="https://github.com/antfu/unplugin-auto-import"><b>plugin/autoimport</b> - global imports for minimal code </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_MdiShieldLockOutline, {
        class: "w-7 h-7 mr-2",
        alt: "Auto validation"
      }, null, _parent));
      _push(`<a href="https://docs.servicestack.net/auth"><b>authentication</b> - simple auth protected by route guards </a></div><div class="flex my-2 sm:w-1/2 md:w-1/3">`);
      _push(ssrRenderComponent(_component_CarbonCheckmarkOutlineWarning, {
        class: "w-7 h-7 mr-2",
        alt: "Auto validation"
      }, null, _parent));
      _push(`<a href="https://docs.servicestack.net/validation"><b>validation</b> - auto form binding and validation </a></div></div></section>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(GettingStarted, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(GettingStarted)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Index.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var Index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/Index.vue"]]);
var Index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Index$4
});
const _hoisted_1$e = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$d);
}
var __unplugin_components_0$5 = { name: "mdi-account-circle", render: render$e };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const user = auth.value;
    const roles = (_b = (_a = auth.value) == null ? void 0 : _a.roles) != null ? _b : [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MdiAccountCircle = __unplugin_components_0$5;
      if (unref(user)) {
        _push(ssrRenderComponent(AppPage, mergeProps({
          title: `${unref(user).displayName} Profile`,
          class: "max-w-prose flex justify-center"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_MdiAccountCircle, { class: "w-36 h-36 text-gray-700" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>${ssrInterpolate(unref(user).displayName)}</div><div${_scopeId}>${ssrInterpolate(unref(user).userName)}</div><div class="mt-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(roles), (role) => {
                _push2(`<span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"${_scopeId}>${ssrInterpolate(role)}</span>`);
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(SecondaryButton, { class: "mt-8" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Sign Out`);
                  } else {
                    return [
                      createTextVNode("Sign Out")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                  createVNode(_component_MdiAccountCircle, { class: "w-36 h-36 text-gray-700" }),
                  createVNode("div", null, toDisplayString(unref(user).displayName), 1),
                  createVNode("div", null, toDisplayString(unref(user).userName), 1),
                  createVNode("div", { class: "mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role) => {
                      return openBlock(), createBlock("span", {
                        key: role,
                        class: "ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                      }, toDisplayString(role), 1);
                    }), 128))
                  ]),
                  createVNode(SecondaryButton, {
                    class: "mt-8",
                    onClick: ($event) => unref(signout)(_ctx.$router)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign Out")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Profile.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var Profile = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/Profile.vue"]]);
var Profile$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Profile
});
const _hoisted_1$d = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$c);
}
var __unplugin_components_0$4 = { name: "mdi-close-circle", render: render$d };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    status: { type: null, required: false },
    except: { type: [String, Array], required: true },
    class: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    let ctx = inject("ApiState", void 0);
    const errorSummary = computed(() => {
      var _a;
      return props.status || (ctx == null ? void 0 : ctx.error.value) ? errorResponseExcept.call({ responseStatus: (_a = props.status) != null ? _a : ctx == null ? void 0 : ctx.error.value }, props.except) : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MdiCloseCircle = __unplugin_components_0$4;
      if (unref(errorSummary)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: `bg-red-50 border-l-4 border-red-400 p-4 ${_ctx.$props.class}`
        }, _attrs))}><div class="flex"><div class="flex-shrink-0">`);
        _push(ssrRenderComponent(_component_MdiCloseCircle, {
          class: "h-5 w-5 text-red-400",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</div><div class="ml-3"><p class="text-sm text-red-700">${ssrInterpolate(unref(errorSummary))}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/ErrorSummary.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var ErrorSummary = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/ErrorSummary.vue"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    status: { type: null, required: false },
    id: { type: String, required: true },
    type: { type: String, required: false },
    label: { type: String, required: false },
    help: { type: String, required: false },
    placeholder: { type: String, required: false },
    modelValue: { type: [String, Number], required: false }
  },
  setup(__props) {
    const props = __props;
    const useType = computed(() => props.type || "text");
    const useLabel = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : humanize(toPascalCase(props.id));
    });
    const usePlaceholder = computed(() => {
      var _a;
      return (_a = props.placeholder) != null ? _a : useLabel.value;
    });
    const remaining = computed(() => omit(useAttrs(), [...Object.keys(props)]));
    let ctx = inject("ApiState", void 0);
    const errorField = computed(() => {
      var _a;
      return errorResponse.call({ responseStatus: (_a = props.status) != null ? _a : ctx == null ? void 0 : ctx.error.value }, props.id);
    });
    const cls = computed(() => ["block w-full sm:text-sm rounded-md", errorField.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(useLabel)) {
        _push(`<label${ssrRenderAttr("for", __props.id)} class="block text-sm font-medium text-gray-700">${ssrInterpolate(unref(useLabel))}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-1 relative rounded-md shadow-sm"><input${ssrRenderAttrs(mergeProps({
        type: unref(useType),
        name: __props.id,
        id: __props.id,
        class: unref(cls),
        placeholder: unref(usePlaceholder),
        value: __props.modelValue,
        "aria-invalid": unref(errorField) != null,
        "aria-describedby": `${__props.id}-error`
      }, unref(remaining)))}>`);
      if (unref(errorField)) {
        _push(`<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(errorField)) {
        _push(`<p class="mt-2 text-sm text-red-500"${ssrRenderAttr("id", `${__props.id}-error`)}>${ssrInterpolate(unref(errorField))}</p>`);
      } else if (__props.help) {
        _push(`<p class="mt-2 text-sm text-gray-500"${ssrRenderAttr("id", `${__props.id}-description`)}>${ssrInterpolate(__props.help)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/TextInput.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/TextInput.vue"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    status: { type: null, required: false },
    id: { type: String, required: true },
    label: { type: String, required: false },
    help: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const useLabel = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : humanize(toPascalCase(props.id));
    });
    const remaining = computed(() => omit(useAttrs(), [...Object.keys(props)]));
    let ctx = inject("ApiState", void 0);
    const errorField = computed(() => {
      var _a;
      return errorResponse.call({ responseStatus: (_a = props.status) != null ? _a : ctx == null ? void 0 : ctx.error.value }, props.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-start" }, _attrs))}><div class="flex items-center h-5"><input${ssrRenderAttrs(mergeProps({
        id: __props.id,
        name: __props.id,
        type: "checkbox",
        value: "true",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      }, unref(remaining)))}></div><div class="ml-3 text-sm"><label${ssrRenderAttr("for", __props.id)} class="font-medium text-gray-700 select-none">${ssrInterpolate(unref(useLabel))}</label>`);
      if (unref(errorField)) {
        _push(`<p class="mt-2 text-sm text-red-500" id="\`\${id}-error\`">${ssrInterpolate(unref(errorField))}</p>`);
      } else if (__props.help) {
        _push(`<p class="mt-2 text-sm text-gray-500" id="\`\${id}-description\`">${ssrInterpolate(__props.help)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/Checkbox.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var CheckBox = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/Checkbox.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean, required: false },
    icon: { type: Boolean, required: false, default: true },
    text: { type: String, required: false, default: "loading..." }
  },
  setup(__props) {
    const props = __props;
    let ctx = inject("ApiState", void 0);
    let loading2 = computed(() => {
      var _a;
      return (_a = props.loading) != null ? _a : ctx == null ? void 0 : ctx.loading.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(loading2)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "flex",
          title: "loading..."
        }, _attrs))}>`);
        if (__props.icon) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30"><rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-2 mt-1 text-gray-400">${ssrInterpolate(__props.text)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/FormLoading.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var FormLoading = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/FormLoading.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const client2 = useClient();
    const username = ref("");
    const password = ref("");
    const router = useRouter();
    let stop = watchEffect(() => {
      var _a;
      if (auth.value) {
        router.push((_a = getRedirect(router)) != null ? _a : "/");
        nextTick(() => stop());
      }
    });
    const setUser = (email) => {
      username.value = email;
      password.value = "p@55wOrd";
    };
    const onSubmit = async (e) => {
      const { userName, password: password2, rememberMe } = serializeToObject(e.currentTarget);
      const api = await client2.api(new Authenticate({ provider: "credentials", userName, password: password2, rememberMe }));
      if (api.succeeded)
        await revalidate();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppPage, mergeProps({
        title: "Sign In",
        class: "max-w-xl"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="shadow overflow-hidden sm:rounded-md"${_scopeId}>`);
            _push2(ssrRenderComponent(ErrorSummary, { except: "userName,password,rememberMe" }, null, _parent2, _scopeId));
            _push2(`<div class="px-4 py-5 bg-white space-y-6 sm:p-6"${_scopeId}><div class="flex flex-col gap-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(TextInput, {
              id: "userName",
              placeholder: "Email",
              help: "Email you signed up with",
              modelValue: username.value,
              "onUpdate:modelValue": ($event) => username.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TextInput, {
              id: "password",
              type: "password",
              help: "6 characters or more",
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CheckBox, { id: "rememberMe" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6"${_scopeId}><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(FormLoading, { class: "flex-1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SecondaryButton, { href: "/signup" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register New User`);
                } else {
                  return [
                    createTextVNode("Register New User")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, { class: "ml-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Login`);
                } else {
                  return [
                    createTextVNode("Login")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form><div class="flex mt-8"${_scopeId}><h3 class="hidden xs:block mr-4 leading-8 text-gray-500"${_scopeId}>Quick Links</h3><span class="relative z-0 inline-flex shadow-sm rounded-md"${_scopeId}><button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> admin@email.com </button><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> manager@email.com </button><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> employee@email.com </button><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> new@user.com </button></span></div>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode("div", { class: "shadow overflow-hidden sm:rounded-md" }, [
                  createVNode(ErrorSummary, { except: "userName,password,rememberMe" }),
                  createVNode("div", { class: "px-4 py-5 bg-white space-y-6 sm:p-6" }, [
                    createVNode("div", { class: "flex flex-col gap-y-4" }, [
                      createVNode(TextInput, {
                        id: "userName",
                        placeholder: "Email",
                        help: "Email you signed up with",
                        modelValue: username.value,
                        "onUpdate:modelValue": ($event) => username.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(TextInput, {
                        id: "password",
                        type: "password",
                        help: "6 characters or more",
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(CheckBox, { id: "rememberMe" })
                    ])
                  ]),
                  createVNode("div", { class: "pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6" }, [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(FormLoading, { class: "flex-1" }),
                      createVNode(SecondaryButton, { href: "/signup" }, {
                        default: withCtx(() => [
                          createTextVNode("Register New User")
                        ]),
                        _: 1
                      }),
                      createVNode(PrimaryButton, { class: "ml-3" }, {
                        default: withCtx(() => [
                          createTextVNode("Login")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ], 40, ["onSubmit"]),
              createVNode("div", { class: "flex mt-8" }, [
                createVNode("h3", { class: "hidden xs:block mr-4 leading-8 text-gray-500" }, "Quick Links"),
                createVNode("span", { class: "relative z-0 inline-flex shadow-sm rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("admin@email.com"),
                    class: "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " admin@email.com ", 8, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("manager@email.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " manager@email.com ", 8, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("employee@email.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " employee@email.com ", 8, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("new@user.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " new@user.com ", 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Signin.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var Signin = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/Signin.vue"]]);
var Signin$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Signin
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const client2 = useClient();
    const displayName = ref("");
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const router = useRouter();
    let stop = watchEffect(() => {
      var _a;
      if (auth.value) {
        router.push((_a = getRedirect(router)) != null ? _a : "/");
        nextTick(stop);
      }
    });
    const setUser = (email) => {
      let first = leftPart(email, "@");
      let last = rightPart(leftPart(email, "."), "@");
      displayName.value = toPascalCase(first) + " " + toPascalCase(last);
      username.value = email;
      confirmPassword.value = password.value = "p@55wOrd";
    };
    const onSubmit = async (e) => {
      const {
        displayName: displayName2,
        userName,
        password: password2,
        confirmPassword: confirmPassword2,
        autoLogin
      } = serializeToObject(e.currentTarget);
      if (password2 !== confirmPassword2) {
        client2.setError({ fieldName: "confirmPassword", message: "Passwords do not match" });
        return;
      }
      const api = await client2.api(new Register({ displayName: displayName2, email: userName, password: password2, confirmPassword: confirmPassword2, autoLogin }));
      if (api.succeeded) {
        await revalidate();
        await router.push("/signin");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppPage, mergeProps({
        title: "Sign Up",
        class: "max-w-xl"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="shadow overflow-hidden sm:rounded-md"${_scopeId}>`);
            _push2(ssrRenderComponent(ErrorSummary, { except: "displayName,userName,password,confirmPassword,autoLogin" }, null, _parent2, _scopeId));
            _push2(`<div class="px-4 py-5 bg-white space-y-6 sm:p-6"${_scopeId}><div class="flex flex-col gap-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(TextInput, {
              id: "displayName",
              help: "Your first and last name",
              modelValue: displayName.value,
              "onUpdate:modelValue": ($event) => displayName.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TextInput, {
              id: "userName",
              placeholder: "Email",
              help: "",
              modelValue: username.value,
              "onUpdate:modelValue": ($event) => username.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TextInput, {
              id: "password",
              type: "password",
              help: "6 characters or more",
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TextInput, {
              id: "confirmPassword",
              type: "password",
              modelValue: confirmPassword.value,
              "onUpdate:modelValue": ($event) => confirmPassword.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CheckBox, { id: "autoLogin" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6"${_scopeId}><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(FormLoading, { class: "flex-1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, { class: "ml-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign Up`);
                } else {
                  return [
                    createTextVNode("Sign Up")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form><div class="flex mt-8 ml-8"${_scopeId}><h3 class="mr-4 leading-8 text-gray-500"${_scopeId}>Quick Links</h3><span class="relative z-0 inline-flex shadow-sm rounded-md"${_scopeId}><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> new@user.com </button></span></div>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode("div", { class: "shadow overflow-hidden sm:rounded-md" }, [
                  createVNode(ErrorSummary, { except: "displayName,userName,password,confirmPassword,autoLogin" }),
                  createVNode("div", { class: "px-4 py-5 bg-white space-y-6 sm:p-6" }, [
                    createVNode("div", { class: "flex flex-col gap-y-4" }, [
                      createVNode(TextInput, {
                        id: "displayName",
                        help: "Your first and last name",
                        modelValue: displayName.value,
                        "onUpdate:modelValue": ($event) => displayName.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(TextInput, {
                        id: "userName",
                        placeholder: "Email",
                        help: "",
                        modelValue: username.value,
                        "onUpdate:modelValue": ($event) => username.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(TextInput, {
                        id: "password",
                        type: "password",
                        help: "6 characters or more",
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(TextInput, {
                        id: "confirmPassword",
                        type: "password",
                        modelValue: confirmPassword.value,
                        "onUpdate:modelValue": ($event) => confirmPassword.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(CheckBox, { id: "autoLogin" })
                    ])
                  ]),
                  createVNode("div", { class: "pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6" }, [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(FormLoading, { class: "flex-1" }),
                      createVNode(PrimaryButton, { class: "ml-3" }, {
                        default: withCtx(() => [
                          createTextVNode("Sign Up")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ], 40, ["onSubmit"]),
              createVNode("div", { class: "flex mt-8 ml-8" }, [
                createVNode("h3", { class: "mr-4 leading-8 text-gray-500" }, "Quick Links"),
                createVNode("span", { class: "relative z-0 inline-flex shadow-sm rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("new@user.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " new@user.com ", 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Signup.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var Signup = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/Signup.vue"]]);
var Signup$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Signup
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    href: { type: String, required: true },
    iconSrc: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const fileName = lastRightPart(props.href, "/");
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.iconSrc) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          class: "mr-3 text-gray-500 hover:text-gray-600 text-decoration-none"
        }, _attrs))}><img${ssrRenderAttr("src", __props.iconSrc)} class="w-5 h-5 inline-flex text-purple-800 mr-1" alt="file icon">${ssrInterpolate(unref(fileName))}</a>`);
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          class: "mr-3 text-gray-400 hover:text-gray-500 text-decoration-none"
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(` ${ssrInterpolate(unref(fileName))}</a>`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SrcLink.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var SrcLink = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/SrcLink.vue"]]);
const _hoisted_1$c = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$b);
}
var __unplugin_components_2$2 = { name: "mdi-trash-can-outline", render: render$c };
const _hoisted_1$b = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$a);
}
var __unplugin_components_1$3 = { name: "mdi-checkbox-blank-circle-outline", render: render$b };
const _hoisted_1$a = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$9);
}
var __unplugin_components_0$3 = { name: "mdi-check-circle", render: render$a };
const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);
  const newTodo = ref("");
  const filter = ref("all");
  const error2 = ref();
  const finishedTodos = computed(() => todos.value.filter((x) => x.isFinished));
  const unfinishedTodos = computed(() => todos.value.filter((x) => !x.isFinished));
  const filteredTodos = computed(() => filter.value == "finished" ? finishedTodos.value : filter.value == "unfinished" ? unfinishedTodos.value : todos.value);
  const refreshTodos = async (errorStatus) => {
    var _a;
    error2.value = errorStatus;
    const api = await client.api(new QueryTodos());
    if (api.succeeded) {
      todos.value = (_a = api.response.results) != null ? _a : [];
    }
  };
  const addTodo = async () => {
    todos.value.push(new Todo({ text: newTodo.value }));
    let api = await client.api(new CreateTodo({ text: newTodo.value }));
    if (api.succeeded)
      newTodo.value = "";
    await refreshTodos(api.error);
  };
  const removeTodo = async (id) => {
    todos.value = todos.value.filter((x) => x.id != id);
    let api = await client.api(new DeleteTodo({ id }));
    await refreshTodos(api.error);
  };
  const removeFinishedTodos = async () => {
    let ids = todos.value.filter((x) => x.isFinished).map((x) => x.id);
    if (ids.length == 0)
      return;
    todos.value = todos.value.filter((x) => !x.isFinished);
    let api = await client.api(new DeleteTodos({ ids }));
    await refreshTodos(api.error);
  };
  const toggleTodo = async (id) => {
    const todo = todos.value.find((x) => x.id == id);
    todo.isFinished = !todo.isFinished;
    let api = await client.api(new UpdateTodo(todo));
    await refreshTodos(api.error);
  };
  const changeFilter = (value) => filter.value = value;
  return {
    error: error2,
    newTodo,
    filter,
    finishedTodos,
    unfinishedTodos,
    filteredTodos,
    refreshTodos,
    addTodo,
    removeTodo,
    removeFinishedTodos,
    toggleTodo,
    changeFilter
  };
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTodosStore();
    store.refreshTodos();
    const FilterTab = (props, context) => {
      return h("a", {
        href: "#",
        "class": `border-gray-200 text-sm font-medium px-4 py-2 hover:bg-gray-100 
      focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 
      dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white
      ${props.filter == store.filter ? "text-blue-700 dark:bg-blue-600" : "text-gray-900 hover:text-blue-700 dark:bg-gray-700"}`,
        onClick: (e) => {
          e.preventDefault();
          store.changeFilter(props.filter);
        }
      }, context.slots);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MdiCheckCircle = __unplugin_components_0$3;
      const _component_MdiCheckboxBlankCircleOutline = __unplugin_components_1$3;
      const _component_MdiTrashCanOutline = __unplugin_components_2$2;
      const _component_SrcLink = SrcLink;
      const _component_NotoPineapple = __unplugin_components_4$2;
      const _component_LogosVue = __unplugin_components_5;
      _push(ssrRenderComponent(AppPage, mergeProps({
        title: "Todos Application",
        class: "max-w-xl"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(TextInput, {
              status: unref(store).error,
              id: "Text",
              modelValue: unref(store).newTodo,
              "onUpdate:modelValue": ($event) => unref(store).newTodo = $event,
              placeholder: "What needs to be done?",
              label: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white shadow overflow-hidden rounded-md"${_scopeId}><ul role="list" class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(unref(store).filteredTodos, (todo) => {
              _push2(`<li class="px-6 py-4"${_scopeId}><div class="relative flex items-start"${_scopeId}><div class="flex items-center h-6"${_scopeId}>`);
              if (todo.isFinished) {
                _push2(ssrRenderComponent(_component_MdiCheckCircle, { class: "text-green-600" }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_MdiCheckboxBlankCircleOutline, null, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="ml-3 flex-grow"${_scopeId}><label class="${ssrRenderClass({ "line-through": todo.isFinished })}"${_scopeId}>${ssrInterpolate(todo.text)}</label></div><div${_scopeId}>`);
              if (todo.isFinished) {
                _push2(ssrRenderComponent(_component_MdiTrashCanOutline, { class: "cursor-pointer" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></li>`);
            });
            _push2(`<!--]--></ul></div><div class="mt-4 flex justify-between"${_scopeId}><div class="text-gray-400 leading-8 mr-4"${_scopeId}>${ssrInterpolate(unref(store).unfinishedTodos.length)} <span class="hidden sm:inline"${_scopeId}>item(s)</span> left </div><div class="inline-flex shadow-sm rounded-md"${_scopeId}>`);
            _push2(ssrRenderComponent(FilterTab, {
              class: "rounded-l-lg border",
              filter: "all"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` All `);
                } else {
                  return [
                    createTextVNode(" All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FilterTab, {
              class: "border-t border-b",
              filter: "unfinished"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Active `);
                } else {
                  return [
                    createTextVNode(" Active ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FilterTab, {
              class: "rounded-r-md border",
              filter: "finished"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Completed `);
                } else {
                  return [
                    createTextVNode(" Completed ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="leading-8 ml-4"${_scopeId}><a href="#" class="${ssrRenderClass({ invisible: unref(store).finishedTodos.length === 0 })}"${_scopeId}> clear <span class="hidden sm:inline"${_scopeId}>completed</span></a></div></div><div class="mt-4 text-center text-gray-400 flex justify-center -ml-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NotoPineapple, { class: "w-5 h-5 inline-flex" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NotoPineapple, { class: "w-5 h-5 inline-flex" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LogosVue, { class: "w-4 h-4 inline-flex" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LogosVue, { class: "w-4 h-4 inline-flex" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-3" }, [
                createVNode(TextInput, {
                  status: unref(store).error,
                  id: "Text",
                  modelValue: unref(store).newTodo,
                  "onUpdate:modelValue": ($event) => unref(store).newTodo = $event,
                  placeholder: "What needs to be done?",
                  label: "",
                  onKeyup: withKeys(withModifiers(($event) => unref(store).addTodo(), ["stop"]), ["enter"])
                }, null, 8, ["status", "modelValue", "onUpdate:modelValue", "onKeyup"])
              ]),
              createVNode("div", { class: "bg-white shadow overflow-hidden rounded-md" }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-200"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(store).filteredTodos, (todo) => {
                    return openBlock(), createBlock("li", {
                      key: todo.id,
                      class: "px-6 py-4"
                    }, [
                      createVNode("div", {
                        class: "relative flex items-start",
                        onClick: ($event) => unref(store).toggleTodo(todo.id)
                      }, [
                        createVNode("div", { class: "flex items-center h-6" }, [
                          todo.isFinished ? (openBlock(), createBlock(_component_MdiCheckCircle, {
                            key: 0,
                            class: "text-green-600"
                          })) : (openBlock(), createBlock(_component_MdiCheckboxBlankCircleOutline, { key: 1 }))
                        ]),
                        createVNode("div", { class: "ml-3 flex-grow" }, [
                          createVNode("label", {
                            class: { "line-through": todo.isFinished }
                          }, toDisplayString(todo.text), 3)
                        ]),
                        createVNode("div", null, [
                          todo.isFinished ? (openBlock(), createBlock(_component_MdiTrashCanOutline, {
                            key: 0,
                            class: "cursor-pointer",
                            onClick: ($event) => unref(store).removeTodo(todo.id)
                          }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)
                        ])
                      ], 8, ["onClick"])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "mt-4 flex justify-between" }, [
                createVNode("div", { class: "text-gray-400 leading-8 mr-4" }, [
                  createTextVNode(toDisplayString(unref(store).unfinishedTodos.length) + " ", 1),
                  createVNode("span", { class: "hidden sm:inline" }, "item(s)"),
                  createTextVNode(" left ")
                ]),
                createVNode("div", { class: "inline-flex shadow-sm rounded-md" }, [
                  createVNode(FilterTab, {
                    class: "rounded-l-lg border",
                    filter: "all"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" All ")
                    ]),
                    _: 1
                  }),
                  createVNode(FilterTab, {
                    class: "border-t border-b",
                    filter: "unfinished"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Active ")
                    ]),
                    _: 1
                  }),
                  createVNode(FilterTab, {
                    class: "rounded-r-md border",
                    filter: "finished"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Completed ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "leading-8 ml-4" }, [
                  createVNode("a", {
                    href: "#",
                    class: { invisible: unref(store).finishedTodos.length === 0 },
                    onClick: withModifiers(($event) => unref(store).removeFinishedTodos(), ["prevent"])
                  }, [
                    createTextVNode(" clear "),
                    createVNode("span", { class: "hidden sm:inline" }, "completed")
                  ], 10, ["onClick"])
                ])
              ]),
              createVNode("div", { class: "mt-4 text-center text-gray-400 flex justify-center -ml-6" }, [
                createVNode(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts" }, {
                  default: withCtx(() => [
                    createVNode(_component_NotoPineapple, { class: "w-5 h-5 inline-flex" })
                  ]),
                  _: 1
                }),
                createVNode(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue" }, {
                  default: withCtx(() => [
                    createVNode(_component_LogosVue, { class: "w-4 h-4 inline-flex" })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/TodoMvc.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var TodoMvc = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/TodoMvc.vue"]]);
var TodoMvc$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TodoMvc
});
const _hoisted_1$9 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$8);
}
var __unplugin_components_0$2 = { name: "mdi-arrow-left-thin", render: render$9 };
const _sfc_main$g = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MdiArrowLeftThin = __unplugin_components_0$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center"><h1 class="inline-block border-gray-300 border-r m-0 mr-5 py-2 pr-4 text-2xl font-medium">404</h1><div class="inline-block text-left"><h2 class="text-sm font-normal">This page does not exist.</h2></div></div><div class="mt-2"><button class="inline-flex justify-center py-1 px-2 text-sm">`);
  _push(ssrRenderComponent(_component_MdiArrowLeftThin, { class: "w-5 h-5" }, null, _parent));
  _push(` back </button></div></div>`);
}
// if (typeof block0 === "function")
//   block0(_sfc_main$g);
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/[...all].vue"]]);
var ____all_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____all_
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    frontmatter: { type: Object, required: true }
  },
  setup(__props) {
    const crumbs = computed(() => useRouter().currentRoute.value.meta.crumbs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><main class="flex justify-center"><div class="mx-auto px-5 mb-32">`);
      if (__props.frontmatter.title) {
        _push(ssrRenderComponent(AppBreadcrumb, {
          class: "my-8",
          crumbs: unref(crumbs),
          name: __props.frontmatter.title
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<article class="prose lg:prose-xl">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article></div></main></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MarkdownPage.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/MarkdownPage.vue"]]);
const _sfc_main$e = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Template Features", "meta": [{ "property": "og:title", "content": "Template Features" }] };
    expose({ frontmatter });
    const head = { "title": "Template Features", "meta": [{ "property": "og:title", "content": "Template Features" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = __unplugin_components_0$1;
      _push(ssrRenderComponent(_component_MarkdownPage, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>This template contains our essential recommendations for a modern Vue Single Page App optimal for both productivity and performance.</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}></th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><a href="https://vitejs.dev"${_scopeId}>Vite</a></td><td${_scopeId}>Modern typed API, Lighting fast reloads, optimal builds, growing ecosystem</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://v3.vuejs.org"${_scopeId}>Vue3</a></td><td${_scopeId}>Elegant, composable reactive typed API that scales from small to large Apps</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://tailwindcss.com"${_scopeId}>Tailwindcss</a></td><td${_scopeId}>Productive responsive-first utility-based css framework with growing <a href="https://tailwindcomponents.com"${_scopeId}>rich component ecosystem</a></td></tr><tr${_scopeId}><td${_scopeId}><a href="https://www.typescriptlang.org"${_scopeId}>TypeScript</a></td><td${_scopeId}>Advanced type-safety, static analysis and richer IDE tooling</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://iconify.design"${_scopeId}>Iconify</a></td><td${_scopeId}>Unified registry to access 100k+ high quality SVG icons from 100+ icon sets</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/markdown-it/markdown-it"${_scopeId}>Markdown</a></td><td${_scopeId}>Native Markdown integration with advanced featureset supporting embedding of HTML &amp; Vue Components</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/antfu/vite-ssg"${_scopeId}>Vite SSG</a></td><td${_scopeId}>Server-side generation for Vue 3 on Vite</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/Kong/swrv"${_scopeId}>SWRV</a></td><td${_scopeId}>stale-while-revalidate library for Vue 3\u2019s composition API enabling optimal end-user UX for API integrations</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://tailwindcss.com/docs/dark-mode"${_scopeId}>Dark Mode</a></td><td${_scopeId}>OS defined &amp; user toggable dark mode</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://pinia.esm.dev"${_scopeId}>Pinia</a></td><td${_scopeId}>Vue 3 Intuitive, TypeSafe Reactive State Management, checkout <a href="/todos"${_scopeId}>Todos</a></td></tr><tr${_scopeId}><td${_scopeId}><a href="https://tailwindcss-typography.vercel.app"${_scopeId}>tailwind/typography</a></td><td${_scopeId}>Beautiful css typography for markdown articles &amp; blog posts</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/tailwindlabs/tailwindcss-forms"${_scopeId}>tailwind/forms</a></td><td${_scopeId}>Beautiful css form &amp; input styles that\u2019s easy to override with utilities</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/hannoeru/vite-plugin-pages"${_scopeId}>plugin/pages</a></td><td${_scopeId}>Conventional file system based routing for Vue 3 on Vite</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts"${_scopeId}>plugin/layouts</a></td><td${_scopeId}>Support for multiple page layouts</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/antfu/unplugin-vue-components"${_scopeId}>plugin/components</a></td><td${_scopeId}>Auto importing &amp; registering of components on-demand</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/antfu/unplugin-auto-import"${_scopeId}>plugin/auto-import</a></td><td${_scopeId}>Global imports in source files for reduced boilerplate</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://docs.servicestack.net/auth"${_scopeId}>Authentication</a></td><td${_scopeId}>Simple, built-in flexible auth protected by route guards</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://docs.servicestack.net/validation"${_scopeId}>Validation</a></td><td${_scopeId}>Auto form binding, submission, loading and validation</td></tr></tbody></table><h2${_scopeId}>Vue Plugins</h2><p${_scopeId}>The Vite plugins registered in <code${_scopeId}>vite.config.ts</code> improves productivity by adopting popular conventions that automating-away manual tasks &amp; configurations.</p><h3${_scopeId}><a href="https://github.com/antfu/unplugin-vue-components"${_scopeId}>unplugin-vue-components</a></h3><p${_scopeId}>For Auto Registering Vue Components, either <code${_scopeId}>.vue</code> SFC\u2019s, <code${_scopeId}>.md</code> Markdown components or Iconify\u2019s icons as Vue3 components.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Components({
    extensions: [&#39;vue&#39;, &#39;md&#39;],
    include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],
    resolvers: [
        // auto import icons without any prefix
        IconsResolver({
            componentPrefix: &#39;&#39;
        }),
    ],
    dts: &#39;src/components.d.ts&#39;, // auto-gen type definitions
})
</code></pre><h3${_scopeId}><a href="https://github.com/antfu/unplugin-icons"${_scopeId}>unplugin-icons</a></h3><p${_scopeId}>For accessing <a href="https://icon-sets.iconify.design"${_scopeId}>thousands of Iconfigy\u2019s SVG icons</a> as Vue components <strong${_scopeId}>on-demand</strong> universally.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Icons({ })
</code></pre><h3${_scopeId}><a href="https://github.com/hannoeru/vite-plugin-pages"${_scopeId}>vite-plugin-pages</a></h3><p${_scopeId}>For auto generating vue routing configurations for each Vue 3 component from <a href="https://github.com/hannoeru/vite-plugin-pages#file-system-routing"${_scopeId}>NuxtJS inspired File System Routing</a> conventions.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Pages({
  dirs: [
    { dir: &quot;src/pages&quot;, baseRoute: &quot;posts&quot; }, // at: /posts/*
    { dir: &quot;src/views&quot;, baseRoute: &quot;&quot; },      // at: /*
  ],
  extensions: [&#39;vue&#39;, &#39;md&#39;],
  extendRoute(route:any) {
    // attach markdown frontmatter metadata to their routes
  },
})
</code></pre><h3${_scopeId}><a href="https://github.com/antfu/vite-plugin-md"${_scopeId}>vite-plugin-md</a></h3><p${_scopeId}>For enabling Markdown Support by converting each <code${_scopeId}>.md</code> document into a Vue Component that\u2019s rendered using <a href="https://github.com/markdown-it/markdown-it"${_scopeId}>markdown-it</a>.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Markdown({
    markdownItOptions: {
        // html: true,
    },
    markdownItSetup(md) {
        //md.use(markdownPlugin)
    },
    wrapperComponent: &#39;MarkdownPage&#39;
})
</code></pre><h2${_scopeId}>App Features</h2><h3${_scopeId}>Stale While Revalidate</h3><p${_scopeId}><a href="https://web.dev/stale-while-revalidate/"${_scopeId}>stale-while-revalidate</a> is a popular UI pattern helps developers balance between immediacy\u2014loading cached content right away\u2014and freshness\u2014ensuring updates to the cached content are used in the future.</p><p${_scopeId}>This template includes a <code${_scopeId}>swrClient</code> that provides a typed wrapper around <a href="https://github.com/Kong/swrv"${_scopeId}>Vue3\u2019s SWVR</a> library for making typed API Requests with ServiceStack\u2019s typed <a href="https://docs.servicestack.net/typescript-add-servicestack-reference"${_scopeId}>JsonServiceClient</a>.</p><pre${_scopeId}><code class="language-html"${_scopeId}>&lt;template&gt;
  &lt;div v-if=&quot;error&quot;&gt;{{ error.message }}&lt;/div&gt;
  &lt;div v-else&gt;{{data ? data.result :&#39;loading...&#39;}}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { Hello } from &quot;@/dtos&quot;
import { swrClient } from &quot;@/api&quot;

const props = defineProps&lt;{ name: string }&gt;()

const { data, error } = swrClient.get(() =&gt; 
    new Hello({ name: props.name }))
&lt;/script&gt;
</code></pre><p${_scopeId}>This reactively sets up the UI to handle multiple states:</p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>loading</code> - displays the <code${_scopeId}>loading...</code> message whilst API request is in transit</li><li${_scopeId}><code${_scopeId}>data</code> - when completed, populated with a <code${_scopeId}>HelloResponse</code> and displayed</li><li${_scopeId}><code${_scopeId}>error</code> - when failed, populated with <code${_scopeId}>ResponseStatus</code> and displayed</li></ul><p${_scopeId}>The primary UX benefits are realized when re-making an existing request in which a locally-cached <em${_scopeId}>stale</em> version is immediately returned and displayed whilst a new API Request is made behind the scenes, which updates the UI when completed.</p><p${_scopeId}>Ultimately this provides the optimal end-user UX with the UI being immediately updated with <em${_scopeId}>stale</em> results initially, before being re-updated with the latest UI when the new API Request is completed.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "markdown-body" }, [
                createVNode("p", null, "This template contains our essential recommendations for a modern Vue Single Page App optimal for both productivity and performance."),
                createVNode("table", null, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th"),
                      createVNode("th")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://vitejs.dev" }, "Vite")
                      ]),
                      createVNode("td", null, "Modern typed API, Lighting fast reloads, optimal builds, growing ecosystem")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://v3.vuejs.org" }, "Vue3")
                      ]),
                      createVNode("td", null, "Elegant, composable reactive typed API that scales from small to large Apps")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://tailwindcss.com" }, "Tailwindcss")
                      ]),
                      createVNode("td", null, [
                        createTextVNode("Productive responsive-first utility-based css framework with growing "),
                        createVNode("a", { href: "https://tailwindcomponents.com" }, "rich component ecosystem")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://www.typescriptlang.org" }, "TypeScript")
                      ]),
                      createVNode("td", null, "Advanced type-safety, static analysis and richer IDE tooling")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://iconify.design" }, "Iconify")
                      ]),
                      createVNode("td", null, "Unified registry to access 100k+ high quality SVG icons from 100+ icon sets")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/markdown-it/markdown-it" }, "Markdown")
                      ]),
                      createVNode("td", null, "Native Markdown integration with advanced featureset supporting embedding of HTML & Vue Components")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/antfu/vite-ssg" }, "Vite SSG")
                      ]),
                      createVNode("td", null, "Server-side generation for Vue 3 on Vite")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/Kong/swrv" }, "SWRV")
                      ]),
                      createVNode("td", null, "stale-while-revalidate library for Vue 3\u2019s composition API enabling optimal end-user UX for API integrations")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://tailwindcss.com/docs/dark-mode" }, "Dark Mode")
                      ]),
                      createVNode("td", null, "OS defined & user toggable dark mode")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://pinia.esm.dev" }, "Pinia")
                      ]),
                      createVNode("td", null, [
                        createTextVNode("Vue 3 Intuitive, TypeSafe Reactive State Management, checkout "),
                        createVNode("a", { href: "/todos" }, "Todos")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://tailwindcss-typography.vercel.app" }, "tailwind/typography")
                      ]),
                      createVNode("td", null, "Beautiful css typography for markdown articles & blog posts")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/tailwindlabs/tailwindcss-forms" }, "tailwind/forms")
                      ]),
                      createVNode("td", null, "Beautiful css form & input styles that\u2019s easy to override with utilities")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/hannoeru/vite-plugin-pages" }, "plugin/pages")
                      ]),
                      createVNode("td", null, "Conventional file system based routing for Vue 3 on Vite")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/JohnCampionJr/vite-plugin-vue-layouts" }, "plugin/layouts")
                      ]),
                      createVNode("td", null, "Support for multiple page layouts")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/antfu/unplugin-vue-components" }, "plugin/components")
                      ]),
                      createVNode("td", null, "Auto importing & registering of components on-demand")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://github.com/antfu/unplugin-auto-import" }, "plugin/auto-import")
                      ]),
                      createVNode("td", null, "Global imports in source files for reduced boilerplate")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://docs.servicestack.net/auth" }, "Authentication")
                      ]),
                      createVNode("td", null, "Simple, built-in flexible auth protected by route guards")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("a", { href: "https://docs.servicestack.net/validation" }, "Validation")
                      ]),
                      createVNode("td", null, "Auto form binding, submission, loading and validation")
                    ])
                  ])
                ]),
                createVNode("h2", null, "Vue Plugins"),
                createVNode("p", null, [
                  createTextVNode("The Vite plugins registered in "),
                  createVNode("code", null, "vite.config.ts"),
                  createTextVNode(" improves productivity by adopting popular conventions that automating-away manual tasks & configurations.")
                ]),
                createVNode("h3", null, [
                  createVNode("a", { href: "https://github.com/antfu/unplugin-vue-components" }, "unplugin-vue-components")
                ]),
                createVNode("p", null, [
                  createTextVNode("For Auto Registering Vue Components, either "),
                  createVNode("code", null, ".vue"),
                  createTextVNode(" SFC\u2019s, "),
                  createVNode("code", null, ".md"),
                  createTextVNode(" Markdown components or Iconify\u2019s icons as Vue3 components.")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-ts" }, "Components({\n    extensions: ['vue', 'md'],\n    include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],\n    resolvers: [\n        // auto import icons without any prefix\n        IconsResolver({\n            componentPrefix: ''\n        }),\n    ],\n    dts: 'src/components.d.ts', // auto-gen type definitions\n})\n")
                ]),
                createVNode("h3", null, [
                  createVNode("a", { href: "https://github.com/antfu/unplugin-icons" }, "unplugin-icons")
                ]),
                createVNode("p", null, [
                  createTextVNode("For accessing "),
                  createVNode("a", { href: "https://icon-sets.iconify.design" }, "thousands of Iconfigy\u2019s SVG icons"),
                  createTextVNode(" as Vue components "),
                  createVNode("strong", null, "on-demand"),
                  createTextVNode(" universally.")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-ts" }, "Icons({ })\n")
                ]),
                createVNode("h3", null, [
                  createVNode("a", { href: "https://github.com/hannoeru/vite-plugin-pages" }, "vite-plugin-pages")
                ]),
                createVNode("p", null, [
                  createTextVNode("For auto generating vue routing configurations for each Vue 3 component from "),
                  createVNode("a", { href: "https://github.com/hannoeru/vite-plugin-pages#file-system-routing" }, "NuxtJS inspired File System Routing"),
                  createTextVNode(" conventions.")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-ts" }, `Pages({
  dirs: [
    { dir: "src/pages", baseRoute: "posts" }, // at: /posts/*
    { dir: "src/views", baseRoute: "" },      // at: /*
  ],
  extensions: ['vue', 'md'],
  extendRoute(route:any) {
    // attach markdown frontmatter metadata to their routes
  },
})
`)
                ]),
                createVNode("h3", null, [
                  createVNode("a", { href: "https://github.com/antfu/vite-plugin-md" }, "vite-plugin-md")
                ]),
                createVNode("p", null, [
                  createTextVNode("For enabling Markdown Support by converting each "),
                  createVNode("code", null, ".md"),
                  createTextVNode(" document into a Vue Component that\u2019s rendered using "),
                  createVNode("a", { href: "https://github.com/markdown-it/markdown-it" }, "markdown-it"),
                  createTextVNode(".")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-ts" }, "Markdown({\n    markdownItOptions: {\n        // html: true,\n    },\n    markdownItSetup(md) {\n        //md.use(markdownPlugin)\n    },\n    wrapperComponent: 'MarkdownPage'\n})\n")
                ]),
                createVNode("h2", null, "App Features"),
                createVNode("h3", null, "Stale While Revalidate"),
                createVNode("p", null, [
                  createVNode("a", { href: "https://web.dev/stale-while-revalidate/" }, "stale-while-revalidate"),
                  createTextVNode(" is a popular UI pattern helps developers balance between immediacy\u2014loading cached content right away\u2014and freshness\u2014ensuring updates to the cached content are used in the future.")
                ]),
                createVNode("p", null, [
                  createTextVNode("This template includes a "),
                  createVNode("code", null, "swrClient"),
                  createTextVNode(" that provides a typed wrapper around "),
                  createVNode("a", { href: "https://github.com/Kong/swrv" }, "Vue3\u2019s SWVR"),
                  createTextVNode(" library for making typed API Requests with ServiceStack\u2019s typed "),
                  createVNode("a", { href: "https://docs.servicestack.net/typescript-add-servicestack-reference" }, "JsonServiceClient"),
                  createTextVNode(".")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-html" }, `<template>
  <div v-if="error">{{ error.message }}</div>
  <div v-else>{{data ? data.result :'loading...'}}</div>
</template>

<script setup lang="ts">
import { Hello } from "@/dtos"
import { swrClient } from "@/api"

const props = defineProps<{ name: string }>()

const { data, error } = swrClient.get(() => 
    new Hello({ name: props.name }))
<\/script>
`)
                ]),
                createVNode("p", null, "This reactively sets up the UI to handle multiple states:"),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("code", null, "loading"),
                    createTextVNode(" - displays the "),
                    createVNode("code", null, "loading..."),
                    createTextVNode(" message whilst API request is in transit")
                  ]),
                  createVNode("li", null, [
                    createVNode("code", null, "data"),
                    createTextVNode(" - when completed, populated with a "),
                    createVNode("code", null, "HelloResponse"),
                    createTextVNode(" and displayed")
                  ]),
                  createVNode("li", null, [
                    createVNode("code", null, "error"),
                    createTextVNode(" - when failed, populated with "),
                    createVNode("code", null, "ResponseStatus"),
                    createTextVNode(" and displayed")
                  ])
                ]),
                createVNode("p", null, [
                  createTextVNode("The primary UX benefits are realized when re-making an existing request in which a locally-cached "),
                  createVNode("em", null, "stale"),
                  createTextVNode(" version is immediately returned and displayed whilst a new API Request is made behind the scenes, which updates the UI when completed.")
                ]),
                createVNode("p", null, [
                  createTextVNode("Ultimately this provides the optimal end-user UX with the UI being immediately updated with "),
                  createVNode("em", null, "stale"),
                  createTextVNode(" results initially, before being re-updated with the latest UI when the new API Request is completed.")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/features.md");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var features = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/features.md"]]);
var features$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": features
});
const _hoisted_1$8 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 192",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#0080FF",
  d: "M127.806 103.432v24.705c41.874 0 74.478-40.453 60.78-84.332C182.6 24.63 167.363 9.393 148.188 3.407c-43.88-13.698-84.333 18.906-84.333 60.78h24.762c.003 0 .006-.006.006-.006c.004-26.28 26.01-46.596 53.639-36.57c10.236 3.714 18.4 11.877 22.117 22.112c10.027 27.612-10.26 53.609-36.516 53.646V78.744l-.004-.002h-24.686c-.002 0-.004.004-.004.004v24.686h24.637Zm-24.642 18.974H84.197l-.004-.005v-18.969h18.976v18.97s-.002.004-.005.004Zm-18.958-18.974h-15.9c-.007 0-.012-.004-.012-.004V87.535s.005-.012.012-.012h15.888c.007 0 .012.005.012.005v15.904Zm-62.11 49.766c-3.219-2.234-7.225-3.366-11.906-3.366H0v32.329h10.19c4.67 0 8.677-1.195 11.91-3.55c1.76-1.249 3.142-2.994 4.11-5.184c.962-2.18 1.45-4.75 1.45-7.64c0-2.857-.488-5.395-1.452-7.543c-.966-2.16-2.35-3.857-4.112-5.046Zm-16.144 2.098H9.15c3.559 0 6.488.7 8.71 2.083c2.465 1.487 3.716 4.315 3.716 8.407c0 4.215-1.254 7.171-3.726 8.79h-.002c-2.127 1.406-5.039 2.12-8.654 2.12H5.952v-21.4Zm25.881 26.865h5.73v-22.77h-5.73v22.77Zm2.92-32.727c-.98 0-1.823.347-2.503 1.027c-.687.655-1.036 1.486-1.036 2.468c0 .98.347 1.823 1.032 2.507c.684.686 1.528 1.033 2.507 1.033c.979 0 1.822-.347 2.508-1.033c.686-.685 1.032-1.529 1.032-2.507c0-.981-.348-1.811-1.032-2.463a3.43 3.43 0 0 0-2.508-1.032Zm23.618 11.86c-1.728-1.538-3.657-2.434-5.743-2.434c-3.163 0-5.792 1.094-7.813 3.25c-2.046 2.138-3.085 4.89-3.085 8.18c0 3.213 1.022 5.956 3.042 8.156c2.035 2.128 4.679 3.206 7.856 3.206c2.209 0 4.108-.615 5.655-1.83v.525c0 1.889-.506 3.359-1.503 4.368c-.997 1.008-2.379 1.519-4.107 1.519c-2.645 0-4.303-1.04-6.321-3.767l-3.902 3.749l.105.148c.843 1.182 2.134 2.34 3.838 3.44c1.704 1.095 3.846 1.652 6.368 1.652c3.402 0 6.153-1.049 8.18-3.116c2.037-2.079 3.07-4.862 3.07-8.27v-20.68h-5.64v1.903Zm-1.503 13.447c-1.001 1.138-2.287 1.689-3.93 1.689c-1.643 0-2.922-.551-3.909-1.687c-.981-1.13-1.48-2.63-1.48-4.454c0-1.854.499-3.371 1.481-4.51c.973-1.126 2.288-1.698 3.908-1.698c1.641 0 2.928.556 3.93 1.701c.997 1.138 1.503 2.654 1.503 4.507c0 1.824-.506 3.323-1.503 4.452Zm12.047 7.42h5.73v-22.77h-5.73v22.77Zm2.92-32.727c-.979 0-1.823.347-2.503 1.027c-.687.655-1.036 1.486-1.036 2.468c0 .98.347 1.823 1.032 2.507c.684.686 1.528 1.033 2.508 1.033a3.43 3.43 0 0 0 2.508-1.033c.685-.685 1.032-1.529 1.032-2.507c0-.981-.35-1.811-1.032-2.463a3.433 3.433 0 0 0-2.508-1.032Zm15.369 3.805h-5.64v6.152h-3.277v5.222h3.276v9.458c0 2.96.591 5.078 1.758 6.294c1.17 1.222 3.247 1.841 6.174 1.841c.931 0 1.868-.031 2.784-.09l.258-.018v-5.218l-1.964.103c-1.365 0-2.275-.24-2.708-.711c-.44-.48-.661-1.494-.661-3.013v-8.646h5.333v-5.222h-5.333v-6.152Zm24.998 7.855c-1.737-1.482-4.137-2.234-7.134-2.234c-1.907 0-3.69.418-5.302 1.236c-1.492.757-2.957 2.01-3.888 3.65l.058.07l3.669 3.512c1.511-2.41 3.192-3.247 5.42-3.247c1.197 0 2.19.322 2.954.955c.76.629 1.13 1.429 1.13 2.442v1.106a14.494 14.494 0 0 0-4.217-.65c-2.852 0-5.172.67-6.895 1.993c-1.746 1.34-2.63 3.255-2.63 5.696c0 2.139.745 3.877 2.222 5.169c1.49 1.246 3.35 1.879 5.533 1.879c2.181 0 4.222-.88 6.075-2.385v1.875h5.641v-14.638c0-2.771-.887-4.934-2.636-6.429Zm-10.173 12.366c.65-.453 1.568-.682 2.73-.682c1.379 0 2.841.277 4.35.824v2.234c-1.246 1.157-2.91 1.745-4.947 1.745c-.992 0-1.763-.22-2.293-.657c-.52-.426-.773-.969-.773-1.656c0-.781.305-1.373.933-1.808Zm17.374 8.701h5.73v-32.33h-5.73v32.33Zm26.52.487c-9.19 0-16.667-7.476-16.667-16.666c0-9.19 7.476-16.667 16.666-16.667c9.19 0 16.666 7.477 16.666 16.667c0 9.19-7.476 16.666-16.666 16.666Zm0-27.46c-5.952 0-10.793 4.842-10.793 10.794c0 5.951 4.841 10.792 10.792 10.792s10.793-4.84 10.793-10.792s-4.842-10.793-10.793-10.793Zm37.096 18.831c-1.025 1.149-2.073 2.145-2.881 2.662v.001c-.792.508-1.792.767-2.971.767c-1.689 0-3.046-.615-4.152-1.882c-1.1-1.26-1.657-2.878-1.657-4.814c0-1.934.55-3.55 1.636-4.801c1.091-1.26 2.441-1.87 4.128-1.87c1.846 0 3.792 1.147 5.459 3.119l3.787-3.632c-2.47-3.214-5.619-4.709-9.378-4.709c-3.146 0-5.873 1.146-8.105 3.405c-2.22 2.242-3.346 5.099-3.346 8.488c0 3.39 1.125 6.254 3.343 8.512c2.22 2.26 4.948 3.406 8.108 3.406c4.148 0 7.497-1.791 9.754-5.072l-3.725-3.58Zm23.516-11.447c-.812-1.132-1.918-2.043-3.29-2.71c-1.366-.665-2.96-1.002-4.734-1.002c-3.198 0-5.816 1.18-7.78 3.51c-1.908 2.31-2.874 5.183-2.874 8.539c0 3.45 1.06 6.307 3.152 8.489c2.08 2.171 4.865 3.273 8.276 3.273c3.864 0 7.035-1.563 9.424-4.645l.129-.166l-3.738-3.592c-.346.418-.837.892-1.286 1.314c-.565.534-1.097.947-1.665 1.23c-.857.426-1.817.637-2.892.637c-1.587 0-2.902-.467-3.907-1.388c-.94-.862-1.49-2.024-1.636-3.459h15.18l.052-2.091c0-1.48-.202-2.906-.599-4.24a12.37 12.37 0 0 0-1.812-3.699Zm-12.523 5.361c.276-1.09.778-1.996 1.497-2.7c.776-.765 1.787-1.152 3.003-1.152c1.39 0 2.465.395 3.196 1.177c.678.722 1.06 1.621 1.14 2.675h-8.836Zm34.528-6.839c-1.737-1.482-4.138-2.234-7.134-2.234c-1.907 0-3.69.418-5.302 1.236c-1.493.757-2.958 2.01-3.888 3.65l.058.07l3.669 3.512c1.511-2.41 3.192-3.247 5.42-3.247c1.197 0 2.19.322 2.954.955c.76.629 1.13 1.429 1.13 2.442v1.106a14.5 14.5 0 0 0-4.218-.65c-2.85 0-5.172.67-6.895 1.993c-1.745 1.34-2.63 3.255-2.63 5.696c0 2.139.746 3.877 2.223 5.169c1.489 1.246 3.35 1.879 5.532 1.879s4.223-.88 6.075-2.385v1.875h5.642v-14.638c0-2.771-.887-4.934-2.636-6.429Zm-10.173 12.366c.65-.453 1.567-.682 2.73-.682c1.379 0 2.841.277 4.35.824v2.234c-1.247 1.157-2.91 1.745-4.948 1.745c-.991 0-1.762-.22-2.292-.657c-.52-.426-.773-.969-.773-1.656c0-.781.305-1.373.933-1.808Zm34.851-11.919c-1.596-1.778-3.838-2.681-6.667-2.681c-2.273 0-4.119.653-5.5 1.94v-1.41h-5.619v22.771h5.73v-12.558c0-1.725.41-3.095 1.22-4.073c.808-.974 1.918-1.449 3.395-1.449c1.298 0 2.281.424 3.007 1.295c.729.875 1.098 2.08 1.098 3.586v13.199h5.73v-13.199c0-3.154-.805-5.65-2.394-7.42Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$7);
}
var __unplugin_components_3$1 = { name: "logos-digital-ocean", render: render$8 };
const _hoisted_1$7 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 64 64",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<path fill="#699635" d="M61 20.9C54.8 15.3 48.6 9.6 42.4 4C33.3 17.8 17.9 30.1 3.3 39c-.4 1.9-.8 3.7-1.3 5.5C8.4 50.3 14.8 56.2 21.2 62C36.3 53.7 52.3 41.9 62 28.5c-.3-2.5-.7-5-1-7.6"></path><path fill="#83bf4f" d="M22.4 54.6C16.1 48.8 9.8 43 3.5 37.3c15.7-8.9 28.9-21 38.6-35.3C48.4 7.8 54.7 13.5 61 19.3c-9.7 14.3-22.9 26.4-38.6 35.3"></path><g fill="#699635"><path d="M20.8 50.8c-4.2-3.8-8.4-7.7-12.6-11.5c.3-.2.5-.3.8-.5c.8-.5 1-1.4.3-2.1l-.6-.6C21.4 28.3 32.4 18.3 41 6.7l.6.6c.7.6 1.7.5 2.3-.2c.2-.2.3-.5.5-.7c4.2 3.8 8.4 7.7 12.6 11.5c-.2.2-.3.5-.5.7c-.6.8-.5 1.9.2 2.6l.6.6C48.7 33.3 37.7 43.3 25 51.1l-.6-.6c-.7-.6-1.9-.7-2.8-.2c-.3.2-.5.3-.8.5m-9.9-11.4c3.4 3.1 6.8 6.2 10.3 9.4c1.3-.4 2.8-.3 4 .3C36.8 41.7 46.9 32.5 55 21.8c-.7-1.1-.8-2.5-.3-3.7c-3.4-3.1-6.8-6.2-10.3-9.4c-.9.8-2.2.9-3.3.3C33 19.8 22.9 29 11.3 36.4c.6 1 .5 2.2-.4 3"></path><path d="M20 37.3c1.1-.4 2.3-.3 3.1.4c-.5.4-1.1.8-1.6 1.2c-.2-.2-.7-.2-.9 0c-.3.2-.4.5-.1.7c.2.2.7.2 1 0c1.2-.8 2.9-.9 3.8 0c.7.7.8 1.7.1 2.5c.2.2.4.3.6.5c-.5.3-1 .7-1.5 1c-.2-.2-.4-.4-.6-.5c-1.1.3-2.3.2-3-.5c.6-.4 1.1-.7 1.7-1.1c.2.2.7.2 1 0c.3-.2.3-.5.1-.7c-.2-.2-.6-.2-.9 0c-.7.5-1.6.7-2.4.6c-.6-.1-1.1-.3-1.5-.6c-.7-.7-.7-1.6-.1-2.4c-.2-.1-.3-.3-.5-.5c.5-.3 1-.7 1.5-1c-.1.1.1.2.2.4m23.2-21.4c.9-.6 2-.6 2.7.1l-1.2 1.5c-.2-.2-.6-.2-.8.1c-.2.3-.2.7 0 .9s.6.2.8-.1c.9-1.1 2.4-1.3 3.3-.5c.7.7.9 1.8.5 2.8c.2.2.4.3.6.5c-.4.5-.7.9-1.1 1.4c-.2-.2-.4-.4-.6-.5c-.9.5-1.9.5-2.6-.2c.4-.5.9-1 1.3-1.5c.2.2.6.2.8-.1s.2-.7 0-.9c-.2-.2-.6-.2-.8.1c-.5.6-1.3 1-2 1c-.5 0-1-.2-1.4-.5c-.7-.7-.9-1.7-.5-2.7c-.2-.1-.3-.3-.5-.5c.4-.4.8-.9 1.1-1.4c0 .2.2.3.4.5m-3 19.6c-3.2 2.9-8.6 2.8-11.7 0c-3.1-2.9-2.9-7.4.3-10.3c3.2-2.9 8.2-3.2 11.3-.3c3.2 2.8 3.3 7.7.1 10.6"></path></g><path fill="#ffdd7d" d="m21.8 24.5l18.9 17.3c2.2-1.8 4.2-3.7 6.2-5.7L28.1 18.8c-2 1.9-4.1 3.8-6.3 5.7"></path><path fill="#dbb471" d="M40.8 49.4c2.1-1.6 4.2-3.3 6.2-5V36c-2 2-4.1 3.9-6.2 5.7v7.7"></path><path id="svgIDa" fill="#8d9998" d="M12.1 24.7c1.1-.4 2-1 2.9-1.7c.9-.7 1.7-1.4 2.6-2.2c.9-.7 1.8-1.5 2.8-2c1-.6 2.3-.9 3.4-.7c-1.1.2-2.1.7-3 1.4c-.9.6-1.7 1.4-2.6 2.1c-.9.7-1.8 1.5-2.8 2.1c-1 .6-2.2 1-3.3 1"></path><path fill="#e8e8e8" d="M39.8 33.1s4.9 1.4 16.3-1.6s6 29.8-14.8 29.8c-2.3 0-2.4-2.9 4-8.1c0 0-9 2.1-5.1-4.6c0 0-6.4 1.1-3.5-4c0 0 1.3-3.8.1-8.1c.1 0 .8-2.2 3-3.4"></path><g fill="#d1d1d1"><path d="M61.5 34.7c.2 8.8-6.8 23.4-20.7 23.4h-.2c-1.3 2.1-.7 3.3.7 3.3c15.8-.1 22.7-18.9 20.2-26.7"></path><path d="M54.3 39.5c-3 10.8-15 11.7-15 11.7c-.5 2.3.5 3.3 1.8 3.3c4.4.1 12.6-7.2 13.2-15m-8.4 0c-7.1 10-9.6 6.3-9.6 6.3c-1.8 4 2.9 4 3.7 3.1c2.3-2.5 6-7.7 5.9-9.4"></path></g><path fill="#8d9998" d="M40.5 58.4c1.2-1.6 2.7-2.9 4.2-4.2c1.5-1.3 3-2.6 4.5-4c1.4-1.4 2.8-3 3.8-4.8c1-1.8 1.5-3.9 1.3-5.9c-.2 2-.9 3.9-2 5.5s-2.4 3.1-3.8 4.5s-2.9 2.7-4.3 4.2c-1.5 1.3-2.8 2.9-3.7 4.7m-1.2-7.2c.4-1.1 1-2 1.7-2.9c.7-.9 1.4-1.7 2.2-2.6c.7-.9 1.5-1.8 2-2.8c.6-1 .9-2.3.7-3.4c-.2 1.1-.7 2.1-1.4 3c-.6.9-1.4 1.7-2.1 2.6c-.7.9-1.5 1.8-2.1 2.8c-.6 1-1 2.2-1 3.3"></path><path fill="#e8e8e8" d="M30.2 24.2s-1.4-4.9 1.6-16.3S2 1.9 2 22.7c0 2.3 2.9 2.4 8.1-4c0 0-2.1 9 4.6 5.1c0 0-1.1 6.4 4 3.5c0 0 3.8-1.3 8.1-.1c0-.1 2.2-.8 3.4-3"></path><g fill="#d1d1d1"><path d="M28.6 2.5C19.8 2.3 5.2 9.3 5.2 23.2v.2c-2.1 1.2-3.2.7-3.2-.7C2 6.9 20.8 0 28.6 2.5"></path><path d="M23.8 9.7c-10.8 3-11.7 15-11.7 15c-2.3.5-3.3-.5-3.3-1.8c-.1-4.4 7.2-12.6 15-13.2m0 8.4c-10 7.1-6.3 9.6-6.3 9.6c-4 1.8-4-2.9-3.1-3.7c2.5-2.3 7.7-6 9.4-5.9"></path></g><path fill="#8d9998" d="M4.9 23.5c1.6-1.2 2.9-2.7 4.2-4.2c1.3-1.5 2.6-3 4-4.5c1.4-1.4 3-2.8 4.8-3.8c1.8-1 3.9-1.5 5.9-1.3c-2 .2-3.9.9-5.5 2s-3.1 2.4-4.5 3.8s-2.7 2.9-4.2 4.3c-1.4 1.5-2.9 2.8-4.7 3.7"></path><use href="#svgIDa"></use>', 13);
const _hoisted_15 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_15);
}
var __unplugin_components_2$1 = { name: "emojione-money-with-wings", render: render$7 };
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#F0047F",
  d: "M128 0C57.221 0 0 57.221 0 128c0 70.778 57.221 128 128 128c70.778 0 128-57.222 128-128V0H128Z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M121.04 134.96v93.312c-49.663-2.837-89.64-42.345-93.215-91.81l-.097-1.502h93.312Zm90.962 0c-2.6 49.664-38.816 89.64-84.159 93.215l-1.377.097V134.96h85.536Zm.112-91.074v85.648h-85.648V43.886h85.648Z"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$6,
  _hoisted_3$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$2);
}
var __unplugin_components_1$2 = { name: "logos-jamstack-icon", render: render$6 };
const _sfc_main$d = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "App Hosting Costs", "meta": [{ "property": "og:title", "content": "App Hosting Costs" }] };
    expose({ frontmatter });
    const head = { "title": "App Hosting Costs", "meta": [{ "property": "og:title", "content": "App Hosting Costs" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = __unplugin_components_0$1;
      const _component_LogosJamstackIcon = __unplugin_components_1$2;
      const _component_EmojioneMoneyWithWings = __unplugin_components_2$1;
      const _component_LogosDigitalOcean = __unplugin_components_3$1;
      _push(ssrRenderComponent(_component_MarkdownPage, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><a href="https://jamstack.org"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogosJamstackIcon, { class: "w-14 h-14 float-left mt-2 mr-4" }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>The modern <a href="https://jamstack.org"${_scopeId}>jamstack.org</a> approach for developing websites is primarily concerned with adopting the architecture yielding the best performance and superior UX by minimizing the time to first byte from serving pre-built static assets from CDN edge caches.</p><h2${_scopeId}>Cheaper Hosting</h2><a href="https://jamstack.org"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EmojioneMoneyWithWings, { class: "w-14 h-14 float-left mt-2 mr-4" }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>A consequence of designing your UI decoupled from your back-end server is that it also becomes considerably cheaper to host as its static files can be hosted by any web server and is a task highly optimized by CDNs who are able to provide generous free &amp; low cost hosting options.</p><h2${_scopeId}><a href="https://github.com/NetCoreTemplates/vue-ssg/tree/main/ui"${_scopeId}>/ui</a></h2><p${_scopeId}>This template takes advantage of its decoupled architecture and uses <a href="/posts/deploy"${_scopeId}>GitHub Actions to deploy</a> a copy of its static UI generated assets and hosted on:</p><h3${_scopeId}>GitHub Pages CDN</h3><h3${_scopeId}><a href="https://vue-ssg.jamstacks.net"${_scopeId}>vue-ssg.jamstacks.net</a></h3><p${_scopeId}>This is an optional deployment step which publishes a copy of your .NET App\u2019s <code${_scopeId}>/wwwroot</code> folder to this templates <a href="https://github.com/NetCoreTemplates/vue-ssg/tree/gh-pages"${_scopeId}>gh-pages</a> branch where it\u2019s automatically served from <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages"${_scopeId}>GitHub Pages CDN</a> at <strong${_scopeId}>no cost</strong>.</p><p${_scopeId}>It\u2019s an optional but recommended optimization as it allows the initial download from your website to be served directly from CDN edge caches.</p><h2${_scopeId}><a href="https://github.com/NetCoreTemplates/vue-ssg/tree/main/api"${_scopeId}>/api</a></h2><p${_scopeId}>The .NET 6 <code${_scopeId}>/api</code> backend server is required for this App\u2019s dynamic functions including the Hello API on the home page and its <a href="https://docs.servicestack.net/auth"${_scopeId}>built-in Authentication</a>.</p><p${_scopeId}>The C# project still contains the complete App and can be hosted independently with the entire App served directly from its deployed ASP.NET Core server at:</p><h3${_scopeId}>Digital Ocean</h3><h3${_scopeId}><a href="https://vue-ssg-api.jamstacks.net"${_scopeId}>vue-ssg-api.jamstacks.net</a></h3><p${_scopeId}>But when accessed from the CDN <a href="https://vue-ssg.jamstacks.net"${_scopeId}>vue-ssg.jamstacks.net</a> that contains a copy of its static <code${_scopeId}>/wwwroot</code> UI assets, only its back-end JSON APIs are used to power its dynamic features.</p><h2${_scopeId}>Total Cost</h2><a href="https://www.digitalocean.com/pricing"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogosDigitalOcean, { class: "w-24 h-24 float-left mt-0 mr-8" }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>Since hosting on GitHub Pages CDN is free, the only cost is for hosting this App\u2019s .NET Server which is being hosted from a basic <a href="https://www.digitalocean.com/pricing"${_scopeId}>$10 /mo</a> droplet which is currently hosting <strong${_scopeId}>25</strong> .NET Docker Apps and demos of <a href="https://servicestack.net/start"${_scopeId}>starting project templates</a> which works out to be just under <strong${_scopeId}>0.40 /mo</strong>!</p><h2${_scopeId}>Jamstack Benefits</h2><p${_scopeId}>Jamstack is quickly becoming the preferred architecture for the development of modern web apps with <a href="https://jamstack.org/why-jamstack/"${_scopeId}>benefits</a> that extend beyond performance to improved:</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Security</strong> from a reduced attack surface from hosting read-only static resources and requiring fewer App Servers</li><li${_scopeId}><strong${_scopeId}>Scale</strong> with non-essential load removed from App Servers to CDN\u2019s architecture capable of incredible scale &amp; load capacity</li><li${_scopeId}><strong${_scopeId}>Maintainability</strong> resulting from reduced hosting complexity and the clean decoupling of UI and server logic</li><li${_scopeId}><strong${_scopeId}>Portability</strong> with your static UI assets being easily capable from being deployed and generically hosted from any CDN or web server</li><li${_scopeId}><strong${_scopeId}>Developer Experience</strong> with the major JavaScript frameworks at the forefront of amazing DX are embracing Jamstack in their dev model, libraries &amp; tooling</li></ul><p${_scopeId}>Best of all the Jamstack approach fits perfectly with ServiceStack\u2019s recommended <a href="https://docs.servicestack.net/api-first-development"${_scopeId}>API First Development</a> model which encourages development of reusable message-based APIs where the same System APIs can be reused from all Web, Mobile &amp; Desktop Apps from multiple HTTP, MQ or gRPC endpoints.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "markdown-body" }, [
                createVNode("a", { href: "https://jamstack.org" }, [
                  createVNode(_component_LogosJamstackIcon, { class: "w-14 h-14 float-left mt-2 mr-4" })
                ]),
                createVNode("p", null, [
                  createTextVNode("The modern "),
                  createVNode("a", { href: "https://jamstack.org" }, "jamstack.org"),
                  createTextVNode(" approach for developing websites is primarily concerned with adopting the architecture yielding the best performance and superior UX by minimizing the time to first byte from serving pre-built static assets from CDN edge caches.")
                ]),
                createVNode("h2", null, "Cheaper Hosting"),
                createVNode("a", { href: "https://jamstack.org" }, [
                  createVNode(_component_EmojioneMoneyWithWings, { class: "w-14 h-14 float-left mt-2 mr-4" })
                ]),
                createVNode("p", null, "A consequence of designing your UI decoupled from your back-end server is that it also becomes considerably cheaper to host as its static files can be hosted by any web server and is a task highly optimized by CDNs who are able to provide generous free & low cost hosting options."),
                createVNode("h2", null, [
                  createVNode("a", { href: "https://github.com/NetCoreTemplates/vue-ssg/tree/main/ui" }, "/ui")
                ]),
                createVNode("p", null, [
                  createTextVNode("This template takes advantage of its decoupled architecture and uses "),
                  createVNode("a", { href: "/posts/deploy" }, "GitHub Actions to deploy"),
                  createTextVNode(" a copy of its static UI generated assets and hosted on:")
                ]),
                createVNode("h3", null, "GitHub Pages CDN"),
                createVNode("h3", null, [
                  createVNode("a", { href: "https://vue-ssg.jamstacks.net" }, "vue-ssg.jamstacks.net")
                ]),
                createVNode("p", null, [
                  createTextVNode("This is an optional deployment step which publishes a copy of your .NET App\u2019s "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" folder to this templates "),
                  createVNode("a", { href: "https://github.com/NetCoreTemplates/vue-ssg/tree/gh-pages" }, "gh-pages"),
                  createTextVNode(" branch where it\u2019s automatically served from "),
                  createVNode("a", { href: "https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" }, "GitHub Pages CDN"),
                  createTextVNode(" at "),
                  createVNode("strong", null, "no cost"),
                  createTextVNode(".")
                ]),
                createVNode("p", null, "It\u2019s an optional but recommended optimization as it allows the initial download from your website to be served directly from CDN edge caches."),
                createVNode("h2", null, [
                  createVNode("a", { href: "https://github.com/NetCoreTemplates/vue-ssg/tree/main/api" }, "/api")
                ]),
                createVNode("p", null, [
                  createTextVNode("The .NET 6 "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" backend server is required for this App\u2019s dynamic functions including the Hello API on the home page and its "),
                  createVNode("a", { href: "https://docs.servicestack.net/auth" }, "built-in Authentication"),
                  createTextVNode(".")
                ]),
                createVNode("p", null, "The C# project still contains the complete App and can be hosted independently with the entire App served directly from its deployed ASP.NET Core server at:"),
                createVNode("h3", null, "Digital Ocean"),
                createVNode("h3", null, [
                  createVNode("a", { href: "https://vue-ssg-api.jamstacks.net" }, "vue-ssg-api.jamstacks.net")
                ]),
                createVNode("p", null, [
                  createTextVNode("But when accessed from the CDN "),
                  createVNode("a", { href: "https://vue-ssg.jamstacks.net" }, "vue-ssg.jamstacks.net"),
                  createTextVNode(" that contains a copy of its static "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" UI assets, only its back-end JSON APIs are used to power its dynamic features.")
                ]),
                createVNode("h2", null, "Total Cost"),
                createVNode("a", { href: "https://www.digitalocean.com/pricing" }, [
                  createVNode(_component_LogosDigitalOcean, { class: "w-24 h-24 float-left mt-0 mr-8" })
                ]),
                createVNode("p", null, [
                  createTextVNode("Since hosting on GitHub Pages CDN is free, the only cost is for hosting this App\u2019s .NET Server which is being hosted from a basic "),
                  createVNode("a", { href: "https://www.digitalocean.com/pricing" }, "$10 /mo"),
                  createTextVNode(" droplet which is currently hosting "),
                  createVNode("strong", null, "25"),
                  createTextVNode(" .NET Docker Apps and demos of "),
                  createVNode("a", { href: "https://servicestack.net/start" }, "starting project templates"),
                  createTextVNode(" which works out to be just under "),
                  createVNode("strong", null, "0.40 /mo"),
                  createTextVNode("!")
                ]),
                createVNode("h2", null, "Jamstack Benefits"),
                createVNode("p", null, [
                  createTextVNode("Jamstack is quickly becoming the preferred architecture for the development of modern web apps with "),
                  createVNode("a", { href: "https://jamstack.org/why-jamstack/" }, "benefits"),
                  createTextVNode(" that extend beyond performance to improved:")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("strong", null, "Security"),
                    createTextVNode(" from a reduced attack surface from hosting read-only static resources and requiring fewer App Servers")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "Scale"),
                    createTextVNode(" with non-essential load removed from App Servers to CDN\u2019s architecture capable of incredible scale & load capacity")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "Maintainability"),
                    createTextVNode(" resulting from reduced hosting complexity and the clean decoupling of UI and server logic")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "Portability"),
                    createTextVNode(" with your static UI assets being easily capable from being deployed and generically hosted from any CDN or web server")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "Developer Experience"),
                    createTextVNode(" with the major JavaScript frameworks at the forefront of amazing DX are embracing Jamstack in their dev model, libraries & tooling")
                  ])
                ]),
                createVNode("p", null, [
                  createTextVNode("Best of all the Jamstack approach fits perfectly with ServiceStack\u2019s recommended "),
                  createVNode("a", { href: "https://docs.servicestack.net/api-first-development" }, "API First Development"),
                  createTextVNode(" model which encourages development of reusable message-based APIs where the same System APIs can be reused from all Web, Mobile & Desktop Apps from multiple HTTP, MQ or gRPC endpoints.")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/hosting.md");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var hosting = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/hosting.md"]]);
var hosting$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": hosting
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4" }, _attrs))}><button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><span class="sr-only">Close</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/CloseButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var CloseButton = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/CloseButton.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    status: { type: null, required: false },
    id: { type: String, required: true },
    modelValue: { type: String, required: false },
    label: { type: String, required: false },
    options: { type: null, required: false },
    values: { type: Array, required: false }
  },
  setup(__props) {
    const props = __props;
    const useLabel = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : humanize(toPascalCase(props.id));
    });
    const remaining = computed(() => omit(useAttrs(), [...Object.keys(props)]));
    let ctx = inject("ApiState", void 0);
    const errorField = computed(() => {
      var _a;
      return errorResponse.call({ responseStatus: (_a = props.status) != null ? _a : ctx == null ? void 0 : ctx.error.value }, props.id);
    });
    const kvpValues = computed(() => props.values ? props.values.map((x) => ({ key: x, value: x })) : props.options ? Object.keys(props.options).map((key) => ({ key, value: props.options[key] })) : []);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(useLabel)) {
        _push(`<label${ssrRenderAttrs(mergeProps({
          for: __props.id,
          class: "block text-sm font-medium text-gray-700"
        }, _attrs))}>${ssrInterpolate(unref(useLabel))}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<select${ssrRenderAttrs(mergeProps({
        id: __props.id,
        name: __props.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none border-gray-300 sm:text-sm rounded-md",
          !unref(errorField) ? "text-gray-900 focus:ring-indigo-500 focus:border-indigo-500" : "text-red-900 focus:ring-red-500 focus:border-red-500"
        ],
        value: __props.modelValue,
        "aria-invalid": unref(errorField) != null,
        "aria-describedby": `${__props.id}-error`
      }, unref(remaining)))}><!--[-->`);
      ssrRenderList(unref(kvpValues), (entry) => {
        _push(`<option${ssrRenderAttr("value", entry.key)}>${ssrInterpolate(entry.value)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(errorField)) {
        _push(`<p${ssrRenderAttrs(mergeProps({
          class: "mt-2 text-sm text-red-500",
          id: `${__props.id}-error`
        }, _attrs))}>${ssrInterpolate(unref(errorField))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/SelectInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/SelectInput.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    status: { type: null, required: false },
    id: { type: String, required: true },
    label: { type: String, required: false },
    help: { type: String, required: false },
    placeholder: { type: String, required: false },
    modelValue: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const useLabel = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : humanize(toPascalCase(props.id));
    });
    const usePlaceholder = computed(() => {
      var _a;
      return (_a = props.placeholder) != null ? _a : useLabel.value;
    });
    const remaining = computed(() => omit(useAttrs(), [...Object.keys(props)]));
    let ctx = inject("ApiState", void 0);
    const errorField = computed(() => {
      var _a;
      return errorResponse.call({ responseStatus: (_a = props.status) != null ? _a : ctx == null ? void 0 : ctx.error.value }, props.id);
    });
    const cls = computed(() => ["shadow-sm block w-full sm:text-sm rounded-md", errorField.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(useLabel)) {
        _push(`<label${ssrRenderAttr("for", __props.id)} class="block text-sm font-medium text-gray-700">${ssrInterpolate(unref(useLabel))}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-1 relative rounded-md shadow-sm"><textarea${ssrRenderAttrs(mergeProps({
        name: __props.id,
        id: __props.id,
        class: unref(cls),
        placeholder: unref(usePlaceholder),
        "aria-invalid": unref(errorField) != null,
        "aria-describedby": `${__props.id}-error`
      }, unref(remaining)), "textarea")}>${ssrInterpolate(__props.modelValue)}</textarea></div>`);
      if (unref(errorField)) {
        _push(`<p class="mt-2 text-sm text-red-500"${ssrRenderAttr("id", `${__props.id}-error`)}>${ssrInterpolate(unref(errorField))}</p>`);
      } else if (__props.help) {
        _push(`<p class="mt-2 text-sm text-gray-500"${ssrRenderAttr("id", `${__props.id}-description`)}>${ssrInterpolate(__props.help)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/TextAreaInput.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var TextAreaInput = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/TextAreaInput.vue"]]);
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const formatCurrency = (n) => n ? formatter.format(n) : "";
const formatDate = (s) => s ? toDateFmt(s) : "";
const dateInputFormat = (d) => dateFmt(d).replace(/\//g, "-");
function sanitizeForUi(dto) {
  if (!dto)
    return {};
  Object.keys(dto).forEach((key) => {
    let value = dto[key];
    if (typeof value == "string") {
      if (value.startsWith("/Date"))
        dto[key] = dateInputFormat(toDate(value));
    }
  });
  return dto;
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit }) {
    const visibleFields = "name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes";
    const app = useApp();
    useClient();
    const request = new CreateBooking({
      roomType: RoomType.Single,
      roomNumber: 0,
      cost: 0,
      bookingStartDate: dateInputFormat(new Date())
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogosVue = __unplugin_components_5;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="shadow overflow-hidden sm:rounded-md bg-white"><div class="relative px-4 py-5 bg-white sm:p-6">`);
      _push(ssrRenderComponent(CloseButton, null, null, _parent));
      _push(`<fieldset><legend class="text-base font-medium text-gray-900 text-center mb-4">New Booking</legend>`);
      _push(ssrRenderComponent(ErrorSummary, {
        except: visibleFields,
        class: "mb-4"
      }, null, _parent));
      _push(`<div class="grid grid-cols-6 gap-6"><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        id: "name",
        modelValue: unref(request).name,
        "onUpdate:modelValue": ($event) => unref(request).name = $event,
        required: "",
        placeholder: "Name for this booking"
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(SelectInput, {
        id: "roomType",
        modelValue: unref(request).roomType,
        "onUpdate:modelValue": ($event) => unref(request).roomType = $event,
        options: unref(app).enumOptions("RoomType")
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "number",
        id: "roomNumber",
        modelValue: unref(request).roomNumber,
        "onUpdate:modelValue": ($event) => unref(request).roomNumber = $event,
        min: "0",
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "number",
        id: "cost",
        modelValue: unref(request).cost,
        "onUpdate:modelValue": ($event) => unref(request).cost = $event,
        min: "0",
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "date",
        id: "bookingStartDate",
        modelValue: unref(request).bookingStartDate,
        "onUpdate:modelValue": ($event) => unref(request).bookingStartDate = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "date",
        id: "bookingEndDate",
        modelValue: unref(request).bookingEndDate,
        "onUpdate:modelValue": ($event) => unref(request).bookingEndDate = $event
      }, null, _parent));
      _push(`</div><div class="col-span-6">`);
      _push(ssrRenderComponent(TextAreaInput, {
        id: "notes",
        modelValue: unref(request).notes,
        "onUpdate:modelValue": ($event) => unref(request).notes = $event,
        placeholder: "Notes about this booking",
        style: { "height": "6rem" }
      }, null, _parent));
      _push(`</div></div></fieldset></div><div class="mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6"><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(SrcLink, { href: "https://github.com/NetCoreTemplates/vue-vite/blob/main/ui/src/pages/bookings-crud/Create.vue" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(PrimaryButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Booking`);
          } else {
            return [
              createTextVNode("Create Booking")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></form>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/bookings-crud/Create.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var Create = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/bookings-crud/Create.vue"]]);
var Create$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Create
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  emits: ["delete"],
  setup(__props, { emit }) {
    let deleteConfirmed = ref(false);
    const cls = computed(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      deleteConfirmed.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><input id="confirmDelete" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"${ssrIncludeBooleanAttr(Array.isArray(unref(deleteConfirmed)) ? ssrLooseContain(unref(deleteConfirmed), null) : unref(deleteConfirmed)) ? " checked" : ""}><label for="confirmDelete" class="mx-2 select-none">confirm</label><span${ssrRenderAttrs(mergeProps({ class: unref(cls) }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/ConfirmDelete.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var ConfirmDelete = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/ConfirmDelete.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    id: { type: Number, required: true }
  },
  emits: ["done"],
  setup(__props, { emit }) {
    const props = __props;
    const visibleFields = "name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes";
    const app = useApp();
    const client2 = useClient();
    const request = ref(new UpdateBooking());
    watchEffect(async () => {
      var _a;
      const api = await client2.api(new QueryBookings({ id: props.id }));
      if (api.succeeded) {
        request.value = new UpdateBooking(sanitizeForUi((_a = api.response) == null ? void 0 : _a.results[0]));
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogosVue = __unplugin_components_5;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="shadow overflow-hidden sm:rounded-md bg-white"><div class="relative px-4 py-5 bg-white sm:p-6">`);
      _push(ssrRenderComponent(CloseButton, null, null, _parent));
      _push(`<fieldset><legend class="text-base font-medium text-gray-900 text-center mb-4">Edit Booking</legend>`);
      _push(ssrRenderComponent(ErrorSummary, {
        except: visibleFields,
        class: "mb-4"
      }, null, _parent));
      _push(`<div class="grid grid-cols-6 gap-6"><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        id: "name",
        modelValue: request.value.name,
        "onUpdate:modelValue": ($event) => request.value.name = $event,
        required: "",
        placeholder: "Name for this booking"
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(SelectInput, {
        id: "roomType",
        modelValue: request.value.roomType,
        "onUpdate:modelValue": ($event) => request.value.roomType = $event,
        options: unref(app).enumOptions("RoomType")
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "number",
        id: "roomNumber",
        modelValue: request.value.roomNumber,
        "onUpdate:modelValue": ($event) => request.value.roomNumber = $event,
        min: "0",
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "number",
        id: "cost",
        modelValue: request.value.cost,
        "onUpdate:modelValue": ($event) => request.value.cost = $event,
        min: "0",
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "date",
        id: "bookingStartDate",
        modelValue: request.value.bookingStartDate,
        "onUpdate:modelValue": ($event) => request.value.bookingStartDate = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(TextInput, {
        type: "date",
        id: "bookingEndDate",
        modelValue: request.value.bookingEndDate,
        "onUpdate:modelValue": ($event) => request.value.bookingEndDate = $event
      }, null, _parent));
      _push(`</div><div class="col-span-6">`);
      _push(ssrRenderComponent(TextAreaInput, {
        id: "notes",
        modelValue: request.value.notes,
        "onUpdate:modelValue": ($event) => request.value.notes = $event,
        placeholder: "Notes about this booking",
        style: { "height": "6rem" }
      }, null, _parent));
      _push(`</div></div></fieldset></div><div class="mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6"><div class="flex justify-between items-center"><div>`);
      _push(ssrRenderComponent(ConfirmDelete, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete`);
          } else {
            return [
              createTextVNode("Delete")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(SrcLink, { href: "https://github.com/NetCoreTemplates/vue-vite/blob/main/ui/src/pages/bookings-crud/Edit.vue" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(PrimaryButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update Booking`);
          } else {
            return [
              createTextVNode("Update Booking")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></form>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/bookings-crud/Edit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Edit = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/bookings-crud/Edit.vue"]]);
var Edit$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Edit
});
const _hoisted_1$5 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __unplugin_components_4 = { name: "mdi-code-tags", render: render$5 };
const _hoisted_1$4 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __unplugin_components_3 = { name: "mdi-chevron-down", render: render$4 };
const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3H5m12.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L19.8 6.7c.26-.26.26-.7 0-.95L18.25 4.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L8 13.5V16h2.5l7.37-7.38l-2.5-2.5Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_1$1 = { name: "mdi-square-edit-outline", render: render$3 };
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 12 7Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_0 = { name: "fluent-add-circle24-regular", render: render$2 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false, default: "submit" },
    href: { type: String, required: false }
  },
  setup(__props) {
    const cls = "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (__props.href) {
        _push(ssrRenderComponent(_component_router_link, mergeProps({ to: __props.href }, _attrs), {
          default: withCtx(({ navigate }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="${ssrRenderClass(cls)}"${ssrRenderAttr("href", __props.href)}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", {
                  class: cls,
                  href: __props.href,
                  onClick: navigate
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 8, ["href", "onClick"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.type,
          class: cls
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/OutlineButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var OutlineButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/OutlineButton.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const newBooking = ref(false);
    const editBookingId = ref();
    const expandAbout = ref(false);
    const bookings = ref([]);
    const refreshBookings = async () => {
      var _a;
      const api = await client.api(new QueryBookings());
      if (api.succeeded) {
        bookings.value = (_a = api.response.results) != null ? _a : [];
      }
    };
    onMounted(async () => await refreshBookings());
    const reset = (args = {}) => {
      var _a, _b;
      newBooking.value = (_a = args.newBooking) != null ? _a : false;
      editBookingId.value = (_b = args.editBookingId) != null ? _b : void 0;
    };
    const onDone = () => {
      reset();
      refreshBookings();
    };
    const toggleAbout = () => expandAbout.value = !expandAbout.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FluentAddCircle24Regular = __unplugin_components_0;
      const _component_MdiSquareEditOutline = __unplugin_components_1$1;
      const _component_MdiChevronRight = __unplugin_components_2$4;
      const _component_MdiChevronDown = __unplugin_components_3;
      const _component_MdiCodeTags = __unplugin_components_4;
      const _component_LogosVue = __unplugin_components_5;
      _push(ssrRenderComponent(AppPage, mergeProps({
        title: "Bookings CRUD",
        class: "max-w-fit"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (newBooking.value) {
              _push2(ssrRenderComponent(Create, { class: "max-w-screen-sm" }, null, _parent2, _scopeId));
            } else if (editBookingId.value) {
              _push2(ssrRenderComponent(Edit, {
                id: editBookingId.value,
                class: "max-w-screen-sm"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(OutlineButton, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` New Booking `);
                  } else {
                    return [
                      createTextVNode(" New Booking ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            if (bookings.value.length > 0) {
              _push2(`<div class="mt-4 flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"${_scopeId}><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr class="select-none"${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FluentAddCircle24Regular, {
                class: "w-6 h-6 cursor-pointer",
                title: "New Booking"
              }, null, _parent2, _scopeId));
              _push2(`</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Id </th><th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}><span class="hidden sm:inline"${_scopeId}>Room </span>Type </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}><span class="hidden sm:inline"${_scopeId}>Room </span>No </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Cost </th><th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Start Date </th><th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Created By </th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(bookings.value, (booking, index2) => {
                _push2(`<tr class="${ssrRenderClass(index2 % 2 === 0 ? "bg-white" : "bg-gray-50")}"${_scopeId}><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_MdiSquareEditOutline, {
                  class: "w-6 h-6 cursor-pointer",
                  title: "Edit Booking"
                }, null, _parent2, _scopeId));
                _push2(`</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(booking.id)}</td><td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(booking.name)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(booking.roomType)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(booking.roomNumber)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(unref(formatCurrency)(booking.cost))}</td><td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(unref(formatDate)(booking.bookingStartDate))}</td><td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(booking.createdBy)}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5 flex"${_scopeId}><a href="#" class="mr-3 flex text-gray-400 hover:text-gray-400 text-decoration-none"${_scopeId}>`);
            if (!expandAbout.value) {
              _push2(ssrRenderComponent(_component_MdiChevronRight, {
                class: "h-6 w-6",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_MdiChevronDown, {
                class: "h-6 w-6",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            }
            _push2(` About</a>`);
            _push2(ssrRenderComponent(SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/api/trackmyhealthmicro.ServiceModel/Bookings.cs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MdiCodeTags, { class: "w-5 h-5 inline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MdiCodeTags, { class: "w-5 h-5 inline" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/bookings-crud/Index.vue" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (expandAbout.value) {
              _push2(`<div class="mt-3 text-gray-500 max-w-screen-md"${_scopeId}><h2 class="font-medium text-2xl mb-2"${_scopeId}>Creating a multi-user .NET Core Booking system in minutes</h2><blockquote class="mb-4"${_scopeId}> The Bookings service implementation is built using <a href="https://docs.servicestack.net/autoquery-crud"${_scopeId}>AutoQuery CRUD</a> which enables rapid development of typed CRUD Services using only declarative POCO DTOs, allowing for developing entire <a href="https://docs.servicestack.net/autoquery-crud#advanced-crud-example"${_scopeId}>audited</a> and <a href="https://docs.servicestack.net/autoquery-audit-log"${_scopeId}>verifiably logged</a> data-driven systems in a fraction of time <a href="https://docs.servicestack.net/autoquery-crud-bookings"${_scopeId}>more...</a></blockquote><iframe class="youtube" src="https://www.youtube.com/embed/nhc4MZufkcM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen${_scopeId}></iframe></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              newBooking.value ? (openBlock(), createBlock(Create, {
                key: 0,
                class: "max-w-screen-sm",
                onDone
              })) : editBookingId.value ? (openBlock(), createBlock(Edit, {
                key: 1,
                id: editBookingId.value,
                class: "max-w-screen-sm",
                onDone
              }, null, 8, ["id"])) : (openBlock(), createBlock(OutlineButton, {
                key: 2,
                onClick: () => reset({ newBooking: true })
              }, {
                default: withCtx(() => [
                  createTextVNode(" New Booking ")
                ]),
                _: 1
              }, 8, ["onClick"])),
              bookings.value.length > 0 ? (openBlock(), createBlock("div", {
                key: 3,
                class: "mt-4 flex flex-col"
              }, [
                createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                  createVNode("div", { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, [
                    createVNode("div", { class: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" }, [
                      createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                        createVNode("thead", { class: "bg-gray-50" }, [
                          createVNode("tr", { class: "select-none" }, [
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, [
                              createVNode(_component_FluentAddCircle24Regular, {
                                class: "w-6 h-6 cursor-pointer",
                                title: "New Booking",
                                onClick: () => reset({ newBooking: true })
                              }, null, 8, ["onClick"])
                            ]),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, " Id "),
                            createVNode("th", { class: "hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Name "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, [
                              createVNode("span", { class: "hidden sm:inline" }, "Room "),
                              createTextVNode("Type ")
                            ]),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, [
                              createVNode("span", { class: "hidden sm:inline" }, "Room "),
                              createTextVNode("No ")
                            ]),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, " Cost "),
                            createVNode("th", { class: "hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Start Date "),
                            createVNode("th", { class: "hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Created By ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(bookings.value, (booking, index2) => {
                            return openBlock(), createBlock("tr", {
                              key: booking.id,
                              class: index2 % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }, [
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, [
                                createVNode(_component_MdiSquareEditOutline, {
                                  class: "w-6 h-6 cursor-pointer",
                                  title: "Edit Booking",
                                  onClick: () => reset({ editBookingId: booking.id })
                                }, null, 8, ["onClick"])
                              ]),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(booking.id), 1),
                              createVNode("td", { class: "hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(booking.name), 1),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(booking.roomType), 1),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(booking.roomNumber), 1),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(unref(formatCurrency)(booking.cost)), 1),
                              createVNode("td", { class: "hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(unref(formatDate)(booking.bookingStartDate)), 1),
                              createVNode("td", { class: "hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(booking.createdBy), 1)
                            ], 2);
                          }), 128))
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("v-if", true),
              createVNode("div", { class: "mt-5 flex" }, [
                createVNode("a", {
                  href: "#",
                  onClick: withModifiers(toggleAbout, ["prevent"]),
                  class: "mr-3 flex text-gray-400 hover:text-gray-400 text-decoration-none"
                }, [
                  !expandAbout.value ? (openBlock(), createBlock(_component_MdiChevronRight, {
                    key: 0,
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  })) : (openBlock(), createBlock(_component_MdiChevronDown, {
                    key: 1,
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  })),
                  createTextVNode(" About")
                ], 8, ["onClick"]),
                createVNode(SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/api/trackmyhealthmicro.ServiceModel/Bookings.cs" }, {
                  default: withCtx(() => [
                    createVNode(_component_MdiCodeTags, { class: "w-5 h-5 inline" })
                  ]),
                  _: 1
                }),
                createVNode(SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/bookings-crud/Index.vue" }, {
                  default: withCtx(() => [
                    createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
                  ]),
                  _: 1
                })
              ]),
              expandAbout.value ? (openBlock(), createBlock("div", {
                key: 4,
                class: "mt-3 text-gray-500 max-w-screen-md"
              }, [
                createVNode("h2", { class: "font-medium text-2xl mb-2" }, "Creating a multi-user .NET Core Booking system in minutes"),
                createVNode("blockquote", { class: "mb-4" }, [
                  createTextVNode(" The Bookings service implementation is built using "),
                  createVNode("a", { href: "https://docs.servicestack.net/autoquery-crud" }, "AutoQuery CRUD"),
                  createTextVNode(" which enables rapid development of typed CRUD Services using only declarative POCO DTOs, allowing for developing entire "),
                  createVNode("a", { href: "https://docs.servicestack.net/autoquery-crud#advanced-crud-example" }, "audited"),
                  createTextVNode(" and "),
                  createVNode("a", { href: "https://docs.servicestack.net/autoquery-audit-log" }, "verifiably logged"),
                  createTextVNode(" data-driven systems in a fraction of time "),
                  createVNode("a", { href: "https://docs.servicestack.net/autoquery-crud-bookings" }, "more...")
                ]),
                createVNode("iframe", {
                  class: "youtube",
                  src: "https://www.youtube.com/embed/nhc4MZufkcM",
                  frameborder: "0",
                  allow: "autoplay; encrypted-media",
                  allowfullscreen: ""
                })
              ])) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/bookings-crud/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/bookings-crud/Index.vue"]]);
var Index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Index$2
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const postRoutes = router.getRoutes().filter((r) => {
      var _a;
      return r.path.startsWith("/posts/") && ((_a = r.meta) == null ? void 0 : _a.frontmatter);
    }).map((r) => {
      var _a;
      return { path: r.path, name: r.name, frontmatter: (_a = r.meta) == null ? void 0 : _a.frontmatter };
    }).sort((a, b) => {
      var _a, _b, _c;
      return (_c = (_a = b.frontmatter.date) != null ? _a : "") == null ? void 0 : _c.localeCompare((_b = a.frontmatter.date) != null ? _b : "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><main class="flex justify-center"><div class="mx-auto px-5">`);
      _push(ssrRenderComponent(AppBreadcrumb, {
        class: "my-8",
        name: "Markdown Blog"
      }, null, _parent));
      _push(`<h3 class="text-lg mb-8"> List of Markdown Posts in <code class="bg-blue-50 text-blue-500 px-2 py-1 rounded">/posts</code></h3><!--[-->`);
      ssrRenderList(unref(postRoutes), (route) => {
        _push(`<div class="mb-8">`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "text-2xl hover:text-green-600",
          to: route.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.frontmatter.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.frontmatter.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (route.frontmatter.summary) {
          _push(`<p class="text-gray-500">${ssrInterpolate(route.frontmatter.summary)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/Index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Index = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/posts/Index.vue"]]);
var Index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Index
});
const _sfc_main$3 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Deployment with GitHub Actions", "summary": "Configuring your GitHub repo for SSH and CDN deployments", "date": "2021-11-21T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Deployment with GitHub Actions" }] };
    expose({ frontmatter });
    const head = { "title": "Deployment with GitHub Actions", "meta": [{ "property": "og:title", "content": "Deployment with GitHub Actions" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = __unplugin_components_0$1;
      _push(ssrRenderComponent(_component_MarkdownPage, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h1${_scopeId}>ServiceStack GitHub Action Deployments</h1><p${_scopeId}>The <a href="https://github.com/NetCoreTemplates/vue-ssg/blob/main/.github/workflows/release.yml"${_scopeId}>release.yml</a> in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.</p><h2${_scopeId}>Overview</h2><p${_scopeId}><code${_scopeId}>release.yml</code> is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub\u2019s <code${_scopeId}>ghcr.io</code> docker registry when a GitHub Release is created.</p><p${_scopeId}>GitHub Actions specified in <code${_scopeId}>release.yml</code> then copy files remotely via scp and use <code${_scopeId}>docker-compose</code> to run the app remotely via SSH.</p><h2${_scopeId}>What\u2019s the process of <code${_scopeId}>release.yml</code>?</h2><p${_scopeId}><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png" alt=""${_scopeId}></p><h2${_scopeId}>Deployment server setup</h2><p${_scopeId}>To get this working, a server needs to be setup with the following:</p><ul${_scopeId}><li${_scopeId}>SSH access</li><li${_scopeId}>docker</li><li${_scopeId}>docker-compose</li><li${_scopeId}>ports 443 and 80 for web access of your hosted application</li></ul><p${_scopeId}>This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc.</p><p${_scopeId}>When setting up your server, you\u2019ll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the <em${_scopeId}>private</em> SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.</p><p${_scopeId}>To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, <code${_scopeId}>nginx-proxy-compose.yml</code>. This docker-compose file is ready to run and can be copied to the deployment server.</p><p${_scopeId}>For example, once copied to remote <code${_scopeId}>~/nginx-proxy-compose.yml</code>, the following command can be run on the remote server.</p><pre${_scopeId}><code${_scopeId}>docker-compose -f ~/nginx-proxy-compose.yml up -d
</code></pre><p${_scopeId}>This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates.</p><h2${_scopeId}>GitHub Repository setup</h2><p${_scopeId}>This template pushes the API server dockerized application to GitHub Container Repository. To do this, you will first need to <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"${_scopeId}>create a Personal Access Token</a> specifically for use by <code${_scopeId}>release.yml</code> GitHub Actions.</p><p${_scopeId}>This token will need to have access to <code${_scopeId}>write:packages</code> to the GitHub Package Registry, which includes the GitHub Container Registry.</p><p${_scopeId}>The first time the <code${_scopeId}>release.yml</code> process successfully runs and creates your GitHub Container Repository for your project, you then have the option to <a href="https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio"${_scopeId}>upgrade the workflow to use GITHUB_TOKEN</a> replacing the <code${_scopeId}>CR_PAT</code>.</p><h3${_scopeId}>GitHub Actions secrets</h3><p${_scopeId}>The <code${_scopeId}>release.yml</code> assumes 5 secrets have been set:</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Required Secrets</th><th${_scopeId}>Description</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><code${_scopeId}>CR_PAT</code></td><td${_scopeId}>GitHub Personal Token with read/write access to packages</td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_API</code></td><td${_scopeId}>Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server</td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_USERNAME</code></td><td${_scopeId}>Username to log in with via SSH e.g, <strong${_scopeId}>ubuntu</strong>, <strong${_scopeId}>ec2-user</strong>, <strong${_scopeId}>root</strong></td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_KEY</code></td><td${_scopeId}>SSH private key used to remotely access deploy .NET App</td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>LETSENCRYPT_EMAIL</code></td><td${_scopeId}>Email required for Let\u2019s Encrypt automated TLS certificates</td></tr></tbody></table><p${_scopeId}>To also enable deploying static assets to a CDN:</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Optional Secrets</th><th${_scopeId}>Description</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_CDN</code></td><td${_scopeId}>Hostname where static <strong${_scopeId}>/wwwroot</strong> assets should be deployed to</td></tr></tbody></table><p${_scopeId}>These secrets can use the <a href="https://cli.github.com/manual/gh_secret_set"${_scopeId}>GitHub CLI</a> for ease of creation. Eg, using the GitHub CLI the following can be set.</p><pre${_scopeId}><code class="language-bash"${_scopeId}>gh secret set CR_PAT -b&quot;&lt;CR_PAT&gt;&quot;
gh secret set DEPLOY_API -b&quot;&lt;DEPLOY_API&gt;&quot;
gh secret set DEPLOY_USERNAME -b&quot;&lt;DEPLOY_USERNAME&gt;&quot;
gh secret set DEPLOY_KEY &lt; key.pem # DEPLOY_KEY
gh secret set LETSENCRYPT_EMAIL -b&quot;&lt;LETSENCRYPT_EMAIL&gt;&quot;
gh secret set DEPLOY_CDN -b&quot;&lt;DEPLOY_CDN&gt;&quot;
</code></pre><p${_scopeId}>These secrets are used to populate variables within GitHub Actions and other configuration files.</p><h2${_scopeId}>UI Deployment</h2><p${_scopeId}>The Vue 3 <code${_scopeId}>ui</code> application is built and deployed to GitHub Pages during the <code${_scopeId}>release.yml</code> workflow process by committing the result of <code${_scopeId}>npm run build</code> to <code${_scopeId}>gh-pages</code> branch in the repository.</p><p${_scopeId}>Variable replacement of <code${_scopeId}>$DEPLOY_API</code> and <code${_scopeId}>$DEPLOY_CDN</code> is performed on the following files as a way to coordinate configuration between the <code${_scopeId}>ui</code> and <code${_scopeId}>api</code> project.</p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>ui/vite.config.ts</code> - Set backend .NET API URL for UI App to use</li><li${_scopeId}><code${_scopeId}>ui/post.build.js</code> - If exists, run from GitHub Action after <code${_scopeId}>npm run build</code></li></ul><h3${_scopeId}>post.build.js</h3><p${_scopeId}>The <code${_scopeId}>post.build.js</code> script helps when also publishing <code${_scopeId}>/ui</code> assets to CDN by first copying the generated <code${_scopeId}>index.html</code> home page into <code${_scopeId}>404.html</code> in order to enable full page reloads to use SPA client routing:</p><pre${_scopeId}><code class="language-js"${_scopeId}>const fs = require(&quot;fs&quot;)
const path = require(&quot;path&quot;)

// Replaced in release.yml with GitHub Actions secrets
const DEPLOY_API = &#39;https://$DEPLOY_API&#39;
const DEPLOY_CDN = &#39;https://$DEPLOY_CDN&#39;

const DIST = &#39;../api/Jamstacks/wwwroot&#39;

// 404.html SPA fallback (supported by GitHub Pages, Cloudflare &amp; Netlify CDNs)
fs.copyFileSync(
    path.resolve(\`\${DIST}/index.html\`),
    path.resolve(\`\${DIST}/404.html\`))

// Define Virtual Host for GitHub Pages CDN
fs.writeFileSync(\`\${DIST}/CNAME\`, DEPLOY_CDN)

// Define /api proxy routes (supported by Cloudflare or Netlify CDNs)  
fs.writeFileSync(\`\${DIST}/_redirects\`,
    fs.readFileSync(\`\${DIST}/_redirects\`, &#39;utf-8&#39;)
        .replace(/{DEPLOY_API}/g, DEPLOY_API))
</code></pre><p${_scopeId}>Whilst the <code${_scopeId}>_redirects</code> file is a convention supported by many <a href="https://jamstack.wtf/#deployment"${_scopeId}>popular Jamstack CDNs</a> that sets up a new rule that proxies <code${_scopeId}>/api*</code> requests to where the production .NET App is deployed to in order for API requests to not need CORS:</p><pre${_scopeId}><code${_scopeId}>/api/*  {DEPLOY_API}/api/:splat  200
</code></pre><p${_scopeId}>By default this template doesn\u2019t use the <code${_scopeId}>/api</code> proxy route &amp; makes CORS API requests so it can be freely hosted on GitHub pages CDN.</p><h2${_scopeId}>Pushing updates and rollbacks</h2><p${_scopeId}>By default, deployments of both the <code${_scopeId}>ui</code> and <code${_scopeId}>api</code> occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose. Your Vue UI is built and pushed to the repository GitHub Pages.</p><p${_scopeId}>The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases.</p><p${_scopeId}>Additionally, the <code${_scopeId}>release.yml</code> workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases. A release must have already been created for the rollback build to work, it doesn\u2019t create a new Docker build based on previous code state, only redeploys as existing Docker image.</p><h2${_scopeId}>No CORS Hosting Options</h2><p${_scopeId}>The <code${_scopeId}>CorsFeature</code> needs to be enabled when adopting our recommended deployment configuration of having static <code${_scopeId}>/wwwroot</code> assets hosted from a CDN in order to make cross-domain requests to your .NET APIs.</p><h3${_scopeId}>Using a CDN Proxy</h3><p${_scopeId}>Should you want to, our recommended approach to avoid your App making CORS requests is to define an <code${_scopeId}>/api</code> proxy route on your CDN to your <code${_scopeId}>$DEPLOY_API</code> server.</p><p${_scopeId}>To better support this use-case, this template includes populating the <code${_scopeId}>_redirects</code> file used by popular CDNs like <a href="https://developers.cloudflare.com/pages/platform/redirects"${_scopeId}>Cloudflare proxy redirects</a> and <a href="https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service"${_scopeId}>Netlify proxies</a> to define redirect and proxy rules. For AWS CloudFront you would need to define a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html"${_scopeId}>Behavior for a custom origin</a>.</p><h3${_scopeId}>No CDN</h3><p${_scopeId}>Of course the easiest solution is to not need CORS in the first place by not deploying to a CDN and serving both <code${_scopeId}>/api</code> and UI from your .NET App. But this would forgo all the performance &amp; UX benefits that has made <a href="https://jamstack.org"${_scopeId}>Jamstack</a> approach so popular.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "markdown-body" }, [
                createVNode("h1", null, "ServiceStack GitHub Action Deployments"),
                createVNode("p", null, [
                  createTextVNode("The "),
                  createVNode("a", { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/.github/workflows/release.yml" }, "release.yml"),
                  createTextVNode(" in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.")
                ]),
                createVNode("h2", null, "Overview"),
                createVNode("p", null, [
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub\u2019s "),
                  createVNode("code", null, "ghcr.io"),
                  createTextVNode(" docker registry when a GitHub Release is created.")
                ]),
                createVNode("p", null, [
                  createTextVNode("GitHub Actions specified in "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" then copy files remotely via scp and use "),
                  createVNode("code", null, "docker-compose"),
                  createTextVNode(" to run the app remotely via SSH.")
                ]),
                createVNode("h2", null, [
                  createTextVNode("What\u2019s the process of "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode("?")
                ]),
                createVNode("p", null, [
                  createVNode("img", {
                    src: "https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png",
                    alt: ""
                  })
                ]),
                createVNode("h2", null, "Deployment server setup"),
                createVNode("p", null, "To get this working, a server needs to be setup with the following:"),
                createVNode("ul", null, [
                  createVNode("li", null, "SSH access"),
                  createVNode("li", null, "docker"),
                  createVNode("li", null, "docker-compose"),
                  createVNode("li", null, "ports 443 and 80 for web access of your hosted application")
                ]),
                createVNode("p", null, "This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc."),
                createVNode("p", null, [
                  createTextVNode("When setting up your server, you\u2019ll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the "),
                  createVNode("em", null, "private"),
                  createTextVNode(" SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.")
                ]),
                createVNode("p", null, [
                  createTextVNode("To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, "),
                  createVNode("code", null, "nginx-proxy-compose.yml"),
                  createTextVNode(". This docker-compose file is ready to run and can be copied to the deployment server.")
                ]),
                createVNode("p", null, [
                  createTextVNode("For example, once copied to remote "),
                  createVNode("code", null, "~/nginx-proxy-compose.yml"),
                  createTextVNode(", the following command can be run on the remote server.")
                ]),
                createVNode("pre", null, [
                  createVNode("code", null, "docker-compose -f ~/nginx-proxy-compose.yml up -d\n")
                ]),
                createVNode("p", null, "This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates."),
                createVNode("h2", null, "GitHub Repository setup"),
                createVNode("p", null, [
                  createTextVNode("This template pushes the API server dockerized application to GitHub Container Repository. To do this, you will first need to "),
                  createVNode("a", { href: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" }, "create a Personal Access Token"),
                  createTextVNode(" specifically for use by "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" GitHub Actions.")
                ]),
                createVNode("p", null, [
                  createTextVNode("This token will need to have access to "),
                  createVNode("code", null, "write:packages"),
                  createTextVNode(" to the GitHub Package Registry, which includes the GitHub Container Registry.")
                ]),
                createVNode("p", null, [
                  createTextVNode("The first time the "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" process successfully runs and creates your GitHub Container Repository for your project, you then have the option to "),
                  createVNode("a", { href: "https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio" }, "upgrade the workflow to use GITHUB_TOKEN"),
                  createTextVNode(" replacing the "),
                  createVNode("code", null, "CR_PAT"),
                  createTextVNode(".")
                ]),
                createVNode("h3", null, "GitHub Actions secrets"),
                createVNode("p", null, [
                  createTextVNode("The "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" assumes 5 secrets have been set:")
                ]),
                createVNode("table", null, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "Required Secrets"),
                      createVNode("th", null, "Description")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("code", null, "CR_PAT")
                      ]),
                      createVNode("td", null, "GitHub Personal Token with read/write access to packages")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("code", null, "DEPLOY_API")
                      ]),
                      createVNode("td", null, "Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("code", null, "DEPLOY_USERNAME")
                      ]),
                      createVNode("td", null, [
                        createTextVNode("Username to log in with via SSH e.g, "),
                        createVNode("strong", null, "ubuntu"),
                        createTextVNode(", "),
                        createVNode("strong", null, "ec2-user"),
                        createTextVNode(", "),
                        createVNode("strong", null, "root")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("code", null, "DEPLOY_KEY")
                      ]),
                      createVNode("td", null, "SSH private key used to remotely access deploy .NET App")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("code", null, "LETSENCRYPT_EMAIL")
                      ]),
                      createVNode("td", null, "Email required for Let\u2019s Encrypt automated TLS certificates")
                    ])
                  ])
                ]),
                createVNode("p", null, "To also enable deploying static assets to a CDN:"),
                createVNode("table", null, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "Optional Secrets"),
                      createVNode("th", null, "Description")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("code", null, "DEPLOY_CDN")
                      ]),
                      createVNode("td", null, [
                        createTextVNode("Hostname where static "),
                        createVNode("strong", null, "/wwwroot"),
                        createTextVNode(" assets should be deployed to")
                      ])
                    ])
                  ])
                ]),
                createVNode("p", null, [
                  createTextVNode("These secrets can use the "),
                  createVNode("a", { href: "https://cli.github.com/manual/gh_secret_set" }, "GitHub CLI"),
                  createTextVNode(" for ease of creation. Eg, using the GitHub CLI the following can be set.")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, 'gh secret set CR_PAT -b"<CR_PAT>"\ngh secret set DEPLOY_API -b"<DEPLOY_API>"\ngh secret set DEPLOY_USERNAME -b"<DEPLOY_USERNAME>"\ngh secret set DEPLOY_KEY < key.pem # DEPLOY_KEY\ngh secret set LETSENCRYPT_EMAIL -b"<LETSENCRYPT_EMAIL>"\ngh secret set DEPLOY_CDN -b"<DEPLOY_CDN>"\n')
                ]),
                createVNode("p", null, "These secrets are used to populate variables within GitHub Actions and other configuration files."),
                createVNode("h2", null, "UI Deployment"),
                createVNode("p", null, [
                  createTextVNode("The Vue 3 "),
                  createVNode("code", null, "ui"),
                  createTextVNode(" application is built and deployed to GitHub Pages during the "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" workflow process by committing the result of "),
                  createVNode("code", null, "npm run build"),
                  createTextVNode(" to "),
                  createVNode("code", null, "gh-pages"),
                  createTextVNode(" branch in the repository.")
                ]),
                createVNode("p", null, [
                  createTextVNode("Variable replacement of "),
                  createVNode("code", null, "$DEPLOY_API"),
                  createTextVNode(" and "),
                  createVNode("code", null, "$DEPLOY_CDN"),
                  createTextVNode(" is performed on the following files as a way to coordinate configuration between the "),
                  createVNode("code", null, "ui"),
                  createTextVNode(" and "),
                  createVNode("code", null, "api"),
                  createTextVNode(" project.")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("code", null, "ui/vite.config.ts"),
                    createTextVNode(" - Set backend .NET API URL for UI App to use")
                  ]),
                  createVNode("li", null, [
                    createVNode("code", null, "ui/post.build.js"),
                    createTextVNode(" - If exists, run from GitHub Action after "),
                    createVNode("code", null, "npm run build")
                  ])
                ]),
                createVNode("h3", null, "post.build.js"),
                createVNode("p", null, [
                  createTextVNode("The "),
                  createVNode("code", null, "post.build.js"),
                  createTextVNode(" script helps when also publishing "),
                  createVNode("code", null, "/ui"),
                  createTextVNode(" assets to CDN by first copying the generated "),
                  createVNode("code", null, "index.html"),
                  createTextVNode(" home page into "),
                  createVNode("code", null, "404.html"),
                  createTextVNode(" in order to enable full page reloads to use SPA client routing:")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-js" }, "const fs = require(\"fs\")\nconst path = require(\"path\")\n\n// Replaced in release.yml with GitHub Actions secrets\nconst DEPLOY_API = 'https://$DEPLOY_API'\nconst DEPLOY_CDN = 'https://$DEPLOY_CDN'\n\nconst DIST = '../api/Jamstacks/wwwroot'\n\n// 404.html SPA fallback (supported by GitHub Pages, Cloudflare & Netlify CDNs)\nfs.copyFileSync(\n    path.resolve(`${DIST}/index.html`),\n    path.resolve(`${DIST}/404.html`))\n\n// Define Virtual Host for GitHub Pages CDN\nfs.writeFileSync(`${DIST}/CNAME`, DEPLOY_CDN)\n\n// Define /api proxy routes (supported by Cloudflare or Netlify CDNs)  \nfs.writeFileSync(`${DIST}/_redirects`,\n    fs.readFileSync(`${DIST}/_redirects`, 'utf-8')\n        .replace(/{DEPLOY_API}/g, DEPLOY_API))\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("Whilst the "),
                  createVNode("code", null, "_redirects"),
                  createTextVNode(" file is a convention supported by many "),
                  createVNode("a", { href: "https://jamstack.wtf/#deployment" }, "popular Jamstack CDNs"),
                  createTextVNode(" that sets up a new rule that proxies "),
                  createVNode("code", null, "/api*"),
                  createTextVNode(" requests to where the production .NET App is deployed to in order for API requests to not need CORS:")
                ]),
                createVNode("pre", null, [
                  createVNode("code", null, "/api/*  {DEPLOY_API}/api/:splat  200\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("By default this template doesn\u2019t use the "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" proxy route & makes CORS API requests so it can be freely hosted on GitHub pages CDN.")
                ]),
                createVNode("h2", null, "Pushing updates and rollbacks"),
                createVNode("p", null, [
                  createTextVNode("By default, deployments of both the "),
                  createVNode("code", null, "ui"),
                  createTextVNode(" and "),
                  createVNode("code", null, "api"),
                  createTextVNode(" occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose. Your Vue UI is built and pushed to the repository GitHub Pages.")
                ]),
                createVNode("p", null, "The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases."),
                createVNode("p", null, [
                  createTextVNode("Additionally, the "),
                  createVNode("code", null, "release.yml"),
                  createTextVNode(" workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases. A release must have already been created for the rollback build to work, it doesn\u2019t create a new Docker build based on previous code state, only redeploys as existing Docker image.")
                ]),
                createVNode("h2", null, "No CORS Hosting Options"),
                createVNode("p", null, [
                  createTextVNode("The "),
                  createVNode("code", null, "CorsFeature"),
                  createTextVNode(" needs to be enabled when adopting our recommended deployment configuration of having static "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" assets hosted from a CDN in order to make cross-domain requests to your .NET APIs.")
                ]),
                createVNode("h3", null, "Using a CDN Proxy"),
                createVNode("p", null, [
                  createTextVNode("Should you want to, our recommended approach to avoid your App making CORS requests is to define an "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" proxy route on your CDN to your "),
                  createVNode("code", null, "$DEPLOY_API"),
                  createTextVNode(" server.")
                ]),
                createVNode("p", null, [
                  createTextVNode("To better support this use-case, this template includes populating the "),
                  createVNode("code", null, "_redirects"),
                  createTextVNode(" file used by popular CDNs like "),
                  createVNode("a", { href: "https://developers.cloudflare.com/pages/platform/redirects" }, "Cloudflare proxy redirects"),
                  createTextVNode(" and "),
                  createVNode("a", { href: "https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service" }, "Netlify proxies"),
                  createTextVNode(" to define redirect and proxy rules. For AWS CloudFront you would need to define a "),
                  createVNode("a", { href: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html" }, "Behavior for a custom origin"),
                  createTextVNode(".")
                ]),
                createVNode("h3", null, "No CDN"),
                createVNode("p", null, [
                  createTextVNode("Of course the easiest solution is to not need CORS in the first place by not deploying to a CDN and serving both "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" and UI from your .NET App. But this would forgo all the performance & UX benefits that has made "),
                  createVNode("a", { href: "https://jamstack.org" }, "Jamstack"),
                  createTextVNode(" approach so popular.")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/deploy.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var deploy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/posts/deploy.md"]]);
var deploy$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": deploy
});
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Develop using JetBrains Rider", "summary": "Setting up & exploring development workflow in Rider", "date": "2021-11-23T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Develop using JetBrains Rider" }] };
    expose({ frontmatter });
    const head = { "title": "Develop using JetBrains Rider", "meta": [{ "property": "og:title", "content": "Develop using JetBrains Rider" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = __unplugin_components_0$1;
      const _component_LogosTailwindcssIcon = __unplugin_components_1$5;
      _push(ssrRenderComponent(_component_MarkdownPage, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><a href="https://www.jetbrains.com/rider/"${_scopeId}><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg" class="sm:float-left mr-8 w-24 h-24" style="${ssrRenderStyle({ "margin-top": "0" })}"${_scopeId}></a><p${_scopeId}><a href="https://www.jetbrains.com/rider/"${_scopeId}>JetBrains Rider</a> is our recommended IDE for any C# + npm SPA development as it offers a great development UX for both C# and npm projects, including excellent support for TypeScript and popular JavaScript Framework SPA assets like <a href="https://v3.vuejs.org/guide/single-file-component.html"${_scopeId}>Vue SFC\u2019s</a>.</p><p${_scopeId}><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/spa/vue-vite-rider-sln.png" class="sm:float-right w-60 ml-8" style="${ssrRenderStyle({ "margin-top": "1rem" })}"${_scopeId}></p><h4${_scopeId}>Setup Rider IDE</h4><p${_scopeId}>Rider already understands and provides excellent support npm so you\u2019re immediately productive out-of-the-box, the only plugin we\u2019d add is:</p><a href="https://plugins.jetbrains.com/plugin/15321-tailwind-css" class="text-2xl flex items-center" style="${ssrRenderStyle({ "text-decoration": "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogosTailwindcssIcon, {
              class: "sm:float-left w-12 h-12",
              style: { "margin": "0 .5rem 0 0" }
            }, null, _parent2, _scopeId));
            _push2(`<span class=""${_scopeId}>Tailwind CSS Plugin</span></a><p${_scopeId}>Which provides provides intelligent support for <a href="https://tailwindcss.com"${_scopeId}>Tailwind CSS</a>.</p><h4${_scopeId}>Setup C# Solution</h4><p${_scopeId}>To modify both C# and npm TypeScript projects within the same solution, open the C# <code${_scopeId}>/api/ProjectName.sln</code> in Rider, then on the Solution Name right-click on the context menu <code${_scopeId}>Add &gt; Attach Existing Folder...</code></p><p${_scopeId}>Then add the <code${_scopeId}>/ui</code> folder which will add your UI folder to the solution as seen on the right:</p><p${_scopeId}>After this one-time setup you\u2019re ready to begin!</p><h3${_scopeId}>Start both npm &amp; C# projects</h3><p${_scopeId}>To take advantage of <a href="https://vitejs.dev"${_scopeId}>Vite</a> excellent Hot Module reload support, we\u2019re now recommending UI development through its dev server which you can do in rider by opening <code${_scopeId}>package.json</code> and running the <strong${_scopeId}>dev</strong> script:</p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-scripts.png" alt=""${_scopeId}></p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-run-trackmyhealthmicro.png" class="sm:float-right w-72" style="${ssrRenderStyle({ "margin": "0 0 0 1rem" })}"${_scopeId}></p><p${_scopeId}>This launch vite in HMR mode where any changes to <code${_scopeId}>/ui</code> assets will have immediate effect.</p><p${_scopeId}>Then to start the back-end C# project, right-click on the Host Project and click <strong${_scopeId}>Run</strong> on the projects context menu.</p><p${_scopeId}>With both projects started you can open and leave a browser tab running at <code${_scopeId}>http://localhost:3000</code> where it will automatically reload itself at every <code${_scopeId}>Ctrl+S</code>.</p><p${_scopeId}>When you\u2019re ready to preview a development build of the Client UI in your .NET App, run:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run build:local
</code></pre><p${_scopeId}>Which will publish your Vue 3\u2019s App static assets to the .NET App\u2019s <code${_scopeId}>/wwwroot</code> where it can be previewed from <code${_scopeId}>https://localhost:5001</code>.</p><h3${_scopeId}>Rider\u2019s new Task Runner</h3><p${_scopeId}>In the latest version of Rider, once you run the npm and dotnet tasks after the first time, they will appear in Rider\u2019s new useful task runner widget where you\u2019ll be able to easily, stop and rerun all project tasks:</p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png" alt=""${_scopeId}></p><h3${_scopeId}>Start npm &amp; C# projects from the terminal</h3><p${_scopeId}>These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains excellent multi-terminal support to run <code${_scopeId}>$ dotnet watch</code> and <code${_scopeId}>$ npm run dev</code> from separate or split Terminal windows:</p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-rider-terminals.png" alt=""${_scopeId}></p><h3${_scopeId}>Deploying to Production</h3><p${_scopeId}>When you\u2019re ready to deploy your App you can create a production build with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run publish
</code></pre><p${_scopeId}>Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to <code${_scopeId}>/wwwroot</code> to be deployed together with your complete .NET App.</p><p${_scopeId}>Our recommendation for the best possible responsive UX is to deploy your App\u2019s <code${_scopeId}>/wwwwroot</code> static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.</p><p${_scopeId}>To do this configure the production url the UI should use for all its <code${_scopeId}>/api</code> Ajax requests by modifying <code${_scopeId}>DEPLOY_API</code> in your <code${_scopeId}>vite.config.ts</code>:</p><pre${_scopeId}><code class="language-csharp"${_scopeId}>const DEPLOY_API = &#39;https://vue-ssg-api.jamstacks.net&#39;
</code></pre><p${_scopeId}>This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout <a href="/posts/deploy"${_scopeId}>GitHub Actions Deployments</a>.</p><h3${_scopeId}>Get Started</h3><p${_scopeId}>Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that\u2019s used to power its type-safe &amp; productive intelli-sense dev UX.</p><p${_scopeId}>If you\u2019re new to Vue 3 a good place to start is <a href="https://v3.vuejs.org/api/sfc-script-setup.html"${_scopeId}>Vue 3 composition APIs in SFC</a></p></div>`);
          } else {
            return [
              createVNode("div", { class: "markdown-body" }, [
                createVNode("a", { href: "https://www.jetbrains.com/rider/" }, [
                  createVNode("img", {
                    src: "https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg",
                    class: "sm:float-left mr-8 w-24 h-24",
                    style: { "margin-top": "0" }
                  })
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "https://www.jetbrains.com/rider/" }, "JetBrains Rider"),
                  createTextVNode(" is our recommended IDE for any C# + npm SPA development as it offers a great development UX for both C# and npm projects, including excellent support for TypeScript and popular JavaScript Framework SPA assets like "),
                  createVNode("a", { href: "https://v3.vuejs.org/guide/single-file-component.html" }, "Vue SFC\u2019s"),
                  createTextVNode(".")
                ]),
                createVNode("p", null, [
                  createVNode("img", {
                    src: "https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/spa/vue-vite-rider-sln.png",
                    class: "sm:float-right w-60 ml-8",
                    style: { "margin-top": "1rem" }
                  })
                ]),
                createVNode("h4", null, "Setup Rider IDE"),
                createVNode("p", null, "Rider already understands and provides excellent support npm so you\u2019re immediately productive out-of-the-box, the only plugin we\u2019d add is:"),
                createVNode("a", {
                  href: "https://plugins.jetbrains.com/plugin/15321-tailwind-css",
                  class: "text-2xl flex items-center",
                  style: { "text-decoration": "none" }
                }, [
                  createVNode(_component_LogosTailwindcssIcon, {
                    class: "sm:float-left w-12 h-12",
                    style: { "margin": "0 .5rem 0 0" }
                  }),
                  createVNode("span", { class: "" }, "Tailwind CSS Plugin")
                ]),
                createVNode("p", null, [
                  createTextVNode("Which provides provides intelligent support for "),
                  createVNode("a", { href: "https://tailwindcss.com" }, "Tailwind CSS"),
                  createTextVNode(".")
                ]),
                createVNode("h4", null, "Setup C# Solution"),
                createVNode("p", null, [
                  createTextVNode("To modify both C# and npm TypeScript projects within the same solution, open the C# "),
                  createVNode("code", null, "/api/ProjectName.sln"),
                  createTextVNode(" in Rider, then on the Solution Name right-click on the context menu "),
                  createVNode("code", null, "Add > Attach Existing Folder...")
                ]),
                createVNode("p", null, [
                  createTextVNode("Then add the "),
                  createVNode("code", null, "/ui"),
                  createTextVNode(" folder which will add your UI folder to the solution as seen on the right:")
                ]),
                createVNode("p", null, "After this one-time setup you\u2019re ready to begin!"),
                createVNode("h3", null, "Start both npm & C# projects"),
                createVNode("p", null, [
                  createTextVNode("To take advantage of "),
                  createVNode("a", { href: "https://vitejs.dev" }, "Vite"),
                  createTextVNode(" excellent Hot Module reload support, we\u2019re now recommending UI development through its dev server which you can do in rider by opening "),
                  createVNode("code", null, "package.json"),
                  createTextVNode(" and running the "),
                  createVNode("strong", null, "dev"),
                  createTextVNode(" script:")
                ]),
                createVNode("p", null, [
                  createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-scripts.png",
                    alt: ""
                  })
                ]),
                createVNode("p", null, [
                  createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-run-trackmyhealthmicro.png",
                    class: "sm:float-right w-72",
                    style: { "margin": "0 0 0 1rem" }
                  })
                ]),
                createVNode("p", null, [
                  createTextVNode("This launch vite in HMR mode where any changes to "),
                  createVNode("code", null, "/ui"),
                  createTextVNode(" assets will have immediate effect.")
                ]),
                createVNode("p", null, [
                  createTextVNode("Then to start the back-end C# project, right-click on the Host Project and click "),
                  createVNode("strong", null, "Run"),
                  createTextVNode(" on the projects context menu.")
                ]),
                createVNode("p", null, [
                  createTextVNode("With both projects started you can open and leave a browser tab running at "),
                  createVNode("code", null, "http://localhost:3000"),
                  createTextVNode(" where it will automatically reload itself at every "),
                  createVNode("code", null, "Ctrl+S"),
                  createTextVNode(".")
                ]),
                createVNode("p", null, "When you\u2019re ready to preview a development build of the Client UI in your .NET App, run:"),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, "$ npm run build:local\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("Which will publish your Vue 3\u2019s App static assets to the .NET App\u2019s "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" where it can be previewed from "),
                  createVNode("code", null, "https://localhost:5001"),
                  createTextVNode(".")
                ]),
                createVNode("h3", null, "Rider\u2019s new Task Runner"),
                createVNode("p", null, "In the latest version of Rider, once you run the npm and dotnet tasks after the first time, they will appear in Rider\u2019s new useful task runner widget where you\u2019ll be able to easily, stop and rerun all project tasks:"),
                createVNode("p", null, [
                  createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png",
                    alt: ""
                  })
                ]),
                createVNode("h3", null, "Start npm & C# projects from the terminal"),
                createVNode("p", null, [
                  createTextVNode("These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains excellent multi-terminal support to run "),
                  createVNode("code", null, "$ dotnet watch"),
                  createTextVNode(" and "),
                  createVNode("code", null, "$ npm run dev"),
                  createTextVNode(" from separate or split Terminal windows:")
                ]),
                createVNode("p", null, [
                  createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-rider-terminals.png",
                    alt: ""
                  })
                ]),
                createVNode("h3", null, "Deploying to Production"),
                createVNode("p", null, "When you\u2019re ready to deploy your App you can create a production build with:"),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, "$ npm run publish\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" to be deployed together with your complete .NET App.")
                ]),
                createVNode("p", null, [
                  createTextVNode("Our recommendation for the best possible responsive UX is to deploy your App\u2019s "),
                  createVNode("code", null, "/wwwwroot"),
                  createTextVNode(" static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.")
                ]),
                createVNode("p", null, [
                  createTextVNode("To do this configure the production url the UI should use for all its "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" Ajax requests by modifying "),
                  createVNode("code", null, "DEPLOY_API"),
                  createTextVNode(" in your "),
                  createVNode("code", null, "vite.config.ts"),
                  createTextVNode(":")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-csharp" }, "const DEPLOY_API = 'https://vue-ssg-api.jamstacks.net'\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout "),
                  createVNode("a", { href: "/posts/deploy" }, "GitHub Actions Deployments"),
                  createTextVNode(".")
                ]),
                createVNode("h3", null, "Get Started"),
                createVNode("p", null, "Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that\u2019s used to power its type-safe & productive intelli-sense dev UX."),
                createVNode("p", null, [
                  createTextVNode("If you\u2019re new to Vue 3 a good place to start is "),
                  createVNode("a", { href: "https://v3.vuejs.org/api/sfc-script-setup.html" }, "Vue 3 composition APIs in SFC")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/rider.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var rider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/posts/rider.md"]]);
var rider$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": rider
});
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Tailwind Typography", "summary": "tailwindcss/typography enabled for Markdown pages", "date": "2021-11-20T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Tailwind Typography" }] };
    expose({ frontmatter });
    const head = { "title": "Tailwind Typography", "meta": [{ "property": "og:title", "content": "Tailwind Typography" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = __unplugin_components_0$1;
      _push(ssrRenderComponent(_component_MarkdownPage, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p class="lead"${_scopeId}> Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. </p><p${_scopeId}>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em${_scopeId}>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p><p${_scopeId}>We get lots of complaints about it actually, with people regularly asking us things like:</p><blockquote${_scopeId}><p${_scopeId}>Why is Tailwind removing the default styles on my <code${_scopeId}>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p></blockquote><p${_scopeId}>We hear you, but we\u2019re not convinced that simply disabling our base styles is what you really want. You don\u2019t want to have to remove annoying margins every time you use a <code${_scopeId}>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look <em${_scopeId}>awesome</em>, not awful.</p><p${_scopeId}>The <code${_scopeId}>@tailwindcss/typography</code> plugin is our attempt to give you what you <em${_scopeId}>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p><p${_scopeId}>It adds a new <code${_scopeId}>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p><pre${_scopeId}><code class="language-html"${_scopeId}>&lt;article class=&quot;prose&quot;&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
&lt;/article&gt;
</code></pre><p${_scopeId}>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md"${_scopeId}>read the documentation</a>.</p><hr${_scopeId}><h2${_scopeId}>What to expect from here on out</h2><p${_scopeId}>What follows from here is just a bunch of absolute nonsense I\u2019ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong${_scopeId}>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em${_scopeId}>and even italics</em>.</p><p${_scopeId}>It\u2019s important to cover all of these use cases for a few reasons:</p><ol${_scopeId}><li${_scopeId}>We want everything to look good out of the box.</li><li${_scopeId}>Really just the first reason, that\u2019s the whole point of the plugin.</li><li${_scopeId}>Here\u2019s a third pretend reason though a list with three items looks more realistic than a list with two items.</li></ol><p${_scopeId}>Now we\u2019re going to try out another header style.</p><h3${_scopeId}>Typography should be easy</h3><p${_scopeId}>So that\u2019s a header for you \u2014 with any luck if we\u2019ve done our job correctly that will look pretty reasonable.</p><p${_scopeId}>Something a wise person once told me about typography is:</p><blockquote${_scopeId}><p${_scopeId}>Typography is pretty important if you don\u2019t want your stuff to look like trash. Make it good then it won\u2019t be bad.</p></blockquote><p${_scopeId}>It\u2019s probably important that images look okay here by default as well:</p><figure${_scopeId}><img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""${_scopeId}><figcaption${_scopeId}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </figcaption></figure><p${_scopeId}>Now I\u2019m going to show you an example of an unordered list to make sure that looks good, too:</p><ul${_scopeId}><li${_scopeId}>So here is the first item in this list.</li><li${_scopeId}>In this example we\u2019re keeping the items short.</li><li${_scopeId}>Later, we\u2019ll use longer, more complex list items.</li></ul><p${_scopeId}>And that\u2019s the end of this section.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "markdown-body" }, [
                createVNode("p", { class: "lead" }, " Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. "),
                createVNode("p", null, [
                  createTextVNode("By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you "),
                  createVNode("em", null, "really are"),
                  createTextVNode(" just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.")
                ]),
                createVNode("p", null, "We get lots of complaints about it actually, with people regularly asking us things like:"),
                createVNode("blockquote", null, [
                  createVNode("p", null, [
                    createTextVNode("Why is Tailwind removing the default styles on my "),
                    createVNode("code", null, "h1"),
                    createTextVNode(" elements? How do I disable this? What do you mean I lose all the other base styles too?")
                  ])
                ]),
                createVNode("p", null, [
                  createTextVNode("We hear you, but we\u2019re not convinced that simply disabling our base styles is what you really want. You don\u2019t want to have to remove annoying margins every time you use a "),
                  createVNode("code", null, "p"),
                  createTextVNode(" element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look "),
                  createVNode("em", null, "awesome"),
                  createTextVNode(", not awful.")
                ]),
                createVNode("p", null, [
                  createTextVNode("The "),
                  createVNode("code", null, "@tailwindcss/typography"),
                  createTextVNode(" plugin is our attempt to give you what you "),
                  createVNode("em", null, "actually"),
                  createTextVNode(" want, without any of the downsides of doing something stupid like disabling our base styles.")
                ]),
                createVNode("p", null, [
                  createTextVNode("It adds a new "),
                  createVNode("code", null, "prose"),
                  createTextVNode(" class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-html" }, '<article class="prose">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread with cheese to their\n    children, with the food earning such an iconic status in our culture that kids will often dress\n    up as warm, cheesy loaf for Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n    springing up around the country.\n  </p>\n  <!-- ... -->\n</article>\n')
                ]),
                createVNode("p", null, [
                  createTextVNode("For more information about how to use the plugin and the features it includes, "),
                  createVNode("a", { href: "https://github.com/tailwindcss/typography/blob/master/README.md" }, "read the documentation"),
                  createTextVNode(".")
                ]),
                createVNode("hr"),
                createVNode("h2", null, "What to expect from here on out"),
                createVNode("p", null, [
                  createTextVNode("What follows from here is just a bunch of absolute nonsense I\u2019ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like "),
                  createVNode("strong", null, "bold text"),
                  createTextVNode(", unordered lists, ordered lists, code blocks, block quotes, "),
                  createVNode("em", null, "and even italics"),
                  createTextVNode(".")
                ]),
                createVNode("p", null, "It\u2019s important to cover all of these use cases for a few reasons:"),
                createVNode("ol", null, [
                  createVNode("li", null, "We want everything to look good out of the box."),
                  createVNode("li", null, "Really just the first reason, that\u2019s the whole point of the plugin."),
                  createVNode("li", null, "Here\u2019s a third pretend reason though a list with three items looks more realistic than a list with two items.")
                ]),
                createVNode("p", null, "Now we\u2019re going to try out another header style."),
                createVNode("h3", null, "Typography should be easy"),
                createVNode("p", null, "So that\u2019s a header for you \u2014 with any luck if we\u2019ve done our job correctly that will look pretty reasonable."),
                createVNode("p", null, "Something a wise person once told me about typography is:"),
                createVNode("blockquote", null, [
                  createVNode("p", null, "Typography is pretty important if you don\u2019t want your stuff to look like trash. Make it good then it won\u2019t be bad.")
                ]),
                createVNode("p", null, "It\u2019s probably important that images look okay here by default as well:"),
                createVNode("figure", null, [
                  createVNode("img", {
                    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                    alt: ""
                  }),
                  createVNode("figcaption", null, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ")
                ]),
                createVNode("p", null, "Now I\u2019m going to show you an example of an unordered list to make sure that looks good, too:"),
                createVNode("ul", null, [
                  createVNode("li", null, "So here is the first item in this list."),
                  createVNode("li", null, "In this example we\u2019re keeping the items short."),
                  createVNode("li", null, "Later, we\u2019ll use longer, more complex list items.")
                ]),
                createVNode("p", null, "And that\u2019s the end of this section.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/typography.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var typography = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/posts/typography.md"]]);
var typography$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": typography
});
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = ["id"];
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_3$1,
  _hoisted_4$1
];
const _hoisted_6$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#52218A",
  d: "M36.987 200.406a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006A10.667 10.667 0 0 1 0 184.22V70.46a10.667 10.667 0 0 1 6.56-9.787l19.387-8a10.667 10.667 0 0 1 11.04 1.733l4.346 3.6a5.893 5.893 0 0 0-9.333 4.8v129.067a5.893 5.893 0 0 0 9.333 4.8l-4.346 3.733Z"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#6C33AF",
  d: "M6.56 194.006A10.667 10.667 0 0 1 0 184.22v-.88a6.16 6.16 0 0 0 10.667 4.133L176 4.673a16 16 0 0 1 18.187-3.093l52.746 25.386A16 16 0 0 1 256 41.393v.613a10.107 10.107 0 0 0-16.507-7.813l-198.16 162.48l-4.346 3.733a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006Z"
}, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#854CC7",
  d: "M6.56 60.673A10.667 10.667 0 0 0 0 70.46v.88a6.16 6.16 0 0 1 10.667-4.134L176 250.006a16 16 0 0 0 18.187 3.094l52.746-25.387A16 16 0 0 0 256 213.286v-.613a10.107 10.107 0 0 1-16.507 7.813L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-11.04-1.6l-19.387 8Z"
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#B179F1",
  d: "M194.187 253.1A16 16 0 0 1 176 250.006a9.387 9.387 0 0 0 16-6.64v-232a9.387 9.387 0 0 0-16-6.693a16 16 0 0 1 18.187-3.093l52.746 25.36A16 16 0 0 1 256 41.366v171.947a16 16 0 0 1-9.067 14.427l-52.746 25.36Z"
}, null, -1);
const _hoisted_10$1 = ["fill"];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDa"],
        x1: "50%",
        x2: "50%",
        y1: ".002%",
        y2: "100%"
      }, _hoisted_5$1, 8, _hoisted_2$1)
    ]),
    _hoisted_6$1,
    _hoisted_7$1,
    _hoisted_8$1,
    _hoisted_9$1,
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      "fill-opacity": ".25",
      d: "M183.707 254.273a16 16 0 0 0 10.48-1.173l52.746-25.36A16 16 0 0 0 256 213.313V41.366a16 16 0 0 0-9.067-14.426L194.187 1.58A16 16 0 0 0 182.24.806A16 16 0 0 0 176 4.673L90.987 98.7L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-9.627-2.213a6.8 6.8 0 0 0-1.413.48L6.56 60.673A10.667 10.667 0 0 0 0 69.66v115.36a10.664 10.664 0 0 0 6.56 8.986l19.387 8a6.8 6.8 0 0 0 1.413.48c3.378.882 6.973.056 9.627-2.213l4.346-3.6l49.654-40.693L176 250.006a16 16 0 0 0 7.707 4.267ZM192 73.153l-66.107 54.187L192 181.526V73.153ZM32 90.726l33.093 36.614L32 163.953V90.726Z"
    }, null, 8, _hoisted_10$1)
  ]);
}
var __unplugin_components_2 = { name: "logos-visual-studio", render: render$1, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 254",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("path", {
  id: "svgIDa",
  d: "M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649l-76.262 57.889l76.262 57.888V68.956Z"
}, null, -1);
const _hoisted_7 = ["id"];
const _hoisted_8 = /* @__PURE__ */ createElementVNode("use", { href: "#svgIDa" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = ["mask"];
const _hoisted_11 = ["mask"];
const _hoisted_12 = ["mask"];
const _hoisted_13 = ["fill", "mask"];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDc"],
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
      }, _hoisted_5, 8, _hoisted_2),
      _hoisted_6
    ]),
    createElementVNode("mask", {
      id: _ctx.idMap["svgIDb"],
      fill: "#fff"
    }, _hoisted_9, 8, _hoisted_7),
    createElementVNode("path", {
      fill: "#0065A9",
      d: "M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z",
      mask: "url(#" + _ctx.idMap["svgIDb"] + ")"
    }, null, 8, _hoisted_10),
    createElementVNode("path", {
      fill: "#007ACC",
      d: "m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z",
      mask: "url(#" + _ctx.idMap["svgIDb"] + ")"
    }, null, 8, _hoisted_11),
    createElementVNode("path", {
      fill: "#1F9CF0",
      d: "M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z",
      mask: "url(#" + _ctx.idMap["svgIDb"] + ")"
    }, null, 8, _hoisted_12),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDc"] + ")",
      "fill-opacity": ".25",
      d: "M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65l-76.262 57.89l76.262 57.888V68.956Z",
      mask: "url(#" + _ctx.idMap["svgIDb"] + ")"
    }, null, 8, _hoisted_13)
  ]);
}
var __unplugin_components_1 = { name: "logos-visual-studio-code", render, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDb": "uicons-" + __randId(), "svgIDc": "uicons-" + __randId() };
  return { idMap };
} };
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Develop using Visual Studio", "summary": "Exploring development workflow in VS Code and Visual Studio .NET", "date": "2021-11-22T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Develop using Visual Studio" }] };
    expose({ frontmatter });
    const head = { "title": "Develop using Visual Studio", "meta": [{ "property": "og:title", "content": "Develop using Visual Studio" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = __unplugin_components_0$1;
      const _component_LogosVisualStudioCode = __unplugin_components_1;
      const _component_LogosVisualStudio = __unplugin_components_2;
      _push(ssrRenderComponent(_component_MarkdownPage, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>A popular alternative development environment to our preferred <a href="/posts/rider"${_scopeId}>JetBrains Rider</a> IDE is to use Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for npm projects whilst Visual Studio is a better IDE for C# Projects.</p><p${_scopeId}>Essentially this is why we recommend Rider where it\u2019s best at both, where both C# and npm TypeScript projects can be developed from within the same solution.</p><h3${_scopeId}>Developing with just VS Code</h3><a href="https://visualstudio.microsoft.com/" title="VS Code" class="sm:float-left mr-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogosVisualStudioCode, {
              class: "w-24 h-24",
              style: { "margin-top": "1rem" }
            }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>If you prefer the dev UX of a lightweight text editor or your C# project isn\u2019t large, than VS Code on its own can provide a great development UX which is also what <a href="https://v3.vuejs.org/api/sfc-tooling.html#ide-support"${_scopeId}>Vue recommends themselves</a>, to be used together with the <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar"${_scopeId}>Volar extension</a>.</p><p${_scopeId}>VSCode\u2019s <a href="https://code.visualstudio.com/docs/editor/integrated-terminal"${_scopeId}>Integrated Terminal</a> has great multi-terminal support you can toggle between the editor and terminal with <code${_scopeId}>Ctrl+</code> or open a new Terminal Window with <code${_scopeId}>Ctrl+Shift+\`</code> to run the <code${_scopeId}>/ui</code> dev server with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run dev
</code></pre><p${_scopeId}>Then in a new Terminal Window, start a new watched C# .NET Server build with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ dotnet watch
</code></pre><p${_scopeId}>With both projects started you can open and leave a browser tab running at <code${_scopeId}>http://localhost:3000</code> where it will automatically reload itself at every <code${_scopeId}>Ctrl+S</code> save point.</p><p${_scopeId}>When you\u2019re ready to preview a development build of the Client UI in your .NET App, run:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run build:local
</code></pre><p${_scopeId}>Which will publish your Vue 3\u2019s App static assets to the .NET App\u2019s <code${_scopeId}>/wwwroot</code> where it can be previewed from <code${_scopeId}>https://localhost:5001</code>.</p><h3${_scopeId}>Using Visual Studio</h3><a href="https://code.visualstudio.com/" title="Visual Studio" class="sm:float-left mr-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogosVisualStudio, {
              class: "w-24 h-24",
              style: { "margin-top": "1rem" }
            }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>As your C# project grows you\u2019ll want to consider running the back-end C# Solution with Visual Studio .NET with its much improved intelli-sense, navigation, tests runner &amp; debug capabilities.</p><p${_scopeId}>As we\u2019ve never had a satisfactory experience trying develop npm SPA projects with VS.NET, we\u2019d recommend only running the C# <code${_scopeId}>/api</code> project in VS.NET and continuing to use VSCode for <code${_scopeId}>/ui</code> project.</p><h3${_scopeId}>Deploying to Production</h3><p${_scopeId}>When you\u2019re ready to deploy your App you can create a production build with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run publish
</code></pre><p${_scopeId}>Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to <code${_scopeId}>/wwwroot</code> to be deployed together with your complete .NET App.</p><p${_scopeId}>Our recommendation for the best possible responsive UX is to deploy your App\u2019s <code${_scopeId}>/wwwwroot</code> static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.</p><p${_scopeId}>To do this configure the production url the UI should use for all its <code${_scopeId}>/api</code> Ajax requests by modifying <code${_scopeId}>DEPLOY_API</code> in your <code${_scopeId}>vite.config.ts</code>:</p><pre${_scopeId}><code class="language-csharp"${_scopeId}>const DEPLOY_API = &#39;https://vue-ssg-api.jamstacks.net&#39;
</code></pre><p${_scopeId}>This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout <a href="/posts/deploy"${_scopeId}>GitHub Actions Deployments</a>.</p><h3${_scopeId}>Get Started</h3><p${_scopeId}>Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that\u2019s used to power its type-safe &amp; productive intelli-sense dev UX.</p><p${_scopeId}>If you\u2019re new to Vue 3 a good place to start is <a href="https://v3.vuejs.org/api/sfc-script-setup.html"${_scopeId}>Vue 3 composition APIs in SFC</a></p></div>`);
          } else {
            return [
              createVNode("div", { class: "markdown-body" }, [
                createVNode("p", null, [
                  createTextVNode("A popular alternative development environment to our preferred "),
                  createVNode("a", { href: "/posts/rider" }, "JetBrains Rider"),
                  createTextVNode(" IDE is to use Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for npm projects whilst Visual Studio is a better IDE for C# Projects.")
                ]),
                createVNode("p", null, "Essentially this is why we recommend Rider where it\u2019s best at both, where both C# and npm TypeScript projects can be developed from within the same solution."),
                createVNode("h3", null, "Developing with just VS Code"),
                createVNode("a", {
                  href: "https://visualstudio.microsoft.com/",
                  title: "VS Code",
                  class: "sm:float-left mr-8"
                }, [
                  createVNode(_component_LogosVisualStudioCode, {
                    class: "w-24 h-24",
                    style: { "margin-top": "1rem" }
                  })
                ]),
                createVNode("p", null, [
                  createTextVNode("If you prefer the dev UX of a lightweight text editor or your C# project isn\u2019t large, than VS Code on its own can provide a great development UX which is also what "),
                  createVNode("a", { href: "https://v3.vuejs.org/api/sfc-tooling.html#ide-support" }, "Vue recommends themselves"),
                  createTextVNode(", to be used together with the "),
                  createVNode("a", { href: "https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" }, "Volar extension"),
                  createTextVNode(".")
                ]),
                createVNode("p", null, [
                  createTextVNode("VSCode\u2019s "),
                  createVNode("a", { href: "https://code.visualstudio.com/docs/editor/integrated-terminal" }, "Integrated Terminal"),
                  createTextVNode(" has great multi-terminal support you can toggle between the editor and terminal with "),
                  createVNode("code", null, "Ctrl+"),
                  createTextVNode(" or open a new Terminal Window with "),
                  createVNode("code", null, "Ctrl+Shift+`"),
                  createTextVNode(" to run the "),
                  createVNode("code", null, "/ui"),
                  createTextVNode(" dev server with:")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, "$ npm run dev\n")
                ]),
                createVNode("p", null, "Then in a new Terminal Window, start a new watched C# .NET Server build with:"),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, "$ dotnet watch\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("With both projects started you can open and leave a browser tab running at "),
                  createVNode("code", null, "http://localhost:3000"),
                  createTextVNode(" where it will automatically reload itself at every "),
                  createVNode("code", null, "Ctrl+S"),
                  createTextVNode(" save point.")
                ]),
                createVNode("p", null, "When you\u2019re ready to preview a development build of the Client UI in your .NET App, run:"),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, "$ npm run build:local\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("Which will publish your Vue 3\u2019s App static assets to the .NET App\u2019s "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" where it can be previewed from "),
                  createVNode("code", null, "https://localhost:5001"),
                  createTextVNode(".")
                ]),
                createVNode("h3", null, "Using Visual Studio"),
                createVNode("a", {
                  href: "https://code.visualstudio.com/",
                  title: "Visual Studio",
                  class: "sm:float-left mr-8"
                }, [
                  createVNode(_component_LogosVisualStudio, {
                    class: "w-24 h-24",
                    style: { "margin-top": "1rem" }
                  })
                ]),
                createVNode("p", null, "As your C# project grows you\u2019ll want to consider running the back-end C# Solution with Visual Studio .NET with its much improved intelli-sense, navigation, tests runner & debug capabilities."),
                createVNode("p", null, [
                  createTextVNode("As we\u2019ve never had a satisfactory experience trying develop npm SPA projects with VS.NET, we\u2019d recommend only running the C# "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" project in VS.NET and continuing to use VSCode for "),
                  createVNode("code", null, "/ui"),
                  createTextVNode(" project.")
                ]),
                createVNode("h3", null, "Deploying to Production"),
                createVNode("p", null, "When you\u2019re ready to deploy your App you can create a production build with:"),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-bash" }, "$ npm run publish\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to "),
                  createVNode("code", null, "/wwwroot"),
                  createTextVNode(" to be deployed together with your complete .NET App.")
                ]),
                createVNode("p", null, [
                  createTextVNode("Our recommendation for the best possible responsive UX is to deploy your App\u2019s "),
                  createVNode("code", null, "/wwwwroot"),
                  createTextVNode(" static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.")
                ]),
                createVNode("p", null, [
                  createTextVNode("To do this configure the production url the UI should use for all its "),
                  createVNode("code", null, "/api"),
                  createTextVNode(" Ajax requests by modifying "),
                  createVNode("code", null, "DEPLOY_API"),
                  createTextVNode(" in your "),
                  createVNode("code", null, "vite.config.ts"),
                  createTextVNode(":")
                ]),
                createVNode("pre", null, [
                  createVNode("code", { class: "language-csharp" }, "const DEPLOY_API = 'https://vue-ssg-api.jamstacks.net'\n")
                ]),
                createVNode("p", null, [
                  createTextVNode("This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout "),
                  createVNode("a", { href: "/posts/deploy" }, "GitHub Actions Deployments"),
                  createTextVNode(".")
                ]),
                createVNode("h3", null, "Get Started"),
                createVNode("p", null, "Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that\u2019s used to power its type-safe & productive intelli-sense dev UX."),
                createVNode("p", null, [
                  createTextVNode("If you\u2019re new to Vue 3 a good place to start is "),
                  createVNode("a", { href: "https://v3.vuejs.org/api/sfc-script-setup.html" }, "Vue 3 composition APIs in SFC")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/vs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var vs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/posts/vs.md"]]);
var vs$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": vs
});
export { createApp };
