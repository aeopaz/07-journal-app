<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>
    <ButtonFab icon="fa-plus"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {

    components:{
        ButtonFab:defineAsyncComponent(()=>import('../components/ButtonFab.vue'))
    }

}
</script>

<style lang="scss" scoped>

div{
    height: 100%;
}

</style>