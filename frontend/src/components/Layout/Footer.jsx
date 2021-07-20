import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';



function Footer() {

    return (
        <footer>
            <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                <Typography variant="body1" color="inherit" >
                    © 2021 Student Management System
                </Typography>
                </Toolbar>
            </Container>
            </AppBar>
        </footer>
    )
}

export default Footer;