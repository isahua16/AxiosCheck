function success(response)
{
    let posts_container = document.querySelector(`#posts_container`);
    let data = response[`data`];
    
    for(let i = 0; i < data.length; i++)
    {
        posts_container.insertAdjacentHTML(`beforeend`, 
        `<h3>${data[i][`title`]}</h3>
        <p>${data[i][`body`]}</p>`);
    }
}

function failure(error)
{
    let posts_container = document.querySelector(`#posts_container`);
    posts_container.insertAdjacentHTML(`beforeend`, 
    `<h3>There was an error</h3>`);
}

axios.request(
    {
        url: `https://jsonplaceholder.typicode.com/posts`
    }
).then(success).catch(failure);