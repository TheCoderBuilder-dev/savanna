// Gallery Data for Savanna Fine Dining
const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        alt: "Signature dish presentation"
    },
    {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600",
        alt: "Private dining room"
    },
    {
        src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600",
        alt: "Chef preparing dish"
    },
    {
        src: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=600",
        alt: "Wine cellar"
    },
    {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
        alt: "Plated dessert"
    },
    {
        src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600",
        alt: "Appetizer course"
    },
    {
        src: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600",
        alt: "Restaurant ambiance"
    }
];

// Render Gallery Items
function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Initialize gallery on DOM load
document.addEventListener('DOMContentLoaded', renderGallery);
