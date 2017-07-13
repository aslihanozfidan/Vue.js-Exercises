<template>
    <div class="preview">
        <ul>
            <li v-for="gif in gifs">
                <img :src="gif.images.fixed_height.url" />
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'gifs' ]
    }
</script>

<style>
    .preview ul{
        list-style: none;
        margin: 0px;   
        margin-top:20px;     
    }
        .preview ul li{
            float: left;
        }
            .preview ul li img{
                height: 150px;
                width: auto;
            }
</style>

