// 樱花树
import style from './style.stylus';

const canvas = document.getElementById('tree');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#000';

const flowerColor = '#FFC0CB';

const drawTree = (x, y, deg, step) => {
  const targetX = x + Math.cos(deg) * 15;
  const targetY = y + Math.sin(deg) * 15;
  ctx.beginPath();
  ctx.lineWidth = step / 3;

  ctx.moveTo(x, y);
  ctx.lineTo(targetX, targetY);
  ctx.stroke();

  if (step <= 1) {
    const r = 2*Math.random() + 3;
    ctx.fillStyle = flowerColor;
    ctx.arc(targetX, targetY, r, 0, Math.PI);
    ctx.fill();
  }


  if (step > 0) {
    drawTree(targetX, targetY, deg, step - 1 );
    if (step % 3 === 0) {
      drawTree(targetX, targetY, deg + 0.4 + Math.random() * 0.2, Math.round((step - 1)/1.30));
    }
    if (step % 3 === 1) {
      drawTree(targetX, targetY, deg - (0.4 + Math.random() * 0.2),  Math.round((step - 1)/1.30) );
    }
  }
}

drawTree(canvas.width/2, canvas.height/2 + 80, -Math.PI/2, 26);

ctx.font = "18px '微软雅黑'";
ctx.textAlign = "center";
ctx.fillText("送给xxxx的樱花树~", canvas.width / 2, canvas.height / 2 + 120);
