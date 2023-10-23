<template>
  <header class='d-flex justify-content-center py-3 bg-dark'>
    <nav class='nav nav-pills'>
      <router-link to='/' class='nav-link' :class='{ active: !activeLink.value }'
        @click='setActiveLink(!activeLink.value)'>
        Accueil
      </router-link>
      <router-link to='/produits' class='nav-link' :class='{ active: activeLink.value }'
        @click='setActiveLink(!activeLink.value)'>
        Produits
      </router-link>
      <!-- <li class="nav-item"><RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-link" to='/produits'>Add</RouterLink></li> -->

    </nav>
  </header>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const activeLink = ref(false)

    const setActiveLink = (value) => {
      activeLink.value = value
    }

    return {
      activeLink,
      setActiveLink
    }
  }
}
</script>
