
    // Javascript Templates Strings
    let header  = "My Complete Name";
    let sepName = ["Mark", "Anthony", "Garado"];

    let html = `<h3>${header}</h3><ul>`;

    for (const x of sepName) {
        html += `<li>${x}</li>`;
    }
    html += `</ul>`;

    document.getElementById("show").innerHTML = html;