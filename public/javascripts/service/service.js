myApp.factory("noteService",($http)=>{
    var noteservice = {};
    noteservice.signUp = signUp;
    var url = "http://localhost:8080"

    function signUp(sendingObject){
        return $http.post(url+"/user",sendingObject)
    }

    return noteservice;
})