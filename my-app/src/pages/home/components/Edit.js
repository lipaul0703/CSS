const Edit =() => {
    return <div>
        <div className="edit">
            <h1>標題</h1>
            <input type="text" placeholder="輸入標題" />
            <p>內容</p>
            <input type="text" placeholder="輸入內容" />
            <p>日期</p>
            <input type="date" />
            <p>時間</p>
            <input type="time" />
        </div>
        <div className="btn">
            <button class="add">新增</button>
            <button class="del">刪除</button>
        </div>
    </div>
        
}
export default Edit