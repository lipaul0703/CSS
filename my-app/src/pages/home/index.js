import { useEffect, useState, useRef} from "react";
import React, {Component} from 'react';
import './index.css';
import "./reset.css";

const Home =() => {
    const url = 'https://demojson.herokuapp.com/cart'
    const [datas, setData] = useState([]);
    async function getData(url){
        const res = await fetch(url);
        const repo = await res.json();
        setData(repo);
    }
    useEffect(() => {getData(url)},[])

    //廣告輪播--照片取自網路假圖
    /**
    * @param {*} callback
    * @param {*} interval
    */    
    function useInterval(callback, interval) {
        useEffect(()=> {
            const start = new Date().getTime()
            const I = setInterval(()=>{
                callback(new Date().getTime() - start)
            }, interval)
            return () => clearInterval(I)
        }, [])
    }
    /**
     * @param {*} N
     */
    function useSlider(N, speed = 3000){
        const [slider, setSlider] = useState(0);
        useInterval(diff => {
            setSlider(_ => Math.floor(diff /speed) % N);
        }, 300);
        return slider;
    }
    const ads = [
        'https://picsum.photos/300/100?random=1',
        'https://picsum.photos/300/100?random=2',
        'https://picsum.photos/300/100?random=3',
        'https://picsum.photos/300/100?random=4',
        'https://picsum.photos/300/100?random=5',
        'https://picsum.photos/300/100?random=6',
        'https://picsum.photos/300/100?random=7',
        'https://picsum.photos/300/100?random=8',
        'https://picsum.photos/300/100?random=9',
        'https://picsum.photos/300/100?random=10',
    ]
    const slider = useSlider(ads.length);
    //倒數計時10s
    function App(x) {
        const [seconds, setSeconds] = React.useState(x);
        
        React.useEffect(() => {
          if (seconds > 0) {
              setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds('!!!!!!!!!!!--Time up--!!!!!!!!!!!');
          }
        });
      
        return (
          <div className="App">
              {seconds}
          </div>
        );
    }
      
    function top() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    // var bigpic = document.getElementsByClassName('bigpic');
    // var pic = document.getElementById('pic');
    // pic.onclick = function (){
    //     bigpic.style.display = 'block';
    // }
    // bigpic.onclick = function (){
    //     bigpic.style.display = 'none';
    // }
    // pick function close(){                                                                                                                                                                                                               
    //     bigpic.style.display = 'none' ;
    // }
    // function open(){
    //     bigpic.style.display = 'block';
    // }
    return <div className='container'>
        <div className='search'>
            <input 
                type='text' 
                id='keyword' 
                className='text' 
                placeholder='請輸入商品關鍵字' 
                autocomplete="off"/>
            <input 
                type='button' 
                id='doSearch' 
                className='button' 
                value='找商品'/>
        </div>
        <div className='banner'>
            <div className='scroller'>
                <div className='inner' style={{
                    width: `${ads.length * 100}%`,
                    transform:`translateX(-${100*slider/ads.length}%)`,
                }}>
                    {ads.map(src =>{
                        return <img style={{
                            width: `${100 / ads.length}%`,
                        }} key={src} src={src}/>
                    })}
                </div>
                <div className='index'>imgs_index</div>
                <div className='time'>
                    {App(20)}
                </div>
            </div>
        </div>
        <div className='boxs'>
            <div className='box1 box'>left</div>
            <div className='box2 box'>
                <div id='bigpic' >
                    <img src="" alt="" />
                </div>
            {datas.map(item => {
                        return  <div className='pic'>
                            <img key={item.id} className='img' id={item.id} src={item.img}/>
                            <h1>{item.title}</h1>
                            <p>TWD{item.price}</p>
                            </div> 
                    })}
            </div>
            <div className='box3 box'>
                <div className='gotop'>
                    <button onClick={top}>TOP</button>
                </div>
            </div>
        </div>

    </div>
};
export default Home;