<template>
    <body>
    <section>
        <div v-for="post in postsList" :key=post.id>
            <p class="grey"><img src="../assets/face.png" alt="face">{{post.creationTime}}</p>
			<img src="../assets/image1.jpg" alt="portal" class="big">
			<p>{{post.bodyOfPost}}</p>
            <button v-on:click="PlusLike">Likes: {{post.numberOfLikes}}</button>
		</div>
	</section>
    </body>
</template>

<script>
export default {
    name: "postsCompo",
    methods: {
        PlusLike: function() {
            this.$store.commit("PlusLike")
        },
    },
    computed:{
        postsList(){
            return this.$store.state.postsList
        }
    }
}
</script>

<style scoped>
* {
        font-family: Georgia;
        font-size: 18px;
    }
    
    body {
        background-image: linear-gradient(90deg, cornflowerblue 30%,cornflowerblue 0%, white 0%,white 70%, cornflowerblue 0%,cornflowerblue 30%);
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    .small { /*class selector*/
        height: 30px;
        width: 30px;
    }
    
    .big { /*class selector*/
        height: auto;
        width: 100%;
    }
    
    p > img { /*Child selector*/
        height: 30px;
        width: 30px;
    }
    
    body section { /*Descendant selector*/
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 5px grey;
        margin: 15px auto;
        width: 30%;
            align-items: auto, center;
    }
    
    div p { /*Descendant selector*/
        display: flex;
        justify-content: space-between;
    }
    
    .grey { /*Class selector*/
        color: grey;
    }
    
    .like { /*Class selector*/
        background: url("../assets/like.png");
        cursor: pointer;
        border-radius: 5px;
        width: 44px;
        height: 38px;
        align-self: flex-start;
    }
</style>