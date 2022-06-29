import c from './loader.module.css'
import Spinner from '../spinner/Spinner'
import spin from '../spinner/spinner.module.css'

const Loader: React.FC = () => {
    return (
        <div className={c.loaderWrapper}>
            {/* <div className={c.ldsHourglass}></div> */}
            <Spinner className={spin.spinner}/>
        </div>

    )
}

export default Loader