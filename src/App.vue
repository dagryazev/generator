<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <CanvasComponent></CanvasComponent>
        </div>
        <div class="col-5">
          <TabsComponent></TabsComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasComponent from "./components/canvas/"
import TabsComponent from "./components/generator/tabs/"
export default {
  name: 'app',
  components: {
    CanvasComponent,
    TabsComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
