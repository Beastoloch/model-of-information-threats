<script setup lang="ts">
import type { ChooseVariant } from '../lib';

defineProps<{ variants: ChooseVariant[] }>();

const emits = defineEmits<{ select: [value: ChooseVariant] }>();
const model = defineModel<number, number>();

const select = (variant: ChooseVariant) => {
	model.value = variant.value;
	emits('select', variant);
};
</script>
<template>
	<div class="flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none">
		<button
			@click="select(variant)"
			v-for="variant in variants"
			:key="variant.name"
			:disabled="variant.disabled"
			:class="[
				'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1',
				'rounded-3xl transition-all duration-400 text-sm',
				{
					'bg-white shadow': variant.value === model,
					'text-gray-500 opacity-50 pointer-events-none': variant.disabled,
				},
			]"
		>
			{{ variant.name }}
		</button>
	</div>
</template>
