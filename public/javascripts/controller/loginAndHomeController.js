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
                        console.log(" signUp response ",response);
                        alert("Registration successful")
            },(err)=>{
                        if(err.status == 500){
                                alert("Username already exist")
                        }
            })
        }

    function login(){
            
            console.log(" login ",loginAndHome.userLogin);
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