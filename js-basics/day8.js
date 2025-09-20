
    // const dates
    // specifying dates with 6 numbers: year, month day, hour, minute, second
    const d = new Date();

    // date objects
    const seconds = d.getSeconds();
    const mins = d.getMinutes();
    const hrs = d.getHours();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();


    document.getElementById("dates").innerHTML = "Seconds count: " + seconds + "<br> Minutes count: " + mins + "<br> Hours count: " + hrs + "<br> Current date: " + day + "<br>Current month: " + month + "<br> The current year is: " + year;  

    // js date string formats
    document.getElementById("read-format").innerHTML = "Readable format: " + d.toDateString() + "<br> UTC format: " + d.toUTCString() + "<br> ISO foramt: " + d.toISOString();

 