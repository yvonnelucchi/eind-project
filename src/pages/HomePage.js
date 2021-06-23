import React from 'react';
import './HomePage.css';
import cube from '../assets/cube.jpg';
import desk from '../assets/desk.jpg';
import guy from '../assets/guy.jpg';
import window from '../assets/window.jpg';
import sailing from '../assets/sailing.jpg';
import samourai from '../assets/samourai.jpg';
import moon from '../assets/moon.jpg';

export default function HomePage() {
    return(
        <div className="row">
            <div className="column">
                <img src={cube} alt="cube"/>
                <img src={desk} alt="desk"/>
            </div>

            <div className="column">
                <img src={window} alt="window"/>
                <img src={guy} alt="guy"/>
            </div>

            <div className="column">
                <img src={sailing} alt="sailing"/>
                <img src={samourai} alt="samourai"/>
            </div>

            <div className="column">
                <img src={moon} alt="moon"/>
            </div>
        </div>
            //
            // {/*<figure class="foto_item1">*/}
            // {/*    <img src={cube} class="gallery" alt="cube"/>*/}
            // {/*</figure>*/}
            // {/*<figure className="foto_item2">*/}
            // {/*    <img src={desk} class="gallery" alt="desk"/>*/}
            // {/*</figure>*/}
            // {/*<figure className="foto_item3">*/}
            // {/*    <img src={window} class="gallery" alt="window"/>*/}
            // {/*</figure>*/}
            // {/*<figure className="foto_item4">*/}
            // {/*    <img src={guy} class="gallery" alt="guy"/>*/}
            // {/*</figure>*/}
            // {/*<figure className="foto_item5">*/}
            // {/*    <img src={sailing} class="gallery" alt="sailing"/>*/}
            // {/*</figure>*/}
            // {/*<figure className="foto_item6">*/}
            // {/*    <img src={samourai} class="gallery" alt="samourai"/>*/}
            // {/*</figure>*/}
            // {/*<figure className="foto_item7">*/}
            // {/*    <img src={moon} class="gallery" alt="moon"/>*/}
            // {/*</figure>*/}


    )
}