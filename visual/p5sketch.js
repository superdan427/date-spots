// src/visual/p5Sketch.js

let spots = [];

// p5 only receives data — it does not decide layout
export function updateVisuals(newSpots) {
  spots = newSpots;
}

new p5((p) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.addClass("p5-canvas");
    p.noStroke();
  };

  p.draw = () => {
    // Soft fade background
    p.background(245, 245, 245, 40);

    // Constrain drawing to left panel (40%)
    const drawWidth = p.width * 0.4;
    const drawHeight = p.height;

    p.push();
    p.drawingContext.save();
    p.drawingContext.beginPath();
    p.drawingContext.rect(0, 0, drawWidth, drawHeight);
    p.drawingContext.clip();

    // --- TWO ellipses only ---
    for (let i = 0; i < 2; i++) {
      const x =
        p.noise(i * 100 + p.frameCount * 0.004) * drawWidth;
      const y =
        p.noise(i * 200 + p.frameCount * 0.004) * drawHeight;

      p.fill(251, 0, 0);
      p.circle(x, y, 120);
    }

    p.drawingContext.restore();
    p.pop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
