import "./loanDetails.css"
const LoanDetails = ({ loanData }) => {
  const keys = Object?.keys(loanData);

  return (
    <div className="loan-details-container">
    
      <div className="table-container">
        <table className="loan-table">
          <tbody>
            {keys?.map((key) => (
              <tr key={key} className="table-row">
                <td className="table-cell">{key}</td>
                <td className="table-cell">{loanData[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanDetails;
