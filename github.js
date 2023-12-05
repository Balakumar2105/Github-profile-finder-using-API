class Github{
    constructor(){
        this.clientId = "8ab234bed66122f4a804";
        this.secretId = "531a51f57e5bd290c4d95c9c1e9db9f83fd0ac8b";
    }

    async getUser(user){

        const res = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.secretId}`);

        const profile = await res.json();

        return {
            profile
        }

    }
}

