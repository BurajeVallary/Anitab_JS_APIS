const userContainer=document.getElementById('users')


const getUsers=() =>{
 return  fetch(`https://dummyjson.com/users`)   //fetch returns a  promise 
   .then (response => response.json())     // returns the method called on the promise returned by fetch which takes a callback function  that will be executed when the promise is resolved, which means the server responded successfully.
   .then(response=>response)              // 
   .catch(error=>error)
}

const displayUsers= async()=>{
const users=await getUsers();
console.log({users});

users.users.map(item=>{
    let div=document.createElement('div');
    let image=document.createElement('img');
    let name=document.createElement('h2');
    let userName=document.createElement('p');


image.src=item.image;
name.innerHTML=`${item.firstName} ${item.lastName}`
userName.innerHTML=item.username;

div.appendChild(image)
div.appendChild(name)
div.appendChild(userName)
div.setAttribute('key',item.id);
div.setAttribute ('class','people');
userContainer.appendChild(div);


}
)
}
displayUsers();