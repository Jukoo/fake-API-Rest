/* this file is used to express the different Http requests passing through 
 * - XHR (with the promise) 
 * - and the Fecth  API
 *   NameSpace Name : nexus 
 */ 

let {
      
     PromiseXhr //methode #[function]

    ,Fetch_Api
    
    ,Template // methode #[function]

    ,Loader //method # [function]
    
    ,SelectElm 

    } = require("./module")  


const Nexus ={


   
    Get_data() {
    
        
        PromiseXhr("http://localhost:3000/mates")
            .then(data => {
            
                let source  = JSON.parse(data) 
                
                for (let x in source){
              
                    SelectElm("#api").innerHTML += Template(source[x])
                
                }  
                                    
            }).catch(err => console.warn(err))
    } , 


    pushData () {
    
        
        let  ArrayElm  = [ 
            SelectElm("#firstName") , 
            SelectElm("#lastName ") , 
            SelectElm("#mail") , 
            SelectElm("#description") 
        
        ]

        ArrayElm.forEach(i => console.log(i))

        let increment = 2  ; 

        document.querySelector("form").addEventListener("submit" , evt => {
             
            evt.preventDefault() 

            fetch("http://localhost:3000/mates" , {
                
                method : "POST" , 

                body : JSON.stringify({
                
                   
                    firstName :ArrayElm[0].value , 
                    lastName  :ArrayElm[1].value , 
                    email     :ArrayElm[2].value , 
                    Description:ArrayElm[3].value
                    
                }) , 
                
                headers:{
                    "Content-type" : "application/json ; charset=UTF-8"
                 }
           })
            .then(dataResponse => console.log(dataResponse))
                      

        }) 
        
    }

     

}


Loader(Nexus) 


//#fix bugs 
//make post request to classmate.json 
//
