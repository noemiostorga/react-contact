import users from 'users.json';

var idCounter = 1;

users.forEach(function(user){
  user.id = idCounter;
  idCounter += 1;
});

export function getContactList() {
  return users.map(function(user){
    return {
      id: user.id,
      image: user.picture.thumbnail,
      fname: user.name.first,
      lname: user.name.last
    }
  });
}

export function getContactById(id) {
  var Contact = users.filter(function(user){
    return Number(user.id) === Number(id);
  })
  return {
    id: Contact[0].id,
    image: Contact[0].picture.large,
    fname: Contact[0].name.first,
    lname: Contact[0].name.last,
    email: Contact[0].email,
    phone: Contact[0].phone,
    city: Contact[0].location.city,
    state: Contact[0].location.state
  }
}