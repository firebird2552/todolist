import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="PageHeader">
      <section className="Branding">
        <img src="https://via.placeholder.com/150" width="50px" />
      </section>
      <section className="PageTitle">TODO: List</section>
      <section className="MainNavigation">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="list">Todo List</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};
