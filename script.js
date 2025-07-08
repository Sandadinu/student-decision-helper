document.getElementById('decisionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // 💡 Moved backend logic here
    let scorePrivate = 0;
    let scoreGov = 0;

    if (data.results === 'high') scoreGov += 2;
    if (data.budget === 'yes') scorePrivate += 2;
    if (data.goal === 'job') scorePrivate += 2;
    if (data.goal === 'research') scoreGov += 2;
    if (data.freedom === 'high') scorePrivate += 2;
    if (data.freedom === 'low') scoreGov += 1;

    const message = scorePrivate > scoreGov
        ? "You are more suitable for a Private Degree."
        : "You are better off choosing a Government University Degree.";

    document.getElementById('result').innerText = message;
});
