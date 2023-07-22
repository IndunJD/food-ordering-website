import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  fresh,
  quality,
  delivery,
  shipping,
  servebgimage,
  food01,
  food02,
  food03,
  cheficon,
  menu01,
  menu02,
  menu03,
  menu04,
  menu05,
  menu06,
  menu07,
  menu08,
  menu09,
  menu10,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    img: fresh,
    bg: servebgimage,
    title: "Fresh Food",
    content: "Delight in the Freshest Flavors, Straight from Nature's Bounty",
  },
  {
    id: "feature-2",
    img: quality,
    bg: servebgimage,
    title: "Best Quality",
    content:
      "Elevating Taste to New Heights, Crafted with Uncompromising Standards",
  },
  {
    id: "feature-3",
    img: delivery,
    bg: servebgimage,
    title: "Fast Delivery",
    content: "Savory Delights, Swiftly Delivered to Satisfy Your Cravings",
  },
  {
    id: "feature-4",
    img: shipping,
    bg: servebgimage,
    title: "Free Shipping",
    content:
      "Indulgence without Extra Cost, Bringing Culinary Excellence to Your Doorstep",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    content:
      "The attention to detail, the impeccable service, and, above all, the extraordinary flavors that transport me to different corners of the world—this restaurant truly sets the standard for excellence.",
    name: "Sara Lee Cooper",
    img: people01,
  },
  {
    id: "testimonial-2",
    content:
      "The menu at Gourmet is a delightful journey through various cultures. I am always amazed at how they manage to maintain authenticity while incorporating unique twists. Every bite is an adventure, and I can't recommend this place enough.",
    name: "David Murphy",
    img: people02,
  },
  {
    id: "testimonial-3",
    content:
      "Absolutely phenomenal! I can confidently say that this restaurant is a hidden gem, and I can't wait to return for another extraordinary dining experience!",
    name: "Emily Blunt",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "YEARS OF EXPERIENCE",
    value: "25+",
  },
  {
    id: "stats-2",
    title: "AWARDS",
    value: "25+",
  },
  {
    id: "stats-3",
    title: "CLIENT REVIEWS",
    value: "2.5k+",
  },
  {
    id: "stats-4",
    title: "DAILY VISITORS",
    value: "400+",
  },
];

export const dishes = [
  {
    id: "dishes-1",
    img: food01,
    title: "Squid Inc Pasta",
    price: "$ 28",
  },
  {
    id: "dishes-2",
    img: food02,
    title: "Beetroot Burger",
    price: "$ 6.50",
  },
  {
    id: "dishes-3",
    img: food03,
    title: "Chicken Ramen",
    price: "$ 11.46",
  },
];

export const chefs = [
  {
    id: "chef-1",
    img: cheficon,
    content: "Our team of expert chefs: Masters of culinary craft",
  },
  {
    id: "chef-2",
    img: cheficon,
    content: "Unique skills and deep passion for cooking.",
  },
  {
    id: "chef-3",
    img: cheficon,
    content: "Remarkable flavor combinations and stunning presentations",
  },
  {
    id: "chef-4",
    img: cheficon,
    title: "Infusing creativity and expertise into every dish",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
      },
      {
        name: "About Us",
      },
      {
        name: "Menu",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Newsletter",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: facebook,
  },
  {
    id: "social-media-2",
    icon: instagram,
  },
  {
    id: "social-media-3",
    icon: twitter,
  },
  {
    id: "social-media-4",
    icon: linkedin,
  },
];

export const foodMenu = [
  {
    id: "01",
    img: menu01,
    category: "foods",
    title: "French Bread Pizza",
    description:
      "Craving homemade pizza, but don’t want to deal with finicky pizza dough? We get it, that stuff can be tricky. Skip it altogether, and grab the nearest loaf of French bread instead.",
    prize: "$ 14.98",
  },
  {
    id: "02",
    img: menu02,
    category: "beverages",
    title: "Blueberry juice",
    description:
      "What’s more, eating whole blueberries is a healthier, lower sugar option that may provide similar benefits.",
    prize: "$ 3.91",
  },
  {
    id: "03",
    img: menu03,
    category: "beverages",
    title: "Sugarcane Juice",
    description:
      "Sugarcane juice is one of the essential precursors to rum and is obtained by crushing peeled sugar cane in a mill. ",
    prize: "$ 9",
  },
  {
    id: "04",
    img: menu04,
    category: "foods",
    title: "Stuffed Pepper Casserole",
    description:
      "This recipe begins with the ingredients you love from classic stuffed peppers: ground beef, large chunks of peppers and onion, a deep bench of seasonings, and a tomato-heavy broth. A cup of rice dives into that pool of liquid gold, the whole thing slides in the oven, and within minutes, you have a warm and hearty meal ready to feed a crowd.",
    prize: "$ 8",
  },
  {
    id: "05",
    img: menu05,
    category: "foods",
    title: "One-Pan Lemon Parm Chicken Gnocchi",
    description:
      "There’s nothing more comforting than a creamy pasta dish, and this one-pan meal couldn’t be easier to make. It's the perfect segue from summer into fall, as it's warm and comforting, but still simple and fresh.",
    prize: "$ 5.79",
  },

  {
    id: "06",
    img: menu06,
    category: "beverages",
    title: "Orange Juice",
    description:
      "Orange juice is not only a delicious and healthy drink, but it is also packed with essential vitamins and minerals. It only takes a few minutes to make, so there’s really no excuse to not enjoy fresh orange juice!",
    prize: "$ 2.21",
  },
  {
    id: "07",
    img: menu07,
    category: "foods",
    title: "Taco Spaghetti",
    description:
      "One-pot taco spaghetti is a fast-as-can-be weeknight dinner that pairs all your favorite taco fixin’s with spaghetti rather than taco shells. It's especially perfect for those nights when you just cannot stand the thought of a sink full of dirty dishes.",
    prize: "$ 6.39",
  },
  {
    id: "08",
    img: menu08,
    category: "foods",
    title: "Creamy Steak Fettuccine",
    description:
      "When we crave steak, this dish is always at the top of our list. It comes together quickly and is so full of flavor, plus the steak makes it feel extra special. It might just make you forget chicken Alfredo ever existed.",
    prize: "$ 18",
  },
  {
    id: "09",
    img: menu09,
    category: "beverages",
    title: "Pineapple Juice",
    description:
      "Not only is pineapple juice delicious and easy to make, but it's also one of the top 5 healthiest fruits you can easily find or obtain. Pineapple is an excellent choice for people looking to enjoy a delicious and nutritious beverage, as it is packed with vitamins and minerals like vitamin C, manganese, folate, and thiamin.",
    prize: "$ 2.8",
  },
  {
    id: "10",
    img: menu10,
    category: "beverages",
    title: "Watermelon Juice",
    description:
      "If you still wonder which juice is good for health, the answer is watermelon juice (among others), without a shadow of a doubt! It contains essential minerals and vitamins that promote better heart health, maintain blood pressure, and provide hydration.",
    prize: "$ 2",
  },
]