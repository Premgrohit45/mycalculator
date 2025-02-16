// function myfun()
// {
//     let x=2;
//     if (x>1)
//         alert("Hello");
//     else
//         alert("Bye");
// }
function myclick(str)
{
    let a= document.getElementById("display");
    a.value=a.value+str.innerHTML;
    // a.value =1000;
//  alert("h.......111111")
}
function myclear()
{
    let a= document.getElementById("display");
    a.value="";
}
function myequal()
{
    let a= document.getElementById("display");
    a.value=eval(a.value);
}
function myback()
{
    let a= document.getElementById("display");
    a.value=a.value.slice(0,-1);

}
