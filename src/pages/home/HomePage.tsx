import GameModeButton from "../../components/game_mode_btn/GameModeButton";
import Header from "../../components/header/Header";

import P2PIcon from './../../assets/images/p2p.svg';
import SameDeviceIcon from './../../assets/images/inperson.svg';
import BotIcon from './../../assets/images/robot.svg';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 mt-5">
                <GameModeButton 
                    modeName="Play Against a Friend" 
                    subtitle="One Device" 
                    imgURL={SameDeviceIcon}/>
                <GameModeButton 
                    modeName="Play Against a Friend" 
                    subtitle="Peer to Peer" 
                    imgURL={P2PIcon}/>
                <GameModeButton 
                    modeName="Play Against a Bot" 
                    subtitle="Test Your Skills" 
                    imgURL={BotIcon}/>
            </div>
        </div>
    )
}

export default HomePage;