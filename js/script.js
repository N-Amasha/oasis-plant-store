// Sample Data
const products = [
    { name: "Thin Bamboo", price: "1,700", oldPrice: "2,200", img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=400&q=80" },
    { name: "ZZ Plant Premium", price: "2,600", oldPrice: "3,200", img: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80" },
    { name: "Lady Palm", price: "14,500", oldPrice: "19,000", img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80" },
    { name: "Premium Monstera", price: "1,500", oldPrice: "1,900", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80" },
    { name: "Lucky Bamboo", price: "2,800", oldPrice: "3,500", img: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&w=400&q=80" }
];

function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);

    productList.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <div style="padding: 10px 0;">
                <h4 style="font-size: 0.9rem;">${prod.name}</h4>
                <p style="font-weight: bold; color: var(--dark-green); margin-top: 5px;">Rs.${prod.price}</p>
                ${prod.oldPrice ? `<small style="text-decoration: line-through; color: #999;">Rs.${prod.oldPrice}</small>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('flash-sale-grid', products);
    renderProducts('just-for-you-grid', [...products, ...products]); // Repeat items for the larger grid
});