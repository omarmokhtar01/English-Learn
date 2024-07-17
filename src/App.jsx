// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import EnglishLearningNavbar from './components/EnglishLearningNavbar';
import LevelsPage from './pages/Levels/Levels';
import LevelDetailsPage from './pages/LevelDetailsPage/LevelDetailsPage'; // Adjust the path if necessary
import Bookish from './pages/A1/1/Bookish';
import IntroductionsPage from './pages/A1/1/IntroductionsPage';
import DailyRoutinePagePage from './pages/A1/1/DailyRoutinePage';
import FamilyPagePage from './pages/A1/1/Family';
import HobbiesPagePage from './pages/A1/1/Hobbies';
import ResturantPagePage from './pages/A1/1/Resturant';
import ShoppingPagePage from './pages/A1/1/Shopping';
import TravelPage from './pages/A1/1/Travel';
import WeatherPage from './pages/A1/1/Weather';
import HealthPage from './pages/A1/1/Health';
import HomePage from './pages/A1/1/HomeBeg1';

function App() {
  return (
    <BrowserRouter>
      <EnglishLearningNavbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LevelsPage />} />
        <Route path="/levels/:levelId" element={<LevelDetailsPage />} />
        <Route path="/levels/:levelId/beg-1" element={<Bookish />} />
<Route path="/levels/beg-1/introductions" element={<IntroductionsPage />} />
<Route path="/levels/beg-1/daily-routine" element={<DailyRoutinePagePage />} />
<Route path="/levels/beg-1/my-family" element={<FamilyPagePage />} />
<Route path="/levels/beg-1/hobbies-and-interests" element={<HobbiesPagePage />} />
<Route path="/levels/beg-1/at-the-restaurant" element={<ResturantPagePage />} />
<Route path="/levels/beg-1/shopping" element={<ShoppingPagePage />} />
<Route path="/levels/beg-1/travel-and-transportation" element={<TravelPage />} />
<Route path="/levels/beg-1/weather" element={<WeatherPage />} />
<Route path="/levels/beg-1/health-and-well-being" element={<HealthPage />} />
<Route path="/levels/beg-1/my-home" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
