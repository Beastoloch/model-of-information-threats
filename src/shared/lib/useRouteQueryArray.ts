import { useRouteQuery } from '@shared/lib/useRouteQuery';
import { arrayToQuery, queryToArrayInt } from '@shared/lib/normalizedQuery';

type QueryValue = string | number;
type Params = { queryName: string };

export const useRouteQueryArray = ({ queryName }: Params) => {
	const route = useRoute();
	const values = reactive(
		new Set<QueryValue>(queryToArrayInt(route.query[queryName] as string)),
	);
	const query = computed(() => arrayToQuery([...values.values()]));

	const select = (value: QueryValue, add: boolean) => {
		add ? values.add(value) : values.delete(value);
	};

	const toggle = (value: QueryValue) => {
		select(value, !has(value));
	};

	const has = (value: QueryValue) => {
		return values.has(value);
	};

	useRouteQuery({ name: queryName, query });

	return {
		has,
		select,
		toggle,
		query,
		values,
	};
};
