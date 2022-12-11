const h1 = document.getElementById('time')

function getTime() {
  const date = new Date() //Date() 는 JS 의 내장 객체
  let hour = date.getUTCHours() + 9 // Date()로 가져온 날짜의 UTC 시 가져오기
  const minutes = date.getUTCMinutes() // Date()로 가져온 날짜의 UTC 분 가져오기
  const seconds = date.getUTCSeconds() // Date()로 가져온 날짜의 UTC 초 가져오기
  if (hour > 23) {
    hour = hour - 24
  }

  const time = `
    ${hour}시 ${minutes}분 ${seconds}초`
  h1.textContent = time
}

setInterval(getTime, 250)
// 함수 호출
