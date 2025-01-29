import { useAsync } from '@shared/lib/useAsync';
import { $apiFetch } from '@shared/api';
import type { IProductIngredient } from '@entities/product';

export const useIngredientsSearch = (limit: number) => {
	const showAll = ref(false);
	const searchValue = ref('');
	const apiIngredient = useAsync(() =>
		$apiFetch<IProductIngredient[]>('/api/ingredient'),
	);

	const ingredients = computed(() => apiIngredient.result.value ?? []);

	const showItems = computed<IProductIngredient[]>(() => {
		if (!showAll.value) {
			return ingredients.value.slice(0, limit);
		}

		if (!searchValue.value) {
			return ingredients.value;
		}

		return ingredients.value.filter((v) =>
			v.name.toLowerCase().includes(searchValue.value.toLowerCase()),
		);
	});

	onMounted(() => {
		apiIngredient.execute();
	});

	return {
		showAll,
		showItems,
		searchValue,
		ingredients,
	};
};
