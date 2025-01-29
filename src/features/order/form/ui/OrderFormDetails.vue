<script setup lang="ts">
import type { OrderPriceDetails } from '@entities/order';
import { CartItemDetails } from '@entities/cart';
import { IconPackage, IconPercent, IconTruck } from '#components';

const { t } = useI18n();
const { details } = defineProps<{ details: OrderPriceDetails }>();

const renderDetails = computed(() => [
	{
		text: t('order.form_details.cart_price'),
		icon: IconPackage,
		value: details.cartPrice,
	},
	{
		text: t('order.form_details.taxes_price'),
		icon: IconPercent,
		value: details.taxesPrice,
	},
	{
		text: t('order.form_details.delivery_price'),
		icon: IconTruck,
		value: details.deliveryPrice,
	},
]);
</script>
<template>
	<UiInfoBlock class="p-6 sticky top-4">
		<div class="flex flex-col gap-1">
			<span class="text-xl">{{ t('order.form_details.title') }}</span>
			<div class="h-11 text-[34px] font-extrabold">{{ details.totalPrice }} ₽</div>
		</div>

		<CartItemDetails v-for="detail in renderDetails" :key="detail.text">
			<template #title>
				<div class="flex items-center">
					<component
						:is="detail.icon"
						class="mr-2 text-gray-400"
						:size="18"
					></component>
					{{ detail.text }}
				</div>
			</template>
			<template #value>{{ detail.value }} ₽</template>
		</CartItemDetails>
		<slot></slot>
	</UiInfoBlock>
</template>
