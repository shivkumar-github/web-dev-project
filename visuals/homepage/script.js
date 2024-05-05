
// you-can-donate-to-msg
const donationMessages = [
        "Your unwanted clothes can be someone else's treasure.",
        "Every bowl filled counts! Donate pet food to ensure no animal goes hungry.",
        "Be a beacon of kindness in someone's life by donating food to the poor.",
        "Create opportunities for the specially-abled through your donation.",
        "Be someone's lifeline by donating blood."
];

function typeMessage(element, message, speed) {
        let i = 0;
        const typeInterval = setInterval(() => {
                if (i < message.length) {
                        element.textContent += message.charAt(i);
                        i++;
                } else {
                        clearInterval(typeInterval);
                        // setTimeout(() => {
                        //         element.textContent = "";
                        //         typeMessage(element, message, speed);
                        // }, 500);
                }
        }, speed);
}

document.querySelectorAll('.you-can-donate-to-msg').forEach((msgElement, index) => {
        typeMessage(msgElement, donationMessages[index], 100);
});


