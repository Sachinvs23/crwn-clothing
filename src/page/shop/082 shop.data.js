const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://blondeandambitiousblog.com/wp-content/uploads/2019/01/january-2019-wide-brimmed-hat-9.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://www.headcovers.com/media/catalog/product/cache/ba642c93a0efc71830935b1d4e0de39d/m/e/mens-two-tone-knit-beanie-with-fleece-lining-winter-hats-for-men.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0089/1541/9195/products/ca1930-1_1024x.PNG?v=1605649088',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://cdna.lystit.com/photos/asos/5e811187/columbia-black-Bora-Bora-Booney-Fishing-Hat-In-Black.jpeg',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://urbanmenoutfits.com/wp-content/uploads/2018/10/how-to-wear-a-beanie-hat-for-men-14-800x800.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://cdn-images.farfetch-contents.com/palm-angels-palm-tree-cap_16240359_31191774_2048.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.pinimg.com/originals/bd/08/be/bd08be285de4bb8bf8ee0ad42a465f2a.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.pinimg.com/originals/a6/69/af/a669afdfbfa2d62a890b478a158e2af5.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1397/6923/products/SNAPBLUE1.jpg?v=1596194413',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://sneakernews.com/wp-content/uploads/2017/11/adidas-nmd-r1-primeknit-pitch-black-foot-locker-eu.jpg?w=780&h=550&crop=1',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://www.highsnobiety.com/static-assets/thumbor/J7R1i4h341FB41vQeQcMyq-iAhc=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2017/04/15163500/adidas-yeezy-guide-wave-runner-main-1.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1?fimg-ssr-default',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.pinimg.com/originals/4c/90/a9/4c90a902b65bc3995bae9d2f784cf256.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://footdistrict.com/media/resize/840x1050/catalog/product/1/8/180_196150292768/nike-air-force-1-mid-chocolate-dm0107-200-0.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://sneakernews.com/wp-content/uploads/2018/04/air-jordan-1-homage-to-home-release-info-2300-pairs-6.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.pinimg.com/736x/63/20/b0/6320b0f1bde85a51b98199a3cb643f8d.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.pinimg.com/564x/88/29/ae/8829aede3f2d3fe8de92f19b91f2b572.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://urbanmenoutfits.com/wp-content/uploads/2018/09/how-to-wear-a-denim-jacket-in-style-for-this-fall-03-534x800.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.pinimg.com/736x/d7/5a/b4/d75ab451f842c1ab752792e4002dba22.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.pinimg.com/736x/a2/67/23/a267230a6c0f3427bdba032681634edd.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.pinimg.com/736x/66/1e/39/661e39d2aac31147c75efe1515fe8d61.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'http://ladyinviolet.com/wp-content/uploads/2019/08/b-casual-outfit-blue-sleevless-top-gold-earrings-683x1024.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://aeo.imgix.net/img/app/product/3/315139-1453663.jpg?w=618&auto=format',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/HFXcfBzalyyk9A5hItG8ZjCB1Sk/0x101:1550x1651/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/03/09/009/n/1922564/2deefeb75e66cd7f573254.08633646_/i/Floral-Dresses-Amazon.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.pinimg.com/originals/d7/38/be/d738be6087642560833a8163d3df9ed6.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://allensolly.imgix.net/img/app/product/4/46385-110546.jpg?auto=format',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.pinimg.com/564x/01/1b/d6/011bd65b074c2d1564ffe8f173d09c69.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-91fa206f14cf0eae19b2600532bbcd49-pjlq',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.pinimg.com/474x/a6/c2/7d/a6c27dc50976a4ecdc13be7c33a7c9f2.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1Swa_owLD8KJjSszeq6yGRpXad/Mens-T-Shirts-Fashion-2019-Plant-Floral-Print-T-shirt-Brand-Short-Sleeve-T-Shirt-Men.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://cdn.lookastic.com/looks/long-sleeve-shirt-crew-neck-t-shirt-jeans-large-97915.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://www.clothingsupplier.com/madmext-powder-pink-colour-printed-t-shirt-for-men-4485-t-shirt-madmext-134755-37-B.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.pinimg.com/474x/96/03/cb/9603cba0c0bf41955e9ff420d82746aa--jean-jackets-denim-jackets.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://ce8a9656c.cloudimg.io/v7/https://blog.mensvector.com/img/6/m-mens-polka-dotted-shirt-black-jeans-chelsea-boots.jpg?w=414&force_format=webp&q=85',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
