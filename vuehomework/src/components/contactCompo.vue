<template>
<section>
    <div class="item" v-for="c in contactsList" :key="c.id">
        <span>Name: {{c.name}} </span><br>
        <span>E-mail: {{c.email}} </span><br>
        <span>Telephone: {{c.telephone}} </span><br>
    </div>
</section>
</template>

<script>
export default {
    name: "contactCompo",
    computed:{
        contactsList(){
            return this.$store.state.contactsList
        }
    }
}
</script>

<style scoped>
* {
    background-color: cornflowerblue;
    font-family: Georgia;
	font-size: 19px;
}
.item {
    display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	padding: 50px 20px 20px;
	width: 20%;
	background-color: white;
}
span {
    background-color: white;
}
</style>