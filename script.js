function generateTweet() {
    const text = document.getElementById('tweetContent').value;
    if(!text) return;

    const profile = JSON.parse(localStorage.getItem('activeProfile')) || {
        name: "maricota", 
        handle: "@xfragette"
    };

    const feed = document.getElementById('main-feed');
    const tweetDiv = document.createElement('article');
    tweetDiv.className = 'tweet-card';
    
    // Estrutura baseada no elemento original que você anexou
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"></div>
        <div class="tweet-content">
            <div class="tweet-header-info">
                <span class="display-name">${profile.name}</span>
                <span class="handle-name">${profile.handle}</span>
                <span class="handle-name">· agora</span>
            </div>
            <div class="tweet-text">${text}</div>
            <div class="tweet-actions">
                <span>💬 0</span>
                <span>🔁 0</span>
                <span>❤️ 0</span>
                <span>📊 0</span>
            </div>
        </div>
    `;
    
    feed.prepend(tweetDiv);
    document.getElementById('tweetContent').value = "";
}