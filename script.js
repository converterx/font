const convertText = () => {
  const inputText = document.getElementById('inputText').value;

  // El Yazısı Dönüştürme
  document.getElementById('cursiveOutput').innerText = convertToCursive(inputText);

  // Gotik Dönüştürme
  document.getElementById('gothicOutput').innerText = convertToGothic(inputText);

  // Kalın Dönüştürme
  document.getElementById('boldOutput').innerText = inputText.toUpperCase();

  // Ters (Upside Down) Dönüştürme
  document.getElementById('upsideDownOutput').innerText = inputText.split('').reverse().join('');
};

const convertToCursive = (text) => {
  const cursiveMap = {
    a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮',
    f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳',
    k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸',
    p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽',
    u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
  };
  return text.split('').map(char => cursiveMap[char.toLowerCase()] || char).join('');
};

const convertToGothic = (text) => {
  const gothicMap = {
    a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢',
    f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧',
    k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬',
    p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱',
    u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷',
  };
  return text.split('').map(char => gothicMap[char.toLowerCase()] || char).join('');
};
