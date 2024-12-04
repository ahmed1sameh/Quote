function addquote() {
    const pairedContents = [
        {
            content1: "“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”",
            content2: "― Marilyn Monroe"
        },
        {
            content1: "He's like a drug for you, Bella.",
            content2: "― Stephenie Meyer, Eclipse"
        },
        {
            content1: "“A wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.”",
            content2: "― Marilyn Monroe"
        },
        {
            content1: "“′Classic′ - a book which people praise and don't read.”",
            content2: "― Mark Twain"
        },
        {
            content1: "“You don’t forget the face of the person who was your last hope.”",
            content2: "― Suzanne Collins, The Hunger Gamesb"
        },
        {
            content1: "“I am free of all prejudice. I hate everyone equally. ”",
            content2: "― W.C. Fields"
        }
    ];

    function changeContent() {
        const randomIndex = Math.floor(Math.random() * pairedContents.length);
        document.getElementById('content1').textContent = pairedContents[randomIndex].content1;
        document.getElementById('content2').textContent = pairedContents[randomIndex].content2;
    }

    const button = document.getElementById('getQuotes');
    button.addEventListener('click', changeContent);

   
}

