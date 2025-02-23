const iPhones = [
    {
      name: "iPhone 15 Pro Max",
      price: 1399,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-finish-select-202309-6-7inch-naturaltitanium",
      storage: "1TB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone 15 Pro",
      price: 1199,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium",
      storage: "512GB",
      vendor: "TechWorld",
      brand: "Apple"
    },
    {
      name: "iPhone 15",
      price: 899,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue",
      storage: "256GB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone 14 Pro Max",
      price: 1099,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple",
      storage: "128GB",
      vendor: "PhoneCenter",
      brand: "Apple"
    },
    {
      name: "iPhone 14",
      price: 799,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue",
      storage: "512GB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone 13 Pro Max",
      price: 999,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-finish-unselect-gallery-1-202203",
      storage: "1TB",
      vendor: "TechWorld",
      brand: "Apple"
    },
    {
      name: "iPhone 13",
      price: 699,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-unselect-gallery-1-202203",
      storage: "128GB",
      vendor: "PhoneCenter",
      brand: "Apple"
    },
    {
      name: "iPhone 12",
      price: 599,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202203",
      storage: "64GB",
      vendor: "Cyber",
      brand: "Apple"
    },
    {
      name: "iPhone SE (3ª Gen)",
      price: 429,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-unselect-gallery-1-202203",
      storage: "256GB",
      vendor: "TechWorld",
      brand: "Apple"
    },
    {
      name: "iPhone XR",
      price: 399,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-finish-unselect-gallery-1-202203",
      storage: "128GB",
      vendor: "PhoneCenter",
      brand: "Apple"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1299,
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/es/galaxy-s23-ultra/",
        storage: "512GB",
        vendor: "TechWorld",
        brand: "Samsung"
    },
    {
        name: "Google Pixel 8 Pro",
        price: 1099,
        imageUrl: "https://store.google.com/product_images/pixel_8_pro",
        storage: "256GB",
        vendor: "PhoneCenter",
        brand: "Google"
    },
    {
        name: "OnePlus 11",
        price: 899,
        imageUrl: "https://www.oneplus.com/oneplus-11-image.jpg",
        storage: "256GB",
        vendor: "Cyber",
        brand: "OnePlus"
    },
    {
        name: "Xiaomi 13 Pro",
        price: 999,
        imageUrl: "https://i02.appmifile.com/mi-com-product/images/xiaomi-13-pro",
        storage: "512GB",
        vendor: "PhoneCenter",
        brand: "Xiaomi"
    },
    {
        name: "Sony Xperia 1 V",
        price: 1199,
        imageUrl: "https://www.sony.com/image/xperia-1-v",
        storage: "256GB",
        vendor: "TechWorld",
        brand: "Sony"
    },
    {
        name: "Huawei P60 Pro",
        price: 1099,
        imageUrl: "https://consumer.huawei.com/p60-pro-image/",
        storage: "512GB",
        vendor: "Cyber",
        brand: "Huawei"
    },
    {
        name: "Motorola Edge 40 Pro",
        price: 799,
        imageUrl: "https://motorola.com/image/motorola-edge-40-pro",
        storage: "256GB",
        vendor: "PhoneCenter",
        brand: "Motorola"
    },
    {
        name: "Nothing Phone (2)",
        price: 699,
        imageUrl: "https://nothing.tech/products/phone-2",
        storage: "128GB",
        vendor: "Cyber",
        brand: "Nothing"
    },
    {
        name: "Asus ROG Phone 7",
        price: 1199,
        imageUrl: "https://rog.asus.com/product/rog-phone-7",
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




  
  


  
  
