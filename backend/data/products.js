const products = [
{
 
  name: 'Airpods Wireless Headphones',
  image: '/images/airpods.jpg',
  description:
    'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  brand: 'Apple',
  category: 'Electronics',
  price: 2500,
  countInStock: 10,
  rating: 4.5,
  numReviews: 12,
},
{
  
  name: 'iPhone 11 Pro 256GB Memory',
  image: '/images/i-phone.jpg',
  description:
    'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  brand: 'Apple',
  category: 'Electronics',
  price: 100000,
  countInStock: 7,
  rating: 4.0,
  numReviews: 8,
},
{
  
  name: 'Cannon EOS 80D DSLR Camera',
  image: '/images/camera.jpg',
  description:
    'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
  brand: 'Cannon',
  category: 'Electronics',
  price:96498,
  countInStock: 5,
  rating: 3,
  numReviews: 12,
},
{
  
  name: 'Sony Playstation 4 Pro White Version',
  image: '/images/playstation.jpg',
  description:
    'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
  brand: 'Sony',
  category: 'Electronics',
  price: 8000,
  countInStock: 11,
  rating: 5,
  numReviews: 12,
},
{
  
  name: 'Logitech G-Series Mouse',
  image: '/images/mouse.jpg',
  description:
    'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
  brand: 'Logitech',
  category: 'Electronics',
  price:1200,
  countInStock: 7,
  rating: 3.5,
  numReviews: 10,
},
{
 
  name: 'FIIO Walkman',
  image: '/images/walkman.jpg',
  description:
    'HIZS AP80 PRO Hi-Fi Bluetooth MP3 Player, Portable Hi-Res Digital Music Player with LDAC/aptX/DSD/FM Radio,Lossless Music Player with Full Touch Screen',
  brand: 'FIIO',
  category: 'Electronics',
  price: 7500,
  countInStock: 0,
  rating: 4,
  numReviews: 12,
},
{

  name: 'SHANY Glamour Makeup Kit ',
  image: '/images/Beautykit.jfif',
  description:
    'The elegant, vintage style packaging of this makeup kit is sure to appeal to teens, while the reasonable price makes it a great gift.',
  brand: 'SHANY ',
  category: 'Cosmetics',
  price: 625,
  countInStock: 7,
  rating: 4,
  numReviews: 11,
},
{

  name: 'Fogg Master',
  image: '/images/Bodyspray.jfif',
  description:
    'Premium Perfumes for Men',
  brand: 'Fogg',
  category: 'Cologne',
  price: 220,
  countInStock: 17,
  rating: 4.6,
  numReviews: 21,
},
{
 
  name: 'Clay craft set',
  image: '/images/clayCraftSet.jfif',
  description:
    'Finest Bone china set',
  brand: 'Bharat',
  category: 'Pottery',
  price: 780,
  countInStock: 6,
  rating: 4.6,
  numReviews: 10,
},
{
 
  name: 'Tea cup',
  image: '/images/Cup.jfif',
  description:
    'Morning Green tea cup',
  brand: 'Cello',
  category: 'Pottery',
  price: 59,
  countInStock: 26,
  rating: 3.2,
  numReviews: 6,
},
{
  
  name: 'Cups and Kettle',
  image: '/images/CupandKettle.jfif',
  description:
    'Premium hot beverage set',
  brand: 'Cello',
  category: 'Utensils',
  price: 1265,
  countInStock: 4,
  rating: 4.4,
  numReviews: 7,
},
{
 
  name: 'Amazon Echo ',
  image: '/images/echo.jfif',
  description:
    'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  brand: 'Amazon',
  category: 'Electronics',
  price: 1500,
  countInStock: 3,
  rating: 4.2,
  numReviews: 17,
},
{
 
  name: 'Window Curtain',
  image: '/images/curtain.jfif',
  description:
    'Attractive and modern design Window curtain',
  brand:'Bombay Dyeing',
  category: 'Decorations',
  price: 960,
  countInStock: 0,
  rating: 4,
  numReviews: 12,
},
{
 
  name: 'Diary',
  image: '/images/diary.jfif',
  description:
    'White page 2021 diary',
  brand: 'Amazon',
  category: 'Stationery',
  price: 110,
  countInStock: 30,
  rating: 4.8,
  numReviews: 4,
},
{
 
  name: 'Floor tiles',
  image: '/images/FloorTiles.jfif',
  description:'Floor tiles',
  brand: 'Somany',
  category: 'Paints and Cement',
  price: 800,
  countInStock: 1667,
  rating: 4,
  numReviews: 56,
},
{
 
  name: 'Louis Vuitton Hand bag',
  image: '/images/Handbag.jfif',
  description:
    'Blue Leather durable premium handbag',
  brand: ' Louis Vuitton',
  category: 'Leather',
  price: 3675,
  countInStock: 5,
  rating: 4.5,
  numReviews: 19,
},
{
 
  name: 'Dettol Hand Sanitizer',
  image: '/images/HandSanitizer.jfif',
  description:
    'Kills 99.9% germs',
  category: 'Cosmetics',
  brand:'Dettol',
  price: 70,
  countInStock: 0,
  rating: 4.9,
  numReviews: 27,
},
{
 
  name: 'Lifebuoy Hand Wash',
  image: '/images/Handwash.jfif',
  description:
    'Helps in Germ protection and maintaining hygiene.',
    brand: 'Lifebuoy',
  category: 'Cosmetics',
  price: 45,
  countInStock: 80,
  rating: 4.3,
  numReviews: 105,
},
{
 
  name: 'Ladies Goggles',
  image: '/images/Ladiesgoggles.jfif',
  description:
    'Best quality sun glasses. Prevents harmful UV-b rays',
  brand: 'Fast track',
  category: 'Eye ware',
  price: 425,
  countInStock: 38,
  rating: 4.1,
  numReviews: 26,
},
{
  
  name: 'Ladies Wrist watch',
  image: '/images/LadiesWatch.jfif',
  description:
    'Funky watches for girls and women',
  brand: 'Timex',
  category: 'Luxury',
  price: 3500,
  countInStock: 11,
  rating: 4.2,
  numReviews: 12,
},
{ 
 
  name: 'Forever Moisturizer',
  image: '/images/Moisturizer.jfif',
  description:
    'Prevents sun-light damage and tones the skin.',
  brand: 'Loreal',
  category: 'Cosmetis',
  price: 145,
  countInStock: 10,
  rating: 4.3,
  numReviews: 25,
},
{
  
  name: 'Pintola peanut butter',
  image: '/images/peanutButter.jfif',
  description:
    'High quality protein enriched chocolate flavoured peanut butter for healthy and balanced breakfast',
  brand: 'Pintola',
  category: 'Food',
  price: 380,
  countInStock: 8,
  rating: 4.7,
  numReviews: 14,
},
{ 
 
  name: 'Pillow',
  image: '/images/Pillow.jfif',
  description:
    'Soft cotton sofa pillow',
  brand: 'Reliance',
  category: 'Textile',
  price: 370,
  countInStock: 4,
  rating: 3.9,
  numReviews: 23,
},
{
 
  name: 'Basmati Rice',
  image: '/images/Rice.jfif',
  description:
    'Classical Indian Basmati rice for daily consumption.',
  brand: 'India Gate ',
  category: 'Food',
  price: 450,
  countInStock: 40,
  rating: 4.4,
  numReviews: 84,
},
{
 
  name: 'Marriage ring',
  image: '/images/Ring.jfif',
  description:
    '22 carat gold ring by tanishq',
  brand: 'Tanishq',
  category: 'Jewellery',
  price: 44000,
  countInStock: 2,
  rating: 4.9,
  numReviews: 10,
},
{
 
  name: 'Antique show piece',
  image: '/images/ShowPiece.jfif',
  description:
    'Contemporary Showpieces Art',
  brand: 'Archies',
  category: 'Decorations',
  price: 799,
  countInStock: 40,
  rating: 4.1,
  numReviews: 3,
},
{
 
  name: 'Stool',
  image: '/images/stool.jfif',
  description:
    'Wooden 2.5 feet stool',
  brand: 'Supreme',
  category: 'Furniture',
  price: 600,
  countInStock: 1,
  rating: 4,
  numReviews: 0,
},
{

  name: 'Table',
  image: '/images/Table.jfif',
  description:
    'Study and Office table',
  brand: 'Local',
  category: 'Furniture',
  price: 1350,
  countInStock: 3,
  rating: 4.5,
  numReviews: 6,
},
{
  
  name: 'Tablet',
  image: '/images/tablet.jfif',
  description:
    '3Gb ramand 32 Gb storage ,10.1 inch display, Wifi-Hotspot Availble, Gorilla glass display',
  brand: 'Lennovo',
  category: 'Electronics',
  price: 14000,
  countInStock: 16,
  rating: 3.8,
  numReviews: 10,
},
{
 
  name: 'MI TV',
  image: '/images/TV.jfif',
  description:
    'Smart Andro television,32 inch screen with Super HD display',
  brand: 'Xiaomi',
  category: 'Electronics',
  price: 16000,
  countInStock: 4,
  rating: 4.7,
  numReviews: 4,
},
{
 
  name: 'Wallet',
  image: '/images/wallet.jfif',
  description:
  'Clay coloured durable multi pocket wallet',
  brand: 'Hornbull',
  category: 'Leather',
  price: 599,
  countInStock: 30,
  rating: 4.6,
  numReviews: 15,
},
{ 
 
  name: 'Wallpaper',
  image: '/images/wallpaper.jfif',
  description:
    'Designs suitable for all type of walls',
  brand: 'D decor',
  category: 'Dacorations',
  price: 800,
  countInStock: 20,
  rating: 4.2,
  numReviews: 21,
},

]
export default products