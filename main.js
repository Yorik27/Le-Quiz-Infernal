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

const commentairesNeg = ["Vous pouvez mieux faire", "Deuxième mauvaise réponse", "Ce n'est pas terrible", "Encore un échec", "C'est la cinquième\u00a0!", "On vous traite souvent de quiche\u00a0?", "La réussite n'est pas votre fort", "L'école, le lieu vous dit quelque chose ?", "Pourtant, ce n'était pas très difficile", "Dixième échec!", "Votre problème est peut-être médical, non ?", "Ce n'est pas grave, on peut vivre sans aucune once de culture", "Treize erreurs, ça porte bonheur.", "Vous êtes cette personne qui a poussé tous ses enseignants au suicide\u00a0?", "Etes-vous masochiste\u00a0?", "Vous avez abusé de la télé-réalité", "Eteignez la télé\u00a0!", "Toute votre famille est comme vous\u00a0?", "Peut-être avez-vous pris des substances\u00a0!", "20\u00a0!", "C'est pathologique", "Ça se confirme !", "Voulez-vous l'adresse d'une bonne bibliothèque\u00a0?", "Dites-moi que vous répondez au hasard", "Un vrai champion"];
const commentairesPos= ["Bien", "Deuxième bonne réponse", "Vous n'êtes pas si sot que vous en laissez paraître", "Bravo", "Cinquième bonne réponse\u00a0!", "Impressionnant", "Félicitations, vous êtes bon", "Quelle culture\u00a0!", "Votre savoir est surprenant", "Dix bonnes réponses", "Vous êtes meilleur que beaucoup", "Vous êtes un chef\u00a0!", "Treizième réussite, ça porte bonheur.", "Comment avez-vous trouvé le moyen de tricher à ce jeu\u00a0?", "Un puits de culture", "Vous devriez gagner plus d'argent", "Vos voisins vous haïssent, non\u00a0?", "Où avez-vous étudié\u00a0?", "Que n'êtes-vous pas Président\u00a0?", "20", "Votre bibliothèque doit-être monstrueuse.", "Ne me dites pas que c'est le hasard\u00a0!", "Toute votre famille est comme vous\u00a0?", "Peut-être avez-vous pris des substances\u00a0!", "Un vrai champion"];

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
        question: "Parmi ces propositions, quel est le bon pluriel\u00a0?",
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
        question: "Quel est l'intrus parmi ces mots ?",
        answers: 
        [
            {
                rep: "Chafouin",
                teneur: "Bonne réponse"
            },
            {
                rep: "Bougon", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Grogneux",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Ronchon",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Ce mot désigne une personne prise comme modèle",
        answers: 
        [
            {
                rep: "Parangon",
                teneur: "Bonne réponse"
            },
            {
                rep: "Fac-similé", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Vertugadin",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Diaitète",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Se dit d'un mot à la fois féminin et masculin",
        answers: 
        [
            {
                rep: "Epicène",
                teneur: "Bonne réponse"
            },
            {
                rep: "Epichérématique", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Autogame",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Transfixiant",
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
        question: "Quelle est la bonne orthographe\u00a0?",
        answers: 
        [
            {
                rep: "Dithyrambe",
                teneur: "Bonne réponse"
            },
            {
                rep: "Dythirambe", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Dityrambe",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Dytirambe",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "A propos de dithyrambe, dityrambe, dythirambe ou dytirambe (qu'aviez-vous répondu\u00a0?), il s'agissait de l'éloge poiur quel dieu\u00a0?",
        answers: 
        [
            {
                rep: "Dionysos",
                teneur: "Bonne réponse"
            },
            {
                rep: "Zeus", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Poséidon",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Hadès",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Lequel est féminin\u00a0?",
        answers: 
        [
            {
                rep: "Hymne",
                teneur: "Bonne réponse"
            },
            {
                rep: "Eloge", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Dithyrambe",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Acrostiche",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Tous signifient qu'un texte ou un énoncé reproduit est fidèle au texte original. Sauf un, lequel\u00a0?",
        answers: 
        [
            {
                rep: "Ad hoc",
                teneur: "Bonne réponse"
            },
            {
                rep: "Verbatim", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Sic",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Ad litteram",
                teneur: "Mauvaise réponse"
                
            }
        ]
    },
    {
        question: "Quel est l'intrus parmi ces mots\u00a0?",
        answers: 
        [
            {
                rep: "Théosophie",
                teneur: "Bonne réponse"
            },
            {
                rep: "Théophanie", 
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Aorasie",
                teneur: "Mauvaise réponse"
                
            },
            {
                rep: "Epiphanie",
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
        question: "Qui parmi ces dieux n'est pas fils de Zeus\u00a0?",
        answers: 
        [
            {
                rep: "Poséidon",
                teneur: "Bonne réponse"
            },
            {
                rep: "Dionysos",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Appolon",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Héphaïstos",
                teneur: "Mauvaise réponse"
            },
         ]
    },
    {
        question: "Tous sont synonymes, sauf un, lequel ?",
        answers: 
        [
            {
                rep: "Heaume",
                teneur: "Bonne réponse"
            },
            {
                rep: "Brigandine",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Jaseran",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Haubert",
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
        question: "Par quel moyen la triboluminescence est-elle induite\u00a0?",
        answers: 
        [
            {
                rep: "Le frottement",
                teneur: "Bonne réponse"
            },
            {
                rep: "Une haute température",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Une basse température",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Des ultrasons",
                teneur: "Mauvaise réponse"
            },
        ]
    },
    {
        question: "Quel dieu grec avait pour attribut un thyrse\u00a0?",
        answers: 
        [
            {
                rep: "Dionysos",
                teneur: "Bonne réponse"
            },
            {
                rep: "Poséidon",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Hermès",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Héphaïstos",
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
        question: "Quel domaine est concerné lorsqu'on parle de thymiatechnie\u00a0?",
        answers: 
        [
            {
                rep: "Parfumerie",
                teneur: "Bonne réponse"
            },
            {
                rep: "Médecine",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Géologie",
                teneur: "Mauvaise réponse"
            },
            {
                rep: "Gastronomie",
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
    
    //—————————————————ATTENTION———————————————————    
    els.endBtn.addEventListener('click', () => {
        displayScreen('welcome');
        
    });
    //———————————————ATTENTION———————————————————    


    els.answersContainer.addEventListener('click', ({target})=>{
        if (target.tagName !== 'LI') {
            return;
        }
        const teneur =  target.getAttribute('data-teneur');
        recordedQuestions.push(teneur);

        questionIndex++;
        if (questionIndex >= questions.length) {
            displayScreen('end');
        } else {
            displayQuestion(questionIndex);
        }

        document.getElementById("compteur").innerHTML = questionIndex;
        let bonPasBon ="";
        if(teneur === "Bonne réponse") {
            bonnesReponses++;
            bonPasBon = commentairesPos[0];
            commentairesPos.shift();
            document.getElementById("resultat").innerHTML= "Bonne réponse";
            
        } else {
            bonPasBon = commentairesNeg[0];
            document.getElementById("resultat").innerHTML= "Mauvaise réponse";
            
            commentairesNeg.shift();
        }
        document.getElementById("bonnesReponses").innerHTML= bonnesReponses; //endscreen
        document.getElementById("nbQuestions").innerHTML= questions.length; //endscreen
        document.getElementById("bonPasBon").innerHTML = bonPasBon;
        //console.log("br= " + bonnesReponses);
        
        
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
    //Raffraîchit et insère les nouvelles lignes
    questionEl.textContent= currentQuestion.question;
    els.answersContainer.textContent = "";
    els.answersContainer.append(...answerEls);
    };

    let displayScreen = (screenName)=> {
    els.welcomeScreen.style.display= "none";
    els.questionScreen.style.display= "none";
    els.endScreen.style.display= "none";
    
    const screen = els[screenName + 'Screen'];
    screen.style.display = 'flex';
    

    };
}
window.addEventListener('load', init);