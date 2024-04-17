import { useQuery } from '@apollo/client';
import React from 'react';
import Homepage from '../components/css/home.css';
import image1 from '../assets/member.png'
import image2 from '../assets/spritual.jpg'


const HomePage = () => {
  return (
    <div className="row">
      <div className="side">
        <h2>DEBRE MIHRET ST. MICHAEL ETHIOPIAN ORTHODOX TEWAHEDO CHURCH OF ILLINOIS</h2>
        <p>Our Church is growing in the number of people who attend Sunday worship and in its capacity to provide spiritual services to the parishioners. It provides Divine Liturgy, bible study, spiritual counselling, baptism, Christian matrimonies, visitations of the sick, and assistance for the needy.</p>
       
      </div>
      <div className="main">
        <h2>BIBLE STUDY</h2>
        <img src={image1} alt="Image" style={{height: '200px'}} />
        <p>Holy Matrimony is based on the Bible. (Gen. 1:27,28, 2:18, Mt. 19:4-6). The Canon of the Church requires that before matrimony is affected the following conditions should be met.</p>
        <br />
        <h2>SPIRITUAL COUNSELING</h2>
        <img src={image2} alt="Image" style={{height: '200px'}} />
        <p>የ ደብረ ምህረት ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክሰ ተዋህዶ ቤተ ክርስቲያን የሚያስጨንቃችሁን በእርሱ ላይ ጣሉ የሚለውን አምላካዊ ቃል መሰረት በማድረግ በግልም ሆነ በማህበራዊ ህይወታችነ ለሚያጋጥመን ልዩ ልዩ መንፈሳዊና ስጋዊ ችግሮቸ የምክር አገልግሎት ይሰጣል።</p>
      </div>
    </div>
  );
}

export default HomePage;
