import type { WatchSource } from 'vue';

interface Params {
	name: string;
	query: WatchSource<string>;
	delay?: number;
}

export const useRouteQuery = ({ name, query, delay }: Params) => {
	const route = useRoute();
	const router = useRouter();

	const updateQuery = (value: string) => {
		if (value) {
			return router.push({ query: { ...route.query, [name]: value } });
		}

		if (route.query[name]) {
			return router.push({ query: { ...route.query, [name]: undefined } });
		}
	};

	delay
		? watch(query, useDebounceFn(updateQuery, delay)) //
		: watch(query, updateQuery);
};
