//When the option is changed
var changeSelection = function () {
  //Hide all of the elements
hideAll();
  //If the select value is > 0 (is valid)
if (document.getElementById("select").value > 0) {
    //Set the element display to "block" (block is typically the default display type)
    document.getElementById("t" + document.getElementById("select").value).style.display = "block"; }
};
//Function to hide all of the elements
var hideAll = function () {
  //Loop through the elements
for (var i = 1; i <= 3; i++) {
    //Hide each one
    document.getElementById("t" + i).style.display = "none"; }
};
//This function automaticaly executes when the page is loaded
(function() {
  //Hide all of the elements
hideAll();}
)();

// Search function
var $rows1 = $('#t1 tr');
var $rows2 = $('#t2 tr');
var $rows3 = $('#t3 tr');
$('#search').keyup(function() {
  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
  $rows1.show().filter(function() {
      var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
      return !~text.indexOf(val);
  }).hide();
  $rows2.show().filter(function() {
    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    return !~text.indexOf(val);
}).hide();
  $rows3.show().filter(function() {
    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    return !~text.indexOf(val);
}).hide();
});