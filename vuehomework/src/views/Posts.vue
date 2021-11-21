<template>
<div class="posts">
    <header>
        <div><img src="../assets/logoHW.png" alt="logo" class="small"></div>
        <div><form class="otsing">
            <input type="text" name="searchbar" placeholder="Search...">
            <button type="submit" name="Search" id="search">Search</button>
            </form>
        </div>
    
    </header>
</div>
<postsCompo> </postsCompo>
</template>

<script>
import postsCompo from "@/components/postsCompo.vue"
export default {
    name: "Posts",
    components: {postsCompo},
}
</script>

<style scoped src="@/assets/styles/algne.css">
</style>