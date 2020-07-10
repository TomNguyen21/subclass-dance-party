describe('explodeyDancer', function () {

  var explodeyDancer, clock;
  var timeBetweenSteps = 50;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    explodeyDancer = new makeExplodeyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(explodeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(explodeyDancer.$node, 'effect');
    explodeyDancer.step();
    expect(explodeyDancer.$node.effect.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(explodeyDancer, 'step');
      expect(explodeyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(explodeyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(explodeyDancer.step.callCount).to.be.equal(2);
    });
  });
});
