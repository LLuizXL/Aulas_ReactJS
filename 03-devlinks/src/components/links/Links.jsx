import styles from './Links.module.css'

const Links = ({children, link}) => {
  return (
    <li>
        <a href={link} target='_blank'>{children}</a>
    </li>
  )
}

export default Links