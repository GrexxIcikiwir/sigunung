// 1. FUNGSI PENCARIAN
document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if (name.includes(filter)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});

// 2. FUNGSI API CUACA REAL-TIME
async function getMountainWeather() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(async (card) => {
        const lat = card.getAttribute('data-lat');
        const lon = card.getAttribute('data-lon');
        const weatherDiv = card.querySelector('.weather-info');

        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const data = await response.json();
            
            const temp = Math.round(data.current_weather.temperature);
            const code = data.current_weather.weathercode;
            
            let icon = "☀️";
            let status = "Cerah";

            if (code > 0 && code <= 3) { icon = "⛅"; status = "Berawan"; }
            else if (code >= 51) { icon = "🌧️"; status = "Hujan"; }

            weatherDiv.innerHTML = `${icon} ${temp}°C | ${status}`;
        } catch (error) {
            weatherDiv.innerHTML = "⚠️ Cuaca Offline";
        }
    });
}

// Jalankan fungsi saat web dibuka
window.onload = getMountainWeather;
