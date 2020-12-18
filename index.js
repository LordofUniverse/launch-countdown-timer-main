const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const indays = days.innerHTML
const inminutes = minutes.innerHTML
const inhours = hours.innerHTML
const inseconds = seconds.innerHTML

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

function int_str () {
  if (cur_seconds.toString().length === 1) {
    cur_seconds = '0' + cur_seconds.toString()
  }
  if (cur_minutes.toString().length === 1) {
    cur_minutes = '0' + cur_minutes.toString()
  }
  if (cur_hours.toString().length === 1) {
    cur_hours = '0' + cur_hours.toString()
  }
  if (cur_days.toString().length === 1) {
    cur_days = '0' + cur_days.toString()
  }
}

function update () {
  if (days.innerHTML === '00' && hours.innerHTML === '00' && minutes.innerHTML === '00' && seconds.innerHTML === '00') {
    days.innerHTML = indays
    minutes.innerHTML = inminutes
    hours.innerHTML = inhours
    seconds.innerHTML = inseconds
  } else {
    let cur_days = parseInt(days.innerHTML, 10)
    let cur_hours = parseInt(hours.innerHTML, 10)
    let cur_minutes = parseInt(minutes.innerHTML, 10)
    let cur_seconds = parseInt(seconds.innerHTML, 10)

    cur_seconds -= 1

    if (cur_seconds.toString().length === 1) {
      cur_seconds = '0' + cur_seconds.toString()
    } else {
      cur_seconds = cur_seconds.toString()
    }
    if (cur_minutes.toString().length === 1) {
      cur_minutes = '0' + cur_minutes.toString()
    } else {
      cur_minutes = cur_minutes.toString()
    }
    if (cur_hours.toString().length === 1) {
      cur_hours = '0' + cur_hours.toString()
    } else {
      cur_hours = cur_hours.toString()
    }
    if (cur_days.toString().length === 1) {
      cur_days = '0' + cur_days.toString()
    } else {
      cur_days = cur_days.toString()
    }

    if (cur_days === '00' && cur_hours == '00' && cur_minutes == '00' && cur_seconds == '00') {
      cur_days = indays
      cur_hours = inhours
      cur_minutes = inminutes
      cur_seconds = inseconds
    }

    if (cur_seconds.toString().length === 1) {
      cur_seconds = '0' + cur_seconds.toString()
    } else {
      cur_seconds = cur_seconds.toString()
    }
    if (cur_minutes.toString().length === 1) {
      cur_minutes = '0' + cur_minutes.toString()
    } else {
      cur_minutes = cur_minutes.toString()
    }
    if (cur_hours.toString().length === 1) {
      cur_hours = '0' + cur_hours.toString()
    } else {
      cur_hours = cur_hours.toString()
    }
    if (cur_days.toString().length === 1) {
      cur_days = '0' + cur_days.toString()
    } else {
      cur_days = cur_days.toString()
    }

    if (cur_hours === '00' && cur_minutes == '00' && cur_seconds == '00') {
      cur_days = parseInt(cur_days, 10) - 1
      cur_hours = 24
    }

    if (cur_seconds.toString().length === 1) {
      cur_seconds = '0' + cur_seconds.toString()
    } else {
      cur_seconds = cur_seconds.toString()
    }
    if (cur_minutes.toString().length === 1) {
      cur_minutes = '0' + cur_minutes.toString()
    } else {
      cur_minutes = cur_minutes.toString()
    }
    if (cur_hours.toString().length === 1) {
      cur_hours = '0' + cur_hours.toString()
    } else {
      cur_hours = cur_hours.toString()
    }
    if (cur_days.toString().length === 1) {
      cur_days = '0' + cur_days.toString()
    } else {
      cur_days = cur_days.toString()
    }

    if (cur_minutes === '00' && cur_seconds == '00') {
      cur_hours = parseInt(cur_hours, 10) - 1
      cur_minutes = 60
    }

    if (cur_seconds.toString().length === 1) {
      cur_seconds = '0' + cur_seconds.toString()
    } else {
      cur_seconds = cur_seconds.toString()
    }
    if (cur_minutes.toString().length === 1) {
      cur_minutes = '0' + cur_minutes.toString()
    } else {
      cur_minutes = cur_minutes.toString()
    }
    if (cur_hours.toString().length === 1) {
      cur_hours = '0' + cur_hours.toString()
    } else {
      cur_hours = cur_hours.toString()
    }
    if (cur_days.toString().length === 1) {
      cur_days = '0' + cur_days.toString()
    } else {
      cur_days = cur_days.toString()
    }

    if (cur_seconds === '00') {
      cur_minutes = parseInt(cur_minutes, 10) - 1
      cur_seconds = 60
    }

    if (cur_seconds.toString().length === 1) {
      cur_seconds = '0' + cur_seconds.toString()
    } else {
      cur_seconds = cur_seconds.toString()
    }
    if (cur_minutes.toString().length === 1) {
      cur_minutes = '0' + cur_minutes.toString()
    } else {
      cur_minutes = cur_minutes.toString()
    }
    if (cur_hours.toString().length === 1) {
      cur_hours = '0' + cur_hours.toString()
    } else {
      cur_hours = cur_hours.toString()
    }
    if (cur_days.toString().length === 1) {
      cur_days = '0' + cur_days.toString()
    } else {
      cur_days = cur_days.toString()
    }

    days.innerHTML = cur_days
    minutes.innerHTML = cur_minutes
    hours.innerHTML = cur_hours
    seconds.innerHTML = cur_seconds
  }
}

setInterval(function () {
  update()
}, 1000)
