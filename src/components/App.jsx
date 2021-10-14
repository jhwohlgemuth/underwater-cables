import React, {StrictMode} from 'react';
import PropTypes from 'prop-types';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

const App = ({name}) => <StrictMode>
    <Body></Body>
    <Footer name={name}></Footer>
</StrictMode>;

App.propTypes = {
    name: PropTypes.string
};

export default App;
