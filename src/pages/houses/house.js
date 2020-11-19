import './house.scss';

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
}).format;

const House = ({house, show}) => {
  return (
    <div className="house-item" onClick={() => show(house)}>
    <img src={house.Image} alt="" class="house-img" />
      <div class="house-desc">
        <div className="address">{house.Address}</div>
        <div className="price">{formatCurrency(house.Price)}</div>
        <div className="agent">
            <img src="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/icon-agent.svg" alt="" />
            <br/>Listing agent
        </div>
      </div>
    </div>
  )
}

export default House;