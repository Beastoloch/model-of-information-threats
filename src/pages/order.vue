<script setup lang="ts">
import { OrderForm } from '@features/order/form';

definePageMeta({ layout: 'without-search' });
</script>
<template>
	<UiContainer class="mt-10">
		<OrderForm />
	</UiContainer>
</template>
