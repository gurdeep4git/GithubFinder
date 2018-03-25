const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener('keyup', (e) => {
    const userVal = e.target.value;
    if(userVal!=""){
        // Make http call
        github.getUser(userVal)
        .then((data) => {
            if(data.profile.message==="Not Found"){
                // show alert not found
                ui.showAlert("User not found",'alert alert-danger');
            }
            else{
                // show profile
                ui.showProfile(data.profile);
                //ui.showRepos(data.repos);
            }
        });
    }
    else{
        // clear profile
        ui.clearProfile();
    }
});