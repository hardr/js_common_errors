var name = "02-TypeErrorCall"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

xdescribe(name, function () {
  it("Fix the Call TypeError", function () {
    expect(()=>runner()).to.not.throw(TypeError)
  });
});
