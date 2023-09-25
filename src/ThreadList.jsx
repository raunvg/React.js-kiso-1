import { useState } from 'react';
import { useEffect } from 'react';

export const ThreadList = () => {
    const[thread,setThread] = useState([]);
    let threadArray = [];
    async function getThreadList()  {
        const url = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads';
        const getData = await fetch(url,{
            method : 'GET',
        })
       const response = await getData.json();
       for(let a = 0; a < response.length; a++){
        threadArray.push(response[a]);
       }
       setThread(threadArray);
    }   
    useEffect(() => {
        getThreadList();
    }, []);
   const newThreadList = thread.map((newThread) => {
       return <a href="" key={newThread.id}><li>{newThread.title}</li></a>
    });    
    return <div className = 'threadList'>
            <h2>新着スレッド</h2>
            <ul>
                {newThreadList}
            </ul>
           </div>
  }