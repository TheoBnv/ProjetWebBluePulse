const quiz = [
        {
            question: "Quel est l'objectif principal de l'ODD 14 des Nations Unies ?",
            options: ["Protéger et restaurer les écosystèmes terrestres", "Conserver et exploiter de manière durable les océans", "Réduire les inégalités", "Promouvoir une éducation de qualité"],
            answer: 1,
            explanation: "L'ODD 14 vise à conserver et exploiter de manière durable les océans, les mers et les ressources marines pour le développement durable, en mettant l'accent sur la réduction de la pollution marine et la protection des écosystèmes marins."
        },
        {
            question: "Quel est le rôle des océans dans la régulation du climat mondial ?",
            options: ["Ils absorbent environ 25 % des émissions de CO2", "Ils augmentent la température globale", "Ils réduisent la biodiversité terrestre", "Ils n'ont aucun rôle dans la régulation du climat"],
            answer: 0,
            explanation: "Les océans jouent un rôle crucial dans la régulation du climat mondiale en absorbant environ 25 % des émissions de CO2 et en redistribuant la chaleur grâce aux courants marins."
        },
        {
            question: "Quelle proportion de l'oxygène mondial est produite par les océans ?",
            options: ["20 %", "50 %", "70 %", "90 %"],
            answer: 1,
            explanation: "Les océans produisent environ 50 % de l'oxygène mondial grâce au phytoplancton, qui effectue la photosynthèse et libère de l'oxygène dans l'atmosphère."
        },
        {
            question: "Quel pourcentage des océans est actuellement protégé par des aires marines protégées (AMP) ?",
            options: ["7 %", "15 %", "25 %", "50 %"],
            answer: 0,
            explanation: "Environ 7 % des océans sont protégés par des aires marines protégées, bien que l'objectif mondial soit d'atteindre 30 % d'ici 2030."
        },
        {
            question: "Quelle est la principale cause de la pollution plastique dans les océans ?",
            options: ["Les marées noires", "Les déchets plastiques mal gérés sur terre", "Les activités de pêche", "Les rejets industriels"],
            answer: 1,
            explanation: "La principale cause de la pollution plastique dans les océans est liée aux déchets plastiques mal gérés sur terre, qui sont transportés, par les rivières et les vents jusqu'aux océans."
        },
        {
            question: "Quel phénomène est causé par un excès de nutriments dans les océans ?",
            options: ["L'acidification", "L'eutrophisation", "Le blanchissement des coraux", "La montée du niveau de la mer"],
            answer: 1,
            explanation: "L'eutrophisation est causée par l'excès de nutriments, comme les nitrates et les phosphates, provenant des activités humaine. Cela entraîne une prolifération d'algues nuisibles, qui consomment l'oxygène et appauvrit donc les océans, et perturbent les écosystèmes marins."
        },
        {
            question: "Quel est l'impact du réchauffement climatique sur les récifs coralliens ?",
            options: ["Ils se développent plus rapidement", "Ils subissent un blanchissement et meurent", "Ils deviennent plus résistants aux tempêtes", "Ils ne sont pas affectés par le réchauffement climatique"],
            answer: 1,
            explanation: "Le réchauffement climatique provoque une augmentation de la température des océans, ce qui entraîne le blanchissement et la mort des coraux, car ils perdent les algues symbiotiques nécessaires à leur survie."
        },
        {
            question: "Quel pourcentage des stocks mondiaux de poissons est surexploité selon la FAO ?",
            options: ["10 %", "33 %", "50 %", "75 %"],
            answer: 1,
            explanation: "Selon la FAO, environ 33 % des stocks mondiaux de poissons sont surexploités, ce qui menace la durabilité des ressources marines et la sécurité alimentaire."
        },
        {
            question: "Quel est l'objectif de l'initiative mondiale '30x30' en lien avec l'ODD 14 ?",
            options: ["Réduire de 30 % les émissions de CO2 d'ici 2030", "Protéger 30 % des océans d'ici 2030", "Réduire de 30 % la pollution plastique d'ici 2030", "Augmenter de 30 % les populations de poissons d'ici 2030"],
            answer: 1,
            explanation: "L'initiative '30x30' vise à protéger 30 % des océans d'ici 2030 en établissant des aires marines protégées pour préserver la biodiversité marine et les écosystèmes."
        },
        {
            question: "Quel est l'impact des filets de pêche abandonnés sur la faune marine ?",
            options: ["Ils augmentent la population de poissons", "Ils piègent et tuent de nombreux animaux marins", "Ils fertilisent les fonds marins", "Ils n'ont aucun impact"],
            answer: 1,
            explanation: "Les filets fantômes piègent et tuent de nombreux animaux marins, comme les tortues, les dauphins et les poissons, contribuant à la dégradation des écosystèmes marins."
        },
        {
            question: "Quel est l'effet de l'acidification des océans sur les organismes marins ?",
            options: ["Elle favorise la croissance des récifs coralliens", "Elle rend les coquilles des organismes marins plus fragiles", "Elle augmente la biodiversité marine", "Elle n'a aucun impact"],
            answer: 1,
            explanation: "L'acidification des océans, causée par l'absorption de CO2, rend les coquilles et squelettes des organismes marins, comme les coraux et mollusques, plus fragiles, ce qui menace leur survie."
        },
        {
            question: "Quel rôle jouent les mangroves dans la protection des écosystèmes marins ?",
            options: ["Elles augmentent la salinité des océans", "Elles protègent les côtes contre l'érosion et les tempêtes", "Elles réduisent la biodiversité marine", "Elles augmentent la température des océans"],
            answer: 1,
            explanation: "Les mangroves protègent les côtes contre l'érosion et les tempêtes, tout en servant d'habitat pour de nombreuses espèces marines et en stockant du carbone."
        },
        {
            question: "Quelle est la principale source de microplastiques dans les océans ?",
            options: ["Les pneus usés", "Les produits cosmétiques", "Les vêtements synthétiques", "Toutes ces réponses"],
            answer: 3,
            explanation: "Les microplastiques proviennent de diverses sources, notamment les pneus usés, les produits cosmétiques et les vêtements synthétiques, qui libèrent des fibres plastiques dans l'environnement."
        },
        {
            question: "Quel est l'objectif de la Convention des Nations Unies sur le droit de la mer (CNUDM) ?",
            options: ["Réguler l'exploitation des ressources marines", "Interdire la pêche dans toutes les eaux internationales", "Augmenter la pollution marine", "Réduire la biodiversité marine"],
            answer: 0,
            explanation: "La Convention des Nations Unies sur le droit de la mer (CNUDM) vise à réguler l'exploitation des ressources marines, protéger l'environnement marin et garantir la coopération internationale pour une gestion durable des océans"
        },
        {
            question: "Quel est l'impact des zones mortes dans les océans ?",
            options: ["Elles augmentent la biodiversité", "Elles réduisent l'oxygène disponible pour la faune marine", "Elles favorisent la croissance des coraux", "Elles n'ont aucun impact sur les écosystèmes marins"],
            answer: 1,
            explanation: "Les zones mortes sont des régions où le niveau d'oxygène est si bas que la plupart des organismes marins ne peuvent pas survivre. Elles sont souvent causées par l'eutrophisation et la pollution."
        },
        {
            question: "Quelle est la principale menace pour les tortues marines ?",
            options: ["La pollution plastique", "La surpêche", "Les éruptions volcaniques", "Le tourisme côtier"],
            answer: 0,
            explanation: "La pollution plastique est une menace majeure pour les tortues marines, car elles peuvent ingérer des sacs plastiques qu'elles confondent avec des méduses."
        },
        {
            question: "Quel est le statut de conservation du dauphin de l'Irrawaddy selon l'UICN ?",
            options: ["En danger critique d'extinction", "En danger", "Vulnérable", "Quasi menacé"],
            answer: 1,
            explanation: "Le dauphin de l'Irrawaddy est classé comme 'En danger' par l'UICN en raison de la perte de son habitat, de la pollution et des captures accidentelles."
        },
        {
            question: "Quelle espèce de poisson est particulièrement menacée par la surpêche ?",
            options: ["Le thon rouge", "Le saumon atlantique", "Le poisson-clown", "Le requin-marteau"],
            answer: 0,
            explanation: "Le thon rouge est gravement menacé par la surpêche en raison de sa forte demande sur les marchés internationaux."
        }
    ];

var currentQuestionIndex = 0;
var isChecked = 1;

var correctAnswers = 0;
const totalQuestions = quiz.length;


function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const explanationElement = document.getElementById("explanation");
    
    explanationElement.innerHTML = "";
    optionsElement.innerHTML = "";

    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = function() {
            if (index === currentQuestion.answer) {
                button.classList.add("correct");
                explanationElement.innerText = currentQuestion.explanation;
                correctAnswers++;
            } else {
                button.classList.add("incorrect");
                explanationElement.innerText = "Perdu ! " + currentQuestion.explanation;
            }
            
            const allButtons = optionsElement.querySelectorAll("button");
            allButtons.forEach(bouton => bouton.disabled = true);

            isChecked = 1;
        };
        optionsElement.appendChild(button);
    });
}

function nextQuestion() {
    if (currentQuestionIndex < quiz.length && isChecked) {
        loadQuestion();
        document.querySelector("h3").style.display = "none";
    } else if (isChecked) {
        let pourcentageBonnes = (correctAnswers / totalQuestions) * 100;
        let pourcentageMauvaises = 100 - pourcentageBonnes;
        
        document.querySelector(".quiz-container").innerHTML = 
        `<h3>Quiz terminé !</h3>
        <p>Votre score :</p>
        <p>${correctAnswers} bonnes réponses sur ${totalQuestions} questions.</p>
        <p>✅ ${pourcentageBonnes.toFixed(2)}% de bonnes réponses</p>
        <p>❌ ${pourcentageMauvaises.toFixed(2)}% de mauvaises réponses</p>
        `;
    }
    isChecked = 0;
    currentQuestionIndex++;
}
