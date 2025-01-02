<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Bienvenue dans notre boutique !</h1>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="product.image" :alt="product.name" />
              </figure>
            </div>
            <div class="card-content">
              <h2 class="title is-5">{{ product.name }}</h2>
              <p class="subtitle is-6">{{ product.price.toFixed(2) }} €</p>
              <router-link :to="`/product/${product.id}`" class="button is-primary">
                Voir le produit
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="createProduct">
      <h2>Creer un produit</h2>
      <br><br>

      <div class="field ">
        <div class="control ">
          <label class="label">Nom du produit</label>
        </div>
        <div class="field-body">
          <div class="field">

            <input class="input" type="text" placeholder="Nom du produit">

            <br>
          </div>
        </div>
      </div>
      <div class="field ">
        <div class="control ">
          <label class="label">Prix au kilo </label>

        </div>
        <div class="field-body">
          <div class="field">

            <input class="input" type="number" placeholder="Prix au kilo">

            <br>
          </div>
        </div>
      </div>
      <div class="field ">
        <div class="control ">
          <label class="label">Poids maximum</label>
        </div>
        <div class="field-body">
          <div class="field">

            <input class="input" type="number" placeholder="Poids max">

            <br>
          </div>
        </div>
      </div>
      <div class="field ">
        <div class="control ">
          <label class="label">Description</label>
        </div>
        <div class="field-body">
          <div class="field">

            <input class="input" type="text" placeholder="Description">

            <br>
          </div>
        </div>
      </div>

      <div class="field ">
        <div class="control ">
          <label class="label">Image</label>
        </div>
        <div class="field-body">
          <div class="field">

            <input class="input" type="text" placeholder="Image">

            <br>
          </div>
        </div>
      </div>
      <input @submit="CreateProduct()" type="submit" class="button is-medium is-fullwidth"></input>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:5173/api/ProductRoutes/');
      this.products = await response.json();
    } catch (error) {

      console.error('Erreur lors de la récupération des produits :', error);
    }
  },
};
function CreateProduct(){

}
</script>

<style scoped>
button {
  color: red;
  width: 60px;
}
</style>