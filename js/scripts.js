var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textNew = text.replace("Velociraptor", dinosaurUpperCased);
var textNewHalf = textNew.substr(0, textNew.length / 2);

console.log(textNewHalf);
