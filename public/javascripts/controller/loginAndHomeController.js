myApp.controller("loginAndHomeController",function($state){
    var loginAndHome = this;

    loginAndHome.signUp = signUp;
    loginAndHome.login = login;
    loginAndHome.reset = reset;
    loginAndHome.fetchNotes = fetchNotes;
    loginAndHome.createNotes = createNotes;
    loginAndHome.editNotes = editNotes;
    loginAndHome.updateNots = updateNots;
    loginAndHome.deleteNotes = deleteNotes;


    function signUp(){
            console.log(" signUp ",loginAndHome.signup);
            
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