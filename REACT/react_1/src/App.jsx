import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './app.css';
import data from './Data/Users'
function App() {
    return <div>
        <Header />
        <div className="cards">
            {data.map(({id, name, surname, description}) => {
                    return (
                        <Card
                            id={id}
                            name={name}
                            surname={surname}
                            description={description}
                        />)
                })}
        </div>
        <Footer />
    </div>
}
export default App;