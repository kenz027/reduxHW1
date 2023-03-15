import { useDispatch, useSelector } from "react-redux";
import { editService, removeService } from "../store/actions";
import {
  ADD_CHANGES_SERVICE,
  ADD_SERVICE,
  REMOVE_SERVICE,
} from "../store/types";
const initialState = [];
export function serviceListReducer(state = initialState, action) {
  const { name, price, id, index } = { ...action.payload };
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, { id: self.crypto.randomUUID(), name, price: price }];
    case REMOVE_SERVICE:
      return state.filter((service) => {
        return service.id !== id;
      });
    case ADD_CHANGES_SERVICE:
      const updatedState = [
        ...state.slice(0, index),
        {
          id: state[index].id,
          name: name,
          price: price,
        },
        ...state.slice(index + 1),
      ];
      return updatedState;
    default:
      return state;
  }
}
export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const searchValue = useSelector((state) => state.searchForm).value.toLowerCase();
  const dispatch = useDispatch();
  const filteredServices = items.filter((item) => {
    if (item.name.toLowerCase().includes(searchValue)) return item;
  });
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  const handleChange = (id) => {
    const index = items.findIndex((el) => el.id === id);
    const { name, price } = items[index];
    dispatch(editService(name, price, { state: true, index }));
  };
  return (
      <ul>
      {filteredServices.length > 0 ? filteredServices
        .map((o) => {
          return (
            <li key={o.id}>
              {o.name} {o.price}
              <button onClick={() => handleChange(o.id)}>✏️</button>
              <button onClick={() => handleRemove(o.id)}>🗑️</button>
            </li>
          );
        }) : <p>Тут пусто</p>}
    </ul>
  );
}
