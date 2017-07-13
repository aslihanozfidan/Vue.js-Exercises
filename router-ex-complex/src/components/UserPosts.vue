<template>
    <div class="user_posts">      
    <router-link :to="userLink">Back to user</router-link> 
        <template v-for="post in posts">
            <h4>{{post.title}}</h4>
            <p>{{post.body}}</p>
            <hr />
        </template>
        
        <router-link :to="postsLink">Posts</router-link>
    </div>
</template>

<script>
    export default {
        name: 'UserPosts',
        data() {
            return {
                posts: {}
            }
        },
        computed: {
            userLink() {
                return `/user/${this.$route.params.userId}`
            }
        },
        created() {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
             .then((res) => { return res.json() })
             .then((data) => { this.posts = data; })
        }
    }
</script>