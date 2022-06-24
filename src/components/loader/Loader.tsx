import c from './loader.module.css'
import Spinner from '../spinner/Spinner'

const Loader: React.FC = () => {
    return (
        <div className={c.loaderWrapper}>
            {/* <div className={c.ldsHourglass}></div> */}
            <Spinner/>
        </div>

    )
}

export default Loader