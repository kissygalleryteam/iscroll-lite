KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('iscroll-lite', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/iscroll-lite/1.1/']});