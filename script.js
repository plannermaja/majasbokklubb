document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hämta värden från formuläret
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const review = document.getElementById('review-text').value;
    const imageFile = document.getElementById('book-image').files[0];

    // Skapa ett nytt recensionselement
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    
    let reviewHTML = `
        <h3>${title}</h3>
        <p class="review-author">av ${author}</p>
        <p>${review}</p>
    `;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            reviewHTML = `<img src="${imageUrl}" alt="Bokbild">` + reviewHTML;
            reviewElement.innerHTML = reviewHTML;
            document.getElementById('review-list').appendChild(reviewElement);
        };
        reader.readAsDataURL(imageFile);
    } else {
        reviewElement.innerHTML = reviewHTML;
        document.getElementById('review-list').appendChild(reviewElement);
    }

    // Töm formuläret
    document.getElementById('review-form').reset();
});
