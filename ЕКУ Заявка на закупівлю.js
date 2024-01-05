function onCardInitialize() {
MarketAnalysisInProcess();
}

function onChangedocSigner() {
    var Signer = EdocsApi.getAttributeValue('docSigner');
    var SignerPosition = EdocsApi.getAttributeValue('docSignerPosition');
     
    if (Signer.value) {
        var SignerData = EdocsApi.getEmployeeDataByEmployeeID(Signer.value);
        if (SignerData) {
            SignerPosition.value = SignerData.positionName;
          
        } else {
            SignerPosition.value = null;
          
        }
        EdocsApi.setAttributeValue(SignerPosition);
        
    }
}
//Обов'язковість полів на етапі
function MarketAnalysisInProcess(){
    const taskOrder = EdocsApi.getCaseTaskDataByCode('MarketAnalysis');
    if(taskOrder){
        if (taskOrder.executionState == "inProgress") {
             setControlRequired('CodPurchase', true);
			 setControlRequired('price', true);
                    }
				}
			}
   //потрібно добавити опис кастомної функції

  function setControlRequired(CODE, state){
    var control = EdocsApi.getControlProperties(CODE);
    if(control){
        control.required = state;
        EdocsApi.setControlProperties(control);
    }
  }

//Форма для друку 040124
/*
function onCardPrint(params) {
  params.templateCode = "040124";
  var resolutions = EdocsApi.getResolutions();

  params.attributes.RegNumber = EdocsApi.getAttributeValue("docRegNumber").value;
  params.attributes.RegDate = EdocsApi.getAttributeValue("docRegDate").value;
   params.attributes.NamePurchase = EdocsApi.getAttributeValue("NamePurchase").value;
  params.attributes.CodPurchase = EdocsApi.getAttributeValue("CodPurchase").value;
  params.attributes.Quantity = EdocsApi.getAttributeValue("Quantity").value;
  params.attributes.Integer = EdocsApi.getAttributeValue("Integer").value;
  params.attributes.price = EdocsApi.getAttributeValue("price").value;
  params.attributes.PlaceProvisionServices = EdocsApi.getAttributeValue("PlaceProvisionServices").value;
 params.attributes.DeliveryTime = EdocsApi.getAttributeValue("DeliveryTime").value;
  params.attributes.Requirements = EdocsApi.getAttributeValue("Requirements").value;
  params.attributes.docSigner = EdocsApi.getAttributeValue("docSigner").text;
}
*/