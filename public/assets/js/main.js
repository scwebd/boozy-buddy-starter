$("#add-btn").on("click", function(event) {
    event.preventDefault();

    const newDrink = {
        name: $("#drink-name").val().trim(),
        type: $("#drink-type").val(),
        location: $("#drink-location").val().trim(),
        price: $("#drink-price").val().trim(),
        description: $("#drink-description").val().trim(),
        rating: $("input[name='rating']:checked").val(),
        love: $("#love").is(":checked"),
        hate: $("#hate").is(":checked")
    }

    if (!newDrink.name || !newDrink.type || !newDrink.rating) {
        return alert("You must specify at least name, type, and rating when adding a drink!");
    }

    $.post("/api/drinks", newDrink, () => {
        location.href = `/${newDrink.type}s`;
    });

    $("#add-drink")[0].reset();
});