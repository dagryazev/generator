<template lang="html">
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Ширина</span>
      </div>
      <input type="text" v-model="width" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Высота</span>
      </div>
      <input type="text" v-model="height" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupFileAddon01">Загрузить</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile01" @change="uploadImage($event)" aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">Файл</label>
      </div>
    </div>
    <button type="button" @click="$store.commit('canvasRender')" name="button">Обновить</button>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" :class="{ active: $store.state.selectedTab == 'Frame'}" href="#" @click="$store.dispatch('setTab', 'frame')">Рама</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ active: $store.state.selectedTab == 'Paspartu'}" href="#" @click="$store.dispatch('setTab', 'paspartu')">Паспарту</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ active: $store.state.selectedTab == 'Back'}" href="#" @click="$store.dispatch('setTab', 'back')">Задник</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ active: $store.state.selectedTab == 'Accessories'}" href="#" @click="$store.dispatch('setTab', 'accessories')">Фурнитура</a>
    </li>
  </ul>
  <TabComponent></TabComponent>
  </div>
</template>

<script>
import TabComponent from './tab'
export default {
  name: "TabsComponent",
  components: {
    TabComponent
  },
  computed: {
    width: {
      get () {
        return this.$store.state.user_width
      },
      set (value) {
        this.$store.commit('updateWidth', value)
      }
    },
    height: {
      get () {
        return this.$store.state.user_height
      },
      set (value) {
        this.$store.commit('updateHeight', value)
      }
    }
  },
  methods: {
    uploadImage(event){
      const image = new FormData()
      image.append('files', event.target.files[0])
      fetch("http://localhost:8000/uploadimage/", {
        method: "POST",
        body: image
      })
      .then(response => response.json())
      .then(file => {
        this.$store.dispatch("setFileName", file.fileName)
      })
    }
  }
}
</script>

<style lang="css">
li{
  margin: 0px 7px;
}
</style>
