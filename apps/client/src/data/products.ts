import type { Product } from '../types';

export const sampleProducts: Product[] = [
  // ימי הולדת
  {
    id: '1',
    slug: 'birthday-deluxe-box',
    title: 'מארז יום הולדת דלוקס בסלסלה',
    description: 'סלסלת קש מעוצבת מלאה בפינוקים: שוקולדים, ממתקים, עוגיות, בלונים צבעוניים וכרטיס ברכה',
    price: 299,
    images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop'],
    categories: ['ימי הולדת'],
    tags: ['פופולרי', 'מומלץ'],
    inventory: 50,
    options: [
      { id: 'color', name: 'צבע', values: ['ורוד', 'כחול', 'זהב', 'כסף'] }
    ]
  },
  {
    id: '2',
    slug: 'birthday-balloons-set',
    title: 'סט בלונים ליום הולדת',
    description: 'סט מרהיב של 20 בלונים איכותיים בצבעים שונים, כולל בלון ענק עם מספר גיל',
    price: 149,
    images: ['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop'],
    categories: ['ימי הולדת', 'בלונים'],
    tags: ['חדש'],
    inventory: 100
  },

  // אהבה
  {
    id: '3',
    slug: 'love-roses-chocolate',
    title: 'סלסלת אהבה - ורדים ושוקולד',
    description: 'סלסלה לבנה מעוצבת עם 12 ורדים אדומים, שוקולדים בלגיים, יין ומתנה רומנטית',
    price: 349,
    images: ['https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop'],
    categories: ['אהבה'],
    tags: ['רומנטי', 'מומלץ'],
    inventory: 30,
    options: [
      { id: 'roses', name: 'מספר ורדים', values: ['12', '24', '50'] }
    ]
  },
  {
    id: '4',
    slug: 'romantic-spa-box',
    title: 'מארז ספא רומנטי בסלסלה',
    description: 'סלסלת קש יוקרתית עם נרות ריחניים, שמנים ארומטיים, מוצרי אמבט ובקבוק יין',
    price: 429,
    images: ['https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=400&fit=crop'],
    categories: ['אהבה'],
    tags: ['יוקרתי'],
    inventory: 20
  },

  // תינוקות
  {
    id: '5',
    slug: 'baby-welcome-box',
    title: 'מארז ברוכים הבאים לתינוק',
    description: 'מארז מלא לתינוק: בגדי תינוק רכים, שמיכה, צעצועים, מוצרי טיפוח לתינוק ובלונים',
    price: 389,
    images: ['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop'],
    categories: ['תינוקות'],
    tags: ['מומלץ', 'חדש'],
    inventory: 40,
    options: [
      { id: 'gender', name: 'מין', values: ['בן', 'בת', 'ניטרלי'] }
    ]
  },
  {
    id: '6',
    slug: 'baby-toys-basket',
    title: 'סלסלת צעצועים לתינוק',
    description: 'סלסלה מעוצבת מלאה בצעצועי התפתחות איכותיים, כולל חיות רכות ומשחקי חושים',
    price: 279,
    images: ['https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop'],
    categories: ['תינוקות'],
    tags: ['פופולרי'],
    inventory: 35
  },

  // מתנות לגבר
  {
    id: '7',
    slug: 'men-watch-luxury',
    title: 'שעון יד יוקרתי לגבר',
    description: 'שעון יד מעוצב עם רצועת עור, קופסת מתנה מהודרת, אחריות יצרן',
    price: 599,
    images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=400&fit=crop'],
    categories: ['מתנות לגבר'],
    tags: ['יוקרתי', 'מומלץ'],
    inventory: 25,
    options: [
      { id: 'color', name: 'צבע רצועה', values: ['חום', 'שחור', 'כחול'] }
    ]
  },
  {
    id: '8',
    slug: 'men-grooming-kit',
    title: 'ערכת גילוח מקצועית בסלסלה',
    description: 'סלסלה מעוצבת עם: מכונת גילוח, קרם גילוח, אפטר שייב, מברשת גילוח ומגבת',
    price: 449,
    images: ['https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=400&fit=crop'],
    categories: ['מתנות לגבר'],
    tags: ['פופולרי'],
    inventory: 30
  },
  {
    id: '9',
    slug: 'men-knife-set',
    title: 'סט סכינים יוקרתי לגבר',
    description: 'סט סכיני כיס איכותיים בקופסת עץ מהודרת, מושלם לאספנים',
    price: 529,
    images: ['https://images.unsplash.com/photo-1593078165-e5c5c7e3c770?w=600&h=400&fit=crop'],
    categories: ['מתנות לגבר'],
    tags: ['חדש', 'אספנות'],
    inventory: 20
  },

  // מתנות לעובדים
  {
    id: '10',
    slug: 'employee-appreciation-box',
    title: 'סלסלת הוקרה לעובד מצטיין',
    description: 'סלסלת קש מכובדת: בקבוק יין איכותי, שוקולד פרימיום, פירות יבשים, ביסקוויטים ומוצרי פינוק',
    price: 379,
    images: ['https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop'],
    categories: ['מתנות לעובדים'],
    tags: ['עסקי', 'מומלץ'],
    inventory: 100,
    options: [
      { id: 'quantity', name: 'כמות', values: ['1', '5', '10', '20+'] }
    ]
  },
  {
    id: '11',
    slug: 'corporate-gift-basket',
    title: 'סלסלה עסקית מפוארת',
    description: 'סלסלת מתנה יוקרתית לבנה: פירות מובחרים, יין, גבינות, ביסקוויטים ושוקולדים',
    price: 459,
    images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop'],
    categories: ['מתנות לעובדים'],
    tags: ['יוקרתי'],
    inventory: 50
  },

  // בלונים
  {
    id: '12',
    slug: 'helium-balloons-party',
    title: 'סט בלוני הליום למסיבה',
    description: '30 בלוני הליום צבעוניים, כולל משקולות, סרטים ובלון ענק מעוצב',
    price: 199,
    images: ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop'],
    categories: ['בלונים'],
    tags: ['פופולרי', 'מסיבה'],
    inventory: 80,
    options: [
      { id: 'theme', name: 'נושא', values: ['יום הולדת', 'חתונה', 'אירוע', 'כללי'] }
    ]
  },
  {
    id: '13',
    slug: 'number-balloons-set',
    title: 'בלוני מספרים ענקיים',
    description: 'בלוני מספרים גדולים (100 ס"מ) בצבעים מטאליים, מושלם לימי הולדת',
    price: 89,
    images: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'],
    categories: ['בלונים', 'ימי הולדת'],
    tags: ['חדש'],
    inventory: 120,
    options: [
      { id: 'number', name: 'מספר', values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      { id: 'color', name: 'צבע', values: ['זהב', 'כסף', 'ורוד', 'כחול'] }
    ]
  }
];

// פונקציה לקבלת מוצרים לפי קטגוריה
export const getProductsByCategory = (category: string): Product[] => {
  return sampleProducts.filter(product => 
    product.categories.includes(category)
  );
};

// פונקציה לקבלת מוצר לפי ID
export const getProductById = (id: string): Product | undefined => {
  return sampleProducts.find(product => product.id === id);
};

// פונקציה לקבלת מוצר לפי slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return sampleProducts.find(product => product.slug === slug);
};

