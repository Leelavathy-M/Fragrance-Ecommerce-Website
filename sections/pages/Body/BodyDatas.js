const BodyDatas = [
    {
        id:1,
        Title:'Japanese Cherry Blossom',
        img:'/images/Mist1.png',
        price:' ₹1699',
        Review:"★★★★☆ (4.1)",
        ml:"Quantity: 236ml",
        Des:"One of America's best-selling fragrances, Japanese cherry blossom is your little black dress fragrance: beautiful, timeless and undeniably feminine. Whether you lavishly splash or lightly spritz it, you'll fall in love at first mist. This carefully crafted bottle and sophisticated pump delivers great coverage while conditioning aloe mist nourishes skin for the lightest, most refreshing way to fragrance.",
        gender:'Body Mist',
    },
    {
        id:2,
        Title:"A Thousand Wishes",
        img:'/images/Lotion2.png',
        Review:"★★★★★ (4.6)",
        ml:"Quantity: 236ml",
        price:' ₹999',
        Des:'Warm your heart a thousand times over with our dazzling scent, A Thousand Wishes. Our dermatologist-tested Super Smooth Body Lotion provides 24 hours of nourishing moisture — guaranteed! Infused with shea butter, coconut oil and vitamin E, it absorbs quickly into skin to instantly moisturize after one use.',
        gender:'Body Lotion'
    },
    {
        id:3,
        Title:'Dark Kiss',
        img:'/images/Mist2.png',
        Review:"★★★★☆ (4.3)",
        ml:"Quantity: 236ml",
        price:' ₹1499',
        Des:"Scents your skin with a light-as-air-mist that's super layerable.  Black raspberry, burgundy rose, bergamot incense, dark vanilla bean and plum musk.",
        gender:'Body Mist'
    },
    {
        id:4,
        Title:"Victoria | Love Spell",
        img:'/images/Lotion3.png',
        price:' ₹999',
        Review:"★★★★★ (4.8)",
        ml:"Quantity: 236ml",
        Des:'Fruity Floral, Celebrate the collection that celebrates you. For every moment and every side of you, discover unique scents that embrace it all. Cherry blossom. Fresh peach. Impossible to resist.  ',
        gender:'Body Lotion'
    },
    {
        id:5,
        Title:'Cucumber Melon',
        img:'/images/Mist3.png',
        price:' ₹1299',
        Review:"★★★★★ (4.7)",
        ml:"Quantity: 236ml",
        Des:' smells like cool, sweet and just so classic. Fragrance crisp cucumber, watery honeydew, summer cantaloupe, sparkling grapefruit and sheer woods.',
        gender:'Body Mist'
    },
    {
        id:6,
        Title:"PINK  | Cucumber Water",
        img:'/images/Lotion7.png',
        Review:"★★★★☆ (4.3)",
        ml:"Quantity: 414ml",
        price:' ₹1699',
        Des:'A replenishing ultralight, gel-to-lotion moisturizer that absorbs in a flash. Feel fresh in your skin. Light, refreshing hydration with Cucumber Water and Hyaluronic Acid gives skin a dewy glow. Moisture- and mineral-rich, Cucumbers are up to 95% water and known for their cooling, soothing effect',
        gender:'Body Lotion'
    },
    {
        id:7,
        Title:'Saltwater Breeze',
        img:'/images/Mist4.png',
        Review:"★★★★★ (4.7)",
        ml:"Quantity: 236ml",
        price:' ₹799',
        Des:"Scents your skin with a light-as-air-mist that's super layerable. smells like Clean, fresh, coastal air. Fresh linen, violet leaves, water blossom and white musk.",
        gender:'Body Mist'
    },
    {
        id:8,
        Title:'Pink Super Berry',
        img:'/images/Lotion8.png',
        price:' ₹1999',
        Review:"★★★★★ (5.0)",
        ml:"Quantity: 335ml",
        Des:"Pink Super Berry by Victoria's Secret is a Aromatic Fruity fragrance for women. Hydrating skin care products is designed to keep your skin soft, smooth, and moisturized.",
        gender:'Body Lotion'
    },
    {
        id:9,
        Title:'Champagne Toast',
        img:'/images/Mist5.png',
        Review:"★★★★☆ (4.4)",
        ml:"Quantity: 236ml",
        price:' ₹1199',
        Des:"Champagne Toast Fine Fragrance Mist is the absolute best way to keep the scent going all day, every day. Lavishly splash or lightly spritz, either way, you'll fall in love at first mist. This carefully crafted bottle and sophisticated pump deliver great coverage while conditioning aloe mist nourishes skin for the lightest, most refreshing way to fragrance",
        gender:'Body Mist'
    },
    {
        id:10,
        Title:"Rose Water & Ivy",
        img:'/images/Lotion1.png',
        price:' ₹999',
         Review:"★★★★★ (4.6)",
        ml:"Quantity: 236ml",
        Des:'smells like: a fresh-cut rose bouquet. Scented with notes of: rose water, ivy and spring musk. Fragrance A fresh-cut blend of soft rose petals, rain-kissed ivy & creamy sandalwood. This true-to-life fragrance embodies everything wonderful about classic florals. With shea butter, coconut oil & vitamin E, our Super Smooth Body Lotion',
        gender:'Body Lotion'
    },
    {
        id:11,
        Title:"Bora Bora | Citrus Surf",
        img:'/images/Mist6.png',
        Review:"★★★★★ (4.5)",
        ml:"Quantity: 236ml",
        price:' ₹1199',
        Des:"Bora Bora Citrus Surf by Bath & Body Works is a Aromatic Aquatic fragrance for women and men. A fruity, islandy blend of sugared lemon, dewy waterfruit & vanilla bean",
        gender:'Body Mist'
    },
    {
        id:12,
        Title:"Victoria Secret-CandyBaby",
        img:'/images/Lotion4.png',
        price:' ₹899',
        Review:"★★★★☆ (4.2)",
        ml:"Quantity: 236ml",
        Des:"Victoria's Secret Candy Baby Body Fragrance Lotion is your newest addiction. Give in to delicious gourmands, sugared fruits and candied notes trending scents for a feel-good high. Smooth on your favorite lotion, then finish with Mist for a longer-lasting fragrance experience.",
        gender:'Body Lotion'
    },
    {
        id:13,
        Title:"Victoria | Sparkling Citrus",
        img:'/images/Mist7.png',
        Review:"★★★★☆ (4.4)",
        ml:"Quantity: 236ml",
        price:' ₹1299',
        Des:"Luscious Crush by Victoria's Secret is a Floral Fruity fragrance for women. a scent that awakens the senses with fresh tangerine and passionflower.   ",
        gender:'Body Mist'
    },
    {
        id:14,
        Title:"Cerave Moisturizing Lotion",
        img:'/images/Lotion5.png',
        price:' ₹2299',
        Review:"★★★★★ (4.6)",
        ml:"Quantity: 355ml",
        Des:"Purified Water, Glycerin, Caprylic/Capric Triglyceride, Behentrimonium Methosulfate And Cetearyl Alcohol, Ceteareth-20 And Cetearyl Alcohol, Ceramide 3, Ceramide 6-Ii, Ceramide 1, Hyaluronic Acid, Cholesterol, Dimethicone, Polysorbate 20, Polyglyceryl-3 Diisostearate, Potassium Phosphate, Dipotassium Phosphate, Sodium Lauroyl Lactylate, Cetyl Alcohol, Disodium Edta, Phytosphingosine, Methylparaben, Propylparaben, Carbomer, Xanthan GumFemale.",
        gender:'Body Lotion'
    },
    {
        id:15,
        Title:'Victoria Secret-CandyBaby',
        img:'/images/Mist0.png',
        Review:"★★★★☆ (4.5)",
        ml:"Quantity: 236ml",
        price:' ₹1499',
        Des:"Victoria’s Secret Candy Baby Body Fragrance Mist is your newest addiction. Give in to delicious gourmands, sugared fruits and candied notes trending scents for a feel-good high. Smooth on your favorite lotion, then finish with Mist for a longer-lasting fragrance experience. Fruity Warm. Mango explosion. Sugar swirl. Glazed over.",
        gender:'Body Mist'
    },
    {
        id:16,
        Title:"eos Shea Better",
        img:'/images/Lotion6.png',
        price:' ₹1999',
        Review:"★★★★★ (4.6)",
        ml:"Quantity: 473ml",
        Des:"SHEA BETTER BODY LOTION: Our sweet and nuzzly Vanilla Cashmere scent contains fragrance notes of whipped vanilla, soft musk and cozy caramel. eos 24-hour hydration body lotion is made with natural ingredients to leave your skin smooth from head-to-toe.sustainably-sourced 100% natural shea butter to make skin feel moisturized, protected and soft.",
        gender:'Body Lotion'
    }
]

export default BodyDatas;
