import { db } from "../config/index.js";

class Products {
  async fetchProducts(req, res) {
    try {
      const strQry = `
            SELECT
                ID,
                ProductName,
                quantity,
                price
            FROM products;
            `;
      db.query(strQry, (err, results) => {
        if (err)
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
            // "Error fetching products"
          });

          if(results.lenght  === 0){
                return res.status(404).json({status: res.statusCode, message: "No products found"})}

        res.status(200).json({ status: res.statusCode, results });
      });
    } catch (e) {
      res.status(404).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

//   addProduct(req, res) {
//     try {
//       const strQry = `
//             INSERT INTO products SET ?;
//             `;
//       db.query(
//         strQry,
//         [req.body.ProductName, req.body.quantity, req.body.price],
//         (err) => {
//           if (err) throw new Error("Unable to add a new product");
//           res.json({
//             status: res.statusCode,
//             msg: "Product was added",
//           });
//         }
//       );
//     } catch (e) {
//       res.json({
//         status: 404,
//         msg: e.message,
//       });
//     }
//   }
}

const product = new Products();

export default product;
