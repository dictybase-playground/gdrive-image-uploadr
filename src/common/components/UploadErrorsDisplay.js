import React from "react"

const UploadErrorsDisplay = ({ errors }) => {
  return (
    <ul>
      {errors.map((e, i) => (
        <li key={i}>
          {e.status} - {e.error}
        </li>
      ))}
    </ul>
  )
}

export default UploadErrorsDisplay
