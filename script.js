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

function generateTweet() {
    const text = document.getElementById('tweetContent').value;
    if (!text) return;

    // Puxa os dados salvos ou usa um padrão
    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "Usuário", handle: "@user" };
    const feed = document.getElementById('main-feed');

    // Formatação de hora atual
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const min = agora.getMinutes().toString().padStart(2, '0');
    const horarioFormatado = `${hora}:${min}`;

    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'tweet-card';

    // HTML com a estrutura de ícones e dados de tempo
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"></div>
        <div class="tweet-content">
            <div class="tweet-header">
                <span class="display-name">${profile.name}</span>
                <span class="handle-name">${profile.handle}</span>
                <span class="tweet-dot">·</span>
                <span class="tweet-time">${horarioFormatado}</span>
            </div>
            <div class="tweet-text">${text}</div>
            <div class="tweet-icons">
                <span>💬 0</span>
                <span>🔁 0</span>
                <span>❤️ 0</span>
                <span>📊 0</span>
                <span>📤</span>
            </div>
        </div>
    `;

    feed.prepend(tweetDiv);
    document.getElementById('tweetContent').value = "";
}