<script setup lang="ts">
import { useUserStore } from '@entities/user';
import ProfileFormLoaded from './ProfileFormLoaded.vue';
import ProfileFormLoading from './ProfileFormLoading.vue';
import { FETCH_STATUS } from '@shared/lib/types';

const userStore = useUserStore();
onMounted(() => userStore.me.executeIfNone());

watch(
	() => userStore.me.status,
	(value) => {
		if (value === FETCH_STATUS.error) {
			navigateTo('/not-auth');
		}
	},
);
</script>
<template>
	<ProfileFormLoaded v-if="userStore.user" :user="userStore.user" />
	<ProfileFormLoading v-else />
</template>
