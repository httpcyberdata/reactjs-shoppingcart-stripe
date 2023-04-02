
const productsArray = [
	{
		id: "price_1MsDBaCYr3ZHX3d1bf3XpIyf",
		title: "Coffee",
		price: 4.99
	},
	{
		id: "price_1MsDGPCYr3ZHX3d1cuMc9LIO",
		title: "Sunglasses",
		price: 1.25
	},
	{
		id: "price_1MsDGvCYr3ZHX3d1W4d4hHvI",
		title: "Coffee Warmer",
		price: 2.11
	},
	{
		id: "price_1MsDHHCYr3ZHX3d1fOB3VmUM",
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