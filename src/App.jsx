import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Home from "./Components/Home";
import LandingPage from "./Pages/LandingPage";
import { RedirectToSignIn, SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import OrderHistory from "./Pages/OrderHistory";
import Reviews from "./Pages/Reviews";
import Deals from "./Pages/Deals";
import SupportPage from "./Pages/SupportPage";
import GetQuote from "./Components/GetQuote";
import ForHomePage from "./Forwarder/ForHomePage";
import Scheduling from "./Forwarder/Scheduling";
import TripHistory from "./Forwarder/TripHistory";
import ForReferals from "./Forwarder/ForReferals";
import ForSupport from "./Forwarder/ForSupport";
import ReferralsPage from "./Components/ReferralsPage";
import VehicleRegistration from "./Forwarder/ForwarderComp/VehicleRegistration";
import ForForm from "./Forwarder/ForForm";
import PaymentSide from "./Components/PaymentSide";
import DirectionsPage from "./Forwarder/DirectionsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Home />} />
    <Route path="/LandingPage" element={<>
    <SignedIn>
      <LandingPage />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </>} />
    <Route path='/OrderHistory' element={<OrderHistory />} />
    <Route path='/Reviews' element={< Reviews />} />
    <Route path='/Deals' element={< Deals />} />
    <Route path='/SupportPage' element={<SupportPage />} />
    <Route path='/GetQuote' element={<GetQuote />} />
    <Route path='/ForHomePage' element={<ForHomePage />} />
    <Route path='/Scheduling' element={<Scheduling />} />
    <Route path='/TripHistory' element={<TripHistory />} />
    <Route path='/ForReferals' element={<ForReferals />} />
    <Route path='/ForSupport' element={<ForSupport />} />
    <Route path='/VehicleRegistration' element={<VehicleRegistration />} />
    <Route path='/ForForm' element={<ForForm />} />
    <Route path='/ForForm' element={<authUtils />} />
    <Route path='/PaymentSide' element={<PaymentSide />} />
    <Route path='/DirectionsPage' element={<DirectionsPage />} />
    <Route path="/referral/:referralCode" element={<ReferralsPage />} />  
      </>
  )
)


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
