<template>
    <div class="user_item">       
        <router-link :to="profileLink">
            <p>{{user.name}} {{user.username}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'UserItem',
        props: {
            user: { type: Object, required: true }
        },
        computed: {
            profileLink() {
                return `/user/${this.user.id}`
            }
        }
    }
</script>