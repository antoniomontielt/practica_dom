const iPhones = [
    {
      name: "iPhone 15 Pro Max",
      price: 1399,
      imageUrl: "https://m.media-amazon.com/images/I/815eN0AS-CL._AC_SL1500_.jpg",
      storage: "1TB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone 15 Pro",
      price: 1199,
      imageUrl: "https://m.media-amazon.com/images/I/81nHfLrIogL._AC_SL1500_.jpg",
      storage: "512GB",
      vendor: "TechWorld",
      brand: "Apple"
    },
    {
      name: "iPhone 15",
      price: 899,
      imageUrl: "https://m.media-amazon.com/images/I/71CW36JRavL._AC_SL1500_.jpg",
      storage: "256GB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone 14 Pro Max",
      price: 1099,
      imageUrl: "https://m.media-amazon.com/images/I/610pghkO81L._AC_SL1500_.jpg",
      storage: "128GB",
      vendor: "PhoneCenter",
      brand: "Apple"
    },
    {
      name: "iPhone 14",
      price: 799,
      imageUrl: "https://m.media-amazon.com/images/I/619f09kK7tL._AC_SL1500_.jpg",
      storage: "512GB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone 13 Pro Max",
      price: 999,
      imageUrl: "https://m.media-amazon.com/images/I/61RAsVPOjxL._AC_SL1500_.jpg",
      storage: "1TB",
      vendor: "TechWorld",
      brand: "Apple"
    },
    {
      name: "iPhone 13",
      price: 699,
      imageUrl: "https://m.media-amazon.com/images/I/61LLhELDAbL._AC_SL1500_.jpg",
      storage: "128GB",
      vendor: "PhoneCenter",
      brand: "Apple"
    },
    {
      name: "iPhone 12",
      price: 599,
      imageUrl: "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_SL1500_.jpg",
      storage: "64GB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone SE (3ª Gen)",
      price: 429,
      imageUrl: "https://m.media-amazon.com/images/I/61TOWf11+jL._AC_SL1500_.jpg",
      storage: "256GB",
      vendor: "TechWorld",
      brand: "Apple"
    },
    {
      name: "iPhone XR",
      price: 399,
      imageUrl: "https://m.media-amazon.com/images/I/61VpNsUXOJL._AC_SL1411_.jpg",
      storage: "128GB",
      vendor: "PhoneCenter",
      brand: "Apple"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1299,
        imageUrl: "https://m.media-amazon.com/images/I/518-9ZaLFML._AC_SL1500_.jpg",
        storage: "512GB",
        vendor: "TechWorld",
        brand: "Samsung"
    },
    {
        name: "Google Pixel 8 Pro",
        price: 1099,
        imageUrl: "https://m.media-amazon.com/images/I/71iCxoF7m-L._AC_SL1500_.jpg",
        storage: "256GB",
        vendor: "PhoneCenter",
        brand: "Google"
    },
    {
        name: "OnePlus 11",
        price: 899,
        imageUrl: "https://m.media-amazon.com/images/I/512wQ0SVSrL._AC_SL1000_.jpg",
        storage: "256GB",
        vendor: "Cyber",
        brand: "OnePlus"
    },
    {
        name: "Xiaomi 13 Pro",
        price: 999,
        imageUrl: "https://m.media-amazon.com/images/I/613MutpiXcL._AC_SL1500_.jpg",
        storage: "512GB",
        vendor: "PhoneCenter",
        brand: "Xiaomi"
    },
    {
        name: "Sony Xperia 1 V",
        price: 1199,
        imageUrl: "https://m.media-amazon.com/images/I/91TDYB7rxEL._AC_SL1500_.jpg",
        storage: "256GB",
        vendor: "TechWorld",
        brand: "Sony"
    },
    {
        name: "Huawei P60 Pro",
        price: 1099,
        imageUrl: "https://m.media-amazon.com/images/I/71TrxGfNn-L._AC_SL1500_.jpg",
        storage: "512GB",
        vendor: "Cyber",
        brand: "Huawei"
    },
    {
        name: "Motorola Edge 40 Pro",
        price: 799,
        imageUrl: "https://m.media-amazon.com/images/I/71NpY04JOFL._AC_SL1500_.jpg",
        storage: "256GB",
        vendor: "PhoneCenter",
        brand: "Motorola"
    },
    {
        name: "Nothing Phone (2)",
        price: 699,
        imageUrl: "https://m.media-amazon.com/images/I/61oycK5i7qL._AC_SL1090_.jpg",
        storage: "128GB",
        vendor: "Cyber",
        brand: "Nothing"
    },
    {
        name: "Asus ROG Phone 7",
        price: 1199,
        imageUrl: "https://m.media-amazon.com/images/I/81UPV6kdVGL._AC_SL1500_.jpg",
        storage: "1TB",
        vendor: "TechWorld",
        brand: "Asus"
    }
  ];

  const iPhoneStorages = [];
  const iPhoneVendors = [];
  const iPhoneModels = [];
  const iPhoneBrands = [];
  
  for (const iPhone of iPhones) {
    const card = document.createElement("article");
    card.classList.add("card-shop");
    const searchResults = document.querySelector(".cards-container-shop");
    searchResults.appendChild(card);
    const cardImg = document.createElement("img");
    cardImg.src = iPhone.imageUrl;
    card.appendChild(cardImg);
    const cardDesc = document.createElement("p");
    cardDesc.innerText = iPhone.name;
    card.appendChild(cardDesc);
    const cardGb = document.createElement("p");
    cardGb.innerText = iPhone.storage;
    card.appendChild(cardGb);
    const cardPrice = document.createElement("p");
    cardPrice.innerText = `${iPhone.price}€`;
    card.appendChild(cardPrice);
    const cardBtn = document.createElement("a");
    cardBtn.innerText = "Comprar ya";
    card.appendChild(cardBtn);
    if (!iPhoneStorages.includes(iPhone.storage)) {
        iPhoneStorages.push(iPhone.storage)
    };
    if(!iPhoneVendors.includes(iPhone.vendor)) {
        iPhoneVendors.push(iPhone.vendor);
    }
    if(!iPhoneModels.includes(iPhone.name)) {
        iPhoneModels.push(iPhone.name);
    }
    if(!iPhoneBrands.includes(iPhone.brand)) {
        iPhoneBrands.push(iPhone.brand);
    }
  };

  document.querySelectorAll(".filter-title").forEach(title => {
    title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        content.classList.toggle("open");

    })
  });

const storageFilter = document.querySelector("#filter-storage");
const ulStorage = document.createElement("ul");
ulStorage.classList.add("ul-storage-filter");

  for (const iPhoneStorage of iPhoneStorages) {
    const li = document.createElement("li");
    li.classList.add("li-storage-filter");
    const storage = document.createElement("input");
    storage.type = "checkbox";
    storage.value = iPhoneStorage;
    storage.id = `storage-${iPhoneStorage}`;

    const label = document.createElement("label");
    label.htmlFor = storage.id;
    label.innerText = `${iPhoneStorage}`;

    li.appendChild(storage);
    li.appendChild(label);
    ulStorage.appendChild(li);
  }

storageFilter.appendChild(ulStorage);

const brandFilter = document.querySelector("#filter-brand");
const ulBrand = document.createElement("ul");
ulBrand.classList.add("ul-storage-filter");

for (const iPhoneBrand of iPhoneBrands) {
    const li = document.createElement("li");
    li.classList.add("li-storage-filter");
    const brand = document.createElement("input");
    brand.type = "checkbox";
    brand.value = iPhoneBrand;
    brand.id = `brand-${iPhoneBrand}`;

    const label = document.createElement("label");
    label.htmlFor = brand.id;
    label.innerText = `${iPhoneBrand}`;

    li.appendChild(brand);
    li.appendChild(label);
    ulBrand.appendChild(li);
}

brandFilter.appendChild(ulBrand);

const vendorFilter = document.querySelector("#filter-vendor");
const ulVendor = document.createElement("ul");
ulVendor.classList.add("ul-storage-filter");

for (const iPhoneVendor of iPhoneVendors) {
    const li = document.createElement("li");
    li.classList.add("li-storage-filter");
    const vendor = document.createElement("input");
    vendor.value = iPhoneVendor;
    vendor.id = `brand-${iPhoneVendor}`;
    vendor.type = "checkbox";
    
    const label = document.createElement("label");
    label.htmlFor = vendor.id;
    label.innerText = `${iPhoneVendor}`;

    li.appendChild(vendor);
    li.appendChild(label);
    ulVendor.appendChild(li);
}

vendorFilter.appendChild(ulVendor);

const minPrice = Math.min(...iPhones.map(i => i.price));
const maxPrice = Math.max(...iPhones.map(i => i.price));

const filterPrice = document.querySelector("#filter-price");
const priceContainer = document.createElement("div");
priceContainer.classList.add("price-filter-container");

const minInput = document.createElement("input");
minInput.type = "number";
minInput.value = minPrice;
minInput.min = minPrice;
minInput.max = maxPrice;
minInput.id = "min-price";

const maxInput = document.createElement("input");
maxInput.type = "number";
maxInput.value = maxPrice;
maxInput.min = minPrice;
maxInput.max = maxPrice;
maxInput.id = "max-price";

const priceInputs = document.createElement("div");
priceInputs.classList.add("price-inputs");
priceInputs.appendChild(minInput);
priceInputs.appendChild(maxInput);

const rangeInput = document.createElement("input");
rangeInput.type = "range";
rangeInput.min = minPrice;
rangeInput.max = maxPrice;
rangeInput.value = maxPrice;
rangeInput.id = "price-range";

minInput.addEventListener("input", () => {
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
        minInput.value = maxInput.value;
    }
    rangeInput.value = minInput.value;
    filterProducts();
});

maxInput.addEventListener("input", () => {
    if (parseInt(maxInput.value) < parseInt(minInput.value)) {
        maxInput.value = minInput.value;
    }
    rangeInput.value = maxInput.value;
    filterProducts();
});


rangeInput.addEventListener("input", () => {
    maxInput.value = rangeInput.value;
    filterProducts();
});


priceContainer.appendChild(priceInputs);
priceContainer.appendChild(rangeInput);
filterPrice.appendChild(priceContainer);


function filterProducts() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const filteredPhones = iPhones.filter(phone => phone.price >= min && phone.price <= max);
    
    const searchResults = document.querySelector(".cards-container-shop");
    searchResults.innerHTML = ""; 
    
    for (const phone of filteredPhones) {
        const card = document.createElement("article");
        card.classList.add("card-shop");
        card.innerHTML = `
            <img src="${phone.imageUrl}" alt="${phone.name}">
            <p>${phone.name}</p>
            <p>${phone.storage}</p>
            <p>${phone.price}€</p>
            <a href="#">Comprar ya</a>
        `;
        searchResults.appendChild(card);
    }
}

let currentPage = 1;
const itemsPerPage = 9;
let filteredPhones = [...iPhones];

function renderPagination() {
    const totalPages = Math.ceil(filteredPhones.length / itemsPerPage);
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add("pagination-btn");
        if (i === currentPage) button.classList.add("active");

        button.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
        });

        paginationContainer.appendChild(button);
    }
}

function renderProducts() {
    const searchResults = document.querySelector(".cards-container-shop");
    searchResults.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredPhones.slice(start, end);

    for (const phone of productsToShow) {
        const card = document.createElement("article");
        card.classList.add("card-shop");
        card.innerHTML = `
            <img src="${phone.imageUrl}" alt="${phone.name}">
            <p>${phone.name}</p>
            <p>${phone.storage}</p>
            <p>${phone.price}€</p>
            <a href="#">Comprar ya</a>
        `;
        searchResults.appendChild(card);
    }

    renderPagination();
}

function filterProducts() {
    const min = parseInt(document.querySelector("#min-price").value);
    const max = parseInt(document.querySelector("#max-price").value);

    const selectedBrands = [...document.querySelectorAll("#filter-brand input:checked")].map(el => el.value);
    const selectedStorages = [...document.querySelectorAll("#filter-storage input:checked")].map(el => el.value);
    const selectedVendors = [...document.querySelectorAll("#filter-vendor input:checked")].map(el => el.value);

    filteredPhones = iPhones.filter(phone => 
        phone.price >= min && phone.price <= max &&
        (selectedBrands.length === 0 || selectedBrands.includes(phone.brand)) &&
        (selectedStorages.length === 0 || selectedStorages.includes(phone.storage)) &&
        (selectedVendors.length === 0 || selectedVendors.includes(phone.vendor))
    );

    currentPage = 1; 
    renderProducts();
}


document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});


document.querySelectorAll("#filter-brand input, #filter-storage input, #filter-vendor input").forEach(input => {
    input.addEventListener("change", filterProducts);
});




  
  


  
  
