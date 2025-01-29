<!--https://nuxt.com/docs/guide/directory-structure/error-->
<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
	error: NuxtError;
}

const { t } = useI18n();
const { error } = defineProps<Props>();

const renderError = computed(() => {
	if (error.statusCode === 404) {
		return {
			title: t('errors.404'),
			description: error.message,
		};
	}

	return {
		title: t('errors.common'),
		description: error.message,
	};
});
</script>
<template>
	<NuxtLayout>
		<UiContainer class="mt-10 flex flex-col items-center justify-center">
			<UiTitle size="md" class="text-red-500">{{ renderError.title }}</UiTitle>
			<span>{{ renderError.description }}</span>
		</UiContainer>
	</NuxtLayout>
</template>
