<template>
<div class="contactus">
<contactCompo> </contactCompo>
</div>
</template>

<script>
import contactCompo from "@/components/contactCompo.vue"
export default {
    name: "Contacts",
    components: {contactCompo},
    data(){
        return{
            contactsList:[
                {id: 1, name: "jfjfj", email: "kjdj", telephone: "232123"},
                {id: 2, name: "gjkdi", email: "kfja", telephone: "346926"}
            ]
        }
    }
}
</script>