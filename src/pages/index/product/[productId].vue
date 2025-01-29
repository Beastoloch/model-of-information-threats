<script setup lang="ts">
import { useApiFetch } from '@shared/api';
import { ProductForm } from '@features/product/form';
import type { IProduct } from '@entities/product';

const route = useRoute();
const { data } = await useApiFetch<IProduct>(`/api/product/${route.params.productId}`);

if (!data.value) {
	throw createError({ statusCode: 404, statusMessage: 'Product is empty' });
}

const router = useRouter();
</script>
<template>
	<UiDialog :open="!!data" @update:open="router.back()">
		<UiDialogContent
			class="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
		>
			<ProductForm :product="data" @success="router.back()" />
		</UiDialogContent>
	</UiDialog>
</template>
