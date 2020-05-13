import  React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'

export const App = () => {
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
    }
    return (
        <div>
            que linda aplicación hecha en React.js
        <ul>
            {
                loaderList.map((item) => {
                    <Loader {...item} key={item.id}/>
                })
            }
        </ul>
        <button onClick={handleClick}> Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}


