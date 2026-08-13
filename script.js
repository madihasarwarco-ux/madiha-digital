const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");


// =========================
// OPEN CHAT
// =========================

if (chatButton) {

    chatButton.addEventListener("click", function () {

        chatBox.style.display = "block";

        if (chatInput) {
            chatInput.focus();
        }

    });

}


// =========================
// CLOSE CHAT
// =========================

if (closeChat) {

    closeChat.addEventListener("click", function () {

        chatBox.style.display = "none";

    });

}


// =========================
// SEND MESSAGE
// =========================

if (sendMessage) {

    sendMessage.addEventListener("click", function () {

        const message = chatInput.value.trim();


        if (message === "") {

            return;

        }


        // =========================
        // MESSAGE ROW
        // =========================

        const messageRow =
            document.createElement("div");

        messageRow.className =
            "message-row sent-row";


        // =========================
        // MESSAGE
        // =========================

        const messageDiv =
            document.createElement("div");

        messageDiv.className =
            "message sent";

        messageDiv.textContent =
            message;


        // =========================
        // PROFILE DP
        // =========================

        const dp =
            document.createElement("img");

        dp.src =
            "imge2.png.png.png";

        dp.alt =
            "Madiha";

        dp.className =
            "chat-dp";


        // =========================
        // ADD MESSAGE + DP
        // =========================

        messageRow.appendChild(
            messageDiv
        );

        messageRow.appendChild(
            dp
        );

        chatMessages.appendChild(
            messageRow
        );


        // =========================
        // WHATSAPP NUMBER
        // =========================

        const whatsappNumber =
            "923208046712";


        // =========================
        // WHATSAPP MESSAGE
        // =========================

        const whatsappMessage =
            "Assalam-o-Alaikum Madiha! 👋\n\n" +
            "My message:\n" +
            message;


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        // Clear input

        chatInput.value = "";


        // Scroll chat

        chatMessages.scrollTop =
            chatMessages.scrollHeight;


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


// =========================
// ENTER KEY
// =========================

if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage.click();

            }

        }
    );

}