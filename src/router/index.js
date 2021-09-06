import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthLayout from '../containers/layouts/AuthLayout'
import DashboardLayout from '../containers/layouts/DashboardLayout'

// Auth
import Login from '../containers/views/Auth/Login';


// Dashboard

import DashboardHome from '../containers/views/Dashboard/Home';


const AppLayoutRoute = () => (
    <Router>
      <Switch>
        <Route path='/dashboard' exact>
          <DashboardLayout>
            <Switch>
              <Route path='/' component={DashboardHome} />
            </Switch>
          </DashboardLayout>
        </Route>
        
        <Route>
          <AuthLayout>
            <Switch>
              <Route path='/' exact component={Login} />
            </Switch>
          </AuthLayout>
        </Route>

      </Switch>
    </Router>
  )

	export default AppLayoutRoute;