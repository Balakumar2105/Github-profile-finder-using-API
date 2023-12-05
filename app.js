const github = new Github();
const ui = new UI();

//initializing value
const input = document.querySelector("#search");
const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const iValue = input.value;

    if(iValue !== ""){
        github.getUser(iValue).then( data => {
            if(data.profile.message === "Not Found"){
                ui.showAlert("User not found","alert alert-danger")
            } else {
                ui.showProfile(data.profile);
            }
        })
    }
})