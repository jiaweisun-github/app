
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import TopMenuBar from './TopMenuBar';
import CheckoutButton from './CheckoutButton';
import ProductsGrid from './ProductsGrid';
import { CartProvider } from './CartContext';
import Cart from './Cart';

const stripePromise = loadStripe('pk_test_51RzOBOCZBbVVNCzDv8pHoz7C03TH9N0thuO0QuUbuGF0iHLMgjb59AbvmElBawppBKyluiEzA0BlCuaRFuLmNjzG00BLM2599T');
const Success = () => <h2>Payment Successful!</h2>;
const Cancel = () => <h2>Payment Cancelled</h2>;

const App = () => {
    // const [activeTab, setActiveTab] = useState('home');
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');
//     const [response, setResponse] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:8080/jakarta', 
//                 { name, address }, 
//                 { headers: { 'Content-Type': 'application/json' } }
// );
//             setResponse(res.data);
//         } catch (error) {
//             setResponse('Error: ' + error.message);
//         }
//     };

    return (
        <CartProvider>
            <div>
                <TopMenuBar />
                <Cart />
                <div>
                    <h1>My Shoppe</h1>
                    <Routes>
                        <Route path="/checkout" element={<CheckoutButton stripePromise={stripePromise} />} />
                        <Route path="/products" element={<ProductsGrid />} />
                        <Route path="/success" element={<Success />} />
                        <Route path="/cancel" element={<Cancel />} />
                    </Routes>
                </div>
            </div>
        </CartProvider>
    );
};

export default App;