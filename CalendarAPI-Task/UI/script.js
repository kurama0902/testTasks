const form = document.getElementById('form');

const api_key = document.getElementById('api_key');
const f_Date = document.getElementById('f-date');
const s_Date = document.getElementById('s-date');

const btn = document.getElementById('check-btn');

btn.addEventListener('click', checkBusy)
form.onsubmit = (e) => {
    e.preventDefault();
    return;
}


async function checkBusy() {

    if(api_key.value === '' || f_Date.value === '' || s_Date.value === '') {
        console.log('Please fill all the fields');
        return
    }

    try {
        const res = await fetch('http://localhost:3000/api/checkIfBusy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apiKey: api_key.value,
                timeMin: f_Date.value,
                timeMax: s_Date.value
            })
        })

        const result = await res.json();

        if(result.length > 0) {
            console.log('BUSY INTEVALS:', result);
        } else {
            console.log('Here are no busy intervals..');
        }
    } catch (error) {
        console.error('No data...', error);
    }
}