<template>
    <div>
      <h1>Paiement</h1>
      <form @submit.prevent="handlePayment">
        <div id="card-element"></div>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Traitement...' : 'Payer' }}
        </button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { loadStripe } from '@stripe/stripe-js';
  
  export default {
    data() {
      return {
        stripe: null,
        cardElement: null,
        error: '',
        loading: false,
      };
    },
    async mounted() {
      // Charger Stripe avec votre clé publique
      this.stripe = await loadStripe('pk_live_51QRbW3JqP5TQQmzjOpla4mNj0YEL2ttvmxS4rUeUPhgt8gt6lhfbrD78ZHpsx3dqv4J5K39XmONoOyXYHCYBoKSK00k5G9xQob'); 
      const elements = this.stripe.elements();
  
      // Créer un champ de carte
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
  
      // Gestion des erreurs dans le champ
      this.cardElement.on('change', (event) => {
        this.error = event.error ? event.error.message : '';
      });
    },
    methods: {
      async handlePayment() {
        this.loading = true;
        this.error = '';
  
        try {
          // Créez un paymentIntent depuis votre backend
          const { data } = await this.$axios.post('http://localhost:5000/api/payments/create-payment-intent', {
            amount: 1000, // Par exemple, 10,00 USD
          });
  
          // Confirmer le paiement avec Stripe
          const { error } = await this.stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
              card: this.cardElement,
            },
          });
  
          if (error) {
            this.error = error.message;
            this.loading = false;
          } else {
            alert('Paiement réussi !');
            this.loading = false;
          }
        } catch (err) {
          this.error = 'Une erreur est survenue lors du paiement.';
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style>
  #error {
    color: red;
  }
  </style>
  