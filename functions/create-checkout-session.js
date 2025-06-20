exports.handler = async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",                    // ← change this
      line_items: [{ price: process.env.STRIPE_PRICE_ID }],  // ← drop `quantity`
      success_url: `${process.env.URL}/?paid=true`,
      cancel_url:  `${process.env.URL}`
    });
    return { statusCode: 200, body: JSON.stringify({ sessionId: session.id }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
