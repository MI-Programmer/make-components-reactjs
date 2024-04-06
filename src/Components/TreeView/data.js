const menus = [
  // s
  {
    label: "Home",
    to: "",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Random data",
                to: "",
                children: [
                  {
                    label: "Random data 2",
                    to: "",
                  },
                  {
                    label: "Random data 3",
                    to: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Components React 1-10",
    to: "",
    children: [
      {
        label: "1.Menu Recursive",
        to: "#",
      },
      {
        label: "2.Acordian",
        to: "accordian",
      },
      {
        label: "3.Image Slider",
        to: "imageSlider",
      },
      {
        label: "4.Star Slider",
        to: "starSlider",
      },
      {
        label: "5.Load More Data",
        to: "loadMoreData",
      },

      {
        label: "6.Modal Popup",
        to: "modalTest",
      },
      {
        label: "7.QR Code Generator",
        to: "qrCodeGenerator",
      },
      {
        label: "8.Search Users",
        to: "searchUsers",
      },
      {
        label: "9.Light Dark Mode",
        to: "lightDarkMode",
      },
      {
        label: "10.TicTacToe",
        to: "ticTacToe",
      },
    ],
  },
];

export default menus;
