import '../../assets/styles/Container.css'

export default function Container({children, padding}) {
    return (
        <div className='container' style={{paddingTop: padding}}>
            {children}
        </div>
    )
}