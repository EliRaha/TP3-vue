/* eslint-disable */
<template>
  <div class='food'>
    <section class='py-5'>
      <div class='container px-4 px-lg-5 my-5'>
        <div class='row gx-4 gx-lg-5 align-items-center'>
          <div class='col-md-6'>
            <img class='card-img-top mb-5 mb-md-0' :src='product.photo'
              :alt='product.name' />
          </div>
          <div class='col-md-6'>
            <div class='small mb-1'>Code: {{ product.id }}</div>
            <h1 class='display-5 fw-bolder'>{{ product.name }}</h1>
            <div class='fs-5 mb-5'>
              <span class='text-decoration-line-through'></span>
              <span>$ {{ product.price }}</span>
            </div>
            <p class='lead'>{{ product.description }}</p>
            <p class=''>{{ product.type }}</p>
            <hr class="my-4">
            <div class='d-flex'>
                    <div class="d-flex">
                      <RouterLink :to="{name: 'editProduit', params: {id: product.id}}" class="btn btn-outline-primary mt-10">Edit</RouterLink>
                    </div>
                    <div class="d-flex">
                      <button class="btn btn-outline-danger smt-10" type="button" @click="deleteProduct">Delete</button>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['productsList', 'remove'],
  data () {
    return {
      submitted: false,
      message: null,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          // this.message = response.data.message
          this.remove(this.product.id)
          this.$router.push({ name: 'produits' })
        })
    }
  },
  mounted () {
    ProductDataService.getProduct(this.id)
      .then(response => {
        this.product = response.data
      })
  }
}
</script>
