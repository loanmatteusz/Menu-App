enum ProductCategory {
  Snacks = "Lanches",
  Drinks = "Bebidas",
  Desserts = "Sobremesas",
}

export type Product = {
  id: number;
  title: string;
  price: string;
  category: ProductCategory | string;
  imgUrl: string;
};

type Store = {
  title: string;
  address: string;
  email: string;
  phone: string;
  products: Product[];
  updateLocalStorage: Function
};

export const store: Store = {
  title: "Lanches e Cia",
  address: "91 Wiseman Street",
  phone: "865-475-9193",
  email: "lanchesecia@mail.com",
  products: JSON.parse(localStorage.getItem('products')) || [
    {
      id: 1,
      title: "Hamburger Master",
      price: "15,90",
      category: ProductCategory.Snacks,
      imgUrl:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=600&w=300",
    },
    {
      id: 2,
      title: "Panqueca Insana",
      imgUrl:
        "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?cs=srgb&dl=pexels-nikola-%C4%8Ded%C3%ADkov%C3%A1-4046471.jpg&fm=jpg",
      price: "20,90",
      category: ProductCategory.Snacks,
    },
    {
      id: 3,
      title: "Super Laranja Juice",
      imgUrl:
        "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?cs=srgb&dl=pexels-bruno-scramgnon-1337824.jpg&fm=jpg",
      price: "17,10",
      category: ProductCategory.Drinks,
    },
    {
      id: 4,
      title: "Ultra Steak with Sauce",
      imgUrl:
        "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "47,10",
      category: ProductCategory.Snacks,
    },
    {
      id: 5,
      title: "Italian Noodles Mamma Mia",
      imgUrl:
        "https://images.pexels.com/photos/4057696/pexels-photo-4057696.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      price: "12,30",
      category: ProductCategory.Snacks,
    },
    {
      id: 6,
      title: "Super Hot Dog without Puree",
      imgUrl:
        "https://images.pexels.com/photos/4551906/pexels-photo-4551906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "4,50",
      category: ProductCategory.Snacks,
    },
    {
      id: 7,
      title: "Famous Reinforced Breakfast",
      imgUrl:
        "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      price: "7,50",
      category: ProductCategory.Snacks,
    },
    {
      id: 8,
      title: "Hamburger Master",
      price: "15,90",
      category: ProductCategory.Snacks,
      imgUrl:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=600&w=300",
    },
    {
      id: 9,
      title: "Panqueca Insana",
      imgUrl:
        "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?cs=srgb&dl=pexels-nikola-%C4%8Ded%C3%ADkov%C3%A1-4046471.jpg&fm=jpg",
      price: "20,90",
      category: ProductCategory.Snacks,
    },
    {
      id: 10,
      title: "Super Laranja Juice",
      imgUrl:
        "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?cs=srgb&dl=pexels-bruno-scramgnon-1337824.jpg&fm=jpg",
      price: "17,10",
      category: ProductCategory.Drinks,
    },
    {
      id: 11,
      title: "Ultra Steak with Sauce",
      imgUrl:
        "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "47,10",
      category: ProductCategory.Snacks,
    },
    {
      id: 12,
      title: "Italian Noodles Mamma Mia",
      imgUrl:
        "https://images.pexels.com/photos/4057696/pexels-photo-4057696.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      price: "12,30",
      category: ProductCategory.Snacks,
    },
    {
      id: 13,
      title: "Super Hot Dog without Puree",
      imgUrl:
        "https://images.pexels.com/photos/4551906/pexels-photo-4551906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "4,50",
      category: ProductCategory.Snacks,
    },
    {
      id: 14,
      title: "Famous Reinforced Breakfast",
      imgUrl:
        "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      price: "7,50",
      category: ProductCategory.Snacks,
    },
    {
      id: 15,
      title: "Hamburger Master",
      price: "15,90",
      category: ProductCategory.Snacks,
      imgUrl:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=600&w=300",
    },
    {
      id: 16,
      title: "Panqueca Insana",
      imgUrl:
        "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?cs=srgb&dl=pexels-nikola-%C4%8Ded%C3%ADkov%C3%A1-4046471.jpg&fm=jpg",
      price: "20,90",
      category: ProductCategory.Snacks,
    },
  ],
  updateLocalStorage: () => {
    localStorage.setItem('products', JSON.stringify(store.products));
  }
};
