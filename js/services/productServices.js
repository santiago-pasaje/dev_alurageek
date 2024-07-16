const productList = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

const sendProduct = async (name, price, image) => {
  try {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        image,
      }),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
  {
  }
};

const deleteProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
  {
  }
};

export const servicesProducts = {
  productList,
  sendProduct,
  deleteProduct,
};
