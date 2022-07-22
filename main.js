const els = {
    welcomeScreen: null,
    questionScreen: null,
    endScreen: null,
    welcomeButton: null,
    answers: null,
    endButton: null,
    answersContainer: null,
    // compteur: null
}
let questionIndex = 0;
let bonnesReponses = 0;

const commentairesNeg = ["Vous pouvez mieux faire", "Ce n'est pas terrible", "Encore un échec", "On vous traite souvent de quiche ?", "La réussite n'est pas votre fort", "L'école, le lieu vous dit quelque chose ?", "Pourtant, ce n'était pas très difficile", "Votre problème est peut-être médical, non ?", "Ce n'est pas grave, on peut vivre sans aucune once de culture", "C'est vous, la personne qui a poussé tous ses enseignants au suicide ?"];
const commentairesPos= ["Bien", "Vous n'êtes pas si sot que vous en laissez paraître", "Bravo", "Félicitations, vous êtes bon", "Quelle culture !", "Votre savoir est surprenant", "Vous êtes un chef !", "Comment avez-vous trouvé le moyen de tricher à ce jeu ?", "Un vrai champion", "Vous devriez gagner plus d'argent"];

const questions = [
    {
        question: 'Ce mot désigne un moine vivant en solitaire.',
        answers: 
        [
            {
                rep: 'Anachorète',
                teneur: "Bonne réponse"
            }, 
            {
                rep: 'Cénobite',
                teneur: "Mauvaise réponse"
            }, 
            {
                rep: 'Anaglypte',
                teneur: "Mauvaise réponse"
            }, 
            {
                rep: 'Solipsiste',
                teneur: "Mauvaise réponse"
            }
        ]
    },
    {
        question: "Conclusion d'une œuvre exposant des faits postérieurs à l'action qui en complète le sens.",
        answers: 
        [
            {
                rep: "Epilogue",
                teneur: "Bonne réponse"
            },
            {
                rep: "Epigramme", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Epigraphe",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Libelle",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Parmi ces propositions, quel est le bon pluriel ?",
        answers: 
        [
            {
                rep: "Chausse-trapes",
                teneur: "Bonne réponse"
            },
            {
                rep: "Chausse-trappes", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Chausses-trapes",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Chausses-trappes",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Perte de la tonicité musculaire due à une émotion vive.",
        answers: 
        [
            {
                rep: "Cataplexie",
                teneur: "Bonne réponse"
            },
            {
                rep: "Transe", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Hypertonie",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Catatonie",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Dans le système féodal, il s'agissait d'une terre libre franche de toute redevance et ne relevant d'aucun seigneur.",
        answers: 
        [
            {
                rep: "Alleu",
                teneur: "Bonne réponse"
            },
            {
                rep: "Tenure",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Fief",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Châtellenie",
                teneur: "Mauvaise réponse"
            },
            
            
        ]
    },
    {
        question: "Personne qui jouit de la chose, le bien-fonds d’autrui grâce à un bail de longue durée.",
        answers: 
        [
            {
                rep: "Emphytéote",
                teneur: "Bonne réponse"
            },
            {
                rep: "Affermataire",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Allochtone",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Réservataire",
                teneur: "Mauvaise réponse"
            },
            
            
        ]
    },
    {
        question: "Procédé rhétorique consistant à utiliser un terme concret dans un sens abstrait sans comparaison explicite.",
        answers: 
        [
            {
                rep: "Métaphore",
                teneur: "Bonne réponse"
            },
            {
                rep: "Métonymie",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Synecdoque",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Imago",
                teneur: "Mauvaise réponse"
            },
            
            
        ]
    },
    {
        question: "Désigne un texte poétique et satirique.",
        answers: 
        [
            {
                rep: "Epigramme",
                teneur: "Bonne réponse"
            },
            {
                rep: "Apologie",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Panégyrique",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Elégie",
                teneur: "Mauvaise réponse"
            },
            
            
        ]
    }
]    


const recordedQuestions= [];

const init = () =>{
    console.log('Page has loaded')
    
    els.welcomeScreen = document.querySelector('.welcome-screen');
    els.questionScreen = document.querySelector('.question-screen');
    els.endScreen = document.querySelector('.end-screen');
    els.welcomeBtn = els.welcomeScreen.querySelector('button');
    els.endBtn = els.endScreen.querySelector('button');
    els.answersContainer = els.questionScreen.querySelector('ul');
    
    els.welcomeBtn.addEventListener('click', () => {
        
        displayScreen('question');
        displayQuestion(questionIndex);
    });
    els.answersContainer.addEventListener('click', ({target})=>{
        if (target.tagName !== 'LI') {
            return;
        }
        const teneur =  target.getAttribute('data-teneur');
        recordedQuestions.push(teneur);
//        console.log(teneur);
        questionIndex++;

        document.getElementById("compteur").innerHTML = questionIndex;
        let bonPasBon ="";
if(teneur === "Bonne réponse") {
    bonnesReponses++;
    
    bonPasBon = commentairesPos[0];
    commentairesPos.shift();
    document.getElementById("bonnesReponses").innerHTML= bonnesReponses;
} else {
    bonPasBon = commentairesNeg[0];
    
    commentairesNeg.shift();
}
document.getElementById("bonPasBon").innerHTML = bonPasBon;


displayQuestion(questionIndex);
   
} )


const displayQuestion = (index)=> {
    let currentQuestion = questions[index];
    currentQuestion.answers.sort(function (a, b){
        if (a.rep < b.rep) {
            return -1;
        } else {
            return 1;
        };
    });
    
    const questionEl = els.questionScreen.querySelector('h3');
    // els.answersContainer = els.questionScreen.querySelector('ul');
    
    let answerEls = currentQuestion.answers.map((answer)=>{
        const liEl = document.createElement('li');
        liEl.textContent = answer.rep;
        
        liEl.setAttribute('data-teneur', answer.teneur);
        
        //console.log(liEl);
        return liEl;
        
    })
    questionEl.textContent= currentQuestion.question;
    els.answersContainer.textContent = "";
    els.answersContainer.append(...answerEls);
};

const displayScreen = (screenName)=> {
    els.welcomeScreen.style.display= "none";
    els.questionScreen.style.display= "none";
    els.endScreen.style.display= "none";
    
    const screen = els[screenName + 'Screen'];
    screen.style.display = 'flex';
    
    //—————————————————ATTENTION———————————————————    
    console.log ("QI=  " + questionIndex + "QL = " + questions.length);    
    if(questionIndex === questions.length-1){
        screenName = 'end';
    };
    //—————————————————ATTENTION———————————————————    
};
}
window.addEventListener('load', init);