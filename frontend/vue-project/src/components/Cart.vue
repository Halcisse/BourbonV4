<template>
    <div class="container">
      <section class="section">
        <h1 class="title">Mon panier</h1>
        <table class="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.price.toFixed(2) }} €</td>
              <td>{{ item.quantity }}</td>
              <td>{{ (item.price * item.quantity).toFixed(2) }} €</td>
              <td>
                <button 
                  class="button is-danger is-small" 
                  @click="removeFromCart(index)"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="cart.length > 0" class="has-text-right">
          <p class="subtitle"><strong>Total : {{ totalPrice.toFixed(2) }} €</strong></p>
          <router-link to="/checkout">
            <button class="button is-primary">Passer au paiement</button>
          </router-link>
        </div>
        <p v-else>Votre panier est vide.</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [],
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    created() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
    },
  };
  </script>
  