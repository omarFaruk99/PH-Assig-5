   // js to add/remove scroll-class
   window.addEventListener("scroll", function () {
    const header = document.getElementById("na-header");
    // Check if the page has been scrolled more than 50px
    if (window.scrollY > 50) {
        header.classList.add('bg-gray/95', 'backdrop-blur-sm'); // Make background transparent and add blur effect
        header.classList.remove('bg-gray/90'); // Remove the less transparent background
    } else {
        header.classList.add('bg-gray/90'); // Revert to original background
        header.classList.remove('bg-gray/95', 'backdrop-blur-sm'); // Remove transparency and blur
    }
})