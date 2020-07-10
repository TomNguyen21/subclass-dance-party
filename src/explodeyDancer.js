var makeExplodeyDancer = function (top, left, timeBeforeCall) {
  makeDancer.call(this, top, left, timeBeforeCall);
  this.timeBetweenSteps = 100;
  this.$node = $('<span class="explodeyDancer"></span>');
};

makeExplodeyDancer.prototype = Object.create(makeDancer.prototype);
makeExplodeyDancer.prototype.constructor = makeExplodeyDancer;


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

// var oldStep = makeBlinkyDancer.prototype.step;

makeExplodeyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  this.$node.effect('explode', 3000);
};











