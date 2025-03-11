import  './SocialLinks.module.css'

const SocialLinks = ({link, icon}) => {
  return (
    <a href={link} target='_blank'>
      <ion-icon name={icon}></ion-icon>
    </a>
  )
}

export default SocialLinks