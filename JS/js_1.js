var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var p1 = document.getElementById("p1");

class phone
{
    constructor(number,year)
    {
        this.number = number;
        this.year = year;
    }
}

var phone1 = new phone("xm","2021");
bt1.addEventListener("click",function(){
    p1.textContent=phone1.year;
})
bt2.addEventListener("click",function(){
    p1.textContent=phone1.number;
})

