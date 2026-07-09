document.getElementById("formid").addEventListener("submit", async function(event) {
    event.preventDefault();

    document.getElementById("result").style.display = "block";
    document.getElementById("resultText").innerHTML =
        "🤖 Generating AI recommendation...";

    const data = {
        district: document.getElementById("district").value,
        soil: document.getElementById("soil").value,
        crop: document.getElementById("crop").value,
        season: document.getElementById("season").value,
        temperature: document.getElementById("temperature").value,
        humidity: document.getElementById("humidity").value,
        nitrogen: document.getElementById("nitrogen").value,
        phosphorus: document.getElementById("phosphorus").value,
        potassium: document.getElementById("potassium").value,
        ph: document.getElementById("ph").value
    };

    try {
        const response = await fetch("/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        document.getElementById("resultText").innerHTML =
            result.recommendation.replace(/\n/g, "<br>");

    } catch (error) {
        document.getElementById("resultText").innerHTML =
            "❌ Error connecting to AI server.";
    }
});