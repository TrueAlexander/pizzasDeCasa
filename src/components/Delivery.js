const Delivery = () => {
  return (
    <div>
      <h3>Choose the delivery option</h3>
      <div className="delivery__row">
          <div className="delivery__options">
            <div className="delivery__input">
              <label htmlFor="delivery1">Option #1</label>
              <input type="radio" name="optionsDelivery" value="1" defaultChecked />  
            </div>
            <div className="delivery__input">
              <label htmlFor="delivery2">Option #2</label>
              <input type="radio" name="optionsDelivery" value="2" />
            </div>
            <div className="delivery__input">
              <label htmlFor="delivery3"> Option #3</label>
              <input type="radio" name="optionsDelivery" value="3" />
            </div>
          </div>
          <div className="delivery__cost">
            <span>Cost of delivery:  </span>
            <span>50 Rs</span>    
          </div>
  
        </div>
    </div>
  )
}

export default Delivery