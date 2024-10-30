import React from 'react'

function FormattedPrice({amount}) {
    const formattedAmount = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
  return (
    <span>{formattedAmount}</span>
  )
}

export default FormattedPrice