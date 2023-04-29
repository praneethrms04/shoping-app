import { useNavigate } from "react-router-dom";
import { Not } from "../assets";

const UnAuthorized = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-16 mt-10 text-center ">
      <div>
        <h1>Not Found!</h1>
        <div className="flex justify-center items-center">
          <img src={Not} alt="not found" className="" />
        </div>
        <p className="text-xl font-bold m-1">
          Hmm.. The page you are looking for does not exist{" "}
        </p>
        <button className="bg-[#D8D8D8] rounded-lg p-2" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnAuthorized;
