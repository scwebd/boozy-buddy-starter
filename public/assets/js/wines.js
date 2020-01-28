$.get("/api/wines", data => {
    for (const wine of data) {
        const card = 
        `<div class="card">
            <div class="card-body">
                <h3>${wine.name}</h3>
                <p><strong>Rating: </strong>${wine.rating}</p>
                <p><strong>Loved it? </strong> ${wine.love === 1} | <strong>Hated it?</strong> ${wine.hate === 1}</p>
                <p><strong>Type: </strong>${wine.type}</p>
                <p><strong>Location: </strong>${wine.location || "Not specified"}</p>
                <p><strong>Price: </strong>${wine.price ? "$" + wine.price.toFixed(2) : "Not specified"}</p>
                <p><strong>Description/Notes: </strong>${wine.description || "Not specified"}</p>
            </div>
        </div>`;
        $("#drinks").append(card);
    }
});