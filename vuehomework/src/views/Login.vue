<template>
<div class="login">
<section>
    <div>Welcome to postIt!</div>
    <p>Create an account</p>
    <p>Or</p>
    <form action="index.html" method="POST" class="valgekast">
        <div>Please Log In</div>
        <input type="text" placeholder="Email" name="Email" id="">
        <input type="text" placeholder="Password" name="password" id="">
    </form>
    <div>
        <router-link to="/posts">Login</router-link>
    </div> 
    <div>
        <router-link to="@/assets/logoHW.png">Forgot password</router-link>
    </div>
</section>
</div>
</template>

<style scoped src="@/assets/styles/teine.css">
</style>