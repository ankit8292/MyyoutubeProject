import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';
function App() {
  const approuter=createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
    <div className="">
      
      <RouterProvider router={approuter} />
    </div>
    </Provider>
  );
}

export default App;
