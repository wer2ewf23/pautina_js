let users =[
    
]

let inputName = document.querySelector('.inputName')
let author = document.querySelector('.author')
let text = document.querySelector('.text')
let date = document.querySelector('.date')
let button = document.querySelector('.button')
let usersPlace = document.querySelector('.user')

function showUsers (){
    usersPlace.innerHTML = ''
        users.forEach(element =>{
            usersPlace.innerHTML+= `
            <div class="user_container">
                <div class="user_content">
                    <div class="users">
                        <div class="user_item">
                        <div class="title_date">
                            <h3 class = "name">${element.name}</h3>
                            <p class="date_">${element.date}</p>
                        </div>
                        <p class ="text_">${element.text}</p>
                    
                        <p class ="subtitle">${element.author}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            `
        })
}

function addUser(){
    let object = {
        name:inputName.value,
        author:author.value,
        text:text.value,
        date:date.value,
    }
    users.push(object)
    console.log(users)
    inputName.value = ''
    author.value = ''
    text.value = ''
    date.value = ''

    showUsers()
}

button.addEventListener('click', addUser)



