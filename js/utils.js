$("#homepage").click(function () {
    $("#homepageTab").show()
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();

});
$("#addShelfNavItem").click(function () {
    $("#homepageTab").hide()
    $("#addShelfTab").show();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();

});
$("#submitNewShelf").click(function () {
    var newShelf = new Shelf($("#newCapacityValue").val(), $("#newRentPrice").val(), $("#newProductId").val());
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Shelves",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newShelf),
        success: function (data) {
        }
    })
});
$("#addProductNavItem").click(function () {
    $("#homepageTab").hide()
    $("#addShelfTab").hide();
    $("#addProductTab").show();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();

});
$("#submitNewProduct").click(function () {
    var newProduct = new Product($("#newDiscountValue").val(), $("#newIva").val(), $("#newPrice").val())
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Products",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newProduct),
        success: function (data) {
        }
    })
});
$("#searchShelfNavItem").click(function () {
    $("#homepageTab").hide()
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").show();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();

});
$("#searchShelfIdBtn").click(function () {
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/shelves/seeshelfid/" + $("#searchShelfId").val(),
        type: 'GET',
        success: function (data) {
            $("#tableSearchShelf").html("<thead><tr><th>Id</th><th>Capacity</th><th>rentPrice</th><th>ProductId</th></tr></thead><tbody><tr><td>" + data.id + "</td><td>" + data.capacity + "</td><td>" + data.rentPrice + "</td><td>" + data.productInShelf + "</td></tr></tbody>")
        }
    })
});
$("#searchProductNavItem").click(function () {
    $("#homepageTab").hide()
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").show();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();
})
$("#searchProductTab").click(function () {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Products/" + $("#searchProductId").val(),
        type: 'GET',
        success: function (data) {
            $("#tableSearchProduct").html("<thead><tr><th>Id</th><th>discountValue</th><th>iva</th><th>pvp</th></tr></thead><tbody><tr><td>" + data.id + "</td><td>" + data.discountValue + "</td><td>" + data.iva + "</td><td>" + data.pvp + "</td></tr></tbody>")
        }
    })
})
$("#modifyShelfNavItem").click(function () {
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").show();
    $("#modifyProductTab").hide()
    $("#homepageTab").hide();
    $("#deleteShelfTab").hide();

})

$("#modifyShelfBtn").click(function () {
    console.log("ola")
    var modifiedShelf = new Shelf($("#shelfCapacityToModify").val(), $("#shelfRentPriceToModify").val(), $("#shelfProductIdToModify").val())
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Shelves/" + $("#shelfIdToModify").val(),
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(modifiedShelf),
        success: function (data) {
            console.log(data)
        }

    })
})
$("#modifyProductNavItem").click(function () {
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").show()
    $("#homepageTab").hide();
    $("#deleteShelfTab").hide();

})
$("#modifyProductBtn").click(function () {
    var modifiedProduct = new Product($("#productDiscountValueToModify").val(), $("#productIvaToModify").val(), $("#productPvpToModify").val())
    console.log("https://mcupacademy.herokuapp.com/api/Products/" + $("#productIdToModify").val())
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Products/" + $("#productIdToModify").val(),
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(modifiedProduct),
        success: function (data) {
            console.log(data)
        }
    })
});
$("#deleteShelfNavItem").click(function () {
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#homepageTab").hide();
    $("#deleteShelfTab").show();
})
$("#deleteShelfBtn").click(function () {
    console.log("https://mcupacademy.herokuapp.com/api/Shelves/" + $("#shelfIdToDelete").val())
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Shelves/" + $("#shelfIdToDelete").val(),
        type: 'DELETE',
        contentType: 'application/json',
        success: function (data) {
            console.log(data)
        }
    })
})













