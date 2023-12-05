class UI{
    constructor(){
        this.profile = document.querySelector('#show')
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="container">
            <div class="card mt-3" style="width: 18rem;">
                <img src=${user.avatar_url} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${user.login}</h5>
                  <p class="card-text">${user.bio}</p>
                  <a href="${user.html_url}" target="_blank" class="btn btn-primary">View User</a>
                </div>
              </div>
           </div>
        `
    }

    showAlert(message, className){

        const div = document.createElement('div');

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const search = document.querySelector('.search-container')
        const form = document.querySelector('.form-body')

        search.insertBefore(div , form)

        setTimeout(() => {
            this.clear()
        }, 3000);

    }

    clear(){

        const alert = document.querySelector('.alert')
        if(alert){
            alert.remove();
        }
    }
}