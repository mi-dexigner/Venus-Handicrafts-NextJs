import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://celebritiesjackets.com/",
  consumerKey: "ck_71c8eb6e80827f8fc3126d2ff143a8c5164fc640",
  consumerSecret: "cs_a063b661a9d0fcb84291a8c9c70ecbe161984b38",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}