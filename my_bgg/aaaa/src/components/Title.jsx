import style from "./Title.module.css"

export const Title = (props) => {
    return(
        <p className={style.titleText}>{props.title}</p>
    )
}