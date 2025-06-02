document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

document.querySelectorAll('.case-title').forEach(title => {
    title.addEventListener('click', function(e) {
        e.stopPropagation();
        // Ferme toutes les cases
        document.querySelectorAll('.case.expanded').forEach(c => c.classList.remove('expanded'));
        // Ouvre la case correspondante
        this.parentElement.classList.add('expanded');
        // Ajoute la classe expanding au parent
        document.getElementById('casesBloc').classList.add('expanding');
    });
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('case-title')) return;
    document.querySelectorAll('.case.expanded').forEach(c => c.classList.remove('expanded'));
    // Retire la classe expanding du parent
    document.getElementById('casesBloc').classList.remove('expanding');
});