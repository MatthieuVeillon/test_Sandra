import React, { useState } from "react";
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
      <div>{profilesData.items?.length && profilesData.items.map(profile => <Profile profile={profile} />)}</div>
    </>
  );
};

/*

The goal of the exercice is to fetch users and display it from github.
- when a user enter a profileName this should get the corresponding data from github API and display it with <Profiles> component
- API to use : https://api.github.com/search/users?q="profileName"
* */

function App() {
  const [profileName, setProfileName] = useState("tom");
  const [profilesData, setProfilesData] = useState(null);

  const handleChange = event => {
    event.preventDefault();
    setProfileName(event.target.value);
  };

  return (
    <div className="App">
      <input placeholder="enter a profile name" value={profileName} type="text" onChange={handleChange} />
      {profilesData && <Profiles profilesData={profilesData} />}
    </div>
  );
}

export default App;
