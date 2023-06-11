// Set the countdown date (replace with your desired date)
const countdownDate = new Date('2023-12-31T00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
//   document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'Coming Soon!';
  }
}, 1000);
