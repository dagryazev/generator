import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrayCategoryFrame: [

    ],
    arrayCategoryPaspartu: {

    },
    arrayCategoryBack: {

    },
    arrayCategoryAccessories: {

    },
    arrayFrame:[

    ],
    user_width:      10,
    user_height:     10,
    user_bagetInfo:    {
      id: 1
    },
    user_paspartuInfo: {
      id: 2
    },
    user_image: "image.jpeg",
    selectedCategoryFrame: 1,
    selectedCategoryPaspartu: 1,
    selectedCategoryBack: 1,
    selectedCategoryAcсessories: 1,
    selectedTab: 'Frame',
    selectedCategory: 0,
    canvas: ''
  },
  getters: {
    DetailsUser(state) {
      return {
        width: state.user_width,
        height: state.user_height,
        bagetInfo: state.user_bagetInfo,
        user_paspartuInfo: state.user_paspartuInfo
      }
    },
    ArrayFrame(state) {
      return state.arrayFrame
    },
    getSelectedArrayCategory(state){
      return state[`arrayCategory${state.selectedTab}`]
    },
    getSelectedArray(state) {
      return state[`array${state.selectedTab}`]
    }
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    },
    canvas(state, query) {
      state.canvas = query
    },
    updateWidth(state, width) {
      state.user_width = parseInt( width ) || 0
    },
    updateHeight(state, height) {
      state.user_height = parseInt( height ) || 0
    },
    canvasRender(state) {

      fetch('http://localhost:8000/canvas/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          width: state.user_width,
          height: state.user_height,
          frame: state.user_bagetInfo._id,
          userImage: state.user_image
        })
      })
      .then(response => {
        return response.json()
      })
      .then(canvas => {
        state.canvas = canvas.response
      })
    }
  },
  actions: {
    setTab({ commit }, type) {
      const url = 'http://localhost:8000/categorii/type/' + type,
      t = type[0].toUpperCase() + type.slice(1)
      if( this.state[`arrayCategory${ t }`].length == 0)
        fetch(url)
        .then((response) => {
          return response.json()
        }).then(( item ) => {
          commit('set', { type: `arrayCategory${ t }`, items: item })
        })
      this.state.selectedTab = t
    },
    setCategory({ commit }, id) {
      const type = this.state.selectedTab,
            url = 'http://localhost:8000/' + type + '/category/' + id
      // if( this.state[`array${ type }`].length == 0)
        fetch(url)
        .then((response) => {
          return response.json()
        }).then(( item ) => {
          commit('set', { type: `array${ type }`, items: item })
        })
      this.state.selectedCategory = id
    },
    setFrame({commit}, id){
      const type = this.state.selectedTab,
            url = 'http://localhost:8000/' + type + '/' + id
        fetch(url)
        .then((response) => {
          return response.json()
        }).then(( item ) => {
          // this.state.detailsUser.bagetInfo = item
          const lastId = this.state.user_bagetInfo._id
          commit('set', { type: 'user_bagetInfo', items: item })
          if(lastId != item._id)
            commit('canvasRender')
        })
    },
    setFileName({commit}, fileName){
      commit('set', { type: 'user_image', items: fileName })
      commit('canvasRender')
    }
  }
})

export default store
