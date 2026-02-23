// Salva os dados do perfil no navegador
function saveProfile() {
    const profile = {
        name: document.getElementById('userName').value,
        handle: document.getElementById('userHandle').value
    };
    localStorage.setItem('fakeProfile', JSON.stringify(profile));
    alert("Perfil salvo!");
}

// Gera o tweet na tela
function generateTweet() {
    const content = document.getElementById('tweetContent').value;
    const profile = JSON.parse(localStorage.getItem('fakeProfile')) || {name: "User", handle: "@user"};
    
    const feed = document.getElementById('feed');
    
    const tweetHTML = `
        <div class="tweet-card">
            <div class="tweet-header">
                ${profile.name} <span class="handle">${profile.handle}</span>
            </div>
            <div class="tweet-text">${content}</div>
            <div class="interactions">
                <span>💬 0</span> <span>🔁 0</span> <span>❤️ 0</span>
            </div>
        </div>
    `;
    
    feed.innerHTML = tweetHTML + feed.innerHTML; // Adiciona o novo no topo
    document.getElementById('tweetContent').value = ""; // Limpa o campo
}