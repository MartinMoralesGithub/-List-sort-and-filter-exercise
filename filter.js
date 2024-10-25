function filterBy(users) {

    //brings the searchbox from the html
    const searchBox = document.getElementById('searchBox');
  
    //adds a listener for when the person types something to filter
    searchBox.addEventListener('input', (event) => {

      //stores the curreent search and then creates a new array adding all the matching results
      const query = event.target.value.toLowerCase();
      
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );

      //shows the filtered results
      showUsers(filteredUsers);

    });
  }
  