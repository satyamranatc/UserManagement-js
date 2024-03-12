let UserForm = document.getElementById('UserForm');
let UserList = document.getElementById('UserList');

let Users = [];


function DisplayUsers() {
    UserList.innerHTML = Users.map((e)=>`<p class = 'UserName'>${e.Name}</p>`)
}



UserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let userDetails = {Id: e.target[0].value, Name: e.target[1].value, Age: e.target[2].value};
    Users.push(userDetails);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    DisplayUsers();
});


