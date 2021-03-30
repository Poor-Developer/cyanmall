export default {
  addCart(context, item) {
    console.log(context);
    context.commit('commitCart', item)
  }
}