
    // const dates
    const d = new Date();  

    // date objects
    const seconds = d.getSeconds();
    const mins = d.getMinutes();
    const hrs = d.getHours();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    document.getElementById("dates").innerHTML = "Seconds count: " + seconds + "<br> Minutes count: " + mins + "<br> Hours count: " + hrs + "<br> Current date: " + day + "<br>Current month: " + month + "<br> Current year: " + year;
 