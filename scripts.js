let cart = [];
let restaurants = [
  {
    id: 1,
    name: "Jersey Mike's",
    cuisine: ["American", "Italian", "Sandwiches"],
    rating: 3.9,
    priceRange: "10-20",
    image:
      "https://www.visitbrookfield.com/wp-content/uploads/2023/11/Jersey-Mikes.png",
  },
  {
    id: 2,
    name: "Habit Burger & Grill",
    cuisine: ["American", "Burgers"],
    rating: 3.8,
    priceRange: "10-20",
    image:
      "https://download.logo.wine/logo/The_Habit_Burger_Grill/The_Habit_Burger_Grill-Logo.wine.png",
  },
  {
    id: 3,
    name: "Chipotle Mexican Grill",
    cuisine: ["Healthy", "Mexican", "Burritos"],
    rating: 2.3,
    priceRange: "10-20",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png",
  },
  {
    id: 4,
    name: "Smashburger",
    cuisine: ["American", "Burgers"],
    rating: 4.2,
    priceRange: "1-10",
    image:
      "https://www.logolounge.com/wp-content/uploads/2024/10/Smashburger_Logo.jpg",
  },
  {
    id: 5,
    name: "Panera",
    cuisine: ["American", "Breakfast", "Sandwich", "Soup", "Salad"],
    rating: 3.6,
    priceRange: "10-20",
    image:
      "https://gmrencen.com/wp-content/uploads/2016/03/panera_holdingshape_lockup_NO_R-scaled.jpg",
  },
  {
    id: 6,
    name: "Mighty Quinn's Barbeque",
    cuisine: ["American", "BBQ", "Sandwiches", "Chicken", "Wings"],
    rating: 4.6,
    priceRange: "10-20",
    image:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/covermighty.jpg",
  },
  {
    id: 7,
    name: "Van Gogh's Ear Cafe",
    cuisine: ["American", "Cafe", "Sandwich", "Salads", "Pizza"],
    rating: 4.5,
    priceRange: "10-20",
    image:
      "https://static.spotapps.co/website_images/ab_websites/255881_website_v1/logo.png",
  },
  {
    id: 8,
    name: "Local Urban Kitchen",
    cuisine: ["Coffee", "Tea", "Breakfast", "Salads", "Sandwiches"],
    rating: 4.5,
    priceRange: "10-20",
    image:
      "https://www.localurbankitchen.com/wp-content/uploads/2011/07/LUK-logo.png",
  },
  {
    id: 9,
    name: "Gaia & Loki",
    cuisine: ["Sandwiches", "Vegan", "Diners", "Vegetarian", "Breakfast"],
    rating: 4.6,
    priceRange: "20-30",
    image:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/308502015_541388257989955_7438473117735810698_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BUxT0tBVVIgQ7kNvgGdhcNH&_nc_oc=AdnXvmkdUBAhTISUtfSeDWqGcuWQh7FE3ukGzT_C2JTVQ_4YJVbC9hyMfH7WaOyvWoX_EFGaOd6Td34ZNN7qBxFV&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=lxqdXWpbE_PYoIhCSEz3jQ&oh=00_AYEJD-MDLKzXqwC_AUwXIJrUnsRFmwxTO3ZUoDBMWkU0KA&oe=67DFA77F",
  },
  {
    id: 10,
    name: "Healthy Garden & Gourmet Pizza",
    cuisine: ["Pizza", "Healthy", "Salads", "American", "Mediterranean"],
    rating: 4.3,
    priceRange: "10-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYdsm2TqRFGLMCJ9nHy0_s2ATiD05mGpdbA&s",
  },
];
const menuItems = [
  [
    "#13 The Original Italian",
    "#7 Turkey & Provolone",
    "#8 Club Sub",
    "#17 Mike's Famous Philly",
    "#10 Tuna Fish",
  ],
  [
    "Charburger",
    "Double Char with Cheese",
    "Santa Barbara Char",
    "Onion Rings",
    "Sweet Potato Fries",
  ],
  [
    "Chicken Burrito",
    "Steak Bowl",
    "Barbacoa Tacos",
    "Carnitas Quesadilla",
    "Chips & Guacamole",
  ],
  [
    "Classic Smash",
    "Bacon Stack Smash",
    "Double Classic Smash",
    "Crispy Brussels Sprouts",
    "Sweet Potato Waffle Fries",
  ],
  [
    "Toasted Frontega Chicken",
    "Southwest Chicken Ranch Salad",
    "Chipotle Chicken Avocado Melt",
    "Chicken Bacon Rancher",
    "Fuji Apple Chicken Salad",
  ],
  [
    "Brisket Sandwich",
    "Pulled Pork",
    "Spare Ribs",
    "Burnt Ends Baked Beans",
    "Smoked Chipotle Turkey Sandwich",
  ],
  [
    "Chicken Focaccia Sandwich",
    "Bruleed Cheesecake",
    "Quesadilla",
    "Plain Pizza Flatbread",
    "Brown Derby",
  ],
  [
    "Chicken Panini",
    "Mushroom Swiss Burger",
    "Black Bean Burger",
    "Joe Leone Omelette",
    "Breakfast Burrito",
  ],
  [
    "Plant-Based Gyro",
    "Bacon Onion Ring Burger",
    "Mushroom Alfredo",
    "Linguini Bolognese",
    "Fried Pineapple Rice",
  ],
  [
    "Southwestern Quesadilla",
    "Angus Beef Burger",
    "Garden Beauty Salad",
    "Chicken Kabob",
    "Jumbo Buffalo Wings",
  ],
];
function showSection(sectionId) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
  if (sectionId === "restaurants") {
    renderRestaurants();
  }
}
function toggleCart() {
  const cartSidebar = document.querySelector(".cart-sidebar");
  cartSidebar.classList.toggle("active");
}
function filterRestaurants() {
  const selectedCuisines = Array.from(
    document.querySelectorAll(".filter-checkbox:checked")
  ).map((cb) => cb.value);

  const selectedRatings = Array.from(
    document.querySelectorAll(".filter-rating:checked")
  ).map((cb) => parseFloat(cb.value));

  let filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine =
      selectedCuisines.length === 0 ||
      restaurant.cuisine.some((c) => selectedCuisines.includes(c));

    const matchesRating =
      selectedRatings.length === 0 ||
      selectedRatings.some((rating) => restaurant.rating >= rating);

    return matchesCuisine && matchesRating;
  });

  renderRestaurants(filteredRestaurants);
}
function renderRestaurants(sortedList = restaurants) {
  const restaurantGrid = document.getElementById("restaurant-grid");
  restaurantGrid.innerHTML = "";

  sortedList.forEach((restaurant) => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
        <img src="${restaurant.image}" alt="${
      restaurant.name
    }" class="restaurant-img">
        <h3>${restaurant.name}</h3>
        <p>Cuisine: ${restaurant.cuisine.join(", ")}</p>
        <p>Rating: ${restaurant.rating}</p>
        <p>Price Range: $${restaurant.priceRange}</p>
        <button onclick="showMenu(${restaurant.id}, this)">View Menu</button>
        <div class="menu" id="menu-${restaurant.id}"></div>
      `;
    restaurantGrid.appendChild(card);
  });
}
function showMenu(restaurantId, button) {
  const menu = document.getElementById(`menu-${restaurantId}`);
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.innerHTML = "";
    return;
  }
  document.querySelectorAll(".menu").forEach((m) => {
    if (m.id !== `menu-${restaurantId}`) {
      m.classList.remove("active");
      m.innerHTML = "";
    }
  });
  menu.innerHTML = "";
  menuItems[restaurantId - 1].forEach((item) => {
    const price = (Math.random() * 15 + 5).toFixed(2);
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
          <span>${item} - $${price}</span>
          <button onclick="addToCart('${item}', ${price})">Add</button>
        `;
    menu.appendChild(menuItem);
  });
  menu.classList.add("active");
}
function addToCart(item, price) {
  const existingItem = cart.find((c) => c.item === item);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ item, price: parseFloat(price), quantity: 1 });
  }
  updateCart();
}
function updateCart() {
  const cartList = document.getElementById("cart-items");
  let total = 0;
  cartList.innerHTML = "";
  cart.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `
          ${c.item} - $${c.price.toFixed(2)}
          <span>Qty: ${c.quantity}</span>
          <button onclick="removeFromCart('${c.item}')">Remove</button>
        `;
    cartList.appendChild(li);
    total += c.price * c.quantity;
  });
  document.getElementById("total").textContent = total.toFixed(2);
}
function removeFromCart(item) {
  cart = cart.filter((c) => c.item !== item);
  updateCart();
}
function redirectToCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", document.getElementById("total").textContent);
  window.location.href = "checkout.html";
}
function sortRestaurants() {
  const sortBy = document.getElementById("sort-by").value;
  let sortedRestaurants = [...restaurants];
  switch (sortBy) {
    case "price-low":
      sortedRestaurants.sort(
        (a, b) =>
          parseFloat(a.priceRange.split("-")[0]) -
          parseFloat(b.priceRange.split("-")[0])
      );
      break;
    case "price-high":
      sortedRestaurants.sort(
        (a, b) =>
          parseFloat(b.priceRange.split("-")[0]) -
          parseFloat(a.priceRange.split("-")[0])
      );
      break;
    case "name-asc":
      sortedRestaurants.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedRestaurants.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "rating-asc":
      sortedRestaurants.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      sortedRestaurants.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  renderRestaurants(sortedRestaurants);
}
const featuredRestaurants = [
  {
    name: "Mighty Quinn's Barbeque",
    image:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/covermighty.jpg",
    rating: "4.6 Stars",
  },
  {
    name: "Van Gogh's Ear Cafe",
    image:
      "https://static.spotapps.co/website_images/ab_websites/255881_website_v1/logo.png",
    rating: "4.5 Stars",
  },
  {
    name: "Local Urban Kitchen",
    image:
      "https://www.localurbankitchen.com/wp-content/uploads/2011/07/LUK-logo.png",
    rating: "4.5 Stars",
  },
  {
    name: "Gaia & Loki",
    image:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/308502015_541388257989955_7438473117735810698_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BUxT0tBVVIgQ7kNvgGdhcNH&_nc_oc=AdnXvmkdUBAhTISUtfSeDWqGcuWQh7FE3ukGzT_C2JTVQ_4YJVbC9hyMfH7WaOyvWoX_EFGaOd6Td34ZNN7qBxFV&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=lxqdXWpbE_PYoIhCSEz3jQ&oh=00_AYEJD-MDLKzXqwC_AUwXIJrUnsRFmwxTO3ZUoDBMWkU0KA&oe=67DFA77F",
    rating: "4.6 Stars",
  },
  {
    name: "Healthy Garden & Gourmet Pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYdsm2TqRFGLMCJ9nHy0_s2ATiD05mGpdbA&s",
    rating: "4.3 Stars",
  },
];
let index = 0;
function renderFeaturedRestaurants() {
  const container = document.getElementById("carousel-inner");
  container.innerHTML = "";
  featuredRestaurants.forEach((restaurant, i) => {
    const card = document.createElement("div");
    card.className = "featured-card";
    card.innerHTML = `
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <h3>${restaurant.name}</h3>
          <p>${restaurant.rating}</p>
        `;
    container.appendChild(card);
  });
}
function nextSlide() {
  index = (index + 1) % featuredRestaurants.length;
  updateCarousel();
}
function prevSlide() {
  index = (index - 1 + featuredRestaurants.length) % featuredRestaurants.length;
  updateCarousel();
}
function updateCarousel() {
  const container = document.getElementById("carousel-inner");
  const cardWidth = 250;
  container.style.transform = `translateX(${-index * cardWidth}px)`;
}
renderFeaturedRestaurants();
showSection("home");
