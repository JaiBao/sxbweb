export const useUniversal = () => {
  // 中華一餅line
  const onMessengerClick = () => {
    window.open('https://line.me/R/ti/p/@chinabing', '_blank')
  }
  //   google表單1
  const onForm1Click = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-SKgtwQNMay9rAhWf69mY5UToJ3RJHdSq1oEFnxknJJZPWg/viewform', '_blank')
  }
  //   google表單2
  const onForm2Click = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeFG647mYLOXp_rnbIdRyfOKmtlOzjFE44cqjI02wm0Ktu1cA/viewform', '_blank')
  }
  //   少小白ig
  const onMessengerIg = () => {
    window.open('https://www.instagram.com/imsxb/?igsh=cG5uZ29qZHRqbzNw', '_blank')
  }
  //   少小白line
  const onMessengerLine = () => {
    window.open('https://line.me/R/ti/p/@766wzfkd', '_blank')
  }
  //   少小白FB
  const onMessengerFB = () => {
    window.open('https://www.facebook.com/iamsxb/', '_blank')
  }
  //   運費
  const onMessengerFreight = () => {
    window.open('https://ppt.cc/fpHdAx', '_blank')
  }
  //   打電話
  const dialNumber = () => {
    window.location.href = 'tel:0229952639'
  }
  //   去商城
  const toBuy = () => {
    window.location.href = 'https://www.iloveselect.com.tw'
  }
  //   訂單
  const onDownloadClick = () => {
    window.open('/menu.pdf', '_blank')
  }
  return {
    onMessengerClick,
    onForm1Click,
    onForm2Click,
    onMessengerIg,
    dialNumber,
    onMessengerFB,
    onMessengerLine,
    onDownloadClick,
    onMessengerFreight,
    toBuy
  }
}
