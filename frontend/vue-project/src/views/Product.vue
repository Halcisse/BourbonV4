<template>
  <div class="container">
    <section class="section">
      <div class="columns">
        <div class="column is-half">
          <figure class="image is-square">
            <img :src="product.image" :alt="product.name" />
          </figure>
        </div>
        <div class="column is-half">
          <h1 class="title">{{ product.name }}</h1>
          <p class="content">{{ product.description }}</p>
          <p class="subtitle"><strong>Prix :</strong> {{ product.price.toFixed(2) }} €</p>
          <div class="field">
            <label class="label" for="quantity">Quantité :</label>
            <div class="control">
              <input class="input" type="number" id="quantity" v-model.number="quantity" min="1" />
            </div>
          </div>
          <button @click="addToCart" class="button is-success">
            Ajouter au panier
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      quantity: 1,
    };
  },
  async created() {
    // const productId = this.$route.params.id;
    try {
      const response = await fetch(`http://localhost:5173/api/product`);
      this.product = await response.json();
      console.log(this.product)
    } catch (error) {
      console.error('Erreur lors de la récupération du produit :', error);
    }
  },
  methods: {
    addToCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProduct = cart.find(item => item.id === this.product.id);

      if (existingProduct) {
        existingProduct.quantity += this.quantity;
      } else {
        cart.push({ ...this.product, quantity: this.quantity });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Produit ajouté au panier !');
    },
  },
};
</script>
