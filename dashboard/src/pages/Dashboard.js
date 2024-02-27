import React from 'react'
import { Card, Card5, Card6, Card7 } from '../Header/Card.js'
import { Card1, Card2, Card3, Card4 } from '../Header/Card1.js'
import Table from '../Header/Table.js';
const Dashboard = () => {
    return (
        <div>
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
            </div><br />

            <div><Table /></div>
            {/* <BasicExample/> */}
        </div>
    )
}

export default Dashboard
