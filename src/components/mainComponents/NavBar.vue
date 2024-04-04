<template>
    <nav>
        <div class="flex_row_align logo">
            <p>Logo</p>
            <p>Boardgame</p>
        </div>
        <div class="flex_row_align router_link">
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/zombicide">Go to About</RouterLink>
        </div>

    </nav>

</template>

<style>
nav {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 6vh;
    background-color: #230C0F;
}

.router_link {
    margin-left: auto;
    margin-right: 1em;
}

.logo {
    margin-left: 1em;
    p{
        margin-right: 2em;
    }
}
</style>
