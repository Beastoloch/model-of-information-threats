<script setup lang="ts">
import { AuthModal } from '@widgets/auth-modal';

import { useUserStore } from '@entities/user';
import { FETCH_STATUS } from '@shared/lib/types';

// @TODO
// - Auth - это widget

const { t } = useI18n();

const userStore = useUserStore();
</script>
<template>
	<UiButton
		v-if="userStore.me.loading"
		variant="outline"
		:loading="userStore.me.loading"
	></UiButton>

	<template v-else>
		<NuxtLink v-if="userStore.user" to="/profile">
			<UiButton variant="outline">
				<IconCircleUser :size="16" />
				{{ t('header.profile') }}
			</UiButton>
		</NuxtLink>

		<AuthModal v-else>
			<UiButton variant="outline">
				<IconUser :size="16" />
				{{ t('header.login') }}
			</UiButton>
		</AuthModal>
	</template>
</template>
