require('chai').should();
var assert = require('chai').assert;
var expect = require('chai').expect;

var winston = require('winston');
winston.remove(winston.transports.Console);

before(function () {
    winston.info("Before");
});

beforeEach(function () {
    winston.info("Before");
});

after(function () {
    winston.info("Before");
});

afterEach(function () {
    winston.log("Before");
});

describe("Difference between Should and Expect", function () {


    it("Show Should and Expect", function () {
        var number = 10;
        number.should.be.greaterThan(9);
        expect(number).to.be.lessThan(20)
    });

});

describe("Chains", function () {

    it("Should be ok", function () {
        var number = 10;
        number.should.be.ok;
        expect('everything').to.be.ok;
        expect(1).to.be.ok;
        expect(false).to.not.be.ok;
        expect(undefined).to.not.be.ok;
        expect(null).to.not.be.ok;

    })

    it("Expect true", function () {
        expect(true).to.be.true;
    });

    it("Expect false", function () {
        expect(false).to.be.false;

    });

    it("Should be a type!", function () {
        expect('test').to.be.a('string');
        expect({foo: 'bar'}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(new Float32Array()).to.be.a('float32array');
    });

    it("Should include", function () {
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');
    })

    it("Should include", function () {
        expect(null).to.be.null;
        expect(undefined).to.not.be.null;

    });

    it("Should Include", function () {
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');
    });

    it("Null", function () {
        expect(null).to.be.null;
        expect(undefined).to.not.be.null;
    });

    it("Undefined", function () {
        expect(undefined).to.be.undefined;
        expect(null).to.not.be.undefined;
    });

    it("NaN", function () {
        expect('foo').to.be.NaN;
        expect(4).not.to.be.NaN;
    });

    it("Exist", function () {
        var foo = 'hi'
            , bar = null
            , baz;

        expect(foo).to.exist;
        expect(bar).to.not.exist;
        expect(baz).to.not.exist;

    });

    it("Empty", function () {
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
    });

    it("Arguments", function () {
        expect(arguments).to.be.arguments;
    });

    it("Equal", function () {
        expect('hello').to.equal('hello');
        expect(42).to.equal(42);
        expect(1).to.not.equal(true);
        expect({foo: 'bar'}).to.not.equal({foo: 'bar'});
        expect({foo: 'bar'}).to.deep.equal({foo: 'bar'});
    });

    it("Least", function () {
        expect(10).to.be.at.least(10);
    });

    it("Bellow", function () {
        expect(5).to.be.below(10);
    });

    it("Most", function () {
        expect(5).to.be.at.most(5);
    });

    it("Within", function () {
        expect(7).to.be.within(5, 10);
    });

    it("Instance Of", function () {
        var Tea = function (name) {
            this.name = name;
        }
            , Chai = new Tea('chai');

        expect(Chai).to.be.an.instanceof(Tea);
        expect([1, 2, 3]).to.be.instanceof(Array);
    });


    it("Property", function () {
        // simple referencing
        var obj = {foo: 'bar'};
        expect(obj).to.have.property('foo');
        expect(obj).to.have.property('foo', 'bar');

// deep referencing
        var deepObj = {
            green: {tea: 'matcha'}
            , teas: ['chai', 'matcha', {tea: 'konacha'}]
        };

        expect(deepObj).to.have.deep.property('green.tea', 'matcha');
        expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
        expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
    });

    it("Deep", function () {
        var arr = [
            ['chai', 'matcha', 'konacha']
            , [{tea: 'chai'}
                , {tea: 'matcha'}
                , {tea: 'konacha'}]
        ];

        expect(arr).to.have.deep.property('[0][1]', 'matcha');
        expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
    });

    it("Length", function () {
        expect('foo').to.have.length.above(2);
        expect([1, 2, 3]).to.have.length.above(2);
        expect('foo').to.have.length.below(4);
        expect([1, 2, 3]).to.have.length.below(4);
        expect('foo').to.have.length.within(2, 4);
        expect([1, 2, 3]).to.have.length.within(2, 4);
    });

    it("Match", function () {
        expect('foobar').to.match(/^foo/);
    });

    it("String", function () {
        expect('foobar').to.have.string('bar');
    });

    it("Keys", function () {
        expect({foo: 1, bar: 2}).to.have.any.keys('foo', 'baz');
        expect({foo: 1, bar: 2}).to.have.any.keys('foo');
        expect({foo: 1, bar: 2}).to.contain.any.keys('bar', 'baz');
        expect({foo: 1, bar: 2}).to.contain.any.keys(['foo']);
        expect({foo: 1, bar: 2}).to.contain.any.keys({'foo': 6});
        expect({foo: 1, bar: 2}).to.have.all.keys(['bar', 'foo']);
        expect({foo: 1, bar: 2}).to.have.all.keys({'bar': 6, 'foo': 7});
        expect({foo: 1, bar: 2, baz: 3}).to.contain.all.keys(['bar', 'foo']);
        expect({foo: 1, bar: 2, baz: 3}).to.contain.all.keys({'bar': 6});
    });

    it("Throw", function () {
        var err = new ReferenceError('This is a bad function.');
        var fn = function () {
            throw err;
        }
        expect(fn).to.throw(ReferenceError);
        expect(fn).to.throw(Error);
        expect(fn).to.throw(/bad function/);
        expect(fn).to.not.throw('good function');
        expect(fn).to.throw(ReferenceError, /bad function/);
        expect(fn).to.throw(err);
    });

    it("Respondto", function () {

        String.prototype.bar = function () {
        };
        expect(String).to.respondTo('bar');
        expect("").to.respondTo('bar');
    });

    it("itself", function () {
        function Foo() {
        }

        Foo.bar = function () {
        }
        Foo.prototype.baz = function () {
        }

        expect(Foo).itself.to.respondTo('bar');
        expect(Foo).itself.not.to.respondTo('baz');
    });

    it("Satisfy", function () {
        expect(1).to.satisfy(function (num) {
            return num > 0;
        });
    });

    it("Close To", function () {
        expect(1.5).to.be.closeTo(1, 0.5);
    });

    it("Members", function () {
        expect([1, 2, 3]).to.include.members([3, 2]);
        expect([1, 2, 3]).to.not.include.members([3, 2, 8]);

        expect([4, 2]).to.have.members([2, 4]);
        expect([5, 2]).to.not.have.members([5, 2, 1]);

        expect([{id: 1}]).to.deep.include.members([{id: 1}]);
    });

    it("OneOf", function () {
        expect('a').to.be.oneOf(['a', 'b', 'c']);
        expect(9).to.not.be.oneOf(['z']);
        expect([3]).to.not.be.oneOf([1, 2, [3]]);

        var three = [3];
// for object-types, contents are not compared
        expect(three).to.not.be.oneOf([1, 2, [3]]);
// comparing references works
        expect(three).to.be.oneOf([1, 2, three]);
    });

    it("Change", function () {
        var obj = {val: 10};
        var fn = function () {
            obj.val += 3
        };
        var noChangeFn = function () {
            return 'foo' + 'bar';
        }
        expect(fn).to.change(obj, 'val');
        expect(noChangeFn).to.not.change(obj, 'val')
    });

    it("Increase", function () {
        var obj = {val: 10};
        var fn = function () {
            obj.val = 15
        };
        expect(fn).to.increase(obj, 'val');
    });

    it("Decrease", function () {
        var obj = {val: 10};
        var fn = function () {
            obj.val = 5
        };
        expect(fn).to.decrease(obj, 'val');
    });

    it("Extensible", function () {
        var nonExtensibleObject = Object.preventExtensions({});
        var sealedObject = Object.seal({});
        var frozenObject = Object.freeze({});

        expect({}).to.be.extensible;
        expect(nonExtensibleObject).to.not.be.extensible;
        expect(sealedObject).to.not.be.extensible;
        expect(frozenObject).to.not.be.extensible;
    });

    it("Sealed", function () {
        var sealedObject = Object.seal({});
        var frozenObject = Object.freeze({});

        expect(sealedObject).to.be.sealed;
        expect(frozenObject).to.be.sealed;
        expect({}).to.not.be.sealed;
    });

    it("Frozen", function () {
        var frozenObject = Object.freeze({});
        expect(frozenObject).to.be.frozen;
        expect({}).to.not.be.frozen;
    });


})

