# 🎁 GiftBox / MagicGifts - אפליקציית מתנות ומארזים

מונורפו מלא לאפליקציית מתנות ומארזים עם React 18 + TypeScript + Express.

## 📦 מבנה הפרויקט

```
matanot/
├── apps/
│   ├── client/          # React 18 + TypeScript + Vite
│   └── server/          # Express + TypeScript + MongoDB
├── packages/            # חבילות משותפות (עתידי)
├── package.json         # Root package
└── pnpm-workspace.yaml  # Workspace config
```

## 🚀 התחלה מהירה

### דרישות מקדימות
- Node.js 18+
- pnpm 8+
- MongoDB (מקומי או Atlas)

### התקנה

```bash
# התקן את כל התלויות
pnpm install
```

### הגדרת משתני סביבה

צור קובץ `.env` בתיקיית `apps/server`:

```bash
cd apps/server
cp env.example .env
```

ערוך את `.env` עם הפרטים שלך:
```env
PORT=5542
MONGODB_URI=mongodb://localhost:27017/giftbox
JWT_SECRET=your-secret-key-here
CLIENT_URL=http://localhost:5174
```

### הרצה

```bash
# הרץ client + server ביחד
pnpm dev

# או בנפרד:
pnpm --filter client dev    # Client: http://localhost:5174
pnpm --filter server dev     # Server: http://localhost:5542
```

### Build

```bash
# Build הכל
pnpm build

# Build בנפרד
pnpm --filter client build
pnpm --filter server build
```

### Production

```bash
pnpm start
```

## 📋 סקריפטים זמינים

- `pnpm dev` - הרצת client + server במקביל
- `pnpm build` - build של כל ה-workspaces
- `pnpm start` - הרצת שרת production
- `pnpm lint` - lint לכל הפרויקט
- `pnpm typecheck` - בדיקת טיפוסים

## 🛠 טכנולוגיות

### Frontend (Client)
- React 18
- TypeScript
- Vite
- React Router (לאחר התקנה)
- Redux Toolkit (לאחר התקנה)
- Bootstrap/Tailwind (לבחירה)

### Backend (Server)
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Joi validation

## 📚 תיעוד נוסף

- [Client README](./apps/client/README.md)
- [Server README](./apps/server/README.md)

## 🔒 אבטחה

- אין שימוש ב-`any` בקוד TypeScript
- `noImplicitAny: true` ב-tsconfig
- JWT עבור אימות
- bcrypt להצפנת סיסמאות
- Validation עם Joi
- CORS מוגדר
- HTTPS בלבד בפרודקשן

## 📝 איפיון מלא

ראה את הקבצים:
- [איפיון מלא - מור אמור](./docs/spec-mor-amor.md) (אם קיים)
- [איפיון GiftBox](./docs/spec-giftbox.md) (אם קיים)

## 🎯 מסכים מרכזיים

1. **בית** - חיפוש, קטגוריות, מבצעים
2. **קטגוריה** - רשימת מוצרים עם סינונים
3. **מוצר** - פרטים מלאים + הוספה לעגלה
4. **עגלה** - ניהול פריטים
5. **Checkout** - תשלום ומשלוח
6. **פרופיל** - היסטוריית הזמנות

## 📄 רישיון

Private - All rights reserved

