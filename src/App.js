import React, { useEffect, useState } from "react";
import "./App.css";

const Profile = ({ profile }) => (
  <div>
    <div> {profile.login}</div>
  </div>
);

const Profiles = ({ profilesData }) => {
  return (
    <>
      <div>Total Search : {profilesData.total_count}</div>
      <div>
        {profilesData.items?.length &&
          profilesData.items.map(profile => <Profile profile={profile} />)}
      </div>
    </>
  );
};

function App() {
  const [profileName, setProfileName] = useState("tom");
  const [profilesData, setProfilesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (profileName !== "") {
        const response = await fetch(
          `https://api.github.com/search/users?q=${profileName}`
        );

        const data = await response.json();
        setProfilesData(data);
      }
    };

    fetchData();
  }, []);

  const handleChange = event => {
    event.preventDefault();
    setProfileName(event.target.value);
  };

  return (
    <div className="App">
      <input
        placeholder="enter a profile name"
        value={profileName}
        type="text"
        onChange={handleChange}
      />
      {profilesData && <Profiles profilesData={profilesData} />}
    </div>
  );
}

export default App;
