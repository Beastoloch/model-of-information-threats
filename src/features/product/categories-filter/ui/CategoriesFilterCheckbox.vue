<script setup lang="ts">
const id = useId();

defineProps<{ checked: boolean }>();
defineEmits<{ 'update:checked': [value: boolean] }>();
</script>
<template>
	<div class="flex items-center space-x-2">
		<UiCheckbox
			class="rounded-[8px] w-6 h-6"
			:id="id"
			:checked="checked"
			@update:checked="(v) => $emit('update:checked', v)"
		/>
		<label :for="id" class="leading-none cursor-pointer flex-1">
			<slot></slot>
		</label>
	</div>
</template>
