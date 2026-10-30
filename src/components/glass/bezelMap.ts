// ページ全体を包むカードは縦に数千 px になるので、マップは縮めて作り feImage で引き伸ばす
const MAX_MAP_SIDE = 2048;

export function createBezelMap(width: number, height: number, cornerRadius: number, bezel: number) {
  // 距離場の角丸が bezel より小さいと、内側の矩形距離で法線が切り替わる対角線が変位の帯に入り、折り目が出る。
  // 角だけ実際の縁より最大 (radius - cornerRadius)(√2 - 1) 内側から測ることになるが、その外は最大変位で埋まるので目立たない
  const radius = Math.max(cornerRadius, bezel);
  const scale = Math.min(1, MAX_MAP_SIDE / Math.max(width, height));
  const mapWidth = Math.max(1, Math.round(width * scale));
  const mapHeight = Math.max(1, Math.round(height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = mapWidth;
  canvas.height = mapHeight;
  const context = canvas.getContext("2d");
  if (!context) {
    return null;
  }

  const image = context.createImageData(mapWidth, mapHeight);
  const { data } = image;
  const innerHalfWidth = width / 2 - radius;
  const innerHalfHeight = height / 2 - radius;

  for (let y = 0; y < mapHeight; y++) {
    const py = ((y + 0.5) / mapHeight) * height - height / 2;
    const qy = Math.abs(py) - innerHalfHeight;

    for (let x = 0; x < mapWidth; x++) {
      const px = ((x + 0.5) / mapWidth) * width - width / 2;
      const qx = Math.abs(px) - innerHalfWidth;

      let distance: number;
      let normalX = 0;
      let normalY = 0;
      if (qx > 0 && qy > 0) {
        const length = Math.hypot(qx, qy);
        distance = radius - length;
        normalX = qx / length;
        normalY = qy / length;
      } else if (qx > qy) {
        distance = radius - qx;
        normalX = 1;
      } else {
        distance = radius - qy;
        normalY = 1;
      }

      // 1 - smoothstep で縁と内側の両端の傾きを 0 にし、変位の勾配が最大でも 1.5 / bezel に収まるようにする。
      // 勾配が 1 / refraction を超えると絵が折り返して鏡像になる
      const t = Math.min(1, Math.max(0, distance / bezel));
      const strength = 1 - t * t * (3 - 2 * t);

      const index = (y * mapWidth + x) * 4;
      data[index] = 127.5 - 127.5 * Math.sign(px) * normalX * strength;
      data[index + 1] = 128;
      data[index + 2] = 127.5 - 127.5 * Math.sign(py) * normalY * strength;
      data[index + 3] = 255;
    }
  }

  context.putImageData(image, 0, 0);
  return canvas.toDataURL("image/png");
}
