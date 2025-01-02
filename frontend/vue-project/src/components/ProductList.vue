<template>
    <div class="columns is-multiline">
      <div v-for="product in products" :key="product._id" class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src="product.image" :alt="product.name">
            </figure>
          </div>
          <div class="card-content">
            <p class="title">{{ product.name }}</p>
            <p>${{ product.price }}</p>
            <button class="button is-primary" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    async mounted() {
      const res = await axios.get('http://localhost:5000/api/products');
      this.products = res.data;
    },
    methods: {
      addToCart(product) {
        console.log('Add to cart:', product);
      },
    },
  };
  </script>
  