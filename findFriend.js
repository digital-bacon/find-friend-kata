// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

/*
We want to construct a function that will take in three parameters.
  the contact data itself
  the name of a contact, and
  the field (property) of the friend we want back

The function will return the name and specified field of the first friend listed in the contact's friends list. So, using the data shown above, specifying "Laurel" as the first parameter, and "email" as the second would look at Laurel's list of friends, and return an object with Hardy's name and e-mail address.

If the contact requested or if the field requested is not found, then return "Not found".
*/



// const findInFriends = (element, value) => element === value;

// const isFriendOf = (contactName, friendName, object) => {
//   const friends = getFriends(contactName, object);
//   const isFriend = indexOfValue(friendName, friends, findInFriends) > -1;
//   return isFriend;
// };


const getContact = (contactName, object) => {
  const indexOfContact = object.findIndex(element => element.name === contactName);
  if (indexOfContact === -1) return;
  return object[indexOfContact];
};

const getFriends = (contactName, object) => {
  const indexOfContact = object.findIndex(element => element.name === contactName);
  // const indexOfContact = indexOfValue(contactName, object, findContact);
  if (indexOfContact === -1) return;
  return object[indexOfContact].friends;
};

const findFriend = (data, name, field) => {
  const errorMessage = 'Not found';
  const friendsList = getFriends(name, data);
  if (friendsList === undefined) return errorMessage;
  const friendName = friendsList[0];
  const friendContactCard = getContact(friendName, data);
  if (friendContactCard[field] === undefined) return errorMessage;
  const friendsRequestedData = friendContactCard[field];
  return { name: friendName, [field]: friendsRequestedData };
};




console.log(findFriend(contacts, 'Laurel', 'phone'));
// console.log(findFriend(contacts, 'John', 'email'));
// console.log(findFriend(contacts, 'Laurel', 'pizza'));
// console.log(findFriend(contacts, "Brendan", "email"));