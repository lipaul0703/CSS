import Item from "./Item"
const arr = [1, 2, 3, 4]
const newarr = arr.map(item => <Item /> )
// const func = function (x) { return x + 1 }
const List =() => {
    return <div>
        {
            newarr
        }
        {
            newarr
        }
        </div>
}
export default List