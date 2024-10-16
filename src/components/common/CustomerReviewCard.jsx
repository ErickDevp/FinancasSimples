import {  FaUserCircle, FaQuoteLeft  } from 'react-icons/fa';
import '../../assets/styles/CustomerReviewCard.css'

export default function CustomerReviewCard({feedback, name}) {
    return (
        <section className='review_card'>
            <p className='icon_feedback icon_aspas'>
                <FaQuoteLeft/>
            </p>
            <article className='feedback'>{feedback}</article>
            <p className='icon_feedback'>
                <FaUserCircle/>
            </p>
            <p className='name'>{name}</p>
        </section>
    )
}