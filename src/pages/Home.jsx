import Input from "../components/Input";
import Timer from "../components/Timer";
import TextField from "../components/TextField";

const Home = () => {
    return (
        <>
            <TextField />
            <div className="baris">
                <Input />
                <Timer />
            </div>
        </>
    );
};

export default Home;
