import c from './loader.module.css'

const Loader: React.FC = () => {
    return (
        <div className={c.loaderWrapper}>
            <div className={c.ldsHourglass}></div>
        </div>

    )
}

export default Loader