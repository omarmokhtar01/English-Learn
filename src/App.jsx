// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EnglishLearningNavbar from "./components/EnglishLearningNavbar";
import LevelsPage from "./pages/Levels/Levels";
import LevelDetailsPage from "./pages/LevelDetailsPage/LevelDetailsPage"; // Adjust the path if necessary
import Beg1 from "./pages/A1/1/Beg1";
import IntroductionsPage from "./pages/A1/1/IntroductionsPage";
import DailyRoutinePagePage from "./pages/A1/1/DailyRoutinePage";
import FamilyPagePage from "./pages/A1/1/Family";
import HobbiesPagePage from "./pages/A1/1/Hobbies";
import ResturantPagePage from "./pages/A1/1/Resturant";
import ShoppingPagePage from "./pages/A1/1/Shopping";
import TravelPage from "./pages/A1/1/Travel";
import WeatherPage from "./pages/A1/1/Weather";
import HealthPage from "./pages/A1/1/Health";
import HomePage from "./pages/A1/1/HomeBeg1";
import Beg2 from "./pages/A1/2/Beg2";
import FoodPage from "./pages/A1/2/Food";
import ClothesPage from "./pages/A1/2/Clothes";
import ShcoolPage from "./pages/A1/2/Shcool";
import JobsPage from "./pages/A1/2/Jobs";
import FreeTimePage from "./pages/A1/2/Freetime";
import FamilyFriendsPage from "./pages/A1/2/FamilyFriends";
import DirectionsPage from "./pages/A1/2/Directions";
import TransportaionsPage from './pages/A1/2/Transportaions';
import ShoppingMarketPage from "./pages/A1/2/ShoppingMarket";
import TravelPlansPage from "./pages/A1/2/TravelPlans";
import Footer from "./components/Footer";
import Beg3 from "./pages/A1/3/Beg3";
import DreamsPage from './pages/A1/3/Dreams';
import FriendshipPage from "./pages/A1/3/Friendship";
import FirstLovePage from "./pages/A1/3/FirstLove";
import ChilhoodPage from "./pages/A1/3/Chilhood";
import TourismPage from "./pages/A1/3/Tourism";
import WeddingsPage from "./pages/A1/3/Weddings";
import CountriesPage from "./pages/A1/3/Countries";
import SportsPage from "./pages/A1/3/Sports";
import PetsPage from "./pages/A1/3/Pets";
import HistoryPage from "./pages/A1/3/History";
import InterviewQuestions from "./pages/TopQuestions/TopQuestions";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <EnglishLearningNavbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LevelsPage />} />

        <Route path="/top-questions" element={<InterviewQuestions />} />

        

        <Route path="/levels/:levelId" element={<LevelDetailsPage />} />
        <Route path="/levels/:levelId/beg-1" element={<Beg1 />} />
        <Route
          path="/levels/beg-1/introductions"
          element={<IntroductionsPage />}
        />
        <Route
          path="/levels/beg-1/daily-routine"
          element={<DailyRoutinePagePage />}
        />
        <Route path="/levels/beg-1/my-family" element={<FamilyPagePage />} />
        <Route
          path="/levels/beg-1/hobbies-and-interests"
          element={<HobbiesPagePage />}
        />
        <Route
          path="/levels/beg-1/at-the-restaurant"
          element={<ResturantPagePage />}
        />
        <Route path="/levels/beg-1/shopping" element={<ShoppingPagePage />} />
        <Route
          path="/levels/beg-1/travel-and-transportation"
          element={<TravelPage />}
        />
        <Route path="/levels/beg-1/weather" element={<WeatherPage />} />
        <Route
          path="/levels/beg-1/health-and-well-being"
          element={<HealthPage />}
        />
        <Route path="/levels/beg-1/my-home" element={<HomePage />} />


































        <Route path="/levels/:levelId/beg-2" element={<Beg2 />} />
        <Route
          path="/levels/beg-2/food-and-drink"
          element={<FoodPage />}
        />
        <Route
          path="/levels/beg-2/clothes-and-fashion"
          element={<ClothesPage />}
        />
        <Route
          path="/levels/beg-2/school-and-education"
          element={<ShcoolPage />}
        />
        <Route path="/levels/beg-2/jobs-and-workplaces" element={<JobsPage />} />
        <Route
          path="/levels/beg-2/free-time-activities"
          element={<FreeTimePage />}
        />


        <Route
          path="/levels/beg-2/family-and-friends"
          element={<FamilyFriendsPage />}
        />
        <Route path="/levels/beg-2/basic-directions-and-locations" element={<DirectionsPage />} />

        <Route
          path="/levels/beg-2/public-transportation"
          element={<TransportaionsPage />}
        />
        <Route path="/levels/beg-2/shopping-and-markets" element={<ShoppingMarketPage />} />

        <Route
          path="/levels/beg-2/travel-plans"
          element={<TravelPlansPage />}
        />






















<Route path="/levels/:levelId/beg-3" element={<Beg3 />} />
        <Route
          path="/levels/beg-3/dreams"
          element={<DreamsPage />}
        />
        <Route
          path="/levels/beg-3/friendship"
          element={<FriendshipPage />}
        />
        <Route
          path="/levels/beg-3/first-love"
          element={<FirstLovePage />}
        />
        <Route path="/levels/beg-3/childhood-memories" element={<ChilhoodPage />} />
        <Route
          path="/levels/beg-3/tourism"
          element={<TourismPage />}
        />


        <Route
          path="/levels/beg-3/weddings"
          element={<WeddingsPage />}
        />
        <Route path="/levels/beg-3/sports-and-fitness" element={<SportsPage />} />

        <Route
          path="/levels/beg-3/pets-and-animals"
          element={<PetsPage />}
        />
        <Route path="/levels/beg-3/history-and-culture" element={<HistoryPage />} />

        <Route
          path="/levels/beg-3/countries-and-nationalities"
          element={<CountriesPage />}
        />












<Route path="*" element={<NotFoundPage />} />

      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
