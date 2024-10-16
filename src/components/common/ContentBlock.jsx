import '../../assets/styles/ContentBlock.css'

export default function ContentBlock({title, text}) {
    return (
        <section className='content_block'>
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
    )
}