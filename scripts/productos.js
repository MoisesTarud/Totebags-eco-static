// Datos de productos estructurados
const productsData = {
    totebags: [
        {
            id: 1,
            name: "ToteBag Cianotipia bordado floral",
            price: 50000,
            image: "img/totebags/totebag1.png",
            category: "totebags"
        },
        {
            id: 2,
            name: "ToteBag Cianotipia Naturaleza",
            price: 45000,
            image: "img/totebags/totebag2.png",
            category: "totebags"
        },
        {
            id: 3,
            name: "ToteBag Cianotipia bordado minimalista",
            price: 48000,
            image: "img/totebags/totebag3.png",
            category: "totebags"
        },
        {
            id: 4,
            name: "ToteBag Cianotipia bordado minimalista",
            price: 48000,
            image: "img/totebags/totebag4.png",
            category: "totebags"
        },
        {
            id: 5,
            name: "ToteBag Cianotipia bordado minimalista",
            price: 48000,
            image: "img/totebags/totebag5.png",
            category: "totebags"
        },
        {
            id: 6,
            name: "ToteBag Cianotipia Naturaleza",
            price: 45000,
            image: "img/totebags/totebag6.png",
            category: "totebags"
        },
        {
            id: 7,
            name: "ToteBag Cianotipia Mariposa",
            price: 45000,
            image: "img/totebags/totebag7.png",
            category: "totebags"
        },
        {
            id: 8,
            name: "ToteBag Cianotipia Dibujo a mano de limon",
            price: 55000,
            image: "img/totebags/totebag11.png",
            category: "totebags"
        },
        {
            id: 9,
            name: "ToteBag Cianotipia Minimalista Mariposas",
            price: 45000,
            image: "img/totebags/totebag10.png",
            category: "totebags"
        },
        {
            id: 10,
            name: "ToteBag Cianotipia Clásica",
            price: 47000,
            image: "img/totebags/totebag12.png",
            category: "totebags"
        },
        {
            id: 11,
            name: "ToteBag Cianotipia Hongos",
            price: 45000,
            image: "img/totebags/totebag9.png",
            category: "totebags"
        },
        {
            id: 12,
            name: "ToteBag Cianotipia Clásica",
            price: 45000,
            image: "img/totebags/totebag8.png",
            category: "totebags"
        }

    ],
    accessories: [
        {
            id: 1,
            name: "Kit de Cianotipia",
            price: 60000,
            image: "img/accesorios/kit_cianotipia.png",
            category: "accessories"
        },
        {
            id: 2,
            name: "Aretes Cianotipia Clásicos",
            price: 12000,
            image: "img/accesorios/aretes.png",
            category: "accessories"
        },
        {
            id: 3,
            name: "Aretes Cianotipia varios",
            price: 12000,
            image: "img/accesorios/aretes2.png",
            category: "accessories"
        },
        {
            id: 4,
            name: "Botones Cianotipia",
            price: 5000,
            image: "img/accesorios/botones.png",
            category: "accessories"
        }
    ]
};

// Función para renderizar productos (se ejecutará desde main.js)
function renderProducts() {
    const sections = {
        totebags: {
            container: document.querySelector('.products-section .container'),
            title: "Nuestras ToteBags"
        },
        accessories: {
            container: document.querySelector('.accessories-section .container'),
            title: "Nuestros Accesorios"
        }
    };

    for (const category in sections) {
        const productsContainer = sections[category].container.querySelector('.products-row');
        
        productsData[category].forEach(product => {
            productsContainer.innerHTML += `
                <div class="product-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price.toLocaleString('es-CO')}</p>
                    <button class="add-to-cart">Añadir al carrito</button>
                </div>
            `;
        });
    }
}