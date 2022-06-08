<script>
    import "../app.css";
</script>

<slot/>

<div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col items-center justify-center linear-gradient(to right bottom, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))">
        <!-- Page content here -->
        <slot/>
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

    </div>
    <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><a href="#/"> Sidebar Item 1</a></li>
            <li><a href="#/"> Sidebar Item 2</a></li>
        </ul>

    </div>
</div>
