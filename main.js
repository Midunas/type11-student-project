const INITIAL_STUDENT_DATA = [
    {
        name: 'Vardas 1',
        surname: 'Pavarde 1',
        age: 25,
        phone: '+3706547558',
        email: 'vardas1@gmail.com',
        itKnowledge: 4,
        group: 'type 11',
        interests: ['JavaScript', 'PHP'],
    },
    {
        name: 'Vardas 2',
        surname: 'Pavarde 2',
        age: 37,
        phone: '+3706547558',
        email: 'vardas2@gmail.com',
        itKnowledge: 8,
        group: 'type 11',
        interests: ['JavaScript', 'C++'],
    },
    {
        name: 'Vardas 3',
        surname: 'Pavarde 3',
        age: 18,
        phone: '+3706547558',
        email: 'vardas3@gmail.com',
        itKnowledge: 7,
        group: 'type 11',
        interests: ['C++', 'WordPress'],
    },
    {
        name: 'Vardas 4',
        surname: 'Pavarde 4',
        age: 20,
        phone: '+3706547558',
        email: 'vardas3@gmail.com',
        itKnowledge: 3,
        group: 'type 11',
        interests: ['C++', 'TypeScript', 'Java'],
    },
    {
        name: 'Vardas 5',
        surname: 'Pavarde 5',
        age: 54,
        phone: '+3706547558',
        email: 'vardas4@gmail.com',
        itKnowledge: 1,
        group: 'type 11',
        interests: ['Typescript', 'JavaScript'],
    }
    
]

function renderInitialData(students) {
    students.map(student => {
        console.log(student.name);
        console.log(student.surname);
        console.log(student.age);
        console.log(student.phone);
        console.log(student.email);
        console.log(student.itKnowledge);
        console.log(student.interests);
        
       

    })
}

renderInitialData(INITIAL_STUDENT_DATA);

const studentForm = document.querySelector('form');
const itKnowledgeInputElement = document.querySelector('#student-it-knowledge');
const itKnowledgeOutputElement = document.querySelector('#student-it-knowledge');

itKnowledgeInputElement.addEventListener('input', (event) => {
    itKnowledgeInputElement.textContent = event.target.value;
});

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let studentName = document.getElementById('student-name').value;
    let studentSurname = document.getElementById('student-surname').value;
    let studentAge = studentForm.querySelector('#student-age').value;
    let studentPhone = studentForm.querySelector('[name="phone"]').value;
    let studentEmail = event.target.elements.email.value;
    let studentItKnowledge = event.target.elements['it-knowledge'].value;
    //let studentGroup = document.querySelectorAll('input[name="group"]:checked');
    let studentGroup = event.target.elements.group.value;
    let interests = document.querySelectorAll('input[name="codeLang"]:checked');
    let privateButton = document.createElement('button');
    privateButton.textContent = `Show personal data`;
    let deleteStudentButton = document.createElement('button');
    deleteStudentButton.textContent = 'Remove student';

    // privateButton.classList.add('hidden');

//     let requiredInputs = document.querySelector('input.required');
//     console.log(requiredInputs);

// let studentNameInput = document.querySelector('#student-name');
// studentNameInput.style.borderColor ='';


// let inputErrorMessage = document.querySelector('.input-error-message');

// if(inputErrorMessage) {
//     inputErrorMessage.remove();
// }

//     if (!studentName) {
//         let alertText = 'Ne visi laukeliai užpildyti';

//         alertMessage(alertText,'error-alert');

//         studentNameInput.style.borderColor = 'red';

//         let inputError = document.createElement('span');
//         inputError.textContent= 'Šis laukelis yra privalomas';
//         inputError.classList.add('input-error-message');

//         studentNameInput.after(inputError);

//         return;

//     }
document.querySelectorAll('.input-error-message').forEach (input => input.remove());

let requiredInputs = document.querySelectorAll('input.required');


let validForm = true;

requiredInputs.forEach(input => {
    input.classList.remove('input-error');

    if(!input.value) {
        validForm = false;
        let alertText = 'Ne visi laukeliai užpildyti';
        alertMessage(alertText, 'error-alert');
        
        input.classList.add('input-error')

        let inputError = document.createElement('span');
        inputError.textContent= 'Šis laukelis yra privalomas';
        inputError.classList.add('input-error-message');

        input.after(inputError);
    }
})

if(!validForm) {
    return;
}

    privateButton.addEventListener('click', () => {

        //Mano budas patobulintas

        if (!privateButton.classList.contains('hide')) {

            phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
            emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
            privateButton.textContent = `Hide personal data`;

        } else { 
             privateButton.textContent = `Show personal data`;
             emailElement.innerHTML = `<strong>Email:</strong> ********`;
             phoneElement.innerHTML = `<strong>Phone:</strong> ********`;
        }
        privateButton.classList.toggle('hide');
        //Būdas sukurian variables. HIDDEN DATA BUTTON 
    });

    deleteStudentButton.addEventListener('click', () => {
        studentItem.remove();
        let messageText = `Student deleted (${studentName} ${studentSurname})`;
        alertMessage(messageText);
        
    })

    let studentsList = document.querySelector('#students-list');
    let studentItem =document.createElement('div');
    studentItem.classList.add('student-item');

    
    let nameElement = document.createElement('p');
    nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
    
    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;

    let ageElement = document.createElement('p');
    ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;

    let phoneElement = document.createElement('p');
    phoneElement.innerHTML = `<strong>Phone:</strong> ********`;

    let emailElement = document.createElement('p');
    emailElement.innerHTML = `<strong>Email:</strong> ********`;

    let itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.innerHTML = `<strong>It Knowledge:</strong> ${studentItKnowledge}`;

    let groupElement = document.createElement('p');
    groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;


    let interestWrapperElement = document.createElement('div');
    interestWrapperElement.classList.add('interest-wrapper');

    let interestTitleElement = document.createElement('h4');
    interestTitleElement.classList.add('interest-title');
    interestTitleElement.textContent = 'Interests:';

    let interestsListElement = document.createElement ('ul')
    interestsListElement.classList.add('interest-list');

    interests.forEach(interest => {
        let interestItemElement = document.createElement('li');
        interestItemElement.textContent = interest.value;
        console.log(interest.value);

        interestsListElement.append(interestItemElement);
    });

    interestWrapperElement.append(interestTitleElement, interestsListElement);

    studentItem.append(nameElement, surnameElement, ageElement,phoneElement,emailElement, itKnowledgeElement, groupElement,  interestWrapperElement,privateButton, deleteStudentButton);
    studentsList.prepend(studentItem);
    // studentForm.reset();

    event.target.reset();

    let alertText = `Student created (${studentName} ${studentSurname})`
    alertMessage(alertText);
});

    function alertMessage(text, elementClass) {
    const alertElement = document.querySelector('#alert');
    alertElement.textContent = text;

    if(elementClass) {
        alertElement.classList.add(elementClass);
    }

    setTimeout(() => {
        alertElement.textContent = '';
        if (elementClass) {
            alertElement.classList.remove(elementClass);
        }
    }, 5000);
}

