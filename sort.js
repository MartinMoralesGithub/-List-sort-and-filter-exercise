function sortBy(users) {

    //brings the sort element from the html
    const sortOptions = document.getElementById('sortOptions');
  
    //listens when the value changes form the main html and sorts it according to the value chosen (name, username, mail) then it shows it
    sortOptions.addEventListener('change', (event) => {
      const sortedUsers = [...users].sort((a, b) => {
        const key = event.target.value;
        return a[key].localeCompare(b[key]);
      });
      showUsers(sortedUsers);
    });
  }
  