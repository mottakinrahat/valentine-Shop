document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
   const kitkatValue=getInputValue('kitkat-quantity');
   const kitkatPrice=kitkatValue*200;
   
   setInnerText('chocolate',kitkatPrice);
   totalPrice();

})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const roseValue=getInputValue('rose-quantity');
    const rosePrice=roseValue*100;
    setInnerText('rose',rosePrice);
    totalPrice();
})

document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const diaryValue=getInputValue('diary-quantity');
    const diaryPrice=diaryValue*100;
    setInnerText('diary',diaryPrice);
    totalPrice();
})


function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
function getInputValue(id){
   const value= document.getElementById(id).value;
   return value;
}
function getTotalValue(id){
const totalVal=document.getElementById(id).innerText;
return parseInt(totalVal);

}
function totalPrice(){
    const chocolate=getTotalValue('chocolate');
    const rose=getTotalValue('rose');
    const diary=getTotalValue('diary');
 
const totalPrice=chocolate+rose+diary;
        setInnerText('total',totalPrice);
}
document.getElementById('apply-btn').addEventListener('click',function(){
    const promoCode=getInputValue('promo-code');
    const totalPriceInput=getTotalValue('total');
   
    if(promoCode==="101"){
        const finalPrice=totalPriceInput*.9;
        setInnerText('all-total',finalPrice);
    }
    else{
     alert('It is your wrong Promo Code');
    }
   
   
})
// document.getElementById('promo-code').addEventListener('keyup',function(event){
//     const text=event.target.value;
//     const totalPriceInput=getTotalValue('total');
//    const theBtn=document.getElementById('apply-btn');
   
//     if(text==='101'){
//         theBtn.removeAttribute('disabled');
//     }
//     else{
//       theBtn.setAttribute('disabled',true);
//     }
//     const finalPrice=totalPriceInput*.9;
//     setInnerText('all-total',finalPrice);
// })