import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/trad',
        element: <FetchOld />,
      },
      {
        path: '/rq',
        element: <FetchRQ />,
      },
      {
        path: '/rq/:id',
        element: <FetchIndv />,
      },
      {
        path: '/infinite',
        element: <InfiniteScroll />,
      },
    ],
  },
]);

const App = () => {
  return <h1>Tanstack Query</h1>;
};
export default App;
