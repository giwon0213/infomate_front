import styles from './attendUser.module.css';

const AttendUser = (props) => {

    const className  = [styles.btn,''].join(' ');

    return <button
            className={className}
            type={props.type}
            onClick={props.onClick}
            style={props.style}>
            {props.value}
            </button>
}

export default AttendUser;