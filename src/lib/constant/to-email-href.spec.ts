import { toEmailHref } from './to-email-href';
const testEmail = 'e@ma.il';
const testSubject = 'subjetooo';
const testPrefix = 'RE:RE:REEE: ';

describe('toEmailHref', () => {
    describe('success case', () => {
        it('worx', () => {
            expect(toEmailHref(testEmail, testSubject, testPrefix))
                .toMatchSnapshot();
        });

    });
});
