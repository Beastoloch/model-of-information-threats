import { CATEGORY_QUERY } from '../model/const';
import {
	arrayToQuery,
	numberToQuery,
	queryToArrayNaturalInt,
	queryToPositiveInt,
} from '@shared/lib/normalizedQuery';

type Queries = {
	[key in CATEGORY_QUERY]: string;
};

type QueriesAsValues = {
	[CATEGORY_QUERY.sizes]: number[];
	[CATEGORY_QUERY.types]: number[];
	[CATEGORY_QUERY.ingredients]: number[];

	[CATEGORY_QUERY.priceTo]: number;
	[CATEGORY_QUERY.priceFrom]: number;
};

type QueriesAsValuesNormalize = {
	[key in keyof QueriesAsValues]: {
		value: QueriesAsValues[key];
		normalizeCb: (query: string) => QueriesAsValues[key];
	};
};

const queryValuesToNormalizedCategoryValues = (
	query: Partial<Queries>,
): QueriesAsValues => {
	const values: QueriesAsValuesNormalize = {
		sizes: { value: [], normalizeCb: queryToArrayNaturalInt },
		ingredients: { value: [], normalizeCb: queryToArrayNaturalInt },
		types: { value: [], normalizeCb: queryToArrayNaturalInt },
		priceTo: { value: 0, normalizeCb: queryToPositiveInt },
		priceFrom: { value: 0, normalizeCb: queryToPositiveInt },
	};

	return Object.fromEntries(
		Object.entries(values).map(([key, detail]) => [
			key,
			detail.normalizeCb(query[key as keyof Queries] ?? ''),
		]),
	) as QueriesAsValues;
};

export const useCategoriesFilterQueries = () => {
	const route = useRoute();

	const normalizedValues = reactive<QueriesAsValues>(
		queryValuesToNormalizedCategoryValues(route.query),
	);

	const queries = computed<Partial<Queries>>(() =>
		Object.fromEntries(
			Object.entries({
				sizes: arrayToQuery(normalizedValues.sizes),
				types: arrayToQuery(normalizedValues.types),
				ingredients: arrayToQuery(normalizedValues.ingredients),
				priceTo: numberToQuery(normalizedValues.priceTo),
				priceFrom: numberToQuery(normalizedValues.priceFrom),
			}).filter(([_, value]) => value),
		),
	);

	watch(
		() => route.query,
		(value: Partial<Queries>) => {
			Object.assign(normalizedValues, queryValuesToNormalizedCategoryValues(value));
		},
	);

	return {
		queries,
		queriesAsNormalizesValues: normalizedValues,
	};
};
