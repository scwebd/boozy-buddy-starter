$.get("/api/cocktails", data => {
    for (const cocktail of data) {
        const card = 
        `<div class="card">
            <div class="card-body">
                <h3>${cocktail.name}</h3>
                <p><strong>Rating: </strong>${cocktail.rating}</p>
                <p><strong>Loved it? </strong> ${cocktail.love === 1} | <strong>Hated it?</strong> ${cocktail.hate === 1}</p>
                <p><strong>Type: </strong>${cocktail.type}</p>
                <p><strong>Location: </strong>${cocktail.location || "Not specified"}</p>
                <p><strong>Price: </strong>${cocktail.price ? "$" + cocktail.price.toFixed(2) : "Not specified"}</p>
                <p><strong>Description/Notes: </strong>${cocktail.description || "Not specified"}</p>
            </div>
        </div>`;
        $("#drinks").append(card);
    }
});