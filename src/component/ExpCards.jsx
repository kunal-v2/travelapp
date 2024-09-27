import '../component/ExpCards.css';

const imageSources = [
  {src:require('../assets/images/everest.jpg'), title:"Mount Everest"},
  {src:require('../assets/images/k2.jpg'),title:"k2"}, 
  {src:require('../assets/images/kilimanjaro.jpg'),title:"Mount Everest"},
  {src:require('../assets/images/fuji.jpg'),title:"Mount fuji"},
  {src:require('../assets/images/blanc.jpg'),title:"Mount blanc"},
{src:require('../assets/images/Breithorn.jfif'),title:"Mount Breithorn"},
];

function ExpCards() {
  return (
    <div className='Cards'>
      {imageSources.map((image, index) => (
        <div className='box' key={index}>
          <img src={image.src} alt={image.title} />
          <div className='cardTitle'>{image.title}</div> {/* Mountain name */}
          <button className='cardButton'>Explore</button>
        </div>
      ))}
    </div>
  );
}

export default ExpCards;