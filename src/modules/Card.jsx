import React,{useState,useEffect} from "react";
import styles from "./Card.module.css";

export default function Card({matches,deleteItem}) {

    let maksOran=1;
    
    const [misli,setMisli] = useState(1);

    matches.map((match)=>{


        maksOran=(maksOran*match.oran);

    });
    

    function misliSet(e){

        setMisli(e.target.value);
        console.log(e.target.value);
    
    }

return (

    <div className={`${styles.card} ${styles.margin}`}>
        <div className={styles.cardheader}>


        <h1 >İdda Kuponum</h1>

        <h1 className={styles.matchlenght}>{matches.length}</h1>

        </div>
      

   {





        matches.map((match)=>{

                
            return(

                

                <div className={styles.matchcard} key={match.id}>
                     
                    <div className={styles.matchActiveHeader}>
                        <div>

                            <img width={20} src={match.icon}/>
                            <h1>{match.name}</h1>
                            </div>
                        
                            <p onClick={()=>deleteItem(match.id)}>x</p>

                        </div>
                   
                    <div className={styles.matchActiveHeaderMiddle}>
                    
                   <h1>09238</h1>
                    <h1>{match.time}</h1>

                    </div>   

                    <div className={styles.matchActiveHeaderBottom}>

                <div>
                    <div className={styles.matchBottomWidgetVan}>Maç Sonucu</div>
                    <div className={styles.matchBottomWidgetTwo}>{match.type}</div>
                    </div>
                    <h1>{match.oran}</h1>


                   </div>

                </div>


            );

        })

  



   }

      


    

     
    {
         
        
            matches.length<=0 ? (

                

                <div className={styles.matchcard} >
                     
                    <div className={styles.matchtitlecard}>
                    <img src="data:image/png;base64,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">
                        </img>
                    <h1 className={styles.noMatch}>Kuponunuzda maç bulunmamaktadır</h1>
                     </div>   

                </div>


            ) : (<div className={styles.card}>

                <div className={styles.cardBottom}>
               
                <div className={styles.widgetFirstBorder}>
                    <div className={styles.cardBottomWidgetVan}>
                    <p>Maks. Oran</p>
                    <h1>{(maksOran).toFixed(2)}</h1>
                    </div>
                </div>
                

                
                    <div className={styles.cardBottomWidgetSecond}>
                    <p>Kupon Tutarı</p>
                    <select onChange={misliSet}>
                        <option selected value="1">1 TL</option>
                        <option  value="2">2 TL</option>
                        <option  value="3">3 TL</option>
                        <option  value="4">4 TL</option>
                        <option  value="5">5 TL</option>
                    </select>
                    </div>
             
             


                </div>


                <div className={styles.maxRev}>

                <h2>Maks Kazanç</h2>
                <h1>{(maksOran*misli).toFixed(2)} TL</h1>

                </div>


            
            </div>)
           
   
        

    }


    </div>


);


}

