<script setup lang="ts">
import CategoriesFilterCheckbox from './CategoriesFilterCheckbox.vue';
import { useRouteQueryArray } from '@shared/lib/useRouteQueryArray';
import { defaultProductTypes } from '@entities/product';
import { CATEGORY_QUERY } from '../model/const';

const { t } = useI18n();
const { has, toggle } = useRouteQueryArray({ queryName: CATEGORY_QUERY.types });
const types = computed(() => defaultProductTypes());
</script>
<template>
	<div>
		<p class="font-bold mb-3">{{ t('product_filter.types') }}</p>
		<div class="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
			<CategoriesFilterCheckbox
				v-for="type in types"
				:key="type.value"
				:checked="has(type.value)"
				@update:checked="toggle(type.value)"
			>
				{{ type.name }}
			</CategoriesFilterCheckbox>
		</div>
	</div>
</template>
