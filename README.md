# + Evolution Academia

Site institucional da + Evolution Academia.

## Rodar localmente

Como o projeto é estático, basta servir a pasta raiz com um servidor HTTP:

```powershell
npx --yes http-server . -p 4173
```

Depois, acesse http://127.0.0.1:4173.

## Publicar no GitHub

```powershell
git init
git add .
git commit -m "Prepara site da academia para publicacao"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

## Publicar no Netlify

1. Entre em https://app.netlify.com.
2. Selecione **Add new site** e **Import an existing project**.
3. Escolha o repositório do GitHub.
4. Use `.` como diretório de publicação. O arquivo `netlify.toml` já deixa essa configuração registrada.
5. Clique em **Deploy site**.

Este projeto não precisa de comando de build.
