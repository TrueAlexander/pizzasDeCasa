const PagSeguro = (userData) => {

  

  const data = userData.data.data
  console.log(data)

  return(
    <div className="purchase__form">
      <form method="post" target="pagseguro" action="https://pagseguro.uol.com.br/v2/checkout/payment.html">  
        <input name="receiverEmail" type="hidden" value="suporte@eformaliza.com" />
        <input name="currency" type="hidden" value="BRL" />
        <input name="itemDescription1" type="hidden" value="4 Quejos" />
        <input name="itemAmount1" type="hidden" value="115" />
        <input name="itemQuantity1" type="hidden" value="1" />
        {/* <!-- Informações de frete (opcionais) -->   */}
        {/* <input name="shippingType" type="hidden" value="1" />   */}
        <input name="shippingAddressPostalCode" type="hidden" value={data.zipcode} />  
        <input name="shippingAddressStreet" type="hidden" value={data.street} />  
        <input name="shippingAddressNumber" type="hidden" value={data.number} />  
        <input name="shippingAddressComplement" type="hidden" value={data.complement} />   
        <input name="shippingAddressCity" type="hidden" value={data.city} />  
        {/* <!-- Dados do comprador (opcionais) -->   */}
        <input name="senderName" type="hidden" value={data.name} />  
        <input name="senderAreaCode" type="hidden" value={data.zipcode} />  
        <input name="senderPhone" type="hidden" value={data.phone} />  
        <input name="senderEmail" type="hidden" value={data.email} /> 
        <input alt="Pague com PagSeguro" name="submit"  type="image"  
          src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/120x53-pagar.gif"/> 
      </form>
      {/*
      <form 
        method="post" 
        target="pagseguro"  
        action="https://pagseguro.uol.com.br/v2/checkout/payment.html"
      >  
          
        {/* <!-- Campos obrigatórios -->   
        <input name="receiverEmail" type="hidden" value="suporte@lojamodelo.com.br" />  
        <input name="currency" type="hidden" value="BRL" />  
  
        
        <input name="itemId1" type="hidden" value="0001" />  
        <input name="itemDescription1" type="hidden" value="Notebook Prata" />  
        <input name="itemAmount1" type="hidden" value="24300.00" />  
        <input name="itemQuantity1" type="hidden" value="1" />  
        <input name="itemWeight1" type="hidden" value="1000" />  
        <input name="itemId2" type="hidden" value="0002" />  
        <input name="itemDescription2" type="hidden" value="Notebook Rosa" />  
        <input name="itemAmount2" type="hidden" value="25600.00" />  
        <input name="itemQuantity2" type="hidden" value="2" />  
        <input name="itemWeight2" type="hidden" value="750" />  
  
        
        <input name="reference" type="hidden" value="REF1234" />  
          
       
        <input name="shippingType" type="hidden" value="1" />  
        <input name="shippingAddressPostalCode" type="hidden" value="01452002" />  
        <input name="shippingAddressStreet" type="hidden" value="Av. Brig. Faria Lima" />  
        <input name="shippingAddressNumber" type="hidden" value="1384" />  
        <input name="shippingAddressComplement" type="hidden" value="5o andar" />  
        <input name="shippingAddressDistrict" type="hidden" value="Jardim Paulistano" />  
        <input name="shippingAddressCity" type="hidden" value="Sao Paulo" />  
        <input name="shippingAddressState" type="hidden" value="SP" />  
        <input name="shippingAddressCountry" type="hidden" value="BRA" />  
  
        
        <input name="senderName" type="hidden" value="José Comprador" />  
        <input name="senderAreaCode" type="hidden" value="11" />  
        <input name="senderPhone" type="hidden" value="56273440" />  
        <input name="senderEmail" type="hidden" value="comprador@uol.com.br" />  
  
        
        <input alt="Pague com PagSeguro" name="submit"  type="image"  
          src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/120x53-pagar.gif"/>  
          
  </form>  */}
    </div>
  )
}

export default PagSeguro