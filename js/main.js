$(document).ready(function () {
    console.log("ready!");

});
$("#addShelfTab").hide();
$("#addProductTab").hide();
$("#searchShelfTab").hide();
$("#searchProductTab").hide();
$("#modifyShelfTab").hide();
//$("#homepageTab").hide();
$("#modifyProductTab").hide()
$("#deleteShelfTab").hide()
var products = []
var shelves = []
function updateHomepage() {
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/products/seeall",
        type: 'GET',
        success: function (data) {
            products = data
            $("#tableProducts").html("<thead><tr><th>Id</th><th>discountValue</th><th>iva</th><th>pvp</th></tr></thead><tbody id='tbodyAllProducts'></tbody>")
            for (let i = 0; i < data.length; i++) {
                $("#tbodyAllProducts").append("<tr><td>" + data[i].id + "</td><td>" + data[i].discount + "</td><td>" + data[i].iva + "</td><td>" + data[i].pvp + "</td></tr>")
            }
        }
    });
    $.ajax({
        url: "http://localhost:8080/StockManagementStates3FloorsEndpoints/api/shelves/seeall",
        type: 'GET',
        success: function (data) {
            shelves = data
            $("#tableShelves").html("<thead><tr><th>Id</th><th>Capacity</th><th>rentPrice</th><th>ProductId</th></tr></thead><tbody id='tbodyAllShelves'></tbody>")
            for (let i = 0; i < data.length; i++) {
                if(data[i].productDTOInShelf!=null){
                    $("#tbodyAllShelves").append("<tr><td>"+data[i].id+"</td><td>" + data[i].capacity + "</td><td>" + data[i].rentPrice + "</td><td>" + data[i].productDTOInShelf.id + "</td>")
                } else{
                    $("#tbodyAllShelves").append("<tr><td>"+data[i].id+"</td><td>" + data[i].capacity + "</td><td>" + data[i].rentPrice + "</td><td>" + null + "</td>")
                }
                
            }
        }
    });
}

updateHomepage()
