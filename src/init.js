$(document).ready(function() {
  window.dancers = [];
  // title
  var $title = $('<h1 class="title">Object Dance Party</h1>');
  $title.appendTo('body');

  // TopBar
  var $topBar = $('<h2 class="topBar"></h2>');
  // adds to body
  $topBar.appendTo('body');

  // lowerBar
  var $middleBar = $('<h3 class="middleBar"></h3>');
  // adds to body
  $middleBar.appendTo('body');

  // lowerBar
  var $lowestBar = $('<h3 class="lowestBar"></h3>');
  // adds to body
  $lowestBar.appendTo('body');

  // clear BlinkyDancers
  var $clearBlinkyDancerButton = $('<button class="clearDancerButton" data-dancer-maker-function-name="clearBlinkyDancer">clear blinkyDancer</button>');
  $clearBlinkyDancerButton.appendTo('.middleBar');

  var $clearShakeyDancerButton = $('<button class="clearDancerButton" data-dancer-maker-function-name="clearShakeyDancer">clear shakeyDancer</button>');
  // appends button to topbar
  $clearShakeyDancerButton.appendTo('.middleBar');

  // clear explodey dancer
  var $clearExplodeyDancerButton = $('<button class="clearDancerButton" data-dancer-maker-function-name="clearExplodeyDancer">clear explodeyDancer</button>');
  $clearExplodeyDancerButton.appendTo('.middleBar');
  // lineup
  $lineUpButton = $('<button class="manipulateDancers">line up dancers</button>');
  $lineUpButton.appendTo('.lowestBar');
  // clearAll
  $clearAllButton = $('<button class="manipulateDancers">clear all dancers</button>');
  $clearAllButton.appendTo('.lowestBar');
  // circle button work in progress
  $circleButton = $('<button class="manipulateDancers">circle dancers</button>');
  $circleButton.appendTo('.lowestBar');




  // blinkyDancerButton
  var $blinkyDancerButton = $('<button class="dancerButton" data-dancer-maker-function-name="makeBlinkyDancer">add blinkyDancer</button>');
  // adds button to topbar
  $blinkyDancerButton.appendTo('.topBar');

  // shakeyDancerButton
  var $shakeyDancerButton = $('<button class="dancerButton" data-dancer-maker-function-name="makeShakeyDancer">add shakeyDancer</button>');
  // adds button to topbar
  $shakeyDancerButton.appendTo('.topBar');

  // explodeyDancerButton
  var $explodeyDancerButton = $('<button class="dancerButton" data-dancer-maker-function-name="makeExplodeyDancer">add explodeyDancer</button>');
  // adds button to topbar
  $explodeyDancerButton.appendTo('.topBar');



  var $danceFloor = $('<div class="danceRoom"><span class="danceFloor></span></div>');
  $danceFloor.appendTo('body');





  // function of button
  $blinkyDancerButton.on('click', function (event) {

    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if (window.dancers.length < 30) {
      $('.danceRoom').append(dancer.$node);

      window.dancers.push(dancer);
    } else {
      alert('Too Many Blinky Dancers!');
    }

    $clearBlinkyDancerButton.on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers.length !== 0 && window.dancers[i] === dancer) {
          $(window.dancers.pop().$node).remove();
        }
      }
    });

  });







  // shakey Dancer button function
  // function of button
  $shakeyDancerButton.on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    if (window.dancers.length < 30) {

      $('.danceRoom').append(dancer.$node);

      window.dancers.push(dancer);
    } else {
      alert('Too Many Shakey Dancers!');
    }
    $clearShakeyDancerButton.on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers.length !== 0 && window.dancers[i] === dancer) {
          $(window.dancers.pop().$node).remove();
        }
      }
    });
  });




  // explodey Dancer button function
  // function of button
  $explodeyDancerButton.on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if (window.dancers.length < 30) {

      $('.danceRoom').append(dancer.$node);

      window.dancers.push(dancer);
    } else {
      alert('Too Many Explodey Dancers!');
    }

    $clearExplodeyDancerButton.on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers.length !== 0 && window.dancers[i] === dancer) {
          $(window.dancers.pop().$node).remove();
        }
      }
    });
  });




  // resets dancers
  $clearAllButton.on('click', function(event) {
    if (window.dancers.length !== 0) {
      location.reload();
    }
  });
  // puts dancers on left of screen
  $lineUpButton.on('click', function(event) {
    $danceFloor.css("margin-right", "2000px");
  });


});
