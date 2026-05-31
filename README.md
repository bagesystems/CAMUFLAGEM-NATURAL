# Natural Camouflage — Gems Bulls

**Streetwear de Bagé, RS — Brasil**

## Estrutura do Projeto

```
WEB SITE NATURAL CAMOUFLAGE/
├── index.html              ← Landing page principal (ATUALIZADA)
├── styles.css              ← Estilos legados
├── app.js                  ← Scripts legados
├── frontend/
│   └── natural-camo-front/ ← App React/Vite (loja online)
└── backend/
    └── server_bkup/        ← API Node.js/Express + MercadoPago
```

## Como rodar

### Frontend (React)
```bash
cd frontend/natural-camo-front
npm install
npm run dev
```
Acesse: http://localhost:5173

### Backend (API)
```bash
cd backend/server_bkup
npm install
cp .env.example .env
# Configure suas credenciais do MercadoPago no .env
npm run dev
```
API em: http://localhost:3001

## Tecnologias
- React 18 + TypeScript + Vite
- Node.js + Express + TypeScript
- MercadoPago SDK (pagamentos)
- CSS com variáveis, animações CSS puras

## Marca
- **Estilo**: Streetwear / School (inspiração VANS)
- **Produtos**: Camisetas (disponíveis) | Jaquetas & Moletons (em breve)
- **Localização**: Bagé, RS — Brasil
