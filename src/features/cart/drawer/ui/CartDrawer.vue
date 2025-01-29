<script setup lang="ts">
import { useCartStore } from '@entities/cart';
import CartDrawerItem from './CartDrawerItem.vue';
// @TODO
// - разнести по компонентам
// - добавить обработку загрузки и ошибок

const { t } = useI18n();
const cartStore = useCartStore();
const open = ref(false);
</script>
<template>
	<UiSheet v-model:open="open">
		<UiSheetTrigger as-child>
			<slot></slot>
		</UiSheetTrigger>
		<UiSheetContent class="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
			<template v-if="cartStore.cart?.items?.length">
				<UiSheetTitle>
					{{ t('cart.drawer.title') }}
					<span class="font-bold">
            {{ t('cart.drawer.product', cartStore.cartDetails.length) }}
					</span>
				</UiSheetTitle>

				<div class="-mx-6 mt-5 overflow-auto flex-1">
					<CartDrawerItem
						v-for="item in cartStore.cartDetails"
						class="mb-2"
						:key="item.id"
						:item="item"
						@item:add="
							cartStore.updateCart.execute(item.id, item.quantity + 1)
						"
						@item:remove="
							cartStore.updateCart.execute(item.id, item.quantity - 1)
						"
						@remove="cartStore.removeCart.execute(item.id)"
					/>
				</div>

				<UiSheetFooter class="-mx-6 bg-white p-8">
					<div class="w-full">
						<div class="flex mb-4">
							<div class="flex flex-1 text-lg text-neutral-500">
                {{ t('cart.drawer.total') }}
								<div
									class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"
								></div>
							</div>

							<span class="font-bold text-lg"
								>{{ cartStore.totalAmount }} ₽</span
							>
						</div>

						<NuxtLink to="/order">
							<UiButton class="w-full h-12 text-base">
								{{ t('cart.drawer.place_order') }}
								<IconArrowRight class="w-5 ml-2" />
							</UiButton>
						</NuxtLink>
					</div>
				</UiSheetFooter>
			</template>

			<div
				v-else
				class="flex flex-col items-center justify-center w-72 mx-auto h-full"
			>
				<NuxtImg
					src="/images/empty-box.png"
					alt="Empty cart"
					width="120"
					height="120"
					draggable="false"
				/>
				<UiTitle size="sm" class="text-center font-bold my-2">
					{{ t('cart.drawer.empty') }}
				</UiTitle>

				<p class="text-center text-neutral-500 mb-5">
					{{ t('cart.drawer.add_yet') }}
				</p>

				<UiSheetClose as-child>
					<UiButton size="lg" class="w-56 h-12 text-base">
						<IconArrowLeft class="w-5 mr-2" />
						{{ t('cart.drawer.go_back') }}
					</UiButton>
				</UiSheetClose>
			</div>
		</UiSheetContent>
	</UiSheet>
</template>
