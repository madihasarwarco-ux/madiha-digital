const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");


// OPEN CHAT

if (chatButton) {

    chatButton.addEventListener("click", function () {

        chatBox.style.display = "block";

        chatInput.focus();

    });

}


// CLOSE CHAT

if (closeChat) {

    closeChat.addEventListener("click", function () {

        chatBox.style.display = "none";

    });

}


// SEND MESSAGE

if (sendMessage) {

    sendMessage.addEventListener("click", function () {

        const message = chatInput.value.trim();

        if (message === "") {
            return;
        }


        const messageDiv =
            document.createElement("div");

        messageDiv.className =
            "message sent";

        messageDiv.textContent =
            message;

        chatMessages.appendChild(messageDiv);

        chatInput.value = "";

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    });

}


// ENTER KEY

if (chatInput) {

    chatInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage.click();

        }

    });

}