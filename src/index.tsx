import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { UpdatePassword } from './pages/update_password/UpdatePassword';
import { ErrorPage } from './pages/errror/ErrorPage';
import { Index } from './pages/index';
import { UpdateInfo } from './pages/update_info/UpdateInfo';
import {Menu} from "./pages/menu/Menu";
import {MeetingRoomList} from "./pages/meeting_room_list/MeetingRoomList";
import {BookingHistory} from "./pages/booking_history/BookingHistory";

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'update_info',
        element: <UpdateInfo />,
      },
      {
        path: '/',
        element: <Menu/>,
        children: [
          {
            path: '/',
            element: <MeetingRoomList/>
          },
          {
            path: 'meeting_room_list',
            element: <MeetingRoomList/>
          },
          {
            path: 'booking_history',
            element: <BookingHistory/>
          }
        ]
      }
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  }
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);
