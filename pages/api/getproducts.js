// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let products = await Product.find();
  let iphones = {};
  for (let item of products) {
    if (item.title in iphones) {
      if (
        !iphones[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        iphones[item.title].color.push(item.color);
      }
      if (
        !iphones[item.title].option.includes(item.option) &&
        item.availableQty > 0
      ) {
        iphones[item.title].option.push(item.option);
      }
    } else {
      iphones[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        iphones[item.title].color = [item.color];
        iphones[item.title].option = [item.option];
      }
    }
  }

  res.status(200).json({ iphones });
};
export default connectDb(handler);
