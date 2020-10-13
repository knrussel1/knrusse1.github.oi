let elem = [];
var totalParNum = 0;
for (let i = 1; i < 19; i++)
{
  let elem = document.getElementById(i.toString());
  elem.children[4].children[0].onclick = function(){add1(elem);};
  elem.children[4].children[1].onclick = function(){subtract1(elem);};
  elem.children[4].children[2].onclick = function(){clear(elem);};
  //totalParNum = totalParNum = Number.parseInt(elem.children[1].innerHTML)
}

 elem[1] = document.getElementById("1");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};

// create an "add1" function
function add1 (elem) 
{
  let par = elem.children[1].innerHTML;
  if(elem.children[2].innerHTML == "-")
  {
    elem.children[2].innerHTML = "1";
    currentScore = 1
    let par = elem.children[1].innerHTML;
    elem.children[3].innerHTML = 1 - number.parseInt(par);
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    let par = elem.children[1].innerHTML;
    elem.children[3].innerHTML = (currentScore + 1) - Number.parseInt(par);
    }
  }

// subtract function
  function subtract1 (elem)
  {
    let par = elem.children[1].innerHTML;
  if(elem.children[2].innerHTML == "-")
  {
    elem.children[2].innerHTML = "1";
    currentScore = 1
    let par = elem.children[1].innerHTML;
    elem.children[3].innerHTML = 1 - number.parseInt(par);
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    let par = elem.children[1].innerHTML;
    elem.children[3].innerHTML = (currentScore - 1) - Number.parseInt(par);
    }
  }

function clear(elem)
{
  elem.children[2].innerHTML = 0;
  elem.children[3].innerHTML = 0;
}
