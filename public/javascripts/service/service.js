myApp.factory("noteService",($http)=>{
    var noteservice = {};
    noteservice.signUp = signUp;
    noteservice.login = login;
    noteservice.fetchNotes = fetchNotes;
    noteservice.createNotes = createNotes;
    noteservice.updateNotes = updateNotes;
    noteservice.deleteNotes = deleteNotes;

    var url = "http://localhost:8080"

    function signUp(sendingObject){
        return $http.post(url+"/user",sendingObject)
    }

    function login(sendingObject){
        return $http.post(url+"/login",sendingObject)
    }

    function fetchNotes(sendingObject){
        return $http.get(url+"/notes/"+sendingObject.userId)
    }

    function createNotes(sendingObject){
        return $http.post(url+"/createNote",sendingObject)
    }

    function updateNotes(sendingObject){
        return $http.put(url+"/updateNotes",sendingObject)
    }

    function deleteNotes(sendingObject){
        return $http.delete(url+"/notes/"+sendingObject._id)
    }

    return noteservice;
})