<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea 
    placeholder="¿Que sucedió hoy?"
    
    ></textarea>
  </div>
  <ButtonFab icon="fa-save"/>

  <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="entry-picture"
    class="img-thumbnail"
  >
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    ButtonFab: defineAsyncComponent(() => import('../components/ButtonFab.vue'))
  }

}
</script>

<style lang="scss" scoped>

textarea{
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus{
    outline: none;

  }
}
img{
  width: 200px;
  position: fixed;
  bottom:150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2)
}


</style>