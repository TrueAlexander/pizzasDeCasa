const ModalForm = () => {
  return(
    <div className="modal__form">
      <form action="submit">
        <input type="text" name="name" placeholder="nome" required />
        <input type="email" name="email" placeholder="email" required/>
        <input type="phone" name="phone" placeholder="telefone" required/>
      </form>
    </div>
  )
}

export default ModalForm