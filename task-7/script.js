function fetchUserData() {
  const userList = document.getElementById('user-list');
  const errorMessage = document.getElementById('error-message');
  userList.innerHTML = '';
  errorMessage.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(userDiv);
      });
    })
    .catch(error => {
      errorMessage.textContent = 'Failed to fetch user data. Please check your internet connection.';
      console.error('Fetch error:', error);
    });
}

// Fetch data on initial page load
window.onload = fetchUserData;
