
const productsArray = [
	{
		id: "1",
		title: "Coffee",
		price: 4.99
	},
	{
		id: "2",
		title: "Sunglasses",
		price: 1.25
	},
	{
		id: "3",
		title: "Coffee Warmer",
		price: 2.11
	},
	{
		id: "4",
		title: "Russian Hat",
		price: 4500 
	}
];

function getProductData(id) {
	let productData = productsArray.find(product => product.id === id);

	if(productData == undefined) {
		console.log("Product data does not exist for ID: " + id);
		return undefined;
	}
	return productData;
}


export { productsArray, getProductData };