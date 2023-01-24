import { Link, useLocation } from "react-router-dom";
import './page/Obl.css'


export default function Breadcrumbs() {
  const location = useLocation()

  let currentLInk = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '' && crumb !== 'en')
    .map(crumb => {
      currentLInk += `/${crumb}`

      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLInk}>{crumb}</Link>
        </div>
      )
    })

  return <div className='breadcrumbs'>
    {crumbs}
  </div>
}