 const url="http://localhost:5500/api"

const newUser = {
    name: "Rafael Santos",
    avatar: "http://lorempixel.com/400/200/",
    city: "Governador Valadares"
}

const updatedUser = {
    name: "Ana Santos",
    avatar: "http://lorempixel.com/400/200/",
    city: "Belo Horizonte"
}


 function getUser(){

    axios.get(url)
    .then( response =>{
       const data = response.data

       rederresults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
 }

 getUser()


 function addNewUser(){
     axios.post(url, newUser)
        .then( response => {
            alert("O Usuario foi adicionado")
        })
        .catch( error => console.log(error))
 }

/*  addNewUser() */

 function updateUser() {
    axios.put(`${url}/2`, updatedUser)
    .then(response =>{
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
 }

 /* updateUser() */


 function deleteUser() {
     axios.delete(`${url}/5`, '')
     .the( response => {
        alert(JSON.stringify(response.data))
     })
     .catch(error => console.log(error))
 }

 /* deleteUser() */

 function getOneUser() {
    axios.get(`${url}/2`)
    .then( response => {
        const data = response.data
        rederresults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
 }

 getOneUser()