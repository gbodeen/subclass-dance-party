// PSEUDOCLASSICAL VERSION
const makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');

  let obj = this;
  this.step = (function() {
    // console.log(this);
    // console.log(obj);
    // setTimeout(obj.step, timeBetweenSteps);
    setTimeout(this.step, timeBetweenSteps);
  }).bind(this);

  // console.log(this);
  this.step(this);
  this.setPosition(top, left);

};
// makeDancer.prototype.step = function () {
//   setTimeout(obj.step, timeBetweenSteps);
// }
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};