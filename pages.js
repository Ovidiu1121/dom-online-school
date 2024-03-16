

function attachCourseDetailPage(obj) {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo"><a href="index.html">Courses</a></h1>
            <nav>
                <ul class="header--signedin">
                    <li>Welcome, Joe Smith!</li>
                    <li><a href="sign-out.html">Sign Out</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="actions--bar">
            <div class="wrap">
                <a class="button update-button" >Update Course</a>
                <a class="button delete-button">Delete Course</a>
                <a class="button button-secondary" href="index.html">Return to List</a>
            </div>
        </div>
        
        <div class="wrap">
            <h2>Course Detail</h2>
            <form>
                <div class="main--flex">
                    <div class="left">
                        <h3 class="course--detail--title">Course</h3>
                        <h4 class="course--name">Build a Basic Bookcase</h4>
                        <p>By Joe Smith</p>
                    </div>
                    <div>
                        <h3 class="course--detail--title">Estimated Time</h3>
                        <p class="estimated-time">14 hours</p>

                        <h3 class="course--detail--title">Materials Needed</h3>
                        <ul class="course--detail--list">
                           
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </main>
</div>
`

    let leftSide = document.querySelector('.left');
    let title = document.querySelector('.course--name');
    let time = document.querySelector('.estimated-time');
    let materials = document.querySelector('.course--detail--list');
    let description = document.createElement('p');
    let li = document.createElement('li');

    title.textContent = obj.title;
    description.textContent = obj.description;
    time.textContent = obj.time;
    li.textContent = obj.materials;

    materials.append(li);
    leftSide.append(description);

    deleteCourse(obj);
    updatePage(obj);
}

function attachCreateCoursePage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo"><a>Courses</a></h1>
            <nav>
                <ul class="header--signedin">
                    <li>Welcome, Joe Smith!</li>
                    <li><a>Sign Out</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="wrap">
            <h2>Create Course</h2>
            <div class="validation--errors">
                <h3>Validation Errors</h3>
                <ul>
                    <li>Please provide a value for "Title"</li>
                    <li>Please provide a value for "Description"</li>
                </ul>
            </div>
            <form>
                <div class="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value="">

                        <p>By Joe Smith</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription"></textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value="">

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                    </div>
                </div>
                <button class="button" type="button">Create Course</button>
                <button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
        </div>
    </main>
</div>
`

    let createCourseButton = document.querySelector('.button');
    let courseTitle = document.getElementById('courseTitle');
    let courseDescription = document.getElementById('courseDescription');
    let estimatedTime = document.getElementById('estimatedTime');
    let materialsNeeded = document.getElementById('materialsNeeded');


    createCourseButton.addEventListener("click", () => {

        if (courseTitle.value !== '' && courseDescription.value !== '' && estimatedTime.value !== '' && materialsNeeded.value !== '') {

            let obj = {
                title: courseTitle.value,
                description: courseDescription.value,
                time: estimatedTime.value,
                materials: materialsNeeded.value
            };

            addCourse(obj);

            attachMainPage();
        }

    });



}

function attachErrorPage() {

    let container = document.querySelector(".container");

    container.innerHTML = ` 
    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo"><a href="index.html">Courses</a></h1>
            <nav>
                <ul class="header--signedin">
                    <li>Welcome, Joe Smith!</li>
                    <li><a href="sign-out.html">Sign Out</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="wrap">
            <h2>Error</h2>
            <p>Sorry! We just encountered an unexpected error.</p>
        </div>
    </main>
</div>
    `

}

function attachForbiddenPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><a href="sign-out.html">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="wrap">
                <h2>Forbidden</h2>
                <p>Oh oh! You can't access this page.</p>
            </div>
        </main>
    </div>
    `

}

function attachMainPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a>Courses</a></h1>
                <nav>
                    <ul class="header--signedout">
                        <li><a class="signIn">Sign Up</a></li>
                        <li><a class="signUp">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="wrap main--grid">
                <a class="course--module course--link" >
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Build a Basic Bookcase</h3>
                </a>
                <a class="course--module course--link">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Learn How to Program</h3>
                </a>
                <a class="course--module course--link">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Learn How to Test Programs</h3>
                </a>
                <a class="course--module course--add--module">
                    <span class="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </a>
            </div>
        </main>
    </div>
    `

    attachCardsMainPage();

    let addCourseButton = document.querySelector(".course--add--module");

    addCourseButton.addEventListener("click", () => {
        attachCreateCoursePage();
    });

    cardDetails();

    headerButtons();

}

function attachNotFoundPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><a href="sign-out.html">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="wrap">
                <h2>Not Found</h2>
                <p>Sorry! We couldn't find the page you're looking for.</p>
            </div>
        </main>
    </div>
    `

}

function attachSignInPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedout">
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><a href="sign-in.html">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="form--centered">
                <h2>Sign In</h2>
                
                <form>
                    <label for="emailAddress">Email Address</label>
                    <input class="email" id="emailAddress" name="emailAddress" type="email" value="">
                    <label for="password">Password</label>
                    <input class="password" id="password" name="password" type="password" value="">
                    <button class="button submit-button" type="button">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
                
            </div>
        </main>
    </div>
    `

    signIn();

}

function attachSignUpPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedout">
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><a href="sign-in.html">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="form--centered">
                <h2>Sign Up</h2>
                
                <form>
                    <label for="firstName">First Name</label>
                    <input class="firstName" id="firstName" name="firstName" type="text" value="">
                    <label for="lastName">Last Name</label>
                    <input class="lastName" id="lastName" name="lastName" type="text" value="">
                    <label for="emailAddress">Email Address</label>
                    <input class="email" id="emailAddress" name="emailAddress" type="email" value="">
                    <label for="password">Password</label>
                    <input class="password" id="password" name="password" type="password" value="">
                    <button class="button submit-button" type="submit">Sign Up</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
            </div>
        </main>
    </div>
    `

    signUp();


}

function attachUpdateCoursePage(obj) {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><a href="sign-out.html">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="wrap">
                <h2>Update Course</h2>
                <form>
                    <div class="main--flex">
                        <div>
                            <label for="courseTitle">Course Title</label>
                            <input class="title" id="courseTitle" name="courseTitle" type="text">

                            <p>By Joe Smith</p>

                            <label for="courseDescription">Course Description</label>
                            <textarea class="description" id="courseDescription" name="courseDescription"></textarea>
                        </div>
                        <div>
                            <label for="estimatedTime">Estimated Time</label>
                            <input class="time" id="estimatedTime" name="estimatedTime" type="text" >

                            <label for="materialsNeeded">Materials Needed</label>
                            <textarea class="materials" id="materialsNeeded" name="materialsNeeded"></textarea>
                        </div>
                    </div>
                    <button class="button update-button" type="button">Update Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
            </div>
        </main>
    </div>
    `
    populateInputs(obj);

    updateCourse(obj);

}