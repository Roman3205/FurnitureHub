import Product from "~/server/models/Product";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<{
      picks: string | boolean;
      page: number | undefined;
      personal: number | undefined;
    }>(event);
    let products;

    if (query.picks == "true") {
      products = await Product.find().limit(4);
      return products;
    }

    if (query.personal) {
      products = await Product.find().limit(query.personal);
      return products;
    }

    let skip = query.page == 1 ? 0 : Math.round(query?.page * 9 - 9);

    products = await Product.find().limit(9).skip(skip);
    return {
      products: products,
      totalCount: await Product.countDocuments(),
    };
  } catch (e) {
    return e;
  }
});
