document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('popup-title').textContent = this.dataset.title;
        document.getElementById('popup-info').textContent = this.dataset.info;
        document.getElementById('popup').style.display = 'flex';
    });
});
document.getElementById('popup-close').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};
document.getElementById('popup').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
};