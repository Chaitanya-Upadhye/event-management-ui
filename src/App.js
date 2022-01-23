import dayjs from "dayjs";
import "./App.css";
import Calender from "./components/calender";
import { FaCalendarWeek, FaUser } from "react-icons/fa";
import { IoSettingsSharp, IoCalendarSharp } from "react-icons/io5";
// TODO
// Add Routing
// Create components for Add/View events. This will be a slider, to be built from scratch.
// Integrate Events API

function App() {
  return (
    <div className="App">
      <div className="side-nav-container main-header">
        <ul className="nav-list">
          <li className="nav-item">
            <FaUser />
          </li>{" "}
          <li className="nav-item">
            <IoSettingsSharp />
          </li>
          <li className="nav-item">
            <IoCalendarSharp />
          </li>
        </ul>
      </div>

      <div className="central-layout">
        <header className="main-header">
          <h1>Header</h1>
        </header>
        <div className="central-layout-content">
          <div className="main-content-container">
            <div className="events-action-layout">
              <Calender />
              {/* <div className="event-details main-header">
                <header className="text-c day-section-header">
                  <FaCalendarWeek className="x-lg-fs" />
                  <span className="x-lg-fs bold">
                    {dayjs().format("DD MMM YYYY")}
                  </span>
                </header>

<div className="event-details-content">

</div>




              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
