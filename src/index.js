import ReactDOM from 'react-dom';
import UserContext from './contexts/UserContext';
import React from 'react';
import './css/reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Hoje from './Hoje';
import Habitos from './Habitos';
import Historico from './Historico';


function App(){
    const [user, setUser] = React.useState(null);

    return(
        <UserContext.Provider value = {{user, setUser}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Login/>
                    </Route>
                    <Route path="/cadastro" exact>
                        <Cadastro/>
                    </Route>
                    <Route path="/hoje" exact>
                        <Hoje/>
                    </Route>
                    <Route path="/habitos" exact>
                        <Habitos/>
                    </Route>
                    <Route path="/historico" exact>
                        <Historico/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App/>, document.querySelector(".root"));