// src/visual/p5Sketch.js

let spots = [];

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

    // Define drawable region (left 40% of screen)
    const drawWidth = p.width * 0.4;
    const drawHeight = p.height;

    // Clip drawing to non-map area
    p.push();
    p.drawingContext.save();
    p.drawingContext.beginPath();
    p.drawingContext.rect(0, 0, drawWidth, drawHeight);
    p.drawingContext.clip();

    spots.forEach((_, i) => {
      const x =
        p.noise(i * 10 + p.frameCount * 0.005) * drawWidth;
      const y =
        p.noise(i * 20 + p.frameCount * 0.005) * drawHeight;

      p.fill(251, 0, 0);
      p.circle(x, y, 80);
    });

    // Restore normal drawing context
    p.drawingContext.restore();
    p.pop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
