import React from 'react'
import { Button } from '../shared/Button'
import { Title } from './Title'

export const StatisticsCheck = () => {

  const [titleNum, setTitleNum] = React.useState(0);

  const setCurrentTitle = () => {
    if(sessionStorage.getItem("titleNum")) {
      console.log("title in session: ", sessionStorage.getItem("titleNum"));
      setTitleNum(+sessionStorage.getItem("titleNum"));
    } else {
      let currentTitleNum;
      const currentSec = new Date().getSeconds();
      if( currentSec < 20 ) {
        currentTitleNum = 0;
      } else if (currentSec < 40) {
        currentTitleNum = 1;
      } else {
        currentTitleNum = 2;
      }
      sessionStorage.setItem("titleNum", titleNum);
      setTitleNum(currentTitleNum);
    }
  }

  React.useEffect(() => {
    setCurrentTitle();
  }, []);

  const handleLoginClick = () => {
    console.log("login-click");
    window.ym(89940271,'reachGoal','login-click');    
  }

  console.log("titleNum in body: ", titleNum);

  return (
    <>
      <Title titleNumber={titleNum}/>
      
      <Button onClick={handleLoginClick} btnLabel={"login"}></Button>
    </>
  )
}
