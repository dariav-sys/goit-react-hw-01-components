import React from "react";
import data from "../data/data.js";

import Profile from "./profile/Profile.js";
import Statistics from "./statistics/Statistics.js";
import FriendList from "./friendList/FriendList.js";
import TransactionHistory from "./transactions/Transactions.js";


const App = () => {
    // return (<Profile        
    //     {...data.user}
    // />);

    // return (<Statistics title="Upload stats" stats={data.stats} />)

    // return (<FriendList friends={data.friends}/>)

    return <TransactionHistory items={data.transactions} />
}

export default App;