import { toSlug } from './to-slug';

const testPhrase = 'test  phrase';
const testWord = 'test';

describe('toSlug', () => {
    describe('success case', () => {
        it.each([
            [testWord, null],
            [', ', null],
            [testPhrase, null],
            [testPhrase, '~'],
        ])('worx', (tp: string, delim: string) => {
            expect(toSlug(tp, delim))
                .toMatchSnapshot();
        });

    });
});
