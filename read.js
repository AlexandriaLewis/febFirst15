// create an object
var allPara = document.getElementsByTagName('p');

//create an array
var paraArray = Array.prototype.slice.call(allPara);
// .textContent
// .innerText

//access the content inside paragraph index
//split array index content on every space
var sum = 0;
function wordSum (item) {
    var content = item.innerText.split(" ").length;
    sum += content;
}

//for each index add word count to sum
//1242 words 8028 characters
paraArray.forEach(wordSum);
console.log(sum + " words");

function timeToRead () {
  //compute word count to WPM
  var minutes = ("Time to Read: " + sum / 230 + " minutes");
  console.log(minutes);
  return minutes;
}

//grab the right tag with getElementsBy...
//select the content with [index].innerText
//assign it a value
document.getElementsByClassName("reading-time")[0].innerText = timeToRead();

// var timeToView = document.createElement("h1");
// var newText = document.createTextNode(timeToRead());
// timeToView.appendChild(newText);
// var position = document.getElementsByTagName("h3")[0];
// position.appendChild(timeToView);
