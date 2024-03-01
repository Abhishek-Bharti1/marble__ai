import { AiOutlineStock } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
const countryTemplate = (option) => {
    return (
        <div className="flex align-items-center" style={{display:"flex",gap:"2rem",borderRadius:"0.5rem",justifyContent: "space-between"}}>
<AiOutlineStock/>
            <div style={{ flex: "1", textAlign: "start"}}>{option.name}</div>
            <GoQuestion />
        </div>
    );
  };
  export default countryTemplate;