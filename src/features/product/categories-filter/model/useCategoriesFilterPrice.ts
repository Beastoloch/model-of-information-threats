import { useRouteQuery } from '@shared/lib/useRouteQuery';
import { queryToPositiveInt } from '@shared/lib/normalizedQuery';
import { CATEGORY_QUERY } from '../model/const';

interface Params {
	min: number;
	max: number;
}

export const useCategoriesFilterPrice = ({ min, max }: Params) => {
	const query = useRoute().query;

	const priceTo = queryToPositiveInt(query[CATEGORY_QUERY.priceTo] as string);
	const priceFrom = queryToPositiveInt(query[CATEGORY_QUERY.priceFrom] as string);

	const price = ref([
		priceTo < min || !priceTo ? min : priceTo, //
		priceFrom > max || !priceFrom ? max : priceFrom,
	]);

	// @TODO надо синхронизировать debounce,
	// либо useRouteQuery дать возможно обрабатывать массивы

	useRouteQuery({
		name: CATEGORY_QUERY.priceFrom,
		query: () => String(price.value[1]),
		delay: 200,
	});

	useRouteQuery({
		name: CATEGORY_QUERY.priceTo,
		query: () => String(price.value[0]),
		delay: 200,
	});

	return {
		price,
	};
};
