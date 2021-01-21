import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'


const Dashboard =()=>{
    return(
        <div className="w-11/12 mx-auto">
            <div className="flex">
                <div>
                  <img src="/public/image/profile" alt="profile photo" />
                </div>
            </div>
        </div>
    );
}



export default Dashboard;