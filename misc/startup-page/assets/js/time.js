// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

const displayClock = () => {
  const options = {day:'numeric', month:'long', hour: 'numeric', minute: 'numeric', hour12: CONFIG.twelveHourFormat, timeZone: CONFIG.timeZone}
  const date = new Date().toLocaleString("es-MX", options).split(/[\s,]+/)
  
  document.getElementById('date').innerText = `${date[0]} ${date[1]} ${date[2]}`
  document.getElementById('time').innerText = `${date[3]} ${CONFIG.twelveHourFormat ? ` ${date[4]}${date[5]}` : ''}`

  setTimeout(displayClock, 1000)
}

window.addEventListener("DOMContentLoaded", displayClock)
