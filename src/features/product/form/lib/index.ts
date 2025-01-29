import {
	type IProductItem,
	type IProductIngredient,
	defaultMapProductTypes,
	defaultProductSizes,
} from '@entities/product';

interface GetProductDetailsParams {
	type: number;
	size: number;
	items: IProductItem[];
	ingredients: IProductIngredient[];
	selectedIngredients: Set<number>;
}

export interface ChooseVariant {
	name: string;
	value: number;
	disabled?: boolean;
}

export const getProductTotalPrice = ({
	type,
	size,
	items,
	ingredients,
	selectedIngredients,
}: GetProductDetailsParams) => {
	const pizzaPrice =
		items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	return pizzaPrice + totalIngredientsPrice;
};

export const getProductDetails = (params: GetProductDetailsParams) => {
	return {
		totalPrice: getProductTotalPrice(params),
		priceText: `${params.size} см, ${defaultMapProductTypes()[params.type]} пицца`,
	};
};

export const getAvailableProductItems = (
	pizzaType: number,
	items: IProductItem[],
): ChooseVariant[] => {
	const availableProducts = items.filter((v) => v.pizzaType === pizzaType);
	return defaultProductSizes().map((size) => ({
		...size,
		disabled: !availableProducts.some((v) => v.size === size.value),
	}));
};
