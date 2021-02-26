import { toPhoneHref } from './to-phone-href';
const testPhone = '5555555555';

describe('toPhoneHref', () => {
    describe('success case', () => {
        it('worx', () => {
            expect(toPhoneHref(testPhone))
                .toMatchSnapshot();
        });

    });
});
