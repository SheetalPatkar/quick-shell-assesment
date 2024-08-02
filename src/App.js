import logo from './logo.svg';
import './App.css';
import './assets/styles/style.scss';
import ListingPage from './pages/ListingPage';
import { TicketProvider } from './utils/TicketContext';

function App() {
  return (
    <TicketProvider>
        <ListingPage />
    </TicketProvider>
  );
}

export default App;
