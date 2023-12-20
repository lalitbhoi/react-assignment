import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Classcompomenu from './Classcompomenu';
import Classcompointro from './Classcompointro';
import Classcampodemo from './Classcompodemo';
import Classcampoprops from './Classcompoprops';
import Maincard from './Maincard';
import Classcompostate from './Classcompostate';
import Conditionalrendering from './Conditionalrendering';
import Uncontrolldcomponent from './Uncontrolldcomponent';
import Controlldcomponent from './Controlldcomponent';
import Listsandkeys from './Listsandkeys';
import Classcompositionandinheriteance from './Classcompositionandinheriteance';
import Maincounter from './HOC/Maincounter';








class Classroutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="Classcompointro" element={<Classcompointro />} />
                    <Route path="Classcampodemo" element={<Classcampodemo />} />
                    <Route path="Classcampoprops" element={<Classcampoprops />} />
                    <Route path="Maincard" element={<Maincard />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />
                    <Route path="Conditionalrendering" element={<Conditionalrendering />} />
                    <Route path="Uncontrolldcomponent" element={<Uncontrolldcomponent />} />
                    <Route path="Controlldcomponent" element={<Controlldcomponent />} />
                    <Route path="Listsandkeys" element={<Listsandkeys />} />
                    <Route path="Classcompositionandinheriteance" element={<Classcompositionandinheriteance />} />
                    <Route path="Maincounter" element={<Maincounter />} />



                </Route>
            </Routes>

        )
    }
}

export default Classroutes