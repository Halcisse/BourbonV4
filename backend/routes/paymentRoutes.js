// import { Router } from 'express';
// const router = Router();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// router.post('/create-payment-intent', async (req, res) => {
//   const { amount } = req.body;
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount,
//     currency: 'usd',
//   });
//   res.json({ clientSecret: paymentIntent.client_secret });
// });

// export default router;

import { Router } from 'express';
const router = Router();
import  stripe from 'stripe';

// (process.env.STRIPE_SECRET_KEY)

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
