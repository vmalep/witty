/**
 * List of trophies
 */
function GetTrophy(scorePc) {
    const Trophy = [
        "https://www.acmebrooklyn.com/wp-content/uploads/2021/06/TR067.jpg",
        "https://www.trophysupermarket.com/media/catalog/product/cache/1/image/8c93d93e589e0bf9e4f87044ad269d3f/r/s/rs93.jpg",
        "https://cdn.shopify.com/s/files/1/1832/7321/products/sdfds_1080x1080.jpg?v=1560143101",
        "https://cdn11.bigcommerce.com/s-241f7/images/stencil/2048x2048/products/1378/3347/New_Couch_Potata__27241.1610313831.jpg?c=2"
    ]
    
    if (scorePc <= 25) return(Trophy[3])
        else if (scorePc <= 50) return(Trophy[2])
        else if (scorePc <= 75) return(Trophy[1])
        else return(Trophy[0])
}


export default GetTrophy;