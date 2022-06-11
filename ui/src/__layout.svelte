<!--<script context='module'>-->

<!--    console.log(" before auth layout load");-->

<!--    export function load({session}) {-->
<!--        console.log("session", session);-->
<!--        if (session.user) {-->
<!--            return {-->
<!--                status: 302,-->
<!--                redirect: '/home'-->
<!--            }-->
<!--        }-->
<!--        return {-->
<!--            props: {-->
<!--                token: session.token,-->
<!--                username: session.user.username-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<script lang="ts">
    import '../app.css';

    // export let caption = '';
</script>

<slot class="bg-accent"/>

<style>
</style>
