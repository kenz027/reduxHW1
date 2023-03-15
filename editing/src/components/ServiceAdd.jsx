import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  END_SERVICE_EDITING,
} from "../store/types";
import {
    addService,
    addServiceChanges,
    changeServiceField,
    endServiceEditing
} from '../store/actions'
const initialState = { name: "", value: "" };
export function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
        console.log(state.editingMode)
      return { ...state, ...action.payload };
    case END_SERVICE_EDITING:
      return initialState;
    default:
      return state;
  }
}
export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const { name, price } = item;
    const edMode = item.editingMode;
    if (edMode?.index){
        dispatch(addServiceChanges(name, price, edMode.index))
    } else {
        dispatch(addService(name, price, edMode))
    }
  };
  const handleStopEditing = () => {
    dispatch(endServiceEditing());
  }

  return (
    <form onSubmit={handleSumbit}>
      <input required name="name" onChange={handleChange} value={item.name} />
      <input required type='number' name="price" onChange={handleChange} value={item.price || ""} />
      <button type="submit">Save</button>
      {item.editingMode?.state && <button type='button' onClick={handleStopEditing}>Cancel</button>}
    </form>
  );
}
