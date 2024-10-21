import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
export function Navbar() {
    return (
      <nav className="flex items-center justify-between py-4 px-8 bg-white border-b ">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home
            <div className="hidden md:flex space-x-4">
              <a href="/login" className="px-9 py-2  rounded-full border">
                Log in
              </a>
              <a
                href="/signup"
                className="px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                Sign up
              </a>
            </div>
            <button className="md:hidden">Menu</button>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
        <a href="/" className="text-2xl font-bold">
          Thomson P<span className="text-green-500">.</span>
        </a>
      </nav>
    );
  }