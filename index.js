let singleLetter = prompt("Type a letter");

let usersWhoContainTheLetter = window.users.filter((user) => {
  return user.name.includes(singleLetter);
});

console.log(usersWhoContainTheLetter.length);
let index = 0;

function greetingUsers() {
  console.log(usersWhoContainTheLetter[index].name);
  index++;
  if (index === usersWhoContainTheLetter.length) {
    clearInterval(greetingInterval);
  }
}
let greetingInterval = setInterval(greetingUsers, 2000);
let userID = Number(prompt("type an user ID"));
for (let todo of window.todos) {
  if (todo.userId === userID && todo.completed === false) {
    console.log(todo.title);
  }
}
