import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Products from '@/views/ProductsView.vue'
import ProductDetail from '@/views/ProductDetailView.vue'
import CreateProduct from '@/views/CreateProductView.vue'
import EditProduct from '@/views/EditProductView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/create-product', name: 'createProduit', component: CreateProduct },
  { path: '/edit-product/:id', name: 'editProduit', component: EditProduct },
  { path: '/produits', name: 'produits', component: Products },
  { path: '/product-detail/:id', name: 'produitDetail', component: ProductDetail }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
