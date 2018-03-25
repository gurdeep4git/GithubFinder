class Github{
    //Constructor
    constructor(){
        this.clien_Id = '8fd8900982fcabbf6a82';
        this.client_secret = '7307483a2fbb2d8b10b35e2816650095054d5d67';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    //Methods
    async getUser(username){
        const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.clien_Id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        const repos = await repoResponse.json();
        
        return{
            profile:profile,
            repos:repos
        }
    }
}