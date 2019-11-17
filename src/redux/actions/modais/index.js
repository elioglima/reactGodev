export const openModal = (id, data) => ({
    type: 'OPEN_MODAL',
    id,
    ...data,
})

export const closeModal = id => ({
    type: 'CLOSE_MODAL',
    id,
})

export const toggleModal = id => ({
    type: 'TOGGLE_MODAL',
    id,
})