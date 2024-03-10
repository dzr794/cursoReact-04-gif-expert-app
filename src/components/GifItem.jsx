import PropTypes from 'prop-types'

const GifItem = ({url, title}) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

// GifItem.defaultProps = {
//   url: 'No URL given',
//   title: "No title given",
// }

export default GifItem;