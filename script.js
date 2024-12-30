function generateWishes() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        document.getElementById('wishesForm').style.display = 'none';
        document.getElementById('wishesDisplay').style.display = 'block';
        document.getElementById('userName').textContent = name.toUpperCase();
        generateImage(name);
    }
}

function resetForm() {
    document.getElementById('wishesForm').style.display = 'block';
    document.getElementById('wishesDisplay').style.display = 'none';
    document.getElementById('nameInput').value = '';
}

function generateImage(name) {
    const canvas = document.getElementById('wishesCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 1200;
    canvas.height = 630;

    // Create futuristic background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add futuristic grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }

    // Add glowing effect
    ctx.shadowColor = '#00fff5';
    ctx.shadowBlur = 20;

    // Add text
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 150px "Exo 2"';
    ctx.fillText('2025', canvas.width / 2, 200);

    ctx.font = 'bold 80px Rajdhani';
    ctx.fillText('HAPPY NEW YEAR', canvas.width / 2, 300);

    ctx.font = 'bold 100px "Exo 2"';
    ctx.fillText(name.toUpperCase(), canvas.width / 2, 450);

    ctx.font = '30px Rajdhani';
    ctx.fillText('by Harish Reddy Duggempudi', canvas.width / 2, 580);

    // Add futuristic elements
    drawCircuit(ctx);
}

function drawCircuit(ctx) {
    ctx.strokeStyle = '#e94560';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 200, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1100, 530);
    ctx.lineTo(1000, 530);
    ctx.lineTo(1000, 430);
    ctx.lineTo(900, 430);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(900, 430, 5, 0, Math.PI * 2);
    ctx.fill();
}

function downloadImage() {
    const canvas = document.getElementById('wishesCanvas');
    const name = document.getElementById('userName').textContent;

    const link = document.createElement('a');
    link.download = `futuristic-new-year-2025-${name}.png`;
    link.href = canvas.toDataURL();
    link.click();
}