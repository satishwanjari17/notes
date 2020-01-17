myApp.factory("noteService",($http)=>{
    var noteservice = {};
    noteservice.signUp = signUp;
    noteservice.login = login;
    var url = "http://localhost:8080"

    function signUp(sendingObject){
        return $http.post(url+"/user",sendingObject)
    }

    function login(sendingObject){
        return $http.post(url+"/login",sendingObject)
    }
    return noteservice;
})