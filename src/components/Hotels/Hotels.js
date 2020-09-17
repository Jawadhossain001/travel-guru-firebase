import React from 'react';
import Header from '../Header/Header'
import HotelCards from '../fakeData/HotelCards';
import HotelDetails from '../HotelDetails/HotelDetails';
import Map from '../Map/Map';
import { Card } from 'react-bootstrap';

const Hotels = () => {
    return (
        <div>
           <Header />

           <Card style={{marginTop:"30px"}}>

               <Card>
                   <div style={{marginLeft:"15px"}}>
                        <b style={{color:"grey"}}>252 Stays Sep 17-20</b>
                        <h3 style={{margin:0}}>Stay in Cox's Bazar</h3>
                   </div>
                {
                    HotelCards.map(hotel=>{
                        return (
                            <HotelDetails hotel={hotel}></HotelDetails>
                        )
                    })
                }
               </Card>

               <Card >
                    <Map></Map>
               </Card>
           </Card>
        </div>
    );
};

export default Hotels;