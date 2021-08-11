const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');
const TouchGestures = require('TouchGestures');
const sceneRoot = Scene.root;
// How to access scene objects (uncomment line below to activate)
const directionalLight = Scene.root.find('directionalLight0');
var counterNumber = Scene.root.find('number');     //number is your textbox name where you want to show a score
var scoreNumber = Patches.getScalarValue('score');  //score is name of a number text which count your score

// How to access class properties (uncomment line below to activate)
 const directionalLightIntensity = directionalLight.intensity;
counterNumber.text= scoreNumber.toString();
// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');
Promise.all([
    sceneRoot.findFirst('strat_screen'),
  
 ])   
.then(function(objects) {
const base = objects[0];


base.hidden =  false; 

TouchGestures.onTap().subscribe(function (gesture) {
   
    base.hidden =  true; 
    Diagnostics.log('tap gesture detected');
});


	});
