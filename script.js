document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const vehical = document.getElementById('vehical-number').value;
    const arrivalDate = document.getElementById('arrival-date').value;
    const arrivalTime = document.getElementById('arrival-time').value;
    const location = document.getElementById('location').value;

    const availability = Math.random() < 0.5; // Randomly generate availability

    if (availability) {
        document.getElementById('result').innerText = `Congratulations, ${username}! Your parking space for you car ${vehical} at ${location} near city bank is reserved for ${arrivalDate} at ${arrivalTime}.`;
    } 
    if (availability) {
        document.getElementById('result').innerText = `Congratulations, ${username}! Your parking space for you car ${vehical} at ${location} near gandhi nagar is reserved for ${arrivalDate} at ${arrivalTime}.`;
    } else {
        document.getElementById('result').innerText = `We're sorry, ${username}. The parking space for you car ${vehical} at ${location} is not available for ${arrivalDate} at ${arrivalTime}.`;
    }
});