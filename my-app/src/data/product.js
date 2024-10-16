const products = [
  {
    productId: "p1",
    name: "Tjock vintage infärgad sweatshirt",
    artName: "StSt Eco 210, Sweatshirt Radder Vintage",
    artNr: "2561",
    category: "Sweatshirts",
    description: `Extra tjock unisex sweatshirt med en härlig mjuk fleeceinsida som passar fint inför den kallare delen av året. Tröjan är “vintage-infärgad” vilket ger ett lite slitet utseende där varje exemplar kan skilja sig lite i färgen. Matcha med den lite bredare huvtröjan XXX i samma färger . Fairwear kontrollerar bland annat om ett företags produktionsplanering är realistisk, att det inte finns några sena beställningar eller orimliga tidsfrister som leder till överdriven övertid. Den typen av information delas också öppet med allmänheten.`,
    sizeVariants: ["XSS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
    material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
    weight: "380g/m2 (extra tjock)",
    properties: [
      "Borstad fleece-insida",
      "1×2 Ribbade muddar",
      "Vintage-infärgat tyg",
    ],
    certificates: [
      {
        name: "FairTrade",
        img: "/img/certificates/fairtrade-certified-cotton.svg",
        link: "https://www.fairtrade.com",
      },
      {
        name: "Amfori",
        img: "/img/certificates/amfori.svg",
        link: "https://www.fairtrade.com",
      },
      {
        name: "Sai",
        img: "/img/certificates/sai.svg",
        link: "https://www.fairtrade.com",
      },
    ],
    brand: "Stanley Stella",
    minBuy: 10,
    priceTiers: [
      { minQuantity: 1, maxQuantity: 49, price: 321.0 },
      { minQuantity: 50, maxQuantity: 99, price: 303.0 },
      { minQuantity: 100, maxQuantity: 249, price: 295.0 },
      { minQuantity: 250, maxQuantity: 499, price: 286.0 },
      { minQuantity: 500, maxQuantity: null, price: 277.0 },
    ],
    images: {
      modelUrl: {
        small:
          "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Blue-Stone_Duo.jpg",
        medium:
          "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Blue-Stone_Duo.jpg",
        large:
          "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Blue-Stone_Duo.jpg",
        alt: "Tjock vintage infärgad sweatshirt på en modell",
      },
      sizeGuideUrl: {
        small:
          "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size.jpg",
        medium:
          "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size.jpg",
        large:
          "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size.jpg",
        alt: "Size guide of the product",
      },
      variants: [
        {
          colorName: "Black Rock",
          colorCode: "#323737",
          images: {
            small:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Black-Rock-1.jpg",
            medium:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Black-Rock-1.jpg",
            large:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Black-Rock-1.jpg",
            alt: "Black Rock Sweatshirt",
          },
        },
        {
          colorName: "Blue Stone",
          colorCode: "#A9BCCA",
          images: {
            small:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Blue-Stone_b-1.jpg",
            medium:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Blue-Stone_b-1.jpg",
            large:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Blue-Stone_b-1.jpg",
            alt: "Blue Stone Sweatshirt",
          },
        },
        {
          colorName: "Latte",
          colorCode: "#D4AC88",
          images: {
            small:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Latte-1.jpg",
            medium:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Latte-1.jpg",
            large:
              "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G.-Dyed-Latte-1.jpg",
            alt: "Latte Sweatshirt",
          },
        },
      ],
    },
    isInStock: true,
  },
  {
    productId: "p2",
    name: "Ekologisk tjock bomullsjacka",
    artName: "Neutral O73501, Ekologisk tjock bomullsjacka, Unisex",
    artNr: "1641",
    category: "Jackor",
    description: `Snygg och modern tröja med gömd YKK-dragkedja som även fungerar som bomullsjacka. Mjuk och härlig bomullsfleece-insida och en vikt på 300g/m2 vilket är normaltjock för sweatshirt i bomull. Fickorna är gömda och hela plagget passar bra mer formellt istället för klassiska huvtröjor.Neutral vann Sustania Awards första plats 2013 för hållbara textillösningar, i juryn sitter bland annat tidigare direktören för WHO  Gro Harlem Bruntland och EU kommissionären för klimatfrågor Connie Hedegaard.`,
    sizeVariants: ["S", "M", "L", "XL", "XXL", "3XL"],
    material: "100% ekologisk rättvisemärkt kammad bomull",
    weight: "300 g/m2",
    properties: [
      "Oborstad Fleece insida",
      "2 fickor",
      "Raglan-ärmar",
      "Sommarjacka",
    ],
    certificates: [
      {
        name: "FairTrade",
        img: "/img/certificates/fairtrade-certified-cotton.svg",
        link: "https://www.fairtrade.com",
      },
      {
        name: "Amfori",
        img: "/img/certificates/amfori.svg",
        link: "https://www.fairtrade.com",
      },
      {
        name: "Sai",
        img: "/img/certificates/sai.svg",
        link: "https://www.fairtrade.com",
      },
    ],

    brand: "Neutral",
    minBuy: 10,
    priceTiers: [
      { minQuantity: 1, maxQuantity: 49, price: 563.0 },
      { minQuantity: 50, maxQuantity: 99, price: 507.0 },
      { minQuantity: 100, maxQuantity: 249, price: 478.0 },
      { minQuantity: 250, maxQuantity: 499, price: 464.0 },
      { minQuantity: 500, maxQuantity: null, price: 450.0 },
    ],
    images: {
      modelUrl: {
        small:
          "/img/informative/Ekologisk-tjock-bomullsjacka-i-4-farger-73501-1.jpg",
        medium:
          "/img/informative/Ekologisk-tjock-bomullsjacka-i-4-farger-73501-1.jpg",
        large:
          "/img/informative/Ekologisk-tjock-bomullsjacka-i-4-farger-73501-1.jpg",
        alt: "Ekologisk tjock bomullsjacka på en modell",
      },
      sizeGuideUrl: {
        small:
          "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-sizeguide.jpg",
        medium:
          "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-sizeguide.jpg",
        large:
          "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-sizeguide.jpg",
        alt: "Storleksguide för produkten",
      },
      variants: [
        {
          colorName: "Heather Grey",
          colorCode: "#A7A7A7",
          images: {
            small:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-heather-grey.jpg",
            medium:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-heather-grey.jpg",
            large:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-heather-grey.jpg",
            alt: "Heather Grey Jacka",
          },
        },
        {
          colorName: "Heather Grey Dark",
          colorCode: "#656565",
          images: {
            small:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-dark-heather-grey.jpg",
            medium:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-dark-heather-grey.jpg",
            large:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-dark-heather-grey.jpg",
            alt: "Heather Grey Jacka",
          },
        },
        {
          colorName: "Bordeaux",
          colorCode: "#571E2D",
          images: {
            small:
              "/img/informative/Ekologisk-tjock-bomullsjacka-73501-bordeaux.jpg",
            medium:
              "/img/informative/Ekologisk-tjock-bomullsjacka-73501-bordeaux.jpg",
            large:
              "/img/informative/Ekologisk-tjock-bomullsjacka-73501-bordeaux.jpg",
            alt: "Bordeaux Jacka",
          },
        },
        {
          colorName: "Military Green",
          colorCode: "#3F4328",
          images: {
            small:
              "/img/informative/Ekologisk-tjock-bomullsjacka-73501-military.jpg",
            medium:
              "/img/informative/Ekologisk-tjock-bomullsjacka-73501-military.jpg",
            large:
              "/img/informative/Ekologisk-tjock-bomullsjacka-73501-military.jpg",
            alt: "Military Green Jacka",
          },
        },
        {
          colorName: "Navy Blue",
          colorCode: "#242D4A",
          images: {
            small:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-navt.jpg",
            medium:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-navt.jpg",
            large:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-navt.jpg",
            alt: "Navy Blue Jacka",
          },
        },
        {
          colorName: "Black",
          colorCode: "#191919",
          images: {
            small:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-black.jpg",
            medium:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-black.jpg",
            large:
              "/img/informative/ekologisk-troja-utan-huva-med-dragkedja-73501-black.jpg",
            alt: "Black Jacka",
          },
        },
      ],
    },
    isInStock: true,
  },
];

export default products;
