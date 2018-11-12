// PSEUDOCLASSICAL VERSION
const makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');

  let obj = this;
  this.step = function() {
    setTimeout(obj.step, timeBetweenSteps);
  };
  this.step();

  this.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  this.setPosition(top, left);

};