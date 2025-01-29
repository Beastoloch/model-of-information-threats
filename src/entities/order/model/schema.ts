import { object, string } from 'zod';

const properties = () => {
	// @TODO
	// - минимальная и максимальная длина должна быть еще

	const { $i18n } = useNuxtApp();

	return {
		email: string().email($i18n.t('common.validation.enter_email')),
		fullName: string(),
		phone: string(),
		address: string(),
		comment: string(),
	};
};

export const orderSchema = () => {
	return object(properties());
};
