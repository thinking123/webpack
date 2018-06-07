<template>
    <div>
        <div>
            <div v-for="item in items" :key="item" class="item">
                {{item}}
            </div>
        </div>
        <div>
            <button @click="handleClick">
                click
            </button>
        </div>

    </div>
</template>

<script>
    import * as fun  from '@/es2015'
    export default {
        name: 'App',
        data(){
            return {
                items:['es6','webpack']
            }

        },
        methods:{
            handleClick(){
                alert('click')
            }
        }
    }
</script>

<style scoped lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

.item{
    height: 100px;
    background-color: blueviolet;
    color: yellow;
}


</style>
