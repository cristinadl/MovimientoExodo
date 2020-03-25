document.addEventListener("DOMContentLoaded" , event => {
    
    const app = firebase.app();

    const db = firebase.firestore();

    console.log(app)
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.email}`);
                console.log(user)
            }).catch(console.log)
}