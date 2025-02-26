import styles from './Rodape.module.css'

const Rodape = ({children}) => {
  return (
    <footer>
        <p>
            Feito com ❤️ por <a href='https://github.com/LLuizXL'>{children}</a>
        </p>
    </footer>
  )
}

export default Rodape;