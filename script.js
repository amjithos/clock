if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js")
    .then(registration =>{
        console.log("Service Worker Registered")
        console.log(registration)
    })
    .catch(err =>{
        console.log("Service Worker Error")
        console.log(err)
    })
}else{
    alert("Service worker not working")
}