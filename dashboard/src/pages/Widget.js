import React from 'react'
import { Card1, Card2, Card3, Card4 } from '../Header/Card1'
import { Card, Card5, Card6, Card7 } from '../Header/Card'
const Widget = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap" }}>
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
            </div>

            <div style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap"  }}>
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
            </div>

            <div style={{ display: "flex", justifyContent: "space-around",marginTop:"40px",flexWrap:"wrap"  }}>
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
            </div>
        </>


    );
}
export default Widget