var makeShakeyDancer = function (top, left, timeBeforeCall) {
  makeDancer.call(this, top, left, timeBeforeCall);
  this.timeBetweenSteps = 50;
  this.$node = $('<span class="shakeyDancer"></span>');
};

makeShakeyDancer.prototype = Object.create(makeDancer.prototype);
makeShakeyDancer.prototype.constructor = makeShakeyDancer;


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

// var oldStep = makeBlinkyDancer.prototype.step;

makeShakeyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  this.$node.effect('shake', 5000);
};











