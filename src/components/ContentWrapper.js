import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function ContentWrapper () {
    return (
        <Router>
            <Switch>
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={Login} />
                <Route path='/' exact component={SignUp}/>
            </Switch>
        </Router>
    )
}