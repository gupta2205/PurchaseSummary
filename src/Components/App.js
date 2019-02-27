// connect store to Main component
// it's a container component
//it provide data to prentatational component which gets data through props

import React from 'react';
import configureStore from '../redux/configureStore';
import PurchaseSummaryContainer from "./PurchaseSummaryContainer";
import { Provider } from "react-redux";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <PurchaseSummaryContainer />
    </Provider>
);

export default App;
