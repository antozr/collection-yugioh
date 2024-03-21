"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./style.scss";

const Navbar = () => {

  const [navLink, setNavLink]= useState([true, false, false, false])
  let allLink = [
    {
      name: "Acceuil",
      link: "/",
      index: 0,
    },
    {
      name: "Ajouter",
      link: "/ajouter",
      index: 1,
    },
    {
      name: "Collection",
      link: "/collection",
      index: 2,
    },
    {
      name: "Profil",
      link: "/profil",
      index: 3,
    },
  ];

  let allIcon = [
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__icon"
        
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5578 5.53423C12.6873 4.69887 11.3127 4.69887 10.4422 5.53423L5.81574 9.97357C5.70239 10.0823 5.62614 10.224 5.5978 10.3785C5.04367 13.4004 5.00277 16.494 5.47681 19.5295L5.58933 20.25H8.56579V14.0387C8.56579 13.6244 8.90158 13.2887 9.31579 13.2887H14.6842C15.0984 13.2887 15.4342 13.6244 15.4342 14.0387V20.25H18.4107L18.5232 19.5295C18.9972 16.494 18.9563 13.4004 18.4022 10.3785C18.3739 10.224 18.2976 10.0823 18.1843 9.97357L13.5578 5.53423ZM9.40363 4.45191C10.8546 3.05965 13.1454 3.05965 14.5964 4.45191L19.2228 8.89125C19.5634 9.21804 19.7925 9.64373 19.8776 10.108C20.4621 13.2956 20.5053 16.559 20.0052 19.7609L19.8245 20.9184C19.7497 21.3971 19.3374 21.75 18.8529 21.75H14.6842C14.27 21.75 13.9342 21.4142 13.9342 21V14.7887H10.0658V21C10.0658 21.4142 9.73 21.75 9.31579 21.75H5.14706C4.66258 21.75 4.25029 21.3971 4.17554 20.9184L3.99478 19.7609C3.49473 16.559 3.53788 13.2956 4.12241 10.108C4.20754 9.64373 4.43662 9.21804 4.77719 8.89125L9.40363 4.45191Z"
          fill="#F2E9E4"
        />
      </svg>
    </>,
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__icon"
        
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3851 15.4457C11.7348 17.5684 7.85537 17.4013 5.39858 14.9445C2.76254 12.3085 2.76254 8.03464 5.39858 5.3986C8.03462 2.76256 12.3085 2.76256 14.9445 5.3986C17.4013 7.85538 17.5684 11.7348 15.4457 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4457ZM6.45924 13.8839C4.40899 11.8336 4.40899 8.50951 6.45924 6.45926C8.50949 4.40901 11.8336 4.40901 13.8839 6.45926C15.9326 8.50801 15.9341 11.8287 13.8884 13.8794C13.8869 13.8809 13.8854 13.8823 13.8838 13.8839C13.8823 13.8854 13.8808 13.8869 13.8794 13.8884C11.8287 15.9341 8.50799 15.9326 6.45924 13.8839Z"
          fill="#F2E9E4"
        />
      </svg>
    </>,
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__icon"
        
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z"
          fill="#F2E9E4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z"
          fill="#F2E9E4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z"
          fill="#F2E9E4"
        />
      </svg>
    </>,
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__icon"
        
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.75 7.5C7.75 5.15279 9.65279 3.25 12 3.25C14.3472 3.25 16.25 5.15279 16.25 7.5C16.25 9.84721 14.3472 11.75 12 11.75C9.65279 11.75 7.75 9.84721 7.75 7.5ZM12 4.75C10.4812 4.75 9.25 5.98122 9.25 7.5C9.25 9.01878 10.4812 10.25 12 10.25C13.5188 10.25 14.75 9.01878 14.75 7.5C14.75 5.98122 13.5188 4.75 12 4.75Z"
          fill="#F2E9E4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 14.75C6.75736 14.75 5.75 15.7574 5.75 17V18.1883C5.75 18.2064 5.76311 18.2218 5.78097 18.2247C9.89972 18.8972 14.1003 18.8972 18.219 18.2247C18.2369 18.2218 18.25 18.2064 18.25 18.1883V17C18.25 15.7574 17.2426 14.75 16 14.75H15.6591C15.6328 14.75 15.6066 14.7542 15.5815 14.7623L14.716 15.045C12.9512 15.6212 11.0488 15.6212 9.28398 15.045L8.41847 14.7623C8.39342 14.7542 8.36722 14.75 8.34087 14.75H8ZM4.25 17C4.25 14.9289 5.92893 13.25 8 13.25H8.34087C8.52536 13.25 8.70869 13.2792 8.88407 13.3364L9.74959 13.6191C11.2119 14.0965 12.7881 14.0965 14.2504 13.6191L15.1159 13.3364C15.2913 13.2792 15.4746 13.25 15.6591 13.25H16C18.0711 13.25 19.75 14.9289 19.75 17V18.1883C19.75 18.9415 19.2041 19.5837 18.4607 19.7051C14.1819 20.4037 9.8181 20.4037 5.53927 19.7051C4.79588 19.5837 4.25 18.9415 4.25 18.1883V17Z"
          fill="#F2E9E4"
        />
      </svg>
    </>,
  ];

function killActiveNav(){
  let allActifItem = document.querySelectorAll('.nav__link--actif');
  allActifItem.forEach((el)=>{
    el.classList.remove('nav__link--actif');
  });
}
  function activeNavItem(ind){
    //console.log('je suis clickééééé');
    
    // killActiveNav()
    if (ind === 0 ){
      setNavLink([true, false, false, false]);
    } else if (ind === 1 ){
      setNavLink([false, true, false, false]);
    } else if (ind === 2 ){
      setNavLink([false,false , true, false]);
    } else if (ind === 3 ){
      setNavLink([false, false, false, true]);
    } else{

    }
    
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        {allLink.map((el, key) => (
          <li className="nav__el" key={key} >
            <Link
              href={el.link}
              key={el.index}
              className={navLink[el.index] ? "nav__link nav__link--actif" : "nav__link"}
              replace={true}
              aria-label={"Voici un lien qui se dirige vers " + el.name}
              onClick={()=>{activeNavItem(el.index)}}
            >
             
              {allIcon[el.index]}

              <p className="nav__txt">{el.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
