describe('filter', function () {

    beforeEach(module('filterApp'));
    describe('reverso', function () {
        it('deve reverter uma string', inject(function(reversoFilter) {
            expect(reversoFiler('ABCD')).toEqual('DCBA');
            expect(reversoFiler('1234')).toEqual('4321');
        }))
    })
})
