import { writable } from 'svelte/store';

export const s_schema = writable([
	{ rail: 'XD1', connect: [{ rail: 'XD2', position: 'oben', selbst: 'unten' }] },
	{ rail: 'XD4', connect: [{ rail: 'XD2', position: 'oben', selbst: 'unten' }] },
	{ rail: 'XD5', connect: [{ rail: 'XD4', position: 'oben', selbst: 'unten' }] },
	{ rail: 'XD2', connect: [{ rail: 'defalte', position: 'unten' }] },
	{ rail: 'XD3', connect: [{ rail: 'defalte', position: 'unten' }] },
	{ rail: 'XD6', connect: [{ rail: 'XD7', position: 'oben', selbst: 'unten' }] }
]);
