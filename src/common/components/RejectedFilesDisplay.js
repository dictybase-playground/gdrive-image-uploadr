import React from "react"

const RejectedFilesDisplay = ({ rejected }) => (
  <ul>{rejected.map((f, i) => <li key={i}>{f.name}</li>)}</ul>
)

export default RejectedFilesDisplay
