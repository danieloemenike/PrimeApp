import { useState } from 'react';
import axios from 'axios';
import "./loanRequest.css"

const LoanRequest = () => {
  const [fullName, setFullName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [repaymentDuration, setRepaymentDuration] = useState('');
  const [message, setMessage] = useState('');

  const handleLoanRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://okigwecreations.online/api/',
        {
          action: 'request_for_loan',
          full_name: fullName,
          loan_amount: loanAmount,
          repayment_duration: repaymentDuration,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Loan request failed.');
    }
  };

  return (
    <section>
      <div className="form-data">
        <h2 className="title">REQUEST A LOAN</h2>
        {message ? (
          <p className = "message">{message}</p>
        ) : (
          <form onSubmit={handleLoanRequest}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Loan Amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <input
              type="number"
              placeholder="Repayment Duration"
              value={repaymentDuration}
              onChange={(e) => setRepaymentDuration(e.target.value)}
            />
            <button disabled = {!fullName || !loanAmount || !repaymentDuration ? true : false}>Request Loan</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default LoanRequest;
