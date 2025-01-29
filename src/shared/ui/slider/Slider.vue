<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue';
import { cn } from '@shared/lib/cn';
import {
	SliderRange,
	SliderRoot,
	SliderThumb,
	SliderTrack,
	useForwardPropsEmits,
} from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<SliderRootEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
	<SliderRoot
		:class="
			cn(
				'relative flex w-full touch-none select-none mb-6 items-center',
				props.class,
			)
		"
		v-bind="forwarded"
	>
		<SliderTrack
			class="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20"
		>
			<SliderRange class="absolute h-full bg-primary" />
		</SliderTrack>
		<SliderThumb
			v-for="(_, key) in modelValue"
			:key="key"
			class="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
		/>
		<div
			v-for="(value, idx) in modelValue"
			:key="idx"
			class="absolute text-center"
			:style="{
				left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
				top: '10px',
			}"
		>
			<span class="text-sm">{{ value || defaultValue[idx] }}</span>
		</div>
	</SliderRoot>
</template>
