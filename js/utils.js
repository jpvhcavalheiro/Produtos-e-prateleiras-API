$("#updateHomePageButton").click(function(){
    updateHomepage();
});

$("#homepage").click(function () {
    $("#homepageTab").show();
    $("#addShelfTab").hide();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();

});
$("#addShelfNavItem").click(function () {
    $("#homepageTab").hide();
    $("#addShelfTab").show();
    $("#addProductTab").hide();
    $("#searchShelfTab").hide();
    $("#searchProductTab").hide();
    $("#modifyShelfTab").hide();
    $("#modifyProductTab").hide();
    $("#deleteShelfTab").hide();

});
$("#submitNewShelf").click(function () {
    var productInThisShelf = new ProductInShelf($("#newProductId").val())
    var newShelf = new Shelf($("#newCapacityValue").val(), $("#newRentPrice").val(), productInThisShelf);
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/shelves",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newShelf),
        success: function (data) {
            updateHomepage()
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
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/products/",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newProduct),
        success: function (data) {
            updateHomepage();
            $("#homepageTab").show();
            $("#addShelfTab").hide();
            $("#addProductTab").hide();
            $("#searchShelfTab").hide();
            $("#searchProductTab").hide();
            $("#modifyShelfTab").hide();
            $("#modifyProductTab").hide();
            $("#deleteShelfTab").hide();   
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
$("#searchProductIdBtn").click(function () {
    if($("#searchProductId").val()>10){
        console.log("Funciona")
    }
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/products/seeproductid/" + $("#searchProductId").val(),
        type: 'GET',
        success: function (data) {
            $("#tableSearchProduct").html("<thead><tr><th>Id</th><th>discountValue</th><th>iva</th><th>pvp</th></tr></thead><tbody><tr><td>" + data.id + "</td><td>" + data.discount + "</td><td>" + data.iva + "</td><td>" + data.pvp + "</td></tr></tbody>")
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
    var modifiedShelf;
    if($("#shelfProductIdToModify").val()!=""){
        var modifiedProductInShelf=new Product($("#shelfProductIdToModify").val())
        modifiedShelf = new ShelfWithId($("#shelfCapacityToModify").val(), $("#shelfRentPriceToModify").val(), modifiedProductInShelf,$("#shelfIdToModify").val())
    } else{
        modifiedShelf = new ShelfWithId($("#shelfCapacityToModify").val(), $("#shelfRentPriceToModify").val(), null,$("#shelfIdToModify").val())
    }
    console.log(modifiedShelf)
    
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/shelves/",
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(modifiedShelf),
        success: function (data) {
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
    console.log("ola")
    var modifiedProduct = new ProductWithId($("#productDiscountValueToModify").val(), $("#productIvaToModify").val(), $("#productPvpToModify").val(),$("#productIdToModify").val())
    console.log("ola2")
    console.log(modifiedProduct)
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/Products/",
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















