const guessed_num=[];
let count=0;
const random = Math.floor((Math.random()*100)+1);
document.getElementById('btn').addEventListener('click',function(event){
    const num = document.getElementById('num').value;
    const msg1 = document.getElementById('msg1');
    const msg2 = document.getElementById('msg2');
    const msg3 = document.getElementById('msg3');

    guessed_num.push(num);
    count++;
    
    if(num>=1 && num<=100)
    {
        if(num==random)
        {
            msg1.textContent = "You've Guessed it Correct!";
        }
        else if(num>random)
        {
            msg1.textContent = "Too high!";
        }
        else
        {
            msg1.textContent = "Too low";
        }
    }
    else
    {
        msg1.textContent = "The Range is Between 1-100";
    }
    msg2.textContent = "You've Guesses : "+guessed_num.join(",");
    msg3.textContent = "You've Guessed "+count+" times";
    document.getElementById('num').value=" ";
})