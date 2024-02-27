import React from 'react'
const Table = () => {
    return(
    <table className="table table-hover ">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">User</th>
                <th scope="col">Country</th>
                <th scope="col">Usage</th>
                <th scope="col">payment Method</th>
                <th scope="col">Activity</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr>
                <th scope="row">1</th>
                <td>Yiorgos Avraamu
                    New | Registered: Jan 1, 202</td>
                <td>America</td>
                <td>50%</td>
                <td>Mastercard</td>
                <td>Last login<br />
                    5 minutes ago</td>
            </tr>

            <tr>
                <th scope="row">2</th>
                <td>Avram Tarasios
                    Recurring | Registered: Jan 1, 2021</td>
                <td>Brazil</td>
                <td>22%</td>
                <td>VISA</td>
                <td>Last Login<br />10 Sec Ago</td>
            </tr>

            <tr>
                <th scope="row">3</th>
                <td >
                    Quintin Ed
                    New | Registered: Jan 1, 2021</td>
                <td>India</td>
                <td>74%</td>
                <td>Stripe</td>
                <td>Last login<br />
                    1 hour ago</td>
            </tr>

            <tr>
                <th scope="row">4</th>
                <td>Agapetus Tadeáš
                    New | Registered: Jan 1, 2021</td>
                <td>Russia</td>
                <td>98%</td>
                <td>Paypal</td>
                <td>Last login<br />
                    Last month</td>
            </tr>


            <tr>
                <th scope="row">5</th>
                <td>Friderik Dávid
                    New | Registered: Jan 1, 2021</td>
                <td>China</td>
                <td>22%</td>
                <td>apple pay</td>
                <td>Last login<br />
                    Last week</td>
            </tr>


            <tr>
                <th scope="row">6</th>
                <td>Avram Tarasios
                    Recurring | Registered: Jan 1, 2021</td>
                <td>Spain</td>
                <td>43%</td>
                <td>Unidentified</td>
                <td>Last login<br />
                    Last week</td>
            </tr>


        </tbody>
    </table>
    );
}
export default Table