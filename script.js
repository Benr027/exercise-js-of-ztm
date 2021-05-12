var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");
document.getElementById("bing").className="coolTitle";
function inputLength(){
    return input.value.length;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick=removeParent;
}

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
     }
}

function listLength(){
    return listItem.length;
}

function deleteButton(){
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    listItem[i].appendChild(btn);
    btn.onclick=removeParent;
}

function removeParent(e){
    e.target.parentNode.remove();
}

for (var i = 0 ; i <listLength(); i++){
    deleteButton();
}

function addListAfterKeypress(){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
      }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



