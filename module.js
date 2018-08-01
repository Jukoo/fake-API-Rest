/*
 * class Fetcher 
 * -------------
 */ 



module.exports  =  {



    PromiseXhr (url){
        
        const TypeAllowed = new Set(["string"]) 

        if (TypeAllowed.has(typeof url)){
           
        
         return new Promise((resolve , reject)=> {
         
            let xhttp  =  new XMLHttpRequest() 

             xhttp.open(`GET` , url , true )

             xhttp.onreadystatechange = ()=>{
             
             if (xhttp.readyState == xhttp.DONE  && xhttp.status  <= 304) resolve(xhttp.responseText) 
             
             if (xhttp.status >= 400) reject(`Error 404 not found`)
             }

             xhttp.addEventListener("error" , evt  => {
             
                 reject(`Internal Server Error ${evt.type}`)
                
             })

             xhttp.send()
         
         })
                
        }
        
    } ,  


    Fetch_Api(url) {
        
       
        /* this module will be used for POST Method 
                                                    */
        
    } , 

    
    Template (args){
        
        if (typeof args == "object") {
        
               
            return `<strong>${args.firstName}</strong> 
                    <mark>${args.lastName}</mark>
                    <small>${args.email}</small>
                    <p>${args.Description}</p> 
                    <hr> 
                  `
         }
    } , 

    Loader (NameSpace) {
    
       for(let i in NameSpace) {
        
            NameSpace[i] 

           if (typeof NameSpace[i].valueOf() == "function") NameSpace[i]()

       }
         
    },

    SelectElm (indicator) {
            
        let regex = /^.\w|^\w/

        const BeginChar = new Set(["." , "#"]) 

        if (indicator.match(regex) && BeginChar.has(indicator.charAt(0))){
            
            return document.querySelector(indicator)
        }else throw new error() 
        
    } 
}

