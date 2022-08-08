function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => {
            console.log(res);
            return res.json()
        }
    ).then(
        json => {
            console.log(json);
            const container = document.createElement('ul');
            json.map(
                (user)=>{
                    const li = document.createElement('li');
                    li.innerText = user.name;
                    container.appendChild(li)
                }
            )
            document.body.appendChild(container)

        }
    )
}
getUsers()