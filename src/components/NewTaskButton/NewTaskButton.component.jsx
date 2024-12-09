import plusSvg from '../../public/svg/plus.svg';

export function NewTaskButton() {
    
    return (
        <button className="add-task box-shadow">
            <img src={plusSvg} alt='plus-svg'/>
        </button>
    )
}