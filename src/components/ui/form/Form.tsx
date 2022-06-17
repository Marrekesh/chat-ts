import c from './form.module.css'

interface IForm {
    props?: any[],
    title: string
    children: React.ReactNode
}

const Form = ({children, title, ...props}: IForm) => {
  
  return (

    <div className={c.formWrapper}>
        <h2 className={c.title}>{title}</h2>
        <form className={c.form} {...props}>
            {children}
        </form>
    </div>
  )
}

export default Form