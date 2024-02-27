import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CreateIcon from "@mui/icons-material/Create";
import ExtensionIcon from "@mui/icons-material/Extension";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import PieChartIcon from "@mui/icons-material/PieChart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import CalculateIcon from "@mui/icons-material/Calculate";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import BasicExample from "./Nav.js";
// import { Card,Card5,Card6,Card7 } from './Card.js'
// import { Card1, Card2, Card3, Card4 } from './Card1.js'
// import Table from './Table.js';
// import Footer from './Footer.js';
const Side = () => {
    return (
        <>
            <div className="cont">
                <div className="sidebar">
                    <header>
                        <p>Core-ui React</p>
                    </header>
                    <ul>
                        <li>
                            <Link to="dashboard">
                                {" "}
                                <SpeedIcon /> Dashboard
                                <span className="badge text-bg-primary" id="dash">
                                    New
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="color">
                                <WaterDropIcon /> Colors
                            </Link>
                        </li>
                        <li>
                            <Link to="typo">
                                <CreateIcon /> Typography
                            </Link>
                        </li>
                        <li>
                            <Link to="base">
                                <ExtensionIcon /> Base
                            </Link>
                        </li>
                        <li>
                            <Link to="btn">
                                <NavigationIcon />
                                Buttons
                            </Link>
                        </li>
                        <li>
                            <Link to="formm">
                                <FormatAlignJustifyIcon /> Forms
                            </Link>
                        </li>
                        <li>
                            <Link to="chart">
                                <PieChartIcon /> Charts
                            </Link>
                        </li>
                        <li>
                            <Link to="icon">
                                <StarBorderIcon /> Icons
                            </Link>
                        </li>
                        <li>
                            <Link to="Noti">
                                <AddAlertIcon /> Notification
                            </Link>
                        </li>
                        <li>
                            <Link to="widget">
                                <CalculateIcon /> Widgets{" "}
                                <span className="badge text-bg-primary" id="dash">
                                    New
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="page">
                                <StarBorderIcon /> Pages
                            </Link>
                        </li>
                        <li>
                            <Link to="docs">
                                <InsertDriveFileIcon /> Docs
                            </Link>
                        </li>
                        <li>
                            <Link to="state">State</Link>
                        </li>
                    </ul>
                </div>

                {/* MAIN */}
                <div className="main">
                    <BasicExample />
                    <Outlet />
                    {/*
                    
                    <div id='cri'>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card5 />
                        </div>
                        <div>
                            <Card6 />
                        </div>
                        <div>
                            <Card7 />
                        </div>
                    </div><br />
            
                    <div>
                        <Table />
                    </div>


                    <div id='cr1'>
                        <div>
                            <Card1 />
                        </div>
                        <div>
                            <Card2 />
                        </div>
                        <div>
                            <Card3 />
                        </div>
                        <div>
                            <Card4 />
                        </div>
                    </div><br/>

                    <div><Table/></div>
                    
                    <div><Footer /></div> */}
                </div>
            </div>
        </>
    );
};
export default Side;
