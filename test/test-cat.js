var Cat = require('../cat-compiled').Cat;
var test = require('tape');

test('cat tests', function (t) {
    t.plan(1);
    console.log(Cat);
    var cat = new Cat();
    t.equal(cat.name, 'Simon');
    t.end();
});