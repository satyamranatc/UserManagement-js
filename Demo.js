let UserForm = document.getElementById('UserForm');
let UserList = document.getElementById('UserList');
let ShowCase = document.getElementById('ShowCase');
let ShowCaseData = document.getElementById('ShowCaseData');
let UpdateBtn = document.getElementById('UpdateBtn');
let DeleteBtn = document.getElementById('DeleteBtn');

let Users = [];


function CloseShowCase()
{
    ShowCase.style.visibility = 'hidden';
}
function showShowCase()
{
    ShowCase.style.visibility = 'visible';
}

let currentUser;
function HandleClick(e)
{
    showShowCase();
    ShowCaseData.innerText = `Id:- ${e.Id}\n Name: ${e.Name}\n Age: ${e.Age}`
    currentUser = e;
}

function DisplayUsers() {
    UserList.innerHTML = "";
    Users.map((e)=>{
        let MyPara = document.createElement('p');
        MyPara.className = "UserName";
        MyPara.innerHTML = e.Name;
        MyPara.addEventListener('click', ()=>{HandleClick(e)});
        UserList.appendChild(MyPara);
    })
}


console.log(UserForm)
UserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let userDetails = {Id: e.target[0].value, Name: e.target[1].value, Age: e.target[2].value};
    Users.push(userDetails);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    DisplayUsers();
});


DeleteBtn.addEventListener('click',()=>{
    Users.splice(Users.indexOf(currentUser),1);
    DisplayUsers();
})



