<script lang="ts">
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let parallax: Parallax | null = null;
	export let visible = false;
	onMount(() => {
		visible = true;
	});
	// let disabled = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
	// const url2 = '/';
</script>

<Parallax
	sections="3"
	class="bg-conic-to-l from-yellow-500 via-purple-500 to-blue-500"
	bind:this={parallax}
>
	<ParallaxLayer
		offset="0"
		rate="1"
		span="2"
		class="bg-gradient-to-b from-purple-700 to-fuchsia-600"
	/>
	<ParallaxLayer offset="0" rate="0.5" style="opacity: 0.2;">
		<img
			src="/meds/medicine-svgrepo-com (9).svg"
			alt=""
			style="display: block; width: 20%; margin-left: 70%;"
		/>
		<img
			src="/meds/medicine-svgrepo-com (6).svg"
			alt=""
			style="display: block; ; width: 20%; margin-left: 20%; margin-top: 10%;"
		/>
	</ParallaxLayer>
	<ParallaxLayer offset="1" rate="1" span="2" class="bg-gradient-to-b from-cyan-800 to-rose-300" />
	<ParallaxLayer
		offset="2"
		rate="1"
		class="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
	/>

	<ParallaxLayer
		offset="0"
		rate="0"
		span="3"
		style="background-image: url('/star-6.7s-1084px (1).svg') ; background-size: auto; opacity:.2"
	/>

	<ParallaxLayer offset="1.2" rate="0">
		<img src="/health-symbolorig.svg" alt="" style="width: 25%; margin-left: 10%;opacity:.5;" />
	</ParallaxLayer>

	<ParallaxLayer offset="1" rate="0.8" style="opacity: 0.1; ;">
		<!--        -->
		<img
			src="/meds/medicines-medicine-svgrepo-com.svg"
			alt=""
			style="display: block; width: 20%; margin-left: 15%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="1.75" rate="0.5" style="opacity: 0.2;">
		<img
			src="/meds/medicine-svgrepo-com (9).svg"
			alt=""
			style="display: block; width: 20%; margin-left: 70%;"
		/>
		<img
			src="/meds/medicine-svgrepo-com (6).svg"
			alt=""
			style="display: block; width: 20%; margin-left: 40%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="1" rate="0.2" style="opacity: 0.3;">
		<img
			src="/meds/medicine-svgrepo-com (9).svg"
			alt=""
			style="display: block; width: 10%; margin-left: 10%;"
		/>
		<img
			src="/meds/medicine-svgrepo-com (6).svg"
			alt=""
			style="display: block; width: 20%; margin-left: 75%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="1.6" rate="-0.1" style="opacity: 0.4;">
		<img
			src="/meds/medicine-svgrepo-com (4).svg"
			alt=""
			style="display: block; width: 20%; margin-left: 60%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="2.1" rate="0.6" style="opacity: 0.3;">
		<img
			src="/measurements/temperature-svgrepo-com.svg"
			alt=""
			style="display: block; width: 20%; margin-left: 5%;"
		/>
		<img
			src="/measurements/sphygmomanometer-blood-pressure-gauge-svgrepo-com.svg"
			alt=""
			style="display: block; width: 15%; margin-left: 75%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="2.6" rate="0.4" style="opacity: 0.3;">
		<img
			src="/measurements/test-tube-svgrepo-com.svg"
			alt=""
			style="display: block; width: 20%; margin-left: 5%;"
		/>
		<img
			src="/measurements/test-tube-svgrepo-com (2).svg"
			alt=""
			style="display: block; width: 15%; margin-left: 75%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer
		offset="2.5"
		rate="-0.4"
		style="display: flex; align-items: center; justify-content: center;"
	>
		<img src="/measurements/pulse-svgrepo-com (1).svg" alt="" class="w-46 md:w-72" />
	</ParallaxLayer>

	<ParallaxLayer
		offset="2"
		rate="-0.3"
		style="display: flex; align-items: center; justify-content: center;"
	>
		<img
			src="/measurements/blood-drop-svgrepo-com.svg"
			alt=""
			style="height: 40%; max-width: 40%; opacity: .5;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="0" rate=".5" class="mt-14">
		<div class="flex flex-col items-center text-center">
			<p class="mb-10 font-serif text-6xl leading-none tracking-tight text-white">
				Track My Health
			</p>
			<p class="font-serif text-2xl leading-none tracking-tight text-white ">
				Start tracking your health today
			</p>
		</div>
	</ParallaxLayer>

	<!--    <ParallaxLayer-->
	<!--            offset=.2-->
	<!--            rate=.6-->
	<!--            class="text-center "-->
	<!--            style="display: flex; align-items: center; justify-content: center;"-->
	<!--    >-->
	<!--        <p class="pb-3 font-serif text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 md:text-5xl">-->
	<!--            <a href="/signup">Sign Up</a>-->
	<!--        </p>-->
	<!--        <p class="pb-3 ml-2 font-serif text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 md:text-5xl">-->
	<!--            Or-->
	<!--        </p>-->
	<!--        <p class="pb-3 ml-2 font-serif text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 md:text-5xl">-->
	<!--            <a href="/signin">Sign In</a>-->
	<!--        </p>-->
	<!--    </ParallaxLayer>-->

	<!--    <ParallaxLayer-->
	<!--            offset=0-->
	<!--            rate=0.3-->
	<!--            class="w-[12rem] md:h-72 w-[12rem] md:h-72"-->
	<!--            style="display: flex; flex-direction: column; flex-flow: column; align-items: flex-end; "-->
	<!--    >-->
	<!--        <img-->
	<!--                src='/health-main.svg'-->
	<!--                alt=''-->
	<!--                class="server w-[12rem] md:w-72 "-->
	<!--                style="cursor: pointer; align-self: flex-end;"-->
	<!--                on:click={() => parallax.scrollTo(2, {selector: '.bash'})}-->
	<!--                on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, {selector: '.bash'})}-->
	<!--                tabindex=1-->
	<!--        >-->
	<!--    </ParallaxLayer>-->

	<ParallaxLayer
		offset=".1"
		rate="0.1"
		style="display: flex;
                flex-direction: column-reverse;
                justify-content: space-evenly;
                align-items: center;;"
	>
		{#if visible}
			<div
				transition:fly={{ y: 200, duration: 2000 }}
				on:click={() => parallax.scrollTo(2, { selector: '.bash' })}
				on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, { selector: '.bash' })}
				tabindex="0"
			>
				<svg
					style="cursor: pointer;"
					class="server w-[12rem] md:w-36 stroke-cyan-500 fill-cyan-500"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.61 21.74C11.5115 21.7405 11.4138 21.7212 11.3228 21.6835C11.2318 21.6457 11.1492 21.5901 11.08 21.52L3.08 13.52C2.97524 13.4151 2.90392 13.2815 2.87503 13.1361C2.84615 12.9907 2.861 12.84 2.91771 12.7031C2.97442 12.5661 3.07045 12.449 3.19366 12.3666C3.31688 12.2842 3.46176 12.2401 3.61 12.24H6.92V3C6.92259 2.80189 7.00244 2.61263 7.14253 2.47253C7.28263 2.33244 7.47189 2.25259 7.67 2.25H15.67C15.8689 2.25 16.0597 2.32902 16.2003 2.46967C16.341 2.61032 16.42 2.80109 16.42 3V12.25H19.61C19.7613 12.2448 19.9103 12.2874 20.036 12.3718C20.1617 12.4562 20.2575 12.578 20.31 12.72C20.3668 12.8556 20.382 13.0051 20.3535 13.1494C20.325 13.2937 20.2541 13.4262 20.15 13.53L12.15 21.53C12.0791 21.6 11.9946 21.6548 11.9017 21.6909C11.8089 21.727 11.7096 21.7437 11.61 21.74ZM5.44 13.74L11.61 19.91L17.79 13.73H15.68C15.4809 13.7275 15.2906 13.648 15.1489 13.5081C15.0072 13.3683 14.9252 13.179 14.92 12.98V3.76H8.42V13C8.42 13.1989 8.34098 13.3897 8.20033 13.5303C8.05967 13.671 7.86891 13.75 7.67 13.75L5.44 13.74Z"
					/>
				</svg>
			</div>
		{/if}
		<!--        <img-->
		<!--                src='/arrow-down-svgrepo-com.svg'-->
		<!--                alt=''-->
		<!--                class="server w-[12rem] md:w-24 stroke-cyan-500"-->
		<!--                style="cursor: pointer;"-->
		<!--                on:click={() => parallax.scrollTo(2, {selector: '.bash'})}-->
		<!--                on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, {selector: '.bash'})}-->
		<!--                tabindex=0-->
		<!--        >-->
		<div class="mt-10 text-center">
			<p
				class="pb-3 font-serif text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 md:text-5xl"
			>
				<a href="/signup">Sign Up</a>
			</p>
			<p
				class="pb-3 ml-2 font-serif text-2xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-pink-200 md:text-3xl"
			>
				Or
			</p>
			<p
				class="pb-3 ml-2 font-serif text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 md:text-5xl"
			>
				<a href="/signin">Sign In</a>
			</p>
		</div>
	</ParallaxLayer>

	<ParallaxLayer
		offset="1"
		rate=".2"
		style="top: -200px; display: flex; align-items: center; justify-content: center;"
	>
		<div class="flex flex-col items-center text-center">
			<p class="mb-10 font-serif text-4xl leading-none tracking-tight text-white">
				Keep track of your meds
			</p>
			<p class="font-serif text-2xl leading-none tracking-tight text-white ">
				Increadibly easy to setup
			</p>
		</div>
	</ParallaxLayer>

	<ParallaxLayer
		offset="1"
		rate="0.1"
		style="display: flex; align-items: center; justify-content: center;"
	>
		<div
			on:click={() => parallax.scrollTo(3, { selector: '.clients-main' })}
			on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(3, { selector: '.clients-main' })}
			tabindex="0"
		>
			<svg
				class="bash stroke-fuchsia-400 fill-fuchsia-400"
				style="width: 70%;"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Health_notification_gadget">
					<path
						d="M149.6414,154.3365V88.7821a20.8523,20.8523,0,0,0-20.8282-20.8286H86.4607A20.8522,20.8522,0,0,0,65.6326,88.7821v65.5544A27.2645,27.2645,0,0,0,39.4138,181.578v81.9107A27.2644,27.2644,0,0,0,65.6326,290.73v72.6975a20.8522,20.8522,0,0,0,20.8281,20.8287h42.3525a20.8523,20.8523,0,0,0,20.8282-20.8287V290.73a27.2642,27.2642,0,0,0,26.2192-27.2414V181.578A27.2643,27.2643,0,0,0,149.6414,154.3365ZM86.4607,79.9535h42.3525a8.8382,8.8382,0,0,1,8.8282,8.8286V154.31H77.6326V88.7821A8.8381,8.8381,0,0,1,86.4607,79.9535Zm42.3525,292.3028H86.4607a8.8381,8.8381,0,0,1-8.8281-8.8287v-72.671h60.0088v72.671A8.8382,8.8382,0,0,1,128.8132,372.2563Zm31.6543-106.6416a9.7606,9.7606,0,0,1-9.75,9.7491H64.5564a9.7607,9.7607,0,0,1-9.75-9.7491V179.4523a9.7607,9.7607,0,0,1,9.75-9.7491H150.718a9.7606,9.7606,0,0,1,9.75,9.7491Z"
					/>
					<path
						d="M142.06,219.2431H125.63a8.6068,8.6068,0,0,0-7.9033,5.1884l-4.998,11.5337L103.73,204.4066a8.6139,8.6139,0,0,0-16.2607-.8891l-7.167,17.5874h-9.91a5,5,0,1,0,0,10H81.2336a8.5812,8.5812,0,0,0,7.9766-5.3633L95.2141,211.01l8.9609,31.4258a8.5241,8.5241,0,0,0,7.72,6.2338c.1972.0132.3945.02.59.02a8.5146,8.5146,0,0,0,7.8779-5.1895l6.1778-14.2563H142.06a5,5,0,0,0,0-10Z"
					/>
					<path
						d="M107.6375,335.6553a8.4625,8.4625,0,1,0,8.4624,8.4625A8.4627,8.4627,0,0,0,107.6375,335.6553Z"
					/>
					<path
						d="M107.6375,307.5226a8.4625,8.4625,0,1,0,8.4624,8.4625A8.4627,8.4627,0,0,0,107.6375,307.5226Z"
					/>
					<path
						d="M377.9553,218.5972c-1.22-4.71-2.29-9.45-3.05-14.24a28.2655,28.2655,0,0,0-20.76-22.83h0v-3.4457a7.2029,7.2029,0,1,0-14.4058,0v3.4948l-.0039.0009a28.2432,28.2432,0,0,0-20.36,21.58c-1.05,5.16-2.11,10.33-3.38,15.44-.1.42-.4,1.5-.77,2.84h63.49C378.3455,220.0772,378.0554,218.9772,377.9553,218.5972Z"
					/>
					<path
						d="M383.0857,229.5472h-1v.03h-71.23v-.03h-.07a7.2,7.2,0,0,0,0,14.4h15.2993a20.86,20.86,0,0,0,41.7051,0h15.2959a7.2,7.2,0,0,0,0-14.4Zm-36.1484,22.705a8.8859,8.8859,0,0,1-8.8526-8.305H355.79A8.8859,8.8859,0,0,1,346.9373,252.2522Z"
					/>
					<path d="M415.1946,332.7309H281.7317a6,6,0,0,0,0,12H415.1946a6,6,0,1,0,0-12Z" />
					<path d="M415.1946,357.1806H281.7317a6,6,0,1,0,0,12H415.1946a6,6,0,0,0,0-12Z" />
					<path
						d="M408.636,126.17a37.4121,37.4121,0,1,0,37.4121,37.4121A37.4543,37.4543,0,0,0,408.636,126.17Zm0,62.8242a25.4121,25.4121,0,1,1,25.4121-25.4121A25.4121,25.4121,0,0,1,408.636,188.994Z"
					/>
					<path
						d="M420.7922,157.6908h-6.457v-6.4565a5.5,5.5,0,1,0-11,0v6.4565h-6.456a5.5,5.5,0,0,0,0,11h6.456v6.4566a5.5,5.5,0,1,0,11,0v-6.4566h6.457a5.5,5.5,0,0,0,0-11Z"
					/>
					<path
						d="M441.3533,41.1183H255.573A31.2327,31.2327,0,0,0,224.3406,72.351v145.8H197.3879a6,6,0,0,0,0,12h26.9527V439.6491a31.2326,31.2326,0,0,0,31.2324,31.2326h185.78a31.2327,31.2327,0,0,0,31.2329-31.2326V72.351A31.2328,31.2328,0,0,0,441.3533,41.1183ZM366.88,56.7351h11.29a6,6,0,0,1,0,12H366.88a6,6,0,0,1,0-12Zm-48.124,0h28.2256a6,6,0,0,1,0,12H318.7561a6,6,0,0,1,0-12ZM456.198,435.2592a17.95,17.95,0,0,1-17.95,17.95H258.679a17.95,17.95,0,0,1-17.95-17.95V230.1513h31.13a75.8218,75.8218,0,0,0,150.73-4.3657,6,6,0,1,0-11.9648-.9112,63.83,63.83,0,1,1-63.6426-68.7471,6,6,0,0,0,0-12A75.9022,75.9022,0,0,0,271.2,218.1513H240.7288V101.4331a17.95,17.95,0,0,1,17.95-17.95H438.2478a17.95,17.95,0,0,1,17.95,17.95Z"
					/>
				</g>
			</svg>
		</div>
	</ParallaxLayer>

	<ParallaxLayer
		offset="2"
		rate=".2"
		style="top: -200px; display: flex; align-items: center; justify-content: center;"
	>
		<div class="flex flex-col items-center text-center">
			<p class="mb-10 font-serif text-4xl leading-none tracking-tight text-white">
				Keep measurements to show progress
			</p>
			<p class="font-serif text-2xl leading-none tracking-tight text-white ">
				Be your own motivation
			</p>
		</div>
	</ParallaxLayer>

	<ParallaxLayer
		offset="2"
		rate="-0"
		style="display: flex; align-items: center; justify-content: center;"
	>
		<img
			src="/measurements/pulse-svgrepo-com (3).svg"
			alt=""
			class="clients-main w-36 md:w-60"
			on:click={() => parallax.scrollTo(1, { selector: '.server' })}
			on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(1, { selector: '.server' })}
			tabindex="0"
		/>
	</ParallaxLayer>
</Parallax>

<style>
	:global(body) {
		padding: 0;
	}

	.server,
	.bash,
	.clients-main {
		cursor: pointer;
	}

	img:focus {
		outline: 1px dotted gray;
	}

	img:focus:not(:focus-visible) {
		outline: none;
	}

	svg:focus {
		outline: 1px dotted gray;
	}

	svg:focus:not(:focus-visible) {
		outline: none;
	}

	.server:focus-visible {
		outline: 2px dotted gray;
	}

	.bash:focus-visible {
		outline: 2px dotted purple;
	}

	.clients-main:focus-visible {
		outline: 2px dotted blue;
	}
</style>
