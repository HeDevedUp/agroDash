import Head from "next/head";
import { useSelector } from "react-redux";
import Layout from "../../components/Dashboard/Layout";
import { selectBasketItems, selectBasketTotal } from "../../redux/slice/Crop/cropSlice";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";

function Success() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const {userData} = useSelector((state) => state.authReducers.Authentication);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});

  const router = useRouter();

  if (items.length === 0) {
    router.push("/dashboard");
    return null;
  }
  // useEffect(() => {
  //   const groupedItems = items.reduce((results, item) => {
  //     (results[item.id] = results[item.id] || []).push(item);
  //     return results;
  //   }, {});
  //   setGroupedItemsInBasket(groupedItems);
  // }, [items]);

  return (
    <Layout>
      <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
        <Head>
          <title>Payment Successful</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="mx-auto max-w-5xl pb-24">
          <div className="mx-5 md:mx-8">
            <h1 className="my-4 text-3xl font-semibold lg:text-5xl">
              Thank you for your order, {userData.name}!
            </h1>
            <p className="my-4 text-lg">We appreciate your business.</p>

            <div className="divide-y divide-gray-300">
              {/* {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <div key={key} className="py-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={items[0].image}
                      alt={items[0].title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-semibold">{items[0].title}</h2>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="col-span-2">
                      <p>Quantity: {items.length}</p>
                      <p className="text-gray-500">
                        {items.length > 1
                          ? `${items[0].title} and ${items.length - 1} other items`
                          : null}
                      </p>
                    </div>
                    <div>
                      <Currency
                        quantity={items[0].price * items.length}
                        currency="NGN"
                      />
                    </div>
                  </div>
                </div>
              ))} */}

              <div className="flex justify-between py-4 text-xl font-semibold">
                <h4>Total</h4>
                <h4>
                  <Currency quantity={basketTotal} currency="NGN" />
                </h4>
              </div>
            </div>

            <div className="my-14 space-y-4">
              <button
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={() => router.push("/dashboard")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Success;
