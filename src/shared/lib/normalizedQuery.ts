export const arrayToQuery = (value: unknown[]): string => {
	return Array.isArray(value) ? value.join(',') : '';
};

export const numberToQuery = (value: number): string => {
	return value ? String(value) : '';
};

export const queryToPositiveInt = (query: string): number => {
	const number = parseInt(query);
	return parseInt(query) >= 0 ? number : 0;
};

export const queryToArrayInt = (query: string): number[] => {
	return query
		? query
				.split(',')
				.map((v) => queryToPositiveInt(v))
				.filter((v) => v)
		: [];
};

export const queryToArrayNaturalInt = (query: string): number[] => {
	return queryToArrayInt(query).map((v) => v);
};
