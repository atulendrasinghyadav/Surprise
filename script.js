window.addEventListener('DOMContentLoaded', function() {
    // Remove existing notification if any
    const oldNote = document.getElementById('site-notification');
    if (oldNote) oldNote.remove();

    // Create notification
    const note = document.createElement('div');
    note.id = 'site-notification';
    note.innerHTML = `
        <span style="font-size:1.2em;font-weight:bold;">Welcome, DOBO! 💖</span><br>
        <span style="font-size:1em;">This is a special page just for you. Hope it brings a smile! 😊</span><br>
        <span style="font-size:0.8em;">(Click on every button to see their animation and pop ups have adjustable width)</span>
        <br>
        <button id="close-note" style="margin-top:12px;padding:6px 16px;border:none;border-radius:8px;background:#ff6f91;color:#fff;cursor:pointer;font-size:1em;">Close</button>
    `;
    note.style.position = 'fixed';
    note.style.top = '32px';
    note.style.right = '32px';
    note.style.background = 'linear-gradient(90deg, #ffe0ec 0%, #b8f2e6 100%)';
    note.style.border = '2px solid #ff6f91';
    note.style.borderRadius = '16px';
    note.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)';
    note.style.padding = '24px 28px';
    note.style.zIndex = '99999';
    note.style.textAlign = 'center';
    note.style.animation = 'fadeInNote 0.7s';

    document.body.appendChild(note);

    document.getElementById('close-note').onclick = function() {
        note.style.animation = 'fadeOutNote 0.5s';
        setTimeout(() => note.remove(), 500);
    };
});

// Add notification animation CSS
const noteStyle = document.createElement('style');
noteStyle.innerHTML = `
@keyframes fadeInNote {
    from { opacity: 0; transform: translateY(-20px);}
    to { opacity: 1; transform: translateY(0);}
}
@keyframes fadeOutNote {
    from { opacity: 1; transform: translateY(0);}
    to { opacity: 0; transform: translateY(-20px);}
}
`;
document.head.appendChild(noteStyle);

// ...existing code...

document.getElementById('forgive-btn').onclick = function() {
    document.getElementById('response').innerHTML = "Thank you, DOBO! 💖<br>And i only want one thing that you should not say negative about yourself!";
    confetti();
    floatingHearts();
    sparkle();
    showLovePopup();
    rainbowBurst();
};

// ...existing code...

// ...existing code...

function showLovePopup() {
    // Remove existing popup if any
    const oldPopup = document.getElementById('love-popup');
    if (oldPopup) oldPopup.remove();

    // Create popup
    const popup = document.createElement('div');
    popup.id = 'love-popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%) scale(0.7)';
    popup.style.background = 'linear-gradient(135deg, #ffe0ec 0%, #b8f2e6 100%)';
    // popup.style.border = '3px solid #ff6f91';
    popup.style.borderRadius = '24px';
    popup.style.boxShadow = '0 8px 32px rgba(60,60,60,0.25)';
    popup.style.padding = '40px 32px';
    popup.style.zIndex = '9999';
    popup.style.minWidth = '120px';
    popup.style.maxWidth = '400px';
    popup.style.width = '300px';
    popup.style.textAlign = 'center';
    popup.style.resize = 'horizontal';
    popup.style.overflow = 'auto';
    popup.style.transition = 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.3s';

    // Animate popup in
    setTimeout(() => {
        popup.style.transform = 'translate(-50%, -50%) scale(1)';
        popup.style.boxShadow = '0 16px 48px rgba(255,111,145,0.25)';
    }, 10);

    // Message span
    const msgSpan = document.createElement('span');
    msgSpan.id = 'love-msg';
    msgSpan.style.fontSize = '2.2em';
    msgSpan.style.fontWeight = 'bold';
    msgSpan.style.background = 'linear-gradient(90deg, #ff6f91, #43c6ac)';
    msgSpan.style.backgroundClip = 'text';
    msgSpan.style.webkitBackgroundClip = 'text';
    msgSpan.style.color = 'transparent';
    msgSpan.style.webkitTextFillColor = 'transparent';
    msgSpan.style.display = 'inline-block';
    msgSpan.style.transition = 'font-size 0.3s';

    msgSpan.innerText = 'I love you';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '12px';
    closeBtn.style.right = '24px';
    closeBtn.style.background = 'rgba(255,255,255,0.7)';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '2em';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.width = '36px';
    closeBtn.style.height = '36px';
    closeBtn.style.boxShadow = '0 2px 8px rgba(60,60,60,0.1)';
    closeBtn.onmouseenter = () => closeBtn.style.background = '#ff6f91';
    closeBtn.onmouseleave = () => closeBtn.style.background = 'rgba(255,255,255,0.7)';
    closeBtn.onclick = () => popup.remove();

    popup.appendChild(closeBtn);
    popup.appendChild(msgSpan);
    document.body.appendChild(popup);

    // Responsive message change with animation
    function updateMsg() {
        const w = popup.offsetWidth;
        if (w < 210) {
            msgSpan.innerText = 'I ❤️ u';
            msgSpan.style.fontSize = '2.2em';
            burstHearts();
        } else if (w < 260) {
            msgSpan.innerText = 'I ❤️ you';
            msgSpan.style.fontSize = '2.2em';
            burstHearts();
        } else {
            msgSpan.innerText = 'I love you';
            msgSpan.style.fontSize = '2.2em';
        }
    }

    // Initial check
    updateMsg();

    // Listen for resize
    let resizeObserver = new ResizeObserver(updateMsg);
    resizeObserver.observe(popup);

    // Clean up observer on close
    popup.addEventListener('remove', () => resizeObserver.disconnect());

    // Add a glowing animated border
    popup.style.boxShadow += ', 0 0 24px 4px #ff6f9188';

    // Add a rainbow animated border effect
    popup.style.borderImage = 'linear-gradient(90deg, #ff6f91, #43c6ac, #ffd6e0, #b8f2e6, #ff6f91) 1';
}

//

document.getElementById('think-btn').onclick = function() {
    document.getElementById('response').innerHTML = "Take your time, I'll be waiting... 🥺";
};
// ...existing code...

// Move the "No" button to a random position when hovered
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseenter', function() {
    const container = document.querySelector('.container');
    const btnRect = noBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate max left/top so button stays inside container
    const maxLeft = containerRect.width - btnRect.width - 20;
    const maxTop = containerRect.height - btnRect.height - 20;

    // Generate random position
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    noBtn.style.position = 'absolute';
    noBtn.style.left = left + 'px';
    noBtn.style.top = top + 'px';
});

// Reset position when mouse leaves container (optional)
document.querySelector('.container').addEventListener('mouseleave', function() {
    noBtn.style.position = '';
    noBtn.style.left = '';
    noBtn.style.top = '';
});

// ...existing

// Simple confetti effect
function confetti() {
    for(let i=0; i<30; i++) {
        let conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random()*100 + 'vw';
        conf.style.animationDuration = (Math.random()*2+2) + 's';
        conf.style.background = `hsl(${Math.random()*360},70%,70%)`;
        document.body.appendChild(conf);
        setTimeout(()=>conf.remove(), 4000);
    }
}

// Add confetti CSS
const style = document.createElement('style');
style.innerHTML = `
.confetti {
    position: fixed;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 0.8;
    pointer-events: none;
    animation: fall 3s linear forwards;
}
@keyframes fall {
    to {
        top: 100vh;
        transform: rotate(360deg);
        opacity: 0.2;
    }
}
`;
document.head.appendChild(style);

function floatingHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerText = '💗';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 1.5 + 1.2) + 'em';
        heart.style.opacity = '0.8';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'transform 4s linear, opacity 4s linear';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.style.transform = `translateY(-${window.innerHeight + 100}px) scale(${Math.random() * 0.5 + 0.8})`;
            heart.style.opacity = '0';
        }, 50);
        setTimeout(() => heart.remove(), 4000);
    }
}

function sparkle() {
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.background = `radial-gradient(circle, #fff 60%, #ff6f91 100%)`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }
}

// Add sparkle CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
.sparkle {
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.8;
    animation: sparkle-fade 2s linear forwards;
    pointer-events: none;
}
@keyframes sparkle-fade {
    0% { opacity: 1; transform: scale(1);}
    100% { opacity: 0; transform: scale(2);}
}
`;
document.head.appendChild(sparkleStyle);

function rainbowBurst() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    for (let i = 0; i < 16; i++) {
        const burst = document.createElement('div');
        burst.className = 'rainbow-burst';
        // Calculate angle and radius for burst effect
        const angle = (i * 22.5) * (Math.PI / 180);
        const radius = 60;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        burst.style.left = `${centerX}px`;
        burst.style.top = `${centerY}px`;
        burst.style.background = `hsl(${i * 22}, 80%, 60%)`;
        burst.style.transform = `translate(-50%, -50%) scale(0.5)`;
        document.body.appendChild(burst);
        setTimeout(() => {
            burst.style.transition = 'transform 1.2s cubic-bezier(.68,-0.55,.27,1.55), opacity 1.2s';
            burst.style.transform = `translate(${x - centerX}px, ${y - centerY}px) scale(1.8)`;
            burst.style.opacity = '0';
        }, 50);
        setTimeout(() => burst.remove(), 1300);
    }
}

// Add rainbow burst CSS
const burstStyle = document.createElement('style');
burstStyle.innerHTML = `
.rainbow-burst {
    position: fixed;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    opacity: 0.9;
    pointer-events: none;
    background: #fff;
    z-index: 9999;
}
`;
document.head.appendChild(burstStyle);

