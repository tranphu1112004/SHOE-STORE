import instance from "../config/axios"; // Custom axios instance for API requests
import { ICartItem } from "../interfaces/ICartItem"; // Assume this interface includes id, name, price, color, size, quantity, and other relevant fields

const CartService = {
  // Fetch cart items for a specific user
  async getCart(userId: string) {
    try {
      const response = await instance.get(`/cart/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  },

  // Add item to cart
  async addItem(userId: string, item: ICartItem) {
    try {
      const response = await instance.post(`/cart/${userId}/add`, item);
      return response.data;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  },

  // Update item quantity, color, or size
  async updateItem(
    userId: string,
    itemId: string,
    quantity: number,
    color: string,
    size: string
  ) {
    try {
      const response = await instance.put(`/cart/${userId}/update/${itemId}`, {
        quantity,
        color,
        size,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating cart item:", error);
      throw error;
    }
  },

  // Remove item from cart
  async removeItem(userId: string, itemId: string) {
    try {
      const response = await instance.delete(`/cart/${userId}/remove/${itemId}`);
      return response.data;
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  },

  // Clear entire cart
  async clearCart(userId: string) {
    try {
      const response = await instance.delete(`/cart/${userId}/clear`);
      return response.data;
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  },
};

export default CartService;
