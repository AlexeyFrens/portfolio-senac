function getHardSkills(profileData) {
    const hard = document.getElementById("hardskills");
    hard.innerHTML = profileData.skills.hardskills.map((skill) => {
        return `<li class="p-2"><img src="${skill.logo}" alt="${skill.alt}"></li>`
    }).join("")
}

function getSoftSkills(profileData) {
    const soft = document.getElementById("softskills");
    soft.innerHTML = profileData.skills.softskills.map((skill) => {
        return `<li class="col-12 col-md-auto">
                    <div class="p-2 text-center rounded-pill">${skill}</div>
                </li>`
    }).join("")
}

function getLanguages(profileData) {
    const language = document.getElementById("languages");
    language.innerHTML = profileData.languages.map((language) => {
        return `<li class="d-flex align-items-center">${language}</li>`
    }).join("")
}

function getEducations(profileData) {
    const education = document.getElementById("educations");
    education.innerHTML = profileData.educations.map((education) => {
        return `<div class="${education.link !== "" ? "linked" : ""} py-3 px-2 rounded-3 mb-2 position-relative">
                    <h3 class="fs-6 mb-2 ${education.link !== "" ? "text-decoration-underline" : ""}">${education.name}</h3>
                    <p>${education.period}</p>
                    ${education.link !== "" ? `<a class="position-absolute top-0 start-0 w-100 h-100 z-3" href="${education.link}" target="_blank"></a>` : ""}
                </div>`
    }).join("")
}

function getPortfolio(profileData) {
    const portfolio = document.getElementById("portfolio");
    portfolio.innerHTML = profileData.portfolio.map((projeto) => {
        return `<div>
                    <h3 class="${projeto.isGithub === true ? "port-github" : ""} d-flex align-items-center fs-6 mb-1">${projeto.name}</h3>
                    <a class="text-break text-light" href="${projeto.link}" target="_blank">${projeto.link}</a>
                </div>`
    }).join("")
}

function getPersonalInterests(profileData) {
    const interests = document.getElementById("interests");
    interests.innerHTML = profileData.personalInterests.map((interest) => {
        return `<li class="p-2"><img src="${interest.logo}" alt="${interest.alt}"></li>`
    }).join("")
}

function getPersonalInformation(profileData) {
    const information = document.getElementById("basic-information");
    information.innerHTML = `<li class="calendar d-flex align-items-center mb-2">${profileData.personalInformation.birthday}</li>
                <li  class="location d-flex align-items-center mb-2">${profileData.personalInformation.location}</li>
                <li class="phone d-flex align-items-center mb-2"><a class="text-light" href="tel:${profileData.personalInformation.phone}">${profileData.personalInformation.phone}</a></li>
                <li class="email d-flex align-items-center mb-2"><a class="text-light" href="mailto:${profileData.personalInformation.email}">${profileData.personalInformation.email}</a></li>
                <li class="github d-flex align-items-center mb-2"><a class="text-light" href="${profileData.personalInformation.githubLink}" target="_blank">Github</a></li>
                <li class="linkedin d-flex align-items-center"><a class="text-light" href="${profileData.personalInformation.linkedinLink}" target="_blank">Linkedin</a></li>`
}

(async () => {
    const profileData = await getProfileData()
    getHardSkills(profileData);
    getSoftSkills(profileData);
    getLanguages(profileData);
    getEducations(profileData);
    getPortfolio(profileData);
    getPersonalInterests(profileData);
    getPersonalInformation(profileData);
})()