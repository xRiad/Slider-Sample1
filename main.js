function goLeft () {
  const film = document.querySelector('.film')
  console.log(film)
  var style = window.getComputedStyle(film);
  var matrix = new WebKitCSSMatrix(style.transform);
  if (matrix.m41 < 45 * 50 && matrix.m41 < 5000) {
    let matrixm41Percentage = (matrix.m41 + 500) / 5000 * 100
    film.style.transform = `translateX(${matrixm41Percentage}%)`
  }
  console.log(matrix.m41)
}
function goRight () {
  const film = document.querySelector('.film')
  console.log(film)
  var style = window.getComputedStyle(film);
  var matrix = new WebKitCSSMatrix(style.transform);
  if (matrix.m41 <= 45 * 50 && matrix.m41 > -2250) {
    let matrixm41Percentage = (matrix.m41 - 500) / 5000 * 100
    film.style.transform = `translateX(${matrixm41Percentage}%)`
  }
  console.log(matrix.m41)
}