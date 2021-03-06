import{_ as i}from"./MarkdownPage.dc833663.js";import{_ as s,a3 as o,o as r,f as u,w as d,b as e,i as t}from"./app.bac93db2.js";import"./AppBreadcrumb.7cb16fa5.js";import"./home.f4731c17.js";const p=e("div",{class:"markdown-body"},[e("p",null,"This template contains our essential recommendations for a modern Vue Single Page App optimal for both productivity and performance."),e("table",null,[e("thead",null,[e("tr",null,[e("th"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("a",{href:"https://vitejs.dev"},"Vite")]),e("td",null,"Modern typed API, Lighting fast reloads, optimal builds, growing ecosystem")]),e("tr",null,[e("td",null,[e("a",{href:"https://v3.vuejs.org"},"Vue3")]),e("td",null,"Elegant, composable reactive typed API that scales from small to large Apps")]),e("tr",null,[e("td",null,[e("a",{href:"https://tailwindcss.com"},"Tailwindcss")]),e("td",null,[t("Productive responsive-first utility-based css framework with growing "),e("a",{href:"https://tailwindcomponents.com"},"rich component ecosystem")])]),e("tr",null,[e("td",null,[e("a",{href:"https://www.typescriptlang.org"},"TypeScript")]),e("td",null,"Advanced type-safety, static analysis and richer IDE tooling")]),e("tr",null,[e("td",null,[e("a",{href:"https://iconify.design"},"Iconify")]),e("td",null,"Unified registry to access 100k+ high quality SVG icons from 100+ icon sets")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/markdown-it/markdown-it"},"Markdown")]),e("td",null,"Native Markdown integration with advanced featureset supporting embedding of HTML & Vue Components")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/antfu/vite-ssg"},"Vite SSG")]),e("td",null,"Server-side generation for Vue 3 on Vite")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/Kong/swrv"},"SWRV")]),e("td",null,"stale-while-revalidate library for Vue 3\u2019s composition API enabling optimal end-user UX for API integrations")]),e("tr",null,[e("td",null,[e("a",{href:"https://tailwindcss.com/docs/dark-mode"},"Dark Mode")]),e("td",null,"OS defined & user toggable dark mode")]),e("tr",null,[e("td",null,[e("a",{href:"https://pinia.esm.dev"},"Pinia")]),e("td",null,[t("Vue 3 Intuitive, TypeSafe Reactive State Management, checkout "),e("a",{href:"/todos"},"Todos")])]),e("tr",null,[e("td",null,[e("a",{href:"https://tailwindcss-typography.vercel.app"},"tailwind/typography")]),e("td",null,"Beautiful css typography for markdown articles & blog posts")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/tailwindlabs/tailwindcss-forms"},"tailwind/forms")]),e("td",null,"Beautiful css form & input styles that\u2019s easy to override with utilities")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/hannoeru/vite-plugin-pages"},"plugin/pages")]),e("td",null,"Conventional file system based routing for Vue 3 on Vite")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/JohnCampionJr/vite-plugin-vue-layouts"},"plugin/layouts")]),e("td",null,"Support for multiple page layouts")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/antfu/unplugin-vue-components"},"plugin/components")]),e("td",null,"Auto importing & registering of components on-demand")]),e("tr",null,[e("td",null,[e("a",{href:"https://github.com/antfu/unplugin-auto-import"},"plugin/auto-import")]),e("td",null,"Global imports in source files for reduced boilerplate")]),e("tr",null,[e("td",null,[e("a",{href:"https://docs.servicestack.net/auth"},"Authentication")]),e("td",null,"Simple, built-in flexible auth protected by route guards")]),e("tr",null,[e("td",null,[e("a",{href:"https://docs.servicestack.net/validation"},"Validation")]),e("td",null,"Auto form binding, submission, loading and validation")])])]),e("h2",null,"Vue Plugins"),e("p",null,[t("The Vite plugins registered in "),e("code",null,"vite.config.ts"),t(" improves productivity by adopting popular conventions that automating-away manual tasks & configurations.")]),e("h3",null,[e("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components")]),e("p",null,[t("For Auto Registering Vue Components, either "),e("code",null,".vue"),t(" SFC\u2019s, "),e("code",null,".md"),t(" Markdown components or Iconify\u2019s icons as Vue3 components.")]),e("pre",null,[e("code",{class:"language-ts"},`Components({
    extensions: ['vue', 'md'],
    include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],
    resolvers: [
        // auto import icons without any prefix
        IconsResolver({
            componentPrefix: ''
        }),
    ],
    dts: 'src/components.d.ts', // auto-gen type definitions
})
`)]),e("h3",null,[e("a",{href:"https://github.com/antfu/unplugin-icons"},"unplugin-icons")]),e("p",null,[t("For accessing "),e("a",{href:"https://icon-sets.iconify.design"},"thousands of Iconfigy\u2019s SVG icons"),t(" as Vue components "),e("strong",null,"on-demand"),t(" universally.")]),e("pre",null,[e("code",{class:"language-ts"},`Icons({ })
`)]),e("h3",null,[e("a",{href:"https://github.com/hannoeru/vite-plugin-pages"},"vite-plugin-pages")]),e("p",null,[t("For auto generating vue routing configurations for each Vue 3 component from "),e("a",{href:"https://github.com/hannoeru/vite-plugin-pages#file-system-routing"},"NuxtJS inspired File System Routing"),t(" conventions.")]),e("pre",null,[e("code",{class:"language-ts"},`Pages({
  dirs: [
    { dir: "src/pages", baseRoute: "posts" }, // at: /posts/*
    { dir: "src/views", baseRoute: "" },      // at: /*
  ],
  extensions: ['vue', 'md'],
  extendRoute(route:any) {
    // attach markdown frontmatter metadata to their routes
  },
})
`)]),e("h3",null,[e("a",{href:"https://github.com/antfu/vite-plugin-md"},"vite-plugin-md")]),e("p",null,[t("For enabling Markdown Support by converting each "),e("code",null,".md"),t(" document into a Vue Component that\u2019s rendered using "),e("a",{href:"https://github.com/markdown-it/markdown-it"},"markdown-it"),t(".")]),e("pre",null,[e("code",{class:"language-ts"},`Markdown({
    markdownItOptions: {
        // html: true,
    },
    markdownItSetup(md) {
        //md.use(markdownPlugin)
    },
    wrapperComponent: 'MarkdownPage'
})
`)]),e("h2",null,"App Features"),e("h3",null,"Stale While Revalidate"),e("p",null,[e("a",{href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),t(" is a popular UI pattern helps developers balance between immediacy\u2014loading cached content right away\u2014and freshness\u2014ensuring updates to the cached content are used in the future.")]),e("p",null,[t("This template includes a "),e("code",null,"swrClient"),t(" that provides a typed wrapper around "),e("a",{href:"https://github.com/Kong/swrv"},"Vue3\u2019s SWVR"),t(" library for making typed API Requests with ServiceStack\u2019s typed "),e("a",{href:"https://docs.servicestack.net/typescript-add-servicestack-reference"},"JsonServiceClient"),t(".")]),e("pre",null,[e("code",{class:"language-html"},`<template>
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
`)]),e("p",null,"This reactively sets up the UI to handle multiple states:"),e("ul",null,[e("li",null,[e("code",null,"loading"),t(" - displays the "),e("code",null,"loading..."),t(" message whilst API request is in transit")]),e("li",null,[e("code",null,"data"),t(" - when completed, populated with a "),e("code",null,"HelloResponse"),t(" and displayed")]),e("li",null,[e("code",null,"error"),t(" - when failed, populated with "),e("code",null,"ResponseStatus"),t(" and displayed")])]),e("p",null,[t("The primary UX benefits are realized when re-making an existing request in which a locally-cached "),e("em",null,"stale"),t(" version is immediately returned and displayed whilst a new API Request is made behind the scenes, which updates the UI when completed.")]),e("p",null,[t("Ultimately this provides the optimal end-user UX with the UI being immediately updated with "),e("em",null,"stale"),t(" results initially, before being re-updated with the latest UI when the new API Request is completed.")])],-1),c={setup(h,{expose:l}){const n={title:"Template Features",meta:[{property:"og:title",content:"Template Features"}]};return l({frontmatter:n}),o({title:"Template Features",meta:[{property:"og:title",content:"Template Features"}]}),(g,f)=>{const a=i;return r(),u(a,{frontmatter:n},{default:d(()=>[p]),_:1})}}};var k=s(c,[["__file","/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/features.md"]]);export{k as default};
