import { object, string } from 'zod';

const properties = () => {

	// @TODO
	// - минимальная и максимальная длина должна быть еще

	const { $i18n } = useNuxtApp();

	return {
		email: string().email($i18n.t('common.validation.enter_email')),
		fullName: string(),
		password: string(),
		confirmPassword: string(),
	};
};

export const loginSchema = () => {
	const { email, password } = properties();
	return object({ email, password });
};

export const registerSchema = () => {
	const { $i18n } = useNuxtApp();

	return object(properties()).refine((data) => data.password === data.confirmPassword, {
		message: $i18n.t('common.validation.passwords_dont_much'),
		path: ['confirmPassword'],
	});
};
