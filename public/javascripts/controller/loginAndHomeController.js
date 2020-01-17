myApp.controller("loginAndHomeController",function($state,noteService){
    var loginAndHome = this;

    loginAndHome.signUp = signUp;
    loginAndHome.login = login;
    loginAndHome.reset = reset;
    loginAndHome.fetchNotes = fetchNotes;
    loginAndHome.createNotes = createNotes;
    loginAndHome.editNotes = editNotes;
    loginAndHome.updateNots = updateNots;
    loginAndHome.deleteNotes = deleteNotes;

//     console.log(" noteService ",noteService);
    

    function signUp(){
            noteService.signUp(loginAndHome.signup).then((response)=>{
                        alert("Registration successful");
                        $state.go("home",{userId:response.data._id});

            },(err)=>{
                        if(err.status == 500){
                                alert("Username already exist")
                        }
            })
        }

    function login(){
                 noteService.login(loginAndHome.userLogin).then((response)=>{
                        alert("Login successful");
                        $state.go("home",{userId:response.data[0]._id});
                },(err)=>{
                        if(err.status == 404){
                                alert("username or password was wrong")
                        }
                })
    }

    function reset(){
            $state.reload();
    }

    function fetchNotes(){
                
    }
    function createNotes(){
        
    }
    function editNotes(){
        
    }
    function updateNots(){
        
    }
    function deleteNotes(){
        
    }
    
})