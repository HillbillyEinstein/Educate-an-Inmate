//background-image 
const body = document.querySelector('body');
body.style = "background-image:url('./images/Drut_kolczasty.jpg'); background-repeat: repeat; background-attachment: fixed";

//array of statistics
let statistics = [
    {
        question: 'What is the incarceration rate for females?',
        answer: "National Average: 57/100,000 Oklahoma's Average: 167/100,000"
    },
    {
        question: 'How many of these woman are prepared to be a productive member of society after their sentence is over?',
        answer: 'Approximately 9% of women released per year, for the entire state of Oklahoma. Only 1% /year for violent offenders.'
    },
    {
        question: 'How many individuals do NOT hold a highschool diploma or equivalance?',
        answer: '41% of inmates do not... compared with 18% within the general population.'
    },
    {
        question: 'How many of these woman leave prison with a college degree or a job certification?',
        answer: 'Less than 1% per year for women at medium security.'
    },
    {
        question: 'What is the ONLY proven resource that lowers the recidivism rate?',
        answer: 'EDUCATION lowers it to almost 0% The avg. national recidivism rate for released prisoners is 43%'
    },
    {
        question: 'What exactly are the Oklahoma prisons doing to keep these females from returning to prison?',
        answer: 'Nothing. The system is designed to work against the offender.'
    },
    {
        question: 'What type of education is offered at Mabel Bassett Correctional Center?',
        answer: 'Hi-SET which is equivalent to a High-School diploma, and limited college courses.'
    },
    {
        question: 'So, what is the problem?',
        answer: 'College costs money. There are no scholorships for inmates at Mabel Bassett.'
    },
    {
        question: 'What have college programs done for other prisons?',
        answer: 'The prisons have less violence, which creates a safer environment.'
    },
    {
        question: 'Mabel Bassett Correctional Center has the highest Prison Rape Rate in the country...',
        answer: 'The vast majority of the victims were uneducated.'
    },
    {
        question: 'Oklahoma gathered data on state prison costs in 2015 when our prisons were not as full.',
        answer: 'Population: 27,389 Expenditures: $451,501,686  Avg.cost/inmate: $16,497'
    },
    {
        question: 'There is a logical argument for prison education:',
        answer: 'It is a cost-effective way to reduce crime and leads to long-term benefits across the entire U.S. population.'
    }
];

//grab #parentJS it is my container for the html
const parentJS = document.getElementById('parentJS');

//grab the div where the array will go before. I did this because of the .insertBefore
const statisticsJS = document.getElementById('statisticsJS');

function statisticCreator(array) {
    let indexPage = document.createElement('div');
    indexPage.className = 'row';

    for (i = 0; i < statistics.length; i++) {
        // CREATE THE ELEMENTS
        let questionDiv = document.createElement('div');
        let flipDiv = document.createElement('div');
        // flipDiv is container and for hover
        let innerDiv = document.createElement('div');
        // innerDiv is to position the front and back
        let frontDiv = document.createElement('div');
        let backDiv = document.createElement('div');
        //div.front div.back is for position and different css
        let frontQuestion = document.createElement('h3');
        let backAnswer = document.createElement('h3');

        // ADD THE CLASSES
        //each element needs boostrap classes
        questionDiv.className = 'col-md-6 col-xl-3';
        // cannot use classList.add for questionDiv
        flipDiv.classList.add('flip');
        innerDiv.classList.add('inner', 'box-shadow1');
        frontDiv.classList.add('front');
        backDiv.classList.add('back', 'text-shadow');
        frontQuestion.classList.add('questionAnswer');
        backAnswer.classList.add('questionAnswer');

        // PUT TEXT ON CARDS
        frontQuestion.textContent = `${statistics[i].question}`;
        backAnswer.textContent = `${statistics[i].answer}`;

        // PLACE DIVS 
        questionDiv.appendChild(flipDiv);
        flipDiv.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        frontDiv.appendChild(frontQuestion);
        innerDiv.appendChild(backDiv);
        backDiv.appendChild(backAnswer);

        indexPage.append(questionDiv);
    }
    parentJS.insertBefore(indexPage, statisticsJS);
}
statisticCreator(statistics);