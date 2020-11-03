var links = document.getElementsByClassName('nav-item');
for(let item of links) {
  item.addEventListener('click',() => {
    document.getElementsByClassName('nav-item active')[0].classList.remove('active');
    item.classList.add('active');
    let name = item.querySelector('a.nav-link').attributes[1].value;
    $('html, body').animate({scrollTop: $(name).offset().top -65 }, 1000);
  })
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
} 

