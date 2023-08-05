import "./dashboard.css"
import bankImage from "../assets/bank.jpg"
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
      <h2>
      Empowering Your Financial Aspirations
      </h2>
      <p>
      Unlocking Opportunities, One Loan at a Time 
      </p>
      <Link to="/loans"><button>
        Get Started
        </button></Link>
        </div>
      <div>
        <div className="imageContainer">
          <img src={ bankImage } alt="image" />
          </div>
      </div>
    </div>
  )
}

export default Dashboard