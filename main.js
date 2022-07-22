function sum()
{
    var S = 0;
    var n = 0;
    // sử dụng vòng lặp while với điều kiện S < 10000
    while(S < 10000)
    {
        //bước nhảy của vòng lặp là n++
        n++;
        //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp
        S = S + n;
    }
    document.getElementById("result1").innerHTML = " Số nguyên dương nhỏ nhất: " + n;
}

function Bai2()
{
    var x = +document.getElementById("txtX").value;
    var n = +document.getElementById("txtN").value;
    var s = 0;
    for(var i=1 ; i<= n ; i++ )
    {
        s= s + Math.pow(x,i);
    }
    document.getElementById("result2").innerHTML = s;
}

function factorial(){
    var n = +document.getElementById("txtNumber").value;
    var s=1;
    for(var i =n ;i > 0 ; i--)
    {
        s=s*i;
    }
    document.getElementById("result3").innerHTML = s;
}

function createDiv()
{
    // for(var i = 1 ; i <= 10 ; i++)
    // {
    //     if(i%2==0)
    //     {
    //         document.getElementById(i).style.background="red";
    //         document.getElementById(i).classList.remove("d-none");
    //         document.getElementById(i).innerHTML="Div Chẵn " + i;
    //     }
    //     else
    //     {
    //         document.getElementById(i).style.background="blue";
    //         document.getElementById(i).classList.remove("d-none");
    //         document.getElementById(i).innerHTML="Div lẻ " + i;
    //     }
    // }
    var div= document.getElementById("result4");
        var divs = div.getElementsByTagName("div");
        for (var i = 1; i < divs.length; i++){
            // Vị trí chẵn => màu đỏ
            if (i  % 2 == 0){
                divs[i].style.background = "red" ;
                divs[i].innerHTML="Div chẵn " + i ;
            }
            else { // Vị trí lẽ => màu xanh
                divs[i].style.background = "blue";
                divs[i].innerHTML="Div lẻ " + i;
            }
        }
}