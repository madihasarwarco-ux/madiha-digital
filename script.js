// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


// Firebase Configuration

const firebaseConfig = {
    apiKey: "AIzaSyC5bLBjzBe65W897lAyQ04HJyP2T5pX0Y",
    authDomain: "madiha-digital-store.firebaseapp.com",
    projectId: "madiha-digital-store",
    storageBucket: "madiha-digital-store.firebasestorage.app",
    messagingSenderId: "450607238935",
    appId: "1:450607238935:web:eb9a366df863f6bcad3152",
    measurementId: "G-H7MDD1B8Q0"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// Chat Elements

const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");

const chatMessages = document.getElementById("chatMessages");


// Current User

let currentUser = null;


// Check Login

onAuthStateChanged(auth, function (user) {

    currentUser = user;

});


// Open Chat

if (chatButton) {

    chatButton.addEventListener("click", function () {

        chatBox.classList.add("active");

    });

}


// Close Chat

if (closeChat) {

    closeChat.addEventListener("click", function () {

        chatBox.classList.remove("active");

    });

}


// Send Message

if (sendMessage) {

    sendMessage.addEventListener("click", async function () {

        const message = chatInput.value.trim();


        if (message === "") {

            return;

        }


        if (!currentUser) {

            alert("Please Login or Sign Up first.");

            window.location.href = "login.html";

            return;

        }


        try {

            await addDoc(
                collection(db, "messages"),
                {

                    userId: currentUser.uid,

                    email: currentUser.email,

                    message: message,

                    sender: "customer",

                    seen: false,

                    createdAt: serverTimestamp()

                }
            );


            // Show message on screen

            const messageDiv = document.createElement("div");

            messageDiv.className = "message sent";

            messageDiv.textContent = message;

            chatMessages.appendChild(messageDiv);


            chatInput.value = "";


            chatMessages.scrollTop =
                chatMessages.scrollHeight;


        }

        catch (error) {

            console.error(error);

            alert(
                "Message send nahi ho saka. Please try again."
            );

        }

    });

}


// Send message with Enter key

if (chatInput) {

    chatInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage.click();

        }

    });

}