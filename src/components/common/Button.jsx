import '../../assets/styles/Button.css'

export default function Button({textBtn, marginTop, btnOther}) {
    return (
        <div className={`container_button ${btnOther}`} style={{marginTop:marginTop}} >
            <input type="submit" value={textBtn}/>
        </div>
    )
}