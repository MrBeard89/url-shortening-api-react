import Text from '../../components/Statics/Text.json'
import '../../styles/Statics/Cards.scss'

export const Cards = () => {
  return (
    <>
      <div className='cards-container'>
        <div className='cards-main'>
          <h1 className='main-title'>Advanced Statics</h1>
          <p className='main-text'>
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </div>

        {/* Mapping throw Text.json */}

        {Text.map((card, index) => {
          return (
            <div className='card-component' key={index}>
              <h1 className='card-title'>{card.title}</h1>
              <p className='card-text'>{card.text}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
