import { useDispatch, useSelector } from "react-redux";
import { searchChange } from "../store/actions";
import { SEARCH_CHANGE } from "../store/types";

export function searchFormReducer(state = { value: "" }, action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      state.value = action.payload.value;
      return { ...state };
    default:
      return state;
  }
}
export default function SearchForm() {
  const searchState = useSelector((state) => state.searchForm);
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    const search = e.target.value;
    dispatch(searchChange(search));
  };
  return (
    <form>
      <label className="search__label">
        Введите значение
        <input
          value={searchState.value || ""}
          onChange={searchHandler}
          name="search"
          type="search"
        />
      </label>
    </form>
  );
}
