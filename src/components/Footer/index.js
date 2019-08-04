import styles from './styles.scss';
import Logo from './logo.svg';
import { createClassName } from '../helpers';
import { PopoverMenu } from '../Menu';


export const Footer = ({ children, className, ...props }) => (
	<footer className={createClassName(styles, 'footer', {}, [className])} {...props}>
		{children}
	</footer>
);


export const FooterContent = ({ children, className, ...props }) => (
	<div className={createClassName(styles, 'footer__content', {}, [className])} {...props}>
		{children}
	</div>
);


export const PoweredBy = ({ className, ...props }) => (
	<h3 className={createClassName(styles, 'powered-by', {}, [className])} {...props}>
		{I18n.t('Powered by iCloudPortal').split('iCloudPortal')[0]}
		<a href="https://icloudportal.com" target="_blank" rel="noopener noreferrer">
			<Logo className={createClassName(styles, 'powered-by__logo')} width={60} role="img" aria-label="iCloudPortal" />
		</a>
		{I18n.t('Powered by iCloudPortal').split('iCloudPortal')[1]}
	</h3>
);


const handleMouseUp = ({ target }) => target.blur();

const OptionsTrigger = ({ pop }) => (
	<button className={createClassName(styles, 'footer__options')} onClick={pop} onMouseUp={handleMouseUp}>
		{I18n.t('Options')}
	</button>
);


export const FooterOptions = ({ children }) => (
	<PopoverMenu trigger={OptionsTrigger} overlayed>
		{children}
	</PopoverMenu>
);
