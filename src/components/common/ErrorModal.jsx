import { FaExclamationTriangle} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import '../../assets/styles/ErrorModal.css'

export default function ErrorModal({show, msg}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (show) {
        setIsVisible(true);

        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
  
        return () => clearTimeout(timer);
      }
    }, [show]);

    return (
        <div className={`error_modal ${isVisible ? 'show' : ''}`}>
            <span style={{height: "17px"}}><FaExclamationTriangle/></span>
            <span>{msg}</span>
        </div>
    )
}