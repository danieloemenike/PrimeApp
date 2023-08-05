import { useState } from 'react';
import axios from 'axios';
import LoanDetails from '../components/LoanDetails';
import "./loans.css"
const LoanList = () => {
  const [loanRequests, setLoanRequests] = useState([]);
  const [transactionId, setTransactionId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const fetchLoanRequests = async (e) => {
    e.preventDefault();

    if (!transactionId) {
      setResponseMessage('Please enter a valid Transaction ID.');
      return;
    }

    try {
      const response = await axios.post(
        'https://okigwecreations.online/api/',
        {
          action: 'get_all_loan_request',
          transaction_id: transactionId,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.data) {
        setLoanRequests(response.data.data);
        setResponseMessage('');
      } else {
        setLoanRequests([]);
        setResponseMessage('No loan requests found.');
      }
    } catch (error) {
      console.error('Error fetching loan requests', error);
      setLoanRequests([]);
      setResponseMessage('Error fetching loan requests. Please try again later.');
    }
  };

  return (
    <div className="loan-list-container">
      <div className="loan-box">
  
      <form className="loan-form" onSubmit={fetchLoanRequests}>
        <label className="form-label">Transaction ID</label>
        <input
          type="text"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="form-input"
        />
        <button className="form-button" disabled = {!transactionId ? true : false}>Get Loan Details</button>
        </form>
        </div>
      <div className="loan-details">
        {responseMessage ? (
          <p className="response-message">{responseMessage}</p>
        ) : (
          <LoanDetails loanData={loanRequests} />
        )}
      </div>
    </div>
  );
};

export default LoanList;
