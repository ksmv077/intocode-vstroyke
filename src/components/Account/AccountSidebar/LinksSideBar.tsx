import React from 'react';
import styles from "./AccountSidebar.module.scss";
import ExtensionIcon from "@mui/icons-material/Extension";
import {Link} from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Divider from "@mui/material/Divider";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const LinksSideBar = () => {
    return (
        <div>
            <div className={styles.sidebar}>
                <ul>
                    <li className={styles.sidebar__link}>
                        <ExtensionIcon/>
                        <Link to={'/account'}>Мои объявления</Link>
                    </li>
                    <li className={styles.sidebar__link}>
                        <ShoppingBagIcon/>
                        <Link to={'/account/orders'}>Мои заказы</Link>
                    </li>
                    <li className={styles.sidebar__link}>
                        <RateReviewIcon/>
                        <Link to={'/account'}>Мои отзывы</Link>
                    </li>
                    <li className={styles.sidebar__link}>
                        <ThumbUpAltIcon/>
                        <Link to={'/account/favorites'}>Избранное</Link>
                    </li>
                    <Divider/>
                    <li className={styles.sidebar__link}>
                        <MessageIcon/>
                        <Link to={'/account'}>Сообщения</Link>
                    </li>
                    <li className={styles.sidebar__link}>
                        <NotificationsIcon/>
                        <Link to={'/account'}>Уведомления</Link>
                    </li>
                    <Divider/>
                    <li className={styles.sidebar__link}>
                        <ManageAccountsIcon/>
                        <Link to={`/account/settings`}>Настройки профиля</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LinksSideBar;