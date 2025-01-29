<script setup lang="ts">
import CategoriesFilterIngredients from './CategoriesFilterIngredients.vue';
import CategoriesFilterTypes from './CategoriesFilterTypes.vue';
import CategoriesFilterSizes from './CategoriesFilterSizes.vue';
import CategoriesFilterPrice from './CategoriesFilterPrice.vue';

// @TODO
// - все числовые значения должны приходить с бэка
// - не должно быть захардкодено
// - еренести в виджеты или куда-то в другое место
// - Slider при скролле выше шапки становится по композиции
// - ProductFilterCheckbox перенести в виджеты или куда-то в другое место

// @TODO
// - у нас по сути +- копипаст для контейрое CHECKBOX-ОВ

const { t } = useI18n();
</script>
<template>
	<div>
		<UiTitle size="sm" class="mb-5 font-bold">
			{{ t('product_filter.name') }}
		</UiTitle>

		<CategoriesFilterSizes class="mb-5" />
		<CategoriesFilterTypes class="mb-5" />
		<CategoriesFilterPrice class="mb-5" />
		<CategoriesFilterIngredients :limit="6" />
	</div>
</template>
