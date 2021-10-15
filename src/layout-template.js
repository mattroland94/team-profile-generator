let htmlgeneratorPage = Obj => {
    console.log('team object', Obj)

    let htmlCard = ""

    for(let i = 0; i < Obj.length; i++) {
        let final = Obj[i].office || Obj[i].gitHub || Obj[i].school;
        let keys = Object.keys(Obj[i]);
        let lkey = keys[4];
        let fOption = lkey + ":" + final

        if (lkey === undefined) {
            fOption = "";
        }
        else if (lkey === 'gitHub') {
            fOption = (`GitHub : <a href = 'https://www.github.com/${Obj[i].gitHub}'> ${Obj[i].gitHub}</a>`)
            console.log(fOption)
        }
        else {
            console.log(fOption)
        }

        let {name, role, email, id} = Obj[i]
        htmlCard += `
        <div class="card col" style="width: 18rem;">
        <div class="card-body card-header">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item"> ${fOption}</li>
        </ul>
        </div>`
    }

    return `
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.boostrapcdn.com/bootstrap/4.3.1/css/boostrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="annonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        
    </head>
    
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
        
        <main class="container">
            <div class="row">
            ${htmlCard}
            </div>
        </main>
    </body>
    </html>`
}

module.exports = htmlgeneratorPage;