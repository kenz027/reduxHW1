import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  ADD_CHANGES_SERVICE,
  END_SERVICE_EDITING,
  SEARCH_CHANGE,
} from "./types";
export function addService(name, price, editingMode) {
  return { type: ADD_SERVICE, payload: { name, price, editingMode } };
}
export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function addServiceChanges(name, price, index) {
  return { type: ADD_CHANGES_SERVICE, payload: {name, price, index } };
}
export function editService(name, price, editingMode) {
    console.log(editingMode.index);
  return { type: EDIT_SERVICE, payload: { name, price, editingMode } };
}
export function endServiceEditing() {
    return { type: END_SERVICE_EDITING, payload: {} };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function searchChange(value){
  return {type: SEARCH_CHANGE, payload: {value}}
}
