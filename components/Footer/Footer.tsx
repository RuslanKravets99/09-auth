import css from './Footer.module.css'

const Footer = () => (<footer className={css.footer}>
    <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
            <p>Developer: Kravets Ruslan</p>
            <p>
                Contact us:
                <a href="mailto:rus.kravets.9928@gmail.com">rus.kravets.9928@gmail.com</a>
            </p>
        </div>
    </div>
</footer>)

export default Footer

