import { atom } from 'jotai';

/** Atom to hold current search term in recipes page Search input */
export const searchAtom = atom<string>('');

/** Atom to hold the current recipe category selection */
export const categoryAtom = atom<string | undefined>(undefined);

//TODO: what should the default value be? Should they both be undefined?
// What's the value, if any, to using undefined?