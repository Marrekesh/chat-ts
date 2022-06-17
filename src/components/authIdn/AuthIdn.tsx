import c from './authidn.module.css'

const AuthIdn = () => {

        return (

            <div className={c.wrapper}>
                <img className={c.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlM2kIE4tHcIyslyWQHEwFyzGR6ZFuzXYVkhkoDkpmIT1mFYad29yHtnTs0ixjm0b-Vk&usqp=CAU" alt="user" />
                <div className="info">
                    <div className="named">
                        <span className={c.name}>Doronin</span>
                        <span className={c.name}>Dmytro</span>
                        <span className={c.name}>Romanovich</span>
                    </div>
                    <div className={c.status}>
                        <div className={c.statusText}>Avaliable</div> 
                        <div className={c.statusArrow}>&lsaquo;</div>
                    </div>
                </div>
            </div>
        )

    }

export default AuthIdn