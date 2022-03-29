export default function(fn, duration = 100) {
  let timer = null;
  return (...args) => {
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
}
