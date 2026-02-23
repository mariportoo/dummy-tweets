// 1. Navegação entre as seções
function showSection(sectionId) {
    document.querySelectorAll('.view-section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'profile-view') renderUserProfile();
}

// 2. Salvar dados do perfil (Persistência)
function saveProfileData() {
    const profile = {
        name: document.getElementById('cfg-name').value,
        handle: document.getElementById('cfg-handle').value,
        bio: document.getElementById('cfg-bio').value
    };
    localStorage.setItem('activeProfile', JSON.stringify(profile));
    alert("Perfil atualizado!");
}

// 3. Gerar Tweet (Fiel ao seu anexo)
function generateTweet() {
    const text = document.getElementById('tweetContent').value;
    if (!text) return;

    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "Nome", handle: "@user" };
    const feed = document.getElementById('main-feed');

    const tweetHTML = `
        <article class="tweet-card">
            <div class="tweet-avatar"></div>
            <div class="tweet-content">
                <div class="tweet-header-info">
                    <span class="display-name">${profile.name}</span>
                    <span class="handle-name">${profile.handle} · agora</span>
                </div>
                <div class="tweet-text">${text}</div>
            </div>
        </article>
    `;

    feed.insertAdjacentHTML('afterbegin', tweetHTML);
    document.getElementById('tweetContent').value = "";
}

// 4. Carregar dados na aba de Perfil
function renderUserProfile() {
    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "Nome", handle: "@user", bio: "Sem bio" };
    document.getElementById('view-display-name').innerText = profile.name;
    document.getElementById('view-display-handle').innerText = profile.handle;
    document.getElementById('view-display-bio').innerText = profile.bio;
}