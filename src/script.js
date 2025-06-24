const starting_lines = ["The clouds were parting", "The desktop was clean", "Windows is buggy", "Linux is cooler", "Arch is for the cool", "Programming is fun", "Hardware is real tough"]
const middle_lines = ["Now is always important", "Calculators are cooler", "It holds a place in my heart", "Flipper zeros remain great", "Pen and paper is pretty"]
const ending_lines = ["The computer exploded", "Another day passed", "Nothing will change today", "Will that ever change", "Tides are never still", "F*ck you NVIDIA" ]

let text = "";
let index = 0;

function Generate() {
    index = 0;
    text = selectFromArray(starting_lines) + "\n" + selectFromArray(middle_lines) + "\n" + selectFromArray(ending_lines);
    text = text.replaceAll(" ", "\u2008")
    WriteSlowly(text)
}




function WriteSlowly() {
    document.getElementById("textbox").innerText = "";
    document.getElementById("textbox").style = "color:black;"
    WriteFirstLetter(text, 0)
}
function WriteFirstLetter() {
    document.getElementById("textbox").innerText += text.substring(index, 1 + index);
    console.log(text)
    index += 1;
    setTimeout(() => WriteFirstLetter(), 90)
}
Generate()
