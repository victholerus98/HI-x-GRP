import React from "react";

const Card = () => {
  return (
    <div className="card">
      <h2>Adaptation Fund</h2>
      <img src={require("../assets/adaptation_fund.png")} alt="logo" />
      <p>
        A a member-based NGO comprised of regional and global development banks,
        government agencies and ministries, diverse non-governmental
        organizations (NGOs), utilities, academia, and the private sector
        focused on sustainable water resources management — even as climate
        change alters the global hydrological cycle. Work covers a number of
        areas related to climate change adaptation: science, policy, economics,
        engineering, and more. AGWA is focused on how to help experts, decision
        makers, and institutions in the water community work more effectively.
      </p>
      <div>
        <button className="tag">Global</button>
        <a href="/">
          <img src={require("../assets/homebtn.png")} alt="home button" />
        </a>
      </div>
    </div>
  );
};

export default Card;
