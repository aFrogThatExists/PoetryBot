function setElementContent(id, content){
    console.log(id)
    document.getElementById(id).innerHTML = content;
}
function selectFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}