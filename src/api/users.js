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
  var contact = users.filter(function(user){
    return Number(user.id) === Number(id);
  })
  return {
    id: contact[0].id,
    image: contact[0].picture.large,
    fname: contact[0].name.first,
    lname: contact[0].name.last,
    email: contact[0].email,
    phone: contact[0].phone,
    city: contact[0].location.city,
    state: contact[0].location.state
  }
}