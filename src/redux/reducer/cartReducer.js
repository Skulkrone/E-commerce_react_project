const INTIAL_STATE = {
  cart: [],
};

export default function cartReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM":
      // est-ce que dans le tableau cart[] dans INTIAL_STATE, j'ai déjà un élément qui est le même que sur la page "produit"
      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );
      // console.log(indexItemAdd);

      if (indexItemAdd !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdd],
          // action.payload.quantity = valeur de l'input du form de la page "produit"
          quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
        };
        const newArr = [...state.cart];
        // splice = découpe 1 élément pui remplacer par un nouvel objet
        newArr.splice(indexItemAdd, 1, updatedQuantity);
        console.log(newArr);
        return {
          cart: newArr,
        };
      } else {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        console.log(newArr);
        return {
          cart: newArr,
        };
      }

    case "UPDATEITEM": {
      const indexItemUpdate = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      const newArr = [...state.cart];
      newArr.splice(indexItemUpdate, 1, action.payload);

      return {
        cart: newArr,
      };
    }

    case "DELETEITEM":
      const newArr = [...state.cart].filter(
        (obj) => obj.id !== action.payload.id
      );

      return {
        cart: newArr,
      };

    default:
      return state;
  }
}
