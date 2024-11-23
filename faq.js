const faqs = document.querySelectorAll(".faq-section");

faqs.forEach(faq => {
    faq.addEventListener("click", function(){
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('rotate');
        }
    });
});

