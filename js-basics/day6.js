
    // simple username display
    document.getElementById("mySubmit").addEventListener("click", 
        function() {
            const username = document.getElementById("getName").value;
            const userlastname = document.getElementById("getlname").value;

            document.getElementById("usrname").textContent = `Hello ${username} ${userlastname} ! I am so excited to get to know you more:)`;
    });
