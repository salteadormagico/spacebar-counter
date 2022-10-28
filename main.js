document.addEventListener('DOMContentLoaded', function() {
    const count = document.getElementById('count');
    const reset = document.getElementById('reset');
    let num = 0;
    document.body.onkeyup = function(e) {
        if (e.keyCode === 32) {
            num++;
            count.innerHTML = num;
        }
    }
    reset.onclick = function() {
        count.innerHTML = 0;
    };
});