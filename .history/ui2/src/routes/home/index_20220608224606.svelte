<script>
    import {themeChange} from "theme-change";
    import {onMount} from "svelte";

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
        themeChange(false);
    });
</script>

<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
    <div class="card-body">
        <span class="font-bold text-lg">8 Items</span>
        <span class="text-info">Subtotal: $999</span>
        <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
        </div>
    </div>
</div>
<!--        </div>-->
<div class="dropdown dropdown-left">
    <div tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" alt="space"/>
        </div>
    </div>
    <div tabindex="0" class="menu menu-compact dropdown-content mt-10 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
                    <span class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </span>
        </li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
        <li>
            <div class="">Theme</div>
            <!--                    <ThemeSwitcher/>-->
            <!--                    <ul class="dropdown-left dropdown">-->
            <!--                        <li><a href="/#">Submenu 1</a></li>-->
            <!--                        <li><a href="/#">Submenu 2</a></li>-->
            <!--                        -->
            <!--                    </ul>-->
        </li>
    </div>
</div>
<!--</div>-->
<!--</div>-->
