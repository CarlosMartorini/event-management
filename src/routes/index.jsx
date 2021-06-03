import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Wedding from '../pages/wedding';
import Graduation from '../pages/graduation';
import Confraternization from '../pages/confraternization';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/wedding'>
                <Wedding/>
            </Route>
            <Route path='/graduation'>
                <Graduation/>
            </Route>
            <Route path='/confraternization'>
                <Confraternization/>
            </Route>
        </Switch>
    )
}

export default Routes;