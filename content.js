
let lead= [];
let company = [];



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "personfinder" ) {
       start();
       window.location.reload();
           }
    }
  );


  function start(){

    

    for (var i = 0; i <1; i++) {

     

          

            let lead_dataName = document.getElementsByClassName('text-heading-xlarge inline t-24 v-align-middle break-words');


         for (var j = 0; j < lead_dataName.length; j++) {
            let value = lead_dataName[j].textContent;
                
            var str = value;
            var words = str.split(" ");
            words.splice(3);
            console.log(words);
            var joinName = words.join(" ");
            console.log(joinName);
               
              
                lead.push(joinName);
               

             }    
    

          

            /*let company_dataName = document.querySelector('[aria-label="Current company"]')
            let company_value = company_dataName.textContent;
            
            company.push(company_value);*/

            let company_Name = document.getElementsByClassName('inline-show-more-text\n    inline-show-more-text--is-collapsed\n    inline-show-more-text--is-collapsed-with-line-clamp\n    \n    \n     inline')
            console.log(company_Name);
            let comp_value = company_Name[0].textContent;

            console.log(comp_value);
            company.push(comp_value);




    }

        var leadName= Array.from(new Set(lead));
        var companyName= Array.from(new Set(company));
 
    
            chrome.runtime.sendMessage({
                data: {leadName, companyName}
            
            }, function (response) {
               // console.dir(response);
            });
       
//}   

 //   }
 }
  
