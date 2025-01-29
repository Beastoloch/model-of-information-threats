<script setup lang="ts">
import { type IProductCategory } from '@entities/product';
import {
	ProductCategoriesGroup,
	ProductCategoriesFeed,
} from '@features/product/categories-group';
import {
	CategoriesFilter,
	useCategoriesFilterQueries,
} from '@features/product/categories-filter';
import { Stories } from '@widgets/stories';
import { $apiFetch } from '@shared/api';

const { t } = useI18n();
const { queries } = useCategoriesFilterQueries();
const { data } = await useAsyncData<IProductCategory[]>(
	'categories',
	() => $apiFetch('/api/category', { query: queries.value }),
	{
		watch: [queries],
	},
);

const categories = computed<IProductCategory[]>(() =>
	data.value ? data.value.filter((v) => v.products.length) : [],
);
</script>
<template>
	<UiContainer class="mt-5">
		<UiTitle size="lg" class="font-extrabold">
			{{ t('pages.home.title') }}
		</UiTitle>
	</UiContainer>

	<div class="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
		<UiContainer class="flex items-center justify-between">
			<ProductCategoriesFeed :categories="categories" />
		</UiContainer>
	</div>

	<Stories />

	<UiContainer class="mt-10 pb-14">
		<div class="flex gap-[80px]">
			<div class="w-[250px]">
				<CategoriesFilter />
			</div>

			<div class="flex-1">
				<div class="flex flex-col gap-16">
					<ProductCategoriesGroup
						v-for="category in categories"
						:id="category.name"
						:key="category.id"
						:category="category"
					/>
				</div>
			</div>
		</div>
	</UiContainer>

	<!--место под модалку. надо бы suspense бы еще туды-->
	<NuxtPage />
</template>
