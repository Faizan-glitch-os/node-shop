const products = [
  {
    title: "Pakistan",
    img: "https://www.hdwallpapers.in/download/green_white_star_satin_pakistan_flag_hd_pakistan_flag-1600x900.jpg",
    price: 18,
    description: "Flag of Pakistan",
  },
  {
    title: "Pakistan",
    img: "https://www.hdwallpapers.in/download/green_white_star_satin_pakistan_flag_hd_pakistan_flag-1600x900.jpg",
    price: 18,
    description: "Flag of Pakistan",
  },
  {
    title: "Pakistan",
    img: "https://www.hdwallpapers.in/download/green_white_star_satin_pakistan_flag_hd_pakistan_flag-1600x900.jpg",
    price: 18,
    description: "Flag of Pakistan",
  },
  {
    title: "Pakistan",
    img: "https://www.hdwallpapers.in/download/green_white_star_satin_pakistan_flag_hd_pakistan_flag-1600x900.jpg",
    price: 18,
    description: "Flag of Pakistan",
  },
  {
    title: "Pakistan",
    img: "https://www.hdwallpapers.in/download/green_white_star_satin_pakistan_flag_hd_pakistan_flag-1600x900.jpg",
    price: 18,
    description: "Flag of Pakistan",
  },
  {
    title: "Pakistan",
    img: "https://www.hdwallpapers.in/download/green_white_star_satin_pakistan_flag_hd_pakistan_flag-1600x900.jpg",
    price: 18,
    description: "Flag of Pakistan",
  },
];

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    products,
  });
};
