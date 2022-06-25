<script>
    import "../../app.css";
    import NavBar from "$lib/components/NavBar.svelte";


    let drawerToggle = false;
    const handleDrawerToggle = () => {
        drawerToggle = !drawerToggle;
    }

</script>
<NavBar on:click={handleDrawerToggle}/>
<div class="drawer drawer-mobile">
    <input id="my-drawer" type="checkbox" bind:checked={drawerToggle} class="drawer-toggle">
    <div class="drawer-content flex flex-col items-center  justify-center bg-gradient-to-r from-green-200 via-green-400 to-purple-700">
        <!-- Page content here -->
        <slot/>

    </div>
    <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><a href="#/"> Sidebar Item 1</a></li>
            <li><a href="#/"> Sidebar Item 2</a></li>
        </ul>

    </div>
</div>
