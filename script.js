// Função para navegar entre as abas
function showSection(id) {
    document.querySelectorAll('.view-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    if (id === 'profile-view') updateProfileView();
}

// Salva os dados no navegador (LocalStorage)
function saveProfileData() {
    const profile = {
        name: document.getElementById('cfg-name').value || "Nome",
        handle: document.getElementById('cfg-handle').value || "@usuario",
        bio: document.getElementById('cfg-bio').value || ""
    };
    localStorage.setItem('activeProfile', JSON.stringify(profile));
    alert("Perfil de " + profile.name + " salvo com sucesso!");
    showSection('feed'); // Volta para o feed após salvar
}

// Gera o Tweet com o visual que você enviou no arquivo
function generateTweet() {
    const text = document.getElementById('tweetContent').value;
    if (!text) return;

    // Puxa os dados que você salvou na aba de configurações
    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "Maricota", handle: "@mari" };

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
                <div class="tweet-actions">
                    <span>💬 0</span> <span>🔁 0</span> <span>❤️ 0</span> <span>📊 0</span>
                </div>
            </div>
        </article>
    `;

    feed.insertAdjacentHTML('afterbegin', tweetHTML);
    document.getElementById('tweetContent').value = ""; // Limpa o campo
}

// Atualiza a visualização do perfil
function updateProfileView() {
    const profile = JSON.parse(localStorage.getItem('activeProfile')) || { name: "Nome", handle: "@usuario", bio: "" };
    document.getElementById('view-name').innerText = profile.name;
    document.getElementById('view-handle').innerText = profile.handle;
    document.getElementById('view-bio').innerText = profile.bio;
}