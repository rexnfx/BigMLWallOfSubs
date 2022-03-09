for (var sub in data.subs){
    var newP = document.createElement("p");
    newP.innerText = data.subs[sub] + "x " + sub;
    
    var el = document.getElementById("subarea");
    el.appendChild(newP);
}

for (var bit in data.bits){
    var newP = document.createElement("p");
    newP.innerText = data.bits[bit] + "x " + bit;
    
    var el = document.getElementById("bitarea");
    el.appendChild(newP);
}

for (var gift in data.gifts){
    var newP = document.createElement("p");
    newP.innerText = data.gifts[gift] + "x " + gift;
    
    var el = document.getElementById("giftarea");
    el.appendChild(newP);
}