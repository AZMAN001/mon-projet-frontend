fetch('https://mon-backend.onrender.com/users')
    .then(res => res.json())
    .then(users => {
        const list = document.getElementById('users');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            list.appendChild(li);
        });
    });
