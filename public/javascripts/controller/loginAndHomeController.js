myApp.controller("loginAndHomeController",function($state,noteService, $stateParams){
    var loginAndHome = this;

    loginAndHome.signUp = signUp;
    loginAndHome.login = login;
    loginAndHome.reset = reset;
    loginAndHome.fetchNotes = fetchNotes;
    loginAndHome.createNotes = createNotes;
    loginAndHome.editNotes = editNotes;
    loginAndHome.updateNots = updateNots;
    loginAndHome.deleteNotes = deleteNotes;
    loginAndHome.logout = logout;
    loginAndHome.updateButton = false;


    
        function isUserLogin(){
                if($stateParams.userId){
                        return  $stateParams.userId;
                }else{
                $state.go('/')
                // return null;
                }
        }


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

        function logout(){
                $state.go('/')
        }

        function fetchNotes(){
                if(isUserLogin()){
                        noteService.fetchNotes({userId:isUserLogin()}).then((response)=>{
                                loginAndHome.noteData = response.data
                        },(err)=>{
                                
                        })
                } 
        }

        function createNotes(){
                if(isUserLogin()){
                        loginAndHome.notesData.userId = isUserLogin();
                        noteService.createNotes(loginAndHome.notesData).then((response)=>{
                                $state.reload();
                        },(err)=>{
                                alert("Someting wents wrong")
                        })
                } 
        }

        function editNotes(editNoteData){
                loginAndHome.updateButton = true;
                loginAndHome.notesData = editNoteData;
        }
    
        function updateNots(){
                if(isUserLogin()){
                        loginAndHome.notesData.userId = isUserLogin();
                        noteService.updateNotes(loginAndHome.notesData).then((response)=>{
                                $state.reload();
                        },(err)=>{
                                alert("Someting wents wrong")
                        })
                } 
        }

        function deleteNotes(deleteNoteData){
                if(isUserLogin()){
                        noteService.deleteNotes(deleteNoteData).then((response)=>{
                                $state.reload();
                        },(err)=>{
                                alert("Someting wents wrong")
                        })
                }
        }
    
})