
import sprite1 from "../image/sprite1_clear.png"
import sprite2 from "../image/sprite2_clear.png"
import sprite4 from "../image/sprite4_clear.png"
import sprite5 from "../image/sprite5_clear.png"
import codingBackground from "../image/coding_background.jpg"
import sprite6 from "../image/sprite6_clear.png"

const AnimatedBackground = () => {
    return (
    <div className="animated-background">
    <img src={sprite1} id="sprite1" className="animated-sprite"/>
    <img src={sprite2} id="sprite2" className="animated-sprite"/>
    <img src={sprite1} id="sprite3" className="animated-sprite"/>
    <img src={sprite4} id="sprite4" className="animated-sprite"/>
    <img src={sprite1} id="sprite5" className="animated-sprite"/>
    <img src={sprite6} id="sprite6" className="animated-sprite"/>
    <img src={codingBackground} id="coding-background-image"/>
    
    </div>
    );
}

export default AnimatedBackground;