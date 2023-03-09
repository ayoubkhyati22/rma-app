import React from 'react'
import './clients-list.scss'

const ClientsList = () => {
  return (
<div>
  <div>Liste des clients</div><br />
  <div className="searchbar">
  <div className="searchbar-wrapper">
    <div className="searchbar-left">
      <div className="search-icon-wrapper">
        <span className="search-icon searchbar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
          </svg>
        </span>
      </div>
    </div>
    <div className="searchbar-center">
      <div className="searchbar-input-spacer" />
      <input type="text" className="searchbar-input" maxLength={2048} name="q" autoCapitalize="off" autoComplete="off" title="Search" role="combobox" placeholder="Recherche..." />
    </div>

  </div>
</div><br />

<article className="leaderboard">

  <main className="leaderboard__profiles">
    <article className="leaderboard__profile">
      <img src="https://media.licdn.com/dms/image/D4E03AQF8zuS9aKS_Xg/profile-displayphoto-shrink_800_800/0/1669193423602?e=1682553600&v=beta&t=dNFwlzMlOg0qaeArmFcxKj5W1osM8kYKNFVS3j7gZTY" alt="Mark Zuckerberg" className="leaderboard__picture" />
      <span className="leaderboard__name">Khaoula CHIHAB</span>
      <span className="leaderboard__value">16.500<span>MAD</span></span>
    </article>
    <article className="leaderboard__profile">
      <img src="https://media.licdn.com/dms/image/C4E03AQGnH_JtYK8u7A/profile-displayphoto-shrink_800_800/0/1654522837088?e=1682553600&v=beta&t=YlwAjaM-LffrtfirLH_PzLD1dmiq0lW81zOsUL0u9KU" alt="Dustin Moskovitz" className="leaderboard__picture" />
      <span className="leaderboard__name">Ayoub NAY</span>
      <span className="leaderboard__value">10.000<span>MAD</span></span>
    </article>
    <article className="leaderboard__profile">
      <img src="https://media.licdn.com/dms/image/C4E03AQG1Fg0FPqinxQ/profile-displayphoto-shrink_800_800/0/1668078120119?e=1682553600&v=beta&t=79613l-I2qZ8FjFuAHwNo-Y3jdgaTVAvKhYexC9p3ZU" alt="Elizabeth Holmes" className="leaderboard__picture" />
      <span className="leaderboard__name">Abir ABOUZA</span>
      <span className="leaderboard__value">8.200<span>MAD</span></span>
    </article>
    <article className="leaderboard__profile">
      <img src="https://media.licdn.com/dms/image/D4E03AQHVTJ2qF6eP1Q/profile-displayphoto-shrink_800_800/0/1667133008024?e=1682553600&v=beta&t=VSclxw-r6RDWtYHKkIVLUYhrG05KRMZLR7GSLOTJBj4" alt="Evan Spiegel" className="leaderboard__picture" />
      <span className="leaderboard__name">Hiba TABHAMATE</span>
      <span className="leaderboard__value">12.500<span>MAD</span></span>
    </article>
    <article className="leaderboard__profile">
      <img src="https://media.licdn.com/dms/image/D4E35AQEqnaJ1K62l1g/profile-framedphoto-shrink_800_800/0/1627941627858?e=1677772800&v=beta&t=n86K37513Achft0UWf-6J0sYxyIECNsPxfjOHP3leRc" alt="Evan Spiegel" className="leaderboard__picture" />
      <span className="leaderboard__name">Hamza BOUCHTI</span>
      <span className="leaderboard__value">12.500<span>MAD</span></span>
    </article>
    <article className="leaderboard__profile">
      <img src="https://media.licdn.com/dms/image/C4D03AQHzVT-xlZ1eeQ/profile-displayphoto-shrink_800_800/0/1663111002370?e=1682553600&v=beta&t=GBQpzlmqkRVdWfK7uHTg2anZ-LIT16pC5acHCEMC1G8" alt="Evan Spiegel" className="leaderboard__picture" />
      <span className="leaderboard__name">Manal JERRAR</span>
      <span className="leaderboard__value">9.700<span>MAD</span></span>
    </article>
  </main>
</article>

</div>

    
  )
}

export default ClientsList