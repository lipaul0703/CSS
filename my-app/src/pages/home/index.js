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
    
    var bigimg = document.getElementById('bigimg');
    var bigpic = document.getElementById('bigpic');
    var p = document.getElementById('p');
    function open(event){
        bigpic.style.display = 'block';
        var id = event.target.id;
        bigimg.src = document.getElementById(id).src;
        p.innerHTML = datas[id].desc;
        console.log(datas);
        bigpic.style.zIndex = '1';
    }
    function close(){
        bigpic.style.display = 'none';
        bigpic.style.zIndex = '5';
    }
    return <div className='container'>
            <div id='bigpic' onClick={close} style={{
                display:`flex`,
                justifyItems:`center`,
                alignItems:`center`,
                width:`100%`,
                height:`100vh`,
                position:`fixed`,
                display:`none`,
                opacity:`0.9`,
                top:`0px`,
                left:`0px`,
                backgroundColor:"black",
                }}>
                <img id='bigimg' style={{
                display:`inline-block`,
                float:`left`,
                width:`400px`,
                height:`400px`,
                margin:`80px 0px 0px 20px `,
                }} src='https://picsum.photos/600/600?random=11' alt="" />
                <p id='p' style={{
                    margin:`80px 50px 0px 0px`,
                    fontSize:`40px`,
                    color:`white`,
                }}>default</p>
            </div>
            
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
                <div className='index'></div>
                <div className='time'>
                    {App(20)}
                </div>
            </div>
        </div>
        <div className='boxs'>
            <div className='box1 box'>
                <button>selector_1</button>
                <button>selector_2</button>
                <button>selector_3</button>
                <button>selector_4</button>
                <button>selector_5</button>
                <button>selector_6</button>
            </div>
            <div className='box2 box'>
            {datas.map(item => {
                        return  <div className='pic'  onClick={open}>
                            <img key={item.id} className='img' id={item.id}  src={item.img}/>
                            <h1>{item.title}</h1>
                            <p>TWD{item.price}</p>
                            <h2 id={'p'+item.id}>{item.desc}</h2>
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