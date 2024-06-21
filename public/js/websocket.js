let socket;

function initializeWebSocket() {
    // Verifica se o navegador suporta bfcache
    if ('bfcache' in window.performance) {
        // Lógica para desativar ou ajustar o WebSocket
        window.addEventListener('pagehide', () => {
            if (socket) {
                socket.close();
            }
        });

        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                initializeWebSocket();
            }
        });
    }

    // Inicialização do WebSocket
    socket = new WebSocket('ws://seu-servidor-websocket');

    socket.onopen = function(event) {
        console.log('WebSocket is open now.');
    };

    socket.onmessage = function(event) {
        console.log('WebSocket message received:', event);
    };

    socket.onclose = function(event) {
        console.log('WebSocket is closed now.');
    };

    socket.onerror = function(error) {
        console.error('WebSocket error observed:', error);
    };
}

// Inicializa o WebSocket na carga da página
initializeWebSocket();