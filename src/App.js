import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Min from './commponents/Min/Min';
import Home from './commponents/Home/Home';
import Category from './commponents/Caregory/Category';
import LogIn from './commponents/LogIn/LogIn';
import Register from './commponents/Register/Register';
import PrivetRoute from './route/PrivetRoute/PrivetRoute';
import Courses from './commponents/Courses/Courses';
import CourseDetels from './commponents/CourseDetels/CourseDetels';
import Blog from './commponents/Blog/Blog';
import FAQ from './commponents/FAQ/FAQ';
import Premium from './commponents/Premium/Premium';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Min></Min>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://hero-news-server.vercel.app/news')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/course/:id/checkout',
          element: <PrivetRoute><Premium></Premium></PrivetRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}/checkout`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('http://localhost:5000/courses')
        },
        {
          path: '/course/:id',
          element: <CourseDetels></CourseDetels>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
          path: '*',
          element: <h2 className='h-25 my-auto text-danger d-flex justify-content-center  align-items-center'>404 Not Funded</h2>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
