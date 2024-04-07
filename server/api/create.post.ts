import Product from "../models/Product";
export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);

  const file = formData?.find((obj) => obj.name == "file");
  await useStorage().setItemRaw(`fs:${file.filename}`, file.data);
  await Product.create({
    title: formData?.find((obj) => obj.name == "title").data.toString("utf-8"),
    price: formData?.find((obj) => obj.name == "price").data.toString("utf-8"),
    image: formData?.find((obj) => obj.name == "file").filename,
  });
  return 200;
});
