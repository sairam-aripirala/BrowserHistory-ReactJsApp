import './index.css'

const HistoryItem = props => {
  const {itemDetails, delItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails

  const deleteItem = () => {
    delItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="inner-history-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <div className="titles-container">
          <p className="title-main">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default HistoryItem
