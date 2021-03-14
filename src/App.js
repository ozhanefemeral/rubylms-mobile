import React from 'react';
import Routes from './routes';
import Store from './store';
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { URL, URLSearchParams } from 'whatwg-url'
import { Buffer } from 'buffer'

global.Buffer = Buffer;
global.URL = URL;
global.URLSearchParams = URLSearchParams;

const App = () => (
    <Store>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <Routes />
        </ApplicationProvider>
    </Store>
);

export default App;
