
// you-can-donate-to-msg
const donationMessages = [
        "Your unwanted clothes can be someone else's treasure.",
        "Every bowl filled counts! Donate pet food to ensure no animal goes hungry.",
        "Be a beacon of kindness in someone's life by donating food to the poor.",
        "Help break down barriers and create opportunities for the specially-abled through your donation.",
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
                        setTimeout(() => {
                                element.textContent = "";
                                typeMessage(element, message, speed);
                        }, 500);
                }
        }, speed);
}

document.querySelectorAll('.you-can-donate-to-msg').forEach((msgElement, index) => {
        typeMessage(msgElement, donationMessages[index], 100);
});

// past history text
const typedTexts = [
        "Over 10,000 meals served to those in need thanks to your generosity!",
        "Together, we've built 50 homes for families escaping poverty and homelessness.",
        "From classrooms to communities: 1000 children now have access to quality education!",
        "Your donations have provided clean water to 20,000 people in underserved regions.",
        "Incredible! 1 million trees planted to combat deforestation and protect our planet.",
        "Milestone achieved: 1000 animals rescued and rehomed through our adoption program.",
        "Transforming lives: 500 scholarships awarded, empowering students to pursue their dreams.",
        "Breaking barriers: 1000 people with disabilities supported with adaptive technologies.",
        "Hope restored: 200 survivors of natural disasters provided with emergency relief.",
        "Together, we've funded 100 medical missions, providing healthcare to remote communities."
];

function typeWriter(text, index) {
        const container = document.querySelectorAll('.past-contributions-text-container')[index];
        const target = container.querySelector('.past-contributions-text');
        let i = 0;

        function type() {
                if (i < text.length) {
                        target.innerHTML = text.slice(0, i + 1);
                        i++;
                        setTimeout(type, Math.floor(Math.random() * 50) + 50);
                } else {
                        i = 0; // Reset counter
                        setTimeout(type, 1000); // Delay before restarting typing
                }
        }

        type();
}

document.querySelectorAll('.past-contributions-text-container').forEach((container, index) => {
        typeWriter(typedTexts[index], index);
});
