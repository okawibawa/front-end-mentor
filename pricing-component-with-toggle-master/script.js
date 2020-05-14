const checkBox = document.querySelector('#checkbox');
const prices = document.querySelectorAll('.price');
const pricesMonthly = document.querySelectorAll('.price-monthly');
const pricesAnnually = document.querySelectorAll('.price-annually');

checkBox.addEventListener('click', () => {
  // for (let i = 0; i < prices.length; i++) {
  //   if (checkBox.checked === true) {
  //     prices[0].innerHTML = '$199.99';
  //     prices[1].innerHTML = '$249.99';
  //     prices[2].innerHTML = '$349.99';
  //   } else {
  //     prices[0].innerHTML = '$19.99';
  //     prices[1].innerHTML = '$29.99';
  //     prices[2].innerHTML = '$39.99';
  //   }
  // }

  for (let i = 0; i < prices.length; i++) {
    if (checkBox.checked === true) {
      pricesMonthly[i].style.display = 'none';
      pricesAnnually[i].style.display = 'block';
    } else {
      pricesMonthly[i].style.display = 'block';
      pricesAnnually[i].style.display = 'none';
    }
  }
});
