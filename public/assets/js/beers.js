{/* 
<div class="card">
    <div class="card-body">
        <h3>Josh Cabernet Sauvignon</h3>
        <p><strong>Rating: </strong>4</p>
        <p><strong>Loved it? </strong>True | <strong>Hated it? </strong>False</p>
        <p><strong>Type: </strong>Wine</p>
        <p><strong>Location: </strong>Home</p>
        <p><strong>Price: </strong>$21.25</p>
        <p><strong>Description/Notes: </strong>Bought at Total Beverage; great taste: cinnamon, cloves,
                a bit of toasty oak. Would go great with dinner but had with cheese plate and dark chocolate.</p>
    </div>
</div> 
*/}


$.get("/api/beers", data => {
    for (const beer of data) {
        const card = 
        `<div class="card">
            <div class="card-body">
                <h3>${beer.name}</h3>
                <p><strong>Rating: </strong>${beer.rating}</p>
                <p><strong>Loved it? </strong> ${beer.love === 1} | <strong>Hated it?</strong> ${beer.hate === 1}</p>
                <p><strong>Type: </strong>${beer.type}</p>
                <p><strong>Location: </strong>${beer.location || "Not specified"}</p>
                <p><strong>Price: </strong>${beer.price ? "$" + beer.price.toFixed(2) : "Not specified"}</p>
                <p><strong>Description/Notes: </strong>${beer.description || "Not specified"}</p>
            </div>
        </div>`;
        $("#drinks").append(card);
    }
});