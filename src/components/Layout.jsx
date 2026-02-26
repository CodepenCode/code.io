import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationBar />
            <main className="flex-grow-1">
                <Container className="h-100">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;