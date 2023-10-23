eslint-disable-next-line
<template>
  <div>
    <NavBar />
    <RouterView :productsList="productsList" :addItem="addItem" :edit="editItem"  :remove="removeItem"/>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComp.vue'
import ProductDataService from '@/services/ProductDataService'

export default {
  components: {
    NavBar,
    FooterComponent
  },
  data () {
    return {
      showSideBar: false,
      productsList: []
    }
  },
  methods: {
    editItem (editedItem) {
      const id = editedItem.id
      this.productsList = this.productsList.map((product) =>
        product.id === id ? editedItem : product
      )
    },
    addItem (data) {
      this.productsList.push(data)
    },
    removeItem (id) {
      this.productsList = this.productsList.filter(item => item.id !== id)
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        // hamishe response ke az bachend miad, dar ghesmate data , dadeha ja darand.
        this.productsList = response.data
        console.log(this.productsList)
      })
  }
}
</script>

<style>
/*  styles  */
</style>
