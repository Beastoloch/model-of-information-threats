<script setup lang="ts">
import CategoriesFilterCheckbox from './CategoriesFilterCheckbox.vue';
import { useIngredientsSearch } from '../model/useIngredientsSearch';
import { CATEGORY_QUERY } from '../model/const';
import { useRouteQueryArray } from '@shared/lib/useRouteQueryArray';

const { t } = useI18n();
const { limit = 6 } = defineProps<{ limit?: number }>();

const { showAll, showItems, ingredients, searchValue } = useIngredientsSearch(limit);
const { has, toggle } = useRouteQueryArray({ queryName: CATEGORY_QUERY.ingredients });
</script>
<template>
	<div>
		<p class="font-bold mb-3">Ингридиенты</p>

		<div v-if="showAll" class="mb-5">
			<UiInput
				:placeholder="t('product_filter.group.search')"
				v-model="searchValue"
				class="bg-gray-50 border-none"
			/>
		</div>

		<div class="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
			<CategoriesFilterCheckbox
				v-for="item in showItems"
				:key="item.id"
				:checked="has(item.id)"
				@update:checked="toggle(item.id)"
			>
				{{ item.name }}
			</CategoriesFilterCheckbox>
		</div>

		<div
			v-if="ingredients.length > limit"
			:class="{
				'border-t border-t-neutral-100 mt-4': showAll,
			}"
		>
			<button class="text-primary mt-3" @click="showAll = !showAll">
				{{
					showAll
						? t('product_filter.group.button_hide')
						: t('product_filter.group.button_show_all')
				}}
			</button>
		</div>
	</div>
</template>
