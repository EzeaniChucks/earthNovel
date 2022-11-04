import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage';
import Error from './pages/error/Error';
import Nav from './components/nav/Nav';
import SingleCatPage from './pages/singleCatPage/SingleCatPage';
import ReadStory from './pages/readStory/ReadStory';
import Auth from './components/Auth/Auth';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './components/overview/Overview';
import Library from './components/library/Library';
import Payment from './components/revenue/Payment'
import ProfilePage from './components/writer/ProfilePage';
import MyStories from './components/myStories/MyStories';
import Messages from './components/messages/Messages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import About from './pages/about/About';
import EditStory from './components/myStories/EditStory';
import DisplayAuthorStory from './components/myStories/DisplayAuthorStory';
import AddNewStory from './components/myStories/AddNewStory';
import CreateStory from './components/myStories/createStory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Auth />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='story/:catName' element={<SingleCatPage />} />
        <Route path='story/:catName/:storyId' element={<ReadStory />} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='overview' element={<Overview />} />
          <Route path='library' element={<Library />} />
          <Route path='payment' element={<Payment />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='my-stories' element={<MyStories />}>
            <Route path='edit/:id' element={<EditStory />} />
            <Route index element={<DisplayAuthorStory />} />
            <Route path='new-chapter/:id' element={<AddNewStory />} />
            <Route path='create' element={<CreateStory />} />
          </Route>
          <Route path='messages' element={<Messages />} />
        </Route>
        <Route path='*' element={< Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
