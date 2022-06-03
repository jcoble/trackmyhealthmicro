🌞
<script>
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  // let theme = '';
  // (function() {
  // 	const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  // 	const setting = localStorage.getItem('data-choose-theme') || 'auto'
  // 	if (setting === 'dark' || (prefersDark && setting !== 'light'))
  // 		document.documentElement.classList.toggle('dark', true)
  // 	else if (setting === '' && window.matchMedia('(prefers-color-scheme: light)').matches)
  // 		document.documentElement.classList.toggle('dark', true)
  // })()


  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
  });


</script>


<div class="navbar mb-2 shadow-lg rounded-box">
  <div class="flex-none px-2 mx-2"><span class="text-lg font-bold"> daisyUI </span></div>
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch hidden lg:flex"><a class="btn btn-ghost btn-sm rounded-btn"> Home </a><a
      class="btn btn-ghost btn-sm rounded-btn"> Portfolio </a><a class="btn btn-ghost btn-sm rounded-btn"> About </a><a
      class="btn btn-ghost btn-sm rounded-btn"> Contact </a></div>
  </div>
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <div class="dropdown dropdown-end">
        <div tabindex="0" class="m-1 btn">Change Color</div>
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52" data-choose-theme="">
          <li><a data-set-theme="masum">Masum</a></li>
          <li><a data-set-theme="emerald">emerald</a></li>
          <li><a data-set-theme="light">light</a></li>
          <li><a data-set-theme="dark">dark</a></li>
          <li><a data-set-theme="cupcake">cupcake</a></li>
          <li><a data-set-theme="bumblebee">bumblebee</a></li>
          <li><a data-set-theme="aqua">aqua</a></li>
          <li><a data-set-theme="corporate">corporate</a></li>
          <li><a data-set-theme="synthwave">synthwave</a></li>
          <li><a data-set-theme="retro">retro</a></li>
          <li><a data-set-theme="cyberpunk">cyberpunk</a></li>
          <li><a data-set-theme="valentine">valentine</a></li>
          <li><a data-set-theme="halloween">halloween</a></li>
          <li><a data-set-theme="garden">garden</a></li>
          <li><a data-set-theme="forest">forest</a></li>
          <li><a data-set-theme="lofi">lofi</a></li>
          <li><a data-set-theme="pastel">pastel</a></li>
          <li><a data-set-theme="fantasy">fantasy</a></li>
          <li><a data-set-theme="wireframe">wireframe</a></li>
          <li><a data-set-theme="black">black</a></li>
          <li><a data-set-theme="luxury">luxury</a></li>
          <li><a data-set-theme="dracula">dracula</a></li>
          <li><a data-set-theme="cmyk">cmyk</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           class="inline-block w-6 h-6 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </button>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           class="inline-block w-6 h-6 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </button>
  </div>
</div>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
