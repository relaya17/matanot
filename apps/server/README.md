# GiftBox Server API

שרת Express + TypeScript עבור אפליקציית מתנות ומארזים.

## הקמה מקומית

### דרישות מקדימות
- Node.js 18+
- MongoDB (מקומי או Atlas)
- pnpm

### התקנה

```bash
# מתוך שורש הפרויקט
pnpm install
```

### הגדרת משתני סביבה

העתק את `env.example` ל-`.env` ועדכן את הערכים:

```bash
cp env.example .env
```

ערוך את `.env`:
```
PORT=5542
MONGODB_URI=mongodb://localhost:27017/giftbox
JWT_SECRET=your-secret-key-here
CLIENT_URL=http://localhost:5174
```

### הרצה

```bash
# Development (with hot reload)
pnpm --filter server dev

# Build
pnpm --filter server build

# Production
pnpm --filter server start
```

## API Endpoints

### Public
- `GET /api/health` - בדיקת תקינות
- `GET /api/products` - רשימת מוצרים
- `GET /api/products/:id` - מוצר בודד
- `POST /api/auth/register` - הרשמה
- `POST /api/auth/login` - התחברות
- `POST /api/orders` - יצירת הזמנה

### Protected (דורש JWT)
- `GET /api/auth/profile` - פרופיל משתמש
- `GET /api/user/profile` - פרטי משתמש
- `PUT /api/user/profile` - עדכון פרופיל
- `GET /api/orders` - היסטוריית הזמנות
- `GET /api/orders/:id` - הזמנה בודדת
- `POST /api/cart` - שמירת עגלה
- `GET /api/cart` - קבלת עגלה

### Admin (דורש role=admin)
- `POST /api/products` - יצירת מוצר
- `PUT /api/products/:id` - עדכון מוצר
- `DELETE /api/products/:id` - מחיקת מוצר

## מבנה תיקיות

```
src/
├── config/          # הגדרות (DB, וכו')
├── controllers/     # לוגיקת endpoints
├── models/          # Mongoose schemas
├── routes/          # Express routes
├── middleware/      # Auth, validation
├── types/           # TypeScript interfaces
└── index.ts         # Entry point
```

## טכנולוגיות
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Joi validation

