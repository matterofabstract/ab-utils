/**
 * Find the average color of an image
 *
 * USAGE: getAvgColorOfImg('<url to image file>')
 */
export const getAvgColorOfImg = (u, i = new Image) => {
  i.crossOrigin = '';
  i.src = u;
  i.onload = e => {
    x = (c = document.createElement('canvas')).getContext('2d');
    a = w = c.width = i.width;
    a *= h = c.height = i.height;
    x.drawImage(i, 0, 0);
    for (d = x.getImageData(m = 0, 0, w, h).data, r = [0, 0, 0]; m < d.length; m += 4) {
      r[0] += d[m]
      r[1] += d[m + 1];
      r[2] += d[m + 2];
    }
    console.log('#' + r.map(v => (~~(v / a)).toString(16)).join``)
  }
}
