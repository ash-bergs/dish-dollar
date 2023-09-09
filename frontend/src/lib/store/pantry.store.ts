import { atom } from 'jotai';

// If value is { id: 3, content: 'FORM' },
// it means the drawer for card with id=3 is open, and it should show the form content.
// A value of null means no card's drawer is open.
// this will ensure only one drawer is open at a time and the database is only updated when the drawer is closed
// might want to rethink some of the UI/UX here - how will they know changes will be saved when they close the drawer?
export const activeCardDrawerAtom = atom<{
  id: number;
  content: 'SLIDER' | 'FORM';
} | null>(null);
