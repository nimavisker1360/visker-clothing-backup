import './categories.styles.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './rouets/home/home.componet';
import Navigation from './rouets/Navigation/Navigation.componet';
import SignIn from './rouets/sign-in/sign-in.component';

const Shop = () => {
  return <h1> iam shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
