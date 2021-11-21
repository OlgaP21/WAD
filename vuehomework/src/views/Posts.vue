<template>
    <header>
        <div><img src="../assets/logoHW.png" alt="logo" class="small"></div>
        <div><form class="otsing">
            <input type="text" name="searchbar" placeholder="Search...">
            <button type="submit" name="Search" id="search">Search</button>
            <button v-on:click="ResetLikes">Reset Likes</button>
            </form></div>
            <div class="dropdown">
            <button class="dropbtn"><img src="../assets/face.png" alt="" class="small"></button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="#">John Doe</a>
                  <a href="#">john.doe@example.com</a>
                </div>
            </div>
    </header>
<postsCompo> </postsCompo>
</template>

<script>
import postsCompo from "@/components/postsCompo.vue"
export default {
    name: "Posts",
    components: {postsCompo},
    methods: {
        ResetLikes: function() {
            this.$store.components("ResetLikes")
        }
    }
}
</script>

<style scoped src="@/assets/styles/algne.css">
</style>