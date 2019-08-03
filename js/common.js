
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/users';
Http.open("GET", url);
Http.send();

var users = [];

Http.onreadystatechange = (e) => {
  window.users = JSON.parse(Http.responseText)
  updateUI(window.users)
}

function updateUI(users){
  var team_list = document.getElementById('team');

  if(users.length > 0){
    users.forEach(function (user) {
      team_list.insertAdjacentHTML('beforeend', '<li><span>'+user.name+'('+user.username+')</span> - '+user.email+'</li>');
    });
  }
}
