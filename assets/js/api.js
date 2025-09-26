
async function getProfileData() {
    const url = "https://raw.githubusercontent.com/AlexeyFrens/portfolio-senac/refs/heads/main/assets/data/profile.json";
    const response = await fetch(url);
    return await response.json();
}