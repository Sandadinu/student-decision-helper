document.getElementById('decisionForm').addEventListener('submit',async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    console.log("Sending to backend: ", data);

    const response=await fetch('http://localhost:3000/api/recommend', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    const result=await response.json();
    document.getElementById('result').innerText=result.message;
} );