import { ref } from "vue";

// lots of components have to toggle the edit modal on and off, this file is just a way to have reactive elements for those toggles that can be imported from wherever
// the only reason this is seperated while something like the navbar or login dropdown toggle isn't is because this is used by multiple components

// const modalIsActive = ref(false)
// // returns the variable so other files can access it
// export const refModalIsActive = () =>  modalIsActive
export const toggleModal = (isActive) => {
  isActive= !isActive
}
