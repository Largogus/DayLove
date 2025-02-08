const button_ok = document.querySelector('.button');
const dlg = document.getElementById('choice_dlg');

button_ok.addEventListener("click", function () {
    dlg.showModal();
})