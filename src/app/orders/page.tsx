import { ORDER_HEADERS, ORDER_TABLE } from "@/constants";

const OrdersPage = () => {
  const headers = ORDER_HEADERS;
  const table = ORDER_TABLE;
  return (
    <div className="p-4 lg:px-20 xl:px-30 2xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">{headers.orderID}</th>
            <th>{headers.date}</th>
            <th>{headers.price}</th>
            <th className="hidden md:block">{headers.products}</th>
            <th>{headers.status}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">{table.orderID}</td>
            <td className="py-6 px-1">{table.date}</td>
            <td className="py-6 px-1">{table.price}</td>
            <td className="hidden md:block py-6 px-1">{table.products}</td>
            <td className="py-6 px-1">{table.status}</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">{table.orderID}</td>
            <td className="py-6 px-1">{table.date}</td>
            <td className="py-6 px-1">{table.price}</td>
            <td className="hidden md:block py-6 px-1">{table.products}</td>
            <td className="py-6 px-1">{table.status}</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">{table.orderID}</td>
            <td className="py-6 px-1">{table.date}</td>
            <td className="py-6 px-1">{table.price}</td>
            <td className="hidden md:block py-6 px-1">{table.products}</td>
            <td className="py-6 px-1">{table.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
