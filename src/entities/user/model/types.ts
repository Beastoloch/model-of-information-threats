import type { Common } from '@shared/lib/types';
import type { Cart } from '@entities/cart/@x';
import type { Order } from '@entities/order/@x';

export enum USER_ROLE {
	user = 'USER',
	admin = 'ADMIN',
}

export interface User extends Common {
	fullName: string;
	email: string;
	password: string;
	role: USER_ROLE;

	verified?: number;
	provider?: string;
	providerId?: string;

	cart: Cart;
	orders: Order[];
}

export interface UserVerification extends Common {
	code: string;
	userId: number;
}
