<script setup lang="ts">
import { useCategoriesFilterPrice } from '../model/useCategoriesFilterPrice';
import { MAX_PRICE_FROM, MIN_PRICE_FROM, MIN_PRICE_TO } from '../model/const';

const { t } = useI18n();
const { price } = useCategoriesFilterPrice({
	min: MIN_PRICE_TO,
	max: MAX_PRICE_FROM,
});
</script>
<template>
	<div class="border-y border-y-neutral-100 py-6 pb-7">
		<p class="font-bold mb-3">{{ t('product_filter.price') }}</p>
		<div class="flex gap-3 mb-5">
			<UiInput
				type="number"
				:min="MIN_PRICE_TO"
				:max="MAX_PRICE_FROM"
				v-model="price[0]"
			/>
			<UiInput
				type="number"
				:min="MIN_PRICE_FROM"
				:max="MAX_PRICE_FROM"
				v-model="price[1]"
			/>
		</div>
		<UiSlider
			class="w-[250px]"
			:min="MIN_PRICE_TO"
			:max="MAX_PRICE_FROM"
			:step="10"
      :defaultValue="[MIN_PRICE_TO, MAX_PRICE_FROM]"
			v-model="price"
		/>
	</div>
</template>
