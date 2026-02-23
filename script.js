// Função para trocar de aba sem recarregar
function showSection(sectionId) {
    document.querySelectorAll('.view-section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'profile-view') renderUserProfile();
}

// Salva os dados do perfil atual
function saveProfileData() {
    const profile = {
        name: document.getElementById('cfg-name').value,
        handle: document.getElementById('cfg-handle').value,
        bio: document.getElementById('cfg-bio').value
    };
    localStorage.setItem('activeProfile', JSON.stringify(profile));
    alert("Perfil de " + profile.name + " salvo!");
}

// Renderiza os dados na tela de perfil
function renderUserProfile() {
    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "Novo Usuário", handle: "@user", bio: "" };
    document.getElementById('view-display-name').innerText = profile.name;
    document.getElementById('view-display-handle').innerText = profile.handle;
    document.getElementById('view-display-bio').innerText = profile.bio;
}

// Sistema de Postagem Simples
function generateTweet() {
    const text = document.getElementById('tweetContent').value;
    if (!text) return;

    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "User", handle: "@user" };
    const feed = document.getElementById('main-feed');

    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'tweet-card'; // Adicione estilo para isso no CSS!
    tweetDiv.innerHTML = `<strong>${profile.name}</strong> ${profile.handle}<br>${text}`;

    feed.prepend(tweetDiv);
    document.getElementById('tweetContent').value = "";
}