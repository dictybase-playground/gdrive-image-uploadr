import React from "react"

const UploadErrorsDisplay = ({ errors }) => (
  <ul>
    {errors.map((e, i) => (
      <li key={i}>
        {e.status} - {e.error}
      </li>
    ))}
  </ul>
)

export default UploadErrorsDisplay
