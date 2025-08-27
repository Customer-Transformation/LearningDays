function normalizeStr(s: string): string {
	return s
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.replace(/\s+/g, ' ')
		.trim();
}

function tokenize(s: string): string[] {
	const n = normalizeStr(s);
	return n ? n.split(' ') : [];
}

export function queryMatchesName(name: string, query: string): boolean {
	if (!query) return false;
	const queryTokens = tokenize(query);
	if (!queryTokens.length) return false;

	const nameTokens = tokenize(name);
	return queryTokens.every((qt) => nameTokens.some((nt) => nt.startsWith(qt)));
}