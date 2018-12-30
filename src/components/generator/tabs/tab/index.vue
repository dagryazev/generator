<template lang="html">
  <div class="container">
    <div class="row">
      <div class="card" style="width: 8rem;" v-for="item in $store.getters.getSelectedArrayCategory">
        <img class="card-img-top" :src="item.image" @click="$store.dispatch('setCategory', item._id)">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6" v-for="item in $store.getters.getSelectedArray">
        <img :src="item.image" @click="$store.dispatch('setFrame', item._id)" class="img-thumbnail" :class="{ active: $store.getters.DetailsUser.bagetInfo._id == item._id}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabComponent"
}
</script>

<style lang="css">
img.active{
  opacity: .5;
}
</style>
