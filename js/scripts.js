$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var madLibs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    madLibs.forEach(function(madLib) {
      var userInput = $("input#" + madLib).val();
      $("." + madLib).text(userInput);
    });
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();

  });
});
