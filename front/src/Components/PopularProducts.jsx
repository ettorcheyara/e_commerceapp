import ReactStars from "react-stars";
import { ShopIcon } from "../public/Svgs";
import { Link } from "react-router-dom";
import { User } from "../public/Helpers";

const Popuarproducts = () => {
  const user = User
  const products = [
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "./src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "./src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "./src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "./src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "./src/Pics/macbook.jpg",
    },
  ];
  return (
    <div className="mx-5 w-calc(100% - 32px)">
      <h1 className="text-xl font-bold">Produits Populaires :</h1>
      <div className="grid w-full aa my-2 gap-4 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        {user?.role === 3 && (
          <Link 
            className="flex w-full h-full pb-2 flex-col hover:cursor-pointer justify-center items-center bg-white shadow-md border-y-[1px] rounded-sm"
            to="/admin/products"
          >
            <div className="rounded-full bg-slate-400 px-2 pt-1 pb-[6px] text-white font-semibold">
              +
            </div>
          </Link>
        )}
        {products.map((product, index) => (
          <Link className="w-full"
            to={ `/product/${product.id}`}
          >
            <div
              key={index}
              className="flex w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <img
                className="bg-cover w-full h-50 rounded-sm"
                src={product.pic}
                alt=""
              />
              <div className="flex flex-row my-3 mx-3 justify-between items-center">
                <h1 className="text-base">{product.name}</h1>
                <h1 className="title">{product.price} DA</h1>
              </div>

              <div className="flex flex-row mx-2 justify-between items-center">
                <ReactStars
                  count={5}
                  size={20}
                  color2={"#ffd700"}
                  edit={false}
                  value={product.rating}
                />
                <ShopIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popuarproducts;
