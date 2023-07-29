export interface Category {
    id: string; /* 1-1 */
    name: string; /* Laptop */
    parent?: Category; /* Electronics */
    children?: Category[];
     /* 
        [
            { id: "1-1-1", name: "Gaming Laptops" },
            { id: "1-1-2", name: "Ultrabooks" },
        ]
    */
  }

  /* Memoria

/* Servicio para crear categorias */
class ICategoryService {
    private taxonomy: Category[];

    constructor() {
        this.taxonomy = []
    }

    add(category: Category): boolean {
        try {
            this.taxonomy.push(category);
        } catch (e: any){
            return false
        }
        return true
    }

  }


/*
{
    id: "1",
    name: "Electronics",
    children: [
      {
        id: "1-1",
        name: "Laptops",
        children: [
          { id: "1-1-1", name: "Gaming Laptops" },
          { id: "1-1-2", name: "Ultrabooks" },
        ],
      },
      {
        id: "1-2",
        name: "Smartphones",
        children: [
          { id: "1-2-1", name: "Android Phones" },
          { id: "1-2-2", name: "iOS Phones" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Fashion",
    children: [
      {
        id: "2-1",
        name: "Men's Clothing",
        children: [
          { id: "2-1-1", name: "Shirts" },
          { id: "2-1-2", name: "Pants" },
        ],
      },
      {
        id: "2-2",
        name: "Women's Clothing",
        children: [
          { id: "2-2-1", name: "Dresses" },
          { id: "2-2-2", name: "Skirts" },
        ],
      },
    ],
  },
];



*/