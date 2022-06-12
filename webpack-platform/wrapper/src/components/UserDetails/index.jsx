import { useState } from "react";
import Icon from "../Icon";
import {  iconPerson } from '../Icon/icons.js';
import googlePlayIcon from "./images/google-play.svg";
import appStoreIcon from "./images/app-store.svg";
import "./style.css";

export default function UserDetails({ user }) {
    const [showInfoCard, setShowInfoCard] = useState(false);


    return (
        <section id="user-details">

            <section id="info">
                <Icon id="avatar" sizeByCss icon={iconPerson} />
                <h3 id="customer-name">{user.firstName} {user.lastName}</h3>
                <p id="customer-company">{user.companyName}</p>
                <p id="customer-id">Customer ID: {user.customerId}</p>
                <p id="customer-last-sign">Last Sign In: {user.lastLogin}</p>
            </section>
            <section id="customer-service">
                <p>Email our support Team</p>
                <a href="/" target="_blank" rel="noopener noreferrer">support@guamgam.com</a>
            </section>
            <footer >
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={appStoreIcon} alt="app store" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <img src={googlePlayIcon} alt="google play" />
                </a>
            </footer>
        </section>);


}