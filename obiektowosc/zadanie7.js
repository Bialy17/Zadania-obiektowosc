let users = new Array();

class Uzytkownik {
    #login;
    #haslo;
    constructor(login, haslo) {
        this.#login = login;
        this.#haslo = haslo;
    }
    sprawdzHaslo(haslo) {
        const regex = new RegExp("^(?=.*[a-zA-Z])(?=.*\\d).{8,}$");
        if(regex.exec(haslo)) {
            return true;
        }
        else {
            return false;
        }
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const login = document.getElementById("login");
    const haslo = document.getElementById("password");

    const user = new Uzytkownik(login.value, haslo.value)

    if(user.sprawdzHaslo(haslo.value)) {
        users.push(user);
    }
    else {
        alert("Za słabe hasło. Spróbuj ponownie");
        login.value = "";
        haslo.value = "";
    }

    console.clear();
    users.forEach(element => {
        console.log(element);
    });
})