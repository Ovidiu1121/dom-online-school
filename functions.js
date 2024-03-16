
function createCardMainPage(obj) {

    let a = document.createElement('a');
    a.classList = "course--module course--link";

    let h2 = document.createElement('h2');
    h2.classList = "course--label";
    h2.textContent = "Course";

    let h3 = document.createElement('h3');
    h3.classList = "course--title";
    h3.textContent = obj.title;

    a.append(h2);
    a.append(h3);

    return a;

}

function attachCardsMainPage() {

    let lista = document.querySelector('.wrap.main--grid');

    lista.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let card = createCardMainPage(data[i]);
        lista.appendChild(card);
    }

    lista.innerHTML += `
    <a class="course--module course--add--module">
    <span class="course--add--title">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
        New Course
    </span>
</a>
    `

}

function addCourse(obj) {

    data.push(obj);

}

function findByTitle(title) {

    let aux = data.findIndex(a => a.title === title);
    return data[aux];

}

function cardDetails() {

    let lista = document.querySelector('.wrap.main--grid');

    lista.addEventListener("click", (pressed) => {

        let card = '';

        if (pressed.target.matches('a')) {
            card = pressed.target;
            let title = card.querySelector('.course--title').textContent;

            let obj = findByTitle(title);

            attachCourseDetailPage(obj);
        } else if (pressed.target.matches('h3')) {
            let title = pressed.target.textContent;

            let obj = findByTitle(title);

            attachCourseDetailPage(obj);
        }
    });

}

function removeObject(obj) {

    const index = data.findIndex(item => item.title === obj.title);

    if (index !== -1) {
        data.splice(index, 1);
    }
}

function deleteCourse(obj) {

    let button = document.querySelector('.delete-button');

    button.addEventListener("click", () => {
        removeObject(obj);
        attachMainPage();
    });

}

function populateInputs(obj) {

    let title = document.querySelector('.title');
    let description = document.querySelector('.description');
    let time = document.querySelector('.time');
    let materials = document.querySelector('.materials');

    title.value = obj.title;
    description.value = obj.description;
    time.value = obj.time;
    materials.value = obj.materials;

}

function updatePage(obj) {

    let button = document.querySelector('.update-button');

    button.addEventListener("click", () => {
        attachUpdateCoursePage(obj);
    });

}

function updateCourse(obj) {

    let title = document.querySelector('.title');
    let description = document.querySelector('.description');
    let time = document.querySelector('.time');
    let materials = document.querySelector('.materials');

    let updateButton = document.querySelector('.update-button');

    updateButton.addEventListener("click", () => {

        let newObj = {
            title: title.value,
            description: description.value,
            time: time.value,
            materials: materials.value
        };

        let index = data.findIndex(item => item === obj);

        if (index !== -1) {
            data.splice(index, 1, newObj);
        }


        attachMainPage();

    });

}

function findByEmail(email) {

    let aux = users.findIndex(a => a.email === email);
    return users[aux];

}

function signIn() {

    let submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener("click", () => {

        let password = document.querySelector('.password');
        let email = document.querySelector('.email');
        let user = findByEmail(email.value);

        if (email.value !== '' && password.value !== '') {
            if (user != null) {
                attachMainPage();
            }
        }
    });

}

function signUp() {

    let firstName = document.querySelector('.firstName');
    let lastName = document.querySelector('.lastName');
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');
    let buttonSignUp = document.querySelector('.submit-button');

    buttonSignUp.addEventListener("click", () => {

        let user = {
            name: {
                first: firstName.value,
                last: lastName.value
            },
            email: email.value,
            password: password.value
        };

        users.push(user);

        attachSignInPage();

    });

}

function headerButtons() {

    let signInButton = document.querySelector('.signIn');
    let signUpButton = document.querySelector('.signUp');

    signInButton.addEventListener("click", () => {
        attachSignInPage();
    });

    signUpButton.addEventListener("click", () => {
        attachSignUpPage();
    });

}