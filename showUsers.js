function showUsers(users) {

    //brings the user list from the html
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    //for each user data...> 
    users.forEach(user => {
      
        //<................. it creates a list item to show everything inside, and lastly it shows it in the userlist from the main html
      const userItem = document.createElement('li');
      userItem.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;
      userList.appendChild(userItem);
    });
  }
  