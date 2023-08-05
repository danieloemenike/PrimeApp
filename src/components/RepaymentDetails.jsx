import React from 'react';
import "./repaymentDetails.css"
const RepaymentDetails = ({ repaymentData }) => {
  return (
    <div className="repayment-schedule-details">
      <h2>Repayment Schedule Details</h2>
      <div className="repayment-info">
      
        <p>Transaction ID: {repaymentData.TRANSACTION_ID}</p>
        <p>Full Name: {repaymentData.FULL_NAME}</p>
        <p>Loan Amount: {repaymentData.LOAN_AMOUNT}</p>
        <p>Repayment Duration: {repaymentData.REPAYMENT_DURATION}</p>
        <p>Cumulative Repayment Amount: {repaymentData.CUMULATIVE_REPAYMENT_AMOUNT}</p>
        <p>Date: {repaymentData.DATE}</p>
      </div>
      <div className="repayment-table">
        <h3>Repayment Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Transaction ID</th>
              <th>Loan Balance</th>
              <th>Month Count</th>
              <th>Expected Repayment Amount</th>
              <th>Interest</th>
              <th>Total Repayment Amount</th>
            </tr>
          </thead>
          <tbody>
            {repaymentData?.data?.map((item) => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.TRANSACTION_ID}</td>
                <td>{item.LOAN_BALANCE}</td>
                <td>{item.MONTH_COUNT}</td>
                <td>{item.EXPECTED_REPAYMENT_AMOUNT}</td>
                <td>{item.INTEREST}</td>
                <td>{item.TOTAL_REPAYMENT_AMOUNT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepaymentDetails;
