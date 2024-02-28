const form = document.getElementById('form');

const f_Date = document.getElementById('f-date');
const s_Date = document.getElementById('s-date');

const btn = document.getElementById('check-btn');

btn.addEventListener('click', checkBusy)
form.onsubmit = (e) => {
    e.preventDefault();
    return;
}


async function checkBusy() {

    try {
        const res = await fetch('http://localhost:3000/api/checkIfBusy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                timeMin: f_Date.value,
                timeMax: s_Date.value
            })
        })

        const result = await res.json();

        console.log(result);
    } catch (error) {
        console.error('No data...');
    }
}