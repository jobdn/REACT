import React from 'react'
import { Button } from '../shared/Button'
import { Title } from './Title'

export const StatisticsCheck = () => {

  const [titleNum, setTitleNum] = React.useState(0);

  const setTimeDependTitle = () => {
    if(sessionStorage.getItem("titleNum")) {
      console.log(titleNum);
      setTitleNum(sessionStorage.getItem("titleNum"));
    } else {
      let titleNum;
      const currentSec = new Date().getSeconds();
      if( currentSec < 20 ) {
        titleNum = 0;
      } else if (currentSec < 40) {
        titleNum = 1;
      } else {
        titleNum = 2;
      }
      sessionStorage.setItem("titleNum", titleNum);
    }
  }

  React.useEffect(() => {
    setTimeDependTitle();
  }, []);

  const handleLoginClick = () => {
    console.log("login-click");
    window.ym(89940271,'reachGoal','login-click');    
  }

  return (
    <>
      <Title titleNumber={titleNum}/>
      
      <Button onClick={handleLoginClick} btnLabel={"login"}></Button>
    </>
  )
}
