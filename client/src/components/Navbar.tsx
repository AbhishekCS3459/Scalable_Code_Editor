import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Marquee from "react-fast-marquee";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CodeIcon from "@mui/icons-material/Code";
import { Badge, LinearProgress } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { showProgressSel } from "@/selectors/showProgressSel";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react";
import { sign } from "crypto";
const menuOptions = ["Home", "Problems", "Contest", "Discuss", "Interview"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const DemoMessages = [
  {
    id: 1,
    user: "John Doe",
    value: "Hello World",
    timestamp: "2023-11-24T08:30:00",
    type: "text",
  },
  {
    id: 2,
    user: "ChatGPT",
    value: "Hi John! How are you today?",
    timestamp: "2023-11-24T08:32:00",
    type: "text",
  },
  {
    id: 3,
    user: "John Doe",
    value: "I'm doing well, thank you! How about you?",
    timestamp: "2023-11-24T08:35:00",
    type: "text",
  },
  {
    id: 4,
    user: "ChatGPT",
    value: "I'm just a computer program, but I'm here to assist you!",
    timestamp: "2023-11-24T08:37:00",
    type: "text",
  },
  {
    id: 5,
    user: "John Doe",
    value: "That's interesting! What can you do?",
    timestamp: "2023-11-24T08:40:00",
    type: "text",
  },
  {
    id: 6,
    user: "ChatGPT",
    value:
      "I can help answer questions, provide information, or just chat with you. Feel free to ask me anything!",
    timestamp: "2023-11-24T08:42:00",
    type: "text",
  },
  {
    id: 7,
    user: "John Doe",
    value: "That's awesome! Can you also do calculations?",
    timestamp: "2023-11-24T08:45:00",
    type: "text",
  },
  {
    id: 8,
    user: "ChatGPT",
    value:
      "Absolutely! I can handle various calculations, from simple arithmetic to more complex equations.",
    timestamp: "2023-11-24T08:47:00",
    type: "text",
  },
  {
    id: 9,
    user: "John Doe",
    value: "Great! Can you calculate the square root of 144?",
    timestamp: "2023-11-24T08:50:00",
    type: "text",
  },
  {
    id: 10,
    user: "ChatGPT",
    value: "Sure, the square root of 144 is 12.",
    timestamp: "2023-11-24T08:52:00",
    type: "text",
  },
  {
    id: 11,
    user: "ChatGPT",
    value: "Sure, the square root of 144 is 12.",
    timestamp: "2023-11-24T08:52:00",
    type: "text",
  },
  {
    id: 12,
    user: "ChatGPT",
    value: "Sure, the square root of 144 is 12.",
    timestamp: "2023-11-24T08:52:00",
    type: "text",
  },
  {
    id: 13,
    user: "ChatGPT",
    value: "Sure, the square root of 144 is 12.",
    timestamp: "2023-11-24T08:52:00",
    type: "text",
  },
  {
    id: 14,
    user: "ChatGPT",
    value: "Sure, the square root of 144 is 12.",
    timestamp: "2023-11-24T08:52:00",
    type: "text",
  },
];

function NavBar() {
  const router = useRouter();
  const { data: session } = useSession();

  const isProgressVisible = useRecoilValue(showProgressSel);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [messages, setMessages] = React.useState<string[]>([]);
  const [isLogin, setIsLogin] = React.useState<string>("Login");
  const [inputMessage, setInputMessage] = React.useState<string>("");
  const [imageUrl, setImageUrl] = React.useState<string>(
    "/static/images/avatar/2.jpg"
  );

  // const socket = new WebSocket("ws://localhost:3001");

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [ismessageBar, setIsMessageBar] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleMessagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMessageBar(event.currentTarget);
  };

  const handleCloseNavMenu = (page: String) => {
    router.push(`/${page === "Home" ? "" : page.toLowerCase()}`);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMessage = () => {
    setIsMessageBar(null);
  };
  React.useEffect(() => {
    // Connection opened
    const handleOpen = (event: any) => {
      console.log("WebSocket connected in client");
    };

    // const handleMessage = (event: any) => {
    //   try {
    //     // Check if the connection is still open
    //     // if (socket.readyState === WebSocket.OPEN) {
    //     //   console.log("message in client: ");
    //     //   const receivedMessage = event.data;

    //     //   console.log("Message from server: ", receivedMessage);

    //     //   setMessages((prevMessages) => [
    //     //     ...prevMessages,
    //     //     `Server: ${receivedMessage}`,
    //     //   ]);
    //     // }
    //   // } catch (error) {
    //   //   console.error("Error processing message:", error);
    //   // }
    // };

    const handleError = (error: any) => {
      console.error("WebSocket error:", error);
    };

    const handleClose = (event: any) => {
      console.log("WebSocket disconnected");
    };

    // socket.addEventListener("open", handleOpen);
    // socket.addEventListener("message", handleMessage);
    // socket.addEventListener("error", handleError);
    // socket.addEventListener("close", handleClose);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      // socket.removeEventListener("open", handleOpen);
      // socket.removeEventListener("message", handleMessage);
      // socket.removeEventListener("error", handleError);
      // socket.removeEventListener("close", handleClose);
      // socket.close();
    };
  }, [messages]);

  React.useEffect(() => {
    if (session?.user) {
      setIsLogin("Logout");
      setImageUrl(session?.user?.image || "");
    } else {
      setIsLogin("Login");
    }
  }, [session?.user]);

  React.useEffect(() => {
    console.log("session");
    localStorage.setItem("user", JSON.stringify(session?.user));
    console.log(session?.user);
  }, []);
  return (
    <AppBar color="success" position="static" style={{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontWeight: "bold",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "orange",
              textDecoration: "none",
            }}
          >
            CHEATCODE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuOptions.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page);
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CodeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CHEATCODE {}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuOptions.map((page) => (
              <MenuItem
                key={page}
                onClick={() => {
                  handleCloseNavMenu(page);
                }}
                sx={{
                  mx: 4,
                  my: 2,
                  color: "white",
                  display: "block",
                }}
                className="hover:text-gray-400 font-extrabold font-sans text-lg hover:cursor-pointer hover:underline-offset-0"
              >
                {page}
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, gap: 2 }}>
            <Tooltip title="Open Github">
              <Link
                href="https://github.com/AbhishekCS3459/Scalable_Code_Editor.git"
                target="_blank"
              >
                <IconButton sx={{ p: 0 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    className="mr-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Open settings" className="mr-5">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={imageUrl} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open Messages">
              <Badge
                color="error"
                badgeContent={92}
                onClick={handleMessagesMenu}
              >
                <MailIcon />
              </Badge>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Button
                    onClick={() => {
                      if (!session?.user) {
                        signIn();
                      } else {
                        signOut();
                      }
                    }}
                  >
                    <Typography textAlign="center">
                      {setting === "Logout" ? isLogin : setting}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              sx={{ mt: "45px", overflow: "auto", maxHeight: "400px" }}
              id="notificatio-ebar"
              anchorEl={ismessageBar}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(ismessageBar)}
              onClose={handleCloseUserMessage}
            >
              {DemoMessages.map((messages) => (
                <MenuItem key={messages.id} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{messages.value}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <LinearProgress color="warning" hidden={isProgressVisible} />
      <Marquee
      speed={40}
      delay={0}
      loop={0}
      gradientWidth={200}
      gradientColor="248 251 253"
      >
        <strong className="text-lg text-red-400">
          The Backend of this code Editor requires costing, you can access the
          complete code with demo in Docker environment in the GitHub icon above.
        </strong>
      </Marquee>
    </AppBar>
  );
}
export default NavBar;
function setAnchorElNav(arg0: null) {
  throw new Error("Function not implemented.");
}
