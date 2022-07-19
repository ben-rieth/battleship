import GameModeButton from "../../components/game_mode_btn/GameModeButton";
import Header from "../../components/header/Header";

import P2PIcon from './../../assets/images/p2p.svg';
import SameDeviceIcon from './../../assets/images/inperson.svg';
import BotIcon from './../../assets/images/robot.svg';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center gap-10">
                <GameModeButton 
                    modeName="Play with a Friend" 
                    subtitle="One Device" 
                    imgURL={SameDeviceIcon}/>
                <GameModeButton 
                    modeName="Play with a Friend" 
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