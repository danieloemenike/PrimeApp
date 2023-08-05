import { useState } from 'react';
import axios from 'axios';
import RepaymentDetails from '../components/RepaymentDetails';

const Repayment = () => {
  const [loanDetails, setLoanDetails] = useState([]);
  const [transactionId, setTransactionId] = useState('');
  const [responseSuccess, setResponseSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchRepaymentSchedule = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://okigwecreations.online/api/',
        {
          action: 'get_repayment_schedule',
          transaction_id: transactionId,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data.message);

      if (response.data.message === 'INVALID TRANSACTION ID') {
        setErrorMessage('Hi👋, the Transaction ID is invalid⛔. Please check and Try Again');
        setLoanDetails([]);
        setResponseSuccess(false);
      } else if (response.data.message === 'REPAYMENT SCHEDULE GENERATED') {
        setLoanDetails(response.data);
        setResponseSuccess(true);
        setErrorMessage(null); // Clear any previous error message
      }
    } catch (error) {
      console.error('Error fetching repayment schedule', error);
    }
  };

  return (
    <section className="box">
      <div className="container">
        <h2>Repayment Schedule</h2>
        <form onSubmit={fetchRepaymentSchedule}>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <button disabled={!transactionId}>Fetch Repayment Schedule</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      {responseSuccess && <RepaymentDetails repaymentData={loanDetails} />}
    </section>
  );
};

export default Repayment;
