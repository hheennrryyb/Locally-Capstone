import Stripe from 'stripe'

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body.cartItems)
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1Ln54bLlZYWNzKpFcyMqaYkN' },
                    { shipping_rate: 'shr_1Ln55OLlZYWNzKpFc6Kw6mqC' },
                    { shipping_rate: 'shr_1Ln564LlZYWNzKpFPrhiEGJn' },
                ],
                line_items: req.body.map((item) => {
                    const img = item.image[0].asset._ref
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/aiy4ifzh/production/').replace('-web', '.webp').replace('-jpeg', '.jpeg').replace('-png', '.png');
                    console.log(newImage)

                    return {
                        price_data: {
                            currency: 'cad',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),

                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,

            }
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session)
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

