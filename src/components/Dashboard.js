import React, { useEffect, useState } from 'react';
import UpcomingLauch from './Launches/UpcomingLauch';
import PreviousLaunch from './Launches/PreviousLaunch';
import './Loading.css'
function Dashboard() {
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState(null);
  const [pastLaunches, setPastLaunches] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    const fetchUpcomingLaunches = async () => {
      setLoading1(true);
      try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
        const data = await response.json();
        setUpcomingLaunches(data);
      } catch (error) {
        setError1(error);
      } finally {
        setLoading1(false);
      }
    };

    fetchUpcomingLaunches();
  }, []);

  useEffect(() => {
    const fetchPastLaunches = async () => {
      setLoading2(true);
      try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/past');
        const data = await response.json();
        setPastLaunches(data);
      } catch (error) {
        setError2(error);
      } finally {
        setLoading2(false);
      }
    };

    fetchPastLaunches();
  }, []);

 
  if (loading1 || loading2) {
    return (
      <div className="loader">
        <div className="rocket"></div>
      </div>
    );
  }
  if (error1) return <div>Error fetching upcoming launches: {error1.message}</div>;
  if (error2) return <div>Error fetching past launches: {error2.message}</div>;

  return (
       <>
       <div className="flex-grow lg:ml-64 pt-16 bg-stone-900 bg-cover bg-center w-full min-h-screen" style={{ backgroundImage: `url('https://wallpapers.com/images/featured-full/outer-space-3pae4flbryaputyl.jpg')` }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          {upcomingLaunches.slice(0, 5).map((launch) => (
            <UpcomingLauch
              key={launch.flight_number}
              missionName={launch.mission_name}
              time={new Date(launch.launch_date_utc).toLocaleString()}
              rocket={launch.rocket.rocket_name}
              flightNumber={launch.flight_number}
              links={launch.links}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 mt-4">
          {pastLaunches.slice(0, 4).map((launch) => (
            <PreviousLaunch
              key={launch.flight_number}
              missionName={launch.mission_name}
              time={new Date(launch.launch_date_utc).toLocaleString()}
              rocket={launch.rocket.rocket_name}
              flightNumber={launch.flight_number}
            />
          ))}
        </div>
        <div className="main grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 p-4">
          <div className="rounded-md bg-amber-950 p-4">
            <h2 className="text-xl font-bold mb-4 text-white">Launch Facility</h2>
            <div className="m-7 rounded-md h-40 bg-cover bg-center" style={{ backgroundImage: `url('https://w0.peakpx.com/wallpaper/495/93/HD-wallpaper-rocket-launch-start-spaceport-smoke-usa-spacecraft-rockets.jpg')` }}>
              <h3 className="text-md font-semibold">Cape Canaveral</h3>
              <h5 className="text-sm from-neutral-600">LC-39A & SLC-40</h5>
              <h3 className="text-md font-normal">Temp</h3>
              <p className='text-pretty font-sans'>23</p>
            </div>
            <div className="m-7 rounded-md h-40 bg-cover bg-center" style={{ backgroundImage: `url('https://w0.peakpx.com/wallpaper/495/93/HD-wallpaper-rocket-launch-start-spaceport-smoke-usa-spacecraft-rockets.jpg')` }}>
              <h3 className="text-md font-semibold">Star BUca Chica</h3>
              <h3 className='text-md font-serif'>Region</h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg p-4 bg-amber-950">
            
            <div className="mb-2 rounded-md h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/28/full/1638118844-7162.jpg?im=FeatureCrop,size=(826,465)')` }}>
              <h3 className="text-md font-semibold text-white">Starlink satellite</h3>
            </div>
          </div>
        </div>
      </div>
    
       </>
    
    
  );
}

export default Dashboard;
