function userAuthentication(userInput) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  for (let i = 0; i < users.length; i++) {
    if ((users[i].email === String(userInput.email)) && (users[i].password === String(userInput.password))) {
      return users[i].firstName
    }
  } return `信箱或密碼有誤，請重新輸入！`
}

module.exports = userAuthentication