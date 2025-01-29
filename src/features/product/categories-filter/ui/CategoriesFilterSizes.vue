<script setup lang="ts">
import CategoriesFilterCheckbox from './CategoriesFilterCheckbox.vue';
import { useRouteQueryArray } from '@shared/lib/useRouteQueryArray';
import { defaultProductSizes } from '@entities/product';
import { CATEGORY_QUERY } from '../model/const';

const { t } = useI18n();
const { has, toggle } = useRouteQueryArray({ queryName: CATEGORY_QUERY.sizes });
const sizes = computed(() => defaultProductSizes());
</script>
<template>
	<div>
		<p class="font-bold mb-3">{{ t('product_filter.sizes') }}</p>
		<div class="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
			<CategoriesFilterCheckbox
				v-for="size in sizes"
				:key="size.value"
				:checked="has(size.value)"
				@update:checked="toggle(size.value)"
			>
				{{ size.name }} см
			</CategoriesFilterCheckbox>
		</div>
	</div>
</template>
