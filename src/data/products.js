const BASE = 'https://res.cloudinary.com/djysuesbw/image/upload'

export const CATEGORIES = [
  'All',
  'Plates',
  'Vases',
  'Bowls',
  'Jars & Canisters',
  'Egg Holders',
  'Handis',
  'Thalis',
  'Trays',
  'Décor',
  'Marble',
  'Hand Block Fabrics',
  'Wooden Crafts',
  'Showpieces',
  'Bags',
]

export const products = [
  /* ── Blue Pottery · Plates ──────────────────── */
  { id: 1,  name: 'Blue Pottery Plate I',        category: 'Plates',         tag: 'Classic',    image: `${BASE}/HFC_Blue_Pottery_Plate_1_cn0cvk`,        description: 'Hand-painted Jaipur Blue Pottery plate with traditional floral motifs.' },
  { id: 2,  name: 'Blue Pottery Plate II',       category: 'Plates',         tag: 'Classic',    image: `${BASE}/HFC_Blue_Pottery_Plate_zbmap1`,          description: 'Striking cobalt and white plate handcrafted by Jaipur artisans.' },
  { id: 3,  name: 'Blue Pottery Plate III',      category: 'Plates',         tag: 'Classic',    image: `${BASE}/HFC_Blue_Pottery_Plate_3_nrnepa`,        description: 'Elegant hand-glazed plate with intricate geometric border patterns.' },
  { id: 4,  name: 'Blue Pottery Plate IV',       category: 'Plates',         tag: 'Limited',    image: `${BASE}/HFC_Blue_Pottery_Plate_2_tqqfkj`,        description: 'Ornate blue pottery plate with delicate floral hand-painting.' },
  { id: 5,  name: 'Blue Pottery Plates Set I',   category: 'Plates',         tag: 'Bestseller', image: `${BASE}/HFC_Blue_Pottery_Plates_ga9iel`,          description: 'Curated set of hand-painted plates in signature Jaipur blue.' },
  { id: 6,  name: 'Blue Pottery Plates Set II',  category: 'Plates',         tag: 'Curated',    image: `${BASE}/HFC_Blue_Pottery_Plates_2_h9vbgk`,       description: 'Artisan plate collection — a statement on any dining table.' },
  { id: 7,  name: 'Blue Pottery Plates Set III', category: 'Plates',         tag: 'Curated',    image: `${BASE}/HFC_Blue_Pottery_Plates_1_ou0skt`,       description: 'Set of hand-thrown and hand-painted Jaipur blue pottery plates.' },
  { id: 8,  name: 'Marble Plate I',              category: 'Plates',         tag: 'Premium',    image: `${BASE}/HFC_Blue_Pottery_Marble_plate_cp3ztj`,   description: 'Marble-textured decorative plate with hand-applied glazework.' },
  { id: 9,  name: 'Marble Plate II',             category: 'Plates',         tag: 'Limited',    image: `${BASE}/HFC_Blue_Pottery_Marble_plate_3_xtdcod`, description: 'Distinctive marble-finish platter — a statement piece for any home.' },

  /* ── Blue Pottery · Vases ───────────────────── */
  { id: 10, name: 'Blue Pottery Vase I',         category: 'Vases',          tag: 'Artisan',    image: `${BASE}/HFC_Blue_Pottery_Vase_1_ym0xzn`,         description: 'Slender hand-glazed vase in vivid Jaipur blue with floral detailing.' },
  { id: 11, name: 'Blue Pottery Vase II',        category: 'Vases',          tag: 'Artisan',    image: `${BASE}/HFC_Blue_Pottery_Vase_2_enqd0s`,         description: 'Elegant medium vase with intricate cobalt hand-painting.' },
  { id: 12, name: 'Blue Pottery Vase III',       category: 'Vases',          tag: 'Artisan',    image: `${BASE}/HFC_Blue_Pottery_Vase_3_lj3zp4`,         description: 'Statement vase with bold geometric patterns in blue glaze.' },
  { id: 13, name: 'Blue Pottery Vase IV',        category: 'Vases',          tag: 'Artisan',    image: `${BASE}/HFC_Blue_Pottery_Vase_4_rotrcv`,         description: 'Tall cylindrical vase showcasing traditional Jaipur artistry.' },
  { id: 14, name: 'Blue Pottery Vase V',         category: 'Vases',          tag: 'Limited',    image: `${BASE}/HFC_Blue_Pottery_Vase_5_bxozkw`,         description: 'Wide-mouthed decorative vase — ideal for floral arrangements.' },
  { id: 15, name: 'Blue Pottery Vase',           category: 'Vases',          tag: 'Classic',    image: `${BASE}/HFC_Blue_Pottery_Vase_ucbk0b`,           description: 'Classic blue pottery vase with signature cobalt-white palette.' },
  { id: 16, name: 'Marble Vase',                 category: 'Vases',          tag: 'Premium',    image: `${BASE}/HFC_Blue_Pottery_Marble_Vase_k5uhsv`,    description: 'Tall marble-finish vase with blue pottery glaze detailing.' },
  { id: 17, name: 'Bottle Handi Vase',           category: 'Vases',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Bottel_handi_vase_f51ffj`, description: 'Elegant bottle-handi hybrid vase — a versatile décor centrepiece.' },
  { id: 18, name: 'Surai Vase',                  category: 'Vases',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Surai_Vase_uuwxio`,     description: 'Traditional Surai-form vase in Jaipur blue — timeless Indian design.' },
  { id: 19, name: 'Surai Vase II',               category: 'Vases',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Surai_Vase_2_cu8w7k`,   description: 'Graceful Surai vase with hand-painted floral motifs in cobalt glaze.' },
  { id: 20, name: 'Surai Vase III',              category: 'Vases',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Surai_Vase_1_tsclkc`,   description: 'Classic Surai silhouette adorned with intricate blue pottery artwork.' },
  { id: 21, name: 'Surai',                       category: 'Vases',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Surai_msxh6e`,          description: 'Authentic Jaipur Surai water vessel repurposed as a stunning décor piece.' },

  /* ── Blue Pottery · Bowls ───────────────────── */
  { id: 22, name: 'Plate Bowl Duo',              category: 'Bowls',          tag: 'Bestseller', image: `${BASE}/HFC_Blue_Pottery_Plate_Bowl_aygwgr`,     description: 'Artisan plate-bowl set in classic indigo and white glaze.' },
  { id: 23, name: 'Plate Bowl Set',              category: 'Bowls',          tag: 'Curated',    image: `${BASE}/HFC_Blue_Pottery_Plate_Bowl_1_ru27mk`,   description: 'Elegant nested plate and bowl for serving or décor.' },
  { id: 24, name: 'Tray, Bowl & Saucers',        category: 'Bowls',          tag: 'Set',        image: `${BASE}/HFC_Blue_Pottery_Tray_Bowl_Saucers_pidkjm`, description: 'Complete serving set — tray, bowl, and saucers in Jaipur blue.' },
  { id: 25, name: 'Rice Bowl',                   category: 'Bowls',          tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Rice_Bowl_irbk45`,      description: 'Charming rice bowl with delicate hand-painted floral patterns.' },

  /* ── Blue Pottery · Jars & Canisters ───────── */
  { id: 26, name: 'Blue Pottery Jars',           category: 'Jars & Canisters', tag: 'Bestseller', image: `${BASE}/HFC_Blue_Pottery_Jars_o8kyyu`,       description: 'Set of hand-glazed storage jars with traditional cobalt designs.' },
  { id: 27, name: 'Blue Pottery Jar',            category: 'Jars & Canisters', tag: 'Classic',    image: `${BASE}/HFC_Blue_Pottery_Jar_yd5px1`,        description: 'Single artisan jar with intricate floral hand-painting.' },
  { id: 28, name: 'Canister',                    category: 'Jars & Canisters', tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Canister_siskjr`,   description: 'Classic canister in vivid blue with hand-applied folk art.' },
  { id: 29, name: 'Canister Collection I',       category: 'Jars & Canisters', tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Canister_1_nyinz8`, description: 'Slender canister in signature Jaipur blue — functional and beautiful.' },
  { id: 30, name: 'Canister Collection II',      category: 'Jars & Canisters', tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Canister_2_lyh4nt`, description: 'Medium-sized canister with bold geometric glaze patterns.' },
  { id: 31, name: 'Canister Collection III',     category: 'Jars & Canisters', tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Canister_3_u1f6wq`, description: 'Stackable canister set ideal for tea, spices, or display.' },
  { id: 32, name: 'Canister Collection IV',      category: 'Jars & Canisters', tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Canister_4_a3hxiz`, description: 'Wide-mouthed storage canister with traditional paisley artwork.' },

  /* ── Blue Pottery · Egg Holders ────────────── */
  { id: 33, name: 'Egg Holder I',                category: 'Egg Holders',    tag: 'Unique',     image: `${BASE}/HFC_Blue_Pottery_Egg_holder_il4huy`,     description: 'Charming egg holder with delicate floral hand-painting.' },
  { id: 34, name: 'Egg Holder II',               category: 'Egg Holders',    tag: 'Unique',     image: `${BASE}/HFC_Blue_Pottery_Egg_holder_3_fiy7jb`,   description: 'Artisan egg cup with signature Jaipur blue motifs.' },
  { id: 35, name: 'Egg Holder III',              category: 'Egg Holders',    tag: 'Unique',     image: `${BASE}/HFC_Blue_Pottery_Egg_holder_2_qxqboj`,   description: 'Set of egg holders, lovingly crafted for breakfast table elegance.' },

  /* ── Blue Pottery · Handis ──────────────────── */
  { id: 36, name: 'Handi Vessel',                category: 'Handis',         tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Handi_1_onswgb`,        description: 'Traditional handi pot in Jaipur blue, perfect for décor or gifting.' },
  { id: 37, name: 'Small Handi',                 category: 'Handis',         tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Small_Handi_xgv9ce`,    description: 'Petite blue pottery handi — a versatile accent piece.' },

  /* ── Blue Pottery · Thalis ──────────────────── */
  { id: 38, name: 'Blue Pottery Thali',          category: 'Thalis',         tag: 'Traditional', image: `${BASE}/HFC_Blue_Pottery_Thali_lwc5fe`,          description: 'Complete hand-painted thali set in signature Jaipur blue.' },
  { id: 39, name: 'Blue Pottery Thali I',        category: 'Thalis',         tag: 'Traditional', image: `${BASE}/HFC_Blue_Pottery_Thali_1_sk4dic`,        description: 'Ornate Jaipur blue thali with intricate floral border detailing.' },

  /* ── Blue Pottery · Trays ───────────────────── */
  { id: 40, name: 'Rectangle Tray',              category: 'Trays',          tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Rectangle_tray_ayhd5g`, description: 'Elegant rectangular serving tray in vivid Jaipur blue glaze.' },

  /* ── Blue Pottery · Décor ───────────────────── */
  { id: 41, name: 'Hamsa Wall Piece',            category: 'Décor',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Hamsa_xlljut`,          description: 'Ornamental Hamsa in blue pottery — a symbol of protection and blessings.' },
  { id: 42, name: 'Blue Pottery Bells',          category: 'Décor',          tag: 'Heritage',   image: `${BASE}/HFC_Blue_Pottery_Bells_c56n0m`,          description: 'Decorative hanging bells in blue pottery glaze — a timeless Indian motif.' },
  { id: 43, name: 'T-Light Holder',              category: 'Décor',          tag: 'Artisan',    image: `${BASE}/HFC_Blue_Pottery_T_-Light_holder_a9red1`, description: 'Hand-painted tealight holder casting beautiful blue patterns when lit.' },
  { id: 44, name: 'Rakhi Gift Set',              category: 'Décor',          tag: 'Gift',       image: `${BASE}/HFC_Blue_Pottery_Rakhi_u6zuwh`,          description: 'Beautifully crafted Rakhi set in blue pottery — a unique festive gift.' },
  { id: 45, name: 'Rakhi Gift Set II',           category: 'Décor',          tag: 'Gift',       image: `${BASE}/HFC_Blue_Pottery_Rakhi_2_fxilbf`,        description: 'Artisan blue pottery Rakhi — where tradition meets craft.' },
  { id: 46, name: 'Salt & Pepper Set',           category: 'Décor',          tag: 'Kitchen',    image: `${BASE}/HFC_Blue_Pottery_Salt_Pepper_sr5s5v`,    description: 'Hand-painted salt and pepper shakers — charming blue pottery table accents.' },
  { id: 47, name: 'Soap Dispenser',              category: 'Décor',          tag: 'Bath',       image: `${BASE}/HFC_Blue_Pottery_Soap_Dispenser_eqk3nt`, description: 'Artisan blue pottery soap dispenser — elevate your bathroom aesthetic.' },
  { id: 48, name: 'Soap Dish',                   category: 'Décor',          tag: 'Bath',       image: `${BASE}/HFC_Blue_Pottery_Soap_Dish_ypxdfr`,      description: 'Hand-glazed blue pottery soap dish — practical, beautiful, artisan-made.' },

  /* ── Marble ─────────────────────────────────── */
  { id: 49, name: 'Marble Plate',                category: 'Marble',         tag: 'Premium',    image: `${BASE}/HFC_Marble_Plate_ju3srf`,                description: 'Exquisite hand-carved marble plate with traditional Indian inlay work.' },
  { id: 50, name: 'Marble Artisan Piece I',      category: 'Marble',         tag: 'Premium',    image: `${BASE}/HFC_4364_udtcoa`,                        description: 'Premium marble artisan piece — meticulously handcrafted in India.' },
  { id: 51, name: 'Marble Artisan Piece II',     category: 'Marble',         tag: 'Limited',    image: `${BASE}/HFC_4367_s5qun4`,                        description: 'Exquisite marble creation by master craftspeople.' },
  { id: 52, name: 'Marble Artisan Piece III',    category: 'Marble',         tag: 'Limited',    image: `${BASE}/HFC_4442_hucdd7`,                        description: 'Handcrafted marble piece with refined traditional detailing.' },
  { id: 53, name: 'Marble Artisan Piece IV',     category: 'Marble',         tag: 'Heritage',   image: `${BASE}/HFC_4335_cjokmj`,                        description: 'Artisan marble work showcasing India\'s stone craftsmanship heritage.' },
  { id: 54, name: 'Marble Artisan Piece V',      category: 'Marble',         tag: 'Heritage',   image: `${BASE}/HFC_4344_ve93f2`,                        description: 'Distinctive marble artisan piece — a collector\'s statement.' },

  /* ── Hand Block Fabrics ─────────────────────── */
  { id: 55, name: 'Hand Block Fabric I',         category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_7_onviec`,           description: 'Hand block-printed fabric with traditional Indian motifs. Sold by metre.' },
  { id: 56, name: 'Hand Block Fabric II',        category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_9_xx0z4q`,           description: 'Vibrant hand-stamped block print fabric from Rajasthani artisans.' },
  { id: 57, name: 'Hand Block Fabric III',       category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_64_bt7zbo`,          description: 'Natural dye block-printed fabric — earthy tones and heritage patterns.' },
  { id: 58, name: 'Hand Block Fabric IV',        category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_60_ams02l`,          description: 'Intricate hand-stamped fabric with geometric Indian block print designs.' },
  { id: 59, name: 'Hand Block Fabric V',         category: 'Hand Block Fabrics', tag: 'Limited', image: `${BASE}/Hand_Block_Fabrics_56_godfad`,          description: 'Heritage block-printed textile — each metre uniquely handcrafted.' },
  { id: 60, name: 'Hand Block Fabric VI',        category: 'Hand Block Fabrics', tag: 'Limited', image: `${BASE}/Hand_Block_Fabrics_52_n8q6qz`,          description: 'Soft hand block-printed fabric perfect for garments or home décor.' },
  { id: 61, name: 'Hand Block Fabric VII',       category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_45_gxsbhv`,          description: 'Rich block print patterns inspired by centuries of Rajasthani craft.' },
  { id: 62, name: 'Hand Block Fabric VIII',      category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_40_yp7kyb`,          description: 'Bold traditional print on cotton — a versatile artisan textile.' },
  { id: 63, name: 'Hand Block Fabric IX',        category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_20_xcdok6`,          description: 'Handcrafted block print fabric with fine folk art detailing.' },
  { id: 64, name: 'Hand Block Fabric X',         category: 'Hand Block Fabrics', tag: 'Artisan', image: `${BASE}/Hand_Block_Fabrics_11_mrfpyc`,          description: 'Classic Indian block print textile — natural dyes, artisan craft.' },

  /* ── Wooden Crafts ──────────────────────────── */
  { id: 65, name: 'Wooden Serving Tray Set of 3', category: 'Wooden Crafts', tag: 'Bestseller', image: `${BASE}/HeartfulCraft_Wooden_Serving_Tray_Set_of_3_tsqduw`, description: 'Nested set of 3 handcrafted wooden serving trays — functional artisan elegance.' },
  { id: 66, name: 'Wooden Serving Tray Set II',   category: 'Wooden Crafts', tag: 'Bestseller', image: `${BASE}/HeartfulCraft_Wooden_Serving_Tray_Set_of_3_2_ifgvdn`, description: 'Premium wooden tray set with smooth finish — great for gifting.' },
  { id: 67, name: 'Wooden Serving Tray Set III',  category: 'Wooden Crafts', tag: 'Artisan',    image: `${BASE}/HeartfulCraft_Wooden_Serving_Tray_Set_of_3_5_gzlfdw`, description: 'Three-piece hand-finished wooden tray set for kitchen or dining.' },
  { id: 68, name: 'Wooden Serving Tray',          category: 'Wooden Crafts', tag: 'Artisan',    image: `${BASE}/HeartfulCraft_Wooden_Serving_Tray_6_s9wm7s`,     description: 'Single handcrafted wooden serving tray with natural wood grain finish.' },
  { id: 69, name: 'Wooden Serving Bowl',          category: 'Wooden Crafts', tag: 'Kitchen',    image: `${BASE}/HeartfulCraft_Wooden_Serving_Bowl_3_qdw93q`,     description: 'Hand-turned wooden salad bowl — warm, natural, artisan-made.' },
  { id: 70, name: 'Wooden Serving Bowl II',       category: 'Wooden Crafts', tag: 'Kitchen',    image: `${BASE}/HeartfulCraft_Wooden_Serving_Bowl_2_tsq0rd`,     description: 'Beautifully crafted wooden bowl ideal for serving or display.' },
  { id: 71, name: 'Wooden Pen Holder',            category: 'Wooden Crafts', tag: 'Desk',       image: `${BASE}/HeartfulCraft_Wooden_Pen_Holder_1_uoy60y`,       description: 'Artisan-turned wooden pen and stationery holder for a refined desk.' },
  { id: 72, name: 'Wooden Mortar & Pestle',       category: 'Wooden Crafts', tag: 'Kitchen',    image: `${BASE}/HeartfulCraft_Wooden_Mortar_Pestle_3_xt5hxg`,    description: 'Hand-carved wooden mortar and pestle — a kitchen essential with heritage.' },
  { id: 73, name: 'Wooden Mortar & Pestle II',    category: 'Wooden Crafts', tag: 'Kitchen',    image: `${BASE}/HeartfulCraft_Wooden_Mortar_Pestle_2_mex8op`,    description: 'Solid handcrafted wooden mortar and pestle set — durable and beautiful.' },
  { id: 74, name: 'Wooden Money Bank',            category: 'Wooden Crafts', tag: 'Gift',       image: `${BASE}/HeartfulCraft_Wooden_Money_Bank_2_knqn59`,       description: 'Charming hand-crafted wooden piggy bank — a thoughtful artisan gift.' },
  { id: 75, name: 'Wooden Money Bank II',         category: 'Wooden Crafts', tag: 'Gift',       image: `${BASE}/HeartfulCraft_Wooden_Money_Bank_1_t6293d`,       description: 'Decorative wooden money bank — handmade with natural wood finishes.' },
  { id: 76, name: 'Wooden Key Hanger',            category: 'Wooden Crafts', tag: 'Home',       image: `${BASE}/HeartfulCraft_Wooden_Key_Hanger_jpqpbi`,         description: 'Artisan wooden key holder wall mount — organised and elegantly crafted.' },
  { id: 77, name: 'Wooden Key Hanger II',         category: 'Wooden Crafts', tag: 'Home',       image: `${BASE}/HeartfulCraft_Wooden_Key_Hanger_1_jg0trp`,       description: 'Handcrafted wooden key hanger with multiple hooks for entryways.' },
  { id: 78, name: 'Wooden Wall Shelves',          category: 'Wooden Crafts', tag: 'Home',       image: `${BASE}/HeartfulCraft_Wooden_Intersecting_Wall_Shelves_9_efx0v4`, description: 'Handcrafted intersecting wall shelves — functional artisan home décor.' },
  { id: 79, name: 'Wooden Wall Shelves II',       category: 'Wooden Crafts', tag: 'Home',       image: `${BASE}/HeartfulCraft_Wooden_Intersecting_Wall_Shelves_8_mgzzq7`, description: 'Geometric wooden wall shelves — a bold artisan statement piece.' },

  /* ── Showpieces ─────────────────────────────── */
  { id: 80, name: 'Sailing Ship Showpiece',       category: 'Showpieces',     tag: 'Collector', image: `${BASE}/HeartfulCraft_Sailing_Ship_Showpiece_2_pny3co`,   description: 'Intricately handcrafted wooden sailing ship — a timeless showpiece.' },
  { id: 81, name: 'Sailing Ship Showpiece II',    category: 'Showpieces',     tag: 'Collector', image: `${BASE}/HeartfulCraft_Sailing_Ship_Showpiece_3_kplegp`,   description: 'Grand artisan sailing ship model — detailed craftsmanship in every sail.' },
  { id: 82, name: 'Buddha Head Statue I',         category: 'Showpieces',     tag: 'Spiritual', image: `${BASE}/HeartfulCraft_Buddha_Headface_Statue_Idol_1_kvpcmd`, description: 'Serene hand-carved Buddha head sculpture — brings calm to any space.' },
  { id: 83, name: 'Buddha Head Statue II',        category: 'Showpieces',     tag: 'Spiritual', image: `${BASE}/HeartfulCraft_Buddha_Headface_Statue_Idol_2_ko1wuu`, description: 'Artisan Buddha face idol — a symbol of peace and spiritual harmony.' },
  { id: 84, name: 'Buddha Head Statue III',       category: 'Showpieces',     tag: 'Spiritual', image: `${BASE}/HeartfulCraft_Buddha_Headface_Statue_Idol_3_zvi4qd`, description: 'Handcrafted Buddha head statue with refined artisan detailing.' },
  { id: 85, name: 'Buddha Head Statue IV',        category: 'Showpieces',     tag: 'Spiritual', image: `${BASE}/HeartfulCraft_Buddha_Headface_Statue_Idol_4_fwlq1c`, description: 'Majestic handcrafted Buddha sculpture — a centrepiece of mindful living.' },

  /* ── Bags ───────────────────────────────────── */
  { id: 86, name: 'Hand Block Laptop Bag I',      category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Laptop_Bag_1_lmnhar`,                    description: 'Hand block-printed laptop bag — carry your work in artisan style.' },
  { id: 87, name: 'Hand Block Laptop Bag II',     category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Laptop_Bag_2_mlqebc`,                    description: 'Vibrant block-print laptop bag crafted from natural cotton fabric.' },
  { id: 88, name: 'Hand Block Laptop Bag III',    category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Laptop_Bag_3_marovt`,                    description: 'Heritage print laptop bag — functional, ethical, and beautiful.' },
  { id: 89, name: 'Hand Block Laptop Bag IV',     category: 'Bags',           tag: 'Limited',    image: `${BASE}/Laptop_Bag_7_oegqn9`,                    description: 'Bold geometric block print laptop bag with comfortable carry straps.' },
  { id: 90, name: 'Hand Block Laptop Bag V',      category: 'Bags',           tag: 'Limited',    image: `${BASE}/Laptop_Bag_8_rxrtpd`,                    description: 'Earthy-toned block-printed laptop bag — sustainable artisan fashion.' },
  { id: 91, name: 'Hand Block Laptop Bag VI',     category: 'Bags',           tag: 'Bestseller', image: `${BASE}/Laptop_Bag_9_dl0sha`,                    description: 'Hand-stamped cotton laptop bag in traditional Rajasthani print.' },
  { id: 92, name: 'Hand Block Laptop Bag VII',    category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Laptop_Bag_10_bgbgkv`,                   description: 'Richly patterned block print bag — artisan craft meets everyday utility.' },
  { id: 93, name: 'Hand Block Laptop Bag VIII',   category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Laptop_Bag_11_ah1j8u`,                   description: 'Hand block-printed bag with padded compartment for 15" laptops.' },
  { id: 94, name: 'Hand Block Laptop Bag IX',     category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Laptop_Bag_12_jmohbj`,                   description: 'Folk art block-print laptop carrier — where tradition meets travel.' },
  { id: 95, name: 'Hand Block Laptop Bag X',      category: 'Bags',           tag: 'Limited',    image: `${BASE}/Laptop_Bag_14_toi9fg`,                   description: 'Intricate block-print laptop bag — ethically made, uniquely designed.' },
  { id: 96, name: 'Banjara Clutch Bag I',         category: 'Bags',           tag: 'Bestseller', image: `${BASE}/Banjara_Clutch_Bag_IMG_qqb8tp`,          description: 'Vibrant Banjara clutch with embroidered folk art and mirror work.' },
  { id: 97, name: 'Banjara Clutch Bag II',        category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Banjara_Clutch_Bag_IMG_1_ejc8sl`,        description: 'Handcrafted Banjara tribal clutch — colourful, unique, one-of-a-kind.' },
  { id: 98, name: 'Banjara Clutch Bag III',       category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Banjara_Clutch_Bag_IMG_2_dwc8xj`,        description: 'Embroidered tribal clutch with intricate Banjara mirror-work detailing.' },
  { id: 99, name: 'Banjara Clutch Bag IV',        category: 'Bags',           tag: 'Limited',    image: `${BASE}/Banjara_Clutch_Bag_IMG_3_u2splx`,        description: 'Bold and beautiful Banjara clutch — a statement piece in any outfit.' },
  { id: 100, name: 'Banjara Clutch Bag V',        category: 'Bags',           tag: 'Limited',    image: `${BASE}/Banjara_Clutch_Bag_IMG_4_uroyax`,        description: 'Colourful Banjara tribal bag with traditional embroidery and tassels.' },
  { id: 101, name: 'Duffle Bag I',                category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Duffle_Bag_myg1qt`,                      description: 'Handcrafted block-print duffle bag — spacious, sustainable, and stylish.' },
  { id: 102, name: 'Duffle Bag II',               category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Duffle_Bag_4_wcpahx`,                    description: 'Artisan cotton duffle bag with traditional hand block-print detailing.' },
  { id: 103, name: 'Duffle Bag III',              category: 'Bags',           tag: 'Bestseller', image: `${BASE}/Duffle_Bag_7_xsvaia`,                    description: 'Spacious hand-printed duffle in vibrant Rajasthani block-print fabric.' },
  { id: 104, name: 'Duffle Bag IV',               category: 'Bags',           tag: 'Limited',    image: `${BASE}/Duffle_Bag_9_ftnmfl`,                    description: 'Travel-ready artisan duffle bag — ethically handcrafted in India.' },
  { id: 105, name: 'Duffle Bag V',                category: 'Bags',           tag: 'Limited',    image: `${BASE}/Duffle_Bag_22_hl4nea`,                   description: 'Bold geometric-print duffle — a companion for the conscious traveller.' },
  { id: 106, name: 'Duffle Bag VI',               category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Duffle_Bag_25_yreham`,                   description: 'Earthy-toned block-print duffle bag — natural fabric, artisan craft.' },
  { id: 107, name: 'Duffle Bag VII',              category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Duffle_Bag_26_jg5huy`,                   description: 'Heritage-print duffle bag — handmade in India for the global traveller.' },
  { id: 108, name: 'Duffle Bag VIII',             category: 'Bags',           tag: 'Artisan',    image: `${BASE}/Duffle_Bag_30_vhjrzq`,                   description: 'Hand block-printed weekender duffle — where craft meets adventure.' },
]
