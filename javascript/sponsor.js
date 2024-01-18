$(() => {
    //background-image 
    $('body').css({ 'background-image': "url('../images/Razor_wire_bunch.png')", 'background-repeat': 'repeat', 'background-attachment': 'fixed', 'image-rendering': 'auto' });

    // declare class for organization
    class Sponsee {
        constructor(name, docNumber, degree, description) {
            this.name = name;
            this.docNumber = docNumber;
            this.degree = degree;
            this.description = description;
        }
        // method to append info to array
        addSponsee() {
            sponseeArray.push({
                name: this.name,
                docNumber: this.docNumber,
                degree: this.degree,
                description: this.description
            });
        }
    }

    //empty array for Sponsees
    let sponseeArray = [];

    //create an instance of object
    let newSponsee = new Sponsee('Miranda Smith', '732825', 'Associates degree in Applied Science', "Ever since I watched Batman, I have always been interested in the Applied Sciences. This is the department responsible for all of Batman's gadgets and gizmos. I have a very keen understanding of physics, and have invested my free time learning all that I can. Everything I know is self taught from General Relativity to Quantum Mechanics. I have a creative mind, so engineering would be right up my alley. As of now I am working on becoming a software engineer. After that, I would like to go back to college. My current GPA is a 4.0 and I have taken 8 classes: English Comp 1 and 2, Intro to Law, Intro to Philosophy, Asian Philosophy, Intro to Accounting, Financial Accounting, College Algebra.");
    //use method to push new info into array
    newSponsee.addSponsee();

    let newSponsee2 = new Sponsee('Ashley Good', '822727', 'Vehicle Engineering', 'I do not know enough about degrees to know exactly where I want to focus myself. I do know that the branch of engineering I am most interested in is the Vehicle Engineering. My childhood was spent mostly inside of a car shop with my father. Automotive engineering does pique my interest, but so does Aerospace, Marine, and Naval Architecture.');
    newSponsee2.addSponsee();

    function cardCreator(array) {
        // create elements with classes
        //id is DOC num for targeting from carousel
        array.forEach(function (sponseeArray) {
            $('#sponseeInformationJS').append(`<div class="jumbotron backgroundColor3 text-white mt-3" id="${sponseeArray.docNumber}"><h5>${sponseeArray.name} &num;${sponseeArray.docNumber}<span class="float-right">${sponseeArray.degree}</span></h5><a href="#" class="read_more_lessJS textColor1 underline" data-toggle="tool-tip" title="Inmate description">Read more</a><p class="sponseeDescriptionJS">${sponseeArray.description}</p></div>`);
        });
    }
    cardCreator(sponseeArray);

    const info = $('.sponseeDescriptionJS');
    // only hide the description text
    info.hide();

    $('.read_more_lessJS').click(function (e) {
        e.preventDefault();
        /* use keyword this so only the description that shows is the one being clicked */
        $(this).siblings('p').toggle('slow', () => {
            if (display === true) {
                info('p').show();
            } else if (display === false) {
                info('p').hide();
            }
        });
        // change text as description shows and hides
        $(this).text($(this).text() === 'Read more' ? 'Read less' : 'Read more');
    });
});