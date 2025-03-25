document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
  
    document.querySelectorAll(".add-to-cart").forEach((button, index) => {
      button.addEventListener("click", () => {
        const productName = document.querySelectorAll(".product h3")[index].innerText;
        cart.push(productName);
        alert(`${productName} has been added to your cart.`);
        console.log("Cart:", cart); // Debugging in console
      });
    });
  });