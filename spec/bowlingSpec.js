'use strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
    bowling.scorecard = {
      getPinsLeft: function() {
        return 10;
      },
      receiveScore: function(num) {}
    };
  });

  describe ("Knocking down pins (playing)", function() {
    it ("can play and returns the number of pins knocked down", function() {
      var result = bowling.play();
      expect(result).toEqual(jasmine.any(Number));
      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(11);
    });
    it ("second roll, cannot knock more pins than what was left", function() {
      bowling._roll = function() { return 9; };
      bowling.play();
      bowling._roll = Bowling.prototype._roll;
      var result = bowling.play();
      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(2);
    });
  });

});
