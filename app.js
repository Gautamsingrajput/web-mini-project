const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// Dummy user credentials for testing
const dummyUser = {
  email: "user@example.com",
  password: "password123"
};

// Selecting elements
const login = document.getElementById("login");
const closelogin = document.getElementById("closeLogin");
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");
const userInfo = document.getElementById("userInfo");

// // Check if user is logged in
// function checkLoginStatus() {
//   const user = localStorage.getItem("user");
//   if (user) {
//       userInfo.textContent = `Logged in as: ${JSON.parse(user).email}`;
//       loginForm.style.display = "none";
//       logoutButton.style.display = "block";
//   } else {
//       userInfo.textContent = "Not logged in";
//       loginForm.style.display = "block";
//       logoutButton.style.display = "none";
//   }
// }




// Show login form
login.addEventListener("click", function () {
  loginContainer.style.display = "flex";
});

closelogin.addEventListener("click", function () {
  loginContainer.style.display = "none";
});

// Login function
// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   loginForm.style.display = "none";
//   logoutButton.style.display = "none";
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
  
//   if (email === dummyUser.email && password === dummyUser.password) {
//       localStorage.setItem("user", JSON.stringify(dummyUser));
//       alert("Login successful!");
//       checkLoginStatus();
//   } else {
//       alert("Invalid email or password!");
//   }
// });

// // Logout function
// logoutButton.addEventListener("click", function () {
//   localStorage.removeItem("user");
//   alert("Logged out successfully!");
//   checkLoginStatus();
// });

// // Initialize login status on page load
// checkLoginStatus();


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

        // Check if the login was successful
    window.onload = function() {
      const urlParams = new URLSearchParams(window.location.search);
          if (urlParams.has('login_success')) {
              const loginButton = document.getElementById('login');
              if (loginButton) {
                  loginButton.innerText = 'Welcome Back';
              }
          }
      };



function search_product() {
  let input = document.getElementById('searchPro').value.toLowerCase();
  let list = document.getElementById("searchResults");
  list.innerHTML = ""; // Clear previous results

  if (input === "") {
      list.style.display = "none"; // Hide if input is empty
      return;
  }

  let found = false;

  for (let i = 0; i < products.length; i++) {
      if (products[i].title.toLowerCase().includes(input)) {
          list.innerHTML += `<li onclick="selectProduct('${products[i].title}')">${products[i].title}</li>`;
          found = true;
      }
  }

  list.style.display = found ? "block" : "none"; // Show results only if matches exist
}

// Function to handle product selection
function selectProduct(title) {
  document.getElementById('searchPro').value = title; // Fill input with selected product
  document.getElementById('searchResults').style.display = "none"; // Hide dropdown
}


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  payment.style.display = "none";
});


function submitForm() {
  let paymentData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      cardNumber: document.getElementById("cardNumber").value,
      expiryMonth: document.getElementById("expiryMonth").value,
      expiryYear: document.getElementById("expiryYear").value,
      cvv: document.getElementById("cvv").value
  };

  fetch("save_payment.php", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(paymentData)
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => console.error("Error:", error));
}

