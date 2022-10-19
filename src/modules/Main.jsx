import React, { useState, useEffect } from 'react';
import Card from './Card';
import List from './List';
import styles from './Main.module.css';
export default function Main() {

    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState([]);

    const upperSetMatches = (newMatches) => {


        if (matches.length === 0) {

            setMatches([newMatches]);

        } else {
            let isAlready = false;
            let secondisAlready = false;


            matches.map((match) => {

                if (match.id === newMatches.id) {

                    isAlready = true;


                }


            });

            if (isAlready) {

                matches.map((match, index) => {

                    if (match.id == newMatches.id && match.type != newMatches.type) {

                        setMatches((prev) => prev.map((item) => {

                            if (item.id === newMatches.id) {

                                return item = newMatches;

                            } else {
                                return item;

                            }


                        }));



                    }else if(match.id == newMatches.id && match.type == newMatches.type){

                        deleteItem(newMatches.id);

                    }


                    


                });




            } else {

                setMatches((prev) => [...prev, newMatches]);


            }






        }








    }

    const deleteItem = (id) => {
        setMatches((old)=>old.filter((item)=>item.id!=id))
    }


    const loadingLink = "https://cdnsc.nesine.com/10832121458/www/assets/images/loading/loading-nesine-icon.gif?v=10832121458";
    useEffect(() => {

        setTimeout(() => {

            setLoading(false);


        }, 1500)


    }, [])


    return (
        <div >

            {loading ? <div className={styles.loading}><img src={loadingLink} /></div> : (() => {

                return (

                    <div className={styles.container}>
                        <List upperSetMatches={upperSetMatches} matches={matches} />
                        <Card matches={matches} deleteItem={deleteItem}/>
                    </div>

                )

            })()}


        </div>
    )
}

