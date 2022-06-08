var newURL = window.location.href + "?p1=a&p2=b"

function extraerParametros(url) {
  if (typeof url != 'string') {
    throw TypeError('precisa ser una cadena');
  }
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, p) => ((a[p.slice(0, p.indexOf("="))] = p.slice(p.indexOf('=') + 1)), a), {});
}

$("#demo").text(newURL);
console.log(newURL);
console.log(extraerParametros(newURL));
