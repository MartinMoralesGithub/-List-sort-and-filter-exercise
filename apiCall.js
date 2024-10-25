async function apiCall() {

//Makes the apicall and calls functions to show users, sort and filter them

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    showUsers(users);
    sortBy(users);
    filterBy(users);
  }
  
  apiCall();
  