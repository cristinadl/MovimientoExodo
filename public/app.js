document.addEventListener("DOMContentLoaded" , event => {
    
    const app = firebase.app();

    const db = firebase.firestore();

    console.log(app)
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    console.log("click")

    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.email}`);
                console.log(user)
            }).catch(console.log)
}

db.collection("Usuarios")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });