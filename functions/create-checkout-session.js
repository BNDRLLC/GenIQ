const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async () => {
  try {
    // create a free line item
    const session = await stripe.checkout.sessions.create({
      payment_method_collection: "if_required",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 0,                     // ← zero cost
            product_data: {
              name: "GenIQ Business Idea Generator",
              description: "Unlimited 10-step idea engine"
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.URL}/?paid=true`,
      cancel_url: `${process.env.URL}`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
