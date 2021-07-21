import classes from './Layout.module.css';
import Mainnav from '../Mainnav.js';

function Layout (props) {
 return <div>
     <Mainnav />
     <main className={classes.main} >
      {props.children}
     </main>
 </div>

}

export default Layout;