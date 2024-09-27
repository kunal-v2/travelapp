import '../stylings/Home.css';
import Header from '../component/Header';
import ExpCards from '../component/ExpCards';
import Paragraph from '../component/Paragraph';


function Home() {
  return (<>
    <Header />
    <div className='topBackground'><img src={require('../assets/images/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg')} alt='mountains' /></div>
    <Paragraph />
    <ExpCards />

    </>
  );
}

export default Home;