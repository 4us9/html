const listItems = document.querySelectorAll("li");

function toggleDone(e)
{
    /*this seems like an attribute from the class*/
    if (!e.target.className)
    {
        /*if it isn't, set target class's attribute className
        to "done"
        */
        e.target.className = "done"; 
    }
    else
    {
        /*removes the class if it is the className*/
        e.target.className = "";
    }
}
/*sort through each li*/

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});
