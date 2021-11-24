const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  const url = ctx.url;
  if (url === '/') {
    ctx.body = '<h1>INDEXE HOSGELDINIZ</h1>';
  } else if (url === '/about') {
    ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>';
  } else if (url === '/contact') {
    ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>';
  } else {
    ctx.body = '<h1>404 Sayfa Bulunamadı</h1>';
  }
});

app.listen(3000);