class Landing{
    // property
    database={
        Milan:{username:'Milan', password: "milan123"},
        Manu:{username:'Manu', password: "manu123"},
        Mini:{username:'Mini', password: "min1123"}
    }

    // to store data to local storage
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }

    // to get data from local storage 
    getData(){
        this.database= JSON.parse(localStorage.getItem("database"))
        // console.log(this.database);
    }
    
    // method to register user
    register(){
        this.getData()
        let user =regUser.value
        let pswd =regPswd.value
        // console.log(user,pswd);
        if(user=="" || pswd==""){
            alert('please fill the form completely')
        }
        else{
            if( user in this.database){
                alert('account already exist')
            }
            else{
                this.database[user]={username:user,password:pswd}
                alert('user added successfully')
                this.saveData()
                window.location ='login.html'
            }
        }
    }

    login(){
        this.getData()
        let user=loguser.value
        let pswd =logpswd.value
        if (user in this.database) {
            if
        }
        else{
            alert('user does not exist')
        }
    }
}
const obj = new Landing()
// obj.saveData()
obj.getData()