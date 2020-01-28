$.get("/api/loves", data => {
    for (const love of data) {
        const card = 
        `<div class="card">
            <div class="card-body">
                <h3>${love.name}</h3>
                <p><strong>Rating: </strong>${love.rating}</p>
                <p><strong>Loved it? </strong> ${love.love === 1} | <strong>Hated it?</strong> ${love.hate === 1}</p>
                <p><strong>Type: </strong>${love.type}</p>
                <p><strong>Location: </strong>${love.location || "Not specified"}</p>
                <p><strong>Price: </strong>${love.price ? "$" + love.price.toFixed(2) : "Not specified"}</p>
                <p><strong>Description/Notes: </strong>${love.description || "Not specified"}</p>
            </div>
        </div>`;
        $("#drinks").append(card);
    }
});