document.addEventListener("DOMContentLoaded", function () {

    console.log("Madiha Digital Store is working!");


    /* =========================
       BUY NOW BUTTONS
    ========================= */

    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Opening Place Order page...");

        });

    });


    /* =========================
       WEBSITE CHAT
    ========================= */

    const chatButton = document.getElementById("chatButton");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");

    const chatInput = document.getElementById("chatInput");
    const sendMessage = document.getElementById("sendMessage");
    const chatMessages = document.getElementById("chatMessages");


    /* OPEN CHAT */

    if (chatButton && chatBox) {

        chatButton.addEventListener("click", function () {

            chatBox.style.display = "flex";

            if (chatInput) {
                chatInput.focus();
            }

        });

    }


    /* CLOSE CHAT */

    if (closeChat && chatBox) {

        closeChat.addEventListener("click", function () {

            chatBox.style.display = "none";

        });

    }


    /* SEND MESSAGE */

    function sendChatMessage() {

        if (!chatInput || !chatMessages) {
            return;
        }

        const message = chatInput.value.trim();

        if (message === "") {
            return;
        }


        /* USER MESSAGE */

        const userMessage = document.createElement("div");

        userMessage.className = "message sent";

        userMessage.textContent = message;

        chatMessages.appendChild(userMessage);


        /* CLEAR INPUT */

        chatInput.value = "";


        /* SCROLL TO BOTTOM */

        chatMessages.scrollTop = chatMessages.scrollHeight;


        /*
            Temporary automatic reply.

            Real-time chat with Madiha will need
            a backend/database connection.
        */

        setTimeout(function () {

            const reply = document.createElement("div");

            reply.className = "message received";

            reply.textContent =
                "Thank you for your message! ❤️ Madiha will reply soon.";

            chatMessages.appendChild(reply);

            chatMessages.scrollTop = chatMessages.scrollHeight;

        }, 700);

    }


    /* SEND BUTTON */

    if (sendMessage) {

        sendMessage.addEventListener("click", function () {

            sendChatMessage();

        });

    }


    /* ENTER KEY */

    if (chatInput) {

        chatInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendChatMessage();

            }

        });

    }

});