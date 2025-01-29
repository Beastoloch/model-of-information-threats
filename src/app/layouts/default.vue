<script setup lang="ts">
import { useUserStore } from '@entities/user';
import { useCartStore } from '@entities/cart';

// импорт не @widgets - ибо тогда ломается в Docker-е
// и почему-то только в этом месте 😗
import { Header } from '../../widgets/header';

const { hasCart = true, hasSearch = true } = defineProps<{
	hasCart?: boolean;
	hasSearch?: boolean;
}>();

const i18nHead = useLocaleHead();

const userStore = useUserStore();
const cartStore = useCartStore();

// https://i18n.nuxtjs.org/docs/composables/use-locale-head
// информация:
// - о текущем языке
// - о доступных языках на данных ресурс
// - об основном языке и сайте
useHead(() => ({
	htmlAttrs: i18nHead.value.htmlAttrs,
	meta: i18nHead.value.meta,
	link: i18nHead.value.link,
}));

onMounted(() => {
	userStore.me.executeIfNone();
	cartStore.getCart.executeIfNone();
});
</script>
<template>
	<main class="min-h-screen bg-white rounded-3xl">
		<Header :has-cart="hasCart" :has-search="hasSearch" />
		<slot></slot>
	</main>
</template>
