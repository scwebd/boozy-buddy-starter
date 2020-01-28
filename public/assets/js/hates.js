$.get("/api/hates", data => {
    for (const hate of data) {
        const card = 
        `<div class="card">
            <div class="card-body">
                <h3>${hate.name}</h3>
                <p><strong>Rating: </strong>${hate.rating}</p>
                <p><strong>Loved it? </strong> ${hate.love === 1} | <strong>Hated it?</strong> ${hate.hate === 1}</p>
                <p><strong>Type: </strong>${hate.type}</p>
                <p><strong>Location: </strong>${hate.location || "Not specified"}</p>
                <p><strong>Price: </strong>${hate.price ? "$" + hate.price.toFixed(2) : "Not specified"}</p>
                <p><strong>Description/Notes: </strong>${hate.description || "Not specified"}</p>
            </div>
        </div>`;
        $("#drinks").append(card);
    }
});