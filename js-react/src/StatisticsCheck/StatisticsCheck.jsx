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

  return (
    <>
      <Title titleNumber={titleNum}/>
      
      <Button btnLabel={"login"}></Button>
    </>
  )
}
