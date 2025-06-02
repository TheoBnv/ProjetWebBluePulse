document.addEventListener('DOMContentLoaded', function() {
    function adjustHeight() {
        document.getElementById("fondAccueilConteneur").style.height = window.innerHeight + 'px';
    }

    window.addEventListener('resize', adjustHeight);
    adjustHeight();
});
