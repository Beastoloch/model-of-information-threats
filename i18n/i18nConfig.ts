import messagesRu from './locales/ru.json';
import { pluralizationRuleRU } from './i18nPluralizationRules';

export default defineI18nConfig(() => {
	return {
		legacy: false,
		locale: 'ru',
		warnHtmlMessage: true,

		pluralizationRules: {
			ru: pluralizationRuleRU,
		},
		messages: {
			// текста мало (и не будет добавлятся больше
			ru: messagesRu,
		},
	};
});
