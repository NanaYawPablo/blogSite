import { useState, useEffect} from "react"
import { ArrowUpCircleFill } from "react-bootstrap-icons";


const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    // window.addEventListener('scroll', checkScrollTop) // adding EventListener in useEffect instead

    useEffect(() => {
      window.addEventListener('scroll', checkScrollTop)
      // returned function will be called on component unmount 
      return () => {
        window.removeEventListener('scroll', () => {})
        // console.log('Listener aborted');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return (
          <ArrowUpCircleFill color="#b39906" className="scrollTop" onClick={scrollTop} style={{height: 60, display: showScroll ? 'flex' : 'none'}}/>
    );

}
 
export default ScrollToTop;