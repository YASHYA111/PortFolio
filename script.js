// Simple blinking cursor animation for the terminal
        setInterval(() => {
            const cursor = document.getElementById('cursor');
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);