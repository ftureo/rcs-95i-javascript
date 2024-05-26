const participants = [
    "Fabi",
    "Johannes",
    "Lukas",
    "Niklas",
    "Nils",
    "Paul",
    "Philipp",
    "Tobias",
    "Tom",
    "Yannick",
    "Hank",
];
const topics = [
    "Technology",
    "Environment",
    "Care & Health",
    "Education",
    "Society",
    "Economy",
    "Politics",
    "Culture",
    "Science",
    "Sports",
    "Entertainment",
    "E-Sports",
    "Food",
    "Travel",
    "Fashion",
    "Music",
    "Art",
    "History",
    "Religion",
    "Philosophy",
    "Psychology",
    "Literature",
    "Languages",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Geography",
    "Astronomy",
    "Medicine",
    "Engineering",
    "Computer Science",
    "Law",
    "Business",
    "Marketing",
    "Management",
    "Finance",
    "Accounting",
    "Human Resources",
    "Sales",
    "Customer Service",
    "Product Management",
    "Project Management",
    "Quality Management",
    "Risk Management",
    "Supply Chain Management",
    "Logistics",
    "Procurement",
    "Production",
    "Operations",
    "Research & Development",
    "Innovation",
    "Design",
    "User Experience",
    "User Interface",
    "Web Development",
    "Mobile Development",
    "Game Development",
    "Software Development",
    "Hardware Development",
    "Networks",
    "Cybersecurity",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Robotics",
    "Automation",
    "Internet of Things",
    "Blockchain",
    "Cryptocurrencies",
    "Virtual Reality",
    "Augmented Reality",
    "Mixed Reality",
    "Cloud Computing",
    "Big Data",
    "Analytics",
    "Business Intelligence",
    "Data Visualization",
    "Databases",
    "Web Design",
    "Graphic Design",
    "Video Production",
    "Photography",
    "Audio Production",
    "Writing",
    "Blogging",
    "Journalism",
    "Social Media",
    "SEO",
    "SEM",
    "Affiliate Marketing",
    "Email Marketing",
    "Content Marketing",
    "Influencer Marketing",
    "Community Management",
    "Customer Success",
    "Customer Support",
    "Product Support",
    "Technical Support",
    "Sales Support",
    "Marketing Support",
    "Operations Support",
    "Research Support",
    "Development Support",
    "Design Support",
    "User Support",
    "Web Support",
    "Mobile Support",
    "Game Support",
    "Software Support",
    "Hardware Support",
    "Network Support",
    "Cybersecurity Support",
    "Data Science Support",
    "Machine Learning Support",
    "Artificial Intelligence Support",
    "Robotics Support",
    "Automation Support",
    "Internet of Things Support",
    "Blockchain Support",
    "Cryptocurrencies Support",
    "Virtual Reality Support",
    "Augmented Reality Support",
    "Mixed Reality Support",
    "Cloud Computing Support",
    "Big Data Support",
    "Analytics Support",
    "Business Intelligence Support",
    "Data Visualization Support",
    "Databases Support",
    "Web Design Support",
    "Graphic Design Support",
    "Video Production Support",
    "Photography Support",
];
const groupsQuantity = 4;

const createRandomGroups = (participants, groupsQuantity) => {
    console.log("Starting createRandomGroups");
    const limit = Math.ceil(participants.length / groupsQuantity);
    const groups = Array.from({ length: groupsQuantity }, () => ({
        members: [],
    }));

    for (let i = 0; i < limit; i++) {
        groups.forEach((group) => {
            const randomIndex = Math.random() * participants.length;
            const floorRandomIndex = Math.floor(randomIndex);
            const randomParticipant = participants.splice(floorRandomIndex, 1);
            const randomParticipantValue = randomParticipant[0];

            if (!randomParticipantValue) return;
            group.members.push(randomParticipantValue);
        });
    }

    console.log("Ending createRandomGroups", { groups });

    return groups;
};

const createRandomTopics = (topics, groupsQuantity, groups) => {
    console.log("Starting createRandomTopics");
    if (topics.length < groupsQuantity) {
        return "Not enough topics"
    }

    const limit = Math.ceil(topics.length / groupsQuantity);

    for (let i = 0; i < limit; i++) {
        groups.forEach((group) => {
            const randomIndex = Math.floor(Math.random() * topics.length);
            const randomTopic = topics.splice(randomIndex, 1)[0];
            if (!randomTopic) return;
            group.topic = randomTopic;
        });
    }

    console.log("Ending createRandomTopics", { groups });
    return groups;
}

const assignTopicsToGroups = (topics, participants, groupsQuantity) => {
    console.log("Starting assignTopicsToGroups")
    const groups = createRandomGroups(participants, groupsQuantity);
    const topicsToAssign = createRandomTopics(topics, groupsQuantity, groups);

    console.log({ groups, topicsToAssign });

    return groups.map((group, index) => ({
        ...group,
        members: group.members,
        topic: topicsToAssign[index].topic,
    }));
}

// const challenge = (assignTopicsToGroups(topics, participants, groupsQuantity));
// console.log(challenge);

// Render the result in the browser

const app = document.getElementById("app");
app.classList.add("container", "row", "justify-content-center");


// Validate the result and send it to the server

const validateChallenge = async (challenge) => {
    console.log("Starting validateChallenge");
    const isValid = challenge.every((group) => group.members.length > 0 && group.topic);

    const result = await fetch("https://api.example.com/challenge", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ challenge, isValid }),
    })

    const data = await result.json();
    console.log({ data })

    console.log("Ending validateChallenge", { isValid });
    return isValid;
}

let challenge

const makeGroupsButton = document.createElement("button");
makeGroupsButton.classList.add("btn", "btn-primary", "m-4");
makeGroupsButton.innerText = "Make Groups";

makeGroupsButton.onclick = () => {
    setTimeout(() => {
        challenge = assignTopicsToGroups(topics, participants, groupsQuantity);
        console.log(challenge);
        app.innerHTML = "";
        challenge.forEach((group) => {
            const groupElement = document.createElement("div");
            groupElement.classList.add("card", "col-4", "p-4", "m-4");
            groupElement.innerHTML = `
            <h2>Group</h2>
            <ul>
                ${group.members.map((member) => `<li>${member}</li>`).join("")}
            </ul>
            <h3>Topic</h3>
            <p>${group.topic}</p>
        `;
            app.appendChild(groupElement);
        });
        app.appendChild(button);
    }, 1000);

};
app.appendChild(makeGroupsButton);


const button = document.createElement("button");
button.classList.add("btn", "btn-primary", "m-4");
button.innerText = "Validate Challenge";
button.onclick = async () => {
    const isValid = await validateChallenge(challenge);
    const message = document.createElement("p");
    message.innerText = isValid ? "Challenge is valid" : "Challenge is not valid";
    app.appendChild(message);
};

if (challenge) {
    app.appendChild(button);
}

