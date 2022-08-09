import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import AccessPage from './Components/AccessScreen/AccessPage';
import AddNewUser from './Components/AccessScreen/AddNewUser';
import LoginPage from './Components/AuthScreen/LoginPage';
import AddNewReceipt from './Components/CashReceipt/AddNewReceipt';
import CashReceiptPage from './Components/CashReceipt/CashReceiptPage';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import AddNewJobCard from './Components/JobCardPage/AddNewJobCard';
import JobCardPage from './Components/JobCardPage/JobCardPage';
import AddNewMaterial from './Components/MaterialIndent/AddNewMaterial';
import MaterialIndentPage from './Components/MaterialIndent/MaterialIndentPage';
import AddNewOrder from './Components/OrdersPage/AddNewOrder';
import OrdersPage from './Components/OrdersPage/OrdersPage';
import CustomerPage from './Components/MasterData/CustomerPage/CustomerPage';
import AddNewCustomer from './Components/MasterData/CustomerPage/AddNewCustomer';
import SideNavbar from './Components/SideNav/SideNavbar';
import SupplierPage from './Components/MasterData/SupplierPage/SupplierPage';
import AddNewSupplier from './Components/MasterData/SupplierPage/AddNewSupplier';
import PrintJobPage from './Components/MasterData/PrintJobPage/PrintJobPage';
import AddNewPrintJob from './Components/MasterData/PrintJobPage/AddNewPrintJob';
import MachinePage from './Components/MasterData/MachinePage/MachinePage';
import AddNewMachine from './Components/MasterData/MachinePage/AddNewMachine';
import LaminationPage from './Components/MasterData/LaminationPage/LaminationPage';
import AddNewLamination from './Components/MasterData/LaminationPage/AddNewLamination';
import ExtraJobPage from './Components/MasterData/ExtraJobPage/ExtraJobPage';
import AddNewExtraJob from './Components/MasterData/ExtraJobPage/AddNewExtraJob';
import PaperTypePage from './Components/MasterData/PaperType/PaperTypePage';
import AddNewPaperType from './Components/MasterData/PaperType/AddNewPaperType';
import PriceListPage from './Components/MasterData/PriceListPage/PriceListPage';
import AddNewPriceList from './Components/MasterData/PriceListPage/AddNewPriceList';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import EditCustomer from './Components/MasterData/CustomerPage/EditCustomer';
import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';
import EditSupplier from './Components/MasterData/SupplierPage/EditSupplier';
import EditLamination from './Components/MasterData/LaminationPage/EditLamination';
import EditPriceList from './Components/MasterData/PriceListPage/EditPriceList';
import EditPrintJob from './Components/MasterData/PrintJobPage/EditPrintJob';
import EditExtraJob from './Components/MasterData/ExtraJobPage/EditExtraJob';
import EditMachine from './Components/MasterData/MachinePage/EditMachine';
import EditPaperType from './Components/MasterData/PaperType/EditPaperType';
import EditOrderBooking from './Components/OrdersPage/EditOrderBooking';
import EditCashReceipt from './Components/CashReceipt/EditCashReceipt';
import EditMaterialIndent from './Components/MaterialIndent/EditMaterialIndent';
import EditJobCard from './Components/JobCardPage/EditJobCard';
import ForgotPassPage from './Components/AuthScreen/ForgotPassPage';
import ResetPassword from './Components/AuthScreen/ResetPassword';
import EditAccess from './Components/AccessScreen/EditAccess';

export const history = createHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path='/' exact component={LoginPage} />
        <PublicRoute path='/forgot-password' exact component={ForgotPassPage} />
        <PublicRoute
          path='/reset-password/:username'
          exact
          component={ResetPassword}
        />
        <SideNavbar>
          <PrivateRoute path='/dashboard' exact component={DashboardPage} />

          {/**** Job Card *****/}
          <PrivateRoute path='/jobcard' exact component={JobCardPage} />
          <PrivateRoute path='/jobcard/:id' exact component={EditJobCard} />
          <PrivateRoute path='/add-jobcard' exact component={AddNewJobCard} />

          {/**** Order Booking *****/}
          <PrivateRoute path='/booking' exact component={OrdersPage} />
          <PrivateRoute path='/add-booking' exact component={AddNewOrder} />
          <PrivateRoute
            path='/booking/:id'
            exact
            component={EditOrderBooking}
          />

          {/**** Cash Receipt *****/}
          <PrivateRoute path='/receipt' exact component={CashReceiptPage} />
          <PrivateRoute path='/add-receipt' exact component={AddNewReceipt} />
          <PrivateRoute path='/receipt/:id' exact component={EditCashReceipt} />

          {/**** Material Indent *****/}
          <PrivateRoute path='/material' exact component={MaterialIndentPage} />
          <PrivateRoute path='/add-material' exact component={AddNewMaterial} />
          <PrivateRoute
            path='/material/:id'
            exact
            component={EditMaterialIndent}
          />

          {/**** Access *****/}
          
          <PrivateRoute path='/access' exact component={AccessPage} />
          <PrivateRoute path='/access/addnew' exact component={AddNewUser} />
          <PrivateRoute path='/edit-access/:id' exact component={EditAccess} />

         

          {/**** Material Data - Customer *****/}
          <PrivateRoute
            path='/master/customer'
            exact
            component={CustomerPage}
          />
          <PrivateRoute
            path='/master/customer-add'
            exact
            component={AddNewCustomer}
          />
          <PrivateRoute
            path='/master/customer/:id'
            exact
            component={EditCustomer}
          />
          {/**** Material Data - Supplier *****/}
          <PrivateRoute
            path='/master/supplier'
            exact
            component={SupplierPage}
          />
          <PrivateRoute
            path='/master/supplier-add'
            exact
            component={AddNewSupplier}
          />

          <PrivateRoute
            path='/master/supplier/:id'
            exact
            component={EditSupplier}
          />
          {/**** Material Data - Print Job *****/}
          <PrivateRoute
            path='/master/printjob'
            exact
            component={PrintJobPage}
          />
          <PrivateRoute
            path='/master/printjob-add'
            exact
            component={AddNewPrintJob}
          />
          <PrivateRoute
            path='/master/printjob/:id'
            exact
            component={EditPrintJob}
          />
          {/**** Material Data - Machine *****/}
          <PrivateRoute path='/master/machine' exact component={MachinePage} />
          <PrivateRoute
            path='/master/machine-add'
            exact
            component={AddNewMachine}
          />
          <PrivateRoute
            path='/master/machine/:id'
            exact
            component={EditMachine}
          />

          {/**** Material Data - Lamination *****/}
          <PrivateRoute
            path='/master/lamination'
            exact
            component={LaminationPage}
          />
          <PrivateRoute
            path='/master/lamination-add'
            exact
            component={AddNewLamination}
          />
          <PrivateRoute
            path='/master/lamination/:id'
            exact
            component={EditLamination}
          />
          {/**** Material Data - ExtraJob *****/}
          <PrivateRoute
            path='/master/extrajob'
            exact
            component={ExtraJobPage}
          />
          <PrivateRoute
            path='/master/extrajob/:id'
            exact
            component={EditExtraJob}
          />
          <PrivateRoute
            path='/master/extrajob-add'
            exact
            component={AddNewExtraJob}
          />

          {/**** Material Data - PaperType *****/}
          <PrivateRoute
            path='/master/papertype'
            exact
            component={PaperTypePage}
          />
          <PrivateRoute
            path='/master/papertype-add'
            exact
            component={AddNewPaperType}
          />
          <PrivateRoute
            path='/master/papertype/:id'
            exact
            component={EditPaperType}
          />

          {/**** Material Data - PriceList *****/}
          <PrivateRoute
            path='/master/pricelist'
            exact
            component={PriceListPage}
          />
          <PrivateRoute
            path='/master/pricelist-add'
            exact
            component={AddNewPriceList}
          />
          <PrivateRoute
            path='/master/pricelist/:id'
            exact
            component={EditPriceList}
          />
          <PublicRoute path='/*' component={ErrorPage} />
        </SideNavbar>
      </Switch>
    </Router>
  );
};

export default App;
