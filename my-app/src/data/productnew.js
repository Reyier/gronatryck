const products = [
    {
      productId: "p1",
      name: "Vadderade bomarjacka",
      artName: "StSt Eco 251, Bomber 2.0",
      artNr: "2561",
      category: "Sweatshirts",
      description: `Rejäl bombarjacka med Medium fit Unisex passform. Dubbla fickor i vid mage, en innerficka samt en ficka med dragkedja på ärmen. Insida med quiltat tyg i samma färg som jackan. Passar bra med både brodyr, DTF-tryck samt fastsydd patch.<br><br>Återvunnen polyester har ett betydligt lägre koldioxidavtryck än konventionellt. Varje kilo mekaniskt återvunnen polyester representerar en minskning av växthusgasutsläppen med mer än 70% jämfört med ny polyester (Sustainable Apparel Coalition’s Higg Material Sustainability Index – raw materials “Higg MSI”).`,
      sizeVariants: ["XSS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Återvunnen polyester",
      weight: "240 g/m2 (normaltjock)",
      fit: "medium fit",
      properties: ["Quilytad insida", "Elastiska muddar"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Global Recycled Standard",
          img: "/img/certificates/global-recycled-standard.svg",
          link: "https://www.controlunion.com/service/certification/",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 790 },
        { minQuantity: 50, maxQuantity: 99, price: 711 },
        { minQuantity: 100, maxQuantity: 249, price: 672 },
        { minQuantity: 250, maxQuantity: 499, price: 652 },
        { minQuantity: 500, maxQuantity: null, price: 632 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0.webp",
            },
          },
          alt: "Vadderad bombarjacka på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Vadderad-bombarjacka-251-Bomber-2.0_size-small.jpg",
              webp: "/img/informative/Vadderad-bombarjacka-251-Bomber-2.0_size-medium.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Vadderad-bombarjacka-251-Bomber-2.0_size-medium.jpg",
              webp: "/img/informative/Vadderad-bombarjacka-251-Bomber-2.0_size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Vadderad-bombarjacka-251-Bomber-2.0_size.jpg",
              webp: "/img/informative/Vadderad-bombarjacka-251-Bomber-2.0_size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Bomber 2.0_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Bomber 2.0_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Bomber 2.0_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Bomber 2.0_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Bomber 2.0_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Bomber 2.0_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Bomber 2.0_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Bomber 2.0_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Bomber 2.0_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Bomber 2.0_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Bomber 2.0_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Bomber 2.0_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p2",
      name: "Ziphood huvtröja",
      artName: "StSt Eco 207, Connector 2.0",
      artNr: "2556",
      category: "Huvtröjor",
      description: `Unisex ziphood med en Medium fit samt med Terry-insida. Huvtröjan har snygga detaljer som dubbelstygn, rejäl huva med dubbla lager tyg samt stilrena metallslut till snöret till huvan.<br><br>Fairwear kontrollerar bland annat om ett företags produktionsplanering är realistisk, att det inte finns några sena beställningar eller orimliga tidsfrister som leder till överdriven övertid. Den typen av information delas också öppet med allmänheten.`,
      sizeVariants: ["XSS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
      weight: "300g/m2 (normaltjock)",
      fit: "medium fit",
      properties: ["Terry-insida", "1×1 Ribbade muddar", "Raglan-ärmar"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 410 },
        { minQuantity: 50, maxQuantity: 99, price: 369 },
        { minQuantity: 100, maxQuantity: 249, price: 348 },
        { minQuantity: 250, maxQuantity: 499, price: 338 },
        { minQuantity: 500, maxQuantity: null, price: 328 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0.webp",
            },
          },
          alt: "Ziphood huvtröjapå två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Ziphood-med-dubbla-lager-tyg-i-huva-207-Connector-2.0_size-small.jpg",
              webp: "/img/informative/Ziphood-med-dubbla-lager-tyg-i-huva-207-Connector-2.0_size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Ziphood-med-dubbla-lager-tyg-i-huva-207-Connector-2.0_size-medium.jpg",
              webp: "/img/informative/Ziphood-med-dubbla-lager-tyg-i-huva-207-Connector-2.0_size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Ziphood-med-dubbla-lager-tyg-i-huva-207-Connector-2.0_size.jpg",
              webp: "/img/informative/Ziphood-med-dubbla-lager-tyg-i-huva-207-Connector-2.0_size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Bright Blue",
          colorCode: "#5477A8",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Bright Blue_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_Bright Blue_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Bright Blue_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_Bright Blue_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Bright Blue_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_Bright Blue_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Burgundy",
          colorCode: "#67242E",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Burgundy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_Burgundy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Burgundy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_Burgundy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Burgundy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_Burgundy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heather Grey",
          colorCode: "#A2A2A2",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Natural Raw",
          colorCode: "#F2E9DA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "White",
          colorCode: "#F7F7F8",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Connector 2.0_White_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Connector 2.0_White_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Connector 2.0_White_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Connector 2.0_White_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Connector 2.0_White_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Connector 2.0_White_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p3",
      name: "Longsleeve t-shirt",
      artName: "StSt Eco 199, LS T-shirt Creator 2.0 LS",
      artNr: "2568",
      category: "T-shirts",
      description: `En långärmad t-shirt gjord av 100% ekologisk rättvisemärkt, ringspunnen och kammad bomull. Passformen är Unisex, en “Medium fit” med 1×1 ribbad halsmudd.<br><br>Materialvalet är 100% ekologisk, kammad och ringspunnen bomull som ger en slät och fin textil skön att bära mot kroppen och som lämpar sig mycket bra att trycka på. Förutom den ekologiska kontrollen av material och tillverkning har plagget även genomgott kvalitettester för slitage, färg- tvätt och ljusbeständigheten i textilen. Vi använder screenfärger fria från gifter såsom ftalater.`,
      sizeVariants: ["XSS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
      weight: "180g/m2 (normaltjock)",
      fit: "medium fit",
      properties: ["Ribbad halsmudd", "Förtvättad"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 132 },
        { minQuantity: 50, maxQuantity: 99, price: 118 },
        { minQuantity: 100, maxQuantity: 249, price: 112 },
        { minQuantity: 250, maxQuantity: 499, price: 108 },
        { minQuantity: 500, maxQuantity: null, price: 105 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Duo_Front_Main_0.webp",
            },
          },
          alt: "Longsleeve t-shirt på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Longsleeve-utan-armmuddar-199-Creator-2.0-Long-Sleeve_size-1-small.jpg",
              webp: "/img/informative/Longsleeve-utan-armmuddar-199-Creator-2.0-Long-Sleeve_size-1-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Longsleeve-utan-armmuddar-199-Creator-2.0-Long-Sleeve_size-1-medium.jpg",
              webp: "/img/informative/Longsleeve-utan-armmuddar-199-Creator-2.0-Long-Sleeve_size-1-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Longsleeve-utan-armmuddar-199-Creator-2.0-Long-Sleeve_size-1.jpg",
              webp: "/img/informative/Longsleeve-utan-armmuddar-199-Creator-2.0-Long-Sleeve_size-1.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heather Grey",
          colorCode: "#A2A2A2",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Natural Raw",
          colorCode: "#F2E9DA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "White",
          colorCode: "#F7F7F8",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_White_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_White_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_White_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_White_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_White_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_White_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Cool Heather",
          colorCode: "#EFEAE9",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Cool Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Glazed Green",
          colorCode: "#1C4A45",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Glazed Green_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Glazed Green_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Glazed Green_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Glazed Green_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Glazed Green_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Glazed Green_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heritage Brown",
          colorCode: "#B15646",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Heritage Brown_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Heritage Brown_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Heritage Brown_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Heritage Brown_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Heritage Brown_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Heritage Brown_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Khaki",
          colorCode: "#525547",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Khaki_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Khaki_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Khaki_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Khaki_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Khaki_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Khaki_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Red Brown",
          colorCode: "#513037",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Red Brown_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Red Brown_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Red Brown_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Red Brown_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Red Brown_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Red Brown_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Red",
          colorCode: "#CA202E",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Red_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Red_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Red_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Red_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Red_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Red_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Blue",
          colorCode: "#1A347D",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Worker Blue_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Worker Blue_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Worker Blue_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Worker Blue_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0 Long Sleeve_Worker Blue_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0 Long Sleeve_Worker Blue_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p4",
      name: "Ekologisk unisex t-shirt",
      artName: "StSt Eco 169, T-shirt",
      artNr: "2392",
      category: "T-shirts",
      description: `Efterträdaren till den populära StSt 755 Creator har fått små justeringar i passformen och ny textil med lite lyxigare känsla i 100% ekologisk bomull. T-shirten har en gramvikt på 180 g/m2 vilket är lite tjockare än normalt. Finns i storlekarna XXS-5XL*.<br><br>Förutom den ekologiska kontrollen av material och tillverkning har plagget även genomgott kvalitettester för slitage, färg- tvätt och ljusbeständigheten i textilen. Vid kontroll av bomullen säkerställs att inga GMO-frön, konstgödsel eller kemiska bekämpningsmedel eller att klorblekning har används någonstans i processen.`,
      sizeVariants: [
        "XXS",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL",
        "5XL",
      ],
      material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
      weight: "180g/m2",
      fit: "medium fit",
      properties: ["Ribbad halsmudd", "Förtvättad"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 106 },
        { minQuantity: 50, maxQuantity: 99, price: 94 },
        { minQuantity: 100, maxQuantity: 249, price: 85 },
        { minQuantity: 250, maxQuantity: 499, price: 80 },
        { minQuantity: 500, maxQuantity: null, price: 75 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.webp",
            },
          },
          alt: "Ekologisk unisex t-shirt på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Ekologisk-Premium-unisex-t-shirt-169-size-small.jpg",
              webp: "/img/informative/Ekologisk-Premium-unisex-t-shirt-169-size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Ekologisk-Premium-unisex-t-shirt-169-size-medium.jpg",
              webp: "/img/informative/Ekologisk-Premium-unisex-t-shirt-169-size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Ekologisk-Premium-unisex-t-shirt-169-size.jpg",
              webp: "/img/informative/Ekologisk-Premium-unisex-t-shirt-169-size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Heather Haze",
          colorCode: "#DED7D3",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Heather Haze_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0_Heather Haze_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Heather Haze_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0_Heather Haze_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Heather Haze_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0_Heather Haze_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Blue Ice",
          colorCode: "#E0EBED",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Blue Ice_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0_Blue Ice_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Blue Ice_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0_Blue Ice_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Blue Ice_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0_Blue Ice_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Mindful Blue",
          colorCode: "#2C6CA3",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Mindful Blue_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0_Mindful Blue_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Mindful Blue_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0_Mindful Blue_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Mindful Blue_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0_Mindful Blue_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Misty Jade",
          colorCode: "#A9D3B6",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Misty Jade_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0_Misty Jade_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Misty Jade_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0_Misty Jade_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Misty Jade_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0_Misty Jade_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heritage Brown",
          colorCode: "#B15646",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Heritage Brown_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Creator 2.0_Heritage Brown_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Heritage Brown_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Creator 2.0_Heritage Brown_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Creator 2.0_Heritage Brown_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Creator 2.0_Heritage Brown_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p5",
      name: "Extra tjock sweatshirt",
      artName: "StSt Eco 201, Sweatshirt Knoxer",
      artNr: "2559",
      category: "Sweatshirts",
      description: `Extra tjock unisex sweatshirt med en härlig mjuk bomulls-fleeceinsida som passar fint inför den kallare delen av året. Tröjan har en relax fit och har raglan-ärmar, det gör att modellen passar flera kroppstyper.<br><br>Fairwear kontrollerar bland annat om ett företags produktionsplanering är realistisk, att det inte finns några sena beställningar eller orimliga tidsfrister som leder till överdriven övertid. Den typen av information delas också öppet med allmänheten.`,
      sizeVariants: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
      weight: "400g/m2 (extra tjock)",
      fit: "oversized fit",
      properties: ["Borstad fleece-insida", "1×1 Ribbade muddar", "Raglan-ärmar"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 453 },
        { minQuantity: 50, maxQuantity: 99, price: 408 },
        { minQuantity: 100, maxQuantity: 249, price: 385 },
        { minQuantity: 250, maxQuantity: 499, price: 374 },
        { minQuantity: 500, maxQuantity: null, price: 362 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0.webp",
            },
          },
          alt: "Extra tjock sweatshirt på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Extra-tjock-sweatshirt-med-relax-fit-201-Knoxer_size-small.jpg",
              webp: "/img/informative/Extra-tjock-sweatshirt-med-relax-fit-201-Knoxer_size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Extra-tjock-sweatshirt-med-relax-fit-201-Knoxer_size-medium.jpg",
              webp: "/img/informative/Extra-tjock-sweatshirt-med-relax-fit-201-Knoxer_size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Extra-tjock-sweatshirt-med-relax-fit-201-Knoxer_size.jpg",
              webp: "/img/informative/Extra-tjock-sweatshirt-med-relax-fit-201-Knoxer_size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Natural Raw",
          colorCode: "#F2E9DA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heritage Brown",
          colorCode: "#B15646",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Knoxer_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Knoxer_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Knoxer_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Knoxer_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Knoxer_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Knoxer_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Knoxer_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Cool Heather",
          colorCode: "#EFEAE9",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Knoxer_Cool Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Knoxer_Cool Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Knoxer_Cool Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Knoxer_Cool Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Knoxer_Cool Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Knoxer_Cool Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heather Haze",
          colorCode: "#DED7D3",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Knoxer_Heather Haze_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Knoxer_Heather Haze_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Knoxer_Heather Haze_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Knoxer_Heather Haze_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Knoxer_Heather Haze_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Knoxer_Heather Haze_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Knoxer_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Knoxer_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Knoxer_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Knoxer_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Knoxer_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Knoxer_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p6",
      name: "Sherpa fleece-väst",
      artName: "StSt Eco 249, Vest Puffer Gilet",
      artNr: "2554",
      category: "Sweatshirts",
      description: `Mjuk och varm Sherpa fleece-väst med noppfri Polarfleece-insida. Elastiska axelmuddar och tröjslut, 2 fickor med dragkedjor i midjan samt en yttre bröstficka. Smart panel på rygg för ryggtryck. Passar bra med både brodyr, DTF-tryck samt fastsydd patch.<br><br>Återvunnen polyester har ett betydligt lägre koldioxidavtryck än konventionellt. Varje kilo mekaniskt återvunnen polyester representerar en minskning av växthusgasutsläppen med mer än 70% jämfört med ny polyester (Sustainable Apparel Coalition’s Higg Material Sustainability Index – raw materials “Higg MSI”).`,
      sizeVariants: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Återvunnen polyester",
      weight: "450 g/m2",
      fit: null,
      properties: ["Vadderad", "Dragsko i botten"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Global Recycled Standard",
          img: "/img/certificates/global-recycled-standard.svg",
          link: "https://www.controlunion.com/service/certification/",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 612 },
        { minQuantity: 50, maxQuantity: 99, price: 550 },
        { minQuantity: 100, maxQuantity: 249, price: 520 },
        { minQuantity: 250, maxQuantity: 499, price: 504 },
        { minQuantity: 500, maxQuantity: null, price: 489 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0.webp",
            },
          },
          alt: "Sherpa fleece-väst på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Polar-fleece-jacka-Noppfri-249-Liner_size-small.jpg",
              webp: "/img/informative/Polar-fleece-jacka-Noppfri-249-Liner_size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Polar-fleece-jacka-Noppfri-249-Liner_size-medium.jpg",
              webp: "/img/informative/Polar-fleece-jacka-Noppfri-249-Liner_size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Polar-fleece-jacka-Noppfri-249-Liner_size.jpg",
              webp: "/img/informative/Polar-fleece-jacka-Noppfri-249-Liner_size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Liner_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Liner_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Liner_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Liner_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Liner_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Liner_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Desert Dust",
          colorCode: "#C9B7A4",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Liner_Desert Dust_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Liner_Desert Dust_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Liner_Desert Dust_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Liner_Desert Dust_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Liner_Desert Dust_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Liner_Desert Dust_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p7",
      name: "Tjock vadderad Puffer-väst",
      artName: "StSt Eco 250, Vest Puffer Gilet",
      artNr: "2555",
      category: "Jackor",
      description: `Rejält vadderad Unisex-väst med hög krage av återvunnen polyester. 2 fickor med dragkedjor i midjan samt 2 djupa innerfickor. Justerbar midja med dragsko. Passar bra med både brodyr, DTF-tryck samt fastsydd patch.<br><br>Återvunnen polyester har ett betydligt lägre koldioxidavtryck än konventionellt. Varje kilo mekaniskt återvunnen polyester representerar en minskning av växthusgasutsläppen med mer än 70% jämfört med ny polyester (Sustainable Apparel Coalition’s Higg Material Sustainability Index – raw materials “Higg MSI”)..`,
      sizeVariants: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Återvunnen polyester",
      weight: "75+175+75 g/m2",
      fit: null,
      properties: ["Vadderad", "Dragsko i botten"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Global Recycled Standard",
          img: "/img/certificates/global-recycled-standard.svg",
          link: "https://www.controlunion.com/service/certification/",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 717 },
        { minQuantity: 50, maxQuantity: 99, price: 645 },
        { minQuantity: 100, maxQuantity: 249, price: 609 },
        { minQuantity: 250, maxQuantity: 499, price: 592 },
        { minQuantity: 500, maxQuantity: null, price: 574 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0.webp",
            },
          },
          alt: "Tjock vadderad Puffer-väst på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Tjock-vadderad-Puffer-vast-250-Puffer-Gilet_size-small.jpg",
              webp: "/img/informative/Tjock-vadderad-Puffer-vast-250-Puffer-Gilet_size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Tjock-vadderad-Puffer-vast-250-Puffer-Gilet_size-medium.jpg",
              webp: "/img/informative/Tjock-vadderad-Puffer-vast-250-Puffer-Gilet_size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Tjock-vadderad-Puffer-vast-250-Puffer-Gilet_size.jpg",
              webp: "/img/informative/Tjock-vadderad-Puffer-vast-250-Puffer-Gilet_size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Puffer Gilet_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Puffer Gilet_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Puffer Gilet_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Desert Dust",
          colorCode: "#C9B7A4",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_Desert Dust_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Puffer Gilet_Desert Dust_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_Desert Dust_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Puffer Gilet_Desert Dust_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_Desert Dust_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Puffer Gilet_Desert Dust_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Puffer Gilet_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Puffer Gilet_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Puffer Gilet_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Puffer Gilet_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p8",
      name: "Tjock vintage-infärgad sweatshirt",
      artName: "StSt Eco 210, Sweatshirt Radder Vintage",
      artNr: "2561",
      category: "Sweatshirts",
      description: `Extra tjock unisex sweatshirt med en härlig mjuk fleeceinsida som passar fint inför den kallare delen av året. Tröjan är “vintage-infärgad” vilket ger ett lite slitet utseende där varje exemplar kan skilja sig lite i färgen.<br<br>Matcha med den lite bredare huvtröjan XXX i samma färger .<br><br>Fairwear kontrollerar bland annat om ett företags produktionsplanering är realistisk, att det inte finns några sena beställningar eller orimliga tidsfrister som leder till överdriven övertid. Den typen av information delas också öppet med allmänheten.`,
      sizeVariants: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
      material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
      weight: "380g/m2 (extra tjock)",
      fit: "oversized fit",
      properties: [
        "Borstad fleece-insida",
        "1×2 Ribbade muddar",
        "Vintage-infärgat tyg",
      ],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 321 },
        { minQuantity: 50, maxQuantity: 99, price: 303 },
        { minQuantity: 100, maxQuantity: 249, price: 295 },
        { minQuantity: 250, maxQuantity: 499, price: 286 },
        { minQuantity: 500, maxQuantity: null, price: 277 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0.webp",
            },
          },
          alt: "Tjock vintage-infärgad sweatshirt på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size-small.jpg",
              webp: "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size-medium.jpg",
              webp: "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size.jpg",
              webp: "/img/informative/Rejal-oversize-sweatshirt-208-Radder-2.0-Vintage_G._size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Dyed Blue",
          colorCode: "#A8BCCA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Black Rock_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Black Rock_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Black Rock_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Black Rock_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Black Rock_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Black Rock_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Dyed Latte",
          colorCode: "#D4AB87",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Latte_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Latte_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Latte_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Latte_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0 Vintage_G. Dyed Latte_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0 Vintage_G. Dyed Latte_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Natural Raw",
          colorCode: "#F2E9DA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "White",
          colorCode: "#F7F7F8",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_White_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_White_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_White_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_White_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_White_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_White_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Cool Heather",
          colorCode: "#EFEAE9",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Cool Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Cool Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Cool Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Cool Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Cool Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Cool Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heather Grey",
          colorCode: "#A2A2A2",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Blue Ice",
          colorCode: "#E0EBED",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Blue Ice_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Blue Ice_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Blue Ice_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Blue Ice_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Blue Ice_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Blue Ice_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Khaki",
          colorCode: "#525547",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Khaki_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Khaki_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Khaki_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Khaki_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Khaki_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Khaki_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Misty Jade",
          colorCode: "#A9D3B6",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Misty Jade_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Misty Jade_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Misty Jade_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Misty Jade_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Misty Jade_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Misty Jade_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Mindful Blue",
          colorCode: "#2C6CA3",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Mindful Blue_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Radder 2.0_Mindful Blue_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Mindful Blue_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Radder 2.0_Mindful Blue_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Radder 2.0_Mindful Blue_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Radder 2.0_Mindful Blue_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p9",
      name: "Ekologisk crewneck",
      artName: "StSt Eco 868, Prissvärd ekologisk crewneck",
      artNr: "1977",
      category: "Sweatshirts",
      description: `Prisvärd och kvalitativ sweatshirt tillverkad av 85% certifierad ekologisk bomull och 15% återvunnen polyester. Passformen är medium fit unisex med borstad fleece-insida och ribbade muddar. Passar utmärkt med brodyr eller screentryck. Tyget har en gramvikt på 280 g/m2 vilket är ett normaltjockt tyg. Finns i storlek XXS – 5XL.<br><br>Fairwear kontrollerar t ex. om ett företags produktionsplanering är realistisk, att det inte finns några sena beställningar eller orimliga tidsfrister som kan leda till överdriven övertid. Den typen av information delas också öppet med allmänheten.`,
      sizeVariants: [
        "XXS",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL",
        "5XL",
      ],
      material: "85% certifierad ekologisk bomull, 15% återvunnen polyester",
      weight: "280 g/m2 (normaltjock)",
      fit: "medium fit",
      properties: ["Borstad fleece-insida", "Ribbade muddar", "Unisex"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
        {
          name: "Global Recycled Standard",
          img: "/img/certificates/global-recycled-standard.svg",
          link: "https://www.controlunion.com/service/certification/",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 225 },
        { minQuantity: 50, maxQuantity: 99, price: 202 },
        { minQuantity: 100, maxQuantity: 249, price: 191 },
        { minQuantity: 250, maxQuantity: 499, price: 185 },
        { minQuantity: 500, maxQuantity: null, price: 180 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Roller_Natural Raw_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Roller_Natural Raw_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Roller_Natural Raw_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Roller_Natural Raw_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Roller_Natural Raw_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Roller_Natural Raw_Duo_Front_Main_0.webp",
            },
          },
          alt: "Ekologisk crewneck sweatshirt på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Prissvard-ekologisk-crewneck-868-size-small.jpg",
              webp: "/img/informative/Prissvard-ekologisk-crewneck-868-size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Prissvard-ekologisk-crewneck-868-size-medium.jpg",
              webp: "/img/informative/Prissvard-ekologisk-crewneck-868-size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Prissvard-ekologisk-crewneck-868-size.jpg",
              webp: "/img/informative/Prissvard-ekologisk-crewneck-868-size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Natural Raw",
          colorCode: "#F2E9DA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Roller_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Roller_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Roller_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Roller_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Roller_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Roller_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Blue Ice",
          colorCode: "#E0EBED",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Roller_Blue Ice_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Roller_Blue Ice_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Roller_Blue Ice_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Roller_Blue Ice_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Roller_Blue Ice_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Roller_Blue Ice_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Desert Dust",
          colorCode: "#C9B7A4",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Roller_Desert Dust_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Roller_Desert Dust_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Roller_Desert Dust_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Roller_Desert Dust_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Roller_Desert Dust_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Roller_Desert Dust_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heritage Brown",
          colorCode: "#B15646",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Roller_Heritage Brown_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Roller_Heritage Brown_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Roller_Heritage Brown_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Roller_Heritage Brown_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Roller_Heritage Brown_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Roller_Heritage Brown_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
    {
      productId: "p10",
      name: "Mjuk Piké",
      artName: "StSt Eco 222, Prepster",
      artNr: "2571",
      category: "Pikéer",
      description: `Förtvättad piké av 100% ekologisk bomull, ringspunnen och kammad i pikétyg. Passformen är Unisex och gjord för att passa många olika kroppsformer.<br><br>Fairwear gör årliga stickprovskontroller på fabriker för att kontrollera medlemmarnas redovisningar och varje fabrik måste sätta upp uppförandekod på det lokala språket med kontaktuppgifter till en oberoende klagomålshanterare.`,
      sizeVariants: [
        "XXS",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL",
        "5XL",
      ],
      material: "100% Ekologisk rättvisemärkt, ringspunnen och kammad bomull",
      weight: "240g/m2)",
      fit: "medium fit",
      properties: ["Knappar i matchade färger", "Slits i botten av plagget"],
      certificates: [
        {
          name: "Fairwear",
          img: "/img/certificates/fairwear.svg",
          link: "https://www.fairwear.com",
        },
        {
          name: "Peta approved vegan",
          img: "/img/certificates/peta-approved-vegan.svg",
          link: "https://petaapprovedvegan.peta.org/",
        },
        {
          name: "Certifierad Ekologisk Bomull",
          img: "/img/certificates/certifierad-ekologisk-bomull.svg",
          link: "https://gronatryck.se/miljoledning-grona-tryck/#tab_certifikat",
        },
      ],
      brand: "Stanley Stella",
      minBuy: 10,
      priceTiers: [
        { minQuantity: 10, maxQuantity: 49, price: 212 },
        { minQuantity: 50, maxQuantity: 99, price: 162 },
        { minQuantity: 100, maxQuantity: 249, price: 153 },
        { minQuantity: 250, maxQuantity: 499, price: 144 },
        { minQuantity: 500, maxQuantity: null, price: 135 },
      ],
      images: {
        modelUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0-small.jpg",
              webp: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0-medium.jpg",
              webp: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0.jpg",
              webp: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0.webp",
            },
          },
          alt: "Mjuk Piké på två glada modeller",
        },
        sizeGuideUrl: {
          small: {
            formats: {
              jpg: "/img/informative/Mjuk-och-forkrympt-Pike-222-Prepster-2.0_size-small.jpg",
              webp: "/img/informative/Mjuk-och-forkrympt-Pike-222-Prepster-2.0_size-small.webp",
            },
          },
          medium: {
            formats: {
              jpg: "/img/informative/Mjuk-och-forkrympt-Pike-222-Prepster-2.0_size-medium.jpg",
              webp: "/img/informative/Mjuk-och-forkrympt-Pike-222-Prepster-2.0_size-medium.webp",
            },
          },
          large: {
            formats: {
              jpg: "/img/informative/Mjuk-och-forkrympt-Pike-222-Prepster-2.0_size.jpg",
              webp: "/img/informative/Mjuk-och-forkrympt-Pike-222-Prepster-2.0_size.webp",
            },
          },
          alt: "Storleksguide av produkten",
        },
      },
      variants: [
        {
          colorName: "Eco Heather",
          colorCode: "#F9F0E8",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Eco-Heather_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Eco-Heather_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Eco-Heather_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Eco-Heather_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Eco-Heather_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Eco-Heather_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Blue Ice",
          colorCode: "#E0EBED",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Blue Soul_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Blue Soul_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Blue Soul_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Blue Soul_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Blue Soul_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Blue Soul_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Aloe green",
          colorCode: "#A6BCB1",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Aloe_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Aloe_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Aloe_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Aloe_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Aloe_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Aloe_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Anthracite",
          colorCode: "#4D5354",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Anthracite_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Anthracite_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Anthracite_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Anthracite_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Anthracite_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Anthracite_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Black",
          colorCode: "#212829",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Black_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Black_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Black_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Black_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Black_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Black_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Bubble Pink",
          colorCode: "#E994B6",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Bubble Pink_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Bubble Pink_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Bubble Pink_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Bubble Pink_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Bubble Pink_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Bubble Pink_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Burgundy",
          colorCode: "#67242E",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Burgundy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Burgundy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Burgundy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Burgundy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Burgundy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Burgundy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Cool Heather",
          colorCode: "#EFEAE9",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Cool Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Cool Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Cool Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Cool Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Cool Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Cool Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Dark Heather Blue",
          colorCode: "#4A5B73",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Dark Heather Blue_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Dark Heather Blue_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Dark Heather Blue_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Dark Heather Blue_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Dark Heather Blue_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Dark Heather Blue_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Dark Heather Grey",
          colorCode: "#353837",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Dark Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Dark Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Dark Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Dark Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Dark Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Dark Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "French Navy",
          colorCode: "#223143",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_French Navy_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_French Navy_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_French Navy_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_French Navy_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_French Navy_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_French Navy_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Glazed Green",
          colorCode: "#1C4A45",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Glazed Green_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Glazed Green_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Glazed Green_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Glazed Green_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Glazed Green_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Glazed Green_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Heather Grey",
          colorCode: "#A2A2A2",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Heather Grey_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Heather Grey_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Heather Grey_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Heather Grey_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Heather Grey_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Heather Grey_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Khaki",
          colorCode: "#525547",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Latte",
          colorCode: "#D4A275",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Khaki_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Natural Raw",
          colorCode: "#F2E9DA",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Natural Raw_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Natural Raw_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Natural Raw_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Natural Raw_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Natural Raw_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Natural Raw_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Nispero",
          colorCode: "#FBC987",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Nispero_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Nispero_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Nispero_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Nispero_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Nispero_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Nispero_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Red Brown",
          colorCode: "#513037",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Red Brown_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Red Brown_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Red Brown_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Red Brown_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Red Brown_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Red Brown_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Red",
          colorCode: "#CA202E",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Red_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Red_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Red_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Red_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Red_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Red_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Stargazer",
          colorCode: "#22515B",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Stargazer_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Stargazer_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Stargazer_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Stargazer_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Stargazer_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Stargazer_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "White",
          colorCode: "#F7F7F8",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_White_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_White_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_White_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_White_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_White_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_White_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
        {
          colorName: "Worker Blue",
          colorCode: "#16377F",
          images: {
            small: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Worker Blue_Packshot_Front_Main_0-small.jpg",
                webp: "/img/informative/Prepster 2.0_Worker Blue_Packshot_Front_Main_0-small.webp",
              },
            },
            medium: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Worker Blue_Packshot_Front_Main_0-medium.jpg",
                webp: "/img/informative/Prepster 2.0_Worker Blue_Packshot_Front_Main_0-medium.webp",
              },
            },
            large: {
              formats: {
                jpg: "/img/informative/Prepster 2.0_Worker Blue_Packshot_Front_Main_0.jpg",
                webp: "/img/informative/Prepster 2.0_Worker Blue_Packshot_Front_Main_0.webp",
              },
            },
          },
        },
      ],
      isInStock: true,
    },
  ];
  
  export default products;
  