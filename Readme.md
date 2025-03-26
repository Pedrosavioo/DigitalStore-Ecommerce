## Fazer build
```bash
docker compose up -d build
```

### Criar banco de dados e tabelas
1 - Acessar terminal do backend:
```bash
docker exect backend sh
```

2 - Criar banco de dados:
```bash
npx sequelize db:create
```

3 - Criar tabelas:
```bash
npx sequelize db:migrate
```

4 - Popular banco:
```bash
npx sequelize db:seed:all
```

**Se tudo deu certo a aplicação está sendo executada em `localhost:3000`**