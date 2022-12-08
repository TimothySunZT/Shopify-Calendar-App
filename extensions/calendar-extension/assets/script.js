const date = new Date();
//date.setMonth(1);

const renderCalendar = ()=>{
    date.setDate(1)
    const months = [
        "Januaray",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Auguest",
        "September",
        "October",
        "November",
        "December",
    ];
    
    const monthDays= document.querySelector('.days');
    
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    
    const nextDays = 7 - lastDayIndex - 1;
    
    // Display the current month
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    // Current date
    document.querySelector('.date p').innerHTML = new Date().toDateString();
    
    /* Auto fill dates */
    let days ="";
    
    // Previous days
    for(let x = firstDayIndex;x>0;x--)
    {
        days += `<li class="prev-date">${prevLastDay-x+1}</li>`;
    }
    
    for(let i=1;i<=lastDay;i++)
    {
        if(i === new Date().getDate() && date.getMonth()===new Date().getMonth())
        {   // Highlight today
            days+=`<li class="today">${i}</li>`;
        }
        else
        {
            days += `<li>${i}</li>`;
        }
    }
    
    // Next days
    for(let j=1;j<=nextDays;j++)
    {
        days += `<li class="next-date">${j}</li>`;
    }
    
    monthDays.innerHTML = days;
}



// Click the arrows to change month
document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

// Click days to add product quantity
document.querySelector('.days').addEventListener('click',()=>{
    
    document.getElementById("TEST for Click Days").innerHTML = '!!This is a test for click days!!';
    document.getElementsByClassName("quantity__input").value+=1; // Maybe something like this? 
    
    //<input type="text" name="quantity" min="1" value="1"></input>
    //querySelector++;
    //renderCalendar();
}) 




renderCalendar();