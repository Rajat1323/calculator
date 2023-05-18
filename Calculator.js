let string="";
function display(store)
{
    if(!(string==""&&(store=='0'||store=='00'||store=='*'||store=='/'||store=='%')))
    {
        if(store=='+'||store=='-'||store=='*'||store=='/'||store=='%')
        {
            let special=string.charAt(string.length-1);
            if(special=='+'||special=='-'||special=='*'||special=='/'||special=='%'||special=='.')
            {
                string=string.substring(0,string.length-1);
            }
            string+=store;
        }
        else
        {
            string+=store;
        }
    }
    document.getElementById('display').value=string;
}
function clearAll()
{
    string="";
    document.getElementById('display').value=string;
}
function del()
{
    string=string.substring(0,string.length-1)
    document.getElementById('display').value=string;
}
function calcu()
{
    string=eval(string);
    document.getElementById('display').value=string;
}