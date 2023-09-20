import React from 'react';

import arrow from '../assets/arrow.svg';
import dashboard from '../assets/dashboard.svg';
import cmdb from '../assets/cmdb.svg';
import book from '../assets/book.svg';
import report from '../assets/report.svg';
import monitoring from '../assets/monitoring.svg';
import authomatization from '../assets/authomatization.svg';
import admin from '../assets/admin.svg';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav_element">
        {/* Дашборд */}
        <div className="nav_element_block">
          <div className="info">
            <img src={dashboard} alt="dashboard" />
            <span>Дашборд</span>
          </div>
          <img src={arrow} alt="arrow" />
        </div>
        {/* CMDB */}
        <div className="nav_element">
          <div className="nav_element_block">
            <div className="info">
              <img src={cmdb} alt="cmdb" />
              <span>CMDB</span>
            </div>
            <img src={arrow} alt="arrow" />
          </div>

          <div className="subnav">
            <ul>
              <li>Серверы и ПК</li>
              <li>Гипервизоры и вирт. машины</li>
              <li>Принтеры и МФУ</li>
              <li>Сетевые устройства</li>
            </ul>
          </div>
        </div>
        {/* Справочники */}
        <div className="nav_element">
          <div className="nav_element_block">
            <div className="info">
              <img src={book} alt="book" />
              <span>Справочнки</span>
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {/* Отчеты */}
        <div className="nav_element">
          <div className="nav_element_block">
            <div className="info">
              <img src={report} alt="report" />
              <span>Отчеты</span>
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {/* Мониторинг */}
        <div className="nav_element">
          <div className="nav_element_block">
            <div className="info">
              <img src={monitoring} alt="monitoring" />
              <span>Мониторинг</span>
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {/* Автоматизация */}
        <div className="nav_element">
          <div className="nav_element_block">
            <div className="info">
              <img src={authomatization} alt="authomatization" />
              <span>Автоматизация</span>
            </div>

            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {/* Администрирование */}
        <div className="nav_element">
          <div className="nav_element_block">
            <div className="info">
              <img src={admin} alt="admin" />
              <span>Администрирование</span>
            </div>

            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
