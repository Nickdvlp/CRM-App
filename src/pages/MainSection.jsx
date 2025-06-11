import { StockPieChart } from "../charts/PieChart";
import { PriceBarChart } from "../charts/PriceBarChart";
import fetchData from "../utils/fetchData";

const MainSection = () => {
  const data = fetchData();

  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const average = (field) => {
    const totalPrice = data.products.reduce(
      (acc, curr) => acc + curr[field],
      0
    );
    return totalPrice / data.products.length;
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="mt-12 md:mt-0 font-semibold *:rounded-2xl flex gap-12 md:gap-24 *:p-3 *:md:px-5 justify-center items-center bg-white p-4 rounded-2xl shadow-sm shadow-amber-100">
        <div className="flex flex-col gap-1 bg-green-300 shadow shadow-green-500 items-center justify-center md:text-xl">
          <div>Total Products</div>
          <div>{data.products.length}</div>
        </div>

        <div className="flex flex-col  gap-1 bg-red-300 shadow shadow-red-500 items-center md:text-xl justify-center">
          <div>Average Price</div>
          <div>${average("price").toFixed(2)}</div>
        </div>

        <div className="flex flex-col gap-1  bg-blue-300 shadow shadow-blue-500 items-center justify-center md:text-xl">
          <div>Average Stock</div>
          <div>${average("stock").toFixed(2)}</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <StockPieChart products={data.products} field="Price" datakey="price" />
        <StockPieChart products={data.products} field="Stock" datakey="stock" />
      </div>
      <PriceBarChart products={data.products} />
    </div>
  );
};

export default MainSection;
