import Input from "../components/Input";
import reload from "../assets/reload.png";
import Timer from "../components/Timer";

const Home = () => {
    return (
        <div className="baris">
            <Input />
            <Timer />
            <button className="reload-button">
                <img src={reload} alt="reload" className="reload-icon"/>
            </button>
        </div>
    );
};

export default Home;
