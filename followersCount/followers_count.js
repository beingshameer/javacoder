let count =0
function increaseCount()
{
    count++
    displayer()
    checkcounter()
}
function displayer()
{
    document.getElementById('countDisplay').innerHTML=count
}
function checkcounter()
{
    if(count==10)
    alert("Congrats your instagram has gain 10 followers")
    else if(count==20)
    alert("Congrats your instagram has gain 10 followers")

}