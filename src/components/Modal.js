import ModalForm from "./ModalForm"

const Modal = () => {
  return(
    <div className="modal">
      <h2 className="modal__title">Please fullfill the contact form below:</h2>
      <ModalForm/>
      <h3 className="modal__subtitle">You'll receive the bill on your email immediately</h3>
    </div>
  )
}

export default Modal