<template>
  <div class='d-flex flex-column justify-content-center align-items-center vh-100'>
    <h2 class='text-center mb-4'>Add produit</h2>
    <div class='col-lg-4'>
      <div v-if="!submitted">
        <form class='add-form shadow p-4 mt-4' @submit.prevent='onSubmit'>
          <div class='form-group'>
            <label for='nom' class='text-center'>name</label>
            <input id='nom' type='text' class='form-control' placeholder='add name' v-model='productInfo.name' />
          </div>
          <div class='form-group'>
            <label for='photo' class='text-center'>Photo</label>
            <input id='photo' type='text' class='form-control' placeholder='add photo link' v-model='productInfo.photo' />
          </div>
          <div class='form-group'>
            <label for='description' class='text-center'>description</label>
            <input id='description' type='text' class='form-control' placeholder='add date'
              v-model='productInfo.description' />
          </div>
          <div class='form-group'>
            <label for='prix' class='text-center'>prix</label>
            <input id='prix' type='text' class='form-control' v-model='productInfo.price' placeholder='add prix' />
          </div>
          <div class='form-group'>
            <label for='type' class='text-center'>category</label>
            <input id='type' type='text' class='form-control' v-model='productInfo.type' />
          </div>
          <!-- <input type='submit' class='btn btn-primary' value='save' /> -->
          <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="submitForm">Save </button>
        </form>
      </div>
      <div v-else>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong> {{ message }}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
      <div class='text-center mt-3'>
          <router-link to='/produits'>return</router-link>
        </div>
      <hr class="my-4">
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['addItem', 'edit'],
  data () {
    return {
      submitted: false,
      message: null,
      productInfo: {
        id: parseInt(this.$route.params.id),
        name: null,
        photo: null,
        description: null,
        price: null,
        type: null
      }
    }
  },
  methods: {
    submitForm () {
      ProductDataService.update(this.productInfo.id, this.productInfo)
        .then(response => {
          this.edit(this.productInfo)
          this.message = response.data.message
        }).catch(error => {
          this.message = error.message
          console.log(this.message)
        })
      this.submitted = true
    },
    newProduct () {
      this.product = {}
      this.submitted = false
    }
  },
  mounted () {
    ProductDataService.getProduct(this.productInfo.id)
      .then(response => {
        this.productInfo = response.data
      })
  }
}
</script>
